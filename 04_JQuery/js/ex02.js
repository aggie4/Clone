// 애니메이션이 없는 효과
/* $('.gnb')
    .mouseover(function () {
        $(this).css({
            height: 440,
        });
        $('.gnbBg').show();
    })
    .mouseout(function () {
        $(this).css({
            height: 40,
        });
        $('.gnbBg').hide();
    });
 */
// show() = 태그의 원래 display 속성값으로 돌려줌
// hide() = display : none; 로 만들어준다.

// 애니메이션이 있는 효과
$('.gnb')
    .mouseover(function () {
        $(this).stop().animate({
            height: 440,
        });
        $('.gnbBg').stop().slideDown();
    })
    .mouseout(function () {
        $(this).stop().animate({
            height: 40,
        });
        $('.gnbBg').stop().slideUp();
    });
