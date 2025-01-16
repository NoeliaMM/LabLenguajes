

console.log("************** RETO 06 *********************");
// Cuestión 1
// ¿Existe alguna forma de que la expresión x === x de como resultado false?

const x: number  = NaN;

 console.log(x === x); // false


// Cuestión 2
// Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?

const isNaNValue = (v:any) => !(v === v);

console.log(isNaNValue(NaN)); // true


// Cuestión 3
// Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(x) && x !== x de como resultado true? 
// No debes modificar la implementación isNaNValue en este ejercicio.

// // ¿x? <= Debes ingeniar un "x" que provoque lo siguiente:


const z = (): () => boolean => {
    let state = true; 
    return (): boolean => {
      const currentState = state;
      state = !state; 
      return currentState;
    };
}

console.log(!isNaNValue(z()) && z() !== z()); // true


// Cuestión 4
// ¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?

const b = (): () => number => {
    let state = 0;
    return (): number => {
      const currentState = state;
      state += 2;
      return currentState;
    };
  };

const a = b();

console.log(a() + 1 === a() - 1); // true


// Cuestión 5
// Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?

const c = (): () => number => {
    let state = 2;
    return (): number => {
      const currentState = state;
      state -= 2;
      return currentState;
    };
  };

const d = c();

console.log(d() > d()); // true