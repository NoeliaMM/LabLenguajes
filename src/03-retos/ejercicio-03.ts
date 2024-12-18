import { arraySampleNumber, NestedArray,arraySampleMix } from  "./models.js";

 console.log("************** RETO 03 *********************");

// ## Apartado A

function arrayFlatten<T>(myArray: (T | NestedArray[])[]): (T | NestedArray[])[] {

    if(Array.isArray(myArray) && myArray.filter((item) => item !== undefined && item !== null).length){
       
        return myArray.reduce<T[]>((accNewArray, currentValue) => {
            if (!Array.isArray(currentValue)) {
             
              return accNewArray.concat([currentValue]); 
            } else {
                return accNewArray.concat(arrayFlatten(currentValue)); 
             }
          }, []); 
        }
        return [];
      }


console.log(arrayFlatten(arraySampleNumber));
console.log(arrayFlatten(arraySampleMix));



// ## Apartado B

type TypeItem = number | string | boolean; 
function arrayFlattenTipeEspecific<TypeItem>(myArray: ( TypeItem| NestedArray[])[]): (TypeItem | NestedArray[])[] {

    if(Array.isArray(myArray) && myArray.filter((item) => item !== undefined && item !== null).length){
       
        return myArray.reduce<TypeItem[]>((accNewArray, currentValue) => {
            if (!Array.isArray(currentValue)) {
             
              return accNewArray.concat([currentValue]); 
            } else {
                return accNewArray.concat(arrayFlatten(currentValue)); 
             }
          }, []); 
        }
        return [];
      }

console.log(arrayFlattenTipeEspecific(arraySampleNumber));


