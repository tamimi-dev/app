$.getJSON("https://spreadsheets.google.com/feeds/list/11_RyvJQOXYaI_TL2CikN4oSFAEYaeqhrHdXCazgYgh0/o9ztm3j/public/values?alt=json", function(data) {

  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {


    var ico = data.feed.entry[i]['gsx$ico']['$t'];


  }

});

$(document).ready(function() {
  $('#globe').dataTable({
    responsive: true,
    "bServerSide": false,
    "bProcessing": true,
    "sAjaxDataProp": "feed.entry",
    "sAjaxSource": "https://spreadsheets.google.com/feeds/list/11_RyvJQOXYaI_TL2CikN4oSFAEYaeqhrHdXCazgYgh0/o9ztm3j/public/values?alt=json",

    "columnDefs": [{

      targets: 0,
      render: function(ico) {
        return '<svg class="avatar avatar--120"><g class="avatar__box"><image xlink:href="https://coronatrackers.com/assets/icons/cntry/us/'+ico+'.svg" height="100%" width="100%"></image></g></svg>'
      }
    }],

    "aoColumns": [{
       "autoWidth": true,

        "mDataProp": "gsx$ico.$t"
      },
      {
     
        "mDataProp": "gsx$county.$t"
      },
      {
       "className": "dt_case",
       "mDataProp": "gsx$case.$t"
      },
      {
      "className": "dt_dth",
        "mDataProp": "gsx$dth.$t"
      },
      {
        "className": "dt_recov",
        "mDataProp": "gsx$pop.$t"
      },
      {
       // "className": "dt_cfr",
        "mDataProp": "gsx$csepop.$t"
      },
      {
    //    "className": "dt_rec_rate",
        "mDataProp": "gsx$dthpop.$t"
      }
    ]
  });
});
