function guessMyNumber(guess) {
    let myNum = Math.floor(Math.random() * 10) + 1;
    
    if (guess === myNum) {
        console.log("You guessed my number!");
    }
    else if (Math.abs(myNum - guess) === 1) {
        console.log("So close! You guessed " + guess + " and my number was " + myNum + ".");
    }
    else if (Math.abs(myNum - guess) === 2) {
        console.log("Almost! You guessed " + guess + " and my number was " + myNum + ".");
    }
    else {
        console.log("Not quite! You guessed " + guess + " and my number was " + myNum + ".");
    }
}

guessMyNumber(5);