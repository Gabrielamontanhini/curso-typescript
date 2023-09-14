function multiply1(num1: number, num2: number): number {
    return num1 * num2;
}

function sum1(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven1 (num: number): boolean {
    return num % 2 === 0;
}

function showResult1(result: number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    let result:number = sum1(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
