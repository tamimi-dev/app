$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/oscalx8/public/values?alt=json", data => {

    var numbers = [];
   var numbers2 = [];
      var numbers3 = [];
         var numbers4 = [];
            var numbers5 = [];

  data.feed.entry.forEach(e => {

   numbers.push(Number(e['gsx$susp1']['$t']));
	numbers2.push(Number(e['gsx$conf1']['$t']));
  	numbers3.push(Number(e['gsx$death1']['$t']));
    	numbers4.push(Number(e['gsx$recover1']['$t']));
      	numbers5.push(Number(e['gsx$serious1']['$t']));

  }); 
  
  var options = {
  chart: {
    type: "bar",
    height: 140,
    stacked: true,
    stackType: "100%",
      foreColor: "#ccc",
    toolbar: {
      show: false

    }
  },
  series: [{
          name: 'Critical Cases',
          data: numbers
        }, {
          name: 'Confirmed Cases',
          data: numbers2
        }, {
          name: 'Deaths',
          data: numbers3
        }, {
          name: 'Recovered Cases',
          data: numbers4
        }, {
          name: 'Serious Cases',
          data: numbers5
        }
        ],
 
  colors: ['#ffc107', '#d67f29', '#fd304c', '#00a700', '#c107ff'],


  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
   enabled: false,
    dropShadow: {
      enabled: true
    }
  },

  stroke: {
    width: 0
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  },
  xaxis: {
    categories: ["World Wide"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.35,
      gradientToColors: undefined,
      inverseColors: false,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [90, 0, 100]
    }
  },

  legend: {
  show: true,

  offsetY: -10, 
  position: "bottom",
    horizontalAlign: "center"
  },
   tooltip: {
   theme: "dark",
   }
};

var chart = new ApexCharts(document.querySelector("#chert"), options);

chart.render();

     }); 
