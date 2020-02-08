function BuildChart(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            scales: {
                xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: '$ Billion'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Name'
                    }
                }]
            },
        }
    });

    return myChart;
}



// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      
// Map json labels  back to values array
var labels = json.map(function (e) {
    return e.person.name;
});
      
// Map json values back to values array
var values = json.map(function (e) {
    return (e.finalWorth / 1000); // Divide to billions in units of ten
});

BuildChart(labels, values, "Real Time Net Worth");
    }
  };
  xhttp.open("GET", "https://forbes400.herokuapp.com/api/forbes400?limit=10", false);
  xhttp.send();
