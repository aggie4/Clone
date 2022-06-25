function test_a () {
    let i = 1;
    // console.log(i);
    // document.write(i);
}
// console.log(i); 지역변수 : 지역변수 i는 중괄호 안에서(자기가 포함된 지역 안에서)만 사용이 가능한 변수이다.
console.log(test_a());
/* test_a() 함수 안에서 선언된 변수 i는 test_a()함수 안에서만 의미를 가지고 사용할 수 있다.
그래서 함수  test_a()를 호출해도 변수 i값을 활용할 수 없다. */

function test_b () {
    let j = 3;
    return j;
}
console.log(test_b());
/* return문을 사용하면 함수안에서 선언된 변수가 j의 값을 함수가 호출되는 위치에 전달시켜서 출력시킨다.
그러므로 변수 j의 값을 외부에서 사용할 수가 있게 된다. */
console.log("");
console.log("");

function test_c () {
    let k = 5;
    return k / 2 ;
}
console.log(test_c());
console.log("");
console.log("");

function two () {
    let nummer = 10;
    return nummer * 2;
}
console.log(two());

console.log("");
console.log("");

let x = two(100);
let y = two(10);
console.log(x + y);
/* 매개변수로 활용할 수 있는 인자가 없을 때에는 그 어떤 값을 매개변수로 집어 넣더라도 결과에는 변화가 없다. */
console.log("");

function return_end () {
    document.write('명령이 한 번 실행되었습니다.');
    return;
    document.write('명령이 두 번 실행되었습니다.');
}
return_end();
/* return은 함수의 안에서 함수 종료의 기능으로도 사용이 가능하다. */
console.log('');

function return_sum(left, right) {
    return left+ right;
}
document.write(return_sum(1500,2500));