$('.s01').slick();

$('.s02').slick({
    dots: true,
});

$('.s03').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 800,
    speed: 5000,
});
/* autoplay : 자동재생을 위한 속성, true가 입력되면 자동재생 된다. */
/* autoplaySpeed : 자동재생 시 슬라이드가 자동으로 재생되는 간격에 대한 시간 */
/* speed : 자동재생 시 사진이 이동하는 속도에 대한 시간 */

$('.s04').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
});
/* slidesToShow : 한 번에 보여지는 카드의 수 */
/* slidesToScroll : 한 번에 이동하는 카드의 수 */

$('.s05').slick({
    prevArrow: '.slideBtn .btnPrev',
    nextArrow: '.slideBtn .btnNext',
    dots: true,
    appendDots: '.slideBtn .pager',
});
/* arrow : 좌우버튼, 기본값은 true */
/* prevArrow : 이전버튼으로 사용할 대상을 선택 */
/* nextArrow : 다음버튼으로 사용할 대상을 선택 */
/* appendDots : 선택한 태그 안쪽으로 페이져가 생긴다 */
