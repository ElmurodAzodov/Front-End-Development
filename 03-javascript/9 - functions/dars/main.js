
// //* Function Declaration

// function salomMatni() {
//     console.log("Assalomu alaykum, bu function declaration")
// }

// salomMatni()

// //* Function Expression

// const salomMatniChiqar = function () {
//     console.log("Assalomu alaykum, bu function expression")
// }

// salomMatniChiqar()

// //* Arrow Functions
// const salomMatniChiqaruvchi = () => console.log("Bu arrow functions")

// salomMatniChiqaruvchi()


//* ========================================================================


function kattaHarfgaOzgartiruvchi(matn) {
    return String(matn).toUpperCase()
}

// console.log(kattaHarfgaOzgartiruvchi("Men dasturchiman"))
// console.log(kattaHarfgaOzgartiruvchi("kiritilgan matnni katta harfga o'zgartirdi"))


// function yigindi(a, b) {
//     console.log(a + b)
// }

// yigindi(5, 9)

//* a va b sonlar berilgan, ulardan eng kattasini chiqaruvchi funksiya yozing.
function kattaSon(a, b) {
    if (a > b) {
        return `${a} soni katta`
    } else {
        return `${b} soni katta`
    }
}
// console.log(kattaSon(15, 11))

//* a va b sonlar berilgan, ulardan qaysilari juft son ekanligini chiqaruvchi funksiya yozing.

// a % 2 === 0
function juftSon(a, b) {
    if (a % 2 === 0 && b % 2 !== 0) {
        return `${a} soni juft son!`
    } else if(a % 2 === 0 && b % 2 === 0) {
        return "Siz kiritgan ikkita son ham juft sonlar!"
    } else if(a % 2 !== 0 && b % 2 === 0) {
        return `${b} soni juft son!`
    } else {
        return "Ikkala son ham juft emas!"
    }
}

console.log(juftSon(2, 5))