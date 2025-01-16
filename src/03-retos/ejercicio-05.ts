

console.log("************** RETO 05 *********************");

// Recursividad en interfaces: Tipado para estructuras en forma de árbol
interface TreeNode<T>{
value:T;
children?: TreeNode<T>[]
}

const tree: TreeNode<string> = {
    value: "1",
    children: [
      {
        value: "2",
        children: [
          { value: "2.1" },
          { value: "2.2",
            children: [{ value: "2.2.1" }]
           },
        ],
      },
      { value: "3" },
    ],
  };



// A partir de aquí  no es del reto, son ejemplos de la clase

// Recursividad en alias con interfaces

type IterableList<T extends object> = T & {next: IterableList<T> |null};

interface Student{
    name: String;
}

let classList : IterableList<Student> = {name:"John",next:{name:"Jane",next:null}};



// Recursividad en alias
type RecursiveArray<T> = ( T | RecursiveArray<T>)[];

const myRecursiveArray: RecursiveArray<number> = [1,2,[3,4,[5,6]]];


// CASOS PRáCTICOS recursividad y tipos condicionales: Inferencia explicita
// 
    // type IsPrimitiveArray<T extends any[]> = T extends string[] ? true:false;

    // const sampleArray: string[] = ["a","b","c"];

    // type Result1 = IsPrimitiveArray<typeof sampleArray> // true

type IsPrimitiveArray<T extends any[]> = T extends (infer Type)[] ? Type extends object ?false :true :never;

const sampleArray = ["a","b","c"];
const sampleArray2 = [{}];
type Result1 = IsPrimitiveArray<typeof sampleArray> // true
type Result2 = IsPrimitiveArray<typeof sampleArray2> // false


//Ejemplo con recursividad
type RemoveZeros<T extends any[]> = T extends [infer First, ...infer Rest] ? First extends 0 ? RemoveZeros<Rest> : [First, ...RemoveZeros<Rest>] : [];

const sampleArray3 = [0,1,0,2,0,3,0,4,0,5];
type Result3 = RemoveZeros<typeof sampleArray3> // [1,2,3,4,5]



// aplicando Tipado para la funcion del reto 3 
type FlattenArray<T extends any[]> = T extends[infer Head,...infer Tail] ? Head extends any[] ? FlattenArray<[...FlattenArray<Head>,...Tail]> : [Head,...FlattenArray<Tail>] : T;

type ArraySampleNumber3 = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// Aplica FlattenArray al tipo
type FlattenArrayResult = FlattenArray<ArraySampleNumber3>;
