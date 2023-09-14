function multiply03 (num1: number, num2: number): number {
    return num1 * num2;
}

function sum03 (num1: number, num2: number): number {
    return num1 + num2;
} 

function isEven03 (num: number): boolean {
    return num % 2 === 0;
}

function showResult03 (result: number): void {
    if (isEven03(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`)
    }
}