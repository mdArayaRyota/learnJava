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


export class Day{
    #year = 1;
    #month = 1;
    #date = 1;
    constructor(year = 1, month = 1, date = 1){
        this.#year = year;
        this.#month = month;
        this.#date = date;
    }
    // Day(year = 1){
    //     this.#year = year;
    // }
    // Day(year = 1, month = 1){
    //     this.#year = year;
    //     this.#month = month;
    // }
    // Day(d){
    //     this.#year = d.getYear();
    //     this.#month = d.getMonth();
    //     this.#date = d.getDate();
    // }
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

export class DayTester{
    static async main(){
        console.log('day1を入力してください。');
        let y = await prompt('年:');
        let m = await prompt('月:');
        let d = await prompt('日:');

        let day1 = new Day(y, m, d);
        let day2 = new Day(y, m, d);
        console.log(`day1 = ${day1}`);
        console.log('day2をday1と同じ日付として作りました。');
        console.log(`day2 = ${day2}`);

        if(day1.equalTo(day2)){
            console.log('day1とday2は等しいです。');
        }else{
            console.log('day1とday2は等しくないです。');
        }

        let d1 = new Day();
        let d2 = new Day(2020);
        let d3 = new Day(2020, 12);
        let d4 = new Day(2020, 12, 5);

        console.log(`d1 =   ${d1}`);
        console.log(`d2 =   ${d2}`);
        console.log(`d3 =   ${d3}`);
        console.log(`d4 =   ${d4}`);

        let a = Day;
        a = new Array(3);

        for(let i = 0; i < a.length; i++){
            a[i] = new Day();
        }
        for(let i = 0; i < a.length; i++){
            console.log(`a[${i}] =   ${a[i]}`);
        }

    }
}
function zeroPadding(num,length){
    return ('0000000000' + num).slice(-length);
}
