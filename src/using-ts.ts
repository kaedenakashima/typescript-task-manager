// const button = document.querySelector('button')
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// // function add(n1: number, n2: number, showResult: boolean, phrase: string){
// //     const result = n1 + n2;
// //     if(showResult){
// //         console.log(phrase + result);
// //     } else {
// //         return result;
// //     }
// // }
// // let number1: number;
// // number1 = 5;
// // const number2 = 2.8;
// // const printResult = true;
// // let resultPhrase = 'Result is: ';
// // //resultPhrase = 0;

// // add(number1, number2, printResult, resultPhrase);

// // const person: {
// //     name: string;
// //     age: number;
// // } = {

// const ADMIN = 0;
// const READY_ONLY = 1;
// const AUTHOR = 2;

// enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};

// const person= {
//     name: 'Katie',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN
// };
// //= {
// //  name: 'Katie',
// //  age: 28,
// //  hobbies: ['Sports', 'Cooking'],
// //  role: [2, 'author']
// //};

// //person.role.push('admin');
// //person.role[1] = 10;
// //person.role = [0, 'admin', 'user'];

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// console.log(person.name)

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase);
// }

// // if(person.role === 'READY-ONLY-USER'){
// //     console.log('is read only!')
// // }
// type Combinable = number | string;

// function combine(
//     input1: Combinable, 
//     input2: Combinable, 
//     resultConversion: 'as-number' | 'as-text'
// ) {
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// function add2(n1: number, n2: number){
//     return n1 + n2;
// }
// function printResult2(num: number): void{
//     console.log('Result: ' + num);
//     return;
// }

// // function addAndHandler(n1: number, n2: number, cb: (num: number) => void){
// //     const result = n1 + n2;
// //     cb(result);
// // }

// printResult2(add2(5, 12));
// //let combineValues: (a: number, b: number) => number;

// //combineValues = add;
// //combineValues = printResult;
// //let someValue: undefined;

// //console.log(combineValues(8, 8));
// // addAndHandler(10, 20, (result)=> {
// //     console.log(result);
// // })

// const combineAges = combine(30, 26, 'as-number');
// const combineAtringAges = combine('30', '26', 'as-number')
// console.log(combineAtringAges);

// const combinedNames = combine('Katie', 'Mac', 'as-text');
// console.log(combinedNames); 

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Katie';
// if(typeof userInput === 'string'){
//     userName = userInput;
// }

// // function generateError(message: string, code: number): never {
// //     throw { messege: message, errorCode: code};
// // }

// // const result = generateError('An error occured!', 500);
// // console.log(result);