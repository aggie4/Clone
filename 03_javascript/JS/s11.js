console.log(5 > 2);
console.log(5 < 2);
console.log(5 == 2);
console.log('2' == 2); /* 내용 자체는 같기 때문에 true */
console.log('2' === 2); /* 자료형이 같지 않기 때문에 false */
/*
비교연산자 ==은 내용이 같으면 같다고 인식 
===은 자료형까지 같아야 같다고 인식
*/
console.log("");
/* 형변환 */
console.log('10' + '5'); /* 문자열과 문자열을 더해 값이 105 */
console.log(Number('10') + Number('5')); /* 형변환으로 인해 숫자형으로 변경해서 더해서 15 */
console.log('');
console.log(24 + 6); /* 숫자형을 더해 30 */
console.log(String(24) + String(6)); /* 문자형으로 형변환해서 246 */
console.log('');
let x = 123;
console.log(x);
console.log(String(x)); /* 문자형은 검은색으로 콘솔창에 나타난다 */
console.log(typeof x);
console.log(typeof String(x));
console.log('');
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));
console.log('');
let z = '프론트엔드';
console.log(z);
console.log(Number(z)); /* NaN으로 표시, 하지만 숫자형으로 변환 */
console.log(typeof z);
console.log(typeof Number(z));
/*
'프론트엔드'라는 문자형을 숫자로 변환해서 표현할 수 없기 때문에 NaN이라고 표시 되지만,
자료형 자체는 숫자형으로 바뀐것을 확인 할 수 있다.
*/
console.log('');
/* 블린형을 숫자형으로 변환 */
let h = true
console.log(h);
console.log(Number(h)); /* 2진법으로 인해 1로 출력 */
console.log(typeof h);
console.log(typeof Number(h));
/* 
블린형을 숫자형으로 바꾸면 true는 1, false는 0으로 출력된다
*/
console.log('');
/* 문자형을 블린형으로 변환 */
let i = "frontEnd"
console.log(i);
console.log(Boolean(i));
console.log('');
/* 문자형을 블린형으로 바꾸면 true가 출력된다. */
let j = 123;
console.log(j);
console.log(Boolean(j));
console.log('');
/* 숫자형을 블린형으로 바꾸면 true가 출력된다. */
let a = '';
let b = 0;
let c = Number('frontEnd');
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
/* 위에 a,b,c의 세가지 경우를 제외한 나머지 블린형으로 변환시 true가 출력된다. */
console.log('');
/* 복합 대입 연산자 */
let plusA = 10;
console.log(plusA += 10); /* += plusA + 10 이란 값 */
// console.log((plusA = plusA + 10)); 같은 의미
/* 더하기 빼기 곱하기 나누기 나머지 다 같다. */
