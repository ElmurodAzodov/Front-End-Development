
# 🏗️ **Object-Oriented JavaScript**

---

## 📌 1. OOP nima va nima uchun kerak?

Object-Oriented Programming (OOP) — bu dasturlash paradigmasi bo'lib, unda dastur **obyektlar** asosida quriladi. Har bir obyekt o'z ichida **ma'lumotlarni (property)** va **xatti-harakatlarni (method)** birlashtirib saqlaydi.

JavaScript — **prototype-based** til. Bu degani, klassik OOP tillari (Java, C#) dan farqli o'laroq, JS da obyektlar boshqa obyektlardan **to'g'ridan-to'g'ri meros oladi** (prototype orqali), klasslar esa faqat 2015-yilda (ES6) **sintaktik shakar (syntactic sugar)** sifatida qo'shilgan — ular "orqa fonda" baribir prototype mexanizmi orqali ishlaydi.

### OOP ning 4 ta asosiy ustuni (pillars):

```javascript
// 1. Encapsulation (Inkapsulyatsiya) - ma'lumotlarni yashirish va boshqarish
// 2. Abstraction (Abstraktsiya) - murakkablikni yashirish, faqat kerakli narsani ko'rsatish
// 3. Inheritance (Meros olish) - bir klassdan boshqasiga xususiyat/metod o'tishi
// 4. Polymorphism (Ko'p shakllilik) - bir xil metod turli obyektlarda turlicha ishlashi
```

Ushbu reference quyidagi tartibda boradi: obyekt yaratish usullari → prototype tizimi → ES6 class → meros olish → inkapsulyatsiya → statik a'zolar → polimorfizm/abstraktsiya → composition → foydali Object metodlari.

---

## 📦 2. Obyekt yaratish usullari (Object Creation Patterns)

JavaScript da obyekt yaratishning bir nechta yo'li bor. Har birini bilish OOP ning tarixiy rivojlanishini va zamonaviy yondashuvni tushunish uchun muhim.

### 2.1. Object Literal (Obyekt literali)

Eng oddiy va tez-tez ishlatiladigan usul — bitta obyekt yaratish uchun qulay, lekin bir xil turdagi ko'plab obyektlar kerak bo'lsa, kodni takrorlashga olib keladi.

```javascript
const talaba = {
    ism: "Elmurod",
    yosh: 25,
    kasb: "Full-Stack Developer",
    
    // Metod - obyekt ichidagi funksiya
    salomBerish() {
        console.log(`Salom, men ${this.ism}man`);
    }
};

talaba.salomBerish(); // "Salom, men Elmurodman"
```

**Muammo:** Agar bizga 100 ta talaba obyekti kerak bo'lsa, har birini qo'lda yozish samarasiz va xato ehtimoli yuqori bo'ladi. Shu sababli "factory function" va "constructor function" kabi usullar paydo bo'lgan.

### 2.2. Factory Function (Fabrika funksiyasi)

Obyekt yaratib qaytaruvchi oddiy funksiya. `new` kalit so'zisiz ishlaydi.

```javascript
function talabaYarat(ism, yosh, kasb) {
    return {
        ism,
        yosh,
        kasb,
        salomBerish() {
            console.log(`Salom, men ${this.ism}man, kasbim: ${this.kasb}`);
        }
    };
}

const talaba1 = talabaYarat("Aziza", 23, "Frontend Developer");
const talaba2 = talabaYarat("Sardor", 27, "Backend Developer");

talaba1.salomBerish(); // "Salom, men Azizaman, kasbim: Frontend Developer"
```

**Kamchilik:** Har bir yaratilgan obyekt o'zining `salomBerish` metodining **alohida nusxasini** xotirada saqlaydi. Ya'ni 1000 ta talaba yaratilsa, xotirada 1000 ta bir xil funksiya nusxasi bo'ladi — bu xotira jihatidan samarasiz. Bu muammoni **prototype** tizimi hal qiladi.

### 2.3. Constructor Function (Konstruktor funksiya)

`new` kalit so'zi bilan chaqiriladigan maxsus funksiya. Katta harf bilan boshlash — konvensiya (qoida emas, lekin barcha dasturchilar rioya qiladi).

```javascript
function Talaba(ism, yosh, kasb) {
    this.ism = ism;
    this.yosh = yosh;
    this.kasb = kasb;
}

// Metodni prototype ga qo'shamiz - shunda barcha nusxalar buni bo'lishadi
Talaba.prototype.salomBerish = function() {
    console.log(`Salom, men ${this.ism}man`);
};

const talaba1 = new Talaba("Aziza", 23, "Frontend Developer");
const talaba2 = new Talaba("Sardor", 27, "Backend Developer");

talaba1.salomBerish(); // "Salom, men Azizaman"
```

### `new` kalit so'zi ishlaganda aynan nima sodir bo'ladi?

Bu OOP ni tushunish uchun **eng muhim jarayonlardan biri**. `new Talaba(...)` chaqirilganda, JavaScript orqa fonda quyidagi 4 qadamni bajaradi:

```javascript
// new Talaba("Aziza", 23, "Frontend Developer") chaqirilganda:

// 1-QADAM: Yangi bo'sh obyekt yaratiladi
const yangiObyekt = {};

// 2-QADAM: Yangi obyektning prototipi (__proto__) 
//          Talaba.prototype ga bog'lanadi
Object.setPrototypeOf(yangiObyekt, Talaba.prototype);

// 3-QADAM: Konstruktor funksiya chaqiriladi, 
//          "this" so'zi yangiObyekt ga bog'lanadi
Talaba.call(yangiObyekt, "Aziza", 23, "Frontend Developer");

// 4-QADAM: Agar funksiya obyekt qaytarmasa (return object bo'lmasa),
//          avtomatik ravishda yangiObyekt qaytariladi
```

Bu bilish nima uchun muhim? Chunki ko'p dasturchilar `class` sintaksisini "sehrli" deb o'ylaydi, lekin aslida u yuqoridagi jarayonni "chiroyli" qilib ko'rsatuvchi qatlam xolos.

---

## 🔗 3. Prototype va Prototype Chain

### 3.1. Prototype nima?

Har bir JavaScript funksiyasi (constructor sifatida ishlatilganda) `prototype` degan maxsus obyektga ega. Bu obyekt — undan yaratilgan **barcha nusxalar uchun umumiy** bo'lgan metod va xususiyatlarni saqlash joyi.

```javascript
function Hayvon(ism) {
    this.ism = ism;
}

Hayvon.prototype.ovozChiqar = function() {
    console.log(`${this.ism} ovoz chiqarmoqda...`);
};

const mushuk = new Hayvon("Mushuk");
const it = new Hayvon("It");

mushuk.ovozChiqar(); // "Mushuk ovoz chiqarmoqda..."
it.ovozChiqar();     // "It ovoz chiqarmoqda..."

// Ikkalasi ham BITTA xotiradagi funksiyani ishlatadi:
console.log(mushuk.ovozChiqar === it.ovozChiqar); // true
```

### 3.2. `__proto__` va `prototype` farqi

Bu ikkisi eng ko'p chalkashtiriladigan tushunchalar:

| Xususiyat | Tavsif |
|---|---|
| `Funksiya.prototype` | Konstruktor funksiyaning o'zida bo'lgan obyekt — undan yaratiladigan nusxalar uchun "shablon" |
| `obyekt.__proto__` | Har qanday obyektda mavjud bo'lgan **yashirin bog'lanish**, u o'zini yaratgan konstruktorning `prototype`iga ishora qiladi |

```javascript
console.log(mushuk.__proto__ === Hayvon.prototype); // true

// __proto__ o'rniga zamonaviy usul:
console.log(Object.getPrototypeOf(mushuk) === Hayvon.prototype); // true
```

### 3.3. Prototype Chain (Prototip zanjiri)

Qachonki biz obyektdan biror xususiyat yoki metodni chaqirsak, JavaScript quyidagi tartibda qidiradi:

```
1. Avval obyektning o'zidan qidiradi
2. Topilmasa - obyektning __proto__ (ya'ni prototype) idan qidiradi  
3. U yerda ham topilmasa - prototipning prototipidan qidiradi
4. Bu jarayon Object.prototype ga yetguncha davom etadi
5. Object.prototype da ham topilmasa - undefined qaytadi
   (metod chaqirilsa - TypeError)
```

```javascript
const mushuk = new Hayvon("Mushuk");

// Zanjir quyidagicha:
// mushuk -> Hayvon.prototype -> Object.prototype -> null

console.log(mushuk.hasOwnProperty("ism")); // true
// hasOwnProperty mushukda emas, Hayvon.prototype da ham emas,
// balki Object.prototype da topiladi

console.log(mushuk.__proto__.__proto__ === Object.prototype); // true
console.log(mushuk.__proto__.__proto__.__proto__); // null - zanjir tugadi
```

### 3.4. `Object.create()` orqali prototip belgilash

```javascript
const hayvonPrototip = {
    ovozChiqar() {
        console.log(`${this.ism} ovoz chiqarmoqda`);
    }
};

// Yangi obyekt yaratamiz va uning prototipini to'g'ridan-to'g'ri belgilaymiz
const mushuk = Object.create(hayvonPrototip);
mushuk.ism = "Mushuk";
mushuk.ovozChiqar(); // "Mushuk ovoz chiqarmoqda"

console.log(Object.getPrototypeOf(mushuk) === hayvonPrototip); // true
```

---

## 🎓 4. ES6 Class — Zamonaviy sintaksis

ES6 (2015) da kiritilgan `class` — bu yuqorida ko'rgan prototype mexanizmining **"sintaktik shakar"** (syntactic sugar) versiyasi. Orqa fonda barcha narsa xuddi avvalgidek ishlaydi, lekin sintaksis ancha o'qilishi oson va boshqa tillarga (Java, Python) o'xshab qoladi.

### 4.1. Asosiy class sintaksisi

```javascript
class Talaba {
    // constructor - obyekt yaratilganda avtomatik chaqiriladigan maxsus metod
    constructor(ism, yosh, kasb) {
        this.ism = ism;
        this.yosh = yosh;
        this.kasb = kasb;
    }

    // Instance metod - avtomatik ravishda prototype ga qo'shiladi
    salomBerish() {
        console.log(`Salom, men ${this.ism}man`);
    }

    malumot() {
        return `${this.ism}, ${this.yosh} yosh, ${this.kasb}`;
    }
}

const talaba1 = new Talaba("Aziza", 23, "Frontend Developer");
talaba1.salomBerish(); // "Salom, men Azizaman"
console.log(talaba1.malumot()); // "Aziza, 23 yosh, Frontend Developer"

// Isbot: class metodlari haqiqatda prototype da saqlanadi
console.log(Talaba.prototype.salomBerish); // [Function: salomBerish]
console.log(talaba1.hasOwnProperty("salomBerish")); // false - u prototype da
```

### 4.2. Muhim qoidalar (class haqida bilish kerak bo'lgan narsalar)

```javascript
// 1. Class deklaratsiyalari "hoisting" qilinmaydi (function dan farqli)
// const obj = new MyClass(); // ReferenceError
// class MyClass {}

// 2. Class ichidagi barcha kod avtomatik "strict mode" da ishlaydi

// 3. Class ni "new" siz chaqirib bo'lmaydi
// Talaba("Aziza", 23, "Dasturchi"); // TypeError: Class constructor Talaba cannot be invoked without 'new'

// 4. Class expression sifatida ham yozish mumkin
const Odam = class {
    constructor(ism) {
        this.ism = ism;
    }
};
```

### 4.3. Getter va Setter

Getter/setter — xususiyatlarga (property) metod ko'rinishida, lekin **chaqiruv qavslarisiz** (`()`) murojaat qilish imkonini beradi. Bu ma'lumotni o'qish/yozishda qo'shimcha nazorat (validatsiya, log, hisoblash) qo'shish uchun ishlatiladi.

```javascript
class Talaba {
    constructor(ism, yosh) {
        this.ism = ism;
        this._yosh = yosh; // pastki chiziq - "ichki" xususiya ekanini bildiradi (konvensiya)
    }

    // GETTER - xususiyatni o'qishda ishlaydi
    get yosh() {
        return this._yosh;
    }

    // SETTER - xususiyatga qiymat berilganda ishlaydi
    set yosh(yangiYosh) {
        if (yangiYosh < 0) {
            throw new Error("Yosh manfiy bo'lishi mumkin emas!");
        }
        this._yosh = yangiYosh;
    }

    // Hisoblanadigan (computed) getter
    get malumotToliq() {
        return `${this.ism} (${this._yosh} yosh)`;
    }
}

const talaba = new Talaba("Sardor", 27);

console.log(talaba.yosh);        // 27 (metod emas, xususiyatday chaqirildi!)
talaba.yosh = 30;                // setter ishga tushadi
console.log(talaba.yosh);        // 30
console.log(talaba.malumotToliq); // "Sardor (30 yosh)"

try {
    talaba.yosh = -5; // Xatolik chiqaradi
} catch (e) {
    console.log(e.message); // "Yosh manfiy bo'lishi mumkin emas!"
}
```

---

## 🧬 5. Inheritance (Meros olish) — `extends` va `super`

Meros olish — bir klassning boshqa klassdan xususiyat va metodlarni "meros" qilib olishi. Bu kodni takrorlamaslik (DRY - Don't Repeat Yourself) va ierarxik tuzilma yaratish uchun ishlatiladi.

### 5.1. `extends` kalit so'zi

```javascript
// Ota (parent/base) klass
class Odam {
    constructor(ism, yosh) {
        this.ism = ism;
        this.yosh = yosh;
    }

    salomBerish() {
        console.log(`Salom, men ${this.ism}man`);
    }

    malumot() {
        return `${this.ism}, ${this.yosh} yosh`;
    }
}

// Bola (child/derived) klass - Odam dan meros oladi
class Dasturchi extends Odam {
    constructor(ism, yosh, tilLar) {
        // super() - ota klassning constructor'ini chaqiradi
        // Bu HAR DOIM birinchi qatorda bo'lishi SHART
        super(ism, yosh);
        this.tilLar = tilLar; // faqat Dasturchi ga tegishli xususiyat
    }

    // Yangi metod qo'shish
    kodYozish() {
        console.log(`${this.ism} ${this.tilLar.join(", ")} tillarida kod yozmoqda`);
    }

    // Ota klass metodini "override" qilish (qayta yozish)
    malumot() {
        // super.malumot() orqali ota klassning asl metodini ham chaqirish mumkin
        return `${super.malumot()}, Dasturchi, tillar: ${this.tilLar.join(", ")}`;
    }
}

const dasturchi = new Dasturchi("Elmurod", 25, ["JavaScript", "Python"]);

dasturchi.salomBerish(); // Odam dan meros olingan - "Salom, men Elmurodman"
dasturchi.kodYozish();   // Dasturchi ning o'z metodi
console.log(dasturchi.malumot()); // Override qilingan metod, lekin super orqali eskisi ham ishlatilgan

console.log(dasturchi instanceof Dasturchi); // true
console.log(dasturchi instanceof Odam);      // true - chunki meros zanjirida bor
```

### 5.2. `super` ning ikki xil ishlatilishi

```javascript
class Dasturchi extends Odam {
    constructor(ism, yosh, tilLar) {
        super(ism, yosh);      // 1) FUNKSIYA sifatida - ota constructorini chaqiradi
        this.tilLar = tilLar;
    }

    malumot() {
        return super.malumot(); // 2) OBYEKT sifatida - ota klass metodlariga murojaat
    }
}
```

**Muhim qoida:** Agar bola klassda `constructor` yozilgan bo'lsa va u `extends` qilingan bo'lsa, `super()` chaqirilmaguncha `this` kalit so'zidan foydalanib bo'lmaydi — bu xatolikka olib keladi:

```javascript
class Dasturchi extends Odam {
    constructor(ism, yosh) {
        this.ism = ism; // ReferenceError: Must call super constructor 
                         // before accessing 'this'
        super(ism, yosh);
    }
}
```

### 5.3. Ko'p bosqichli meros (Multi-level inheritance)

```javascript
class Odam {
    constructor(ism) {
        this.ism = ism;
    }
}

class Dasturchi extends Odam {
    constructor(ism, til) {
        super(ism);
        this.til = til;
    }
}

class FrontendDasturchi extends Dasturchi {
    constructor(ism, til, framework) {
        super(ism, til);
        this.framework = framework;
    }

    malumot() {
        return `${this.ism} - ${this.til} / ${this.framework}`;
    }
}

const dev = new FrontendDasturchi("Aziza", "JavaScript", "React");
console.log(dev.malumot()); // "Aziza - JavaScript / React"

// Zanjir: dev -> FrontendDasturchi -> Dasturchi -> Odam -> Object -> null
console.log(dev instanceof Odam);              // true
console.log(dev instanceof Dasturchi);         // true
console.log(dev instanceof FrontendDasturchi); // true
```

### 5.4. Prototype orqali meros olish (class dan oldingi usul)

Class paydo bo'lishidan oldin, meros olish quyidagicha amalga oshirilgan (bu tarixiy ahamiyatga ega, lekin eski kodlarni tushunish uchun muhim):

```javascript
function Odam(ism) {
    this.ism = ism;
}
Odam.prototype.salomBerish = function() {
    console.log(`Salom, ${this.ism}`);
};

function Dasturchi(ism, til) {
    Odam.call(this, ism); // "super()" ning eski usuli
    this.til = til;
}

// Prototip zanjirini qo'lda bog'lash
Dasturchi.prototype = Object.create(Odam.prototype);
Dasturchi.prototype.constructor = Dasturchi; // constructor ishorasini tiklash

const dev = new Dasturchi("Sardor", "Python");
dev.salomBerish(); // "Salom, Sardor" - Odam dan meros olingan
```

---

## 🔒 6. Encapsulation (Inkapsulyatsiya)

Inkapsulyatsiya — obyektning ichki holatini (state) tashqi dunyodan yashirish va unga faqat belgilangan metodlar orqali murojaat qilish imkonini berish. Bu ma'lumotlarning nazoratsiz o'zgarishining oldini oladi.

### 6.1. Private Fields (`#` belgisi) — ES2022 zamonaviy usul

```javascript
class BankHisobi {
    #balans; // # belgisi - bu xususiyat FAQAT klass ichida ko'rinadi (private)
    #pinKod;

    constructor(egasi, boshlangichBalans, pinKod) {
        this.egasi = egasi; // public - tashqaridan ko'rinadi
        this.#balans = boshlangichBalans; // private
        this.#pinKod = pinKod;
    }

    // Private xususiyatga faqat public metodlar orqali murojaat qilinadi
    balansniKor(kiritilganPin) {
        if (kiritilganPin !== this.#pinKod) {
            throw new Error("Noto'g'ri PIN kod!");
        }
        return this.#balans;
    }

    pulQoshish(summa) {
        if (summa <= 0) {
            throw new Error("Summa musbat bo'lishi kerak!");
        }
        this.#balans += summa;
        return this.#balans;
    }

    // Private METOD ham yaratish mumkin
    #balansniTekshir(summa) {
        return summa <= this.#balans;
    }

    pulYechish(summa, pinKod) {
        if (pinKod !== this.#pinKod) {
            throw new Error("Noto'g'ri PIN kod!");
        }
        if (!this.#balansniTekshir(summa)) {
            throw new Error("Balansda yetarli mablag' yo'q!");
        }
        this.#balans -= summa;
        return this.#balans;
    }
}

const hisob = new BankHisobi("Elmurod", 1000, "1234");

console.log(hisob.balansniKor("1234")); // 1000
hisob.pulQoshish(500);
console.log(hisob.balansniKor("1234")); // 1500

// console.log(hisob.#balans); // SyntaxError: Private field '#balans' 
                                // must be declared in an enclosing class
```

**Nima uchun `#` muhim?** U tilning o'zida (JavaScript engine darajasida) amalga oshirilgan haqiqiy inkapsulyatsiya — hech qanday trik yoki konvensiya bilan tashqaridan buzib bo'lmaydi.

### 6.2. Konvensional Private (pastki chiziq `_`) — eski uslub

`class` dan oldin va hozir ham ba'zan ishlatiladigan usul — bu shunchaki **kelishuv (konvensiya)**, haqiqiy himoya emas:

```javascript
class Foydalanuvchi {
    constructor(ism, parol) {
        this.ism = ism;
        this._parol = parol; // "_" - "bu ichki, tegmang" degan ishora, xolos
    }
}

const user = new Foydalanuvchi("Aziza", "maxfiy123");
console.log(user._parol); // "maxfiy123" - HECH QANDAY TO'SIQ YO'Q, 
                           // tashqaridan to'liq ochiq va o'zgartirsa bo'ladi
```

### 6.3. Closure orqali private (Class dan oldingi haqiqiy private usul)

```javascript
function bankHisobiYarat(boshlangichBalans) {
    let balans = boshlangichBalans; // closure orqali "private" o'zgaruvchi

    return {
        balansniKor() {
            return balans;
        },
        pulQoshish(summa) {
            balans += summa;
            return balans;
        }
    };
}

const hisob = bankHisobiYarat(1000);
console.log(hisob.balansniKor()); // 1000
console.log(hisob.balans); // undefined - tashqaridan umuman ko'rinmaydi
```

---

## ⚡ 7. Static a'zolar (Static Members)

`static` kalit so'zi bilan belgilangan metod/xususiyat **klassning o'ziga** tegishli bo'ladi, undan yaratilgan **nusxalarga emas**. Ular obyekt yaratmasdan to'g'ridan-to'g'ri klass orqali chaqiriladi.

```javascript
class Talaba {
    static talabalarSoni = 0; // static xususiyat

    constructor(ism) {
        this.ism = ism;
        Talaba.talabalarSoni++; // har safar yangi obyekt yaratilganda oshadi
    }

    // Static metod - odatda "yordamchi" yoki "factory" funksiyalar uchun ishlatiladi
    static jamiTalabalarniKorsat() {
        console.log(`Jami talabalar: ${Talaba.talabalarSoni}`);
    }

    // Static factory method pattern - obyekt yaratishning muqobil yo'li
    static ismsizTalaba() {
        return new Talaba("Noma'lum");
    }
}

new Talaba("Aziza");
new Talaba("Sardor");
new Talaba("Elmurod");

Talaba.jamiTalabalarniKorsat(); // "Jami talabalar: 3"
console.log(Talaba.talabalarSoni); // 3

const talaba4 = Talaba.ismsizTalaba();
console.log(talaba4.ism); // "Noma'lum"

// MUHIM: static a'zolarga nusxalar orqali murojaat qilib bo'lmaydi
const t = new Talaba("Test");
// console.log(t.talabalarSoni); // undefined
```

### 7.1. Static bloklar (ES2022)

Klass yuklanganda bir marta ishlaydigan murakkab initsializatsiya uchun:

```javascript
class Konfiguratsiya {
    static sozlamalar;

    static {
        // Bu blok klass birinchi marta ishlatilganda BIR MARTA ishlaydi
        console.log("Konfiguratsiya ishga tushmoqda...");
        Konfiguratsiya.sozlamalar = {
            til: "uz",
            versiya: "1.0"
        };
    }
}

console.log(Konfiguratsiya.sozlamalar); // { til: "uz", versiya: "1.0" }
```

---

## 🎭 8. Polymorphism (Ko'p shakllilik)

Polimorfizm — bir xil metod nomi turli klasslarda **turlicha bajarilishi**. Bu kodni umumiylashtirish va kengaytirish imkonini beradi.

```javascript
class Shakl {
    yuza() {
        return 0; // umumiy standart implementatsiya
    }

    malumot() {
        return `Yuza: ${this.yuza()}`;
    }
}

class Kvadrat extends Shakl {
    constructor(tomon) {
        super();
        this.tomon = tomon;
    }

    // yuza() metodi OVERRIDE qilingan - o'ziga xos hisoblash
    yuza() {
        return this.tomon ** 2;
    }
}

class Doira extends Shakl {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    yuza() {
        return Math.PI * this.radius ** 2;
    }
}

class Uchburchak extends Shakl {
    constructor(asos, balandlik) {
        super();
        this.asos = asos;
        this.balandlik = balandlik;
    }

    yuza() {
        return (this.asos * this.balandlik) / 2;
    }
}

// POLIMORFIZM ISHLASHI: bir xil kod, turli natijalar
const shakllar = [
    new Kvadrat(4),
    new Doira(3),
    new Uchburchak(6, 5)
];

shakllar.forEach(shakl => {
    // Har bir shakl o'zining yuza() metodini chaqiradi,
    // lekin biz bitta umumiy "malumot()" orqali murojaat qilyapmiz
    console.log(shakl.malumot());
});
// Yuza: 16
// Yuza: 28.274333882308138
// Yuza: 15
```

Bu — **duck typing** yoki **method overriding** deb ataladigan yondashuv: "Agar u o'rdakday yursa va o'rdakday g'ag'illasa — demak u o'rdak" prinsipi. JavaScript da polimorfizm uchun interfeys yoki tur mos kelishi shart emas, faqat kerakli metod mavjud bo'lsa kifoya.

---

## 🎨 9. Abstraction (Abstraktsiya)

Abstraktsiya — foydalanuvchidan **murakkab implementatsiya tafsilotlarini yashirish** va faqat kerakli, soddalashtirilgan interfeysni ko'rsatish. JavaScript da klassik tillardagi kabi `abstract class` kalit so'zi yo'q, lekin buni turli usullar bilan simulyatsiya qilish mumkin.

### 9.1. Abstrakt klassni simulyatsiya qilish

```javascript
class Shakl {
    constructor() {
        // Agar to'g'ridan-to'g'ri Shakl dan obyekt yaratilsa - xatolik
        if (this.constructor === Shakl) {
            throw new Error("Shakl klassidan to'g'ridan-to'g'ri obyekt yaratib bo'lmaydi - u abstrakt!");
        }
    }

    yuza() {
        // Bu metod albatta bola klassda qayta yozilishi (override) kerak
        throw new Error("yuza() metodi implementatsiya qilinishi shart!");
    }
}

class Kvadrat extends Shakl {
    constructor(tomon) {
        super();
        this.tomon = tomon;
    }

    yuza() {
        return this.tomon ** 2;
    }
}

// const shakl = new Shakl(); // Error: Shakl klassidan... abstrakt!
const kvadrat = new Kvadrat(5);
console.log(kvadrat.yuza()); // 25
```

### 9.2. Abstraktsiya — real hayotdagi misol

Abstraktsiyaning asosiy g'oyasi: foydalanuvchi **"nima"** qilishni biladi, lekin **"qanday"** ishlashini bilishi shart emas:

```javascript
class Mashina {
    yoqish() {
        this.#dvigatelniIshga_tushirish(); // ichki murakkab jarayon
        console.log("Mashina yoqildi!");
    }

    // Private metod - foydalanuvchidan yashiringan implementatsiya detali
    #dvigatelniIshga_tushirish() {
        console.log("- Yoqilg'i tizimi tekshirilmoqda...");
        console.log("- Dvigatel ishga tushirilmoqda...");
        console.log("- Sensorlar faollashtirilmoqda...");
    }
}

const mashina = new Mashina();
mashina.yoqish(); 
// Foydalanuvchi faqat yoqish() ni chaqiradi,
// dvigatelning ichki ishlashi haqida bilishi shart emas
```

---

## 🧩 10. Mixins — Ko'p meros olish muammosini yechish

JavaScript **faqat bitta klassdan** meros olishga (`extends`) ruxsat beradi (single inheritance). Lekin ba'zida bir nechta manbadan funksionallikni "qo'shish" kerak bo'ladi — bunga **mixin** pattern yordam beradi.

```javascript
// Mixin - bu oddiy obyekt yoki funksiya, klassga metodlar "qo'shib beradi"
const suzishMixin = {
    suzish() {
        console.log(`${this.ism} suzmoqda`);
    }
};

const uchishMixin = {
    uchish() {
        console.log(`${this.ism} uchmoqda`);
    }
};

class Hayvon {
    constructor(ism) {
        this.ism = ism;
    }
}

class Ordak extends Hayvon {}

// Object.assign orqali mixinlarni klass prototipiga "aralashtiramiz"
Object.assign(Ordak.prototype, suzishMixin, uchishMixin);

const ordak = new Ordak("Donald");
ordak.suzish(); // "Donald suzmoqda"
ordak.uchish(); // "Donald uchmoqda"
```

### 10.1. Funksional mixin pattern

```javascript
const AktivMixin = (Base) => class extends Base {
    aktivlashtir() {
        this.aktiv = true;
        console.log(`${this.ism} aktivlashtirildi`);
    }
};

const LogMixin = (Base) => class extends Base {
    logYoz(xabar) {
        console.log(`[LOG] ${this.ism}: ${xabar}`);
    }
};

class Foydalanuvchi {
    constructor(ism) {
        this.ism = ism;
    }
}

// Bir nechta mixinlarni zanjir shaklida qo'shish
class KengaytirilganFoydalanuvchi extends LogMixin(AktivMixin(Foydalanuvchi)) {}

const user = new KengaytirilganFoydalanuvchi("Elmurod");
user.aktivlashtir();       // "Elmurod aktivlashtirildi"
user.logYoz("Tizimga kirdi"); // "[LOG] Elmurod: Tizimga kirdi"
```

---

## 🧱 11. Composition over Inheritance (Kompozitsiya vs Meros)

Zamonaviy dasturlashda ko'p mutaxassislar **"kompozitsiyani meros olishdan afzal ko'ring"** (favor composition over inheritance) prinsipiga amal qiladi. Chunki chuqur meros zanjirlari (deep inheritance chains) kodni tushunish va o'zgartirishni qiyinlashtiradi.

### 11.1. Inheritance yondashuvi (muammoli bo'lishi mumkin)

```javascript
// Chuqur va murakkab meros zanjiri - moslashuvchan emas
class Hayvon {}
class Uchuvchi extends Hayvon {}
class SuzuvchiUchuvchi extends Uchuvchi {} 
// Agar bizga "suzadigan lekin uchmaydigan" hayvon kerak bo'lsa-chi? Muammo!
```

### 11.2. Composition yondashuvi (moslashuvchan)

```javascript
// Har bir xatti-harakat alohida funksiya sifatida
const suzaOlish = (state) => ({
    suzish: () => console.log(`${state.ism} suzmoqda`)
});

const uchaOlish = (state) => ({
    uchish: () => console.log(`${state.ism} uchmoqda`)
});

const yuraOlish = (state) => ({
    yurish: () => console.log(`${state.ism} yurmoqda`)
});

// Factory function orqali kerakli xatti-harakatlarni "kompozitsiya" qilamiz
function hayvonYarat(ism, qobiliyatlar) {
    let state = { ism };
    // Barcha tanlangan qobiliyatlarni bitta obyektga birlashtiramiz
    return Object.assign({}, state, ...qobiliyatlar.map(q => q(state)));
}

const ordak = hayvonYarat("Ordak", [suzaOlish, uchaOlish, yuraOlish]);
const baliq = hayvonYarat("Baliq", [suzaOlish]); // faqat suzadi

ordak.suzish(); // "Ordak suzmoqda"
ordak.uchish(); // "Ordak uchmoqda"
baliq.suzish(); // "Baliq suzmoqda"
// baliq.uchish(); // TypeError - baliqda bu qobiliyat yo'q, va bu TO'G'RI!
```

Bu yondashuv **"has-a"** (ega bo'lish) munosabatini ifodalaydi, `extends` esa **"is-a"** (bu narsa ekanlik) munosabatini ifodalaydi. Har bir vaziyat uchun to'g'ri yondashuvni tanlash kerak.

---

## 🛠️ 12. Foydali Object metodlari (OOP kontekstida)

### 12.1. `Object.freeze()` — obyektni "muzlatish"

```javascript
class Konfiguratsiya {
    constructor() {
        this.til = "uz";
        this.versiya = "1.0";
        Object.freeze(this); // obyektni o'zgarmas qilib qo'yish
    }
}

const konfig = new Konfiguratsiya();
konfig.til = "en"; // hech qanday xato bermaydi, lekin AMALGA OSHMAYDI (strict mode da xato beradi)
console.log(konfig.til); // hali ham "uz"
```

### 12.2. `Object.create()` — prototipni to'g'ridan-to'g'ri belgilash

Yuqorida (3.4-bo'limda) ko'rsatilgan.

### 12.3. `instanceof` va `constructor` orqali tur tekshirish

```javascript
class Hayvon {}
class It extends Hayvon {}

const it = new It();

console.log(it instanceof It);      // true
console.log(it instanceof Hayvon);  // true - chunki meros zanjirida bor
console.log(it instanceof Object);  // true - hamma narsa Object dan keladi

console.log(it.constructor === It); // true
console.log(it.constructor.name);   // "It"
```

### 12.4. `Object.getPrototypeOf()` va `Object.setPrototypeOf()`

```javascript
class A {}
class B {}

const obj = new A();

console.log(Object.getPrototypeOf(obj) === A.prototype); // true

// Prototipni RUNTIME da o'zgartirish (kam ishlatiladi, ishlash tezligiga salbiy ta'sir qiladi)
Object.setPrototypeOf(obj, B.prototype);
console.log(obj instanceof B); // true
console.log(obj instanceof A); // false - endi A emas!
```

### 12.5. `hasOwnProperty` vs `in` operatori

```javascript
class Odam {
    constructor(ism) {
        this.ism = ism;
    }

    salomBerish() {}
}

const odam = new Odam("Aziza");

console.log(odam.hasOwnProperty("ism"));          // true - obyektning o'zida bor
console.log(odam.hasOwnProperty("salomBerish"));  // false - bu prototype da

console.log("ism" in odam);          // true
console.log("salomBerish" in odam);  // true - "in" butun zanjirni tekshiradi
```

---

## 🔑 13. `this` kalit so'zi OOP kontekstida

`this` — OOP da eng ko'p xatoliklarga sabab bo'ladigan tushuncha. Uning qiymati **funksiya qanday chaqirilishiga** bog'liq, qayerda yozilganiga emas.

```javascript
class Timer {
    constructor() {
        this.soniya = 0;
    }

    // Oddiy metod - "this" chaqiruv usuliga bog'liq
    boshla() {
        setInterval(function() {
            this.soniya++; // XATOLIK: bu yerda "this" - global obyekt yoki undefined
            console.log(this.soniya); // NaN yoki xato
        }, 1000);
    }

    // TO'G'RI YECHIM 1: Arrow function - "this" ni tashqi konteksdan oladi
    boshlaTogri() {
        setInterval(() => {
            this.soniya++; // "this" - Timer obyektining o'zi
            console.log(this.soniya);
        }, 1000);
    }

    // TO'G'RI YECHIM 2: .bind() orqali "this" ni qattiq bog'lash
    boshlaBindBilan() {
        setInterval(function() {
            this.soniya++;
            console.log(this.soniya);
        }.bind(this), 1000);
    }
}
```

### Class metodlarini alohida o'zgaruvchiga ajratganda `this` yo'qolishi

```javascript
class Tugma {
    constructor(nom) {
        this.nom = nom;
    }

    bosildi() {
        console.log(`${this.nom} bosildi`);
    }
}

const tugma = new Tugma("Yubor");
tugma.bosildi(); // "Yubor bosildi" - to'g'ri ishlaydi

const funksiya = tugma.bosildi;
// funksiya(); // TypeError: Cannot read properties of undefined
// Chunki "this" bog'lanishi obyektdan uzilib qoldi

// Yechim - arrow function bilan class field sifatida yozish:
class TugmaYangi {
    constructor(nom) {
        this.nom = nom;
        // Arrow function class field - "this" doimiy ravishda obyektga bog'lanadi
        this.bosildi = () => {
            console.log(`${this.nom} bosildi`);
        };
    }
}

const tugma2 = new TugmaYangi("Yubor");
const funksiya2 = tugma2.bosildi;
funksiya2(); // "Yubor bosildi" - TO'G'RI ishlaydi!
```

---

## 📋 14. Barcha OOP tushunchalarining qisqa xulosasi (jadval)

| Tushuncha | Kalit so'z / Usul | Maqsad |
|---|---|---|
| Obyekt yaratish | `{}`, factory function, `new`, `class` | Ma'lumot va metodlarni birlashtirish |
| Prototype | `Function.prototype`, `__proto__` | Metodlarni xotirada bitta nusxada saqlash |
| Class | `class`, `constructor` | Zamonaviy, o'qilishi oson sintaksis |
| Inheritance | `extends`, `super` | Kodni qayta ishlatish, ierarxiya yaratish |
| Encapsulation | `#privateField`, closure | Ma'lumotni himoya qilish |
| Getter/Setter | `get`, `set` | Xususiyatga nazoratli murojaat |
| Static | `static` | Klassga tegishli (nusxalarga emas) a'zolar |
| Polymorphism | Method overriding | Bir metod - turli natija |
| Abstraction | Error throwing, private metodlar | Murakkablikni yashirish |
| Mixin | `Object.assign`, funksional mixin | Ko'p manbadan funksionallik qo'shish |
| Composition | Factory function + funksiyalar | Moslashuvchan, "has-a" munosabat |

---

## 💡 15. Best Practices (Tavsiyalar)

```javascript
// ✅ 1. Har doim private ma'lumotlar uchun # dan foydalaning (pastki chiziq emas)
class Yaxshi {
    #maxfiyMalumot;
}

// ✅ 2. Meros zanjirini 2-3 darajadan oshirmang - composition ni ko'proq qo'llang

// ✅ 3. Static metodlarni faqat "klassga tegishli" mantiq uchun ishlating
// (masalan factory methodlar, hisoblagichlar)

// ✅ 4. Class ichida arrow function ishlatishda ehtiyot bo'ling -
// har bir nusxa uchun alohida xotira band qiladi (prototype dagidek bo'lishmaydi)

// ✅ 5. instanceof dan oshiqcha foydalanmang - 
// "duck typing" (metod borligini tekshirish) ko'pincha yaxshiroq yechim

// ✅ 6. Konstruktorda juda ko'p ish qilmang - faqat initsializatsiya uchun ishlating
```

---

Ushbu reference — JavaScript dagi Object-Oriented dasturlashning barcha asosiy va ilg'or tushunchalarini o'z ichiga oladi: obyekt yaratish usullaridan tortib, prototype tizimi, class, meros olish, inkapsulyatsiya, static a'zolar, polimorfizm, abstraktsiya, mixin va compositiongacha.
