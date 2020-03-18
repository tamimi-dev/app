$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/otu1nbu/public/values?alt=json", data => {
  var labels = [];
  var numbers = [];
   var numbers2 = [];

  data.feed.entry.forEach(e => {
    labels.push(e['gsx$timecase']['$t']);
    numbers.push(Number(e['gsx$totcaseall']['$t']));
	numbers2.push(Number(e['gsx$dincreaseall']['$t']));

  });
  new Chart(document.getElementById('canvas'), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Total Cases (Accumulated)',
        data: numbers,
        backgroundColor: 'rgb(253, 48, 76)',
        borderColor: 'rgb(253, 48, 76)',
        pointBackgroundColor: 'rgb(240,236,211)'
      },
{
        label: 'Daily Increase',
        data: numbers2,
        backgroundColor: 'rgb(255, 159, 64)',
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
