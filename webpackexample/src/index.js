import Person from './person';
import {add,sub} from './lib';

let p = new Person("Anita", 25);

console.log("Sum : " + add(4,5));
console.log("Differnce : " + sub(4,5));

console.log(p.getName());