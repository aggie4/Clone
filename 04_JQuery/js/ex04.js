$('.gnb .d1')
    .mouseover(function () {
        let h = $(this).find('.sub').height();
        $('.gnb .d1 .sub').hide;
        $(this).find('.sub').show();
        $('.gnbBg').css({
            heigth: h,
        });
    })
    .mouseout(function () {
        $(this).find('.sub').hide();
        $('.gnbBg').hide();
    });
// height() = 셀렉터의 높이값을 저장하는 명령(여백은 제외하고, 실제로 컨텐츠가 적용되는 영역의 높이값을 가리킨다.)
// innerHeight() = 내부높이 + 패딩
// outerHeigth() = 내부높이 + 패딩 + 보더
// outerHeight(true) = 내부높이+ 패딩 + 보더 + 마진

// width() = 셀렉터의 너비값을 저장하는 명령 (여백은 제외하고, 실제로 컨텐츠가 적용되는 영역의 높이값을 가리킨다.)
// 위의 Heigth와 사용법 동일
