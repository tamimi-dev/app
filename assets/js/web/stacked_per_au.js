$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ov3b4nh/public/values?alt=json", data => {
  var labels1 = [];
  var numbers = [];
   var numbers2 = [];
      var numbers3 = [];
         var numbers4 = [];
             var numbers5 = [];
             
  data.feed.entry.forEach(e => {
    labels1.push(e['gsx$auname']['$t']);
    numbers.push(Number(e['gsx$aucase']['$t']));
	numbers2.push(Number(e['gsx$audth']['$t']));
  	numbers3.push(Number(e['gsx$auser']['$t']));
    	numbers4.push(Number(e['gsx$aucrit']['$t']));
          	numbers5.push(Number(e['gsx$aurecov']['$t']));
  }); 


var options = {
          series: [{
          name: 'Cases',
          data: numbers
        }, {
          name: 'Deaths',
          data: numbers2
        }, {
          name: 'Serious',
          data: numbers3
        }, {
          name: 'Critical',
          data: numbers4
        }, {
          name: 'Recovered',
          data: numbers5
        }],
colors: ['#d67f29', '#fd304c', '#c107ff', '#ffc107', '#00a700'],

          chart: {
          type: 'bar',
          height: 500,
          stacked: true,
           stackType: '100%',
               foreColor: "#ccc"
              
        },
        plotOptions: {
          bar: {
            horizontal: true,
            
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'China Cases'
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

        var chart = new ApexCharts(document.querySelector("#chart_s"), options);
        chart.render();
      
      
      });
