(function($) {
  'use strict';

  toastr.options =
  {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  $("#toast-success").on("click", function(){
    toastr.remove();
    toastr.options.positionClass = "toast-top-left";
    toastr.success('متن تستی در این قسمت', 'لورم ایپسوم متن نامفهوم ');
  });
  $("#toast-danger").on("click", function(){
    toastr.remove();
    toastr.options.positionClass = "toast-top-right";
    toastr.error('متن تستی در این قسمت', 'لورم ایپسوم متن نامفهوم ');
  });
  $("#toast-warning").on("click", function(){
    toastr.remove();
    toastr.options.positionClass = "toast-bottom-left";
    toastr.warning('متن تستی در این قسمت', 'لورم ایپسوم متن نامفهوم ');
  });
  $("#toast-info").on("click", function(){
    toastr.remove();
    toastr.options.positionClass = "toast-bottom-right";
    toastr.info('متن تستی در این قسمت', 'لورم ایپسوم متن نامفهوم ');
  });

  // Convert form data to a proper json object
  function jQFormSerializeArrToJson(formSerializeArr){
   var jsonObj = {};
   jQuery.map( formSerializeArr, function( n, i ) {
      jsonObj[n.name] = n.value;
   });

   return jsonObj;
  }

  $("#toast-form").on('submit', function(e){
    e.preventDefault();
    var toastData = jQFormSerializeArrToJson( $(this).serializeArray() );
    toastr.options = {
      "closeButton" : toastData.closeButton,
      "debug": toastData.debug,
      "preventDuplicates": toastData.preventDuplicates,
      "progressBar": toastData.progressBar,
      "positionClass": toastData.toastPosition
    }
    switch(toastData.toastType){
      case 'success':
        toastr.success(toastData.message, toastData.title);
      break;
      case 'info':
        toastr.info(toastData.message, toastData.title);
      break;
      case 'warning':
        toastr.warning(toastData.message, toastData.title);
      break;
      case 'danger':
        toastr.error(toastData.message, toastData.title);
      break;
      default:
        toastr.success(toastData.message, toastData.title);
      break;
    }
    $("#toast-options").text("toastr.options = " + JSON.stringify(toastr.options));
  });

  $("#clearToast").on('click', function(){
    toastr.remove();
  });

})(jQuery);