import readline, { clearScreenDown } from 'readline';
//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return answer;
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


export class Human{
    #name;
    #height;
    #weight;
    constructor(name, height, weight){
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
    }
    getName(){
        return this.#name;
    }
    getHeight(){
        return this.#height;
    }
    getWeight(){
        return this.#weight;
    }
    gainWeight(w){
        this.#weight += w; //太る
    }
    reduceWeight(w){
        this.#weight -= w; //痩せる
    }
}

export class HumanArrayTester{

    static printHumanArray(a){
        for(let i = 0; i < a.length; i++){
            console.log(`No.${i}   ${a[i].getName()}   ${a[i].getHeight()}   ${a[i].getWeight()}`);
        }
    }
    static async main(){

        //1次元配列
        //生成と同時に初期化
        let p = [
            new Human('桑野慎一郎', 170, 70),
            new Human('高原哲也', 160, 59),
        ];

        //配列と個々のインスタンスを個別に生成
        let n = await prompt('配列ｑの要素数:');
        let q = Human;
        q = new Array(parseInt(n));
        for(let i = 0; i < q.length; i++){
            let name = await prompt('名前:');
            let height = await prompt('身長:');
            let weight = await prompt('体重:');
            q[i] = new Human(name, height, weight);
        }

        //2次元配列
        //生成と同時に初期化
        let x = [
            [ new Human('竹田洋平', 175, 52), new Human('橋川智浩', 169, 60) ],
            [ new Human('佐田翔太', 145, 50), new Human('須藤飛鳥', 164, 58) ],
            [ new Human('星野幸喜', 163, 49), new Human('町田香子', 170, 59) ],
        ];

        //配列と個々のインスタンスを個別に生成
        let lineNum = await prompt('配列yの行数:');
        let columnNum;
        let y = Human;
        y = [];
        for(let i = 0; i < lineNum; i++){
            columnNum = await prompt('配列yの列数:');
            y[i] = new Array(columnNum).fill(0);
            for(let j = 0; j < columnNum; j++){
                console.log(`y[${i}][${j}]`);
                let name = await prompt('名前:');
                let height = await prompt('身長:');
                let weight = await prompt('体重:');
                y[i][j] = new Human(name, height, weight);
            }
        }

        //表示
        console.log('■ 配列p');
        HumanArrayTester.printHumanArray(p);
        console.log('■ 配列q');
        HumanArrayTester.printHumanArray(q);

        console.log('■ 配列x');
        for(let i = 0; i < x.length; i++){
            console.log(`第${i}行目`);
            HumanArrayTester.printHumanArray(x[i]);
        }
        console.log('■ 配列y');
        for(let i = 0; i < y.length; i++){
            console.log(`第${i}行目`);
            HumanArrayTester.printHumanArray(y[i]);
        }


    }
}