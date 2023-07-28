var wms_layers = [];

var format_Al_0 = new ol.format.GeoJSON();
var features_Al_0 = format_Al_0.readFeatures(json_Al_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Al_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Al_0.addFeatures(features_Al_0);
var lyr_Al_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Al_0, 
                style: style_Al_0,
                interactive: true,
    title: 'Al<br />\
    <img src="styles/legend/Al_0_0.png" /> 0<br />\
    <img src="styles/legend/Al_0_1.png" /> 0,1<br />'
        });
var format_Ca_1 = new ol.format.GeoJSON();
var features_Ca_1 = format_Ca_1.readFeatures(json_Ca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_1.addFeatures(features_Ca_1);
var lyr_Ca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ca_1, 
                style: style_Ca_1,
                interactive: true,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_1_0.png" /> 2,4<br />\
    <img src="styles/legend/Ca_1_1.png" /> 3,3<br />\
    <img src="styles/legend/Ca_1_2.png" /> 3,4<br />\
    <img src="styles/legend/Ca_1_3.png" /> 3,5<br />'
        });
var format_H_2 = new ol.format.GeoJSON();
var features_H_2 = format_H_2.readFeatures(json_H_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_2.addFeatures(features_H_2);
var lyr_H_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_2, 
                style: style_H_2,
                interactive: true,
    title: 'H+<br />\
    <img src="styles/legend/H_2_0.png" /> 2,2<br />\
    <img src="styles/legend/H_2_1.png" /> 2,4<br />\
    <img src="styles/legend/H_2_2.png" /> 2,5<br />\
    <img src="styles/legend/H_2_3.png" /> 2,6<br />\
    <img src="styles/legend/H_2_4.png" /> 2,9<br />\
    <img src="styles/legend/H_2_5.png" /> 3<br />\
    <img src="styles/legend/H_2_6.png" /> 3,1<br />\
    <img src="styles/legend/H_2_7.png" /> 3,2<br />\
    <img src="styles/legend/H_2_8.png" /> 3,3<br />\
    <img src="styles/legend/H_2_9.png" /> 5,5<br />'
        });
var format_K_3 = new ol.format.GeoJSON();
var features_K_3 = format_K_3.readFeatures(json_K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_3.addFeatures(features_K_3);
var lyr_K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K_3, 
                style: style_K_3,
                interactive: true,
    title: 'K+<br />\
    <img src="styles/legend/K_3_0.png" /> 57,4<br />\
    <img src="styles/legend/K_3_1.png" /> 60,5<br />\
    <img src="styles/legend/K_3_2.png" /> 83,8<br />\
    <img src="styles/legend/K_3_3.png" /> 103,5<br />\
    <img src="styles/legend/K_3_4.png" /> 107,1<br />\
    <img src="styles/legend/K_3_5.png" /> 120,6<br />\
    <img src="styles/legend/K_3_6.png" /> 127,5<br />\
    <img src="styles/legend/K_3_7.png" /> 142<br />\
    <img src="styles/legend/K_3_8.png" /> 152,8<br />\
    <img src="styles/legend/K_3_9.png" /> 172,4<br />'
        });
var format_Mg_4 = new ol.format.GeoJSON();
var features_Mg_4 = format_Mg_4.readFeatures(json_Mg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_4.addFeatures(features_Mg_4);
var lyr_Mg_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mg_4, 
                style: style_Mg_4,
                interactive: true,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_4_0.png" /> 1,2<br />\
    <img src="styles/legend/Mg_4_1.png" /> 1,3<br />\
    <img src="styles/legend/Mg_4_2.png" /> 1,4<br />\
    <img src="styles/legend/Mg_4_3.png" /> 1,5<br />'
        });
var format_pH_5 = new ol.format.GeoJSON();
var features_pH_5 = format_pH_5.readFeatures(json_pH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_5.addFeatures(features_pH_5);
var lyr_pH_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_5, 
                style: style_pH_5,
                interactive: true,
    title: 'pH<br />\
    <img src="styles/legend/pH_5_0.png" /> 5,4<br />\
    <img src="styles/legend/pH_5_1.png" /> 6<br />\
    <img src="styles/legend/pH_5_2.png" /> 6,1<br />\
    <img src="styles/legend/pH_5_3.png" /> 6,2<br />\
    <img src="styles/legend/pH_5_4.png" /> 6,3<br />\
    <img src="styles/legend/pH_5_5.png" /> 6,4<br />'
        });
var format_NmerodeFalhasdePalntio_6 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_6 = format_NmerodeFalhasdePalntio_6.readFeatures(json_NmerodeFalhasdePalntio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_6.addFeatures(features_NmerodeFalhasdePalntio_6);
var lyr_NmerodeFalhasdePalntio_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_6, 
                style: style_NmerodeFalhasdePalntio_6,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_6_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_7 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_7 = format_NmerodeLinhasdePlantio_7.readFeatures(json_NmerodeLinhasdePlantio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_7.addFeatures(features_NmerodeLinhasdePlantio_7);
var lyr_NmerodeLinhasdePlantio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_7, 
                style: style_NmerodeLinhasdePlantio_7,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_7_9.png" /> 72<br />'
        });
var format_AnodePlantio_8 = new ol.format.GeoJSON();
var features_AnodePlantio_8 = format_AnodePlantio_8.readFeatures(json_AnodePlantio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_8.addFeatures(features_AnodePlantio_8);
var lyr_AnodePlantio_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_8, 
                style: style_AnodePlantio_8,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_8_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_8_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_8_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_8_3.png" /> 2020<br />'
        });
var format_Variedades_9 = new ol.format.GeoJSON();
var features_Variedades_9 = format_Variedades_9.readFeatures(json_Variedades_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_9.addFeatures(features_Variedades_9);
var lyr_Variedades_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_9, 
                style: style_Variedades_9,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_9_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_9_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_9_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_9_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_9_4.png" /> Mundo Novo<br />'
        });
var format_reaha_10 = new ol.format.GeoJSON();
var features_reaha_10 = format_reaha_10.readFeatures(json_reaha_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_10.addFeatures(features_reaha_10);
var lyr_reaha_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_10, 
                style: style_reaha_10,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_10_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_10_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_10_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_10_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_10_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_10_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_10_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_10_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_10_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_10_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_11 = new ol.format.GeoJSON();
var features_TalhesProdutivos_11 = format_TalhesProdutivos_11.readFeatures(json_TalhesProdutivos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_11.addFeatures(features_TalhesProdutivos_11);
var lyr_TalhesProdutivos_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_11, 
                style: style_TalhesProdutivos_11,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_11_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_11_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_11_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_11_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_11_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_11_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_11_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_11_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_11_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_11_9.png" /> T11<br />'
        });
var format_LimiteStioIranita_12 = new ol.format.GeoJSON();
var features_LimiteStioIranita_12 = format_LimiteStioIranita_12.readFeatures(json_LimiteStioIranita_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_12.addFeatures(features_LimiteStioIranita_12);
var lyr_LimiteStioIranita_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_12, 
                style: style_LimiteStioIranita_12,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_12.png" /> Limite Sítio Iranita'
            });
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_6,lyr_NmerodeLinhasdePlantio_7,lyr_AnodePlantio_8,lyr_Variedades_9,lyr_reaha_10,lyr_TalhesProdutivos_11,],
                                title: "Áreas Produtivas"});
var group_NutrientesdoSolo = new ol.layer.Group({
                                layers: [lyr_Al_0,lyr_Ca_1,lyr_H_2,lyr_K_3,lyr_Mg_4,lyr_pH_5,],
                                title: "Nutrientes do Solo"});

lyr_Al_0.setVisible(true);lyr_Ca_1.setVisible(true);lyr_H_2.setVisible(true);lyr_K_3.setVisible(true);lyr_Mg_4.setVisible(true);lyr_pH_5.setVisible(true);lyr_NmerodeFalhasdePalntio_6.setVisible(true);lyr_NmerodeLinhasdePlantio_7.setVisible(true);lyr_AnodePlantio_8.setVisible(true);lyr_Variedades_9.setVisible(true);lyr_reaha_10.setVisible(true);lyr_TalhesProdutivos_11.setVisible(true);lyr_LimiteStioIranita_12.setVisible(true);
var layersList = [group_NutrientesdoSolo,group_reasProdutivas,lyr_LimiteStioIranita_12];
lyr_Al_0.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Ca_1.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_H_2.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_K_3.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Mg_4.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_pH_5.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_NmerodeFalhasdePalntio_6.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_7.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_8.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_9.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_10.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_11.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_LimiteStioIranita_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_Al_0.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Ca_1.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_H_2.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_K_3.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Mg_4.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_pH_5.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_NmerodeFalhasdePalntio_6.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_7.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_8.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_9.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_10.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_11.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_LimiteStioIranita_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Al_0.set('fieldLabels', {});
lyr_Ca_1.set('fieldLabels', {});
lyr_H_2.set('fieldLabels', {});
lyr_K_3.set('fieldLabels', {});
lyr_Mg_4.set('fieldLabels', {});
lyr_pH_5.set('fieldLabels', {});
lyr_NmerodeFalhasdePalntio_6.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_7.set('fieldLabels', {});
lyr_AnodePlantio_8.set('fieldLabels', {});
lyr_Variedades_9.set('fieldLabels', {});
lyr_reaha_10.set('fieldLabels', {});
lyr_TalhesProdutivos_11.set('fieldLabels', {});
lyr_LimiteStioIranita_12.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});