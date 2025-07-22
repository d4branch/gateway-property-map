async function fetchExcelData(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

function colorByRVP(rvp) {
    const colorMap = {
        "Valerie": "#e6194b",
        "Chris": "#3cb44b",
        "Megan": "#ffe119",
        "Terry": "#4363d8",
        "Bobby": "#f58231",
        "Jamie": "#911eb4",
        "Kristi": "#46f0f0",
        "Ashley": "#f032e6",
        "Unassigned": "#a9a9a9"
    };
    return colorMap[rvp] || "#000000";
}

function addMarkers(map, data) {
    data.forEach((property) => {
        if (!property.Lat || !property.Long) return;

        const color = colorByRVP(property.RVP);
        const marker = L.circleMarker([property.Lat, property.Long], {
            radius: 8,
            fillColor: color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });

        const popupContent = `
            <b>${property.PropertyName}</b><br>
            City: ${property.City}<br>
            State: ${property.State}<br>
            RVP: ${property.RVP}
        `;
        marker.bindPopup(popupContent);
        marker.addTo(map);
    });
}

window.onload = async () => {
    const map = L.map("map").setView([32.8, -86.6], 6);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);


    const excelUrl = "https://gatewaymgt.sharepoint.com/sites/Intranet/Shared%20Documents/Gateway/Property%20Lists/001%20Property%20List%20by%20RVP/Properties%20by%20RVP.xlsx";
    try {
        const properties = await fetchExcelData(excelUrl);
        addMarkers(map, properties);
    } catch (error) {
        console.error("Failed to load Excel data:", error);
    }
};