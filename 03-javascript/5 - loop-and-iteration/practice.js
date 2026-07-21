// 1 dan 10 gacha bo‘lgan sonlarni chiqaring.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1 dan 20 gacha faqat juft sonlarni chiqaring (if va for yordamida).
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 1 dan 15 gacha faqat toq sonlarni chiqaring.
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// 1 dan 50 gacha bo‘lgan sonlar ichida 5 ga bo‘linadiganlarini chiqaring.

// let n = 7; o‘zgaruvchisi berilgan. 1 dan n gacha bo‘lgan sonlar
// yig‘indisini hisoblang.
// let n = parseInt(prompt("Son kiriting: "))
// let yigindi = 0

// for (let i = 1; i <= n; i++) {
//     yigindi += i
// }

// console.log(yigindi)

// let son = 10; berilgan. 1 dan son gacha bo‘lgan sonlarning
// ko‘paytmasini toping (1*2*3*...*son).

// let a = 15; soni berilgan. Agar a 3 ga bo‘linsa, "3 ga bo‘linadi"
// deb chiqaring, aks holda "bo‘linmaydi" deb chiqaring. Buni 1 dan
// 20 gacha bo‘lgan barcha sonlar uchun bajarib chiqing.

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} soni 3ga qoldiqsiz bo'linadi!`)
//     } else {
//         console.log(`${i} soni 3ga qoldiqsiz bo'linmaydi!`)
//     }
// }
// 1 dan 30 gacha bo‘lgan sonlar ichida 7 dan kichik bo‘lganlarini chiqaring.

// let chegara = 12; o‘zgaruvchisi berilgan. 1 dan chegara gacha bo‘lgan
// sonlarni chiqaring, lekin agar son 5 bo‘lsa, "besh" deb chiqaring (if yordamida).

// 1 dan 100 gacha bo‘lgan sonlarni chiqaring, lekin son 50 dan katta
// bo‘lsa, faqat "katta" deb chiqaring.

//* ===========================================================================================================

// 1 dan 100 gacha bo‘lgan sonlar ichida 3 ga ham, 5 ga ham
// bo‘linadiganlarini chiqaring.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }
// }
// let n = 23; berilgan. Shu son tub yoki murakkab ekanligini
// aniqlang (for va if yordamida).
// let n = 23
// let tub = true

// if (n < 2) {
//     tub = false
// } else {
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) {
//             tub = false
//             break
//         }
//     }
// }

// console.log(`${n} ${tub ? "tub" : "murakkab"} son`)

// 1 dan 30 gacha bo‘lgan sonlar ichida nechta juft son borligini
// hisoblang va natijani chiqaring.
// let juftSon = 0
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 === 0) {
//         juftSon += 1
//     }
// }
// console.log(juftSon)

// 1 dan 50 gacha bo‘lgan sonlar ichida nechta toq son borligini
// hisoblang.

// let a = 8; va let b = 12; berilgan. Shu ikkala songa bo‘linadigan
// eng kichik sonni toping (for yordamida).

// let son = 123; (3 xonali son) berilgan. Raqamlari yig‘indisini
// toping. Maslahat: sonni qismlarga bo‘lish uchun % va / dan foydalaning.
// let son = 123;
// let son1 = parseInt(son % 10);
// let son2 = parseInt(son / 100);
// let son3 = parseInt(son / 10 % 10)
// console.log(son1 + son2 + son3);

// 1 dan 40 gacha bo‘lgan sonlar ichida raqamlari yig‘indisi 5 ga
// teng bo‘lgan sonlarni chiqaring (masalan, 14, 23, 32).

// let a = 10; va let b = 25; berilgan. Shu ikkita son orasidagi
// barcha sonlarni chiqaring va ularning o‘rtacha qiymatini hisoblang.

// 1 dan 50 gacha bo‘lgan sonlar ichida 5 ga karrali bo‘lganlarini
// chiqaring, lekin agar son 25 bo‘lsa, "25 - maxsus" deb chiqaring.

// let n = 6; berilgan. 1 dan n gacha bo‘lgan sonlarning faktorialini
// hisoblang (faqat for va if yordamida).

//* ======================================================================================================

// 1 dan 200 gacha bo‘lgan sonlar ichida tub sonlarni chiqaring
// (faqat for va if yordamida, massiv ishlatilmaydi).

// let son = 153; berilgan. Bu son Armstrong soni ekanligini
// tekshiring (3 xonali son uchun: raqamlari kubining yig‘indisi
// o‘ziga teng bo‘lsa, masalan 1³+5³+3³=153).

// let son = Number(prompt("Son kiriting:"));

// if (son < 100 || son > 999) {
//   console.log("Iltimos, 3 xonali son kiriting.");
// } else {
//   let yuzlik = Math.floor(son / 100);
//   let onlik = Math.floor((son % 100) / 10);
//   let birlik = son % 10;

//   if (yuzlik ** 3 + onlik ** 3 + birlik ** 3 === son) {
//     console.log("Armstrong son");
//   } else {
//     console.log("Armstrong son emas");
//   }
// }

// 1 dan 100 gacha bo‘lgan barcha sonlarni chiqaring, lekin:
// 3 ga bo‘linadiganlar o‘rniga "Fizz"
// 5 ga bo‘linadiganlar o‘rniga "Buzz"
// 3 va 5 ga bo‘linadiganlar o‘rniga "FizzBuzz" deb chiqaring.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let a = 1; va let b = 100; orasidagi barcha mukammal sonlarni
// toping (mukammal son – o‘zidan boshqa bo‘luvchilari yig‘indisi o‘ziga teng, masalan 6 = 1+2+3).

// 1 dan 500 gacha bo‘lgan sonlar ichida raqamlari yig‘indisi 10 ga
// teng bo‘lgan barcha sonlarni chiqaring (faqat for, if, /, % yordamida).
