//* ===============================
//*      JS IF / ELSE MAVZUSI
//* ===============================

//! 1. Voyaga yetgan yoki yetmaganligini aniqlash
//? Foydalanuvchi yosh kiritsin
//^ Agar yosh 18 dan katta yoki teng bo‘lsa
//^ "Siz voyaga yetgansiz" chiqsin
//^ Aks holda "Siz voyaga yetmagansiz" chiqsin

// let yosh = 12;

// if (yosh >= 18) {
//   console.log("Siz voyaga yetgansiz");
// } else {
//   console.log("Siz voyaga yetmagansiz");
// }

//! 2. Son juft yoki toqligini aniqlash
//? Foydalanuvchi son kiritsin
//^ Agar son juft bo‘lsa
//^ "Siz juft son kiritdingiz" chiqsin
//^ Aks holda "Siz toq son kiritdingiz" chiqsin

// let son = 132;

// if (son % 2 === 0) {
//   console.log("Siz juft son kiritdingiz");
// } else {
//   console.log("Siz toq son kiritdingiz");
// }

//! 3. O‘quvchi maktabni tugatganmi?
//? Foydalanuvchi sinf kiritsin
//^ Agar sinf 11 dan katta bo‘lsa
//^ "Siz maktabni tugatgansiz" chiqsin
//^ Aks holda "Siz hali o‘quvchisiz" chiqsin

// let sinf = 3;

// if (sinf > 11) {
//   console.log("Siz maktabni tugatgansiz");
// } else {
//   console.log("Siz hali o‘quvchisiz");
// }

//! 4. Havo haroratini aniqlash
//? Foydalanuvchi harorat kiritsin
//^ Agar harorat 30 yoki undan katta bo‘lsa
//^ "Bugun havo juda issiq" chiqsin
//^ Aks holda "Bugun havo yaxshi" chiqsin

// let daraja = 40;

// if (daraja >= 30) {
//   console.log("Bugun havo juda issiq");
// } else {
//   console.log("Bugun havo yaxshi");
// }

//! 5. Musbat, manfiy yoki nol son
//? Foydalanuvchi son kiritsin
//^ Agar son musbat bo‘lsa
//^ "Siz musbat son kiritdingiz"
//^ Agar 0 bo‘lsa
//^ "Siz nol sonini kiritdingiz"
//^ Aks holda
//^ "Siz manfiy son kiritdingiz"

// let son = -1;

// if (son > 0) {
//   console.log("Siz musbat son kiritdingiz");
// } else if (son === 0) {
//   console.log("Siz nol sonini kiritdingiz");
// } else {
//   console.log("Siz manfiy son kiritdingiz");
// }

//! 6. Parolni tekshirish
//? Foydalanuvchi parol kiritsin
//^ Agar parol "qweqwe" bo‘lsa
//^ "Tizim ochildi" chiqsin
//^ Aks holda "Parol xato" chiqsin

// let parol = "qweqwe";

// if (parol === "qweqwe") {
//   console.log("Tizim ochildi");
// } else {
//   console.log("Parol xato");
// }

//* ===============================
//*        JS AMALIYOTLAR
//* ===============================

//TODO: 7. Bahoni aniqlash
//? Ball kiriting
//^ Agar ball 70 yoki undan katta bo‘lsa
//^ "Siz imtihondan o'tdingiz"
//^ Aks holda "Siz yiqildingiz"
// alert("Diqqat savolga to'g'ri javob bering!")
// let ball = prompt("Ball kiriting:")
// if (ball < 70) {
//     console.log("Siz imtihondan yiqildingiz")
// } else {
//     console.log("Siz imtihondan o'tdingiz")
// }

//TODO: 8. Son 100 dan katta yoki kichik
//? Son kiriting
//^ Agar son 100 dan katta bo‘lsa
//^ "Katta son"
//^ Aks holda "Kichik son"

// let son = prompt("Son kiriting:")
// if (son > 100) {
//     console.log("Katta son")
// } else {
//     console.log("Kichik son")
// }

//TODO: 9. Login tekshirish
//? Login kiriting
//^ Agar login "admin" bo‘lsa
//^ "Xush kelibsiz admin"
//^ Aks holda "Login noto'g'ri"

// let login = prompt("Loginingizni kiriting:")
// if (login === "admin") {
//     console.log("Xush kelibsiz admin")
// } else {
//     console.log("Login noto'g'ri")
// }

//TODO: 10. Ikki sondan kattasini topish
//? Ikkita son berilgan
//^ Kattasini chiqaring
//^ Agar teng bo‘lsa
//^ "Sonlar teng"

// alert("Ikkita son kiriting!")
// let son1 = prompt("Birinchi sonni kiriting:")
// let son2 = prompt("Ikkinchi sonni kiriting:")

// if (son1 > son2) {
//     console.log("Siz kiritgan birinchi soningiz katta!")
// } else if (son1 < son2) {
//     console.log("Siz kiritgan ikkinchi soningiz katta!")
// } else {
//     console.log("Siz kiritgan ikkita son bir-birlariga teng!")
// }

//  true = 1
//  false = 0
//  && - (va) kopaytirish
//  || - (yoki) qoshish
// let a = 2
// let b = 3
// if (a == 2 && a == b) {
//     console.log("a soni 2ga teng va a va bbir biriga teng")
// }

//TODO: 11. Harorat tekshirish
//? Harorat kiriting
//^ 0 dan kichik → "Havo juda sovuq"
//^ 0–20 oralig‘i → "Havo salqin"
//^ 20 dan katta → "Havo issiq"

// let harorat = prompt("Haroratni kiriting:")
// if (harorat < 0) {
//     console.log("Juda sovuq")
// } else if (harorat >= 0 && harorat <= 20) {
//     console.log("Havo salqin")
// } else {
//     console.log("Havo issiq")
// }

//TODO: 12. Pul yetadimi?
//? Pul miqdorini kiriting
//^ Agar pul 50000 yoki undan ko‘p bo‘lsa
//^ "Sotib olishingiz mumkin"
//^ Aks holda "Pul yetarli emas"

// let pul = +prompt("Pul miqdorini kiriting:");

// if (pul >= 50000) {
//   console.log("Sotib olishingiz mumkin");
// } else {
//   console.log("Pul yetarli emas");
// }

//TODO: 13. Son 3 va 5 ga bo‘linadimi?
//? Son kiriting
//^ Agar son 3 ga ham,
//^ 5 ga ham bo‘linsa
//^ "3 va 5 ga bo‘linadi"
//^ Aks holda "Bo‘linmaydi"

// let son = +prompt("Son kiriting:");

// if (son % 3 === 0 && son % 5 === 0) {
//   console.log("3 va 5 ga bo‘linadi");
// } else {
//   console.log("Bo‘linmaydi");
// }

//TODO: 14. Yosh kategoriyasi
//? Yosh kiriting
//^ 0–6 → "Bola"
//^ 7–17 → "O‘quvchi"
//^ 18+ → "Katta odam"

// let yosh = +prompt("Yosh kiriting:");

// if (yosh >= 0 && yosh <= 6) {
//   console.log("Bola");
// } else if (yosh >= 7 && yosh <= 17) {
//   console.log("O‘quvchi");
// } else if (yosh >= 18) {
//   console.log("Katta odam");
// }

//TODO: 15. Login + parol tekshirish
//? Login va parol kiriting
//^ login === "admin"
//^ parol === "12345"
//^ To‘g‘ri bo‘lsa
//^ "Tizimga xush kelibsiz"
//^ Aks holda
//^ "Login yoki parol xato"

let login = prompt("Login kiriting:");
let parol = prompt("Parol kiriting:");

if (login === "admin" && parol === "12345") {
  console.log("Tizimga xush kelibsiz");
} else {
  console.log("Login yoki parol xato");
}

//TODO: 16. 3 ta sondan kattasini topish
//? 3 ta son berilgan
//^ Eng katta sonni chiqaring

// let a = 15;
// let b = 80;
// let c = 45;

//^ Natija: 80

//* ===============================
//*   QO‘SHIMCHA 15 TA IF/ELSE MASALA
//* ===============================

//TODO: 17. Son musbat va juftmi?
//? Son kiriting
//^ Agar son musbat va juft bo‘lsa
//^ "Musbat juft son"
//^ Aks holda
//^ "Mos kelmadi"

// let son = 12
// if (son > 0 && son % 2 === 0) {
//     console.log("Musbat va juft son")
// } else {
//     console.log("Mos kelmadi")
// }

//TODO: 18. Imtiyozli chegirma
//? Xarid summasini kiriting
//^ Agar summa 100000 dan katta bo‘lsa
//^ "10% chegirma mavjud"
//^ Aks holda
//^ "Chegirma yo‘q"

// let summa = 100000
// if (summa > 100000) {
//     console.log("Chegirma mavjud")
// } else {
//     console.log("Chegirma mavjud emas")
// }

//TODO: 19. Hafta kuni dam olishmi?
//? Hafta kuni kiriting
//^ Agar "shanba" yoki "yakshanba" bo‘lsa
//^ "Bugun dam olish kuni"
//^ Aks holda
//^ "Bugun ish kuni"

//TODO: 20. Telefon quvvati
//? Batareya foizini kiriting
//^ 20 dan kichik → "Telefonni quvvatlang"
//^ 20 yoki katta → "Quvvat yetarli"

//TODO: 21. Son 10 va 50 oralig‘idami?
//? Son kiriting
//^ Agar son 10 va 50 oralig‘ida bo‘lsa
//^ "Oraliqda"
//^ Aks holda
//^ "Oraliqda emas"

//TODO: 22. Haydovchilik guvohnomasi
//? Yosh kiriting
//^ Agar yosh 18 yoki katta bo‘lsa
//^ "Mashina haydashingiz mumkin"
//^ Aks holda
//^ "Yoshingiz yetmaydi"

//TODO: 23. Email tekshirish
//? Email kiriting
//^ Agar email ichida "@" belgisi bo‘lsa
//^ "Email to‘g‘ri"
//^ Aks holda
//^ "Email noto‘g‘ri"

//TODO: 24. Son 2 xonali yoki yo‘q
//? Son kiriting
//^ Agar son 10–99 oralig‘ida bo‘lsa
//^ "Bu 2 xonali son"
//^ Aks holda
//^ "Bu 2 xonali emas"

//TODO: 25. Foydalanuvchi jinsi
//? Jins kiriting ("erkak" yoki "ayol")
//^ "erkak" → "Xush kelibsiz janob"
//^ "ayol" → "Xush kelibsiz xonim"
//^ Aks holda → "Noto‘g‘ri ma’lumot"

//TODO: 26. Son kvadratini tekshirish
//? Son kiriting
//^ Agar sonning kvadrati 100 dan katta bo‘lsa
//^ "Kvadrat katta"
//^ Aks holda
//^ "Kvadrat kichik"

//TODO: 27. Trafik svetofori
//? Rang kiriting
//^ "qizil" → "To‘xtang"
//^ "sariq" → "Tayyorlaning"
//^ "yashil" → "Yuring"
//^ Aks holda → "Noto‘g‘ri rang"

//TODO: 28. Talaba stipendiyasi
//? Ball kiriting
//^ 90 yoki katta → "Stipendiya oldingiz"
//^ Aks holda → "Stipendiya yo‘q"

//TODO: 29. Son 7 ga bo‘linadimi?
//? Son kiriting
//^ Agar son 7 ga qoldiqsiz bo‘linsa
//^ "7 ga bo‘linadi"
//^ Aks holda
//^ "7 ga bo‘linmaydi"

//TODO: 30. Parol uzunligi
//? Parol kiriting
//^ Agar parol uzunligi 8 ta belgidan katta yoki teng bo‘lsa
//^ "Kuchli parol"
//^ Aks holda
//^ "Parol juda qisqa"

//TODO: 31. Internet tezligi
//? Mbps kiriting
//^ 100 yoki katta → "Internet juda tez"
//^ 50–99 → "Internet yaxshi"
//^ 50 dan kichik → "Internet sekin"

//& ============================================================
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Dushanba");
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//   default:
//     console.log("Noto'g'ri kun");
// }

// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     break
//     let yosh = 18
//     if (yosh > 18) {
//         console.log("Katta")
//     } else {
//         console.log("Kichik ekansiz")
//     }

//   case "banana":
//     console.log("Bu meva");
//     break;
//   case "carrot":
//     console.log("Bu sabzi");
//     break;
// }

// console.log("Tashqi hudud")
// Kichik ekansiz
// Bu meva

// Tashqi hudud

//^ 1. Raqam kiritilgan (1-7) hafta kunining nomini chiqaring.
// let kun = 3;

//^ 2. Fasl aniqlash: Oy raqamiga qarab faslni chiqaring (1-12).
let oy = 6;
switch (true) {
  case oy >= 3 && oy <= 5:
    console.log("Bahor");
    break;
  case oy >= 6 && oy <= 8:
    console.log("Yoz");
    break;
  case oy >= 9 && oy <= 11:
    console.log("Kuz");
    break;
  case oy == 12 || (oy >= 1 && oy <= 2):
    console.log("Qish");
    break;
  default:
    console.log("Siz kiritgan raqamga mos oy topilmadi!");
}
// if (oy >= 3 && oy <= 5) {
//     console.log("Bahor")
// } else if(oy >= 6 && oy <= 8) {
//     console.log("Yoz")
// } else if (oy >= 9 && oy <= 11) {
//     console.log("Kuz")
// } else if (oy == 12 || (oy >= 1 && oy <= 2)) {
//     console.log("Qish")
// } else {
//     console.log("Siz kiritgan raqamga mos oy topilmadi!")
// }

//! || && > <

//^ 3. Foydalanuvchi kiritgan til boyicha natija chiqarsin.
// let til = "eng"; //Hello
// til = "uzb"; // Salom
// til = "ru"; // Privet
// til = "hind"; // Namaste
// til = "korean"; // Annyonghaseyo
