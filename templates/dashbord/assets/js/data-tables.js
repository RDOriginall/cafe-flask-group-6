(function($) {
  'use strict';
var dataSet = [
    [ "40521","  <img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیتزا",  "5421", "موجود", "23000 تومان", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "98521", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ", "8422", "موجود", "17000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45454", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>همبرگر",  "1562", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "12121", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوشی",  "6224", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "56454", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>کیک",  "5407", "عدم موجودی", "16000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "25252", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ساندویچ", "4804", "موجود", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45454", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص", "9608", "عدم موجودی", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "64541", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیاز سوخاری",  "6200", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56562", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ماکارونی",  "2360", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "51558", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماکارونی",  "1667", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55841", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا مکزیکی", "3814", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "55811", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'> ساندویچ مرغ",  "9497", "موجود", "34000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "01475", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ سوخاری",  "6741", "موجود", "47000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55454", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> پیتزا پستو",  "3597", "موجود", "3000 تومان1" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "12145", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>نان سیر", "1965", "عدم موجودی", "3000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "52351", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ماکارونی",  "1581", "موجود", "30000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45823", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>پاستا با سوسیس",  "3059", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "98541", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا ",  "1721", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "22366", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'> هات داگ ویژه",  "2558", "عدم موجودی", "13000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56465", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "2290", "موجود", "21000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "34256", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ",  "1937", "موجود", "34000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45484", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>جوجه",  "6154", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "41028", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوپ شیر ",  "8330", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15485", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ تنوری",  "3023", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "48568", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ماکارونی",  "5797", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45815", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا پستو",  "8822", "موجود", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "46542", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>سوشی",  "9239", "موجود", "3000 تومان5","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "65412", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا",  "1314", "موجود", "20000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "89658", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>هات داگ",  "2947", "موجود", "8000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "02351", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "8899", "موجود", "16000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56212", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> سوشی",  "2769", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "78065", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماهی سوخاری", "6832", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56121", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>چیپس و نیر",  "3606", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14526", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>کباب سلطانی",  "2860", "موجود", "21000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15451", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>جوجه کباب",  "8240", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14451", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا",  "5384", "عدم موجودی", "85000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ]
  ];


var dataSet2 = [
    [ "40521","  <img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیتزا",  "5421", "موجود", "23000 تومان", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "98521", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ", "8422", "موجود", "17000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45454", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>همبرگر",  "1562", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "12121", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوشی",  "6224", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "56454", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>کیک",  "5407", "عدم موجودی", "16000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "25252", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ساندویچ", "4804", "موجود", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45454", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص", "9608", "عدم موجودی", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "64541", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیاز سوخاری",  "6200", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56562", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ماکارونی",  "2360", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "51558", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماکارونی",  "1667", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55841", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا مکزیکی", "3814", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "55811", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'> ساندویچ مرغ",  "9497", "موجود", "34000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "01475", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ سوخاری",  "6741", "موجود", "47000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55454", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> پیتزا پستو",  "3597", "موجود", "3000 تومان1" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "12145", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>نان سیر", "1965", "عدم موجودی", "3000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "52351", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ماکارونی",  "1581", "موجود", "30000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45823", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>پاستا با سوسیس",  "3059", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "98541", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا ",  "1721", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "22366", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'> هات داگ ویژه",  "2558", "عدم موجودی", "13000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56465", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "2290", "موجود", "21000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "34256", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ",  "1937", "موجود", "34000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45484", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>جوجه",  "6154", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "41028", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوپ شیر ",  "8330", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15485", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ تنوری",  "3023", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "48568", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ماکارونی",  "5797", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45815", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا پستو",  "8822", "موجود", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "46542", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>سوشی",  "9239", "موجود", "3000 تومان5","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "65412", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا",  "1314", "موجود", "20000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "89658", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>هات داگ",  "2947", "موجود", "8000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "02351", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "8899", "موجود", "16000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56212", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> سوشی",  "2769", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "78065", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماهی سوخاری", "6832", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56121", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>چیپس و نیر",  "3606", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14526", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>کباب سلطانی",  "2860", "موجود", "21000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15451", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>جوجه کباب",  "8240", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14451", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا",  "5384", "عدم موجودی", "85000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ]
  ];



var dataSet1= [
    [ "40521", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> مریم",  "خیابان بهار", "kbc@gfail.com", " نان سیر" ,"23000 تومان"],
    [ "98521", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> علی",  "خیابان بهار", "lbc@gfail.com", " پیتزا" ,"45 تومان"],
    [ "45454", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> بیتا",  "خیابان اردیبهشت", "abc@gfail.com", " همبرگر" ,"23000 تومان" ],
    [ "12121", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "ghj@gfail.com", " همبرگر","56 تومان" ],
    [ "56454", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> علی",  "خیابان بهار", "abc@gfail.com", "نان سیر" ,"23000 تومان" ],
    [ "25252", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> محمد",  "خیابان بهار", "bbc@gfail.com", " پیتزا" ,"23000 تومان" ],
    [ "45454", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> حمید",  "خیابان آفتاب", "ghj@gfail.com", " نان سیر","56 تومان" ],
    [ "64541", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "khj@gfail.com", " نان سیر","56 تومان"],
    [ "56562", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> بیتا",  "خیابان بهار", "lhj@gfail.com", " نان سیر","36 تومان"],
    [ "51558", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> مریم",  "خیابان بهار", "ihj@gfail.com", " پیتزا","56 تومان"],
    [ "55841", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "mhj@gfail.com", " نان سیر","56 تومان" ],
    [ "55811", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> مهران",  "خیابان بهار", "ghj@gfail.com", "ماکارونی","56 تومان" ],
    [ "01475", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'>  علی",  "خیابان بهشت", "dhj@gfail.com", " ساندویچ","46 تومان"],
    [ "55454", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> مهران",  "خیابان بهشت", "bhj@gfail.com", " ساندویچ","46 تومان"],
    [ "12145", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> بیتا",  "خیابان اردیبهشت", "abc@gfail.com", " همبرگر" ,"23000 تومان" ],
    [ "52351", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "ghj@gfail.com", " همبرگر","56 تومان" ],
    [ "45823", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> علی",  "خیابان خرداد", "abc@gfail.com", " همبرگر" ,"23000 تومان" ],
    [ "98541", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> مریم",  "خیابان بهار", "kbc@gfail.com", " نان سیر" ,"23000 تومان" ],
    [ "22366", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> بیتا",  "خیابان اردیبهشت", "abc@gfail.com", " همبرگر" ,"23000 تومان"],
    [ "56465", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> جاسم",  "خیابان اردیبهشت", "abc@gfail.com", " همبرگر" ,"23000 تومان"  ],
    [ "34256", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> علی",  "خیابان خرداد", "abc@gfail.com", " ساندویچ" ,"23000 تومان"],
    [ "45484", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> محمد",  "خیابان بهار", "bbc@gfail.com", "  پیتزا" ,"23000 تومان" ],
    [ "41028","<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> محمد",  "خیابان بهار", "bbc@gfail.com", " پیتزا" ,"23000 تومان" ],
    [ "15485", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "ghj@gfail.com", " همبرگر","56 تومان"],
    [ "48568", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> بیتا",  "خیابان بهار", "lhj@gfail.com", " نان سیر","36 تومان" ],
    [ "45815", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> علی",  "خیابان خرداد", "abc@gfail.com", "Sandwich" ,"23000 تومان"  ],
    [ "46542", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> علی",  "خیابان خرداد", "abc@gfail.com", "ساندویچ مرغ" ,"23000 تومان"  ],
    [ "65412", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> علی",  "خیابان بهار", "lbc@gfail.com", "  پیتزا" ,"54 تومان" ],
    [ "89658", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> حمید",  "خیابان خرداد", "ghj@gfail.com", " همبرگر","56 تومان" ],
    [ "02351", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> مهران",  "خیابان بهار", "ghj@gfail.com", "ماکارونی","56 تومان"],
    [ "56212", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> حمید",  "خیابان آفتاب", "ghj@gfail.com", " نان سیر","56 تومان" ],
    [ "78065", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> حمید",  "خیابان آفتاب", "ahj@gfail.com", " مرغ سوخاری","56 تومان"],
    [ "56121", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> حمید",  "خیابان آفتاب", "ghj@gfail.com", " مرغ سوخاری","56 تومان" ],
    [ "14526", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> لیلا",  "خیابان بهشت", "ehj@gfail.com", " پیتزا","56 تومان"],
    [ "15451", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> مهران",  "خیابان بهار", "ghj@gfail.com", " ماکارونی","56 تومان" ],
    [ "14451", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> محمد",  "خیابان بهار", "bbc@gfail.com", " پیتزا" ,"23000 تومان" ]
  ];

   var dataSet6 = [
    [ "40521","  <img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیتزا",  "5421", "موجود", "23000 تومان", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "98521", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ", "8422", "موجود", "17000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45454", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>همبرگر",  "1562", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "12121", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوشی",  "6224", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "56454", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>کیک",  "5407", "عدم موجودی", "16000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "25252", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ساندویچ", "4804", "موجود", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45454", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص", "9608", "عدم موجودی", "13000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "64541", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>پیاز سوخاری",  "6200", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56562", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ماکارونی",  "2360", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "51558", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماکارونی",  "1667", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55841", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا مکزیکی", "3814", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "55811", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'> ساندویچ مرغ",  "9497", "موجود", "34000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "01475", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ سوخاری",  "6741", "موجود", "47000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "55454", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> پیتزا پستو",  "3597", "موجود", "3000 تومان1" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "12145", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>نان سیر", "1965", "عدم موجودی", "3000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "52351", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> ماکارونی",  "1581", "موجود", "30000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45823", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>پاستا با سوسیس",  "3059", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "98541", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا ",  "1721", "موجود", "23000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "22366", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'> هات داگ ویژه",  "2558", "عدم موجودی", "13000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56465", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "2290", "موجود", "21000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "34256", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>آش ",  "1937", "موجود", "34000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "45484", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>جوجه",  "6154", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "41028", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>سوپ شیر ",  "8330", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15485", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>مرغ تنوری",  "3023", "موجود", "10000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "48568", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>ماکارونی",  "5797", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "45815", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا پستو",  "8822", "موجود", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "46542", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>سوشی",  "9239", "موجود", "3000 تومان5","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "65412", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>ساندویچ زاپاتا",  "1314", "موجود", "20000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "89658", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>هات داگ",  "2947", "موجود", "8000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "02351", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>ساندویچ مخصوص",  "8899", "موجود", "16000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56212", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> سوشی",  "2769", "عدم موجودی", "9","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "78065", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>ماهی سوخاری", "6832", "موجود", "20000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "56121", "<img src='../../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>چیپس و نیر",  "3606", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14526", "<img src='../../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>کباب سلطانی",  "2860", "موجود", "21000 تومان" ,"<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    [ "15451", "<img src='../../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>جوجه کباب",  "8240", "موجود", "23000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
    [ "14451", "<img src='../../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>پیتزا",  "5384", "عدم موجودی", "85000 تومان","<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>" ]
  ];




  var tableOne = $('#data-table-1').DataTable( {
    data: dataSet2,
    columns: [
      { title: "شناسه محصول" },
      { title: "نام محصول" },

      { title: "تعداد موجودی" },
      { title: "وضعیت" },
      { title: "قیمت" }
    ],
  });




  var tableTwo = $('#data-table-2').DataTable( {
    data: dataSet,
    columns: [
      { title: "شناسه محصول" },
      { title: "نام محصول" },

      { title: "تعداد موجودی" },
      { title: "وضعیت" },
      { title: "قیمت" }
    ],
  });
  var tableThree = $('#data-table-3').DataTable( {
    data: dataSet,
    columns: [
      { title: "شناسه محصول" },
      { title: "نام محصول" },

      { title: "تعداد موجودی" },
      { title: "وضعیت" },
      { title: "قیمت" }
    ],
    scrollY: 400
  });
  var tableFour = $('#data-table-4').DataTable( {
    data: dataSet1,
    columns: [
      { title: "شناسه مشتری" },
      { title: "نام مشتری" },

      { title: "محل" },
      { title: "ایمیل" },
      { title: "محصولات سفارش داده" },
      { title: "پرداختی" }

    ],
  });


  var tableFour = $('#data-table-5').DataTable( {
    data: dataSet,
    columns: [
      { title: "شناسه محصول" },
      { title: "نام محصول" },

      { title: "تعداد موجودی" },
      { title: "وضعیت" },
      { title: "قیمت" },


    ],
  });

var tableOne = $('#data-table-6').DataTable( {
    data: dataSet6,
    columns: [
      { title: "شناسه محصول" },
      { title: "نام محصول" },

      { title: "تعداد موجودی" },
      { title: "وضعیت" },
      { title: "قیمت" }
    ],
  });



})(jQuery);
