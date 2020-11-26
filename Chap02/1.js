'use strict';
//1
// let a = 82;
// let b = 17;
// let c = 0;

// c = a + b;
// console.log('和：', c);
// c = a - b;
// console.log('差：', c);

//2
// let x = 63;
// let y = 18;
// let total = 0;
// let average = 0;

// total = x + y;
// average = parseInt(total / 2);

// console.log(`xの値は${x}です。`);
// console.log(`yの値は${y}です。`);
// console.log(`合計は${total}です。`);
// console.log(`平均は${average}です。`);

//3
// let x = 63;
// let y = 18;
// let total = 0;
// let average = 0;

// total = x + y;
// average = total / 2;

// console.log(`xの値は${x}です。`);
// console.log(`yの値は${y}です。`);
// console.log(`合計は${total}です。`);
// console.log(`平均は${average}です。`);

//4
// let x = 63;
// let y = 18;
// let z = 52;
// let total = x + y + z;
// let average = parseInt(total / 3);

// console.log(`xの値は${x}です。`);
// console.log(`yの値は${y}です。`);
// console.log(`zの値は${z}です。`);
// console.log(`合計は${total}です。`);
// console.log(`平均は${average}です。`);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

//5
// readline.question('整数値：', (input) => {
//     let x = input;
//     console.log(`${x}と入力しましたね。`);
//     readline.close();
// });

//6
// readline.question('整数値：', (input) => {
//     let x = parseInt(input, 10);
//     console.log(`10を加えた値は${x + 10}です。`);
//     console.log(`10を減じた値は${x - 10}です。`);
//     readline.close();
// });

//7
// readline.question('整数値：', (input) => {
//     let x = parseInt(input, 10);
//     let y = parseInt(x / 10);
//     console.log(`最下位桁を除いた値は${y}です。`);
//     console.log(`最下位桁は${x % 10}です。`);
//     readline.close();
// });

//8
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('xの値:', (x) => {
//     rl.question('yの値:', (y) => {
//         let total = parseFloat(x) + parseFloat(y);
//         let average = total / 2;
//         console.log(`合計は${total}です。`);
//         console.log(`平均は${average}です。`);
//         rl.close();
//     });
// });


//9
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// console.log('三角形の面積を求めます。')
// rl.question('底辺:', (width) => {
//     rl.question('高さ:', (hight) => {
//         let area = parseFloat(width) * parseFloat(hight) / 2;
//         console.log(`面積は${area}です。`);
//         rl.close();
//     });
// });

//10
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// console.log('球の表面積と体積を求めます。')
// rl.question('半径:', (r) => {
//     let area = 4 * Math.PI * r ** 2;
//     console.log(`表面積は${area}です。`);
//     let volume = 4 / 3 * Math.PI * r ** 3;
//     console.log(`体積は${volume}です。`);
//     rl.close();
// });

//11
//１ 〜 ９
// let random = Math.ceil( Math.random() * 9);
// console.log(`1桁の正の整数：${random}`);

// // //-9 〜 -1
// random = -Math.ceil( Math.random() * 9);
// console.log(`1桁の負の整数：${random}`);

// // 0~99
// random = Math.floor( Math.random()*100 );
// console.log(`2桁の正の整数：${random}`);

//12
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数値:', (r) => {
//     let random =  Math.round(Math.random() * 10) - 5;
//     let ran = parseInt(r) + random;
//     console.log('その値±5の乱数を生成しました。');
//     console.log(`値は${ran}です。`);
//     rl.close();
// });

//13
//0 〜 1
// let random = Math.random();
// console.log(`0.0以上 1.0未満：${random}`);

// // //-9 〜 -1
// random = Math.random() * 10;
// console.log(`0.0以上 10.0未満：${random}`);

// // -1 〜 1
// random = Math.random() * 2 -1;
// console.log(`-1.0以上 1.0未満：${random}`);

//14
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('性:', (sei) => {
//     rl.question('名:', (mei) => {
//         let name = sei + mei;
//         console.log(`こんにちは${name}さん。`);
//         rl.close();
//     });
// });

//15
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('住所:', (ad) => {
//     let address = ad;
//     console.log(`お住まいは${address}ですね。`);
//     rl.close();
// });

//16


//mondai
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('x:', (x) => {
//     rl.question('y:', (y) => {
//         let X = parseInt(x);
//         let Y = parseInt(y);
//         console.log(`足し算${X + Y}`);
//         console.log(`足し算${X + Y}`);
//         console.log(`乗算${X * Y}`);
//         console.log(`除算${X / Y}`);
//         rl.close();
//     });
// });
