export class StringTester{
    static main(){
        let s1 = null;
        let s2 = "";
        let s3 = "ABC";
        let s4 = "ABC";
        let s5 = "ABC";
        s5 = "XYZ";

        console.log(`文字列s1 = ${s1}`);
        console.log(`文字列s2 = ${s2}`);
        console.log(`文字列s3 = ${s3}`);
        console.log(`文字列s4 = ${s4}`);
        console.log(`文字列s5 = ${s5}`);
        console.log(`s3とs4は同じ文字リテラルを参照${s3 == s4 ? "している。" : "していない。"}`);

        console.log('');
        let t = "DEF";
        let t1 = "ABC" + t;
        let t2 = "ABC" + t;
        console.log(`s3とs4は同じ文字リテラルを参照${t1 == s2 ? "している。" : "していない。"}`);

    }
}
