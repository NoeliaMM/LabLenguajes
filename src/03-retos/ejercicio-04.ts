

console.log("************** RETO 04 *********************");


// Apartado A 

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

function memoize<T>(fn: () => T): () => T {

    let momoizeResult: T;
    let memoized = false;
  
    return function (): T {
      if (memoized) {
        
        return momoizeResult as T;
      }
  
      const result = fn();
      momoizeResult = result;
      memoized = true;
  
      return result;
    };
  }

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415


// Apartado B

function memoizeSimplified<T>(fn: () => T): () => T {

  let memoizeResult: T, memoized = false;

  return () => memoized ? memoizeResult : (memoized = true, memoizeResult = fn());
}


const memoizedSimplified = memoizeSimplified(expensiveFunction);
console.log(memoizedSimplified()); // 3.1415
console.log(memoizedSimplified()); // 3.1415
console.log(memoizedSimplified()); // 3.1415()); // 3.1415


// Apartado C

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())


function memoizeWithArguments<T extends (...args: any[]) => any>(fn: T): T {
  const map = new Map<string, ReturnType<T>>();

  return function (...args: Parameters<T>): ReturnType<T> {
    const clave = args.join("_");

    if (map.has(clave)) {
        return map.get(clave) as ReturnType<T>;
    }

    const result = fn(...args);
    map.set(clave, result);
    return result;
  } as T;
}

const memoizedGreet = memoizeWithArguments(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                    