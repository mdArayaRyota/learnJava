export class PrintAscii{
    static main(){
        for(let i = 0x21; i <= 0x7E; i++){
            console.log(`${String.fromCharCode(i)}, ${toHex(i)}`);
        }
        //ASCIIコード「65」を文字列に変更する
        // var str1 = String.fromCharCode(65);
        // console.log(str1);
    }
}
function toHex(v) {
    return (('0000' + v.toString(16).toUpperCase()).substr(-4));
}