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
    static #mdays = [
        [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
        [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
    ];
    //y年は閏年か trueだったら閏年
    static isLeap(y){
        return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
    }
    //y年m月の日数
    static dayOfMonth(y, m){
        return this.#mdays[this.isLeap(y) ? 1 : 0][m - 1];
    }
    //調整された月
    static adjustedMonth(m){
        return m < 1 ? 1 : m > 12 ? 12: m;
    }
    //調整されたy年m月のd日(1〜28,29,30,31の範囲外を調整)
    static adjustedDay(y, m, d){
        if(d < 1)return 1;
        let dMax = this.dayOfMonth(y, m);
        return d > dMax ? dMax : d;
    }
    constructor(){
        this.#year = Date.getYear();
        this.#month = Date.getMonth();
        this.#date = Date.getDate();
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

export class DayTester{
    static async main(){
        console.log('日付を入力せよ。');
        let y = await prompt('年:');
        let m = await prompt('月:');
        let d = await prompt('日:');

        let day = new Day(y, m, d);

        while(true){
            console.log('[1]日付に関する情報を表示[2]日付を変更[3]他の日付との比較[4]前後の日付を求める。[5]終了：');
            let menu = await prompt();
            if(menu == 5)break;
            switch (menu){
                case 1: display(day); break;
                case 2: change(day); break;
                case 3: compare(day); break;
                case 2: beforeAfter(day); break;
            }
        }
    }
}

