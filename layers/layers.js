var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Merged_Alpha_List_Final_1 = new ol.format.GeoJSON();
var features_Merged_Alpha_List_Final_1 = format_Merged_Alpha_List_Final_1.readFeatures(json_Merged_Alpha_List_Final_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_Alpha_List_Final_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_Alpha_List_Final_1.addFeatures(features_Merged_Alpha_List_Final_1);
var lyr_Merged_Alpha_List_Final_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_Alpha_List_Final_1, 
                style: style_Merged_Alpha_List_Final_1,
                popuplayertitle: 'Merged_Alpha_List_Final',
                interactive: true,
    title: 'Merged_Alpha_List_Final<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_0.png" /> Amy Keenum-Potts<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_1.png" /> Anna Walters<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_2.png" /> Arglidian McElheney<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_3.png" /> Brandi Harris<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_4.png" /> Brenda Jackson<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_5.png" /> Chantelle Boone<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_6.png" /> Donna Ross<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_7.png" /> Erin Loupe<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_8.png" /> Jeyza Cartagena<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_9.png" /> Jonathan Marrero<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_10.png" /> Kat Butts<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_11.png" /> Kat Crawford<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_12.png" /> Kimberly Tunstall<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_13.png" /> La Howard<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_14.png" /> Melissa Valley<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_15.png" /> Sharon Waldo<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_16.png" /> Shirley Greer<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_17.png" /> T\'Arra Brown<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_18.png" /> Tere Dykes<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_19.png" /> Tina Ard<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_20.png" /> Trisha Chauvin<br />\
    <img src="styles/legend/Merged_Alpha_List_Final_1_21.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Merged_Alpha_List_Final_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Merged_Alpha_List_Final_1];
lyr_Merged_Alpha_List_Final_1.set('fieldAliases', {'units': 'units', 'Property': 'Property', 'Unnamed: 2': 'Unnamed: 2', 'MGR': 'MGR', 'APM': 'APM', 'COMP SPEC': 'COMP SPEC', 'address': 'address', 'city': 'city', 'ST': 'ST', 'zip': 'zip', 'phone': 'phone', 'email': 'email', 'Regional MGR': 'Regional MGR', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Region_Color': 'Region_Color', });
lyr_Merged_Alpha_List_Final_1.set('fieldImages', {'units': 'TextEdit', 'Property': 'TextEdit', 'Unnamed: 2': 'Range', 'MGR': 'TextEdit', 'APM': 'TextEdit', 'COMP SPEC': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'ST': 'TextEdit', 'zip': 'Range', 'phone': 'TextEdit', 'email': 'TextEdit', 'Regional MGR': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Region_Color': 'TextEdit', });
lyr_Merged_Alpha_List_Final_1.set('fieldLabels', {'units': 'no label', 'Property': 'no label', 'Unnamed: 2': 'no label', 'MGR': 'no label', 'APM': 'no label', 'COMP SPEC': 'no label', 'address': 'no label', 'city': 'no label', 'ST': 'no label', 'zip': 'no label', 'phone': 'no label', 'email': 'no label', 'Regional MGR': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Region_Color': 'no label', });
lyr_Merged_Alpha_List_Final_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});