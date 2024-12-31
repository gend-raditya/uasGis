var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Area_perumahan_1 = new ol.format.GeoJSON();
var features_Area_perumahan_1 = format_Area_perumahan_1.readFeatures(json_Area_perumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_perumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_perumahan_1.addFeatures(features_Area_perumahan_1);
var lyr_Area_perumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_perumahan_1, 
                style: style_Area_perumahan_1,
                popuplayertitle: 'Area_perumahan',
                interactive: true,
                title: '<img src="styles/legend/Area_perumahan_1.png" /> Area_perumahan'
            });
var format_perumahan_2 = new ol.format.GeoJSON();
var features_perumahan_2 = format_perumahan_2.readFeatures(json_perumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan_2.addFeatures(features_perumahan_2);
var lyr_perumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan_2, 
                style: style_perumahan_2,
                popuplayertitle: 'perumahan',
                interactive: true,
                title: '<img src="styles/legend/perumahan_2.png" /> perumahan'
            });
var format_Fasilitas1_3 = new ol.format.GeoJSON();
var features_Fasilitas1_3 = format_Fasilitas1_3.readFeatures(json_Fasilitas1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas1_3.addFeatures(features_Fasilitas1_3);
var lyr_Fasilitas1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas1_3, 
                style: style_Fasilitas1_3,
                popuplayertitle: 'Fasilitas1',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas1_3.png" /> Fasilitas1'
            });
var format_Gerbang_4 = new ol.format.GeoJSON();
var features_Gerbang_4 = format_Gerbang_4.readFeatures(json_Gerbang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gerbang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gerbang_4.addFeatures(features_Gerbang_4);
var lyr_Gerbang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gerbang_4, 
                style: style_Gerbang_4,
                popuplayertitle: 'Gerbang',
                interactive: true,
                title: '<img src="styles/legend/Gerbang_4.png" /> Gerbang'
            });
var format_jalur_joging_5 = new ol.format.GeoJSON();
var features_jalur_joging_5 = format_jalur_joging_5.readFeatures(json_jalur_joging_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalur_joging_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalur_joging_5.addFeatures(features_jalur_joging_5);
var lyr_jalur_joging_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalur_joging_5, 
                style: style_jalur_joging_5,
                popuplayertitle: 'jalur_joging',
                interactive: true,
                title: '<img src="styles/legend/jalur_joging_5.png" /> jalur_joging'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Area_perumahan_1.setVisible(true);lyr_perumahan_2.setVisible(true);lyr_Fasilitas1_3.setVisible(true);lyr_Gerbang_4.setVisible(true);lyr_jalur_joging_5.setVisible(true);lyr_Jalan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Area_perumahan_1,lyr_perumahan_2,lyr_Fasilitas1_3,lyr_Gerbang_4,lyr_jalur_joging_5,lyr_Jalan_6];
lyr_Area_perumahan_1.set('fieldAliases', {'id': 'id', });
lyr_perumahan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Luas': 'Luas', 'Status': 'Status', });
lyr_Fasilitas1_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Fungsi': 'Fungsi', });
lyr_Gerbang_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_jalur_joging_5.set('fieldAliases', {'id': 'id', });
lyr_Jalan_6.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', });
lyr_Area_perumahan_1.set('fieldImages', {'id': '', });
lyr_perumahan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Luas': '', 'Status': '', });
lyr_Fasilitas1_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': '', 'Fungsi': '', });
lyr_Gerbang_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_jalur_joging_5.set('fieldImages', {'id': '', });
lyr_Jalan_6.set('fieldImages', {'id': '', 'Panjang': '', });
lyr_Area_perumahan_1.set('fieldLabels', {'id': 'no label', });
lyr_perumahan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Luas': 'no label', 'Status': 'no label', });
lyr_Fasilitas1_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Fungsi': 'no label', });
lyr_Gerbang_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_jalur_joging_5.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'id': 'no label', 'Panjang': 'no label', });
lyr_Jalan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});