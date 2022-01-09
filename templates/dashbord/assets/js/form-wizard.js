(function($) {
  'use strict';

  $("#default-wizard").steps({
    headerTag: "h3",
    bodyTag: "div",
    autoFocus: true,
    titleTemplate: '#title#',
    labels: {
      current: "",
      finish: 'ارسال',
      previous: 'قبلی',
      next:'بعدی'
    },
    onFinished: function(event, currentIndex) {
      alert("فرم با موفقیت ارسال شد!");
    }
  });

  $(".style2-wizard, .style3-wizard, .style4-wizard").steps({
    headerTag: "h3",
    bodyTag: "div",
    autoFocus: true,
    titleTemplate: '<span class="number">#index#</span> #title#',
    labels: {
      current: "",
      finish: 'ارسال',
      previous: 'قبلی',
      next:'بعدی'
    },
    onFinished: function(event, currentIndex) {
      alert("فرم با موفقیت ارسال شد!");
    }
  });

})(jQuery);
