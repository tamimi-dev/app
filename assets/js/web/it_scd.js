$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var it_cse = data.feed.entry[i]['gsx$itcase']['$t'];
		var it_dth = data.feed.entry[i]['gsx$itdth']['$t'];
var it_crit = data.feed.entry[i]['gsx$itcrit']['$t'];
     var it_rcv = data.feed.entry[i]['gsx$itrcv']['$t'];
	      var it_cfr = data.feed.entry[i]['gsx$itcfr']['$t'];



     
		document.getElementById('it_cse').innerHTML += ('<tr>'+'<td>'+it_cse+'</td>'+'</tr>');
		document.getElementById('it_dth').innerHTML += ('<tr>'+'<td>'+it_dth+'</td>'+'</tr>');
	  document.getElementById('it_crit').innerHTML += ('<tr>'+'<td>'+it_crit+'</td>'+'</tr>');
	  document.getElementById('it_rcv').innerHTML += ('<tr>'+'<td>'+it_rcv+'</td>'+'</tr>');
    	document.getElementById('it_cfr').innerHTML += ('<tr>'+'<td>'+it_cfr+'</td>'+'</tr>');
	     
      }
    });