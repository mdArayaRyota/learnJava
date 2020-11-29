//3.要素数が5の配列の要素に1.1,2.2,3.3,4.4,5.5を代入して表示

let a = new Array(5);

for(let i = 1; i <= a.length; i++){
    console.log(`a[${i - 1}] = ${1.1 * i}`);
}