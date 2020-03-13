
fetchData("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otb867z/public/values?alt=json");

async function fetchData(url) {
  const jsonData = await fetch(url).then(r => r.json());
  const data = jsonData.feed.entry.map(e => ({
  
  	category: e.gsx$chinaname.$t,
    value_bar: Number(e.gsx$provtotal.$t),

    pie: [{
    	title: 'Cases',
    	value_pie: e.gsx$chinacase.$t
    }, {
    	title: 'Deaths',
    	value_pie: e.gsx$chinadth.$t
    }, {
    	title: 'Critical',
    	value_pie: e.gsx$chinacrit.$t
    }, {
    	title: 'Serious',
    	value_pie: e.gsx$chinaser.$t
    }, {
    	title: 'Recovered',
    	value_pie: e.gsx$chinarecov.$t
    }]

  
   
  }));
  
 

    const jsonDatam = await fetch(url).then(r => r.json());
  const datam = jsonDatam.feed.entry.map(e => ({
  
  id: e.gsx$map.$t,
	value: Number(e.gsx$provtotal.$t),
     value2: Number(e.gsx$chinadth.$t),
      value3: Number(e.gsx$chinacrit.$t),
       value4: Number(e.gsx$chinaser.$t),
        value5: Number(e.gsx$chinarecov.$t),


  }));

 
  handleData(data);
  handleData(datam);
} 






function handleData(data) {
   
	chart.data = data;
}


function handleData(datam) {
 polygonSeries.data = datam;
}

















// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

 // Create map instance
var chart = am4core.create("chartdiv_m", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_chinaLow;

// Set projection
chart.projection = new am4maps.projections.Projection();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(4).brighten(1),
  max: chart.colors.getIndex(4).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state



// Set up heat legend
let heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.align = "center";
heatLegend.valign = "bottom";
heatLegend.width = am4core.percent(60);
heatLegend.marginRight = am4core.percent(4);
heatLegend.minValue = 0;
heatLegend.maxValue = 40000000;

// Set up custom heat map legend labels using axis ranges
var minRange = heatLegend.valueAxis.axisRanges.create();
minRange.value = heatLegend.minValue;
minRange.label.text = "Less Total Cases";
var maxRange = heatLegend.valueAxis.axisRanges.create();
maxRange.value = heatLegend.maxValue;
maxRange.label.text = "More Total Cases";

// Blank out internal heat legend value axis labels
heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
  return "";
});

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "[bold]{name}:[\]\n Total {value}\n Deaths {value2}\n Critical {value3}\n Serious {value4}\n Recovered {value5}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#dc3c3c");



/////////////////////////////////////////////////


// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in


// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Total Reported Cases";
valueAxis.min = 0;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.07;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value_bar";
series.dataFields.categoryX = "category";
series.tooltip.pointerOrientation = "vertical";


var columnTemplate = series.columns.template;
// add tooltip on column, not template, so that slices could also have tooltip
columnTemplate.column.tooltipText = "Province/State: {categoryX}\nTotal: {value2}";
columnTemplate.column.tooltipY = 0;
columnTemplate.column.cornerRadiusTopLeft = 20;
columnTemplate.column.cornerRadiusTopRight = 20;
columnTemplate.strokeOpacity = 0;


// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
columnTemplate.adapter.add("fill", function(fill, target) {
  var color = chart.colors.getIndex(target.dataItem.index * 3);
  return color;
});

// create pie chart as a column child
var pieChart = series.columns.template.createChild(am4charts.PieChart);
pieChart.width = am4core.percent(80);
pieChart.height = am4core.percent(80);
pieChart.align = "center";
pieChart.valign = "middle";
pieChart.dataFields.data = "pie";

var pieSeries = pieChart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value_pie";
pieSeries.dataFields.category = "title";
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;
pieSeries.slices.template.stroke = am4core.color("#ffffff");
pieSeries.slices.template.strokeWidth = 1;

pieSeries.slices.template.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.parent.parent.dataItem.index * 3);
});

pieSeries.slices.template.adapter.add("fill", function(fill, target) {
  return am4core.color("#ffffff")
});

pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
  return (target.dataItem.index + 1) * 0.2;
});

pieSeries.hiddenState.properties.startAngle = -90;
pieSeries.hiddenState.properties.endAngle = 270;

// this moves the pie out of the column if column is too small
pieChart.adapter.add("verticalCenter", function(verticalCenter, target) {
  var point = am4core.utils.spritePointToSprite({ x: 0, y: 0 }, target.seriesContainer, chart.plotContainer);
  point.y -= target.dy;

  if (point.y > chart.plotContainer.measuredHeight - 15) {
    target.dy = -target.seriesContainer.measuredHeight - 15;
  }
  else {
    target.dy = 0;
  }
  return verticalCenter
})

