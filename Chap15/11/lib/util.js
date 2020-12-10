export class Player{
    hand;
    nextHand(){
    }
}

export class HumanPlayer extends Player{
    nextHand(){
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
        return this.#rand.
        console.log(this.#rand);
    }
}