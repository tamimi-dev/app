$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var kr_cse = data.feed.entry[i]['gsx$krcase']['$t'];
		var kr_dth = data.feed.entry[i]['gsx$krdth']['$t'];
var kr_crit = data.feed.entry[i]['gsx$krcrit']['$t'];
     var kr_rcv = data.feed.entry[i]['gsx$krrcv']['$t'];
	      var kr_cfr = data.feed.entry[i]['gsx$krcfr']['$t'];



     
		document.getElementById('kr_cse').innerHTML += ('<tr>'+'<td>'+kr_cse+'</td>'+'</tr>');
		document.getElementById('kr_dth').innerHTML += ('<tr>'+'<td>'+kr_dth+'</td>'+'</tr>');
	  document.getElementById('kr_crit').innerHTML += ('<tr>'+'<td>'+kr_crit+'</td>'+'</tr>');
	  document.getElementById('kr_rcv').innerHTML += ('<tr>'+'<td>'+kr_rcv+'</td>'+'</tr>');
    	document.getElementById('kr_cfr').innerHTML += ('<tr>'+'<td>'+kr_cfr+'</td>'+'</tr>');
	     
      }
    });