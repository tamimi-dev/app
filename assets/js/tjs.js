$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var date = data.feed.entry[i]['gsx$date']['$t'];
        var predicted = data.feed.entry[i]['gsx$predicted']['$t'];
        var date2 = data.feed.entry[i]['gsx$date_2']['$t'];
		var confirmed = data.feed.entry[i]['gsx$confirmed']['$t'];

        document.getElementById('predic').innerHTML += ('<tr>'+'<td>'+date+'</td>'+'<td>'+predicted+'</td>'+'<td>'+date2+'</td>'+'<td>'+confirmed+'</td>'+'</tr>');

      }
    });







