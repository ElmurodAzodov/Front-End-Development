// let ism = "Shohjahon"
// let yosh = 15
// let malumoti = "o'rta"
// let qiziqishlari = "ko'p uxlash va ko'p yatish"
// let maqsad = "boy bo'lish"

// let data = {
//     ism: "Shohjahon",
//     yosh: 15,
//     malumoti: "o'rta",
//     qiziqishlari: "ko'p uxlash va ko'p yatish",
//     maqsad: "boy bo'lish"
// }


// console.log(ism, yosh, malumoti, qiziqishlari, maqsad)
// console.log(data)

//* ===========================================================================
const shoxruzbek = {
  ism: "Shoxruzbek",
  familiya: "Karimov",
  yosh: 8,
  jins: "Erkak",
  tugilganYil: 2018,
  tugilganOy: "Mart",
  tugilganKun: 15,
  millati: "O'zbek",
  fuqaroligi: "O'zbekiston",
  shahri: "Toshkent",
  tumani: "Yunusobod",
  maktab: "12-maktab",
  sinf: 2,
  harfi: "A",
  boyi: 130,
  vazni: 28,
  sochRangi: "Qora",
  kozRangi: "Jigarrang",
  sevimliFan: "Matematika",
  sevimliRang: "Ko'k",
  sevimliTaom: "Osh",
  sevimliIchimlik: "Sharbat",
  sevimliMeva: "Olma",
  sevimliSport: "Futbol",
  sevimliJamoa: "Real Madrid",
  sevimliOyini: "Minecraft",
  sevimliHayvon: "Sher",
  sevimliKitob: "Zumrad va Qimmat",
  sevimliMultfilm: "Tom va Jerry",
  hobbi: "Rasm chizish",
  orzusi: "Dasturchi bo'lish",
  telefoniBor: false,
  ukalariSoni: 1,
  opalariSoni: 0,
  dostlariSoni: 12,
  yaxshiKoradiganFasl: "Yoz",
  yaxshiKoradiganBayram: "Navro'z",
  kompyuterBiladi: true,
  inglizTiliniOrganmoqda: true,
  baholari: [5, 5, 4, 5, 5],
};
shoxruzbek.lager = "Lagerga bormadi";

// console.log(Object.values(shoxruzbek));
// console.log(Object.keys(shoxruzbek));
// console.log(Object.entries(shoxruzbek));
// console.log(Object.entries(shoxruzbek)[40]);
delete shoxruzbek.jins
console.log(shoxruzbek);


// console.log(shoxruzbek.familiya);

//* TOPSHIRIQLAR
/* ============================================================
   * JAVASCRIPT FUNKSIYALAR — 100 TA TOPSHIRIQ
   * 10 ta oson | 40 ta o'rtacha | 40 ta qiyin | 10 ta juda murakkab
   ============================================================ */

/* ============================================================
   * OSON DARAJA (1 - 10)
   ============================================================ */

// 1. "salomAyt" nomli funksiya yozing, u hech qanday parametr olmasin
//    va chaqirilganda "Salom, dunyo!" deb konsolga chiqarsin.

// 2. "ismChiqar" nomli funksiya yozing, u "ism" parametrini oladi va
//    "Salom, {ism}!" deb chiqaradi. Function declaration shaklida yozing.

// 3. Ikki sonni qo'shuvchi "qoshish" funksiyasini yozing va uni
//    chaqirib natijasini konsolga chiqaring:
//    qoshish(5, 7) -> 12

// 4. Function expression shaklida "ayirish" funksiyasini yozing
//    (o'zgaruvchiga funksiya sifatida biriktiring).

// 5. Arrow function shaklida "kopaytirish" funksiyasini yozing:
//    kopaytirish(4, 6) -> 24

// 6. Bitta parametrli arrow function yozing (qavssiz sintaksis
//    ishlatiladigan holatni ko'rsating): "kvadrat" soni x ni x*x qiladi.

// 7. "juftmi" nomli funksiya yozing: son juft bo'lsa true, aks holda
//    false qaytarsin (return orqali).

// 8. Default parametr qiymatiga ega funksiya yozing:
//    salomlash(ism = "Mehmon") -> "Salom, Mehmon!" (agar ism berilmasa).

// 9. "yosh" parametrini oluvchi va agar 18 dan katta bo'lsa "Voyaga
//    yetgan", aks holda "Voyaga yetmagan" qaytaruvchi funksiya yozing.

// 10. Hech narsa qaytarmaydigan (faqat console.log qiladigan) va
//     qiymat qaytaradigan (return) funksiyalar orasidagi farqni
//     ikkita alohida funksiya yozib ko'rsating.

/* ============================================================
   * O'RTACHA DARAJA (11 - 50)
   ============================================================ */

// 11. "eng katta" ismli funksiya yozing: uchta sonni parametr sifatida
//     oladi va ulardan eng kattasini qaytaradi (if/else bilan).

// 12. Massiv elementlarini yig'indisini hisoblovchi "yigindi(arr)"
//     funksiyasini yozing (for loop bilan, reduce ishlatmasdan):
const arr1_11 = [3, 5, 8, 2, 10];

// 13. Massivdagi barcha juft sonlarni topib, yangi array qaytaruvchi
//     "juftlarniTop(arr)" funksiyasini yozing.

// 14. String parametr oluvchi va uni teskari qilib qaytaruvchi
//     "teskariString(str)" funksiyasini yozing (for/while bilan).

// 15. Sonning faktorialini hisoblovchi "faktorial(n)" funksiyasini
//     yozing (oddiy for loop bilan, hali rekursiyasiz).

// 16. Berilgan sonlar array'idan eng kichik va eng katta qiymatlarni
//     bitta obyekt shaklida ({min, max}) qaytaruvchi funksiya yozing.

// 17. Rest parametr (`...args`) yordamida istalgan sonda argument
//     qabul qiluvchi va ularning yig'indisini qaytaruvchi
//     "yigindiHar(...sonlar)" funksiyasini yozing.

// 18. Massiv va funksiyani parametr sifatida oluvchi "harBiriga(arr, fn)"
//     nomli o'z callback-funksiyangizni yozing (forEach'ni o'zingiz
//     qayta yozing).

// 19. Massiv va shart funksiyasini oluvchi "filtrla(arr, fn)" nomli
//     o'zingizning filter() analogingizni yozing.

// 20. Massiv va funksiyani oluvchi "aylantir(arr, fn)" nomli
//     o'zingizning map() analogingizni yozing.

// 21. IIFE (Immediately Invoked Function Expression) yordamida
//     e'lon qilinishi bilanoq ishga tushadigan funksiya yozing, u
//     "Dastur ishga tushdi!" deb chiqarsin.

// 22. Funksiyani boshqa funksiyaga parametr sifatida uzatish
//     (callback) misolini yozing: "ishlaBajar(vazifa, callback)" —
//     vazifa bajarilgach callback chaqirilsin.

// 23. Funksiyadan boshqa funksiya qaytarish (funksiya obyekti sifatida)
//     misolini yozing: "kopaytiruvchiYarat(son)" chaqirilganda, kelgan
//     sonni "son" ga ko'paytiradigan yangi funksiya qaytarsin.

// 24. Closure (yopiq muhit) tushunchasini ko'rsatuvchi oddiy
//     "hisoblagichYarat()" funksiyasini yozing: u chaqirilganda
//     oshir() va korish() metodlariga ega obyekt qaytarsin, son esa
//     tashqi doiraga chiqmasdan saqlansin.

// 25. Arrow function bilan oddiy function orasidagi "this" farqini
//     bir obyekt ichida ko'rsatuvchi misol yozing.

// 26. "String" ni parametr sifatida olib, undagi unlilar sonini
//     sanovchi "unliSon(str)" funksiyasini yozing.

// 27. Massiv ichidan berilgan qiymatni qidiruvchi va uning indeksini
//     qaytaruvchi (topilmasa -1) "topIndeks(arr, qiymat)" funksiyasini
//     yozing (indexOf ishlatmasdan, for loop bilan).

// 28. Ikki massivni birlashtiruvchi va takroriy elementlarni olib
//     tashlovchi "birlashtir(arr1, arr2)" funksiyasini yozing.

// 29. Sonlar array'ini parametr sifatida olib, ularning o'rtacha
//     qiymatini (average) qaytaruvchi funksiya yozing.

// 30. "asosiySonmi(n)" — berilgan son tub (prima) sonmi yoki yo'qligini
//     tekshiruvchi funksiyani yozing (for loop bilan).

// 31. Funksiya ichida try/catch ishlatib, agar parametr son bo'lmasa
//     xato tashlaydigan (throw) "faqatSon(qiymat)" funksiyasini yozing.

// 32. Obyektlar array'idan (talabalar) o'rtacha bahoni hisoblovchi
//     funksiya yozing:
const talabalar1 = [
  { ism: "Ali", baho: 4 },
  { ism: "Vali", baho: 5 },
  { ism: "Guli", baho: 3 },
];

// 33. Named function expression yozing (funksiya o'ziga ichkarida
//     nom orqali murojaat qila oladigan qilib) — masalan faktorialni
//     shu uslubda rekursiv chaqiring.

// 34. Arguments obyekti (yoki rest parametr) yordamida funksiyaga
//     necha ta argument uzatilganini sanovchi funksiya yozing.

// 35. Funksiyalar massivini (array of functions) ketma-ket bittalab
//     chaqiruvchi "bajarHammasini(fnArray)" funksiyasini yozing.

// 36. String parametrni olib, uni katta harflar bilan boshlanadigan
//     har bir so'zga aylantiruvchi (capitalize) funksiya yozing:
//     "salom dunyo" -> "Salom Dunyo"

// 37. Ikki funksiyani "birlashtiruvchi" (compose) funksiya yozing:
//     compose(f, g)(x) === f(g(x)) bo'lsin.

// 38. Massiv elementlarini ma'lum shart bo'yicha ikkiga (true/false)
//     ajratuvchi "ikkigaAjrat(arr, fn)" funksiyasini yozing.

// 39. setTimeout bilan ishlaydigan oddiy "kutib bajar" funksiyasini
//     yozing: 2 soniyadan keyin "Vaqt tugadi!" deb chiqarsin.

// 40. Funksiya default parametr sifatida boshqa parametrga bog'liq
//     qiymat olishi mumkinligini ko'rsating:
//     function hisobla(narx, chegirma = narx * 0.1) {...}

// 41. Bir nechta parametrni destructuring orqali qabul qiluvchi
//     funksiya yozing: function korsat({ism, yosh, shahar}) {...}

// 42. Massivni destructuring orqali parametr sifatida qabul qiluvchi
//     funksiya yozing: function ikkita([a, b]) {...}

// 43. Palindrome (orqa-oldinga bir xil o'qiladigan) so'zni
//     aniqlovchi "palindrom(str)" funksiyasini yozing.

// 44. Sonlar array'idan faqat tub sonlarni ajratib qaytaruvchi
//     funksiya yozing (30-mashqdagi asosiySonmi'dan foydalaning).

// 45. Ikki sana (yil, oy, kun obyektlari) orasidagi farqni kunlarda
//     hisoblovchi funksiya yozing (oddiy taxminiy hisob-kitob bilan).

// 46. String massividan eng uzun so'zni qaytaruvchi funksiya yozing:
const sozlar1 = ["salom", "dunyo", "dasturlash", "js"];

// 47. Funksiya ichida yana bir funksiya e'lon qilib (nested function),
//     tashqi funksiya ichki funksiyani chaqiradigan misol yozing.

// 48. Generator funksiya (function*) yordamida 1 dan 5 gacha sonlarni
//     birma-bir "yield" qiluvchi oddiy generator yozing.

// 49. Async/await asosida 1 soniyadan keyin "Ma'lumot yuklandi"
//     degan xabarni qaytaruvchi async funksiya yozing.

// 50. Promise qaytaruvchi funksiya yozing: son musbat bo'lsa
//     resolve, manfiy bo'lsa reject qilsin.

/* ============================================================
   * QIYIN DARAJA (51 - 90)
   ============================================================ */

// 51. Rekursiya yordamida Fibonachchi ketma-ketligining n-elementini
//     topuvchi "fibonachchi(n)" funksiyasini yozing.

// 52. Yuqoridagi fibonachchi funksiyasini memoization (natijalarni
//     keshlash) yordamida optimallashtiring — katta n uchun tez
//     ishlashi kerak.

// 53. Debounce funksiyasini o'zingiz yozing: "debounce(fn, kutish)" —
//     fn faqat oxirgi chaqiruvdan "kutish" millisekund o'tgach ishga
//     tushsin (masalan qidiruv input uchun).

// 54. Throttle funksiyasini o'zingiz yozing: "throttle(fn, oraliq)" —
//     fn belgilangan oraliqda faqat bir marta ishlasin, chaqiruvlar
//     tez-tez bo'lsa ham.

// 55. Curry qiluvchi umumiy "curry(fn)" funksiyasini yozing — u
//     istalgan sonli parametrli funksiyani curry shakliga o'tkazsin:
//     curry(qoshish)(2)(3) === qoshish(2, 3)

// 56. Rekursiv "chuqurYigindi(arr)" funksiyasini yozing — u ichma-ich
//     (nested) massivlardagi barcha sonlarning yig'indisini topsin:
const nestedArr1 = [1, [2, 3, [4, 5]], 6, [7, [8, [9]]]];

// 57. Berilgan funksiyani faqat bir marta ishlaydigan qilib
//     o'raydigan "once(fn)" funksiyasini yozing — qayta chaqirilsa
//     birinchi natijani qaytarsin, fn qayta ishlamasin.

// 58. "pipe(...fns)" funksiyasini yozing — bir nechta funksiyani
//     ketma-ket (chapdan o'ngga) bajaradigan yangi funksiya qaytarsin.

// 59. Rekursiv "chuqurlik(arr)" funksiyasini yozing — nested
//     massivning maksimal ichma-ichlik darajasini hisoblasin.

// 60. Async/await va try/catch yordamida fetch() so'rovini
//     simulyatsiya qiluvchi (Promise orqali) funksiya yozing, xato
//     yuz berganda catch bloki ishga tushishini isbotlang.

// 61. Bir nechta Promise'larni parallel bajaruvchi va barchasi
//     tugagach natijani qaytaruvchi kodni Promise.all() yordamida
//     yozing (kamida 3 ta soxta async vazifa bilan).

// 62. Promise.race() dan foydalanib, eng tez bajarilgan vazifa
//     natijasini qaytaruvchi misol yozing.

// 63. Generator funksiya yordamida cheksiz (infinite) sonlar
//     ketma-ketligini (0, 1, 2, 3...) yaratuvchi generator yozing va
//     undan faqat birinchi 5 tasini oling.

// 64. Rekursiya yordamida massivni "tekislash" (flatten) qiluvchi
//     "tekislash(arr)" funksiyasini yozing (Array.flat() ishlatmasdan):
const nestedArr2 = [1, [2, [3, [4, [5]]]]];

// 65. Funksiyalar kompozitsiyasidan (pipe/compose) foydalanib,
//     "matnniTozala" funksiyasini yozing: bo'sh joylarni olib
//     tashlash -> kichik harfga o'tkazish -> so'zlarni ajratish kabi
//     bir nechta qadamlarni birlashtiring.

// 66. Rekursiv backtracking yordamida berilgan array elementlarining
//     barcha kombinatsiyalarini (subsets) qaytaruvchi funksiya yozing:
//     [1,2,3] -> [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

// 67. Rekursiv yordamida berilgan array elementlarining barcha
//     permutatsiyalarini (o'rin almashtirishlarini) qaytaruvchi
//     funksiya yozing: [1,2,3] -> barcha 6 xil tartib.

// 68. "retry(fn, urinishlarSoni)" funksiyasini yozing — agar fn
//     (Promise qaytaruvchi async funksiya) xato bersa, belgilangan
//     marta qayta urinib ko'rsin.

// 69. Callback-based funksiyani Promise-based funksiyaga
//     aylantiruvchi (promisify) o'zingizning "promisify(fn)"
//     funksiyangizni yozing.

// 70. Rekursiv "binaryQidiruv(arr, qiymat)" funksiyasini yozing —
//     saralangan massivda binary search algoritmini amalga oshiring.

// 71. Rekursiv "quickSort(arr)" funksiyasini yozing — massivni
//     tezkor saralash algoritmi bilan tartiblang.

// 72. Rekursiv "mergeSort(arr)" funksiyasini yozing — massivni
//     birlashtirib saralash algoritmi bilan tartiblang.

// 73. Funksiya argumentlari sonini avtomatik aniqlab (fn.length),
//     kerakli sonda argument to'planguncha kutuvchi "curryN(fn)"
//     universal curry funksiyasini yozing (55-mashqdan farqli, N ta
//     argumentli har qanday funksiya uchun ishlasin).

// 74. Rekursiya yordamida ikki sonning eng katta umumiy bo'luvchisini
//     (EKUB / GCD) topuvchi funksiya yozing.

// 75. Xotira sarfini kamaytirish uchun "lazy" (kech baholanuvchi)
//     qiymat yaratuvchi funksiya yozing: getValue() birinchi marta
//     chaqirilganda hisoblansin, keyingi chaqiruvlarda keshdan olsin.

// 76. Rekursiv "chuqurTenglik(a, b)" funksiyasini yozing — ikki
//     qiymatni (obyekt, array yoki primitive bo'lishidan qat'iy
//     nazar) chuqur solishtiring.

// 77. Async funksiyalar ketma-ketligini (sequential) — har biri
//     avvalgisi tugagandan keyin ishga tushadigan qilib — bajaruvchi
//     "ketmaKetBajar(asyncFnArray)" funksiyasini yozing.

// 78. "timeout(promise, ms)" funksiyasini yozing — agar promise
//     berilgan vaqt ichida bajarilmasa, avtomatik reject bo'lsin
//     (Promise.race yordamida).

// 79. Funksiyani chaqirilgan vaqtini (necha millisekund ishlaganini)
//     o'lchab konsolga chiqaruvchi "vaqtOlchash(fn)" wrapper
//     funksiyasini yozing.

// 80. Rekursiv "dvoichgaOtkaz(n)" funksiyasini yozing — o'nlik sonni
//     ikkilik (binary) sanoq sistemasidagi string'ga aylantiring
//     (Number.toString(2) ishlatmasdan).

// 81. Currying va closure yordamida "validatorYarat" funksiyasini
//     yozing: validatorYarat("required")(qiymat) kabi zanjirlanuvchi
//     validatsiya funksiyalari hosil qiladigan tizim tuzing.

// 82. Rekursiv "objectDeepMap(obj, fn)" funksiyasini yozing — nested
//     obyektdagi barcha (eng ichki) qiymatlarga fn funksiyasini
//     qo'llab, yangi obyekt qaytarsin.

// 83. Callback "hell" (chuqur ichma-ich callback) kodini avval yozib,
//     keyin uni Promise chain (.then()) ga, so'ngra async/await ga
//     aylantirib, uchala usulni solishtiring.

// 84. Generator funksiya va "yield*" (delegatsiya) yordamida ikkita
//     alohida generatorni birlashtirib ishlatuvchi misol yozing.

// 85. Funksiya argumentlarini avtomatik tekshiradigan (type-check
//     qiluvchi) "typedFunction(fn, turlar)" wrapper'ini yozing —
//     agar argument turi mos kelmasa xato tashlasin.

// 86. Rekursiv "toʻliqYigindi(...args)" funksiyasini yozing — u
//     curry uslubida ishlasin va argumentlar tugaganda (parametrsiz
//     chaqirilganda) yig'indini qaytarsin:
//     yigindi(1)(2)(3)() === 6

// 87. Rate limiting (chastota cheklash) tizimini funksiya sifatida
//     yozing: "rateLimiter(fn, maxChaqiruv, oraliqMs)" — belgilangan
//     oraliqda faqat maxChaqiruv marta ishlashga ruxsat bersin.

// 88. Async generator funksiya (async function*) yordamida ma'lumotni
//     "sahifalab" (paginated) birma-bir yetkazib beruvchi misol
//     yozing (har safar soxta kechikish bilan).

// 89. Funksional dasturlash uslubida "reduce" ni o'zingiz qaytadan
//     yozing: "mReduce(arr, fn, boshlangichQiymat)".

// 90. Rekursiv backtracking yordamida "N ta qirol masalasi" (N-Queens)
//     ning eng oddiy versiyasini (masalan 4x4 taxta uchun bitta
//     yechim topish) yozing.

/* ============================================================
   * JUDA MURAKKAB DARAJA (91 - 100)
   ============================================================ */

// 91. To'liq funksional middleware tizimini (Express.js uslubidagi
//     "next()" chaqiruvchi zanjir) oddiy funksiyalar yordamida
//     qurib chiqing: "createApp()" -> use(fn) -> run(req) ketma-ket
//     middleware'larni ishga tushirsin.

// 92. Funksional dasturlashga asoslangan mini "state reducer" tizimi
//     yozing: bir nechta "action" turlarini qabul qiluvchi va
//     immutable holda yangi state qaytaruvchi reducer(state, action)
//     funksiyasini, unga mos createStore() bilan birga yarating.

// 93. To'liq ishlaydigan "async task queue" (vazifalar navbati)
//     tizimini yozing: vazifalar birma-bir (yoki belgilangan
//     concurrency limit bilan parallel) navbatda bajarilsin.

// 94. Trampoline texnikasidan foydalanib, juda katta n uchun stack
//     overflow bermaydigan rekursiv faktorial/fibonachchi funksiyasini
//     qayta yozing (tail-call optimizatsiyasiz muhitda ishlaydigan
//     qilib).

// 95. To'liq funksional "event-driven" mini frameworkni funksiyalar
//     va closure asosida yarating: createEmitter() -> on/off/emit,
//     bir nechta listener bir xil eventga ulanganda ham to'g'ri
//     ishlashi kerak, xotira sizmasligi (memory leak) uchun off()
//     to'g'ri tozalashi lozim.

// 96. Rekursiv parser yozing: oddiy matematik ifodani (masalan
//     "3 + 4 * 2") string sifatida qabul qilib, operator ustuvorligini
//     hisobga olgan holda natijani hisoblab beruvchi funksiya
//     (eval() ishlatmasdan, o'zingiz tokenlashtirib hisoblang).

// 97. Funksional dasturlash uslubidagi "lens" (linzalar) konsepsiyasini
//     amalga oshiring: createLens(getter, setter) yordamida chuqur
//     nested obyekt propertysini immutable tarzda o'qish/yozish
//     imkonini beruvchi tizim yarating.

// 98. To'liq "dependency injection" konteynerini funksiyalar asosida
//     yarating: register(nom, factory) va resolve(nom) metodlari
//     bo'lsin, bog'liqliklar (dependencies) avtomatik aniqlanib
//     in'ektsiya qilinsin.

// 99. Coroutine-uslubidagi kooperativ "scheduler" (vazifa
//     rejalashtiruvchi) yozing: bir nechta generator-funksiyalarni
//     navbat bilan bittadan qadam bajarib, ular orasida "almashtirib"
//     ishga tushiring (cooperative multitasking simulyatsiyasi).

// 100. To'liq mustaqil mini "reactive stream" (masalan RxJS'ga
//      o'xshash) kutubxonasini funksiyalar asosida yarating:
//      createStream() -> map(), filter(), subscribe() metodlari
//      zanjir (chain) shaklida ishlasin va vaqt o'tishi bilan kelgan
//      qiymatlarni to'g'ri qayta ishlasin.
