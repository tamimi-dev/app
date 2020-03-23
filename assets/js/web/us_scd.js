$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var us_cse = data.feed.entry[i]['gsx$uscase']['$t'];
		var us_dth = data.feed.entry[i]['gsx$usdth']['$t'];
var us_crit = data.feed.entry[i]['gsx$uscrit']['$t'];
     var us_rcv = data.feed.entry[i]['gsx$usrcv']['$t'];
	      var us_cfr = data.feed.entry[i]['gsx$uscfr']['$t'];



     
		document.getElementById('us_cse').innerHTML += ('<tr>'+'<td>'+us_cse+'</td>'+'</tr>');
		document.getElementById('us_dth').innerHTML += ('<tr>'+'<td>'+us_dth+'</td>'+'</tr>');
	  document.getElementById('us_crit').innerHTML += ('<tr>'+'<td>'+us_crit+'</td>'+'</tr>');
	  document.getElementById('us_rcv').innerHTML += ('<tr>'+'<td>'+us_rcv+'</td>'+'</tr>');
    	document.getElementById('us_cfr').innerHTML += ('<tr>'+'<td>'+us_cfr+'</td>'+'</tr>');
	     
      }
    });