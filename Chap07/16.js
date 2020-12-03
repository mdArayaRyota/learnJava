
//16.配列aの要素の最小値を求めるメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let num = 0;
    do{
        num = await prompt('人数は：');
    }while(num <= 0);

    let height = new Array(num);
    let weight = new Array(num);

    for(let i = 0; i < num; i ++){
        height[i] = await prompt(`${i + 1}番目の身長:`);
        weight[i] = await prompt(`${i + 1}番目の体重:`);
    }

    console.log(`最も背が低い人の身長：${min(height)}cm`);
    console.log(`最も痩せている人の体重：${min(weight)}kg`);

};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseInt(answer);
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

//最小を求める
const min = (array) =>{
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < min)min = array[i];
    }
    return min;
}


// 起動
(async () => {
    await main();
})();