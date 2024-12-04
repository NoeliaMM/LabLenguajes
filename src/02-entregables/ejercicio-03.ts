import { UserA,UserB} from './models.js';


console.log("************** DELIVERABLE 03 *********************");

// 3. Clone Merge
function clone<T>(source: T): T {
    return JSON.parse(JSON.stringify(source));   
  }

  const cloneUserA = clone(UserA);
  UserA.childrens.push("Marta");
  console.log("Result clone: ",cloneUserA);
  console.log("Original object: ", UserA);


// Merge
function merge<S extends object, T extends object>(source: S, target: T): S & T {
    return { ...clone(target), ...clone(source) };
  }

    
const result = merge(UserA, UserB);

console.log("Result merge: ", result);



