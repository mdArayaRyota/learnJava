export class Player{
    hand;
    nextHand(){
    }
}

export class HumanPlayer extends Player{
    async nextHand(){
        let hand;
        do{
            hand = await prompt(`じゃんけんポン！！ 0/グー,1/チョキ,2/パー：`);
        }while(hand < 0 || hand > 2);
        return hand;
    }
}

export class ComputerPlayer extends Player{
    #rand;
    nextHand(){
        return randomInteger(3);
    }
}

export class FingerFlashing{
    static async main(args){
        let humanPlayer = new HumanPlayer();
        let computerPlayer = new ComputerPlayer();

        let hands = ["グー", "チョキ", "パー"];
        let retry;

        do{
            let comp = computerPlayer.nextHand();
            let user = await humanPlayer.nextHand();
            console.log(`私:${hands[user]}/COM:${hands[comp]}`);
            let judge = (user - comp + 3) % 3;
            switch (judge){
                case 0: console.log('引き分けです。');         break;
                case 1: console.log('あなたの負けです。');      break;
                case 2: console.log('あなたの勝ちです。');      break;
            }

            do{
                retry = await prompt(`もう一度？0..いいえ、1..はい：`);
            }while(retry != 0 && retry != 1);
        }while(retry == 1);

    }
}


//ランダムな整数生成
const randomInteger = (elementCount) =>{
    return Math.floor( Math.random() * elementCount);
}

//-----------------------------------------------------------------------------------------------
//キーボード入力
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