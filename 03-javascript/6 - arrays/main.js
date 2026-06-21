// ============================================
//^ 30 TA MASALA - main.js
//^ Mavzular: if/else, for, while, do/while, array va metodlari
// ============================================

// --------------------------------------------
// 1 - Massiv yaratish va chiqarish
// --------------------------------------------
// [1, 2, 3, 4, 5] massivini yarating va har bir elementni konsolga chiqaring
// let sonlar = [0,1,2,3,4]

// for (let i of sonlar) {
//     console.log(i)
// }

// for (let i = 0; i < sonlar.length; i++) {
//     console.log(i)
// }

// --------------------------------------------
// 2 - Oxiriga element qo'shish
// --------------------------------------------
// [10, 20, 30] massivining oxiriga 40 ni qo'shing va natijani chiqaring
// let arr = [10, 20, 30]
// let add = arr.push(40)
// console.log(arr)

// --------------------------------------------
// 3 - Oxirgi elementni o'chirish
// --------------------------------------------
// [5, 10, 15, 20] massivining oxirgi elementini o'chiring va natijani chiqaring
// let arr = [5, 10, 15, 20]
// arr.pop()
// console.log(arr)

// --------------------------------------------
// 4 - Indeks bo'yicha olish
// --------------------------------------------
// ["olma", "anor", "banan"] massivining 2-indeksidagi elementni chiqaring
// let mevalar = ["olma", "anor", "banan"]
// console.log(mevalar[2])

// --------------------------------------------
// 5 - Massiv uzunligini chiqarish
// --------------------------------------------
// [1, 2, 3, 4, 5, 6, 7] massivining uzunligini chiqaring
// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.length)

// --------------------------------------------
// 6 - Element borligini tekshirish
// --------------------------------------------
// [3, 7, 2, 9, 5] massivida 9 soni bor yoki yo'qligini tekshiring
// let arr = [3, 7, 2, 9, 5]
// for (let i of arr) {
//     if (i === 9) {
//         console.log("Ha, 9 soni bor!")
//     }
// }

// --------------------------------------------
// 7 - Birinchi elementni olish
// --------------------------------------------
// [100, 200, 300] massivining birinchi elementini oling
// let arr = [100, 200, 300]
// console.log(arr.shift())

// --------------------------------------------
// 8 - String'ni massivga aylantirish
// --------------------------------------------
// "JavaScript" so'zini harflarga ajratib massiv qilib chiqaring
let text = "JavaScript"
let arr = []
for (let i = 0; i < text.length; i++) {
    arr.push(text[i])
}
console.log(arr)

// --------------------------------------------
// 9 - Massivni string'ga aylantirish
// --------------------------------------------
// [1, 2, 3, 4] massivini "-" bilan ajratib string qilib chiqaring


// --------------------------------------------
// 10 - Massivni teskari qilish
// --------------------------------------------
// [1, 2, 3, 4, 5] massivini teskari tartibda chiqaring


// --------------------------------------------
// 11 - Faqat juft sonlar
// --------------------------------------------
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] massividan faqat juft sonlarni olib, yangi massiv qaytaring


// --------------------------------------------
// 12 - Kvadratlarga o'tkazish
// --------------------------------------------
// [2, 3, 4, 5] massivining har bir elementini kvadratga oshirib, yangi massiv qaytaring


// --------------------------------------------
// 13 - Yig'indini topish
// --------------------------------------------
// [10, 20, 30, 40, 50] massividagi barcha sonlarning yig'indisini toping


// --------------------------------------------
// 14 - Eng katta son
// --------------------------------------------
// [12, 45, 7, 89, 23, 56] massividagi eng katta sonni toping


// --------------------------------------------
// 15 - Takrorlanuvchilarni olib tashlash
// --------------------------------------------
// [1, 2, 2, 3, 4, 4, 5, 5, 5] massividan takrorlanuvchi elementlarni olib tashlang


// --------------------------------------------
// 16 - O'sish tartibida saralash
// --------------------------------------------
// [5, 2, 9, 1, 5, 6] massivini o'sish tartibida saralang


// --------------------------------------------
// 17 - Elementni almashtirish
// --------------------------------------------
// [10, 20, 30, 40, 50] massivida 2-indeksdagi elementni 99 ga almashtiring


// --------------------------------------------
// 18 - Indeksni topish
// --------------------------------------------
// ["a", "b", "c", "d", "e"] massivida "d" elementi nechanchi indeksda joylashganini toping


// --------------------------------------------
// 19 - Massivdan bo'lak olish
// --------------------------------------------
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] massividan 3-indeksdan 7-indeksgacha bo'lgan qismini oling


// --------------------------------------------
// 20 - Ikkita massivni birlashtirish
// --------------------------------------------
// [1, 2, 3] va [4, 5, 6] massivlarini birlashtirib, bitta massiv hosil qiling


// --------------------------------------------
// 21 - Massiv ichidagi massivni tekislash (faqat 1 daraja)
// --------------------------------------------
// [1, [2, 3], [4, 5], 6] massivini bir o'lchamli massivga aylantiring


// --------------------------------------------
// 22 - O'rtacha qiymat
// --------------------------------------------
// [15, 22, 35, 40, 50, 12] sonlarining o'rtacha qiymatini hisoblang


// --------------------------------------------
// 23 - Eng ko'p takrorlangan element
// --------------------------------------------
// [1, 3, 2, 3, 4, 1, 3, 2, 1, 1, 1] massivida eng ko'p takrorlangan elementni toping


// --------------------------------------------
// 24 - Palindrom massiv
// --------------------------------------------
// Berilgan massiv palindrom (teskari holatda ham bir xil) ekanligini tekshiring
// [1, 2, 3, 2, 1] -> true, [1, 2, 3, 4] -> false


// --------------------------------------------
// 25 - Yosh bo'yicha guruhlash
// --------------------------------------------
// const odamlar = [
//   {ism: "Ali", yosh: 25},
//   {ism: "Vali", yosh: 30},
//   {ism: "G'ani", yosh: 25},
//   {ism: "Hasan", yosh: 30},
//   {ism: "Husan", yosh: 20}
// ];
// Odamlarni yoshiga qarab guruhlang


// --------------------------------------------
// 26 - Massivlarni taqqoslash
// --------------------------------------------
// Ikkita massiv bir xil (elementlar va tartibi bo'yicha) ekanligini tekshiring
// [1,2,3] va [1,2,3] -> true, [1,2,3] va [3,2,1] -> false


// --------------------------------------------
// 27 - Oraliq massiv yasash
// --------------------------------------------
// Berilgan ikkita son oralig'ida massiv yarating
// (1, 5) -> [1, 2, 3, 4, 5], (3, 7) -> [3, 4, 5, 6, 7]


// --------------------------------------------
// 28 - Bo'laklarga ajratish (chunk)
// --------------------------------------------
// Massivni berilgan o'lchamdagi kichik massivlarga ajrating
// ([1,2,3,4,5,6,7,8], 3) -> [[1,2,3], [4,5,6], [7,8]]


// --------------------------------------------
// 29 - O'ngga siljitish (rotate)
// --------------------------------------------
// Massivni o'ngga berilgan qadamga siljiting
// ([1,2,3,4,5], 2) -> [4,5,1,2,3]


// --------------------------------------------
// 30 - Barcha kombinatsiyalar (subarrays)
// --------------------------------------------
// Berilgan massivning barcha mumkin bo'lgan ketma-ket kichik massivlarini qaytaring
// [1, 2, 3] -> [[1], [2], [3], [1,2], [2,3], [1,2,3]]
// ============================================