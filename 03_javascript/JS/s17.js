for (let i = 0; i < 10; i++) {
    console.log('오빠!!!', i);
}
console.log('');

for (let i = 2; i < 10; i +=2) {
    console.log('누나!!!', i);
}
console.log('');

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('오빠!!!', i);
    }
}

console.log('');

/* 
for문 중첩을 통해서...
구구단 어떻게 만들까???
*/
/* 단 생성 */
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <=9; j++) {
        console.log(i + 'x' + j + '=' + i*j);
    }
}
/* 바깥쪽 반복문 큰 것/ 안쪽반복문 작은 것 */