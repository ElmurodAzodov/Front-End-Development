
//! =====================================
let ism = "Saidjon" // global scope
function salomlashish() {
    console.log(`Assalomu alaykum, hurmatli ${ism}!`)
}
//! =====================================

function hayrlashish() {
    let familiya = "Babayev" // local scope
    console.log(`Hayr ${familiya}`)
}
//! =====================================

// scope - chegaralangan joy, belgilangan hududdan tashqariga chiq olmaydi

// salomlashish()
// hayrlashish()

//! =====================================

// console.log(ism)
// console.log(familiya)

//! =====================================
// console.log(yosh)
// let yosh = 12
//! =====================================

function amalniBajar(massiv, amal) {
  const natija = [];
  for (const el of massiv) {
    natija.push(amal(el));
  }
  return natija;
}

const sonlar = [1, 2, 3, 4];
// console.log(amalniBajar(sonlar, (x) => x * 2)); // [2, 4, 6, 8]
// console.log(amalniBajar(sonlar, (x) => x ** 2)); // [1, 4, 9, 16]
//! =====================================

function chegirmaHisoblagichYarat(20) {
  return function (narx) {
    return narx - (narx * foiz) / 100;
  };
}

const yozgiChegirma = chegirmaHisoblagichYarat(20);
console.log(yozgiChegirma(1000)); // 800
