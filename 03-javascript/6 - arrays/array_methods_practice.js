/*
========================================================
   JAVASCRIPT MASSIV METODLARI BO'YICHA IMTIHON TOPSHIRIQLARI
   Metodlar: push, pop, unshift, shift, splice, indexOf,
   lastIndexOf, find, findIndex, findLast, findLastIndex,
   entries, keys, values, map, filter, reduce, reduceRight,
   forEach, flat
   Jami: 140 ta topshiriq (har bir metod uchun 7 tadan)
   Daraja: o'rtacha va biroz qiyinroq
   Javoblarni shu joyning pastiga yozib bajaring.
========================================================
*/

// 1-topshiriq (flat)
// Ichma-ich joylashgan [1, [2, [3, [4, 5]]], 6] massivini to'liq (Infinity chuqurlikda) tekislang.
// console.log([1, [2, [3, [4, 5]]], 6].flat(Infinity))

// 2-topshiriq (push)
// Bo'sh "savat" massivi yarating. Foydalanuvchi tanlagan 3 ta mahsulot nomini (o'zingiz kiriting)
// push() yordamida qo'shing va oxirida savatdagi mahsulotlar sonini chop eting.
// let mahsulotlar = []
// let mahsulot;
// while (mahsulotlar.length < 3) {
//    mahsulot = prompt("Mahsulot nomini kiriting!: ")
//    mahsulotlar.push(mahsulot)
// }
// console.log(mahsulotlar)

// 3-topshiriq (findIndex)
// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}];
// Balli 50 dan past bo'lgan birinchi talabaning indeksini findIndex() bilan toping.
// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}]
// console.log(talabalar.findIndex((n) => n.ball < 50))

// 4-topshiriq (splice)
// let arr = [10, 20, 30, 40, 50];
// 2-indeksdan boshlab 2 ta elementni o'chirib, o'rniga 100 va 200 sonlarini joylashtiring. Natijani chop eting.
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 2, 200, 100)
// console.log(arr)

// 5-topshiriq (keys)
// let mevalar = ["olma", "nok", "shaftoli", "gilos"];
// keys() yordamida faqat juft indekslarni (0, 2, ...) konsolga chiqaring.
// let mevalar = ["olma", "nok", "shaftoli", "gilos"];
// for (let i of mevalar.keys()) {
//    if (i % 2 == 0) {
//       console.log(i)
//    }
// }

// 6-topshiriq (pop)
// let stack = [];
// push() yordamida stackga 1,2,3,4,5 sonlarini qo'shing, so'ng pop() bilan ketma-ket 3 ta elementni
// olib, ularning yig'indisini chop eting.
let stack = [];
let popStack = [];
for (let i = 1; i <= 100; i++) {
  stack.push(i);
}
for (let i = 0; i < 3; i++) {
  // console.log(i)
   popStack.push(stack.pop())
}
console.log(`Jami stack da (${stack}) lar qoldi`)
console.log(`Olib tashlangan mahsulotlar ${popStack.reverse()}`)

// 7-topshiriq (reduceRight)
// let arr = ["JS", "dan", "salom"];
// reduceRight() yordamida so'zlarni to'g'ri tartibda birlashtirib "salom dan JS" ko'rinishidagi
// jumlani hosil qiling.

// 8-topshiriq (unshift)
// let navbat = ["Vali", "Guli"];
// Navbatga eng oldinga "Ali" ismini unshift() bilan qo'shing va yangi navbat uzunligini chop eting.

// 9-topshiriq (values)
// let sonlar = [4, 8, 15, 16, 23, 42];
// values() iteratorini for...of bilan aylanib, faqat 10 dan katta sonlarni konsolga chiqaring.

// 10-topshiriq (findLast)
// let sonlar = [12, 5, 8, 21, 3, 17];
// findLast() yordamida oxirgi juft sonni toping.

// 11-topshiriq (forEach)
// let narxlar = [1000, 2500, 3200, 4700];
// forEach() yordamida har bir narxga 15% QQS qo'shib, natijani "Narx: XXXX so'm" formatida chop eting
// (asl massivni o'zgartirmasdan).

// 12-topshiriq (indexOf)
// let harflar = ["a", "b", "c", "b", "d", "b"];
// "b" harfi massivda nechta marta uchrashini indexOf() dan foydalanib (tsikl yordamida) sanang.

// 13-topshiriq (map)
// let temperaturalar = [0, 20, 37, 100];
// map() yordamida Selsiy darajalarini Farengeytga o'tkazing: F = C * 9/5 + 32.

// 14-topshiriq (shift)
// let navbat = ["mijoz1", "mijoz2", "mijoz3", "mijoz4"];
// while tsikli yordamida navbatdagi barcha mijozlarni shift() bilan xizmat ko'rsatish tartibida
// konsolga chiqaring ("mijoz1 xizmat ko'rmoqda" kabi).

// 15-topshiriq (entries)
// let taomlar = ["osh", "manti", "lag'mon"];
// entries() yordamida har bir taomni "1-taom: osh" formatida chop eting (indeks 1 dan boshlansin).

// 16-topshiriq (lastIndexOf)
// let harakatlar = ["login", "click", "scroll", "click", "logout", "click"];
// "click" harakati oxirgi marta qaysi indeksda sodir bo'lganini toping.

// 17-topshiriq (filter)
// let foydalanuvchilar = [{ism:"Ali", faol:true}, {ism:"Vali", faol:false}, {ism:"Guli", faol:true}];
// Faqat faol foydalanuvchilarning ismlaridan iborat yangi massiv hosil qiling (filter + map birga).

// 18-topshiriq (findLastIndex)
// let baholar = [3, 5, 2, 4, 5, 1];
// findLastIndex() yordamida oxirgi "5" bahoning indeksini toping.

// 19-topshiriq (reduce)
// let savat = [{nom:"non", narx:5000, soni:2}, {nom:"sut", narx:8000, soni:1}];
// reduce() yordamida savatning umumiy summasini (narx * soni) hisoblang.

// 20-topshiriq (find)
// let sonlar = [2, 4, 6, 7, 8, 10];
// Massivdagi birinchi toq sonni find() yordamida toping. Agar toq son bo'lmasa "Topilmadi" deb chop eting.

// 21-topshiriq (flat)
// let baholar = [[85, 90], [70, [60, 65]], [95]];
// Massivni 2 daraja chuqurlikda tekislab, so'ng barcha baholarning o'rtachasini hisoblang.

// 22-topshiriq (push)
// let jurnalar = ["Fizika: 4"];
// Massivga forEach() yordamida ["Matematika: 5", "Kimyo: 3"] massividagi elementlarni push() bilan
// birma-bir qo'shing.

// 23-topshiriq (findIndex)
// let mahsulotlar = [{nom:"stol", narx:150000}, {nom:"stul", narx:45000}, {nom:"shkaf", narx:300000}];
// Narxi 100000 dan qimmat bo'lgan birinchi mahsulotning indeksini toping va shu mahsulotni
// massivdan o'chirib tashlang (splice bilan).

// 24-topshiriq (splice)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// splice() yordamida massivning o'rtasidagi elementni (indeksni hisoblab) o'chirmasdan, faqat
// o'sha joyga 99 sonini qo'shing (deleteCount = 0 bilan).

// 25-topshiriq (keys)
// let harflar = ["x", "y", "z"];
// keys() dan foydalanib teskari tartibda (2, 1, 0) indekslarni chop eting.

// 26-topshiriq (pop)
// let sahifalar = ["bosh", "biz-haqimizda", "xizmatlar", "aloqa"];
// Foydalanuvchi "orqaga" tugmasini bossa oxirgi sahifa pop() bilan olib tashlanadi. Buni 2 marta
// simulyatsiya qiling va qolgan sahifalarni chop eting.

// 27-topshiriq (reduceRight)
// let sonlar = [1, 2, 3, 4];
// reduceRight() yordamida sonlarni chapdan o'ngga emas, o'ngdan chapga qarab bo'lish (division)
// amalini bajaring va natijani chop eting.

// 28-topshiriq (unshift)
// let vazifalar = ["hujjatlarni tayyorlash"];
// "Eng muhim: byudjetni tasdiqlash" vazifasini ro'yxat boshiga unshift() bilan qo'shing, so'ng
// barcha vazifalarni raqamlab chop eting.

// 29-topshiriq (values)
// let ballar = [55, 70, 43, 88, 91];
// values() iteratori yordamida o'tish balli (60) dan past bo'lgan ballar sonini sanang.

// 30-topshiriq (findLast)
// let tranzaksiyalar = [200, -50, 300, -120, 400, -30];
// findLast() yordamida oxirgi manfiy (xarajat) tranzaksiyani toping.

// 31-topshiriq (forEach)
// let harorat = [18, 22, 25, 30, 15];
// forEach() yordamida har bir kun uchun "Kun X: issiq/salqin" deb chiqaring (25 va undan yuqori — issiq).

// 32-topshiriq (indexOf)
// let ranglar = ["qizil", "yashil", "ko'k"];
// "sariq" rangi massivda bor-yo'qligini indexOf() orqali tekshirib, natijaga qarab tegishli xabar chiqaring.

// 33-topshiriq (map)
// let ismlar = ["ali", "vali", "guli"];
// map() yordamida har bir ismning birinchi harfini katta qilib qolganini kichik holda qoldiring
// (masalan "ali" -> "Ali").

// 34-topshiriq (shift)
// let printerNavbat = ["hujjat1.pdf", "hujjat2.pdf", "hujjat3.pdf"];
// shift() yordamida navbatdagi birinchi hujjatni chop qilib (konsolga chiqarib), uni navbatdan olib tashlang.
// Qolgan navbat uzunligini ham chiqaring.

// 35-topshiriq (entries)
// let sotuvlar = [1200, 3400, 800];
// entries() yordamida eng katta qiymatga ega indeksni (qo'lda taqqoslab) aniqlang.

// 36-topshiriq (lastIndexOf)
// let harakatlar = [0, 1, 0, 0, 1, 0, 1];
// Oxirgi "1" raqami qaysi pozitsiyada turganini lastIndexOf() bilan aniqlang va shu pozitsiyadan
// keyingi barcha elementlarni slice() bilan ajratib chop eting.

// 37-topshiriq (filter)
// let sonlar = [12, 5, 8, 130, 44, 3, 99];
// filter() yordamida faqat 2 xonali sonlardan iborat yangi massiv hosil qiling.

// 38-topshiriq (findLastIndex)
// let logNooma = ["info", "error", "info", "error", "warning"];
// findLastIndex() yordamida oxirgi "error" yozuvining indeksini toping va undan keyingi barcha
// yozuvlarni chop eting.

// 39-topshiriq (reduce)
// let sozlar = ["JavaScript", "massiv", "metodlari"];
// reduce() yordamida barcha so'zlardagi umumiy harflar sonini hisoblang.

// 40-topshiriq (find)
// let ishchilar = [{ism:"Bek", staj:2}, {ism:"Anvar", staj:7}, {ism:"Dilnoza", staj:5}];
// Staji 5 yildan ko'p bo'lgan birinchi ishchini find() yordamida toping.

// 41-topshiriq (flat)
// let matritsa = [[1,2,3],[4,5,6],[7,8,9]];
// flat() yordamida matritsani bir qatorli massivga aylantirib, reduce() bilan yig'indisini toping.

// 42-topshiriq (push)
// let log = [];
// 1 dan 20 gacha bo'lgan sonlar orasidan faqat 3 ga bo'linadiganlarini push() bilan log massiviga qo'shing.

// 43-topshiriq (findIndex)
// let parollar = ["12345", "qwerty", "Str0ng!Pass", "abcdef"];
// Uzunligi 8 dan katta bo'lgan birinchi parolning indeksini findIndex() bilan toping.

// 44-topshiriq (splice)
// let hafta = ["Dush", "Sesh", "Chor", "Pay", "Juma", "Shan", "Yak"];
// splice() yordamida ish kunlarini (Dush-Juma) dam olish kunlaridan (Shan-Yak) alohida
// massivlarga ajrating (asl massivni o'zgartirib).

// 45-topshiriq (keys)
// let arr = ["a", "b", "c", "d", "e"];
// keys() iteratorini array ga aylantirib (Array.from), teskari tartibda chop eting.

// 46-topshiriq (pop)
// let tarix = ["sahifa1", "sahifa2", "sahifa3"];
// Brauzer tarixi kabi: pop() bilan oxirgi sahifani oling va uni "joriy sahifa" deb chop eting;
// agar massiv bo'sh bo'lib qolsa "Tarix bo'sh" deb chiqaring.

// 47-topshiriq (reduceRight)
// let bosqichlar = ["boshlash", "tekshirish", "yakunlash"];
// reduceRight() yordamida bosqichlarni " <- " belgisi bilan teskari tartibda birlashtiring.

// 48-topshiriq (unshift)
// let yutuqlar = ["2-o'rin"];
// unshift() yordamida "1-o'rin" yutug'ini ro'yxat boshiga qo'shing, so'ng massiv uzunligini
// tekshirib "Yutuqlar soni: X" deb chop eting.

// 49-topshiriq (values)
// let baholar = [2, 3, 4, 5];
// values() yordamida barcha baholarning ko'paytmasini hisoblang (tsikl bilan).

// 50-topshiriq (findLast)
// let sonlar = [3, 15, 8, 21, 6, 9];
// findLast() yordamida 5 ga qoldiqsiz bo'linadigan oxirgi sonni toping.

// 51-topshiriq (forEach)
// let studentlar = [{ism:"Ali", ball:85}, {ism:"Vali", ball:55}, {ism:"Guli", ball:70}];
// forEach() yordamida har bir student uchun "Ali: A'lo" yoki "Vali: Qoniqarli" (80+ = A'lo,
// 60-79 = Yaxshi, 60 dan past = Qoniqarli) formatida chop eting.

// 52-topshiriq (indexOf)
// let inventar = ["noutbuk", "sichqoncha", "klaviatura", "monitor"];
// "printer" mavjudligini tekshirib, agar bo'lmasa uni push() bilan qo'shing, indexOf() orqali tekshiring.

// 53-topshiriq (map)
// let narxlarDollarda = [10, 25, 99, 150];
// map() yordamida dollarlarni so'mga o'tkazing (1 dollar = 12700 so'm) va natijani
// "10$ = 127000 so'm" formatida massiv qilib chiqaring.

// 54-topshiriq (shift)
// let vazifalar = ["A vazifa", "B vazifa", "C vazifa"];
// let bajarilgan = [];
// shift() yordamida vazifalarni birma-bir olib, bajarilgan massiviga push() qiling (tsikl bilan).

// 55-topshiriq (entries)
// let mahsulotlar = ["non", "sut", "tuxum"];
// entries() yordamida har bir mahsulotni "#0 - non" formatida (indeks boshida # bilan) chop eting.

// 56-topshiriq (lastIndexOf)
// let baholar = [5, 4, 5, 3, 5, 2];
// Eng yuqori bahoning (5) oxirgi marta qayerda uchraganini lastIndexOf() bilan toping.

// 57-topshiriq (filter)
// let foydalanuvchilar = [{ism:"Ali", yosh:17}, {ism:"Vali", yosh:22}, {ism:"Guli", yosh:15}];
// filter() yordamida faqat 18 yoshdan katta foydalanuvchilarni ajratib oling.

// 58-topshiriq (findLastIndex)
// let harorat = [22, 25, 30, 18, 33, 20];
// 30 dan yuqori bo'lgan oxirgi haroratning indeksini findLastIndex() bilan toping.

// 59-topshiriq (reduce)
// let xarajatlar = [{turi:"oziq-ovqat", summa:150000}, {turi:"transport", summa:80000},
//                    {turi:"oziq-ovqat", summa:60000}];
// reduce() yordamida faqat "oziq-ovqat" turidagi xarajatlar yig'indisini hisoblang.

// 60-topshiriq (find)
// let sonlar = [4, 9, 16, 23, 28, 35];
// Massivdagi tub songa (prime) mos keladigan birinchi elementni find() yordamida toping.

// 61-topshiriq (flat)
// let guruhlar = [["Ali","Vali"], ["Guli"], [], ["Anvar","Bek","Dilnoza"]];
// flat() yordamida barcha talabalarni bitta massivga birlashtirib, umumiy sonini chop eting.

// 62-topshiriq (push)
// let stack = [];
// Foydalanuvchi kiritgan (o'zingiz belgilagan) 5 ta amaldan iborat "harakatlar tarixi"ni
// push() bilan yozib boring, so'ng oxirgi 2 ta amalni slice() bilan ajratib chiqaring.

// 63-topshiriq (findIndex)
// let mashinalar = [{marka:"Chevrolet", narx:15000}, {marka:"Toyota", narx:25000},
//                    {marka:"BMW", narx:45000}];
// Narxi 20000 dan 40000 gacha bo'lgan birinchi mashinaning indeksini toping.

// 64-topshiriq (splice)
// let ro'yxat = ["A", "B", "C", "D", "E"];
// splice() yordamida "C" elementini uning qiymatiga qarab (indexOf bilan indeksini topib)
// massivdan olib tashlang.

// 65-topshiriq (keys)
// let mahsulotlar = ["kalam", "daftar", "ruchka", "o'chirg'ich"];
// keys() dan foydalanib faqat toq indekslardagi mahsulotlarni chop eting.

// 66-topshiriq (pop)
// let telefonQongiroqlari = ["+998901234567", "+998907654321", "+998909876543"];
// So'nggi qo'ng'iroqni pop() bilan oling va "So'nggi qo'ng'iroq: XXX" deb chop eting, keyin
// qolgan ro'yxat uzunligini ko'rsating.

// 67-topshiriq (reduceRight)
// let raqamlar = [1, 2, 3, 4, 5];
// reduceRight() yordamida raqamlardan foydalanib ularning darajaga ko'tarilishini
// (masalan 1^(2^(3^(4^5)))) hisoblashga urinib ko'ring (Math.pow bilan).

// 68-topshiriq (unshift)
// let queue = ["mijoz3"];
// VIP mijoz "mijoz-VIP" navbat boshiga unshift() bilan qo'yiladi. Amalni bajaring va navbatni chop eting.

// 69-topshiriq (values)
// let harflar = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
// values() yordamida "a" harfi nechta marta uchrashini sanang.

// 70-topshiriq (findLast)
// let foydalanuvchilar = [{ism:"Ali", faol:true}, {ism:"Vali", faol:false}, {ism:"Guli", faol:true}];
// findLast() yordamida oxirgi faol foydalanuvchini toping.

// 71-topshiriq (forEach)
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach() yordamida faqat asosiy (prime) sonlarni konsolga chiqaring (asl massivni o'zgartirmasdan).

// 72-topshiriq (indexOf)
// let taomlar = ["osh", "manti", "somsa", "lag'mon", "manti"];
// "manti" so'zi birinchi marta qaysi indeksda uchrashini toping va shu indeksdan boshlab
// slice() bilan qolgan qismini chiqaring.

// 73-topshiriq (map)
// let matnlar = ["salom", "dunyo", "kodlash"];
// map() yordamida har bir so'zning uzunligini o'zida saqlagan yangi massiv hosil qiling
// (masalan ["salom", 5] emas, {so'z:"salom", uzunlik:5} formatida).

// 74-topshiriq (shift)
// let ustaxonaBuyurtmalari = ["mijoz A", "mijoz B", "mijoz C", "mijoz D"];
// Har safar shift() chaqirilganda "X mijozga xizmat ko'rsatilmoqda" deb chop etadigan va
// navbat tugagach "Barcha mijozlarga xizmat ko'rsatildi" deb yozadigan tsikl yozing.

// 75-topshiriq (entries)
// let sozlar = ["men", "JavaScript", "o'rganyapman"];
// entries() yordamida eng uzun so'zning indeksi va o'zini toping (qo'lda taqqoslab).

// 76-topshiriq (lastIndexOf)
// let sonlar = [7, 3, 7, 9, 7, 1];
// 7 soni massivda nechta marta uchrashini lastIndexOf() dan foydalanib (tsikl bilan, har safar
// topilgan qismni qisqartirib) sanang.

// 77-topshiriq (filter)
// let sonlar = [-5, 10, -3, 8, -1, 20, 0];
// filter() yordamida faqat musbat sonlardan iborat massiv hosil qiling, so'ng ularning
// o'rtachasini hisoblang.

// 78-topshiriq (findLastIndex)
// let holatlar = ["kutilmoqda", "bajarildi", "bekor qilindi", "bajarildi", "kutilmoqda"];
// "bajarildi" holatining oxirgi uchragan indeksini findLastIndex() bilan toping.

// 79-topshiriq (reduce)
// let savdolar = [1200, -300, 4500, -150, 800];
// reduce() yordamida musbat (kirim) va manfiy (chiqim) summalarni alohida hisoblab,
// {kirim: X, chiqim: Y} obyektini hosil qiling.

// 80-topshiriq (find)
// let so'zlar = ["salom", "kod", "dasturlash", "js", "web"];
// Uzunligi 5 dan katta bo'lgan birinchi so'zni find() yordamida toping.

// 81-topshiriq (flat)
// let daraxt = [1, [2, 3, [4, 5, [6, 7]]]];
// flat(Infinity) yordamida daraxtni to'liq tekislab, eng katta va eng kichik qiymatlarni toping.

// 82-topshiriq (push)
// let sabatcha = ["olma"];
// Agar sabatchada "banan" bo'lmasa, uni push() bilan qo'shing (indexOf yordamida tekshiring).

// 83-topshiriq (findIndex)
// let kitoblar = [{nom:"Alkimyogar", sahifa:210}, {nom:"1984", sahifa:328}, {nom:"Hobbit", sahifa:310}];
// Sahifasi 300 dan ko'p bo'lgan birinchi kitobning indeksini findIndex() bilan toping.

// 84-topshiriq (splice)
// let arr = [1, 2, 3, 4, 5];
// splice() yordamida massivning barcha elementlarini o'chirib, o'rniga [9, 9, 9] massivini joylang.

// 85-topshiriq (keys)
// let harflar = ["a", "b", "c", "d", "e", "f"];
// keys() natijasini Array.from() bilan massivga aylantiring, so'ng har bir indeksni 10 ga
// ko'paytirilgan holda chop eting.

// 86-topshiriq (pop)
// let elonlar = ["elon1", "elon2", "elon3", "elon4", "elon5"];
// Faqat 3 ta elon qolguncha pop() ni tsiklda chaqiring va har safar nechta qolganini chop eting.

// 87-topshiriq (reduceRight)
// let binar = [1, 0, 1, 1];
// reduceRight() yordamida binar massivni o'nlik songa aylantiring (masalan [1,0,1,1] -> 11).

// 88-topshiriq (unshift)
// let ro'yxat = [];
// 1 dan 5 gacha sonlarni unshift() yordamida qo'shib, natijada massiv qanday tartibda
// bo'lishini (teskari) chop eting.

// 89-topshiriq (values)
// let baholar = [3, 4, 5, 2, 5, 4];
// values() yordamida eng ko'p uchraydigan bahoni aniqlang (obyekt-hisoblagich yordamida).

// 90-topshiriq (findLast)
// let harflar = ["a", "e", "b", "i", "c", "o"];
// findLast() yordamida massivdagi oxirgi unli harfni ("a","e","i","o","u") toping.

// 91-topshiriq (forEach)
// let hisobRaqamlari = [{egasi:"Ali", balans:500000}, {egasi:"Vali", balans:-20000}];
// forEach() yordamida manfiy balansga ega egalarni "OGOHLANTIRISH: X ning balansi manfiy" deb chiqaring.

// 92-topshiriq (indexOf)
// let arr = [10, 20, 30, 40, 50];
// 30 sonining indeksini indexOf() bilan topib, shu indeksdagi qiymatni splice() yordamida
// 300 ga almashtiring.

// 93-topshiriq (map)
// let baholar5ballik = [2, 3, 4, 5];
// map() yordamida 5 ballik baholarni 100 ballik tizimga o'tkazing (har bir ball = 20 ball).

// 94-topshiriq (shift)
// let emaillar = ["ali@mail.uz", "vali@mail.uz", "guli@mail.uz"];
// Birinchi emailni shift() bilan olib, unga "Xush kelibsiz" xabari yuborilgani haqida
// xabar chop eting, qolganlarini o'zgarishsiz qoldiring.

// 95-topshiriq (entries)
// let mavzular = ["o'zgaruvchilar", "funksiyalar", "massivlar", "obyektlar"];
// entries() yordamida mavzularni "Dars 1: o'zgaruvchilar" formatida (Dars raqami 1 dan
// boshlanadi) chop eting.

// 96-topshiriq (lastIndexOf)
// let arr = ["x", "y", "x", "z", "x", "y"];
// "y" ning birinchi va oxirgi (indexOf va lastIndexOf) o'rtasidagi masofani (indekslar farqi) toping.

// 97-topshiriq (filter)
// let so'zlar = ["salom", "Dunyo", "JavaScript", "kod", "Massiv"];
// filter() yordamida faqat bosh harfi katta yozilgan so'zlarni ajrating.

// 98-topshiriq (findLastIndex)
// let sonlar = [2, 4, 6, 8, 9, 10, 12];
// findLastIndex() yordamida oxirgi toq sonning indeksini toping.

// 99-topshiriq (reduce)
// let harflar = ["j", "s"];
// let sonlar = [10, 20, 30];
// reduce() yordamida sonlar massividagi eng katta qiymatni (Math.max ishlatmasdan) toping.

// 100-topshiriq (find)
// let foydalanuvchilar = [{ism:"Ali", email:"ali@test.com"}, {ism:"Vali", email:"vali@test.com"}];
// email manzili "vali@test.com" ga teng bo'lgan foydalanuvchini find() yordamida toping.

// 101-topshiriq (flat)
// let baholarRoyxati = [[4,5],[3],[5,5,4],[2]];
// flat() yordamida barcha baholarni bitta massivga aylantirib, reduce() bilan o'rtacha
// bahoni hisoblang.

// 102-topshiriq (push)
// let xabarlar = [];
// "for" tsikli yordamida 1 dan 5 gacha "Xabar N" (N - raqam) matnlarini push() bilan
// xabarlar massiviga qo'shing.

// 103-topshiriq (findIndex)
// let harakatlar = [{turi:"kirish", vaqt:9}, {turi:"chiqish", vaqt:18}, {turi:"kirish", vaqt:14}];
// "chiqish" turidagi birinchi harakatning indeksini findIndex() bilan toping.

// 104-topshiriq (splice)
// let arr = ["A", "B", "C", "D", "E", "F"];
// splice() yordamida massivni ikkiga bo'lib (birinchi yarmi va ikkinchi yarmi) 2 ta
// alohida massivga ajrating.

// 105-topshiriq (keys)
// let ro'yxat = ["birinchi", "ikkinchi", "uchinchi"];
// keys() iteratorini qo'lda .next() metodi bilan chaqirib (for...of ishlatmasdan) birinchi
// 2 ta indeksni chop eting.

// 106-topshiriq (pop)
// let savat = ["kitob", "daftar", "ruchka"];
// let umumiyNarx = 0;
// Har bir mahsulotga shartli narx belgilab (masalan kitob=20000), pop() bilan mahsulotlarni
// olib, umumiyNarx ga qo'shib boring.

// 107-topshiriq (reduceRight)
// let matnQismlari = ["dunyo", ", ", "salom"];
// reduceRight() yordamida to'g'ri tartibda "salom, dunyo" jumlasini hosil qiling.

// 108-topshiriq (unshift)
// let bildirishnomalar = ["Eski xabar"];
// Yangi xabar "Yangi xabar!" har doim ro'yxat boshida ko'rinishi kerak. unshift() yordamida
// qo'shing va faqat oxirgi 3 ta bildirishnomani saqlab qolish mantig'ini yozing (slice bilan).

// 109-topshiriq (values)
// let sotuvSummalari = [45000, 120000, 78000, 200000, 15000];
// values() yordamida 100000 dan yuqori sotuvlar sonini va ularning umumiy summasini hisoblang.

// 110-topshiriq (findLast)
// let buyurtmalar = [{id:1, holat:"yetkazildi"}, {id:2, holat:"jarayonda"}, {id:3, holat:"yetkazildi"}];
// findLast() yordamida oxirgi "yetkazildi" holatidagi buyurtmani toping.

// 111-topshiriq (forEach)
// let ishchilarOylik = [{ism:"Ali", oylik:4500000}, {ism:"Vali", oylik:6200000}];
// forEach() yordamida har bir ishchining oyligidan 12% soliq ushlab qolingandan keyingi
// summasini hisoblab chop eting (asl obyektlarni o'zgartirmasdan).

// 112-topshiriq (indexOf)
// let mahsulotKodlari = ["A101", "B202", "C303", "D404"];
// Foydalanuvchi (o'zingiz) kiritgan "C303" kodi ro'yxatda bor-yo'qligini indexOf() bilan
// tekshirib, mos xabar chiqaring.

// 113-topshiriq (map)
// let ismFamiliya = [{ism:"Ali", familiya:"Karimov"}, {ism:"Vali", familiya:"Tosheva"}];
// map() yordamida har bir obyektdan "Karimov Ali" formatidagi to'liq ism hosil qiling
// (massiv qilib qaytaring).

// 114-topshiriq (shift)
// let audioNavbat = ["qo'shiq1.mp3", "qo'shiq2.mp3", "qo'shiq3.mp3"];
// "Keyingi qo'shiq" tugmasi bosilganda shift() chaqirilib, olib tashlangan qo'shiq
// "Hozir ijro etilmoqda: X" deb chiqishi kerak. Shu mantiqni 2 marta ishga tushiring.

// 115-topshiriq (entries)
// let chipta = ["VIP", "Standart", "Ekonom"];
// entries() yordamida har bir chipta turi uchun narxni ham hisoblab (VIP=500000,
// Standart=250000, Ekonom=100000) "0: VIP - 500000 so'm" formatida chop eting.

// 116-topshiriq (lastIndexOf)
// let sensorMalumotlari = [22, 23, 22, 25, 22, 24];
// 22 qiymatining oxirgi o'rnini lastIndexOf() bilan topib, undan keyingi barcha
// o'lchovlarning o'rtachasini hisoblang.

// 117-topshiriq (filter)
// let mahsulotlar = [{nom:"noutbuk", zaxira:0}, {nom:"sichqoncha", zaxira:15}, {nom:"monitor", zaxira:0}];
// filter() yordamida faqat zaxirasi tugagan (0) mahsulotlarning nomlarini ajratib oling (map bilan birga).

// 118-topshiriq (findLastIndex)
// let ovozlar = ["ha", "yo'q", "ha", "ha", "yo'q"];
// findLastIndex() yordamida oxirgi "yo'q" ovozining indeksini toping.

// 119-topshiriq (reduce)
// let harakatTarixi = ["login", "click", "click", "scroll", "click", "logout"];
// reduce() yordamida har bir harakat necha marta sodir bo'lganini {harakat: son} ko'rinishida
// obyektga yig'ing.

// 120-topshiriq (find)
// let mashinalar = [{raqam:"01A123BC", holat:"band"}, {raqam:"01B456DE", holat:"bo'sh"}];
// Holati "bo'sh" bo'lgan birinchi mashinani find() yordamida toping.

// 121-topshiriq (flat)
// let sinfXonalari = [["Ali","Vali"], ["Guli","Anvar"], [["Bek"], ["Dilnoza"]]];
// flat(2) yordamida barcha o'quvchilarni bitta ro'yxatga jamlang.

// 122-topshiriq (push)
// let yutuqlarTarixi = [];
// Har bir o'yin g'alabasidan keyin push() bilan sanaga o'xshash matn ("O'yin 1: g'alaba")
// qo'shiladigan 4 marta takrorlanuvchi tsikl yozing.

// 123-topshiriq (findIndex)
// let sonlar = [11, 22, 33, 44, 55, 66];
// 10 ga qoldiqsiz bo'linadigan birinchi sonning indeksini findIndex() bilan toping.

// 124-topshiriq (splice)
// let jamoa = ["a'zo1", "a'zo2", "a'zo3", "a'zo4"];
// "a'zo2" jamoadan chiqib ketdi. Uning o'rniga splice() yordamida "yangi a'zo" ni
// aynan o'sha pozitsiyaga qo'shing (indexOf bilan pozitsiyasini toping).

// 125-topshiriq (keys)
// let haftaKunlari = ["Dush","Sesh","Chor","Pay","Juma","Shan","Yak"];
// keys() yordamida faqat dam olish kunlarining (oxirgi 2 ta) indekslarini chop eting.

// 126-topshiriq (pop)
// let bildirishnomalar = ["xabar1", "xabar2", "xabar3", "xabar4", "xabar5"];
// Faqat oxirgi 2 ta bildirishnoma ko'rinishi kerak. pop() yordamida ortiqchalarini
// (uzunlik 2 dan katta bo'lguncha) olib tashlang.

// 127-topshiriq (reduceRight)
// let sonlar = [2, 3, 2];
// reduceRight() yordamida darajaga ko'tarish amalini o'ngdan chapga bajaring: 2^(3^2).

// 128-topshiriq (unshift)
// let qadamlar = ["3-qadam", "4-qadam"];
// unshift() yordamida "1-qadam" va "2-qadam" larni to'g'ri tartibda (1, keyin 2 bo'lib
// ko'rinadigan qilib) qo'shing.

// 129-topshiriq (values)
// let harflar = ["s", "a", "l", "o", "m"];
// values() yordamida barcha harflarni katta harfga aylantirib, bitta so'z sifatida
// birlashtirib chop eting.

// 130-topshiriq (findLast)
// let narxlar = [12000, 45000, 8000, 67000, 23000];
// findLast() yordamida 50000 dan kam bo'lgan oxirgi narxni toping.

// 131-topshiriq (forEach)
// let o'quvchilar = [{ism:"Ali", davomat:[1,1,0,1,1]}, {ism:"Vali", davomat:[1,0,0,1,0]}];
// forEach() yordamida har bir o'quvchining davomat foizini hisoblab
// "Ali: 80%" formatida chop eting.

// 132-topshiriq (indexOf)
// let mashinaRanglari = ["oq", "qora", "kumush", "qizil"];
// "yashil" rang ro'yxatda yo'qligini indexOf() bilan tekshirib, agar yo'q bo'lsa uni
// unshift() yordamida ro'yxat boshiga qo'shing.

// 133-topshiriq (map)
// let koordinatalar = [{x:1,y:2}, {x:3,y:4}, {x:-1,y:-2}];
// map() yordamida har bir nuqtaning boshlang'ich nuqtadan (0,0) masofasini
// (Math.sqrt(x*x+y*y)) hisoblab yangi massiv hosil qiling.

// 134-topshiriq (shift)
// let ishlabChiqarishNavbati = ["buyurtma1", "buyurtma2", "buyurtma3"];
// Har bir shift() chaqirilganda "ishlab chiqarilmoqda" va keyin "tayyor" statuslarini
// simulyatsiya qiluvchi kodni yozing (har bir buyurtma uchun 2 tadan xabar).

// 135-topshiriq (entries)
// let bosqichlar = ["reja", "ijro", "tekshiruv", "yakun"];
// entries() yordamida joriy bosqich indeksi 2 (ya'ni "tekshiruv") ekanini aniqlab,
// "Joriy bosqich: tekshiruv (3-bosqich)" deb chop eting.

// 136-topshiriq (lastIndexOf)
// let baholashNatijalari = ["o'tdi", "yiqildi", "o'tdi", "o'tdi", "yiqildi"];
// "yiqildi" natijasining oxirgi o'rnini lastIndexOf() bilan topib, undan oldingi
// barcha natijalarni slice() bilan ajratib chiqaring.

// 137-topshiriq (filter)
// let haroratLogi = [-5, 0, 15, 22, -2, 30, 18];
// filter() yordamida faqat musbat va 20 dan kichik haroratlarni ajratib oling.

// 138-topshiriq (findLastIndex)
// let to'lovlar = [{summa:5000, holat:"muvaffaqiyatli"}, {summa:12000, holat:"xato"},
//                   {summa:8000, holat:"muvaffaqiyatli"}];
// findLastIndex() yordamida "xato" holatidagi oxirgi to'lovning indeksini toping.

// 139-topshiriq (reduce)
// let ovozBerish = ["A", "B", "A", "C", "B", "A", "A"];
// reduce() yordamida eng ko'p ovoz to'plagan nomzodni aniqlang (obyekt-hisoblagich orqali).

// 140-topshiriq (find)
// let parollar = ["parol1", "12345", "P@ssw0rd!", "qwerty123"];
// Kamida bitta katta harf, bitta raqam va bitta maxsus belgidan iborat birinchi
// "kuchli" parolni find() va regex (masalan /[A-Z]/, /[0-9]/, /[!@#$%^&*]/) yordamida toping.

/*
========================================================
   IMTIHON TUGADI. Muvaffaqiyat tilaymiz!
========================================================
*/
