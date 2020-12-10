export class StringConstructor{
    static async main(){
        let c = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        let s1 = 'ABC';
        let s2 = new String;
        let s3 = new String(c);
        let s4 = new String(c).substring(10, 16);
        let s5 = new String('XYZ');
        let s6 = await prompt('文字列：');

        console.log(`s1 = ${s1}`);
        console.log(`s2 = ${s2}`);
        console.log(`s3 = ${s3}`);
        console.log(`s4 = ${s4}`);
        console.log(`s5 = ${s5}`);
        console.log(`s6 = ${s6}`);

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
