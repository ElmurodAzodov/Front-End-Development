// let birinchiMeva = "olma"
// let ikkinchiMeva = "uzum"
// let uchinchiMeva = "ananas"
// let tortinchiMeva = "banan"

// console.log(birinchiMeva, ikkinchiMeva, uchinchiMeva, tortinchiMeva)
// let mevalar = ["olma", 1, 2, 3, 4, "anor", "uzum", "shaftoli", "apelsin", "mandarin"]
// console.log(mevalar)
// console.log(mevalar[5])
// // console.log(mevalar[-4])
// console.log(mevalar.length)

//! ___________________________________________________________________________

let oquvchilar = [
  "Boburjon",
  "Marjona",
  "Abrorbek",
  "Hurmatbek",
  "Shohruzbek",
  "Dastonbek",
];
let natija = [];
let sonlar = [10, 9, 8, 7, 6, 5, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//& push()
oquvchilar.push("Sherzodbek", "Axror");

//& pop()
let saqlandi = oquvchilar.pop();

//& unshift()
oquvchilar.unshift(saqlandi);

//& shift()
let boshidanOchirdi = oquvchilar.shift();

//& splice(start, deleteCount, ...items)
sonlar.splice(1, 6, 0, 0, 0);

console.log(oquvchilar.indexOf("Marjonaxon"))
// console.log(sonlar)

// console.log(oquvchilar)
// console.log(saqlandi)
// console.log(boshidanOchirdi)

//* TOPSHIRIQLAR

// 1. push() - massiv oxiriga 3 ta element qo'shing
let fruits = ["apple", "banana"];
// Javobingizni shu yerga yozing

// 2. pop() - massivning oxirgi elementini o'chiring
let colors = ["red", "green", "blue", "yellow"];
// Javobingizni shu yerga yozing

// 3. unshift() - massiv boshiga 2 ta element qo'shing
let numbers = [5, 6, 7];
// Javobingizni shu yerga yozing

// 4. shift() - massivning birinchi elementini o'chiring
let animals = ["cat", "dog", "bird", "fish"];
// Javobingizni shu yerga yozing

// 5. splice() - massivning 2-indexidan boshlab 1 ta elementni o'chiring
let letters = ["a", "b", "c", "d", "e"];
// Javobingizni shu yerga yozing

// 6. push() va pop() - massivga element qo'shing va so'nggi elementni o'chiring
let scores = [10, 20, 30];
// Javobingizni shu yerga yozing (push va pop ketma-ket)

// 7. unshift() va shift() - massiv boshiga element qo'shing va birinchi elementni o'chiring
let names = ["Ali", "Vali"];
// Javobingizni shu yerga yozing (unshift va shift ketma-ket)

// 8. splice() - massivning 1-indexidan boshlab 2 ta elementni o'chiring
let nums = [100, 200, 300, 400, 500];
// Javobingizni shu yerga yozing

// 9. push() orqali massivga 4 ta element qo'shing
let emptyArray = [];
// Javobingizni shu yerga yozing

// 10. pop() orqali o'chirilgan elementni console.log() da ko'rsating
let cars = ["BMW", "Audi", "Toyota"];
// Javobingizni shu yerga yozing

// 11. unshift() orqali massiv boshiga 3 ta element qo'shing
let ages = [25, 30];
// Javobingizni shu yerga yozing

// 12. shift() orqali o'chirilgan elementni console.log() da ko'rsating
let countries = ["Uzbekistan", "USA", "UK"];
// Javobingizni shu yerga yozing

// 13. splice() - massivning 0-indexidan boshlab 2 ta element o'chiring va o'rniga yangi elementlar qo'shing
let months = ["Jan", "Feb", "Mar", "Apr"];
// Javobingizni shu yerga yozing

// 14. push() orqali massivga boshqa massivdagi elementlarni qo'shing (spread operator yoki loop bilan)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Javobingizni shu yerga yozing

// 15. pop() ni 3 marta ishlatib, massivni bo'shating
let items = ["book", "pen", "pencil", "eraser", "ruler"];
// Javobingizni shu yerga yozing

// 16. splice() - massivning oxiriga 2 ta element qo'shing (splice yordamida)
let numbers2 = [1, 2, 3];
// Javobingizni shu yerga yozing

// 17. push() va unshift() birgalikda ishlatib, massivga element qo'shing
let data = ["middle"];
// Javobingizni shu yerga yozing (boshiga va oxiriga element qo'shing)

// 18. splice() yordamida massivning o'rtasidan 1 ta elementni o'chiring
let digits = [0, 1, 2, 3, 4, 5];
// Javobingizni shu yerga yozing (o'rtadagi elementni topib o'chiring)

// 19. push() dan keyin pop() qilib, yangi massiv yarating
let oldArray = [10, 20, 30, 40];
// Javobingizni shu yerga yozing

// 20. shift() va unshift() ketma-ket ishlatib, massivning birinchi elementini almashtiring
let words = ["hello", "world", "javascript"];
// Javobingizni shu yerga yozing

// console.log(oquvchilar)
// console.log(oquvchilar.length)
// console.log(oquvchilar[0])
// console.log(oquvchilar[5])
