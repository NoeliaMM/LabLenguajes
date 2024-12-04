console.log("************** DELIVERABLE 05 *********************");


// 5. Slot Machine
class SlothMachine { 
coins:number;

constructor(){
   this.coins=0;
}

increment() {
    this.coins++;
}
generateRouletteValues() {
    return [this.spinRoulette(), this.spinRoulette(), this.spinRoulette()];
}

spinRoulette() {
    return Math.random() >= 0.5;
}

play() {
    this.increment();
    
    const [roulette1, roulette2, roulette3] = this.generateRouletteValues();

    if (roulette1 && roulette2 && roulette3) {
        console.log(`Congratulations!!! You won ${this.coins} coins!!`);
        this.coins = 0; 
    } else {
        console.log("Good luck next time!!");
    }
}

} 
const machine1 = new SlothMachine(); 
machine1.play();  
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play(); 
machine1.play();
machine1.play();
machine1.play();
