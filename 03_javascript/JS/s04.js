// 함수의 선언
/* cafe();
호충을 먼저 해도 됨 / 호이스팅 적용 */
function cafe(){
    let espresso = 10;
    let milk = 170;
    let chocolate_syrup = 50;
    let whipped_cream = 60;

    const AMERICANO = espresso;
    const LATTE = espresso + milk;
    const MOCCA = espresso + chocolate_syrup + milk;
    const WHIPPED_MOCCA = espresso + chocolate_syrup + milk + whipped_cream;

    console.log (AMERICANO);
    console.log(LATTE);
    console.log(MOCCA);
    console.log(WHIPPED_MOCCA);
}
// 함수의 호출
cafe();

console.log('');
// 매개변수(parameter) / 인자
function plus (a, b){
            // 인자값
    console.log(a + b);
}
plus(10);
/* 매개변수 */

/* 삼각형의 넓이 계산기 */
/* 
triangle이라는 함수를 생성하고, 매개변수와 인자를 활용해서 삼각형의 넓이를 계산하는 함수 만들기.
밑변 : 10, 높이 : 20
밑변 : 30, 높이 : 20
밑변 : 30, 높이 : 10
밑변 : 120, 높이 : 220
밑변 : 150, 높이 : 220
*/
/* function triangle(width, height){
    console.log(a *b) / 2;
}
triangle(30,20); */

/* 애국가 1~4절 */
console.log("1절");
console.log("동해물과 백두산이 마르고 닳도록");
console.log("하느님이 보우하사 우리나라만세");
verse ();
console.log("2절");
console.log("남산위에 저 소나무 철갑을 두른듯");
console.log("바람서리 불변함은 우리 기상일세");
verse ();
console.log("3절");
console.log("가을하늘 공활한대 높고 구름없이");
console.log("밝은 달은 우리 가슴 일편단심일세");
verse ();
console.log("4절");
console.log("이 기상과 이 맘으로 충성을 다하여");
console.log("괴로우나 즐거우나 나라 사랑하세");
verse ();

function verse () {
    console.log("무궁화 삼천리 화려강산");
console.log("대한사람 대한으로 길이 보전하세");
}