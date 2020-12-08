export class Period{
    #from;
    #to;
    constructor(from, to){
        this.#from = from;
        this.#to = to;
    }
    getFrom(){
        return new Day(this.#from);
    }
    getTo(){
        return new Day(this.#to);
    }
    toString(){
        return (`{${this.#from}  〜  ${this.#to}}`);
    }

}

export class PeriodTester{
    static main(args){
        let meiji = new Period(new Day(1868, 1, 25), new Day(1912, 7 ,30));
        let taisyo = new Period(new Day(1912, 7, 30), new Day(1926, 12 ,25));
        let syouwa = new Period(new Day(1926, 12, 25), new Day(1989, 1 ,7));

        console.log(`明治 = ${meiji}`);
        console.log(`大正 = ${taisyo}`);
        console.log(`昭和 = ${syouwa}`);
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
        return (`${(this.#year)}年${(this.#month)}月${(this.#date)}日(${wd[this.dayOfWeek()]})`);
    }
}

