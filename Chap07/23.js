//23.配列から値がxの全要素を格納するメソッド
//

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //配列xの要素数を入力
    let numX = 0;

    do{
        numX = await prompt('要素数：');
    }while(numX <= 0);
    let aryX = new Array(numX);

    for(let i = 0; i < numX; i ++){
        aryX[i] = await prompt(`a[${i}]: `);
    }
    let searchIndex = await prompt('探索する値：');
    let arraySearchIndex = arraySearchIdx(aryX, searchIndex);

    for(let i = 0; i < arraySearchIndex.length; i++){
        console.log(`${arraySearchIndex[i]}`);
    }

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

const arraySearchIdx = (aryX, idx) => {
    let count = 0;
    for(let i = 0; i < aryX.length; i++){
        if(aryX[i] == idx) count++;
    }
    let aryY = new Array(count--);
    for(let i = aryX.length; count >=0; i--){
        if(aryX[i] == idx) aryY[count--] = i;
    }
    return aryY;

}


// 起動
(async () => {
    await main();
})();