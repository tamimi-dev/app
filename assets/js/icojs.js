$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/o512ru7/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var cntry = data.feed.entry[i]['gsx$icocntry']['$t'];
        var cntry_case = data.feed.entry[i]['gsx$icontotcasepercntry']['$t'];
        var ico = data.feed.entry[i]['gsx$icon']['$t'];
        var dth = data.feed.entry[i]['gsx$dthcntry']['$t'];

       // original        document.getElementById('ico_cntry').innerHTML += ('<div class="col-lg-4 col-xl-4">'+'<div class="box box__second ">'+'<svg class="avatar avatar--120">'+'<g class="avatar__box">'+'<image xlink:href="https://tamimi-dev.github.io/app/assets/icons/cntry/'+ico+'.svg"'+' height="100%"'+'width="100%"></image></g></svg><div class="text-center"><h4 class="title title--h4 sidebar__user-name">'+cntry+'</h4></div><div class="text-center"><table class="table5" align="center"><tr><th>Cases</th><th>Deaths</th></tr><tr><td>'+cntry_case+'</td><td>'+dth+'</td></tr><tr><td>'+chc+'</td><td>'+cdt+'</td></tr></table></div></div></div>');
      
            
            
        document.getElementById('ico_cntry').innerHTML += ('<div class="col-lg-4 col-xl-4">'+'<div class="box box__second ">'+'<svg class="avatar avatar--120">'+'<g class="avatar__box">'+'<image xlink:href="https://tamimi-dev.github.io/app/assets/icons/cntry/'+ico+'.svg"></image></g></svg><div class="text-center"><h4 class="title title--h4 sidebar__user-name">'+cntry+'</h4></div><div class="text-center"><table class="table5" align="center"><tr><th>Cases</th><th>Deaths</th></tr><tr><td>'+cntry_case+'</td><td>'+dth+'</td></tr><tr><td>'+chc+'</td><td>'+cdt+'</td></tr></table></div></div></div>');
      
           // png '<div class="col-lg-4 col-xl-4">'+'<div class="box box__second ">'+'<div class="avatar avatar--120"><img src="https://tamimi-dev.github.io/app/assets/icons/cntry/png/'+ico+'.png"'+' height="100%"'+'width="100%" alt=""></div><div class="text-center"><h4 class="title title--h4 sidebar__user-name">'+cntry+'</h4></div><div class="text-center"><table class="table5" align="center"><tr><th>Cases</th><th>Deaths</th></tr><tr><td>'+cntry_case+'</td><td>'+dth+'</td></tr><tr><td>'+chc+'</td><td>'+cdt+'</td></tr></table></div></div></div>' 
            
          //  document.getElementById('ico_cntry').innerHTML += ('<div class="box box__second">'+'<svg class="avatar avatar--120">'+'<g class="avatar__box">'+'<image xlink:href="https://tamimi-dev.github.io/app/assets/icons/cntry/'+ico+'.svg"'+' height="100%"'+'width="100%"></image></g></svg><div class="text-center"><h4 class="title title--h4 sidebar__user-name">'+cntry+'</h4></div><div class="text-center"><table class="table5" align="center"><tr><th>Cases</th><th>Deaths</th></tr><tr><td>'+cntry_case+'</td><td>'+dth+'</td></tr></table></div></div>');
      }
    });
