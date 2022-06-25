$('.box1 span').text('핵맑음');

let days = '금';
$('.box2 span').text(days); /* 변수로 지정된 내용을 교체, 매개변수 사용 */

let p31 = $('.p31').text(); /* 클래스.p31을 p31변수에 저장 */
$('.box3 .p32').text(p31);

let userName = $('.box4 .p41').text();
$('.box4 .p42').html(`<strong>${userName}</strong>님, 환영합니다!!`);
