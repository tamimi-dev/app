$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/oep3bj8/public/values?alt=json", data => {
  var labels1 = [];
  var numbers = [];
   var numbers2 = [];
      var numbers3 = [];
         var numbers4 = [];
             var numbers5 = [];
  data.feed.entry.forEach(e => {
    labels1.push(e['gsx$itname']['$t']);
    numbers.push(Number(e['gsx$itcase']['$t']));
	numbers2.push(Number(e['gsx$itdth']['$t']));


  }); 

var options = {
          series: [{
          name: 'Cases',
          data: numbers
        }, {
          name: 'Deaths',
          data: numbers2
        }],
	colors: ['#d67f29', '#fd304c', '#c107ff', '#ffc107', '#00a700'],

          chart: {
          type: 'bar',
          height: 500,
          stacked: true,

               foreColor: "#ccc"
              
        },
        plotOptions: {
          bar: {
            horizontal: false,
            
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Italy\'s Cases'
        },
        xaxis: {
          categories: labels1,

          labels: {
            formatter: function (val) {
              return val 
            }
          }

          
        },
         scales: {
	    yAxes: [{

                             logarithmic: true,
                              	    ticks: {
          beginAtZero: true,
        },

	    }]
    },
        tooltip: {
         theme: "dark",
         y: {
            formatter: function (val) {
              return val 
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          offsetX: 90
        }
        };
        var chart = new ApexCharts(document.querySelector("#chart_ver"), options);
        chart.render();
      });
