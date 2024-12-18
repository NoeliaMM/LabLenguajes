console.log("************** RETO 01 *********************");

type Trigger = () => Promise<void>;

const delay = (ms: number) : Promise<void>=> new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]:[number,string]) => {
  await delay(time);
  console.log(message);
};



const triggers : Trigger[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];


const run = async (triggers: Trigger[]): Promise<void> => {
    
    for (const t of triggers) {
      await t();
    }
    console.log("first");
  };

run(triggers);