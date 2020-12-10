import { timeStamp } from 'console';
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
    isLeap(){
        return isLeap(this.#year)
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
    //年内の経過日数
    dayOfYear(){
        let days = date;
        for(let i = 0; i < month; i++){
            days += dayOfMonth(year, i);
        }
        return days;
    }
    //年内の残り日数
    leftDayOfYear(){
        return 365 + (isLeap(year) ? 1: 0) - this.dayOfYear();
    }
    //日付dとの前後関係を判定
    compareTo(d){
        return compare(this, d);
    }
    //２つの日付の前後関係を判定
    static compare(d1, d2){
        if(d1.getYear() > d2.getYear()) return 1;
        if(d1.getYear() < d2.getYear()) return -1;

        if(d1.getMonth() > d2.getMonth()) return 1;
        if(d1.getMonth() < d2.getMonth()) return -1;

        return d1.getDate() > d2.getDate() ? 1 : d1.getDate < d2.getDate ? -1 : 0;
    }
    //日付を１つ後ろに進める
    succeed(){
        let tmp = new Day(this);
        timeStamp.succeed();
        return tmp;
    }
    //翌日の日付を返す
    succeedingDay(){
        let temp = new Day(this);
        temp.succeed();
        return temp;
    }
    //日付を１つ前に渡す
    precede(){
        if(this.#date > 1){
            this.#date--;
        }else{
            if(--month < 1){
                year--;
                month = 12;
            }
            this.#date = dayOfMonth(this.#year, this.#month);
        }
    }
    //前日の日付を返す
    precedingDay(){
        let temp = new Day(this);
        temp.precede();
        return temp;
    }
    //日付をn日後ろに進める
    succeedDays(){
        if(n < 0){
            this.precedingDay(-n);
        }else if(n > 0){
            date += n;
            while(this.#date > dayOfMonth(year, month)){
                if(++month > 12){
                    year++;
                    month = 1;
                }
            }
        }
    }
    //前日の日付を返す
    precedeDay(){
        let temp = new Day(this);
        temp.precede();
        return tmp;
    }
    //n日前の日付を返す
    before(n){
        let temp = new Day(this);
        temp.precedingDay(n);
        return temp;
    }

}

export class DayTester{

    //日付に関する情報を表示
    static display(day){
        console.log(`${day}に関する情報`);
        console.log(`閏年${day.isLeap() ? 'である':'ではない'}`);
        console.log(`年内経過日数：${day.dayOfYear()}`);
        console.log(`年内残り日数：${day.leftDayOfYear()}`);
    }

    //日付を変更
    static async change(day){
        console.log('[1]年月日を変更    [2]年を変更');
        console.log('[3]月を変更       [4]日を変更');
        console.log('[5]1日進める      [6]1日戻す');
        console.log('[7]n日進める      [8]n日戻す');

        let change;
        let y = 0, m = 0, d = 0, n = 0;
        if(change == 1 || change == 2){
            y = await prompt('年:');
        }
        if(change == 1 || change == 3){
            m = await prompt('月:');
        }
        if(change == 1 || change == 4){
            d = await prompt('日:');
        }
        if(change == 7 || change == 8){
            n = await prompt('何日:');
        }
        switch(change){
            case 1: day.set(y, m, d);       break;
            case 2: day.setYear(y);       break;
            case 3: day.setMonth(m);       break;
            case 4: day.setDate(d);       break;
            case 5: day.succeed();          break;
            case 6: day.precede();          break;
            case 7: day.succeedDays();          break;
            case 8: day.precedeDay();          break;
        }
        console.log(`${day}に変更されました。`);
    }
    static compare(day){
        console.log('比較対象の日付を入力せよ');
        y = await prompt('年:');
        m = await prompt('月:');
        d = await prompt('日:');

        let d2 = new Day(y, m, d);

        let comp = compareTo(day, d2);

        process.stdout.write(day);
        switch(comp){
            case -1: console.log('のほうが前。');
            case  1: console.log('のほうが後。');
            case  0: console.log('と同じ。。');
        }
    }
    //前後の日付を求める
    static beforeAfter(day){
        let type = await prompt('[1]翌日 [2]前日 [3]n日後 [4]n日前:');
        let n = 0;
        if(type == 3 || type == 4){
            let n = await prompt('何日:');
        }
        console.log('');
        process.stdout.write('それは');

        switch(type){
            case 1: process.stdout.write(`${day.succeedingDay()}`); break;
            case 2: process.stdout.write(`${day.precedingDay()}`);  break;
            case 3: process.stdout.write(`${day.after(n)}`);  break;
            case 4: process.stdout.write(`${day.before(n)}`);  break;
        }
        process.stdout.write('です。');
    }

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


export class Today{
    static main(args){
        let today = new Day();
        console.log(`今日は${today}です。`);
    }
}