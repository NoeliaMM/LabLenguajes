
 console.log("************** RETO 03 *********************");

// ## Apartado A

export  type NestedArray = any | NestedArray[];
export const arraySampleNumber: NestedArray = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
export const arraySampleMix: NestedArray = ["a", [2, 3], [["b"], [5, 6, [7, 8, [9]]]]];

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

type FlattenArray<T> = T extends[infer Head,...infer Tail]
 ? Head extends any[] ? 
 [FlattenArray<[...FlattenArray<Head>,...Tail]>] : [Head,...FlattenArray<Tail>] : [];
 

 function arrayFlattenTypeInference<T extends any[]>(myArray: T): FlattenArray<T> {

  if(Array.isArray(myArray) && myArray.filter((item) => item !== undefined && item !== null).length){
     
      return myArray.reduce<T[]>((accNewArray, currentValue) => {
          if (!Array.isArray(currentValue)) {
           
            return accNewArray.concat([currentValue]); 
          } else {
              return accNewArray.concat(arrayFlatten(currentValue)); 
           }
        }, []) as FlattenArray<T>
      }
      return [] as FlattenArray<T> ;
    }



console.log(arrayFlattenTypeInference(arraySampleNumber));
console.log(arrayFlattenTypeInference(arraySampleMix));





