$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/okgeqe0/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var sp_cse = data.feed.entry[i]['gsx$spcase']['$t'];
		var sp_dth = data.feed.entry[i]['gsx$spdth']['$t'];
var sp_crit = data.feed.entry[i]['gsx$spcrit']['$t'];
     var sp_rcv = data.feed.entry[i]['gsx$sprcv']['$t'];
	      var sp_cfr = data.feed.entry[i]['gsx$spcfr']['$t'];



     
		document.getElementById('sp_cse').innerHTML += ('<tr>'+'<td>'+sp_cse+'</td>'+'</tr>');
		document.getElementById('sp_dth').innerHTML += ('<tr>'+'<td>'+sp_dth+'</td>'+'</tr>');
	  document.getElementById('sp_crit').innerHTML += ('<tr>'+'<td>'+sp_crit+'</td>'+'</tr>');
	  document.getElementById('sp_rcv').innerHTML += ('<tr>'+'<td>'+sp_rcv+'</td>'+'</tr>');
    	document.getElementById('sp_cfr').innerHTML += ('<tr>'+'<td>'+sp_cfr+'</td>'+'</tr>');
	     
      }
    });