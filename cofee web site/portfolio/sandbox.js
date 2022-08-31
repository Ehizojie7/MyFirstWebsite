let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//let result = radius * pi;

//console.log(result);

let firstName = "Ja";
let secondName = "Morant";

let fullName = firstName + " " + secondName;

console.log(fullName);

let result = 243 * pi + 436 **2 * radius;

console.log(result);

console.log(fullName.length);
console.log(fullName.toUpperCase());

let index = fullName.slice(2,6);
console.log(index);

let name = "Lebron";
console.log(name.replace("o", "u"));

console.log(name);

alert("Accept cookies!");

let data = `The highflying basketballer, known as ${fullName} is on the verge of stardom!`;
console.log(data);

for(let i = 0; i < 10; i++){
    console.log('in loop: ', i);
    console.log('loop finished');
}

for(let i = 0; i < 5; i++){
    console.log('in loop', i);
}

const age = 90;
if(age > 75){
    console.log("You are old!");
}

const password = 'passga';
if(password.length >= 12){
    console.log("password is strong enough!");
} else if(password.length >= 8){
    console.log("password is okay!")
}else{
    console.log("password is too weak!");
}
