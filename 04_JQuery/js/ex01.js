/* 
버튼을 클릭할 때
1. 클릭한 번튼의 순서값을 저장
2. 버튼 전체를 비활성화
3. 클릭한 버튼을 활성화
4. 사진 전체를 비활성화
5. 클릭한 순서값의 사진을 활성화
*/
$('.btn li').click(function() {
    let i = $(this).index();
    $('.btn li').removeClass('on')
    $(this).addClass('on')
    $('.photo li').css({
        display : 'none',
    })
    $('.photo li').eq(i).css({
        display : 'block',
    })
});
