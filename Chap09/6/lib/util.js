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
    #birthday;
    constructor(name, height, weight, birthday){
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
        this.#birthday = new Day(birthday.getYear(), birthday.getMonth(), birthday.getDate());

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
    getBirthday(){
        return new Day(this.#birthday.getYear(), this.#birthday.getMonth(), this.#birthday.getDate());
    }
    reduceWeight(w){
        this.#weight -= w; //痩せる
    }
    toString(){
        return (`${this.#name}: ${this.#height}cm  ${this.#weight}kg  ${this.#birthday}生まれ`);
    }
}

export class HumanTester1{
    static main(){
        let suzuki = new Human('鈴木二郎', 170, 64, new Day(1900, 10, 14));
        let takada = new Human('高田良夫', 174, 60, new Day(1901, 11, 13));
        console.log(`suzuki = ${suzuki}`);
        console.log(`takada = ${takada}`);
    }
}

export class Day{
    #year;
    #month;
    #date;
    constructor(year = 1, month = 1, date = 1){
        this.#year = year;
        this.#month = month;
        this.#date = date;
    }
    getYear(){
        return this.#year;
    }
    getMonth(){
        return this.#month;
    }
    getDate(){
        return this.#date;
    }
    setYear(year){
        this.#year += year;
    }
    setMonth(month){
        this.#month += month;
    }
    setDate(date){
        this.#date += date;
    }
    set(year, month, date){
        this.#year += year;
        this.#month += month;
        this.#date += date;
    }
    dayOfWeek(){
        let y = this.#year;
        let m = this.#month;
        //0:日,1:月,2:火,3:水,4:木,5:金,6:土
        if(m == 1 || m == 2){
            y--;
            m += 12;
        }
        return Math.floor((y + y /4 -y /100 + y /400 + (13 * m + 8) / 5 + this.#date) % 7);
    }
    equalTo(d){
        return this.#year == d.getYear() && this.#month == d.getMonth() && this.#date == d.getDate();
    }
    toString(){
        let wd = [ "日", "月", "火", "水", "木", "金", "土"];
        return (`${zeroPadding(this.#year, 4)}年${zeroPadding(this.#month, 2)}月${zeroPadding(this.#date, 2)}日(${wd[this.dayOfWeek()]})`);
    }
}


function zeroPadding(num,length){
    return ('0000000000' + num).slice(-length);
}
