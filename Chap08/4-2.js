//4-2.
class Car{
    #name;
    #number;
    #width;
    #height;
    #length;
    #x;
    #y;
    #tankage;
    #fuel;
    #sfc;
    constructor(name, number, width, height, length, tankage, fuel, sfc){
        this.#name = name;
        this.#number = number;
        this.#width = width;
        this.#height = height;
        this.#length = length;
        this.#tankage = tankage;
        this.#fuel = fuel;
        this.#sfc = sfc;
        this.#x = 0;
        this.#y = 0;
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    getFuel(){
        return this.#fuel;
    }
    publicSpec(){
        console.log(`名    前：${this.#name}`);
        console.log(`ナンバー：${this.#number}`);
        console.log(`車    幅：${this.#width}mm`);
        console.log(`車    長：${this.#height}mm`);
        console.log(`車    高：${this.#length}mm`);
        console.log(`タンク  ：${this.#tankage.toFixed(1)}リットル`);
        console.log(`燃    費：${this.#fuel.toFixed(1)}km/リットル`);
    }

    move(dx, dy){
        //移動距離
        let moved = Math.sqrt(dx ** 2 + dy ** 2);
        //移動に必要な燃料
        let useFuel = moved / this.#sfc;


        if(useFuel > this.#fuel){
            //燃料不足
            return false;
        }else{
            //移動距離の分燃料が減る
            this.#fuel -= useFuel;
            this.#x += dx;
            this.#y += dy;
            return true;
        }
    }

    refuel(df){
        if(df > 0){
            this.#fuel +=df;
            if(this.#fuel > this.#tankage){
                this.#fuel = this.#tankage;
            }
        }
    }

}


//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {


    console.log('車のデータを入力せよ。');
    let name = await prompt('名      前：');
    let number = await prompt('ナ ン バー：');
    let width = await prompt('車      幅：');
    let height = await prompt('高      さ：');
    let length = await prompt('長      さ：');
    let tank = await prompt('タンク容量：');
    let fuel = await prompt('ガソリン量：');
    let sfc = await prompt('燃      費：');

    let myCar = new Car(name, number, width, height, length, tank, fuel, sfc);
    myCar.publicSpec();

    while(true){
        console.log(`現在地：(${myCar.getX()}, ${myCar.getY()})`);
        console.log(`残り燃料:${myCar.getFuel()}`);
        let retry = await prompt(`移動しますか[0...No/1...Yes]:`);
        if(retry == 0)break;
        let dx = await prompt(`X方向の移動距離:`);
        let dy = await prompt(`Y方向の移動距離:`);

        if(!myCar.move(dx, dy))console.log('燃料不足！！');
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


// 起動
(async () => {
    await main();
})();