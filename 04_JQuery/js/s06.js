$('.box1 .bt11').click(function () {
    $('.box1 p').css({
        height: 100,
        backgroundColor: '#ffcc00',
    });
});
$('.box1 .bt12').click(function () {
    $('.box1 p').css({
        height: 100,
        backgroundColor: 'aqua',
    });
});

/* 
box2 li를 클릭할 때, 
    1. li전체를 비활성화 시킨다.    >> active 클래스 삭제
    2. 클릭 한 대상만 활성화 시킨다 >> active 클래스 추가
*/
$('.box2 li').click(function () {
    $('.box2 li').removeClass('active');
    $(this).addClass('active');
});

// .box3 a를 클릭했을 때, box3 p의 배경색상이 바뀐다.

$('.box3 a').click(function () {
    $('.box3 p').css({
        height: 100,
        backgroundColor: '#ffcc00',
    });
    return false;
});
/* 
a태그를 클릭하게 되면 내가 지정한 명령을 실행 한 후,
a태그의 원래 기능인 링크가 작동되서 문서가 리프레쉬된다.

내가 지정한 명령을 실행 한 후에 a태그의 기능이 멈추도록
명령이 마지막에 return false; 를 추가해줘야 한다.
*/

let x = 0;
let y = 0;

$('.box4').mouseover(function () {
    $('.count01').text(++x);
});

$('.box5').mouseenter(function () {
    $('.count02').text(++y);
});
