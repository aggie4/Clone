function plus (i) {
    console.log(i + 100);
}
plus (100);
console.log('');
function welcome (name) {
    /* 매개변수 */
    console.log('안녕하세요, ' + name + '님!')
}
welcome('김성진');
welcome('장소영');
welcome('최이서');
welcome(1004);
/* 인자 */
/* 수정할 때 유용하게 사용가능 */

function printsqure(x) {
    console.log(x * x);
}
printsqure(2);
printsqure(15);
printsqure(132);

console.log('');

/* 메모리 용량 계산식 만들기 */
/* 
함수 두개, teraToGiga, teraToMega 
테라바이트를 기가바이트로 환산
테라바이트를 메가바이트로 환산
3테라바이트를 환산!
*/
function teraToGiga (a) {
    console.log(a + '입니다');
    console.log(a * 1024 + 'GB입니다')
}
teraToGiga(3);
function teraToMega (b) {
    console.log(b + 'TB는');
    console.log(b * 1024 * 1024 + 'MB입니다');
}
teraToMega(3);

console.log('');

function printSun (a,b) {
    console.log(a + b)
}
printSun (100, 100);
printSun (100, 53);

/* 
함수 introduce를 정의하고,
매개변수로 name, birth, national, job
*/

function introduce(name, birth, national, job) {
    console.log('안녕하세요! 반갑습니다!');
    console.log('제 이름은 ' + name +' 입니다.');
    console.log('생년월일은 '+ birth +'이고,');
    console.log('국적은 '+ national +' 이고,');
    console.log('직업은 ' + job +'입니다.');
    console.log('잘 부탁드립니다.');
}
introduce('김철수', '1998.01.15', '한국', '회사원');
introduce('이영희', '1988.03.15', '중국', '무역 회사원');

console.log('');

/* 
bmi = 무게 / ((키 * 키) / 10000)
*/

function bmi(name, weight, tall,) {
    let bmi = weight / ((tall * tall) / 10000);
    console.log(name + '님의 체질량 지수는' +bmi +'입니다');
}
bmi('홀쭉이', 42.1, 165);
bmi('통통이', 75, 159);
