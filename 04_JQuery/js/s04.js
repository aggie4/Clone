let i = $('.box1 > .p11').css('display');

if (i == 'none') {
    $('.box1 > .p12').addClass('on'); //클래스 on 만들기
} else {
    $('.box1 > .p12').removeClass('on'); //클래스 on 삭제
}
