//setTimeout(showSlides, 2000);
/* $('.list-Search').on('click', function () {
    $('.active').css('display:block');
}); */
/* $('.inner .list-Search').click(function () {
    let d = $(this).siblings('active').css('display');
    if (d == 'block') {
        return false;
    }
}); */
/* let a = $('.inner .list-Search');
console.log('버튼 클릭이 되나여?', a);
let b = $('.active');
console.log('이건 되나여?', b); */

$('.inner .list-Search').click(function () {
    /* $('#header').css({
        height: 383.344,
    }); */
    $('.active').stop().slideDown(600).css({
        display: 'block',
        /* height: 260, */
    });
});
$('.close').click(function () {
    $('.active').slideUp(600);
});

$('.button-list li').click(function () {
    let i = $(this).index();
    $('.button-list li').removeClass('on');
    $(this).addClass('on');
    $('.img-box > div').css({
        opacity: 0,
    });
    $('.img-box .img').eq(i).css({
        opacity: 1,
    });
});
