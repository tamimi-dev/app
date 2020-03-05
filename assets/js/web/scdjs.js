$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var susp = data.feed.entry[i]['gsx$susp']['$t'];
		var confir = data.feed.entry[i]['gsx$conf']['$t'];


        document.getElementById('susp').innerHTML += ('<tr>'+'<td>'+susp+'</td>'+'</tr>');
		document.getElementById('confir').innerHTML += ('<tr>'+'<td>'+confir+'</td>'+'</tr>');


      }
    });





