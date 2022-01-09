(function($) {
  'use strict';
  const driver = new Driver();

  // Define the steps for introduction
  driver.defineSteps([
    {
      element: '#step-1',
      popover: {
        title: 'موقعیت تور',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی .',
        position: 'right'
      }
    },
    {
      element: '#step-2',
      popover: {
        title: '<em>متن تستی در این قسمت</em>',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی .',
        position: 'bottom'
      }
    },
    {
      element: '#step-3',
      popover: {
        title: 'تور با تصویر',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی . <img src="../../assets/img/costic/pizza.jpg" alt="img"/>',
        position: 'top'
      }
    },
    {
      element: '#step-4',
      popover: {
        title: 'دکمه های کیبرد',
        description: 'با دکمه چپ و راست میتوانید جا به جا و با دکمه ESC میتوانید خارج شوید',
        position: 'left'
      }
    },
    {
      element: '#step-5',
      popover: {
        title: 'متن تستی ',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی .',
        position: 'top'
      }
    },
  ]);

  // Start the introduction
  driver.start();
  $("#replay-tour").on('click', function(e){
    e.stopPropagation();
    driver.start();
  });

})(jQuery);
