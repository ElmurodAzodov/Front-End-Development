//* Functions

// // ekrangaMatnChiqar();
// function ekrangaMatnChiqar() {
//   const shoxruzbek = {
//     ism: "Shoxruzbek",
//     familiya: "Karimov",
//     yosh: 8,
//     jins: "Erkak",
//     tugilganYil: 2018,
//     tugilganOy: "Mart",
//     tugilganKun: 15,
//     millati: "O'zbek",
//     fuqaroligi: "O'zbekiston",
//     shahri: "Toshkent",
//     tumani: "Yunusobod",
//     maktab: "12-maktab",
//     sinf: 2,
//     harfi: "A",
//     boyi: 130,
//     vazni: 28,
//     sochRangi: "Qora",
//     kozRangi: "Jigarrang",
//     sevimliFan: "Matematika",
//     sevimliRang: "Ko'k",
//     sevimliTaom: "Osh",
//     sevimliIchimlik: "Sharbat",
//     sevimliMeva: "Olma",
//     sevimliSport: "Futbol",
//     sevimliJamoa: "Real Madrid",
//     sevimliOyini: "Minecraft",
//     sevimliHayvon: "Sher",
//     sevimliKitob: "Zumrad va Qimmat",
//     sevimliMultfilm: "Tom va Jerry",
//     hobbi: "Rasm chizish",
//     orzusi: "Dasturchi bo'lish",
//     telefoniBor: false,
//     ukalariSoni: 1,
//     opalariSoni: 0,
//     dostlariSoni: 12,
//     yaxshiKoradiganFasl: "Yoz",
//     yaxshiKoradiganBayram: "Navro'z",
//     kompyuterBiladi: true,
//     inglizTiliniOrganmoqda: true,
//     baholari: [5, 5, 4, 5, 5],
//   };
//   shoxruzbek.lager = "Lagerga bormadi";

//   console.log(Object.values(shoxruzbek));
//   console.log(Object.keys(shoxruzbek));
//   console.log(Object.entries(shoxruzbek));
//   console.log(Object.entries(shoxruzbek)[40]);
// }

// //* Function Declaration
// function ikkiSonYigindisi(a, b, c) {
//   console.log(a + b + c);
// }
// ikkiSonYigindisi(2, 4, 40);

// function ayirma(a = 1, b = 2, c = 3) {
//     console.log(a - b - c)
// }
// ayirma()
// //* Function Expression
// const ikkiSonYig = function (a, b, c) {
//   console.log(a + b + c);
// };

// ikkiSonYig(1, 2, 3);


// //* Arrow Function
// const ayirmaa = (a, b, c) => a - b - c;

// console.log(ayirmaa(1, 2, 3))

//& ==========================================================================

const obyekt = {
  ism: "Shoxruzbek",
  kasbi: "bekorchi",
  arr: [1,2,3,4,5,6],
  suhrob: function () {
    for (let i of this.arr) {
      if (i % 2 == 0) {
        console.log(i)
      }
    }
  },
  arrowFunksiya: () => {
    console.log(this.ism);
  },
};

obyekt.suhrob();
obyekt.arrowFunksiya();