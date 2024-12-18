


export const myObject = {
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
  export const myNewObjet:Record<string, any> ={};

 export  type NestedArray = any | NestedArray[];
  export const arraySampleNumber: NestedArray = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
  export const arraySampleMix: NestedArray = ["a", [2, 3], [["b"], [5, 6, [7, 8, [9]]]]];