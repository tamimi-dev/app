
$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ok01ra6/public/values?alt=json", data => {
  var labels_d = [];
  var numbers_d = [];
   var numbers2_d = [];

  data.feed.entry.forEach(e => {
    labels_d.push(e['gsx$timedth']['$t']);
    numbers_d.push(Number(e['gsx$totdthall']['$t']));
	numbers2_d.push(Number(e['gsx$dincdth']['$t']));

  });
  new Chart(document.getElementById('canvas_dth'), {
  type: 'horizontalBar',
    data: {
      labels: labels_d,
      datasets: [{
        label: 'Total Deaths (Accumulated)',
        data: numbers_d,
        backgroundColor: 'rgb(224, 54, 22)',
        borderColor: 'rgb(253, 48, 76)',
        pointBackgroundColor: 'rgb(240,236,211)'
      },
{
        label: 'Daily Deaths Increase',
        data: numbers2_d,
        backgroundColor: 'rgb(91, 192, 235)',
        borderColor: 'rgb(255, 159, 64)',
        pointBackgroundColor: 'rgb(240,236,211)'
      }
	  ]
    },
    options: {
      	  maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
        }
      }
    }
  });
});
