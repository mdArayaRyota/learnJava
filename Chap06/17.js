//17.配列変数の値を表示する

let arrayA = new Array(5);
console.log(arrayA.length);
console.log(`arrayA = ${arrayA}`);
console.log(arrayA.length);


arrayA = null;
console.log(`arrayA = ${arrayA}`);

//cannot read property length of null
//console.log(arrayA.length);


const arrayB = new Array(8);
arrayB[4] = 10;
console.log(`arrayB[4] = ${arrayB[4]}`);

//TypeError: Assignment to constant variable.
//arrayB = null;

//TypeError: Assignment to constant variable.
//arrayB = new Array(4);