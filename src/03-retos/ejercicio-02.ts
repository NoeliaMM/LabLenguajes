
console.log("************** RETO 02 *********************");

type Keys = string | number;

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
        h: {
          i: "re-bingo",
        }
      }
    }
  }
};

const myNewObjet:Record<string, any> ={};

const deepGet = function(source:object, ...itemSearch:Keys[]):any {

  if (!source || typeof source !== "object") {
    return undefined; 
}

const [...restItem] = itemSearch;

let target:any = source;

for (const key of restItem) {
  if (target && typeof target === "object" && key in target) {
      target = target[key];
  } else {
      return undefined;
  }
}

return target;
}


console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}


// ## Apartado B

const deepSet = (value: any, source: object, ...itemSave: Keys[]): void => {
    if(value === undefined
        || source === undefined
        || typeof source !== "object"
        || itemSave.length === 0)
    return;
  
    const headKeys = itemSave.slice(0, -1);
    const lastKey = itemSave[itemSave.length - 1];  
    
    const head = deepGet(source, ...headKeys);
  
    if (head === undefined || typeof head !== "object") {
        deepSet({}, source, ...headKeys);
    }

    const updatedHead = deepGet(source, ...headKeys);  
 
    if (updatedHead && typeof updatedHead === "object") {
        updatedHead[lastKey] = value;
    }
  };
    

deepSet(1, myNewObjet, "a", "b");
console.log(JSON.stringify(myNewObjet));  // {a: { b: 1}}
deepSet(2, myNewObjet, "a", "c");
console.log(JSON.stringify(myNewObjet));  // {a: { b: 1, c: 2}}

deepSet({"y":"jejeje"}, myNewObjet, "a", "d","j");
console.log(JSON.stringify(myNewObjet));

deepSet(3, myNewObjet, "a");
console.log(JSON.stringify(myNewObjet));  // {a: 3}
deepSet(4, myNewObjet);
console.log(JSON.stringify(myNewObjet));  // Do nothing // {a: 3}



