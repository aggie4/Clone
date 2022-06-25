let age = 21;
if (age > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.'); 
}
console.log('');

let age1 = 19;
if (age1 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else if (age1 >= 18) {
    console.log('오토바이운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
console.log('');

let age2 = 21;
if (age2 >= 18) {
    console.log('오토바이운전면허 취득이 가능합니다.');
} else if (age2 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
/* 조건의 대한 순서를 생각을 잘 해야 한다 / 먼저 접촉되는 결과가 true가 나오면 나머지를 생략 */

console.log('');

let age3 = 21;
if (18 <= age3 && age3 < 20) {
    console.log('오토바이운전면허 취득이 가능합니다.');
} else if (age3 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
/* 18 <= age3 && age3 < 20    →     18 <= age3 < 20 사용x  */

console.log('');

let age4 = 21;
let licence = true;
if (age4 > 20) {
    if (licence == true) {
        console.log('운전이 가능합니다.');
    } else {
        console.log('면허부터 따세요...')
    }
} else {
    console.log('운전이 불가능합니다.');
}

console.log('');

//입력하는 숫자가 0인지, 음수인지, 양수인지 판단하는 코드 만들어봅시다.

let number = 1;
if (number < 0) {
    console.log('음수')
} else if (number > 0) {
    console.log('양수')
} else {
    console.log('0')
}

console.log('');

//나는 대학교 교수이다. 레포트 점수에 따라서 등급을 결정짖는 프로그램을 만들고자 한다. 점수별 등급은 아래와 같다
/* 
90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F
*/

let i = 50;
if (i >=90 && i >= 100) {
    console.log('A');
} else if (i >=80 && i >= 89) {
    console.log("B");
} else if (i >=70 && i >= 79) {
    console.log("C");
} else if (i >=60 && i >=69) {
    console.log('D');
} else if (i < 59) {
    console.log('F')
} else {
    console.log('시험치세요')
}