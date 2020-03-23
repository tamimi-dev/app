
$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ok01ra6/public/values?alt=json", data => {
  var labels_chdth = [];
  var numbers_chdth = [];
   var numbers2_chdth = [];
  data.feed.entry.forEach(e => {
    labels_chdth.push(e['gsx$timedth']['$t']);
    numbers_chdth.push(Number(e['gsx$percdth']['$t']));
	numbers2_chdth.push(Number(e['gsx$totdthall']['$t']));
  }); 
  
var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#b100ec"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 3,
    colors: ["#000524"],
    strokeColor: "#b100ec",
    strokeWidth: 3
  },
  series: [{
	  data: numbers2_chdth
	  }],
  tooltip: {
    theme: "dark"
  },
  xaxis: {
    categories: labels_chdth,
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart-area_dth"), options1);

chart1.render();

var options2 = {
  chart: {
    id: "chart1",
    height: 130,
    type: "bar",
    foreColor: "#ccc",
    brush: {
      target: "chart2",
      enabled: true
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4
      },
      xaxis: {
        categories: labels_chdth,
      }
    }
  },
  colors: ["#FF0080"],
  series: [{
	  data: numbers_chdth
	  }],
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
 
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
};

var chart2 = new ApexCharts(document.querySelector("#chart-bar_dth"), options2);

chart2.render();
});

