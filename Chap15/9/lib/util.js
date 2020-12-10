export class PrintDouble{
    static async main(){
        let x = await prompt('実数値：');
        //let x = Math.PI;
        let w = await prompt('表示全桁数：');
        //let w = 9;
        let p = await prompt('小数部桁数：');
        //let p = 4;
        this.printDouble(x, w, p);

    }
    static printDouble(x, w, p){
        console.log(`${parseFloat(x.toPrecision(w)).toFixed(p)}`);
    }
}



import readline from 'readline';

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseFloat(answer);
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
