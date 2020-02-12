$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/ou32gi9/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var cnt = data.feed.entry[i]['gsx$countries']['$t'];
		var cse = data.feed.entry[i]['gsx$totcasepercntry']['$t'];


var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var chartColors = {
	red: 'rgba(253, 48, 76)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgba(240,236,211)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgba(42,105,163)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgba(48,48,50)'
};

var color = Chart.helpers.color;
var config = {
  type: 'radar',
  data: {
    labels: cnt,
    datasets: [{
      label: "Current level",
      backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
      borderColor: chartColors.red,
      pointBackgroundColor: chartColors.red,
      data: cse
    },]
  },
  options: {
    legend: {
      position: 'top',
      labels: {
        fontColor: 'white'
      }
    },
    title: {
      display: true,
      text: 'Curent level Skills vs desired',
      fontColor: 'white'
    },
	  maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: 'white', // labels such as 10, 20, etc
        showLabelBackdrop: false // hide square behind text
      },
      pointLabels: {
        fontColor: 'white' // labels around the edge like 'Running'
      },
      gridLines: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      angleLines: {
        color: 'white' // lines radiating from the center
      }
    }
  }
};

// A plugin to draw the background color
Chart.plugins.register({
  beforeDraw: function(chartInstance) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillStyle = '#303032';
    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  }
})

window.myRadar = new Chart(document.getElementById("canvas"), config);

      }
    });
