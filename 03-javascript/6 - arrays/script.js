let names = [
  "Saidjon",
  "Shohjahon",
  "Azamat",
  "Suhrob",
  "Jahongir",
  "Bahrom",
  "Asadbek",
  "Tursunboy",
  "Aminboy",
  "Bekzod",
  "Kamronbek",
  "Kamoladdin",
];
// console.log(names.length)
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// for (let ozgaruvchi of names) {
//     console.log(ozgaruvchi)
// }


// console.log(names)
// console.log(names[0]);
// console.log(names[2]);
// console.log(names[4]);
// console.log(names[3]);

// let massiv = new Array(4); // uzunligi 4ga teng bo'sh array
// let massiv0 = new Array(4, 1, 2, 3, 5);
// let massiv1 = [];
// console.log(massiv);
// console.log(massiv0);
// console.log(massiv1);
// console.log(names.length);



//^ Array methods
let pushMethod = names.push("oxiriga qoshildi") // oxiriga qoshadi
console.log(names)


let popMethod = names.pop() // oxiridan bitta olib tashlaydi
console.log(names)
console.log(popMethod)

let unshiftMethod = names.unshift("Boshiga qo'shildi") //boshida qoshadi
console.log(names)

let shiftMethod = names.shift() //boshidan bitta olib tashlaydi
console.log(names)
console.log(shiftMethod)