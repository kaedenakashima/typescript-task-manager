// let appId = 'abc';  
// const button2 = document.querySelector('buttton');

// // function add(n1: number, n2: number){
// //     if(n1 + n2 > 0) {
// //         return n1+ n2;
// //     }
// //     return
// // }

// //type AddFn = (a: number, b:number)=> number;
// interface AddFn {
//     (a: number, b: number): number;
// }
// let add1: AddFn;

// add1 = (n1: number, n2: number)=> {
//     return n1 + n2;
// }

// interface Named {
//     readonly name?: string;
//     outputName?: string;
// }

// interface Greetable extends Named {
    
//     greet(phrase?: string): void;
// }



// class Person1 implements Greetable {
//     name?: string;
//     age = 28;
//     constructor(n?: string){
//         if(n){
//             this.name = n;
//         }
//     }
//     greet(phrase: string){
//         if(this.name){
//              console.log(phrase + ' ' + this.name);
//         } else {
//             console.log('Hi')
//         }
//     }
// }

// function clickHandler(message: string) {
//     //let userName = 'Katie';
//     console.log('Clicked!' + message);
// }
// // a comment
// if (button2) {
//     button2.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
// }

// const userName = 'Katie';
// let age = 28;
// age = 29;

// // function add2(a: number, b: number) {
// //     let result;
// //     result = a + b;
// //     return result;
// // }



// // if(age > 20) {
// //     let isOld = true;
// // }

// // console.log(isOld);

// const add2 = (a: number, b: number) => a + b;

// console.log(add2(2, 5))

// // const printOutput: (a: number | string) => void = output => console.log(output);

// // const button = document.querySelector('button');

// // if(button){
// //     button.addEventListener('click', event => console.log(event));
// // } 

// // printOutput(add(5));

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

// const person = {
//     nickName: 'Katie',
//     currentAge: 28
// }

// const copiedPerson = {...person};

// const add3 = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curValue)=>{
//         return curResult + curValue;
//     }, 0)
// };

// const addedNumbers = add3(5, 10, 7, 3.1);
// console.log(addedNumbers);

// // const hobby1 = hobbies[0];
// // const hobby2 = hobbies[1];

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

// const { nickName, currentAge } = person;

// console.log(person);

// class Department {
//     static fiscalYear = 2020;
//     // private readonly id; string;
//     // private name: string;
//     protected employees: string[] = [];
    
//     constructor(protected readonly id: string, public name: string){
//         //this.id = id;
//         //this.name = n;
//         //console.log(Department.fiscalYear);
//     }
    
//     static createEmployee(name: string){
//         return {name: name}
//     }
    
//     describe(this: Department) {
//         console.log(`Department: (${this.id}): ${this.name}`);
//     }
    
//     addEmployee(employee: string) {
//       this.employees.push(employee);
//     }
    
//     pintEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//       super(id, 'IT');
//       this.admins = admins;
//     }
    
//     describe() {
//         console.log('IT development - ID: ' + this.id);
//     }
// }

// class AccountingDepartment extends Department {
//     private lastReport: string;
//     private static instance: AccountingDepartment;
//     get mostRecentReport(){
//         if(this.lastReport){
//           return this.lastReport;
//         }
//         throw new  Error('No report found.');
//     }
//     set mostRecentReport(value: string){
//         if(!value){
//             throw new Error('Please pass in a valid value!');
//         }
//         this.addReport(value)
//     }
//     private constructor(id: string, private reports: string[]) {
//        super(id, 'Accounting');
//        this.lastReport = reports[0];
//     }
    
//     static getInstance() {
//         if(AccountingDepartment.instance){
//             return this.instance;
//         }
//         this.instance = new AccountingDepartment('d2', []);
//         return this.instance;
//     }
    
    
//     describe() {
//         console.log('Accounting Department - ID: ' + this.id)
//     }
//     addEmployee(name: string) {
//         if(name === 'katie'){
//             return;
//         }
//         this.employees.push(name)
//     }
//     addReport(text: string){
//         this.reports.push(text);
//     };
//     printReports() {
//         console.log(this.reports);
//     }
// }

// const employee1 = Department.createEmployee('katie')
// console.log(employee1)
// const it = new ITDepartment('d1', ['katie']);

// console.log(it);
// // it.describe();
// // const itCopy = {name: 'DUMMY', describe: it.describe};
// //const accounting = AccountingDepartment('d2', []);
// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting, accounting2);

// //console.log(accounting.mostRecentReport);
// accounting.addReport('Something went wrong...');

// accounting.addEmployee('katie');
// accounting.addEmployee('dummy');

// //accounting.employees[2] = 'Anna';

// // accounting.printReports();
// // accounting.pintEmployeeInformation();
// accounting.describe();

// accounting.addReport('Something went wrong...')
// //accountingCopy.describe();

// type Admin = {
//     name: string;
//     privileges: string[]
// }
// type Employee = {
//     name: string;
//     startDate: Date;
// }

// // interface ElevatedEmployee extends EMployee, Admin {}
// type ElevatedEmployee = Admin & Employee;
// const e1: ElevatedEmployee = {
//     name: 'Katie',
//     privileges: ['create-server'],
//     startDate: new Date()
// }

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add4(n: number, b: number): number;
// function add4(a: number, b: string): string;
// function add4(a: string, b: number): string;
// function add4(a: number, b: string): string;
// function add4(a: Combinable, b: Combinable){
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// // const result = add('Katie', 'Green');
// // result.split(' ');

// const fetchedUserData = {
//     id: '12345',
//     name: 'katie',
//     job: { title: 'software engineer', dercription: 'a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software.'}
// }

// console.log(fetchedUserData?.job?.title);

// const userInput = '';

// const storeData = userInput || 'DEFAULT';

// console.log(storeData);

// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp){
//         console.log('Name: ' + emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log('Privileges: ' + emp.startDate);
//     }
// }

// printEmployeeInformation({name: 'Katie', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('driving truck...');
//     }
//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird',
//     flyingSpeed: number;
// }

// interface Hourse {
//     type: 'horse',
//     runningSpeed: number;
// }

// type Animal  = Bird | Hourse;

// function moveAnimal(animal: Animal){
//     // if(animal instanceof Bird) {
//     //     console.log('Moving with speed ' + animal.flyingSpeed);
//     // }
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10})
// const paragraph = document.getElementById('message-output');
// //const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input');

// if (userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// interface ErrorContainer {
//     // {
//     //     email: 'Not a valid email',
//     //     username: 'Must start with a character!'
//     // }
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// }

// const names: Array<string> = [];
// //names[0].split(' ');

// // const promise: Promise<number> = new Promise((resolve, reject)=> {
// //     setTimeout(()=>{
// //         resolve(10);
// //     }, 2000)
// // })

// // promise.then(data => {
// //     //data.split(' ');
// // })

// function merge<T extends object, U extends object>(objA: T, objB: U){
//     return Object.assign(objA, objB);
// }

// const mergeObj = merge({name: 'katie', hobbies: ['golf']}, 
// {age: 30});
// console.log(mergeObj);

// interface Lengthy {
//     length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
//     let descriptionText = 'Got no value.'
//     if (element.length > 0){
//         descriptionText = 'Got 1 element.';
//     } else if(element.length > 1) {
//         descriptionText = 'Go ' + element.length + ' elements.';
//     }
//     return [element, descriptionText];
// }

// console.log(countAndDescribe(['Sports', 'Cooking']));

// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'Value: ' + obj[key];
// }

// console.log(extractAndConvert({name: 'katie'}, 'name'));

// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];
//     addItem(item: T){
//         this.data.push(item);
//     }
//     removeItem(item: T){
//         if(this.data.indexOf(item) === -1){
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1); // -1
//     }
//     getItems(){
//         return [...this.data]
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('katie');
// textStorage.addItem('jenny');
// textStorage.removeItem('katie');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

// // const objStorage = new DataStorage<object>();
// // objStorage.addItem({name: 'katie'});
// // objStorage.addItem({name: 'jenny'});
// // objStorage.removeItem(maxObj);
// // console.log(objStorage.getItems());

// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// function createCourseGoal(
//     title: string, 
//     description: string, 
//     date: Date
// ): CourseGoal{
//     let courseGoal: Partial<CourseGoal> = {}
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = date;
//     return courseGoal as CourseGoal;
// }

// function Logger(logString: string){
//     console.log('LOGGER FACTORY')
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function WithTemplate(template: string, hookId: string){
//     console.log('TEMPLATE FACTORY')
//     return function<T extends {new(...args: any[]): {name: string}}>(
//     originalConstructor: T
//     ){
//         return class extends originalConstructor {
//             constructor(..._: any[]){
//                 super();
//                 console.log('Rendering template');
//                 const hookEl = document.getElementById(hookId);
//                 if(hookEl) {
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
// }

//@Logger('LOGGING - PERSON')
// @Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//     name = 'katie';
    
//     constructor() {
//         console.log('Creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers);

// // --
// function Log(target: any, propertyName: string | Symbol){
//     console.log('Property decorator!');
//     console.log(target, propertyName);
// }
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Accessor decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// function Log3(
//     target: any,
//     name: string|Symbol,
//     descriptor: PropertyDescriptor
// ){
//     console.log('Method decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// function Log4(target: any, name: string | Symbol, position: number) {
//     console.log('Property decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }

// class Product {
//     @Log
//     title: string;
//     private _price: number;
    
//     @Log2
//     set price(val: number){
//         if(val > 0){
//             this._price = val;
//         } else {
//         throw new Error('Invalid price - should be positive');
//         }
//     }   
//     constructor(t: string, p: number){
//         this.title = t;
//         this._price = p;
//     }
    
//     @Log3
//     getPriceWithTax(@Log4 tax: number){
//         return this._price * (1 + tax);
//     }
// }

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 29);

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get() {
//             const boundFn = originalMethod.bind(this);
//             return boundFn;
//         }
//     };
//     return adjDescriptor;
// }

// class Printer {
//     message = 'This works!'
    
//     @Autobind
//     showMessage() {
//         console.log(this.message);
//     }
// }

// const p = new Printer();
// p.showMessage();

// const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage);

// // -- 

// interface ValidatorConfig {
//     [property: string]: {
//         [validatableProp: string]: string[] //['required', 'positive']
//     }
// }

// const registeredValidators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: ['required']
//     };
// }

// function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propName]: ['positive']
//     };
// }

// function validate(obj: any){
//     const objValidatorConfig = registeredValidators[obj.constructor.name];
//     if (!objValidatorConfig){
//         return true;
//     }
//     let isValid = true;
//     for (const prop in objValidatorConfig){
//         for (const validator of objValidatorConfig[prop]){
//             switch(validator){
//                 case 'required':
//                     return isValid = isValid && !!obj[prop];
//                     break;
//                 case 'positive':
//                     return isValid = isValid && obj[prop] > 0;
//                     break;
//             }
//         }
//     }
//     return isValid;
// }

// class Course {
//     @Required
//     title: string;
//     @PositiveNumber
//     price: number;
    
//     constructor(t: string, p: number){
//         this.title = t;
//         this.price = p;
//     }
// }

// const courseForm = document.querySelector('form')!;
// courseForm.addEventListener('submit', event=> {
//     event.preventDefault()
//     const titleEl = document.getElementById('title') as HTMLInputElement;
//     const priceEl = document.getElementById('pricee') as HTMLInputElement;
    
//     const title = titleEl.value;
//     const price = +priceEl.value;
    
//     const createdCourse = new Course(title, price);
    
//     if(!validate(createdCourse)){
//         alert('Invalid input, please try again!')
//         return;
//     }
//     console.log(createdCourse)
// })

/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
// import {ProjectInput} from './components/project-input.js';
// import {ProjectList} from './components/project-list.js';

namespace App {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}



