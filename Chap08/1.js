//1.
class Human{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}
let suzuki = new Human();
suzuki.name = '鈴木二郎';
suzuki.height = 170;
suzuki.weight = 60;
console.log(`名前：${suzuki.name}`);
console.log(`身長：${suzuki.height}cm`);
console.log(`体重：${suzuki.weight}kg`);
console.log('');
let takada = new Human();
takada.name = '高田龍一';
takada.height = 166;
takada.weight = 72;
console.log(`名前：${takada.name}`);
console.log(`身長：${takada.height}cm`);
console.log(`体重：${takada.weight}kg`);
console.log('');
