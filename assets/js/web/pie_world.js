$.getJSON("https://spreadsheets.google.com/feeds/list/1XEhGO2sCwpCrrx4O3clmomZxe9d2RIShWQoRYEzOpaI/oxcft20/public/values?alt=json", data => {
  var labels = [];
   var seri = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$label']['$t']);

    seri.push(Number(e['gsx$aaa']['$t']));

  });
  
      
      var options = {
         series: seri,
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: labels,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
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
     
