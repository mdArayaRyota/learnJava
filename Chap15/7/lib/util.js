export class CompareString{
    static async main(){
    let s1 = new Object();
    s1.val = await prompt('文字列s1：');
    let s2 = new Object();
    s2.val = await prompt('文字列s2：');
    let s3 = s1;

    let s4 = await prompt('文字列s4：');;
    let s5 = await prompt('文字列s5：');

    //オブジェクトの参照先を比較
    if(s1 == s2){
        console.log(`s1 == s2 です。`);
    }else{
        console.log(`s1 != s2 です。`);
    }
    //オブジェクト キー valの値を比較
    if(s1.val == s2.val){
        console.log(`s1とs2の中身は等しい。`);
    }else{
        console.log(`s1とs2の中身は等しくない。`);
    }
    //s1 = s3としてオブジェクトの参照先を比較
    if(s1 == s3){
        console.log(`s1 == s3 です。`);
    }else{
        console.log(`s1 != s3 です。`);
    }

    //s4とs5比較
    if(s4 == s5){
        console.log(`s4 == s5 です。`);
    }else{
        console.log(`s4 != s5 です。`);
    }
    //s4とs5のオペランド比較
    if(s4 === s5){
        console.log(`s4 == s5 です。`);
    }else{
        console.log(`s4 != s5 です。`);
    }
}
}



import readline from 'readline';

//入力処理
const prompt = async (msg) => {
const answer = await question(msg);
return (answer);
};
//標準入力
const question = (question) => {
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
        resolve(answer);
        readlineInterface.close();
    });
});
};

function toHex(v) {
return (('0000' + v.toString(16).toUpperCase()).substr(-4));
}