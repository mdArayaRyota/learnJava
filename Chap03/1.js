//1
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数値:', (r) => {
//     let n = parseFloat(r);
//     if(n < 0){
//         console.log('その値は負です。');
//     }
//     rl.close();
// });

//2

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数値:', (r) => {
//     let n = parseInt(r);
//     if(n < 0){
//         console.log(`その絶対値は${-n}です。`);
//     }else{
//         console.log(`その絶対値は${n}です。`);
//     }
//     rl.close();
// });

//3
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('変数A:', (a) => {
//     let A = parseFloat(a);
//     rl.question('変数B:', (b) => {
//         let B = parseFloat(b);
//         let c = A % B;
//         console.log('A',A);
//         console.log('B',B);
//         console.log('c',c);
//         if(c !== 0){
//             console.log('BはAの約数です。');
//         }else{
//             console.log('BはAの約数ではありません。');
//         }
//         rl.close();
//     });
// });

//4
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('変数A:', (a) => {
//     let A = parseFloat(a);
//     rl.question('変数B:', (b) => {
//         let B = parseFloat(b);
//         let c = A % B;
//         console.log('A',A);
//         console.log('B',B);
//         console.log('c',c);
//         if(c !== 0){
//             console.log('BはAの約数ではありません。');
//         }else{
//             console.log('BはAの約数です。');
//         }
//         rl.close();
//     });
// });

//5

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数値:', (input) => {
//     let i = parseInt(input);

//     if(i === 0){
//         console.log('その値は0です。');
//     }else if(i > 0){
//         console.log('その値は正です。');
//     }else{
//         console.log('その値は負です。');
//     }
//     rl.close();
// });

//6
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数値:', (input) => {
//     let i = parseInt(input);

//     if(i === 0){
//         console.log('その値は0です。');
//     }else if(i > 0){
//         console.log('その値は正です。');
//     }else if(i < 0){
//         console.log('その値は負です。');
//     }
//     rl.close();
// });

//7
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数a：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数b：',(inputB) => {
//     let b = parseInt(inputB);
//         if(a > b){
//             console.log('aの方が大きいです。');
//         }else if(a < b){
//             console.log('bの方が大きいです。');
//         }else{
//             console.log('aとbは等しいです。');
//         }
//         rl.close();
//     });
// });

//8
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数a：', (inputA) => {
//     let a = parseInt(inputA);
//     if(a % 5 === 0){
//         console.log('その値は5で割り切れます。');
//     }else{
//         console.log('その値は5で割り切れません。');
//     }
//     rl.close();
// });

//9
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数a：', (inputA) => {
//     let a = parseInt(inputA);
//     if(a < 0){
//         console.log('正でない値が入力されました。');
//     }else if(a % 10 === 0){
//         console.log('その値は10の倍数です。');
//     }else{
//         console.log('その値は10の倍数ではありません。');
//     }
//     rl.close();
// });

//10
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数a：', (inputA) => {
//     let a = parseInt(inputA);
//     let b = a % 3;
//     if(a < 0){
//         console.log('正でない値が入力されました。');
//     }else if(b === 0){
//         console.log('その値は3で割り切れます。');
//     }else if(b === 1){
//         console.log('その値を3で割った余りは1です。');
//     }else{
//         console.log('その値を3で割った余りは2です。');
//     }
//     rl.close();
// });

//11
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('点数：', (inputA) => {
//     let a = parseInt(inputA);
//     if(a < 0 || a > 100){
//         console.log('正しい値を入力してください。');
//     }else if(a < 60){
//         console.log('不可');
//     }else if(a < 70){
//         console.log('可');
//     }else if(a < 80){
//         console.log('良');
//     }else if(a <= 100){
//         console.log('優');
//     }
//     rl.close();
// });

//12
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('整数a：', (inputA) => {
//     let a = parseFloat(inputA);
//     rl.question('整数b：',(inputB) => {
//     let max;
//     let b = parseFloat(inputB);
//         if(a > b){
//             max = a;
//         }else if(a < b){
//             max = b;
//         }else{
//             console.log('aとbは等しいです。');
//             max = 0;
//         }
//         if(max != 0){
//             console.log(`大きい方の値は${max}です。`);
//         }
//         rl.close();
//     });
// });

//13
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数a：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数b：', (inputB) => {
//         let b = parseInt(inputB);
//         let c = a - b;
//         if(c < 0){
//             c = -1 * c;
//         }
//         console.log(`それらの差は${c}です。`);
//         rl.close();
//     });
// });

//14
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数A：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数B：', (inputB) => {
//         let b = parseInt(inputB);
//         let c = Math.abs(a - b);
//         if(c <= 10){
//             console.log('それらの差は10以下です。');
//         }else{
//             console.log('それらの差は11以上です。');
//         }

//         rl.close();
//     });
// });

//15
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数a:', (inputA) => {
//     let a = parseInt(inputA);
//     let min = a;
//     rl.question('整数b:', (inputB) => {
//         let b = parseInt(inputB);
//         if(min > b)min = b;
//         rl.question('整数c:', (inputC) => {
//             let c = parseInt(inputC);
//             if(min > c)min = c;
//             console.log(`最小値は${min}です。`);
//             rl.close();
//         })
//     });
// });

//16
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数a:', (inputA) => {
//     let a = parseInt(inputA);
//     let mid = a;
//     rl.question('整数b:', (inputB) => {
//         let b = parseInt(inputB);
//         rl.question('整数c:', (inputC) => {
//             let c = parseInt(inputC);
//             if(mid > b){
//                 if(b > c){
//                     mid = b;
//                 }else{
//                     mid = c;
//                 }
//             }else if(mid > c){
//                 if(b < c){
//                     mid = c;
//                 }else{
//                     mid = b;
//                 }
//             }else{
//                 if(b < c){
//                     mid = b;
//                 }else{
//                     mid = c;
//                 }
//             }
//             console.log(`中央値は${mid}です。`);
//             rl.close();
//         })
//     });
// });

//14
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数A：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数B：', (inputB) => {
//         let b = parseInt(inputB);
//         if(a === b){
//             console.log('２つの値は同じです。');
//         }else{
//             let max = a;
//             let min = b;
//             if(a < b){
//                 max = b;
//                 min = a;
//             }
//             console.log(`小さい方の値は${min}です。`);
//             console.log(`大きい方の値は${max}です。`);
//         }
//         rl.close();
//     });
// });

//15
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数A：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数B：', (inputB) => {
//         let b = parseInt(inputB);
//         if(a < b){
//             let min = a;
//             a = b;
//             b = min;
//         }
//         console.log(`変数aは${a}です。`);
//         console.log(`変数bは${b}です。`);
//         rl.close();
//     });
// });

//16
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数a:', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数b:', (inputB) => {
//         let b = parseInt(inputB);
//         rl.question('整数c:', (inputC) => {
//             let c = parseInt(inputC);
//             let d;
//             if(a > b){
//                 d = b;
//                 b = a;
//                 a = d;
//             }
//             if(b > c){
//                 d = c;
//                 c = b;
//                 b = d;
//             }
//             if(a > b){
//                 d = b;
//                 b = a;
//                 a = d;
//             }
//             console.log(`変数aは${a}です。`);
//             console.log(`変数bは${b}です。`);
//             console.log(`変数cは${c}です。`);
//             rl.close();
//         })
//     });
// });

//20
// let random = Math.floor( Math.random() * 3);
// process.stdout.write('コンピュータが生成した手：');
// switch(random){
//     case 0: console.log('グー');
//     break;
//     case 1: console.log('チョキ');
//     break;
//     case 2: console.log('パー');
//     break;
// }

//21
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('何月ですか：', (inputA) => {
//     let a = parseInt(inputA);
//     switch(a){
//         case 3:
//             case 4:
//                 case 5: console.log('春'); break;
//         case 6:
//             case 7:
//                 case 8: console.log('夏'); break;
//         case 9:
//             case 10:
//                 case 11: console.log('秋'); break;
//         case 12:
//             case 1:
//                 case 2: console.log('冬'); break;
//         default: console.log('そんな月はありません。');
//     }
//     rl.close();
// });

//演習

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('整数A：', (inputA) => {
//     let a = parseInt(inputA);
//     rl.question('整数B：', (inputB) => {
//         let b = parseInt(inputB);
//         if(a % 2 == 1 && b % 2 ==1){
//             console.log('両方とも奇数');
//         }else if(a % 2 ==1 || b % 2 == 1){
//             console.log('片方が奇数');
//         }else {
//             console.log('両方とも偶数');
//         }
//         rl.close();
//     });
// });