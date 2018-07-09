       ////////////////// New ///////////////////////////////////////
       jQuery.ajax({
        url : '/use-as-latest',
        data : {
          modelNid : selectedValue
        },
        beforeSend : function() {
        $('input[name="useAsLatest"]:checked').attr("disabled",true);
        },
        type : 'post',
        cache : false,
        success : function(data) {
          $('input[name="useAsLatest"]:checked').attr("disabled",false);
          // For reloading current page.
          location.reload();
          console.log(data);
        },
        error : function(xhr, status, error) {
          // executed if something went wrong during call
          if (xhr.status > 0)
            alert('got error: ' + status);
        }
      });
