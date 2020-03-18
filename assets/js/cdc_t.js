$.getJSON("https://spreadsheets.google.com/feeds/list/1fgjVhzrbqcCOP8Zls00BV--JsIXEenwWmMD2iF8X9VE/otu1nbu/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var r_c = data.feed.entry[i]['gsx$redcntry']['$t'];
        var r_d = data.feed.entry[i]['gsx$reddate']['$t'];
        
         
        document.getElementById('red').innerHTML += ('<tr><td>'+r_c+'</td><td>'+r_d+'</td></tr>');
        
       
      };
      
      var j;
      for (j = 0; j < sheetData.length; j++) 
      {
      var y_c = data.feed.entry[j]['gsx$yellowcntry']['$t'];
        var y_d = data.feed.entry[j]['gsx$yellowdate']['$t'];
        document.getElementById('yel').innerHTML += ('<tr><td>'+y_c+'</td><td>'+y_d+'</td></tr>');
        
      };
      
      var k;
      for (k = 0; k < sheetData.length; k++) 
      {
       var g_c = data.feed.entry[k]['gsx$greencntry']['$t'];
        var g_d = data.feed.entry[k]['gsx$greendate']['$t'];     
         document.getElementById('gree').innerHTML += ('<tr><td>'+g_c+'</td><td>'+g_d+'</td></tr>');
      
      }
      
      
      
    });
