import {colors} from './models.js';

console.log("************** DELIVERABLE 01 *********************");

// Head
 const head = (arrayColors: string[]): string => {   

    const [firstColor] = arrayColors;
    
    return firstColor;

 };
 console.log("Results head:",head(colors) );
 console.log("Original array",colors);

 

// Tail
const tail =([, ...arrayColors]: string[]): string[] => {
   return arrayColors;
}

console.log("Results tail:",tail(colors) );
console.log("Original array",colors);

// Init
//  Implementa una función init (inmutable), tal que, dado un array como entrada
//  devuelva todos los elementos menos el úl mo. U liza los métodos que ofrece
//  Array.prototype.
//  const init = (/* array */) => {}; // Implementation here. 

const init = (arrayColors: string[]): string[] => {   
   
   return arrayColors.slice(0,-1);

};
console.log("Results init:",init(colors) );
console.log("Original array",colors);

// Last
const last = (arrayColors: string[]): string[] => {   
   
   return arrayColors.slice(arrayColors.length-1);

};

console.log("Results last:",last(colors) );
console.log("Original array",colors);