
import {a, b} from './file2.mjs';
import {add, amrSub} from './utils/index.mjs'; // the index must be specified in esm



console.log("test: ", a, b);                  

console.log("Addition: ", add(a, b));
console.log("Subtraction: ", amrSub(a, b));