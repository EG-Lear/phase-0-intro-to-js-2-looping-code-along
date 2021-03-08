// for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//} 

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  //}

  //return gifts;
//}

//wrapGifts(gifts);

const names = ['Jim', 'Bob', 'Joe']

function writeCards(names) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return message;    
}

writeCards(names);

function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}

countDown(number);