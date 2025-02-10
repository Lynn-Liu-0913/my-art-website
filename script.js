console.log("这是我的艺术网站 - JS 已加载成功!");
var swiper = new Swiper('.swiper-container', {
  // 一次显示5个幻灯片（你可以改为6，根据需要）
  slidesPerView: 4,
  // 设置幻灯片之间的间距（单位：px）
  spaceBetween: 10,
  loop: true,  // 无限循环播放
  centeredSlides: true,    // 让当前滑块始终居中
  speed: 1300,             // 让滚动过渡更柔和（单位：ms）
  autoplay: {
    delay: 2000,  // 每隔3秒自动切换
    disableOnInteraction: false,
  },
  // 如果需要分页器和导航按钮
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
