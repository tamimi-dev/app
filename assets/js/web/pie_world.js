      $.getJSON("https://spreadsheets.google.com/feeds/list/1XEhGO2sCwpCrrx4O3clmomZxe9d2RIShWQoRYEzOpaI/oxcft20/public/values?alt=json", data => {
  var labels = [];
   var seri = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$label']['$t']);

    seri.push(Number(e['gsx$aaa']['$t']));

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

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
         

    });  
     
