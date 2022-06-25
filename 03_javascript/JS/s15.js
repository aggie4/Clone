let menu = 1;
if (menu == 1) {
    console.log('물건사기');
} else if (menu == 2) {
    console.log('잔고 확인');
} else if (menu == 3) {
    console.log('히스토리 확인');
} else {
    console.log('홈으로 돌아가기');
}
/* if문 : 범위에 대한 설정을 할 때 사용 */
console.log('');

switch (menu) {
    case 1:
        console.log('물건사기');
        break; //잘 써줘야 한다.
    case 2 :
        console.log('잔고 확인');
        break;
    case 3 :
        console.log('히스토리 확인');
        break;
    default : 
        console.log('홈으로 돌아가기');
}
/* switch문 : 지정된 값이 하나로 떨어질 때 사용가능 / 제한적 */
/* break : 잘 써줘야 한다 / 원하는 값 출력가능 */