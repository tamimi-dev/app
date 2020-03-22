$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/otu1nbu/public/values?alt=json", function(data) {

  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {

    var cntry = data.feed.entry[i]['gsx$icocntry']['$t'];
    var cntry_case = data.feed.entry[i]['gsx$icontotcasepercntry']['$t'];
    var ico = data.feed.entry[i]['gsx$icon']['$t'];
    var dth = data.feed.entry[i]['gsx$dthcntry']['$t'];
    var chc = data.feed.entry[i]['gsx$chc']['$t'];
    var cdt = data.feed.entry[i]['gsx$chd']['$t'];

    document.getElementById('ico_cntry').innerHTML += ('<tr><td><svg class="avatar avatar--120">' + '<g class="avatar__box">' + '<image xlink:href="https://tamimi-dev.github.io/app/assets/icons/cntry/' + ico + '.svg"' + ' height="100%"' + 'width="100%"></image></g></svg></td><td>' + cntry + '</td><td>' + cntry_case + '</td><td>' + chc + '</td><td>' + dth + '</td><td>' + cdt + '</td></tr>');
  }



});
  $(document).ready(function() {
    $('#globe').DataTable({
      responsive: true
    });
  });
