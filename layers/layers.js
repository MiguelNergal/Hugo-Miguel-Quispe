var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regions_1 = new ol.format.GeoJSON();
var features_regions_1 = format_regions_1.readFeatures(json_regions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions_1.addFeatures(features_regions_1);
var lyr_regions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regions_1, 
                style: style_regions_1,
                popuplayertitle: "regions",
                interactive: true,
                title: '<img src="styles/legend/regions_1.png" /> regions'
            });
var format_airports_2 = new ol.format.GeoJSON();
var features_airports_2 = format_airports_2.readFeatures(json_airports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airports_2.addFeatures(features_airports_2);
var lyr_airports_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airports_2, 
                style: style_airports_2,
                popuplayertitle: "airports",
                interactive: true,
                title: '<img src="styles/legend/airports_2.png" /> airports'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_regions_1.setVisible(true);lyr_airports_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_regions_1,lyr_airports_2];
lyr_regions_1.set('fieldAliases', {'ID': 'ID', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', });
lyr_airports_2.set('fieldAliases', {'ID': 'ID', 'fk_region': 'fk_region', 'ELEV': 'ELEV', 'NAME': 'NAME', 'USE': 'USE', });
lyr_regions_1.set('fieldImages', {'ID': '', 'NAME_2': '', 'TYPE_2': '', });
lyr_airports_2.set('fieldImages', {'ID': '', 'fk_region': 'RelationReference', 'ELEV': '', 'NAME': '', 'USE': '', });
lyr_regions_1.set('fieldLabels', {'ID': 'no label', 'NAME_2': 'header label - always visible', 'TYPE_2': 'header label - always visible', });
lyr_airports_2.set('fieldLabels', {'ID': 'no label', 'fk_region': 'no label', 'ELEV': 'inline label - always visible', 'NAME': 'inline label - always visible', 'USE': 'inline label - always visible', });
lyr_airports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});