$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var fr_cse = data.feed.entry[i]['gsx$frcase']['$t'];
		var fr_dth = data.feed.entry[i]['gsx$frdth']['$t'];
var fr_crit = data.feed.entry[i]['gsx$frcrit']['$t'];
     var fr_rcv = data.feed.entry[i]['gsx$frrcv']['$t'];
	      var fr_cfr = data.feed.entry[i]['gsx$frcfr']['$t'];



     
		document.getElementById('fr_cse').innerHTML += ('<tr>'+'<td>'+fr_cse+'</td>'+'</tr>');
		document.getElementById('fr_dth').innerHTML += ('<tr>'+'<td>'+fr_dth+'</td>'+'</tr>');
	  document.getElementById('fr_crit').innerHTML += ('<tr>'+'<td>'+fr_crit+'</td>'+'</tr>');
	  document.getElementById('fr_rcv').innerHTML += ('<tr>'+'<td>'+fr_rcv+'</td>'+'</tr>');
    	document.getElementById('fr_cfr').innerHTML += ('<tr>'+'<td>'+fr_cfr+'</td>'+'</tr>');
	     
      }
    });