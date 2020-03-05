$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/o4k47ye/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var score = data.feed.entry[i]['gsx$score']['$t'];
        var crit = data.feed.entry[i]['gsx$crit']['$t'];
        var one = data.feed.entry[i]['gsx$one']['$t'];
        var two = data.feed.entry[i]['gsx$two']['$t'];
        var three = data.feed.entry[i]['gsx$three']['$t'];
        var four = data.feed.entry[i]['gsx$four']['$t'];       


        document.getElementById('score').innerHTML += ('<tr><th scope="row">'+crit+'</th><td>'+one+'</td><td>'+two+'</td><td>'+three+'</td><td>'+four+'</td><td class="bg-danger">'+score+'</td></tr>');

      }
    });
