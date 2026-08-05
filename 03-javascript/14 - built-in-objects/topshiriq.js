
//* 1-topshiriq. Hozirgi sana va vaqtni konsolga chiqaruvchi dastur yozing.
const sana = new Date()
console.log(sana)

//* 2-topshiriq. Hozirgi yilni konsolga chiqaruvchi dastur yozing.
const hozirgiYil = new Date().getFullYear()
console.log(hozirgiYil)

//* 3-topshiriq. Hozirgi oy raqamini (0-11 oralig'ida) konsolga chiqaruvchi dastur yozing.
const hozirgiOy = new Date().getMonth()
console.log(hozirgiOy)

//* 4-topshiriq. Hozirgi kun raqamini (1-31 oralig'ida) konsolga chiqaruvchi dastur yozing.

//* 5-topshiriq. Hozirgi sanani ISO formatda (YYYY-MM-DDTHH:mm:ss.sssZ) konsolga chiqaruvchi dastur yozing.

//* 6-topshiriq. 1970-yil 1-yanvardan hozirgi vaqtgacha bo'lgan millisekundlar sonini konsolga chiqaruvchi dastur yozing.

//* 7-topshiriq. Hozirgi sanani o'zbek tilida ko'rsatuvchi dastur yozing. (Intl.DateTimeFormat dan foydalaning)

//* 8-topshiriq. Hozirgi vaqtga 5 soat qo'shib, yangi vaqtni konsolga chiqaruvchi dastur yozing.

// Math Object (9-19 topshiriqlar)
//* 9-topshiriq. Math.PI yordamida Pi sonini konsolga chiqaring.

//* 10-topshiriq. 0 va 1 oralig'ida tasodifiy son hosil qiling va konsolga chiqaring.

//* 11-topshiriq. 4.7 sonini eng yaqin butun songa yaxlitlang va natijani konsolga chiqaring.

//* 12-topshiriq. 4.9 sonini pastga (floor) yaxlitlang va natijani konsolga chiqaring.

//* 13-topshiriq. 4.1 sonini yuqoriga (ceil) yaxlitlang va natijani konsolga chiqaring.

//* 14-topshiriq. [5, 10, 3, 8] massividagi eng katta sonni toping va konsolga chiqaring.

//* 15-topshiriq. [5, 10, 3, 8] massividagi eng kichik sonni toping va konsolga chiqaring.

//* 16-topshiriq. -7 sonining absolut (modul) qiymatini toping va konsolga chiqaring.

//* 17-topshiriq. 2 ning 3-darajasini hisoblang va konsolga chiqaring.

//* 18-topshiriq. 16 ning kvadrat ildizini toping va konsolga chiqaring.

//* 19-topshiriq. 27 ning kub ildizini toping va konsolga chiqaring.

// Number Object (20-24 topshiriqlar)
//* 20-topshiriq. JavaScriptdagi maksimal xavfsiz butun sonni (MAX_SAFE_INTEGER) konsolga chiqaring.

//* 21-topshiriq. 42 soni butun son ekanligini tekshiring va natijani (true/false) konsolga chiqaring.

//* 22-topshiriq. "salom" matnini Number() yordamida songa o'girib, natija NaN ekanligini tekshiring va konsolga chiqaring.

//* 23-topshiriq. Infinity qiymati cheksiz son ekanligini tekshiring va natijani konsolga chiqaring.

//* 24-topshiriq. "3.14" matnini Number.parseFloat() yordamida haqiqiy songa o'giring va konsolga chiqaring.

// JSON Object (25-27 topshiriqlar)
//* 25-topshiriq. {name: "Ali", age: 25} ob'ektini JSON string formatiga o'giring va konsolga chiqaring.

//* 26-topshiriq. '{"name":"Ali","age":25}' JSON stringini JavaScript ob'ektiga o'giring va konsolga chiqaring.

//* 27-topshiriq. {name: "Ali", age: 25, password: "123"} ob'ektini JSON ga o'giring, faqat name va age maydonlari qolsin. (replacer funksiyasidan foydalaning)

// RegExp (28-30 topshiriqlar)
//* 28-topshiriq. "12345" matnida faqat raqamlar borligini tekshiruvchi regexp yozing va natijani konsolga chiqaring.

//* 29-topshiriq. "test@mail.com" email manzilini tekshiruvchi regexp yozing va natijani konsolga chiqaring.

//* 30-topshiriq. "Men 25 yoshdaman, 3 ta kitob o'qidim" matnidagi barcha raqamlarni topib, massiv ko'rinishida konsolga chiqaring.