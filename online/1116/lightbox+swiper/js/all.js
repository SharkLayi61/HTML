$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    // 可選參數
    loop: true,

    // 如果需要分頁設置
    pagination: {
      el: '.swiper-pagination',
    },

    // 上一個/下一個 按鈕
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  
});