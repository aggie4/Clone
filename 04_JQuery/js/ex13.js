$('.pdTabBtn ul li').click(function () {
    let i = $(this).index();
    $('.pdTabBtn ul li').removeClass('active');
    $(this).addClass('active');
    $('.pdList').removeClass('view');
    $('.pdList').eq(i).addClass('view');
    $('.pdList').slick('setPosition');
    // display: none 처리 된 슬라이드 영역을 화면에 노출시키면 슬릭 영역이 제대로 자리를 못잡는다
    // 한 번 슬라이드가 도작한 후에는 슬라이드가 정상이 된다.
    // 그래서 setPosition 옵션을 사용하도록 해놓는다
});

$('.pdList').slick({
    arrows: false,
    dots: true,
    slideToShow: 2,
});
