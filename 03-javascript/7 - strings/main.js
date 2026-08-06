
let ism = "Dastonbek"
let ism1 = 'Boburjon'
let familiya = "Komilov"
let yosh = 15
let hobbiy = "uxLash, Darsda uxlash va o'Yin o'ynash"
let joylashuviRespublika = "O'zbekiston"
let joylashuviViloyat = "Xorazm"
let joylashuviTuman = "Hazorasp"
let uyManzili = "Temirchi mahallasi 123-uy"
let bio = "Boburjon ismli o'quvchi, ustozini boshini ko'p og'ritib ba'zida keraksiz savollar beradi"
let boburjon = "Boburjon har kuni darsda shu so'zni aytadi: "
// console.log(ism.length)
console.log(ism[3])
console.log(hobbiy.toUpperCase())
console.log(hobbiy.toLowerCase())
console.log(hobbiy.indexOf("a"))
console.log(hobbiy.indexOf("w"))
console.log(hobbiy.lastIndexOf("o'ynash"))
console.log(hobbiy.includes("uxlash"))
console.log(hobbiy.startsWith("Darsda"))
console.log(hobbiy.endsWith("o'ynash"))
console.log(uyManzili.slice(9, 18))
console.log(bio.split("b"))
console.log(bio.split(" "))
console.log(bio.replace("Boburjon", "Sherzodjon"))
console.log(bio.replaceAll("o", "a"))
console.log(bio.padStart(120, "Boburjon"))
console.log(bio.padEnd(1000, ""))
console.log(boburjon.padEnd(100, " ustoz "))
// console.log(bio.length)
console.log(boburjon.length)



// console.log(`Assalomu alaykum, mening ismim ${ism1}, 
//     familiyam esa ${familiya}. Men kecha ${yosh} 
//     yoshga kirdim, lekin men haligacha yosh boladekman, 
//     sababi mening hobbiylarim ${hobbiy} lardan iborat!!!`)


// let password = "secret123";
// if (password.length < 8) {
//   console.log("Parol juda qisqa!");
// } else {
//   console.log("Parol uzunligi yetarli ✅");
// }





// ============================================================

// let text = "Salom mening ismim Shohruzbek"
// let text = 'Salom mening ismim Mo"minjon'
// console.log(text)

// ============================================================

// let yosh = 13
// let ism = "Shohjahon"
// let soha = 'dasturchi'
// let malumoti = "Men oddiy insonman"
// console.log("Mening ismim ", ism,"va mening yoshim ", yosh, "da va men ", soha, "man!" )
// console.log(`Mening ismim ${ism} va mening yoshim ${yosh}da, keyin men ${soha}man!`)
// console.log(malumoti.length)

// let arr = ["olma", 'uzum', 1,2,3]
// arr[0] = 1
// console.log(arr)
// soha[0] = "i"
// console.log(soha)

// ========================================================
//* String Methods

// let matn = "Kecha, juda kuchli, yomg'ir shamol bo'ldi va tinmay 2soat yomg'ir yog'di! "
// let kattaHarf = matn.toUpperCase()
// console.log(kattaHarf)

// let kichikHarf = matn.toLowerCase()
// console.log(kichikHarf)

// console.log(matn.indexOf("yomg'ir")) //18
// console.log(matn.lastIndexOf("yomg'ir")) //56

// console.log(matn.includes("shamolli")) //false
// console.log(matn.startsWith("Kecha")) //true
// console.log(matn.endsWith(" ")) //true

// console.log(matn.slice(0, 7)) // Kecha j - bunda 0-indeksdan boshalab 7gacha qirqadi lekin 7-indeksni olmasdan 6-indeksni olib tugaydi
// console.log(matn.substring(0, 7))

// console.log(matn.substring(6, 19))

// console.log(matn.split(""))
// console.log(matn.split(" "))
// console.log(matn.split(","))

// console.log(matn.replace("2soat", "3soat"))
// console.log(matn.replace("yomg'ir", "qor"))
// console.log(matn.replaceAll("yomg'ir", "qor"))
// console.log("Saidjon".padStart(20, "S"))
// console.log('Suhrob'.padStart(20, "W"))
// console.log("Shohjahon".padEnd(30, "bekjon"))
// console.log("shohruzbek".padEnd(20, "yatay"))
// console.log("shohruzbek".padEnd(200, " foydasi yo'q "))
// console.log(matn)




