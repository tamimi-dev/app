$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var susp = data.feed.entry[i]['gsx$susp']['$t'];
		var confir = data.feed.entry[i]['gsx$conf']['$t'];
var death = data.feed.entry[i]['gsx$death']['$t'];
     var recov = data.feed.entry[i]['gsx$recover']['$t'];
	      var seri = data.feed.entry[i]['gsx$serious']['$t'];

var cfr = data.feed.entry[i]['gsx$cfr']['$t'];
     var rn = data.feed.entry[i]['gsx$r0']['$t'];
	      var rt = data.feed.entry[i]['gsx$rt']['$t'];
          var china = data.feed.entry[i]['gsx$china']['$t'];
	      var nochina = data.feed.entry[i]['gsx$nochina']['$t'];

     
		document.getElementById('confir').innerHTML += ('<tr>'+'<td>'+confir+'</td>'+'</tr>');
		document.getElementById('death').innerHTML += ('<tr>'+'<td>'+death+'</td>'+'</tr>');
	      document.getElementById('recov').innerHTML += ('<tr>'+'<td>'+recov+'</td>'+'</tr>');
	      document.getElementById('seri').innerHTML += ('<tr>'+'<td>'+seri+'</td>'+'</tr>');
        
    	document.getElementById('cfr').innerHTML += ('<tr>'+'<td>'+cfr+'</td>'+'</tr>');
	      document.getElementById('rn').innerHTML += ('<tr>'+'<td>'+rn+'</td>'+'</tr>');
	      document.getElementById('rt').innerHTML += ('<tr>'+'<td>'+rt+'</td>'+'</tr>');
        

	      document.getElementById('china').innerHTML += ('<tr>'+'<td>'+china+'</td>'+'</tr>');
	      document.getElementById('nochina').innerHTML += ('<tr>'+'<td>'+nochina+'</td>'+'</tr>');

   document.getElementById('susp').innerHTML += ('<tr>'+'<td>'+susp+'</td>'+'</tr>');
	       document.getElementById('rt').innerHTML += ('<tr>'+'<td>'+rt+'</td>'+'</tr>');
      }
    });
