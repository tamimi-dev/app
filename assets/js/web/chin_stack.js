$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otb867z/public/values?alt=json", data => {
  var labels1 = [];
  var numbers = [];
  var numbers2 = [];
  var numbers3 = [];
  var numbers4 = [];
  var numbers5 = [];

  data.feed.entry.forEach(e => {
    labels1.push(e['gsx$chinaname']['$t']);
    numbers.push(Number(e['gsx$chinacase']['$t']));
    numbers2.push(Number(e['gsx$chinadth']['$t']));
    numbers3.push(Number(e['gsx$chinaser']['$t']));
    numbers4.push(Number(e['gsx$chinacrit']['$t']));
    numbers5.push(Number(e['gsx$chinarecov']['$t']));
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
    chart: {
      type: 'bar',
      height: 500,
      stacked: true,
      stackType: '100%',
      foreColor: "#ccc",
      toolbar: {
        show: false

      }

    },
    colors: ['#d67f29', '#fd304c', '#c107ff', '#ffc107', '#00a700'],
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
      text: 'Cases per Province'
    },
    xaxis: {
      categories: labels1,


      labels: {
        show: false,
        formatter: function(val) {
          return val
        }
      }


    },
    scales: {
      yAxes: [{

        ticks: {
          beginAtZero: true,
        },

      }]
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function(val) {
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
