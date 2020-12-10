export class PrintDouble{
    static async main(){
        let n = await prompt('文字列の個数：');
        let array = new Array(n);
        for(let i = 0; i < n; i++){
            array[i] = await prompt(`array[${i}] = `);
        }
        this.printStringArray(array);
    }
    static printStringArray(array){
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array[i].length; j++){
                process.stdout.write(`${array[i][j]}`);
            }
            console.log('');
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
