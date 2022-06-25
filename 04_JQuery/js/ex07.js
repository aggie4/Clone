let photoBox = $('.photoBox');
let btn = $('.pager li');
/* 화면에 출력 중인 이미지의 순서값을 저장 */
let c = 0;

btn.click(function () {
    /* 활성화 된 버튼 동작 취소, 색상 변경 */
    let i = $(this).index();
    if (i == c) {
        return false;
    }
    btn.removeClass('active');
    $(this).addClass('active');
    /* 기존 이미지 옮기기 */
    photoBox.eq(c).stop().animate({
        left: '-100%',
    });
    /* 새 이미지 들어오기 */
    photoBox
        .eq(i)
        .css({
            left: '100%',
        })
        .stop()
        .animate({
            left: 0,
        });
    /* 위의 명령이 모두 실행완료 된 시점에서 현재 이미지가 변경된다 */
    c = i;
});
