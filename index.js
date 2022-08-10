// for loop
// for (let age = 30; age < 40; age++) {

//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

//gifts

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {

//     for (let i = 0; i < gifts.length; i++) {

//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }

//     return gifts;
// }

// wrapGifts(gifts);


//writeCards

function writeCards(stringNames, eventName) {
    const messages = [];

    for (let counter = 0; counter < stringNames.length; counter++) {
        let name = stringNames[counter];
        let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;

}

console.log(writeCards(["Linda", "Alice", "Val"], "surprise"));


//CountDown


function countDown(positiveInteger) {
    let x = 10;
    while (x >= 0) {

        console.log(x--);
    }

}
countDown(10);
