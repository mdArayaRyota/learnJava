export class Calendar{

    static dayOfWeek(year, month){
        if(month == 1 || month == 2){
            year--;
            month += 12;
        }
        return parseInt(year + year/4 - year/100 + year/400 + (13 * month + 8) / 5 + 1) % 7;
    }
    //平年 0 , 閏年 1
    static isLeap(year){
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
    static monthDays(year, month){
        const mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(month-- != 2){
            return mday[month];
        }
        return mday[month] + (Calendar.isLeap(year) ? 1 : 0);
    }
    static putCalendar(year, month){
        let wd = (Calendar.dayOfWeek(year, month));
        let mdays = parseInt(Calendar.monthDays(year, month));

        console.log('  日  月  火  水  木  金  土');
        console.log('----------------------------');
        for(let i = 0; i < wd; i++){
            process.stdout.write("    ");
        }
        for(let i = 1; i <= mdays; i++){
            process.stdout.write(`${Calendar.spacePadding(i, 4)}`);
            if(++wd % 7 == 0){
                console.log('');
            }
        }
        console.log('');
    }
    static spacePadding(NUM, LEN){
        return ( Array(LEN).join(' ') + NUM ).slice( -LEN );
    }
    static main(args){
        let year = 1;
        let month = 1;
        let argsArray = 0;
        argsArray = process.argv;

        if(argsArray.length == 2){
            let day = new Date();
            year = day.getUTCFullYear();
            month = day.getMonth() + 1;
            day = day.getDate();
        }else{
            if(argsArray.length >= 3){
                year = parseInt(argsArray[2]);
                if(year < 0){
                    console.log('年の指定が不正です。');
                    return;
                }
            }
            if(argsArray.length >= 4){
                month = parseInt(argsArray[3]);
                if(month < 1 || month > 12){
                    console.log('月の指定が不正です。');
                    return;
                }
            }
        }
        if(argsArray.length == 2 || argsArray.length >= 4){
            console.log(`${year}年${month}のカレンダー`);
            Calendar.putCalendar(year, month);
        }else{
            console.log(`${year}年のカレンダー`);
            for(month = 1; month <= 12; month++){
                console.log(`${month}月`);
                Calendar.putCalendar(year, month);
                console.log('');
            }
        }
    }
}
