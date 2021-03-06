
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;



// Set projection
chart.projection = new am4maps.projections.Projection();
chart.panBehavior = "rotateLongLat";
chart.deltaLatitude = -20;
//chart.padding(20, 20, 20, 20);

chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#303032");

//chart.deltaLongitude = 20;
//chart.deltaLatitude = -20;

// limits vertical rotation
chart.adapter.add("deltaLatitude", function(delatLatitude) {
  return am4core.math.fitToRange(delatLatitude, -90, 90);
})




chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function(){
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);





// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

polygonSeries.calculateVisualCenter = true;
polygonSeries.tooltip.background.fillOpacity = 0.2;
polygonSeries.tooltip.background.cornerRadius = 20;

var template = polygonSeries.mapPolygons.template;
template.nonScalingStroke = true;
template.fill = am4core.color("#c74752");
template.stroke = am4core.color("#584547");

polygonSeries.calculateVisualCenter = true;
template.propertyFields.id = "id";
template.tooltipPosition = "fixed";
template.fillOpacity = 1;

template.events.on("over", function(event) {
  if (event.target.dummyData) {
    event.target.dummyData.isHover = true;
  }
})
template.events.on("out", function(event) {
  if (event.target.dummyData) {
    event.target.dummyData.isHover = false;
  }
})




var hs = polygonSeries.mapPolygons.template.states.create("hover");
hs.properties.fillOpacity = 1;
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);


var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.stroke = am4core.color("#fff");
graticuleSeries.fitExtent = false;
graticuleSeries.mapLines.template.strokeOpacity = 0.2;
graticuleSeries.mapLines.template.stroke = am4core.color("#fff");


var measelsSeries = chart.series.push(new am4maps.MapPolygonSeries())
measelsSeries.tooltip.background.fillOpacity = 100;
measelsSeries.tooltip.background.cornerRadius = 20;
measelsSeries.tooltip.autoTextColor = true;
measelsSeries.tooltip.label.fill = am4core.color("#000");
measelsSeries.tooltip.dy = -5;

var measelTemplate = measelsSeries.mapPolygons.template;
measelTemplate.fill = am4core.color("#f9e3ce");
measelTemplate.strokeOpacity = 0;
measelTemplate.fillOpacity = 0.75;
measelTemplate.tooltipPosition = "fixed";





fetch("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o512ru7/public/values?alt=json").then(response => response.json()).then((jsonData) => {
  const mapData = {}

  jsonData.feed.entry.forEach(e => {
    mapData[e['gsx$rotateid']['$t']] = Number(e['gsx$rotatcase']['$t'])
  })
  handleMapData(mapData)
})


const handleMapData = (mapData) => {
  polygonSeries.mapPolygons.each(function(mapPolygon) {
    var count = mapData[mapPolygon.id];

    if (count > 0) {
      var polygon = measelsSeries.mapPolygons.create();
      polygon.multiPolygon = am4maps.getCircle(mapPolygon.visualLongitude, mapPolygon.visualLatitude, Math.max(0.2, Math.log(count) * Math.LN10 / 10));
      polygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": " + count;
      mapPolygon.dummyData = polygon;
      polygon.events.on("over", function() {
        mapPolygon.isHover = true;
      })
      polygon.events.on("out", function() {
        mapPolygon.isHover = false;
      })
    } else {
      mapPolygon.tooltipText = mapPolygon.dataItem.dataContext.name + ": no data";
      mapPolygon.fillOpacity = 0.9;
      mapPolygon.fill = am4core.color("#915660");
    }

  })
}

