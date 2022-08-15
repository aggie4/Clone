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
    $('.active').css({
        display: 'block',
        height: 260,
    });
});
