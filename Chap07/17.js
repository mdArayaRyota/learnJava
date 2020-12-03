
//17.配列aからkeyと同じ値を持つ要素を検索するメソッドlinearSearchとlinearSearchRを作成。
//キーと同じ値の要素が複数存在した場合、linearSearchは最も先頭に位置する要素を見つけ、linearSearchRは最も末尾を見つける

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let num = 0;
    do{
        num = await prompt('要素数：');
    }while(num <= 0);

    let x = new Array(num);

    for(let i = 0; i < num; i ++){
        x[i] = await prompt(`x[${i}]: `);
    }
    let searchVal = await prompt('探す値：');

    let idxTop = linerSearch(x, searchVal);
    let idxBtm = linerSearchR(x, searchVal);

    if(idxTop == -1){
        console.log('その値の要素は存在しません。');
    }else if(idxTop == idxBtm){
        console.log(`その値はx[${idxTop}]にあります。`);
    }else{
        console.log('その値の要素は複数存在します。');
        console.log(`最も先頭のものはx[${idxTop}]にあります。`);
        console.log(`最も末尾のものはx[${idxBtm}]にあります。`);
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

//keyと一致する先頭の要素を探索
const linerSearch = (array, key) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] == key)return i;
    }return -1;
}
//keyと一致する末尾の要素を探索
const linerSearchR = (array, key) => {
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] == key)return i;
    }return -1;
}


// 起動
(async () => {
    await main();
})();