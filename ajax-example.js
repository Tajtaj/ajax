       jQuery.ajax({
       url : allVariableImp,
       beforeSend : function() {

       },
       type : 'post',
       async : false,
       cache : false,
       success : function(data3) {
        $(".all-variables").html("");
        console.log("!!!!!!!!!!!!!!!!!!!!!!");
        console.log(data3);
        console.log("!!!!!!!!!!!!!!!!!!!!!!");
        var dataAppend = "<div class='individual-row-first'><span class='name'>Most Impacting Variables</span></div>";
				var finalArray = {};
        var covariateValues = [];
        var x = "";
        for(var i in data3) {
          var importance = data3[i]['cov.labels'];
          var covValue = data3[i]['cov.value'];
         var impact = data3[i]['Impact'];
         var pattern = '\\+';
         var reg = new RegExp(pattern,'');
          if(impact.search(reg) == -1){
          dataAppend += "<div class='individual-row'><span class='var-name red'><p class='cov-label'>"+importance+"</p><p class='cov-value'>"+covValue+"</p></span></div>";  
          }else{
           dataAppend += "<div class='individual-row'><span class='var-name green'><p class='cov-label'>"+importance+"</p><p class='cov-value'>"+covValue+"</p></span></div>";
          }
          
        }
          $(".all-variables").append(dataAppend);
        },
        error : function(xhr, status, error) {
          // executed if something went wrong during call
          if (xhr.status > 0)
            alert('got error: ' + status);
        }
      });
