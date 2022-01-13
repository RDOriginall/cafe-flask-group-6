(function ($) {
  'use strict';

  $(".ms-panel-body").on('click', '.trigger-swal', function () {

    var swalType = $(this).data('swal');

    switch (swalType) {

      case 'basic':
        Swal.fire('عنوان', 'متن توضیح در این قسمت', 'question');
        break;
      case 'with-footer':
        Swal.fire({
          type: 'خطا',
          title: 'متاسفیم',
          text: 'اشتباهی رخ داده است.!',
          footer: '<a href="#">چرا این مشکل به وجود آمده است?</a>'
        });
        break;
      case 'positioned':
        Swal.fire({
          position: 'top-end',
          type: 'موفق',
          title: 'اطلاعات شما با موفقیت ذخیره شد',
          showConfirmButton: false,
          timer: 1500
        });
        break;
      case 'with-html':
        Swal.fire({
          title: '<strong>اچ تی ام ال <u>مثال</u></strong>',
          type: 'info',
          html: 'شما می توانید از تگ های اچ تی ام ال مانند <b>متن بولد</b>, ' + '<a href="#">لینک</a> ' + 'و غیره استفاده کنید',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: 'عالی!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText: 'بستن',
          cancelButtonAriaLabel: 'Thumbs down'
        });
        break;
      case 'multi-step':
        Swal.fire({
          title: 'مطمئن هستید?',
          text: "این عملیات غیرقابل بازگشت ست!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'بله!'
        }).then(function (result) {
          if (result.value) {
            Swal.fire('پاک شد!', 'فایل شما با موفقیت حذف شد.', 'موفقیت');
          }
        });
        break;
      case 'auto-close':
        var timerInterval = void 0;
        Swal.fire({
          title: 'هشدار با بسته شدن خودکار!',
          html: 'هشدار در <strong></strong> ثانیه دیگر بسته خواهد شد.',
          timer: 2000,
          onBeforeOpen: function onBeforeOpen() {
            Swal.showLoading();
            timerInterval = setInterval(function () {
              Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft();
            }, 100);
          },
          onClose: function onClose() {
            clearInterval(timerInterval);
          }
        }).then(function (result) {
          if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.timer) ;
        });
        break;
      case 'ajax':
        var ipAPI = 'https://api.ipify.org?format=json';
        Swal.queue([{
          title: 'ای پی شما',
          confirmButtonText: 'ای پی من را نمایش بده',
          text: 'ای پی شما با اجاکس دریافت خواهد شد ' ,
          showLoaderOnConfirm: true,
          preConfirm: function preConfirm() {
            return fetch(ipAPI).then(function (response) {
              return response.json();
            }).then(function (data) {
              return Swal.insertQueueStep(data.ip);
            }).catch(function () {
              Swal.insertQueueStep({
                type: 'خطا',
                title: ' ای پی شما دریافت نشد'
              });
            });
          }
        }]);
        break;
      case 'custom':
        Swal.fire({
          title: 'مودال سفارشی!',
          text: 'همراه با تصویر.',
          imageUrl: '../../assets/img/costic/french-fries.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        });
        break;
      default:
        Swal.fire('عنوان', 'متن توضیح در این قسمت', 'question');
        break;

    }
  });
})(jQuery);
