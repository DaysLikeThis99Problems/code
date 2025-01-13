//1.
// import greet from './utills.mjs';
// console.log(greet("Agnes"));
// //use 'node app.mjs' to run 


//2.
// import {add,sub} from './utills.mjs';
// console.log(add(10,5));
// console.log(sub(10,5));

// //3.
// import greet,{sub,add} from './utills.mjs';
// console.log(add(10,5));
// console.log(sub(10,5));
// console.log(greet("Agnes"));

//4,
import * as util from "./utills.mjs";
console.log(util.add(10,5));
console.log(util.sub(10,5));