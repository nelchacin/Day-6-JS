// INTERATION 1

let hacker1 = "Nelson"
let hacker2 = "Pablo"
// console.log ("The driver's name is" + " "+hacker1)
// console.log ("The navigator's name is" + " "+hacker2)


// INTERATION 2

// if (hacker1.length>hacker2.length) {
//     console.log ("The driver has the longest name, it has"+ " "+ hacker1.length + " "+"characters")

// } else if (hacker1.length=hacker2.length){
//     console.log ("WOW!, you both have equally long names," + " " + "characters" )
// }else {

//     console.log ("its seems that the navigator has the longest name , it has"+ " "+ hacker2.length+ " " +"characters")
// }

// INTERATION 3

console.log(hacker1.toUpperCase().split("").join(" "))
console.log(hacker2.toUpperCase().split("").join(" "))

let charactersReverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    charactersReverse += hacker2[i]
}
console.log (charactersReverse)

if (hacker1.localeCompare(hacker2) <= -1) {
    console.log("The driver's name goes firts");
} else
    if (hacker1.localeCompare(hacker2) >= 1) {
        console.log("Yo, the navcigator's name goes firts definitely");
    } else {
        console.log("What?! you both have the same name!");
    }

    // BONUS

    let paragraphsL = ("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aspernatur labore. Possimus, nobis hic at accusantium illo tempora voluptatem commodi alias, dolorum sapiente autem corrupti et magni earum debitis dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aspernatur labore. Possimus, nobis hic at accusantium illo tempora voluptatem commodi alias, dolorum sapiente autem corrupti et magni earum debitis dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aspernatur labore. Possimus, nobis hic at accusantium illo tempora voluptatem commodi alias, dolorum sapiente autem corrupti et magni earum debitis dignissimos?")
let words = paragraphsL.toLowerCase().split(' ').length;
console.log(paragraphsL.toLowerCase().split(' '));
console.log("La spring contiene " + words + " palabras.");

let numberOfWords= "et"
let count = 0;

for (let i = 0; i < paragraphsL.toLowerCase().split(' ').length; i++) {
    if (paragraphsL.toLowerCase().split(' ')[i] == numberOfWords.toLowerCase()) {
        count++;
    }
}
console.log("The latin word " + numberOfWords + " appers " + count + " times.")
