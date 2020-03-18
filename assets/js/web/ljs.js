$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/o7om10o/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {
	var date = data.feed.entry[i]['gsx$date']['$t'];
        var time = data.feed.entry[i]['gsx$time']['$t'];
        var cose = data.feed.entry[i]['gsx$case']['$t'];
        var loc = data.feed.entry[i]['gsx$location']['$t'];
		var desc = data.feed.entry[i]['gsx$description']['$t'];

                document.getElementById('timel').innerHTML += ('<article class="timeline__item">'+'<h5 class="title title--h5 timeline__title">'+cose+' '+'<span class="badge badge-pill badge-danger">'+loc+'</span>'+'</h5>'+'<span class="timeline__period">'+date+' '+time+'</span>'+'<p class="timeline__description">'+desc+'</p>'+'</article>');
      }
    });



