// ==========================================
// ODDIY SAVOLLAR (1-30)
// ==========================================

// 1. 1 dan 10 gacha bo'lgan barcha sonlarni for yordamida chiqaring
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// 2. 1 dan 20 gacha bo'lgan juft sonlarni while yordamida chiqaring
// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// 3. Foydalanuvchi 0 raqamini kiritguncha sonlarni qabul qilishni davom ettiring (do/while)
// let son = 0
// do {
//     son = parseInt(prompt("Son kiriting: "))

// } while(son !== 0)
// console.log("Siz 0 kiritdingiz!")
// 4. Berilgan massivning barcha elementlarini for yordamida chiqaring
// let arr = ["Shohruz", 12, "46", false, true, undefined, Boolean, Number, String]
// for (let i of arr) {
//     console.log(i)
// }
// 5. Berilgan massivdagi musbat sonlar nechta ekanligini hisoblang (for)
// let arr = [-1, 1, 3, -12, 6, 4, -22, 6]
// let musbat = []
// for (let i of arr) {
//     if (i > 0) {
//         musbat.push(i)
//     }
// }
// console.log(musbat.length)
// 6. 1 dan 100 gacha bo'lgan barcha sonlarning yig'indisini for yordamida toping
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum)
// 7. Foydalanuvchi kiritgan sonning faktorialini for yordamida hisoblang
// let son = parseInt(prompt("Son kiriting: "));
// let kopaymasi = 1;
// for (let i = 1; i <= son; i++) {
//   kopaymasi *= i;
// }
// console.log(kopaymasi);
// [1,2,3,4] - array / massiv
// 8. Berilgan massivning eng katta elementini for yordamida toping
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,114,3,23,4,324,32,4,32,4,23,42,4,2,4,324]
// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i])
// }
for (let i of arr) {
  
}
// 9. Berilgan massivning eng kichik elementini for yordamida toping
// 10. Foydalanuvchi kiritgan sonni teskari tartibda while yordamida chiqaring

// 11. 1 dan 50 gacha bo'lgan toq sonlarning yig'indisini for yordamida toping
let arr = []
// 12. Berilgan massiv elementlarini teskari tartibda for yordamida chiqaring
// 13. Foydalanuvchi kiritgan sonning raqamlari yig'indisini while yordamida toping
let son = parseInt(prompt("son kiriting:"))

// 14. Berilgan massivda nechta manfiy son borligini for yordamida hisoblang
// 15. 1 dan 15 gacha bo'lgan sonlarning kvadratini for yordamida chiqaring
// 16. Foydalanuvchi -1 raqamini kiritguncha sonlarni qabul qilishni davom ettiring (do/while)
// 17. Berilgan massivning 2-indeksidagi elementni if yordamida chiqaring
// 18. Foydalanuvchi kiritgan son 3 ga bo'linishini if yordamida tekshiring
// 19. Berilgan massivning birinchi va oxirgi elementlarini if yordamida almashtiring
// 20. 1 dan 30 gacha bo'lgan 3 ga karrali sonlarni for yordamida chiqaring
// 21. Berilgan massiv elementlarining o'rtacha qiymatini for yordamida toping
// 22. Foydalanuvchi kiritgan sonning teskari ko'rinishini while yordamida chiqaring
// 23. Berilgan massivdagi barcha musbat sonlarning yig'indisini for yordamida toping
// 24. 10 dan 1 gacha bo'lgan sonlarni teskari tartibda for yordamida chiqaring
// 25. Berilgan massivda 5 raqami bor yoki yo'qligini for va if yordamida tekshiring
// 26. 1 dan 20 gacha bo'lgan sonlarning kubini while yordamida chiqaring
// 27. Foydalanuvchi kiritgan sonning juft yoki toq ekanligini if yordamida aniqlang
// 28. Berilgan massivning nechta elementdan iborat ekanligini for yordamida chiqaring
// 29. 1 dan 12 gacha bo'lgan oylarni nomlari bilan for yordamida chiqaring
// 30. Foydalanuvchi kiritgan 3 ta sondan eng kattasini if yordamida toping

// ==========================================
// O'RTA SAVOLLAR (31-60)
// ==========================================

// 31. Fibonachchi ketma-ketligining n-elementini for yordamida toping
// 32. Berilgan massivda nechta element takrorlanganligini for va if yordamida toping
// 33. Foydalanuvchi kiritgan sonning tub yoki murakkab ekanligini for va if yordamida tekshiring
// 34. Ikkita berilgan massivning umumiy elementlarini for va if yordamida toping
// 35. Berilgan massivni o'sish tartibida for va if yordamida saralang
// 36. Foydalanuvchi kiritgan sonning 2-darajasini while yordamida hisoblang
// 37. Berilgan massivning o'rtadagi elementini if yordamida toping
// 38. 1 dan 100 gacha bo'lgan barcha tub sonlarni for va if yordamida chiqaring
// 39. Berilgan massivdagi juft va toq sonlarni alohida massivlarga for va if yordamida ajrating
// 40. Foydalanuvchi kiritgan matndagi bo'shliqlar sonini for va if yordamida hisoblang
// 41. Berilgan massiv elementlarining ko'paytmasini for yordamida toping
// 42. Foydalanuvchi kiritgan sonni ikkilik sanoq sistemasiga while yordamida o'tkazing
// 43. Berilgan massivda eng ko'p uchraydigan elementni for va if yordamida toping
// 44. 1 dan foydalanuvchi kiritgan N gacha bo'lgan sonlar yig'indisini while yordamida toping
// 45. Berilgan massivdagi barcha manfiy sonlarni musbatga for va if yordamida aylantiring
// 46. Foydalanuvchi kiritgan sonning palindrom ekanligini while va if yordamida tekshiring
// 47. Berilgan massiv elementlarini o'ngga 1 pozitsiyaga for yordamida siljiting
// 48. Foydalanuvchi kiritgan ikkita sonning EKUBini while va if yordamida toping
// 49. Berilgan massivning eng kichik va eng katta elementi orasidagi farqni for yordamida toping
// 50. Foydalanuvchi kiritgan matndagi unlilar (a, e, i, o, u) sonini for va if yordamida hisoblang
// 51. 1 dan 50 gacha bo'lgan 7 ga bo'linadigan sonlarni for va if yordamida chiqaring
// 52. Berilgan massivdagi o'rtacha qiymatdan katta bo'lgan elementlarni for va if yordamida chiqaring
// 53. Foydalanuvchi kiritgan sonning raqamlarini teskari tartibda while yordamida joylashtiring
// 54. Berilgan massivni kamayish tartibida for va if yordamida saralang
// 55. Ikkita berilgan massivni birlashtirib bitta massiv hosil qiling (for)
// 56. Foydalanuvchi kiritgan sonning nechta bo'luvchisi borligini for va if yordamida toping
// 57. Berilgan massivning toq indekslaridagi elementlarni yig'indisini for va if yordamida toping
// 58. 1 dan foydalanuvchi kiritgan N gacha bo'lgan juft sonlar ko'paytmasini for yordamida toping
// 59. Berilgan massiv elementlarini 2 ga ko'paytirib yangi massiv hosil qiling (for)
// 60. Foydalanuvchi kiritgan ikki son orasidagi barcha sonlarni for yordamida chiqaring

// ==========================================
// QIYIN SAVOLLAR (61-90)
// ==========================================

// 61. Berilgan massivdagi o'suvchi eng uzun ketma-ketlikni for va if yordamida toping
// 62. Foydalanuvchi kiritgan sonni faktorialini rekursiv usulda while va if yordamida hisoblang
// 63. Berilgan massivdagi barcha mumkin bo'lgan juftliklarni ichma-ich for yordamida chiqaring
// 64. Foydalanuvchi kiritgan matndagi eng uzun so'zni for va if yordamida toping
// 65. Berilgan ikki o'lchovli massivni spiral shaklida for, while va if yordamida chiqaring
// 66. Foydalanuvchi kiritgan sonning ildizini while va if yordamida toping
// 67. Berilgan massivdagi faqat bir marta uchraydigan elementlarni for va if yordamida toping
// 68. Foydalanuvchi kiritgan ikkita sonning EKUKini while va for yordamida toping
// 69. Berilgan massiv elementlarini o'sish tartibida indekslari bilan birga for va if yordamida chiqaring
// 70. Foydalanuvchi kiritgan sondan kichik bo'lgan barcha tub sonlarni for va if yordamida chiqaring
// 71. Berilgan massivning barcha elementlari yig'indisi 0 ga teng yoki teng emasligini for va if yordamida tekshiring
// 72. Foydalanuvchi kiritgan sonning raqamlarini o'sish tartibida while va for yordamida joylashtiring
// 73. Berilgan massivdagi musbat elementlarni o'ngga, manfiy elementlarni chapga for va if yordamida joylashtiring
// 74. 1 dan foydalanuvchi kiritgan N gacha bo'lgan sonlar ichida nechta tub son borligini for va if yordamida hisoblang
// 75. Berilgan massiv elementlarining o'zaro ayirmalarini for yordamida hisoblang
// 76. Foydalanuvchi kiritgan matndagi har bir harfning necha martadan takrorlanganligini for va if yordamida toping
// 77. Berilgan massivdagi barcha elementlarni 0 ga for yordamida tenglashtiring
// 78. Foydalanuvchi kiritgan sonning barcha bo'luvchilarini for va if yordamida chiqaring
// 79. Berilgan massivning eng uzun o'suvchi qismini for va if yordamida toping
// 80. Berilgan ikki o'lchovli massivning barcha elementlarini ichma-ich for yordamida chiqaring
// 81. Foydalanuvchi kiritgan sonni [0, 10], [10, 20], [20, 30] oraliqlaridan qaysi biriga tegishli ekanligini if yordamida aniqlang
// 82. Berilgan massiv elementlarini teskarisiga o'girib yangi massiv hosil qiling (for)
// 83. Ikkita berilgan massivning simmetrik farqini (faqat birida bor elementlar) for va if yordamida toping
// 84. Berilgan massivning juft indekslaridagi elementlar yig'indisini for va if yordamida toping
// 85. 1 dan 100 gacha bo'lgan sonlar ichida 3 ga ham 5 ga ham bo'linadigan sonlarni for va if yordamida chiqaring
// 86. Berilgan massivdagi o'suvchi va kamayuvchi qismlarni for va if yordamida alohida chiqaring
// 87. Foydalanuvchi kiritgan matndan faqat raqamlarni for va if yordamida ajratib oling
// 88. Berilgan massiv elementlarining o'rtacha qiymatidan kichik bo'lgan elementlarni for va if yordamida chiqaring
// 89. Berilgan ikki o'lchovli massivning bosh va yordamchi dioganallarini ichma-ich for yordamida chiqaring
// 90. Foydalanuvchi kiritgan sonning nechta raqami borligini while yordamida toping

// ==========================================
// MURAKKAB SAVOLLAR (91-120)
// ==========================================

// 91. Berilgan massivdagi barcha elementlarning bir-biri bilan ko'paytmasini (kombinatsiyalarini) for yordamida toping
// 92. Berilgan massivning barcha mumkin bo'lgan subsetlarini (qism to'plamlarini) for, while va if yordamida yarating
// 93. Berilgan massivning har bir elementini o'ng tomonidagi undan katta elementlar bilan for va if yordamida almashtiring
// 94. Foydalanuvchi kiritgan sonni rim raqamlariga while va if yordamida o'tkazing
// 95. Berilgan massivda eng ko'p takrorlangan 3 ta elementni for va if yordamida toping
// 96. Ikkita berilgan massivning kesishmasini (umumiy elementlarini) va birlashmasini (barcha elementlarini) for va if yordamida toping
// 97. Berilgan massivni rekursiv usulda (o'z-o'zini chaqirib) while va if yordamida teskari aylantiring
// 98. Foydalanuvchi kiritgan matndagi barcha so'zlarni har birini alohida teskari qilib for va if yordamida chiqaring
// 99. Berilgan massivdagi barcha mumkin bo'lgan kombinatsiyalarni (elementlar guruhlarini) ichma-ich for yordamida chiqaring
// 100. Foydalanuvchi kiritgan sonning 1 dan o'zigacha bo'lgan barcha bo'luvchilarini for va if yordamida toping
// 101. Berilgan massiv elementlari yordamida ko'paytirish jadvalini ichma-ich for yordamida chiqaring
// 102. Foydalanuvchi kiritgan ikkita son orasidagi barcha tub sonlarni for va if yordamida toping
// 103. Berilgan massivda eng ko'p uchraydigan 2 ta elementni (birinchi va ikkinchi o'rindagilarni) for va if yordamida toping
// 104. Foydalanuvchi kiritgan matn ichidagi eng uzun palindrom (o'qilishi ham o'ngdan, ham chapdan bir xil bo'lgan so'z)ni for, if va while yordamida toping
// 105. Berilgan massiv elementlarini qo'shni juftliklarga (1-2, 3-4, 5-6) for yordamida ajrating
// 106. Berilgan ikki o'lchovli massivni (matritsani) ko'chirib o'tkazing (satrlarni ustunlar bilan almashtiring) ichma-ich for yordamida
// 107. Foydalanuvchi kiritgan sonni 2 lik, 8 lik va 16 lik sanoq sistemalarida while yordamida ifodalang
// 108. Berilgan massivdagi barcha manfiy elementlarni massivning oxiriga for va if yordamida ko'chiring
// 109. Berilgan massivning medianasini (o'rtadagi qiymatini) for va if yordamida toping
// 110. Berilgan massivdagi eng uzun o'sish oralig'ini (ketma-ket o'suvchi qismni) for va if yordamida toping
// 111. Foydalanuvchi kiritgan sonni so'zlar bilan (masalan: 123 -> "bir yuz yigirma uch") while va if yordamida ifodalang
// 112. Berilgan massivning barcha elementlari yig'indisini rekursiv usulda (o'z-o'zini chaqirib) while va if yordamida toping
// 113. Berilgan ikki o'lchovli massivning barcha elementlari yig'indisini ichma-ich for yordamida toping
// 114. Berilgan massivdagi barcha sonlarni o'zaro '+' belgisi bilan for yordamida birlashtirib bitta matn qilib chiqaring
// 115. Foydalanuvchi kiritgan matndagi takrorlangan so'zlarni for va if yordamida toping
// 116. Berilgan massiv elementlarini qo'shni elementlar bilan ayirmasini (1-2, 2-3, 3-4) for yordamida hisoblang
// 117. Foydalanuvchi kiritgan sonni uning raqamlari bilan (masalan: 456 -> "4,5,6") while yordamida ifodalang
// 118. Berilgan massivning har bir elementini uning indeksiga ko'paytirib yangi massiv hosil qiling (for)
// 119. Berilgan ikki o'lchovli massivning har bir satridagi elementlar yig'indisini ichma-ich for yordamida hisoblang
// 120. Berilgan massivdagi barcha elementlarni o'rtacha qiymatga nisbatan (katta, kichik yoki teng) for va if yordamida tekshiring
