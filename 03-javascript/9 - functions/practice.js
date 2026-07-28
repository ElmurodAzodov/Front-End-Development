// ==========================================================
// JAVASCRIPT FUNKSIYALAR MAVZUSIDA 100 TA AMALIY MASALA
// Daraja taqBerilgan son musbat, manfiy yoki nol eksimoti: 35 ta oson, 40 ta o'rtacha, 25 ta qiyin
// Mavzular: if-else, for, while, do-while, string, array, object
// Har bir masala funksiya ko'rinishida yechilishi kerak
// ==========================================================

// ==================== OSON DARAJA (1 - 35) ====================

// 1-masala: [if-else] Ikkita sonni parametr sifatida qabul qilib,
// ulardan kattasini qaytaruvchi funksiya yozing.
function masala1(a, b) {
  if (a > b) {
    return "a soni katta";
  } else {
    return "b soni katta";
  }
}
// console.log(masala1(2, 3))

// 2-masala: [if-else] Kiritilgan son musbat, manfiy yoki nol ekanligini aniqlovchi funksiya yozing.
// Natija: "musbat", "manfiy" yoki "nol".
function masala2(son) {}

// 3-masala: [if-else] Berilgan yosh bo'yicha kishi "bolalik" (0-12),
// "o'smirlik" (13-17), "kattalar" (18dan katta) toifasiga tegishli ekanligini aniqlang.
function masala3(yosh) {}

// 4-masala: [for] 1 dan berilgan songacha bo'lgan barcha sonlar yig'indisini
// hisoblovchi funksiya yozing.
function masala4(son) {
  let S = 0;
  for (let i = 1; i <= son; i++) {
    S += i;
  }
  return S;
}
// console.log(masala4(100))

// 5-masala: [for] Berilgan sonning faktorialini hisoblovchi funksiya yozing.
function masala5(son) {}

// 6-masala: [for] 1 dan 100 gacha bo'lgan juft sonlarni massivga
// yig'ib qaytaruvchi funksiya yozing.
function masala6() {}

// 7-masala: [while] Berilgan sonning raqamlar yig'indisini
// while sikli yordamida hisoblang. Masalan: 123 -> 1+2+3 = 6
function masala7(son) {}

// 8-masala: [while] Berilgan sondan boshlab 1 gacha teskari
// hisoblovchi (countdown) funksiya yozing, natijalarni massivga yozib qaytaring.
function masala8(son) {}

// 9-masala: [do-while] Foydalanuvchidan kiritilgan son (parametr) manfiy
// bo'lmaguncha uni kamaytirib borishni simulyatsiya qiluvchi funksiya yozing
// (har safar 1 ga kamaytiring, qiymatlarni massivga saqlang).
function masala9(son) {}

// 10-masala: [do-while] 1 dan boshlab kvadratlarini hisoblab,
// natija 50 dan katta bo'lguncha davom ettiruvchi funksiya yozing.
function masala10() {}

// 11-masala: [string] Berilgan matnning uzunligini qaytaruvchi funksiya yozing.
function masala11(matn) {}

// 12-masala: [string] Berilgan so'zni teskari tartibda qaytaruvchi funksiya yozing.
function masala12(soz) {}

// 13-masala: [string] Berilgan matnni katta harflarga o'giruvchi funksiya yozing.
function masala13(matn) {}

// 14-masala: [string] Berilgan matnda "salom" so'zi bor-yo'qligini
// tekshiruvchi funksiya yozing (true/false qaytarsin).
function masala14(matn) {}

// 15-masala: [array] Massiv elementlari yig'indisini hisoblovchi funksiya yozing.
function masala15(massiv) {
  let y = 0;
  for (let i of massiv) {
    y += i;
  }
  return y;
}
// console.log(masala15([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 16-masala: [array] Massivdagi eng katta elementni topuvchi funksiya yozing.
function masala16(massiv) {
  let katta = massiv[0];

  for (let i of massiv) {
    if (i > katta) {
      katta = i;
    }
  }

  return katta;
}

// console.log(masala16([1, 2, 3, 4, 5]));
// console.log(masala16([-5, -2, -10]));
// 17-masala: [array] Massivdagi eng kichik elementni topuvchi funksiya yozing.
function masala17(massiv) {
  let kichik = massiv[0];

  for (let i of massiv) {
    if (i < kichik) {
      kichik = i;
    }
  }
  return kichik;
}
console.log(masala17([4, 3, 2, 5, 6, 7, 8, 1, 0]));

// 18-masala: [array] Massiv elementlarini ikkiga ko'paytirib,
// yangi massiv qaytaruvchi funksiya yozing.
function masala18(massiv) {}

// 19-masala: [if-else, for] Massivdagi juft sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala19(massiv) {}

// 20-masala: [if-else, for] Massivdagi toq sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala20(massiv) {}

// 21-masala: [object] Ism va yosh parametrlarini qabul qilib,
// { ism, yosh } ko'rinishida object qaytaruvchi funksiya yozing.
function masala21(ism, yosh) {}

// 22-masala: [object] Berilgan object ichida "ism" xususiyati
// mavjudligini tekshiruvchi funksiya yozing.
function masala22(obj) {}

// 23-masala: [object] Berilgan object'dagi barcha kalitlarni (key)
// massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala23(obj) {}

// 24-masala: [if-else] Berilgan sonning juft yoki toqligini
// aniqlovchi funksiya yozing.
function masala24(son) {}

// 25-masala: [if-else] Uchta sonni solishtirib, eng kattasini
// qaytaruvchi funksiya yozing.
function masala25(a, b, c) {}

// 26-masala: [for] 1 dan 10 gacha ko'paytirish jadvalini
// (masalan 5 uchun: 5,10,15...) massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala26(son) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(son * i);
  }
  return arr;
}
// console.log(masala26(5))

// 27-masala: [while] Berilgan sonni 2 ga bo'lib, natija 1 dan
// kichik bo'lguncha bo'lish amalini necha marta bajarish
// mumkinligini hisoblovchi funksiya yozing.
function masala27(son) {
  let marta = 0;

  while (son >= 1) {
    son /= 2;
    marta++;
  }

  return marta;
}

// console.log(masala27(16));

// 28-masala: [string] Berilgan matndagi unli harflar (a, o, e, i, u, ...)
// sonini hisoblovchi funksiya yozing.
function masala28(matn) {}

// 29-masala: [string] Ikkita so'zni birlashtirib, orasiga bo'sh joy
// qo'yib qaytaruvchi funksiya yozing.
function masala29(soz1, soz2) {}

// 30-masala: [array] Massivda berilgan element mavjudligini
// tekshiruvchi funksiya yozing (true/false).
function masala30(massiv, element) {}

// 31-masala: [array] Massiv ichidagi elementlar sonini
// (uzunligini) qaytaruvchi funksiya yozing.
function masala31(massiv) {}

// 32-masala: [if-else] Berilgan baho (0-100) ga qarab harf baho
// ("A", "B", "C", "D", "F") qaytaruvchi funksiya yozing.
function masala32(baho) {}

// 33-masala: [for] Berilgan sonning barcha bo'luvchilarini
// topib, massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala33(son) {}

// 34-masala: [do-while] 1 dan boshlab sonlarni sanab, ularning
// yig'indisi berilgan chegaradan oshguncha davom ettiruvchi
// funksiya yozing (necha ta son kerak bo'lganini qaytaring).
function masala34(chegara) {}

// 35-masala: [object] Ikkita object'ni birlashtirib, yangi
// object qaytaruvchi funksiya yozing.
function masala35(obj1, obj2) {}

// ==================== O'RTACHA DARAJA (36 - 75) ====================

// 36-masala: [if-else, for] Berilgan sondan katta bo'lgan barcha
// tub sonlarni (birinchi N ta) massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala36(son, n) {}

// 37-masala: [if-else] Berilgan sonning tub son (prime) ekanligini
// tekshiruvchi funksiya yozing.
function masala37(son) {}

// 38-masala: [for, if-else] 1 dan berilgan songacha bo'lgan
// Fibonachchi ketma-ketligini massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala38(uzunlik) {}

// 39-masala: [while] Berilgan ikkita sonning eng katta umumiy
// bo'luvchisini (EKUB) Evklid algoritmi asosida topuvchi funksiya yozing.
function masala39(a, b) {}

// 40-masala: [while] Berilgan ikkita sonning eng kichik umumiy
// karralisini (EKUK) topuvchi funksiya yozing.
function masala40(a, b) {}

// 41-masala: [string, for] Berilgan matnda har bir harf necha marta
// takrorlanganini hisoblab, object ko'rinishida qaytaruvchi funksiya yozing.
function masala41(matn) {}

// 42-masala: [string, if-else] Berilgan so'z palindrom (ikki tarafdan
// bir xil o'qiluvchi) ekanligini tekshiruvchi funksiya yozing.
function masala42(soz) {}

// 43-masala: [string] Berilgan matndagi har bir so'zning birinchi
// harfini katta qilib qaytaruvchi funksiya yozing (Title Case).
function masala43(matn) {}

// 44-masala: [string, for] Berilgan matndagi so'zlar sonini
// hisoblovchi funksiya yozing (bo'sh joylar bo'yicha ajrating).
function masala44(matn) {}

// 45-masala: [array, for] Massivdagi takrorlanuvchi elementlarni
// olib tashlab, faqat unikal elementlarni qaytaruvchi funksiya yozing.
function masala45(massiv) {}

// 46-masala: [array, if-else] Massivni ikkiga ajratib, birinchisida
// juft, ikkinchisida toq sonlar joylashgan ikkita massivdan iborat
// massiv qaytaruvchi funksiya yozing ([juftlar, toqlar]).
function masala46(massiv) {}

// 47-masala: [array, for] Ikkita massivning umumiy (kesishgan)
// elementlarini topuvchi funksiya yozing.
function masala47(massiv1, massiv2) {}

// 48-masala: [array] Massivni teskari tartibga o'girib qaytaruvchi
// funksiya yozing (built-in reverse() ishlatmasdan).
function masala48(massiv) {}

// 49-masala: [array, for] Massiv elementlarini o'sish tartibida
// saralovchi (sorting) funksiya yozing (built-in sort() ishlatmasdan,
// bubble sort usulida).
function masala49(massiv) {}

// 50-masala: [object, for] Object massivi (masalan talabalar ro'yxati)
// ichidan berilgan shartga (masalan yosh > 18) mos keluvchilarni
// filtrlab qaytaruvchi funksiya yozing.
function masala50(talabalar, minYosh) {}

// 51-masala: [object, for] Object massividagi barcha elementlarning
// berilgan xususiyati (masalan "narx") bo'yicha yig'indisini
// hisoblovchi funksiya yozing.
function masala51(mahsulotlar) {}

// 52-masala: [if-else, while] Berilgan sonni ikkilik (binary)
// sanoq sistemasiga o'giruvchi funksiya yozing (built-in
// toString ishlatmasdan).
function masala52(son) {}

// 53-masala: [for, if-else] Berilgan N qatorli Pifagor uchburchagi
// shaklidagi yulduzchalar ("*") satrlarini massiv ko'rinishida
// qaytaruvchi funksiya yozing.
function masala53(n) {}

// 54-masala: [for, if-else] 1 dan N gacha bo'lgan sonlar orasida
// "Fizz" (3 ga bo'linsa), "Buzz" (5 ga bo'linsa), "FizzBuzz"
// (ikkalasiga ham bo'linsa) mantig'ini qo'llovchi FizzBuzz
// funksiyasini yozing.
function masala54(n) {}

// 55-masala: [while, if-else] Berilgan sonni teskari raqamlarga
// aylantiruvchi funksiya yozing (masalan: 123 -> 321).
function masala55(son) {}

// 56-masala: [do-while, if-else] Berilgan sonning "Armstrong soni"
// ekanligini tekshiruvchi funksiya yozing (masalan: 153 = 1³+5³+3³).
function masala56(son) {}

// 57-masala: [array, for] Massiv elementlarining o'rtacha qiymatini
// (average) hisoblovchi funksiya yozing.
function masala57(massiv) {}

// 58-masala: [array, for] Ikki o'lchovli massiv (matritsa) elementlari
// yig'indisini hisoblovchi funksiya yozing.
function masala58(matritsa) {}

// 59-masala: [array, if-else] Berilgan massivda eng ko'p
// takrorlangan elementni topuvchi funksiya yozing.
function masala59(massiv) {}

// 60-masala: [string, for] Berilgan matnda eng uzun so'zni
// topib qaytaruvchi funksiya yozing.
function masala60(matn) {}

// 61-masala: [string, if-else] Ikkita so'z bir-birining anagrammasi
// ekanligini tekshiruvchi funksiya yozing.
function masala61(soz1, soz2) {}

// 62-masala: [for, while] Berilgan ikkita chegara oralig'idagi
// barcha tub sonlarni topuvchi funksiya yozing.
function masala62(boshlanish, tugash) {}

// 63-masala: [object, if-else] Talaba object'ini qabul qilib
// (ism, baholar massivi), o'rtacha bahoga qarab "a'lochi",
// "o'rta" yoki "past" natija qaytaruvchi funksiya yozing.
function masala63(talaba) {}

// 64-masala: [object, for] Object massividan (mahsulotlar) eng
// qimmat mahsulotni topib qaytaruvchi funksiya yozing.
function masala64(mahsulotlar) {}

// 65-masala: [array, for, if-else] Massiv ichidan berilgan
// sonlarni chiqarib tashlab, qolganlarini qaytaruvchi funksiya yozing.
function masala65(massiv, sonlar) {}

// 66-masala: [while, if-else] Kredit summasi va oylik to'lov
// berilganda, qarzni to'liq yopish uchun necha oy kerakligini
// hisoblovchi funksiya yozing.
function masala66(qarz, oylikTolov) {}

// 67-masala: [for, string] Berilgan matndagi barcha raqamlarni
// (0-9) topib, massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala67(matn) {}

// 68-masala: [array, object] Ism va yosh massivlarini birlashtirib,
// { ism, yosh } object'laridan iborat massiv yasovchi funksiya yozing.
function masala68(ismlar, yoshlar) {}

// 69-masala: [if-else, for] Berilgan yil kabisa yil (leap year)
// ekanligini tekshiruvchi funksiya yozing.
function masala69(yil) {}

// 70-masala: [array, for] Massivni berilgan kattalikdagi
// bo'laklarga (chunk) bo'luvchi funksiya yozing.
function masala70(massiv, kattalik) {}

// 71-masala: [string, if-else] Parolning kuchli ekanligini
// tekshiruvchi funksiya yozing (kamida 8 belgi, katta-kichik harf,
// raqam bo'lishi shart).
function masala71(parol) {}

// 72-masala: [for, if-else] Berilgan sonlar massivi ichidan
// ikkita elementning yig'indisi berilgan songa teng bo'lgan
// juftlikni topuvchi funksiya yozing (two sum masalasi).
function masala72(massiv, maqsad) {}

// 73-masala: [while, string] Berilgan matndagi ortiqcha bo'sh
// joylarni olib tashlovchi funksiya yozing (bir nechta bo'sh joy
// bitta bo'sh joyga aylantirilsin).
function masala73(matn) {}

// 74-masala: [array, for] Massiv elementlarini guruhlarga
// (masalan juft/toq) ajratib, object ko'rinishida qaytaruvchi
// funksiya yozing.
function masala74(massiv) {}

// 75-masala: [object, for, if-else] Talabalar object massividan
// har bir fan bo'yicha eng yuqori bahoga ega talabani topib,
// object ko'rinishida qaytaruvchi funksiya yozing.
function masala75(talabalar) {}

// ==================== QIYIN DARAJA (76 - 100) ====================

// 76-masala: [for, if-else] Berilgan matritsani (ikki o'lchovli
// massiv) 90 gradusga o'ngga aylantiruvchi funksiya yozing.
function masala76(matritsa) {}

// 77-masala: [array, for, object] Sotuvlar ro'yxati (object massivi:
// mahsulot, narx, soni) asosida har bir mahsulot bo'yicha umumiy
// tushumni hisoblab, object ko'rinishida qaytaruvchi funksiya yozing.
function masala77(sotuvlar) {}

// 78-masala: [while, if-else] Berilgan sonni Rim raqamlariga
// o'giruvchi funksiya yozing (1 dan 3999 gacha).
function masala78(son) {}

// 79-masala: [string, for, object] Berilgan matndagi so'zlarning
// takrorlanish chastotasini hisoblab, eng ko'p ishlatilgan
// 3 ta so'zni qaytaruvchi funksiya yozing.
function masala79(matn) {}

// 80-masala: [array, for] Berilgan massivdagi ketma-ket kelgan
// eng uzun o'sib boruvchi (increasing) ketma-ketlik uzunligini
// topuvchi funksiya yozing.
function masala80(massiv) {}

// 81-masala: [for, if-else, while] Berilgan sonni faqat
// qo'shish va ayirish amallari yordamida (ko'paytirish/bo'lish
// operatorisiz) ko'paytmasini hisoblovchi funksiya yozing.
function masala81(a, b) {}

// 82-masala: [array, object, for] Ierarxik tuzilma (masalan,
// xodim va uning menejeri) berilgan massivdan har bir menejerga
// bo'ysunuvchi xodimlar sonini hisoblovchi funksiya yozing.
function masala82(xodimlar) {}

// 83-masala: [string, while] Berilgan qavslar ketma-ketligi
// ("(", ")", "{", "}", "[", "]") to'g'ri joylashtirilganligini
// (balanced) tekshiruvchi funksiya yozing (stack mantig'i asosida,
// massivdan stack sifatida foydalaning).
function masala83(qatorQavslar) {}

// 84-masala: [array, for, if-else] Ikki saralangan massivni
// birlashtirib, natijada yagona saralangan massiv hosil
// qiluvchi funksiya yozing (merge, built-in sort ishlatmasdan).
function masala84(massiv1, massiv2) {}

// 85-masala: [for, while, if-else] Berilgan matritsada (2D massiv)
// eng uzun ustma-ust joylashgan bir xil qiymatlar ketma-ketligini
// (masalan gorizontal) topuvchi funksiya yozing.
function masala85(matritsa) {}

// 86-masala: [object, for, array] Kategoriyalar bo'yicha mahsulotlar
// ro'yxatini (object massivi: nomi, kategoriya, narx) kategoriya
// nomiga qarab guruhlab, { kategoriya: [mahsulotlar] } ko'rinishida
// qaytaruvchi funksiya yozing.
function masala86(mahsulotlar) {}

// 87-masala: [string, for] Ikki matn orasidagi Levenshteyn
// masofasini (bitta matnni ikkinchisiga aylantirish uchun kerakli
// eng kam amallar soni) hisoblovchi funksiya yozing (soddalashtirilgan
// versiya, faqat qo'shish/o'chirish amallari orqali).
function masala87(soz1, soz2) {}

// 88-masala: [array, for, if-else] Massivda "1 dan N gacha" bo'lgan
// sonlar ichidan yetishmayotgan bitta sonni topuvchi funksiya yozing.
function masala88(massiv, n) {}

// 89-masala: [for, while, if-else] Berilgan sonning barcha tub
// ko'paytuvchilarini (prime factorization) massiv ko'rinishida
// qaytaruvchi funksiya yozing.
function masala89(son) {}

// 90-masala: [object, array, for] Talabalar va ularning fanlar
// bo'yicha baholari (nested object) asosida har bir talabaning
// umumiy o'rtacha bahosini hisoblab, eng yuqori o'rtachaga ega
// talabani aniqlovchi funksiya yozing.
function masala90(talabalarBaholari) {}

// 91-masala: [string, for, if-else] Berilgan matndagi har bir
// gapni (nuqta bilan ajratilgan) alohida ajratib, har birining
// so'zlar sonini hisoblovchi funksiya yozing.
function masala91(matn) {}

// 92-masala: [array, for, while] Massivni "to'lqinsimon" tartibda
// (wave pattern: kichik-katta-kichik-katta...) qayta joylashtiruvchi
// funksiya yozing.
function masala92(massiv) {}

// 93-masala: [for, if-else] Berilgan N qiymat uchun Paskal
// uchburchagini (Pascal's Triangle) ikki o'lchovli massiv
// ko'rinishida qaytaruvchi funksiya yozing.
function masala93(n) {}

// 94-masala: [object, for, array] Ma'lumotlar bazasidagi buyurtmalar
// ro'yxati (mijoz, mahsulot, narx, sana) asosida har bir mijozning
// eng ko'p pul sarflagan oyini aniqlovchi funksiya yozing.
function masala94(buyurtmalar) {}

// 95-masala: [array, for, if-else] Ikkita massiv orasidagi farqni
// (birinchisida bor, ikkinchisida yo'q elementlarni) topuvchi
// funksiya yozing.
function masala95(massiv1, massiv2) {}

// 96-masala: [while, if-else] Berilgan sonni faqat 1, 5, 10, 25
// (tangalar) yordamida eng kam sondagi tanga bilan to'lash mumkin
// bo'lgan kombinatsiyani hisoblovchi funksiya yozing (greedy usul).
function masala96(summa) {}

// 97-masala: [string, for, object] Matn ichidagi har bir unikal
// so'zning necha marta va qaysi o'rinlarda (indekslarda)
// uchraganini object ko'rinishida qaytaruvchi funksiya yozing.
function masala97(matn) {}

// 98-masala: [array, for, if-else] Massivni N ta qismga imkon
// qadar teng yig'indili bo'laklarga bo'lish mumkinligini
// tekshiruvchi funksiya yozing.
function masala98(massiv, n) {}

// 99-masala: [object, array, for, if-else] Ijtimoiy tarmoq
// foydalanuvchilari (do'stlar ro'yxati bilan) berilganda, ikkita
// foydalanuvchi orasida "umumiy do'stlar" sonini topuvchi
// funksiya yozing.
function masala99(foydalanuvchilar, ism1, ism2) {}

// 100-masala: [array, object, for, while, if-else] Talabalar,
// ularning fanlari va baholari asosida to'liq "reyting jadvali"
// tuzuvchi funksiya yozing: har bir talaba uchun o'rtacha ball,
// umumiy reyting o'rni (1-o'rin, 2-o'rin va h.k.) hisoblansin
// va natija saralangan massiv ko'rinishida qaytarilsin.
function masala100(talabalar) {
  const baholar = {
    matematika: 5,
    fizika: 2,
    inglizTili: 9.5,
  };
}

// ==========================================================
// Eslatma: har bir funksiyani mustaqil yeching va test qilish
// uchun quyidagi kabi chaqiring, masalan:
// console.log(masala1(10, 20));
// ==========================================================
