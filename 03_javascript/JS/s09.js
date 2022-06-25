console.log(5 > 2 );
console.log(15 < 2 );
console.log(2 == 2 );
console.log(2 == '2');  /* 숫자 2와 문자 '2'는 다른 자료형이지만 ==을 사용할 경우 자바스크립트는 두개의 의미를 같다고 판별해준다 */
console.log('');
console.log(2 === '2'); /* ===연산자는 비교하는 대상의 자료형까지 일치해야만 참으로 인식을 한다. */
console.log('');
console.log(5 != '5');
console.log(5 !== '5');
console.log('');
console.log(10 > 1 && 20 > 5);
console.log(10 > 1 && 20 < 5);
console.log(10 < 1 && 20 < 5);
/* AND 연산자 &&는 둘 다 true일때 true를 반환 */
console.log('');
console.log(10 > 1 || 20 > 5);
console.log(10 > 1 || 20 < 5);
console.log(10 < 1 || 20 < 5);
/* OR 연산자 ||는 둘 중 하나가 true일때 true를 반환 */
console.log('');
console.log(!(20 > 5));
console.log(!(20 < 5));
/* NOT연산자 !는 결과를 반대로 뒤집는다.  괄호 사용 */
console.log('');
console.log(10 > 1);
console.log(!(10 > 1));
console.log(!!(10 > 1)); /* NOT연산자 !! 두개를 쓰면 두 번 뒤집는다. */