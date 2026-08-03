
// 1) Argumentsiz - joriy sana va vaqtni oladi
const hozir = new Date();
console.log(hozir); // Mon Aug 03 2026 16:31:45 GMT+0500 (Uzbekistan Standard Time)

// 2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
const sana1 = new Date(0); // 1970-01-01T00:00:00.000Z
const sana2 = new Date(1000 * 60 * 60); // Epoch'dan 1 soat keyin
console.log(sana1)
console.log(sana2)

// 3) Sana string (ISO 8601 formatida tavsiya etiladi)
const sana3 = new Date("2026-08-03"); // faqat sana - UTC vaqt bo'yicha 00:00:00
const sana4 = new Date("2026-08-03T14:30:00"); // sana + vaqt
const sana5 = new Date("2026-08-03T14:30:00Z"); // "Z" - UTC ekanini bildiradi

console.log(sana3)
console.log(sana4)
console.log(sana5)
