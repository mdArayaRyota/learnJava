export class Scanner{
    static async main(){
        let s = await prompt('文字列：');
        for(let i = 0; i < s.length; i++){
            //Unicodeで表示(16進数)
            console.log(`s[${i}]  =  ${s[i]}   ${toHex(s[i].charCodeAt(0))}`);
        }
        console.log('');
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