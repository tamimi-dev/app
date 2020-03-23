$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var jp_cse = data.feed.entry[i]['gsx$jpcase']['$t'];
		var jp_dth = data.feed.entry[i]['gsx$jpdth']['$t'];
var jp_crit = data.feed.entry[i]['gsx$jpcrit']['$t'];
     var jp_rcv = data.feed.entry[i]['gsx$jprcv']['$t'];
	      var jp_cfr = data.feed.entry[i]['gsx$jpcfr']['$t'];



     
		document.getElementById('jp_cse').innerHTML += ('<tr>'+'<td>'+jp_cse+'</td>'+'</tr>');
		document.getElementById('jp_dth').innerHTML += ('<tr>'+'<td>'+jp_dth+'</td>'+'</tr>');
	  document.getElementById('jp_crit').innerHTML += ('<tr>'+'<td>'+jp_crit+'</td>'+'</tr>');
	  document.getElementById('jp_rcv').innerHTML += ('<tr>'+'<td>'+jp_rcv+'</td>'+'</tr>');
    	document.getElementById('jp_cfr').innerHTML += ('<tr>'+'<td>'+jp_cfr+'</td>'+'</tr>');
	     
      }
    });