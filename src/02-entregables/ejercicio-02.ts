import { africaCountry,asiaCountry,europeCountry} from './models.js';

console.log("************** DELIVERABLE 02 *********************");

// 2. Concat
 export const concat = <T>(...args: T[][]):T[] => {
        return  args.reduce((acc, curr) => [...acc, ...curr], []);
 };

 const allCountries = concat(africaCountry,asiaCountry,europeCountry);
 console.log("Result concat: ",allCountries);


