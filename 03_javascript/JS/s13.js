let patient = {
    name : 'sungjin',
    age : 30,
    gender : 'male',
    disease : 'cold',
};
/* 위의 코드는 patient라는 객체를 생성하고, 거기에다가 name, age, gender, disease라는 정보를 입력한 경우이다. */
console.log(patient);

console.log('');

console.log(patient.name); /* 한가지 정보만 보고싶다면 .을 사용 */

console.log('');

console.log(patient['name']); /* 한가지 정보만 보고싶다면 두번째 방법 상황에 따라서 사용 */
/* 배열과 살짝 혼동되기도 하지만, 배열의 방식으로도 이 객체의 키값을 불러올 수 있다. */

console.log('');

patient.age = 25; /* 객체정보를 바꾸는 방법 */
console.log(patient);

patient['age'] = 50; /* 객체정보를 바꾸는 두번째 방법 */
console.log(patient);

console.log('');

delete patient.gender /* 정보를 지우는 방법 */
console.log(patient);

console.log('');

patient.address = '울산시 동구'; /* 내용을 추가 하는 방법 */
console.log(patient);

console.log('');

let patientList = [
    {name : 'sung', age : 12,gender : 'male',disease : 'cold',},
    {name : 'jin', age : 30,gender : 'male',disease : 'cold',},
    {name : 'bin', age : 60,gender : 'male',disease : 'cold',},
];
console.log(patientList);
console.log(patientList[0]);
console.log(patientList[0].name);
