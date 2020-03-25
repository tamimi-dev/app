

$.getJSON("https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ofkyxve/public/values?alt=json", function(data) {

  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {


    var ico = data.feed.entry[i]['gsx$ico']['$t'];


   /* document.getElementById('ico').innerHTML += ('<tr><td><svg class="avatar avatar--120">'+'<g class="avatar__box">'+'<image xlink:href="https://tamimi-dev.github.io/app/assets/icons/cntry/'+ico+'.svg"'+'height="100%"'+'width="100%"></image></g></svg></td></tr>'); */
  }

});

$(document).ready(function() {
  $('#globe').dataTable({
    responsive: true,
    "bServerSide": false,
    "bProcessing": true,
    "sAjaxDataProp": "feed.entry",
    "sAjaxSource": "https://spreadsheets.google.com/feeds/list/12Lyd3k0PRpe-Ie_LaeJaEPm3FwF3iz1gizAOSprn7l0/ofkyxve/public/values?alt=json",

    "columnDefs": [{

      targets: 0,
      render: function(ico) {
        return '<svg class="avatar avatar--120"><g class="avatar__box"><image xlink:href="https://coronatrackers.com/assets/icons/cntry/'+ico+'.svg" height="100%" width="100%"></image></g></svg>'
      }
    }],

    "aoColumns": [{
       "autoWidth": true,
       width: "40%",
        "mDataProp": "gsx$ico.$t"
      },
      {
     
        "mDataProp": "gsx$country.$t"
      },
      {
        "mDataProp": "gsx$cases.$t"
      },
      {
        "mDataProp": "gsx$chcases.$t"
      },
      {
        "mDataProp": "gsx$deaths.$t"
      },
      {
        "mDataProp": "gsx$chdeaths.$t"
      }
    ]
  });
});


