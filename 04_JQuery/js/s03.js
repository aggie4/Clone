//$('.box1').css('background-color', 'blue');
$('.box1').css({
    width: '50%',
    height: 300,
    backgroundColor: 'green',
});

/* 
    변수 d에 .box2 .p21의 display 속성값을 저장
    if 조건문 - 만약 변수d의 값이 'none'와 같다면,
    .box2 .p22에 태두리(5px, 검정)가 적용되고,
    아니라면 삭제되도록 한다.
*/

let d = $('.box2 > .p21').css('display');
if (d == 'none') {
    $('.box2 > .p22').css({
        border: '5px solid black',
    });
} else {
    $('.box2 > .p22').css({
        border: '0',
    });
}
