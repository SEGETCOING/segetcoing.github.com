var wms_layers = [];
var format_Municipios_0 = new ol.format.GeoJSON();
var features_Municipios_0 = format_Municipios_0.readFeatures(json_Municipios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipios_0.addFeatures(features_Municipios_0);var lyr_Municipios_0 = new ol.layer.Vector({
                source:jsonSource_Municipios_0, 
                style: style_Municipios_0,
                title: '<img src="styles/legend/Municipios_0.png" /> Municipios'
            });var format_vertederos_1 = new ol.format.GeoJSON();
var features_vertederos_1 = format_vertederos_1.readFeatures(json_vertederos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertederos_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_vertederos_1.addFeatures(features_vertederos_1);var lyr_vertederos_1 = new ol.layer.Vector({
                source:jsonSource_vertederos_1, 
                style: style_vertederos_1,
                title: '<img src="styles/legend/vertederos_1.png" /> vertederos'
            });

lyr_Municipios_0.setVisible(true);lyr_vertederos_1.setVisible(true);
var layersList = [lyr_Municipios_0,lyr_vertederos_1];
lyr_Municipios_0.set('fieldAliases', {'COMAR00_ID': 'COMAR00_ID', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CODIGO': 'CODIGO', 'MUNICIPIO': 'MUNICIPIO', });
lyr_vertederos_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'MUNICIPIO': 'MUNICIPIO', 'CMUN': 'CMUN', });
lyr_Municipios_0.set('fieldImages', {'COMAR00_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_vertederos_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CMUN': 'TextEdit', });
lyr_Municipios_0.set('fieldLabels', {'COMAR00_ID': 'no label', 'NOMBRE': 'header label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CODIGO': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_vertederos_1.set('fieldLabels', {'NOMBRE': 'inline label', 'DIRECCION': 'inline label', 'MUNICIPIO': 'inline label', 'CMUN': 'inline label', });
lyr_vertederos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_vertederos_1.on("postcompose", update);

    var listenerKey = lyr_vertederos_1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });