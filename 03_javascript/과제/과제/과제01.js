        let animals= [
            "Aardvark",
            "Albatross",
            "Alligator",
            "Alpaca",
            "Ant",
            "Ape",
            "Armadillo",
            "Donkey",
            "Baboon",
            "Badger",
            "Barracuda",
            "Bat",
            "Bear",
            "Beaver",
            "Bee",
            "Bison",
            "Cat",
            "Caterpillar",
            "Cattle",
            "Chamois",
            "Cheetah",
            "Chicken",
            "Chimpanzee",
            "Chinchilla",
            "Chough",
            "Clam",
            "Cobra",
            "Cockroach",
            "Cod",
            "Cormorant",
            "Dugong",
            "Dunlin",
            "Eagle",
            "Echidna",
            "Eel",
            "Eland",
            "Elephant",
            "Elk",
            "Emu",
            "Falcon",
            "Ferret",
            "Finch",
            "Fish",
            "Flamingo",
            "Fly",
            "Fox",
            "Frog",
            "Gaur", 
            "Gazelle",
            "Gerbil",
            "Giraffe",
            "Grasshopper",
            "Heron",
            "Herring",
            "Hippopotamus",
            "Hornet",
            "Horse",
            "Kangaroo",
            "Kingfisher",
            "Koala",
            "Kookabura",
            "Moose",
            "Narwhal",
            "Newt",
            "Nightingale",
            "Octopus",
            "Okapi",
            "Opossum", 
            "Quail",
            "Quelea",
            "Quetzal",
            "Rabbit", 
            "Raccoon",
            "Rail",
            "Ram",
            "Rat",
            "Raven",
            "Red deer",
            "Sandpiper",
            "Sardine",
            "Sparrow",
            "Spider",
            "Spoonbill",
            "Squid",
            "Squirrel",
            "Starling",
            "Stingray",
            "Tiger",
            "Toad",
            "Whale",
            "Wildcat",
            "Wolf",
            "Worm",
            "Wren",
            "Yak",
            "Zebra"
        ]
animals.pop();
console.log(animals); 
/*  “Zebra” 제거하기  */

console.log('');

animals.push('Dog');
console.log(animals);
/* Dog 추가하기 */

console.log('');

animals.push('Mosquito', 'Mouse', 'Mule');
console.log(animals);
/* 'Mosquito', 'Mouse', 'Mule' 추가하기 */

console.log('');

animals.includes('Human');
console.log(animals.includes('Human'));
/* Human이 있는가? false */

console.log('');

animals.includes('Cat');
console.log(animals.includes('Cat'));
/* Cat가 있는가? true */

console.log('');

animals[77] = 'Deer'; //첫번째 방법
// animals[animals.indexOf('Red deer')] = 'Deer'; 두번째 방법
console.log(animals);
/* Deer로 바꾸시오 */

console.log('');

animals.splice(81,3);
console.log(animals);
/* Spider부터 3개의 아이템을 제거 */

console.log('');

animals.splice(84,100);  // 첫번째 방법
// animals.splice(animals.indexOf('Tiger')); 개수를 적지 않아도 모두 지워지는 걸 볼 수 있다 / 두번째 방법
console.log(animals);
/* Tiger이후 값을 제거 */

console.log('');

animals.indexOf('Baboon');
console.log(animals.indexOf('Baboon')); //8

animals.indexOf('Bison');
console.log(animals.indexOf('Bison')); //15

animals.slice(8,16);
console.log(animals.slice(8,16));

console.log('')

animals2 = animals.slice(8,16);
console.log(animals2);

/* Baboon부터 Bison까지 가져와 새로운 어레이에 저장 */
/* +1 사용 가능하다 */