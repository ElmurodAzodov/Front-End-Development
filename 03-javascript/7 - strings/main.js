
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

let matn = "Kecha, juda kuchli, yomg'ir shamol bo'ldi va tinmay 2soat yomg'ir yog'di! "
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

console.log(matn.replace("2soat", "3soat"))
console.log(matn.replace("yomg'ir", "qor"))
console.log(matn.replaceAll("yomg'ir", "qor"))
console.log("Saidjon".padStart(20, "S"))
console.log('Suhrob'.padStart(20, "W"))
console.log("Shohjahon".padEnd(30, "bekjon"))
console.log("shohruzbek".padEnd(20, "yatay"))
console.log("shohruzbek".padEnd(200, " foydasi yo'q "))
// console.log(matn)




