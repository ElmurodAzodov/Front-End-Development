/* ============================================================
   * JAVASCRIPT OBJECT — 100 TA TOPSHIRIQ
   * 10 ta oson | 40 ta o'rtacha | 40 ta qiyin | 10 ta juda murakkab
   ============================================================ */

/* ============================================================
    * OSON DARAJA (1 - 10)
   ============================================================ */

// 1. "talaba" nomli object yarating: ism, yosh, kurs xususiyatlari bilan.
//    Barcha qiymatlarni konsolga chiqaring.

// 2. Berilgan object'ga yangi property qo'shing:
const mahsulot1 = { nomi: "Noutbuk", narx: 8000000 };
// "rang" nomli property qo'shing va konsolga chiqaring.

// 3. Yuqoridagi mahsulot1 dan "narx" propertysini o'chiring (delete).

// 4. Object'dagi propertyni dot va bracket notation orqali o'qing:
const kitob1 = { muallif: "Oybek", nomi: "Navoiy" };
// ikkala usulda ham "nomi" ni chiqaring.

// 5. "in" operatori yordamida object'da property mavjudligini tekshiring:
const inson1 = { ism: "Laylo" };
// "yosh" propertysi mavjudligini tekshiring.

// 6. hasOwnProperty() metodidan foydalanib, object'da "email" propertysi
//    borligini tekshiruvchi kod yozing.
const foydalanuvchi1 = { ism: "Sardor", email: "sardor@mail.uz" };

// 7. Object.keys() yordamida quyidagi object'ning barcha kalitlarini
//    array shaklida konsolga chiqaring:
const shahar1 = { nomi: "Xiva", aholi: 90000, viloyat: "Xorazm" };

// 8. Object.values() yordamida yuqoridagi shahar1 obyektining
//    barcha qiymatlarini chiqaring.

// 9. Oddiy object destructuring yordamida quyidagidan "ism" va "yosh"ni
//    alohida o'zgaruvchilarga ajratib oling:
const talaba1 = { ism: "Dilnoza", yosh: 20, fakultet: "Filologiya" };

// 10. JSON.stringify() yordamida quyidagi object'ni JSON-string'ga
//     aylantiring va konsolga chiqaring:
const mashina1 = { marka: "Cobalt", yil: 2021 };

/* ============================================================
   * O'RTACHA DARAJA (11 - 50)
   ============================================================ */

// 11. Object.entries() yordamida obyektdagi har bir key-value juftligini
//     "key: value" formatida konsolga chiqaring:
const mamlakat1 = { nomi: "O'zbekiston", poytaxt: "Toshkent", til: "O'zbek" };

// 12. Object.assign() yordamida ikkita obyektni birlashtiring:
const shaxsiy1 = { ism: "Aziz", yosh: 24 };
const ish1 = { lavozim: "Dasturchi", staj: 3 };
// ikkalasini bitta yangi obyektga birlashtiring (asl obyektlarga tegmasdan).

// 13. Spread operator (...) yordamida yuqoridagi shaxsiy1 va ish1 ni
//     birlashtiring va natijaga "manzil: 'Toshkent'" ham qo'shing.

// 14. Quyidagi obyektdan faqat "narx" ni ajratib, qolganini rest operator
//     bilan yig'ib oling:
const buyum1 = {
  nomi: "Stol",
  narx: 450000,
  rang: "Jigarrang",
  material: "Yog'och",
};

// 15. Object ichida metod yozing: "hisoblagich" obyekti "son: 0" bilan
//     boshlanadi, "oshir()" metodi chaqirilganda son 1 ga oshsin.

// 16. Yuqoridagi hisoblagich obyektiga "kamayt()" metodini ham qo'shing,
//     u chaqirilganda son 1 ga kamaysin.

// 17. Getter yordamida "to'rtburchak" obyekti yarating: en va bo'yi
//     propertylari bo'lsin, "yuza" esa avtomatik hisoblansin (get orqali).

// 18. Yuqoridagi "to'rtburchak" obyektiga setter qo'shing: "yuza" ga
//     yangi qiymat berilganda xato chiqarilsin ("yuza avtomatik hisoblanadi").

// 19. Nested (ichma-ich) obyekt yarating:
//     kompaniya = { nomi, manzil: { shahar, kocha }, xodimlarSoni }
//     va "manzil.shahar" ni konsolga chiqaring.

// 20. Optional chaining (?.) yordamida quyidagi obyektdan mavjud bo'lmagan
//     ichki propertyni xatosiz o'qing:
const user1 = { ism: "Bekzod" };
// user1.manzil.shahar ni xavfsiz o'qing.

// 21. Nullish coalescing (??) yordamida quyidagi qiymat uchun default
//     belgilang (0 qiymat saqlanishi kerak, || ishlatilmasin):
const sozlama1 = { ovoz: 0 };

// 22. for...in tsikli yordamida obyektdagi barcha key va value larni
//     chiqaring:
const kitob2 = { nomi: "Sarob", muallif: "Abdulla Qahhor", yil: 1937 };

// 23. Object.freeze() yordamida obyektni o'zgarmas qiling va uni
//     o'zgartirishga urinib ko'ring, natijani izohlang:
const konfig1 = { til: "uz", versiya: 1 };

// 24. Object.seal() bilan Object.freeze() farqini kod orqali isbotlang:
//     ikkala obyektda ham yangi property qo'shishga va mavjudini
//     o'zgartirishga urinib ko'ring.

// 25. Ikki xil obyekt yaratib, ularni Object.is() yordamida solishtiring
//     va natijani === bilan solishtirish natijasi bilan taqqoslang
//     (NaN va -0 misolida).

// 26. Array ichidagi obyektlar bo'yicha "narx" larning yig'indisini
//     Object.values() yoki reduce yordamida hisoblang:
const savatcha1 = { non: 3000, sut: 12000, tuxum: 25000, yog: 18000 };

// 27. Funksiya yozing: u obyekt qabul qiladi va destructuring orqali
//     parametrlarni oladi:
//     function chiqar({ism, yosh}) { ... }
//     kamida 3 xil obyekt bilan sinab ko'ring.

// 28. Default qiymat bilan destructuring qiling:
const buyurtma1 = { mahsulot: "Telefon" };
// { mahsulot, soni = 1 } shaklida destructure qiling.

// 29. Nested destructuring orqali quyidagidan "shahar" ni to'g'ridan-to'g'ri
//     olib chiqing:
const profil1 = {
  ism: "Kamola",
  manzil: { shahar: "Buxoro", kocha: "Bahoriston" },
};

// 30. Object.fromEntries() yordamida quyidagi array'dan obyekt yasang:
const juftlik1 = [
  ["ism", "Rustam"],
  ["yosh", 28],
  ["shahar", "Farg'ona"],
];

// 31. Object.getOwnPropertyNames() metodidan foydalanib, quyidagi
//     obyektning barcha property nomlarini chiqaring (array uchun ham
//     sinab ko'ring):
const arr1 = [10, 20, 30];

// 32. Object.defineProperty() yordamida "narx" propertysini writable:
//     false qilib belgilang va uni o'zgartirishga urinib ko'ring:
const mahsulot2 = {};

// 33. Ikkita massiv obyektlarini (array of objects) Object.assign()
//     yordamida emas, balki spread bilan birlashtirib, yangi array hosil
//     qiling:
const royxat1 = [{ id: 1 }, { id: 2 }];
const royxat2 = [{ id: 3 }];

// 34. Quyidagi obyektni JSON.stringify() bilan chiroyli formatda
//     (indentatsiya bilan, 2 bo'sh joy) konsolga chiqaring:
const talaba2 = { ism: "Shahnoza", fanlar: ["Matematika", "Fizika"] };

// 35. JSON.parse() yordamida quyidagi JSON-stringni qayta obyektga
//     aylantiring va "yosh" propertysini chiqaring:
const jsonMatn1 = '{"ism":"Ozoda","yosh":19}';

// 36. call() metodi yordamida bitta funksiyani ikkita turli obyektga
//     bog'lab chaqiring (this orqali ism farq qilsin).

// 37. apply() metodi yordamida argumentlarni array shaklida uzatib,
//     funksiyani chaqiring.

// 38. bind() metodi yordamida "doimiy this" ga ega yangi funksiya yarating
//     va uni keyinroq chaqiring.

// 39. Object ichidagi arrow function bilan oddiy function orasidagi
//     "this" farqini amaliy misolda ko'rsating (ikkalasi ham "ism"ni
//     chiqarishga harakat qilsin).

// 40. hasOwnProperty() va "in" operatori orasidagi farqni ko'rsatuvchi
//     misol yozing (prototype orqali meros qilingan property bilan).

// 41. Massiv ichidagi obyektlarni "yosh" bo'yicha saralang (sort):
const guruh1 = [
  { ism: "Ali", yosh: 22 },
  { ism: "Vali", yosh: 19 },
  { ism: "Guli", yosh: 25 },
];

// 42. Massiv ichidagi obyektlardan faqat "yosh" 20 dan katta bo'lganlarini
//     filter() yordamida ajratib oling (yuqoridagi guruh1 dan foydalaning).

// 43. Massiv ichidagi obyektlarning faqat "ism" larini map() yordamida
//     yangi array qilib chiqaring (guruh1 dan foydalaning).

// 44. Obyektlar array'ini reduce() yordamida bitta obyektga
//     (id -> object) aylantiring:
const mahsulotlar1 = [
  { id: 1, nomi: "A" },
  { id: 2, nomi: "B" },
];

// 45. Ikki obyektni solishtiruvchi funksiya yozing: ularning barcha
//     key-value juftliklari bir xil bo'lsa true qaytarsin (faqat 1-daraja,
//     JSON.stringify orqali solishtirish mumkin).

// 46. Obyektdagi barcha qiymatlarni katta harfga o'tkazuvchi funksiya
//     yozing (faqat string qiymatlar uchun):
const malumot1 = { ism: "botir", shahar: "namangan" };

// 47. Object.values() va reduce() yordamida obyektdagi eng katta
//     raqamli qiymatni toping:
const natijalar1 = { mat: 85, fizika: 92, kimyo: 78, biologiya: 88 };

// 48. Obyektning kalitlari sonini (property miqdorini) hisoblovchi
//     funksiya yozing.

// 49. Ikki obyektning umumiy (bir xil) kalitlarini topuvchi funksiya
//     yozing:
const obj1_49 = { a: 1, b: 2, c: 3 };
const obj2_49 = { b: 20, c: 30, d: 40 };

// 50. Obyektni array shakliga ("key=value" formatidagi string array)
//     aylantiruvchi funksiya yozing (Object.entries() dan foydalaning).

/* ============================================================
   * QIYIN DARAJA (51 - 90)
   ============================================================ */

// 51. structuredClone() yoki JSON usuli yordamida chuqur (deep copy)
//     nusxa oluvchi funksiya yozing va uni quyidagi nested obyektda
//     sinab ko'ring, keyin nusxadagi o'zgarish aslga ta'sir qilmasligini
//     isbotlang:
const kompaniya1 = {
  nomi: "EduTech",
  manzil: { shahar: "Namangan", index: "160100" },
  xodimlar: [{ ism: "Off1" }, { ism: "Off2" }],
};

// 52. O'zingizning deepClone() funksiyangizni structuredClone() dan
//     FOYDALANMASDAN, rekursiya orqali yozing (obyekt, array va
//     primitive qiymatlarni hisobga oling).

// 53. Ikki obyektni chuqur (deep) solishtiruvchi deepEqual(obj1, obj2)
//     funksiyasini rekursiya yordamida yozing (JSON.stringify ishlatmang).

// 54. Nested obyekt ichidagi barcha qiymatlarni (chuqurligidan qat'iy
//     nazar) yig'ib, flat (tekis) bitta obyektga aylantiruvchi
//     flattenObject() funksiyasini yozing. Masalan:
//     { a: 1, b: { c: 2, d: { e: 3 } } } -> { a: 1, "b.c": 2, "b.d.e": 3 }

// 55. deepFreeze() funksiyasini yozing — u nafaqat obyektning o'zini,
//     balki barcha ichki (nested) obyektlarni ham rekursiv tarzda
//     "muzlatadi" (Object.freeze faqat 1-darajani muzlatadi, esda tuting).

// 56. Obyektlar array'idan dublikatlarni (bir xil "id" ga ega
//     elementlarni) olib tashlovchi funksiya yozing.

// 57. Chuqurlik darajasi noma'lum bo'lgan (deeply nested) obyektdan
//     berilgan "yo'l" (masalan "a.b.c") bo'yicha qiymatni topuvchi
//     getByPath(obj, path) funksiyasini yozing.

// 58. Yuqoridagi getByPath ga qarama-qarshi bo'lgan setByPath(obj, path,
//     value) funksiyasini yozing — u berilgan yo'l bo'yicha (kerak bo'lsa
//     yangi ichki obyektlar yaratib) qiymat o'rnatadi.

// 59. Obyektdagi barcha funksiya (metod) bo'lgan propertylarni ajratib,
//     faqat metod nomlaridan iborat array qaytaruvchi funksiya yozing.

// 60. Obyektni prototype zanjiri (prototype chain) bo'yicha to'liq
//     aylanib, barcha meros qilingan va o'ziga tegishli propertylarni
//     (hatto enumerable bo'lmaganlarini ham) chiqaruvchi funksiya yozing.

// 61. Currying yordamida "obyekt generator" yarating: masalan
//     createUser(ism)(yosh)(shahar) chaqirilganda oxirida
//     { ism, yosh, shahar } obyektini qaytarsin.

// 62. Memoization (natijani keshlash) texnikasidan foydalanib, og'ir
//     hisob-kitob qiluvchi funksiya natijasini obyektda saqlovchi
//     memoize(fn) funksiyasini yozing.

// 63. Obyektlar array'ini berilgan bir nechta key bo'yicha (masalan
//     avval "fakultet", keyin "yosh" bo'yicha) saralovchi universal
//     multiSort(array, keys) funksiyasini yozing.

// 64. Obyektni ikkita qismga — faqat funksiyalardan va faqat oddiy
//     qiymatlardan iborat ikkita alohida obyektga ajratuvchi funksiya
//     yozing.

// 65. Observer pattern asosida oddiy "kuzatiluvchi obyekt" yarating:
//     obyekt propertysi o'zgarganda konsolga xabar chiqishi kerak
//     (Object.defineProperty getter/setter orqali amalga oshiring).

// 66. Proxy obyektidan foydalanib, mavjud bo'lmagan propertyga
//     murojaat qilinganda "Bunday xususiyat mavjud emas" degan xabar
//     qaytaruvchi obyekt yarating.

// 67. Proxy yordamida "faqat o'qish uchun" (read-only) obyekt yarating —
//     har qanday o'zgartirishga urinishda xato tashlansin (Object.freeze
//     ishlatmasdan, Proxy orqali).

// 68. Obyektlar array'ini "guruhlash" (group by) funksiyasini yozing:
//     masalan, talabalar array'ini "fakultet" bo'yicha guruhlash,
//     natija { fakultet1: [...], fakultet2: [...] } shaklida bo'lsin.

// 69. Ikki nested obyektni "merge" qiluvchi (chuqur birlashtiruvchi)
//     deepMerge(obj1, obj2) funksiyasini yozing — ichki obyektlar ham
//     to'g'ri birlashishi kerak (Object.assign yetarli emas).

// 70. WeakMap yordamida obyektlarga "maxfiy" (private) ma'lumot
//     bog'lovchi oddiy misol yozing (masalan har bir obyektga alohida
//     hisoblagich).

// 71. Obyekt propertylarini alifbo tartibida saralab, yangi tartiblangan
//     obyekt qaytaruvchi funksiya yozing.

// 72. Chuqur ichma-ich obyektdagi barcha "null" yoki "undefined"
//     qiymatlarga ega propertylarni rekursiv tarzda olib tashlovchi
//     removeEmpty(obj) funksiyasini yozing.

// 73. Ikki versiyadagi (eski va yangi) obyektlarni solishtirib, qaysi
//     propertylar o'zgargani, qo'shilgani va o'chirilganini aniqlovchi
//     diff(oldObj, newObj) funksiyasini yozing.

// 74. Obyektdagi barcha son (number) qiymatlarni rekursiv tarzda
//     2 baravar oshiruvchi funksiya yozing (nested obyektlarni ham
//     hisobga oling).

// 75. Class va getter/setter yordamida "BankHisob" obyektini yarating:
//     balans manfiy bo'lishi mumkin emas (setter orqali tekshiring),
//     pul yechish/qo'yish metodlari bo'lsin.

// 76. Obyektlar array'idan "eng ko'p takrorlangan" qiymatga ega
//     propertyni (masalan eng ko'p uchraydigan "shahar") topuvchi
//     funksiya yozing.

// 77. Rekursiv funksiya yordamida ichma-ich obyektning "maksimal
//     chuqurligini" (nechta daraja ichma-ich ekanligini) hisoblang.

// 78. Obyektni immutable (o'zgarmas) tarzda yangilovchi funksiya yozing:
//     u asl obyektga tegmasdan, faqat berilgan propertyni o'zgartirilgan
//     YANGI obyekt qaytarsin (spread + rekursiya, nested path uchun ham).

// 79. Event Emitter (voqealarni tinglash) oddiy tizimini obyekt asosida
//     yarating: on(event, callback), emit(event, data) metodlari bo'lsin.

// 80. Obyektlar array'ini "pagination" (sahifalash) qiluvchi funksiya
//     yozing: array, sahifaRaqami, sahifaHajmi parametrlarini oladi.

// 81. Chain (zanjir) usulida ishlaydigan "Calculator" obyekti yarating:
//     calc.add(5).subtract(2).multiply(3).getResult() kabi chaqiruvlar
//     ishlashi kerak (har metod "this" qaytarsin).

// 82. Obyektga asoslangan oddiy "State Machine" (holatlar mashinasi)
//     yarating: masalan buyurtma holati "yangi -> tayyorlanmoqda ->
//     yetkazilmoqda -> yakunlandi" tartibida o'zgarsin, noto'g'ri
//     o'tishga xato chiqsin.

// 83. Obyektlar array'idagi ma'lumotlarni CSV formatidagi string'ga
//     aylantiruvchi funksiya yozing (birinchi qator — key nomlar).

// 84. Yuqoridagi vazifaga teskari: CSV formatidagi string'ni obyektlar
//     array'iga aylantiruvchi funksiya yozing.

// 85. Obyekt ichidagi funksiyalarni avtomatik "this" ga bog'lovchi
//     (auto-bind qiluvchi) funksiya yozing — barcha metodlar qaysi
//     kontekstda chaqirilishidan qat'iy nazar to'g'ri ishlasin.

// 86. Lazy (kech) hisoblanadigan property yarating: getter birinchi marta
//     chaqirilganda og'ir hisob-kitobni bajarib, natijani keshlab
//     qo'ysin, keyingi chaqiruvlarda qayta hisoblamasin.

// 87. Obyektlar array'idan "ierarxik daraxt" (tree) tuzuvchi funksiya
//     yozing: har bir elementda "id" va "parentId" bor, natija ichma-ich
//     "children" massivlariga ega bo'lsin.

// 88. Yuqoridagi daraxtni orqaga — tekis (flat) array'ga aylantiruvchi
//     funksiya yozing.

// 89. Obyektlar orasidagi "chuqur farq" (deep diff) ni JSON Patch
//     formatiga o'xshash array (masalan
//     [{op: "replace", path: "a.b", value: 5}]) shaklida qaytaruvchi
//     funksiya yozing.

// 90. Cheklangan xotira (LRU Cache) tizimini oddiy obyekt/Map asosida
//     yarating: belgilangan hajmdan oshganda eng kam ishlatilgan
//     element avtomatik o'chirilsin.

/* ============================================================
   * MURAKKAB DARAJA (91 - 100)
   ============================================================ */

// 91. To'liq funksional "Immutable.js" uslubidagi mini kutubxona yozing:
//     obyektni "freeze qilingan" holda saqlaydigan, lekin .set(path, value)
//     chaqirilganda YANGI immutable obyekt qaytaradigan wrapper class
//     yarating (chuqur nested pathlarni qo'llab-quvvatlasin).

// 92. Obyektlar orasidagi sirkulyar (aylanma, o'z-o'ziga ishora qiluvchi)
//     bog'lanishlarni to'g'ri aniqlab, xatosiz deep clone qiluvchi
//     funksiya yozing (WeakMap yordamida allaqachon nusxalangan
//     obyektlarni kuzatib boring).

// 93. Mini "ORM" uslubidagi tizim yarating: Model class'i orqali
//     obyektlar yaratiladi, har bir property uchun validatsiya qoidalari
//     (masalan required, type, min/max) beriladi, .validate() metodi
//     barcha xatolarni array qilib qaytarsin.

// 94. Obyekt propertylariga kirish va o'zgartirishni to'liq "log"
//     qiluvchi (audit trail) Proxy asosidagi tizim yarating: har bir
//     o'qish/yozish amali vaqt belgisi bilan tarixga saqlansin.

// 95. Ikki tomonlama (bidirectional) ma'lumot bog'lash (data binding)
//     tizimini oddiy obyekt va Proxy yordamida amalga oshiring: bir
//     obyektdagi o'zgarish avtomatik ikkinchisiga sinxronlansin.

// 96. To'liq funksional "Redux'ga o'xshash" oddiy state-management
//     tizimini yarating: createStore(reducer) funksiyasi { getState,
//     dispatch, subscribe } obyektini qaytarsin, state immutable
//     tarzda yangilansin.

// 97. Obyektlar orasidagi "structural typing" ni tekshiruvchi (ya'ni
//     berilgan obyekt ma'lum "interfeys" shakliga mos keladimi-yo'qmi)
//     validateShape(obj, shape) funksiyasini rekursiv tarzda yozing.

// 98. Katta (chuqur nested) obyektni "diff + patch" tizimi orqali
//     versiyalashtiruvchi (versioning) tizim yarating: har bir o'zgarish
//     tarixi saqlansin va istalgan versiyaga qaytish (undo/redo)
//     imkoniyati bo'lsin.

// 99. Rekursiv obyekt strukturasini (masalan fayl tizimi — papkalar
//     ichida papkalar va fayllar) generator funksiya (function*)
//     yordamida "lazy" tarzda chuqur birma-bir aylanuvchi (traverse)
//     iterator yarating.

// 100. To'liq mustaqil mini "reaktiv dasturlash" (reactive programming)
//      kutubxonasi yarating: reactive(obj) funksiyasi obyektni "reaktiv"
//      qiladi, watch(obj, key, callback) esa property o'zgarganda
//      callback avtomatik ishga tushishini ta'minlasin (computed
//      propertylarni ham qo'llab-quvvatlasin).
