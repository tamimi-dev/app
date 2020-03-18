      $.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/o935awr/public/values?alt=json", data => {
  var labels = [];
   var seri = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$piewlabel']['$t']);
    seri.push(Number(e['gsx$piewcases']['$t']));
  });

      var options = {
         series: seri,
                plotOptions: {
     pie: {
                    expandOnClick: true
     }
  },
          chart: {
          type: 'pie',
            foreColor: '#e0e0e0'
        },
        labels: labels,
  colors: ['#546E7A', '#E91E63'],
        responsive: [{
          options: {
            chart: {
                     background: '#fff'
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };
        var chart = new ApexCharts(document.querySelector("#chart_w"), options);
        chart.render();
    });  
     
