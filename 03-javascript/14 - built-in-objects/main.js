
//* 1) Argumentsiz - joriy sana va vaqtni oladi
// const hozir = new Date();
// console.log(hozir); // Mon Aug 03 2026 16:31:45 GMT+0500 (Uzbekistan Standard Time)

//* 2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
// const sana1 = new Date(0); // 1970-01-01T00:00:00.000Z
// const sana2 = new Date(1000 * 60 * 60); // Epoch'dan 1 soat keyin
// console.log(sana1)
// console.log(sana2)

//* 3) Sana string (ISO 8601 formatida tavsiya etiladi)
// const sana3 = new Date("2026-08-03"); // faqat sana - UTC vaqt bo'yicha 00:00:00
// const sana4 = new Date("2026-08-03T14:30:00"); // sana + vaqt
// const sana5 = new Date("2026-08-03T14:30:00Z"); // "Z" - UTC ekanini bildiradi

// console.log(sana3)
// console.log(sana4)
// console.log(sana5)


//* 4) Yil, oy, kun, soat, minut, sekund, millisekund (alohida argumentlar)
// DIQQAT: oy 0'dan boshlanadi! (0 = Yanvar, 11 = Dekabr)
// const sana6 = new Date(2026, 7, 3, 14, 30, 50, 0); // 2026-yil, 8-oy (indeks 7), 3-kun, 14:30

// console.log(sana6); // 2026-yil 3-avgust, 14:30:00


//* 5) Faqat yil va oy (qolganlari default: kun=1, soat=0, minut=0...)
// const sana7 = new Date(2026, 0); // 2026-yil 1-yanvar, 00:00:00

// console.log(sana7)


// console.log(Date.now()); // Masalan: 1785845730000 (son, obyekt emas!)

// // Amaliy misol: kod bajarilish vaqtini o'lchash
// const boshlanish = Date.now();

// for (let i = 0; i < 1000000; i++) {
//   // og'ir hisoblash...
// }

// const tugash = Date.now();
// console.log(`Bajarildi: ${tugash - boshlanish} millisekund`);

// // Date.now() bilan "new Date().getTime()" bir xil natija beradi, lekin Date.now() tezroq
// console.log(Date.now() === new Date().getTime()); // taxminan teng (millisekund farqi bo'lishi mumkin)



//* getting

// const sana = new Date(2026, 7, 3, 14, 45, 30, 250); // 2026-yil 3-avgust, 14:45:30.250

// console.log(sana.getFullYear());   // 2026 - to'liq yil (4 xonali)
// console.log(sana.getMonth());      // 7 - oy (0-11 oralig'ida, 7 = Avgust)
// console.log(sana.getDate());       // 3 - oyning kuni (1-31)
// console.log(sana.getDay());        // 0-6 - haftaning kuni (0=Yakshanba, 1=Dushanba, ..., 6=Shanba)
// console.log(sana.getHours());      // 14 - soat (0-23)
// console.log(sana.getMinutes());    // 45 - minut (0-59)
// console.log(sana.getSeconds());    // 30 - sekund (0-59)
// console.log(sana.getMilliseconds()); // 250 - millisekund (0-999)
// console.log(sana.getTime());       // Epoch'dan boshlab millisekundlar soni (katta son)
// console.log(sana.getTimezoneOffset()); // Mahalliy vaqt zonasi bilan UTC orasidagi farq (minutlarda)

// // UTC variantlari - vaqt zonasidan qat'i nazar bir xil natija beradi
// console.log(sana.getUTCFullYear());
// console.log(sana.getUTCHours());


//* Math object

// console.log(Math.random())

// ==============================================================================
// ==============================================================================
// ==============================================================================

//& JSON

const foydalanuvchi = {
    familiyasi: "Matyokubov",
    ism: "Shoxruzbek",
    yil: 2013,
    oy: 4,
    kun: 1,
    yosh: 13,
    hobbiy: ["suvga tushish", "kompyuter o'ynash", "velosiped haydash", "darsda uxlash"],
    manzil: "temirchi mahallasi",
    kocha: "ortiq otajonov ko'chasi",
    uy: "67-uy"
}

// console.log(foydalanuvchi)

const jsonMalumot = JSON.stringify(foydalanuvchi) // string qiladi

console.log(jsonMalumot)

console.log(JSON.parse(jsonMalumot)) // stringi obyekt qiladi

console.log(typeof jsonMalumot)
