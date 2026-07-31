
//* Object Literal

const talaba = {
    ism: "Jahongir",
    yosh: 16,
    kasb: "Frontend Developer",
    
    // Metod - obyekt ichidagi funksiya
    salomBerish() {
        console.log(`Salom, men ${this.ism}man`);
    }
};

// talaba.salomBerish();




//* Factory Function

function talabaYarat(ism, yosh, kasb) {
    return {ism, yosh, kasb,salomBerish() {console.log(`Salom, men ${this.ism}man, kasbim: ${this.kasb}`);}};
}

const talaba1 = talabaYarat("Aziza", 23, "Frontend Developer");
const talaba2 = talabaYarat("Sardor", 27, "Backend Developer");

// talaba1.salomBerish();



//* Constructor Function

function Talaba(ism, yosh, kasb) {
    this.ism = ism;
    this.yosh = yosh;
    this.kasb = kasb;
}

// Metodni prototype ga qo'shamiz - shunda barcha nusxalar buni bo'lishadi
Talaba.prototype.salomBerish = function() {
    console.log(`Salom, men ${this.ism}man`);
};

const talabaa1 = new Talaba("Aziza", 23, "Frontend Developer");
const talabaa2 = new Talaba("Sardor", 27, "Backend Developer");

talabaa1.salomBerish(); // "Salom, men Azizaman"
talabaa2.salomBerish(); // "Salom, men Azizaman"

