$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/o3jyz9j/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
   var date = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$cntry']['$t']);
    numbers.push(Number(e['gsx$tests']['$t']));
	date.push(e['gsx$date']['$t']);
  });
        var options = {
          series: [{
         Name: 'Total tests',
          data: numbers
        }
        
        ],
          chart: {
          type: 'bar',
          height: 950,
           foreColor: "#ccc"

        },
        colors: ['#c107ff'],

        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false

          
        },
        xaxis: {
          categories: labels,
           title: {
            text: 'Total Tests'
          },
          labels: {
            formatter: function (val) {
              return val
            }
          }
        },
   tooltip: {
   theme: "dark",
 x: {
            formatter: function (val) {
              return val
            }
          }
   }
        };
        var chart = new ApexCharts(document.querySelector("#chart_test"), options);
        chart.render();
      });
