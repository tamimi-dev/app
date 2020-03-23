$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var ch_cse = data.feed.entry[i]['gsx$chcase']['$t'];
		var ch_dth = data.feed.entry[i]['gsx$chdth']['$t'];
var ch_crit = data.feed.entry[i]['gsx$chcrit']['$t'];
     var ch_rcv = data.feed.entry[i]['gsx$usrcv']['$t'];
	      var ch_cfr = data.feed.entry[i]['gsx$uscfr']['$t'];
     
		document.getElementById('ch_cse').innerHTML += ('<tr>'+'<td>'+ch_cse'</td>'+'</tr>');
		document.getElementById('ch_dth').innerHTML += ('<tr>'+'<td>'+ch_dth+'</td>'+'</tr>');
	  document.getElementById('ch_crit').innerHTML += ('<tr>'+'<td>'+ch_crit+'</td>'+'</tr>');
	  document.getElementById('ch_rcv').innerHTML += ('<tr>'+'<td>'+ch_rcv+'</td>'+'</tr>');
    	document.getElementById('ch_cfr').innerHTML += ('<tr>'+'<td>'+ch_cfr+'</td>'+'</tr>');
	     
      }
    });
