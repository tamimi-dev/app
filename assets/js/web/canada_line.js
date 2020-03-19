$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ok01ra6/public/values?alt=json", data => {
  var labels = [];
  var china = [];
   var skorea = [];
     var italy = [];
   var japan = [];
     var us = [];
   var france = [];
     var canada = [];
   var spain = [];
     var iran = [];
   var germany = [];
    var switz = [];

  data.feed.entry.forEach(e => {
    labels.push(e['gsx$timecase']['$t']);
   
      	canada.push(Number(e['gsx$canada']['$t']));
       

  });
    
    
        var options = {
          series: [
         
          {
            name: "Canada",
            data: canada
          }
        ],
          colors: ['#ffc107', '#d67f29', '#fd304c', '#00a700', '#c107ff', '#4B3AC5', '#3AC5C4', '#00C9A7', '#C34A36', '#FEFEDF'],
          chart: {
          height: 500,
          type: 'line',
          foreColor: "#ccc",
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
         width: 2,
       //width: [5, 7, 5],
          curve: 'smooth',
       //   dashArray: [0, 8, 5]
        },
        title: {
          text: 'Cases by day',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 3
          }
        },
        xaxis: {
          categories: labels,
        },
        tooltip: {
         theme: "dark",
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " "
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " "
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#636363',
        }
        };

        var chart = new ApexCharts(document.querySelector("#canvas_ca"), options);
        chart.render();
      
  });    
