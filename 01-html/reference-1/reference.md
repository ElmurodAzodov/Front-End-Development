# HTML bo'yicha qo'llanma (boshlang'ich daraja)

## 1. HTML nima?

**HTML** (HyperText Markup Language) veb-sahifaning **tuzilmasini** yaratadigan belgilash tili. U dasturlash tili emas. Unda mantiq, hisob-kitob yoki shartlar yo'q. HTML brauzerga faqat "bu sarlavha, bu abzats, bu havola" deb aytadi.

Uyga o'xshatib aytganda:

- **HTML** uyning devorlari va xonalari (tuzilma)
- **CSS** bo'yoq va bezak (ko'rinish)
- **JavaScript** elektr, eshik va lift (harakat)

### Teg nima?

HTML **teglar** yordamida yoziladi. Teg burchakli qavs ichida bo'ladi: `<teg>`.

```html
<p>Bu oddiy matn.</p>
```

- `<p>` bu **ochuvchi teg**
- `</p>` bu **yopuvchi teg** (oldida `/` bor)
- Ularning orasi bu **kontent**
- Hammasi birgalikda **element** deyiladi

Ba'zi teglar yopilmaydi (`<br>`, `<hr>`). Ular **bo'sh teglar** deyiladi, chunki ichiga matn yozilmaydi.

### Atribut nima?

Atribut tegga qo'shimcha ma'lumot beradi. U ochuvchi teg ichida `nom="qiymat"` ko'rinishida yoziladi:

```html
<a href="https://google.com">Google</a>
```

Bu yerda `href` atribut, `"https://google.com"` uning qiymati.

---

## 2. VS Code'da birinchi HTML fayl

### Tayyorgarlik

1. **VS Code** o'rnatilgan bo'lsin (code.visualstudio.com).
2. Kompyuterda `html-darslar` nomli papka yarating.

### Qadamlar

1. VS Code'ni oching.
2. **File → Open Folder** ni bosing va `html-darslar` papkasini tanlang.
3. Chap paneldagi **New File** (📄+) tugmasini bosing.
4. Fayl nomini `index.html` deb yozing. Kengaytma **`.html`** bo'lishi shart.
5. Faylni oching va kod yozishni boshlang.

### Tez boshlash (Emmet)

Bo'sh `index.html` ichida `!` belgisini yozing va **Tab** yoki **Enter** bosing. VS Code tayyor shablonni o'zi yozib beradi.

### Sahifani brauzerda ko'rish

- **Usul 1:** `index.html` faylini ikki marta bosing, brauzerda ochiladi.
- **Usul 2 (qulayroq):** VS Code'da **Live Server** kengaytmasini o'rnating (Extensions bo'limi, `Live Server`, muallifi Ritwick Dey). Keyin kod ustida o'ng tugma, **Open with Live Server**. Kodni saqlaganingizda (`Ctrl + S`) sahifa o'zi yangilanadi.

---

## 3. HTML hujjatining tuzilishi

Har bir HTML sahifa quyidagi "skelet"dan boshlanadi:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mening birinchi sahifam</title>
  </head>
  <body>
    <h1>Salom, dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
  </body>
</html>
```

| Qism                         | Vazifasi                                                                  |
| ---------------------------- | ------------------------------------------------------------------------- |
| `<!DOCTYPE html>`            | Brauzerga "bu zamonaviy HTML5 hujjati" deydi                              |
| `<html lang="uz">`           | Butun sahifani o'rab turadi. `lang="uz"` sahifa tilini bildiradi          |
| `<head>`                     | Sahifa haqidagi **ko'rinmas** ma'lumotlar (sarlavha, kodlash, sozlamalar) |
| `<meta charset="UTF-8">`     | Harflar to'g'ri ko'rinishi uchun (o', g', sh, ch)                         |
| `<meta name="viewport" ...>` | Telefonda sahifa to'g'ri ko'rinishi uchun                                 |
| `<title>`                    | Brauzer tabida ko'rinadigan nom                                           |
| `<body>`                     | Foydalanuvchi **ko'radigan** hamma narsa shu yerda yoziladi               |

> 💡 **Eslab qoling:** ekranda ko'rinadigan narsa `<body>` ichida, ko'rinmaydigan sozlamalar `<head>` ichida yoziladi.

### Yaxshi odatlar

- Teglarni **kichik harflarda** yozing: `<p>`, `<P>` emas.
- Ichma-ich teglarda **bo'sh joy (indent)** qoldiring, kod o'qilishi oson bo'ladi.
- Har ochilgan tegni **yoping**.
- Teglarni to'g'ri tartibda yoping:

```html
<!-- ✅ To'g'ri -->
<p>Bu <b>muhim</b> gap.</p>

<!-- ❌ Noto'g'ri (tartib buzilgan) -->
<p>Bu <b>muhim</p></b>
```

### Izoh (comment)

Izoh brauzerda ko'rinmaydi, faqat kod yozuvchi uchun:

```html
<!-- Bu izoh, sahifada ko'rinmaydi -->
```

VS Code'da tezkor izoh: `Ctrl + /`.

---

## 4. Teglar

### 4.1. Sarlavhalar: `<h1>` dan `<h6>` gacha

Sarlavhalar 6 darajaga bo'linadi. `h1` eng katta va eng muhim, `h6` eng kichik.

```html
<h1>Bosh sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Oltinchi darajali sarlavha</h6>
```

**Qoidalar:**

- Sahifada odatda **bitta `<h1>`** bo'ladi (sahifaning asosiy mavzusi).
- Sarlavhalarni **tartib bilan** ishlating: `h1`, keyin `h2`, keyin `h3`. Kattaroq ko'rinsin deb `h1` dan `h4` ga sakramang.
- Sarlavha tanlashda o'lchamga emas, **mazmuniga** qarang. O'lchamni keyinroq CSS bilan o'zgartirasiz.
- Qidiruv tizimlari (Google) va ko'rish qobiliyati cheklangan foydalanuvchilar uchun sarlavhalar juda muhim.

---

### 4.2. `<p>`: abzats (paragraph)

Oddiy matn bloki. Har bir `<p>` yangi qatordan boshlanadi va atrofida bo'sh joy qoladi.

```html
<p>Bu birinchi abzats.</p>
<p>Bu ikkinchi abzats.</p>
```

> ⚠️ HTML'da kodda yozgan **ko'p bo'sh joy va Enter** brauzerda bitta bo'sh joy bo'lib ko'rinadi. Qator tashlash uchun `<br>`, yangi abzats uchun `<p>` ishlating.

---

### 4.3. `<br>`: qator tashlash (break)

Matnni yangi qatorga o'tkazadi. **Yopilmaydigan** teg.

```html
<p>
  Birinchi qator<br />
  Ikkinchi qator<br />
  Uchinchi qator
</p>
```

Ishlatish joyi: she'r, manzil kabi qisqa qatorlar. Abzatslarni ajratish uchun `<br>` ni ketma-ket qo'ymang, `<p>` ishlating.

---

### 4.4. `<hr>`: gorizontal chiziq (horizontal rule)

Sahifada mavzular orasiga ajratuvchi chiziq chizadi. Bu ham **yopilmaydigan** teg.

```html
<h2>Birinchi bo'lim</h2>
<p>Matn...</p>
<hr />
<h2>Ikkinchi bo'lim</h2>
<p>Matn...</p>
```

---

### 4.5. Matnni formatlash teglari

| Teg        | Nima qiladi   | Ko'rinishi          | Ma'nosi                                   |
| ---------- | ------------- | ------------------- | ----------------------------------------- |
| `<b>`      | Qalin         | **matn**            | Faqat ko'rinish, alohida ahamiyat yo'q    |
| `<strong>` | Qalin         | **matn**            | Matn **muhim** ekanini bildiradi          |
| `<i>`      | Kursiv (qiya) | _matn_              | Faqat ko'rinish (chet so'z, atama, o'y)   |
| `<em>`     | Kursiv (qiya) | _matn_              | Ohangda **urg'u** berish                  |
| `<small>`  | Kichik        | <small>matn</small> | Qo'shimcha izoh, mayda yozuv              |
| `<mark>`   | Belgilangan   | ==matn==            | Diqqatni tortish uchun rangli (sariq) fon |
| `<del>`    | O'chirilgan   | ~~matn~~            | Ustidan chizilgan (o'chirilgan matn)      |
| `<ins>`    | Qo'shilgan    | <u>matn</u>         | Tagiga chizilgan (yangi qo'shilgan matn)  |
| `<sub>`    | Pastki indeks | H₂O                 | Matn pastga tushadi                       |
| `<sup>`    | Yuqori indeks | x²                  | Matn yuqoriga chiqadi                     |

```html
<p>Bu <b>qalin</b> matn.</p>
<p>Bu <strong>juda muhim</strong> ogohlantirish!</p>

<p>Bu <i>kursiv</i> matn.</p>
<p>Men bu kitobni <em>albatta</em> o'qiyman.</p>

<p><small>Barcha huquqlar himoyalangan © 2026</small></p>

<p>Imtihon <mark>15-oktyabr</mark> kuni bo'ladi.</p>

<p>Narxi: <del>200 000 so'm</del> <ins>150 000 so'm</ins></p>

<p>Suv formulasi: H<sub>2</sub>O</p>
<p>Kvadrat: 5<sup>2</sup> = 25</p>
```

#### `<b>` va `<strong>` farqi nima?

Brauzerda ikkalasi ham qalin ko'rinadi. Farq **ma'noda**:

- `<b>` faqat vizual qalinlik beradi.
- `<strong>` "bu matn muhim" degan ma'no beradi. Ekranni o'quvchi dasturlar (ko'zi ojiz foydalanuvchilar uchun) buni ovoz ohangi bilan ajratib o'qiydi.

`<i>` va `<em>` orasidagi farq ham xuddi shunday: `<em>` urg'u beradi, `<i>` esa faqat qiyshaytiradi.

**Maslahat:** matn haqiqatan muhim yoki urg'uli bo'lsa `<strong>` va `<em>` ni tanlang.

#### `<sub>` va `<sup>` qayerda kerak?

- `<sub>`: kimyoviy formulalar (H₂O, CO₂)
- `<sup>`: darajalar (m², x³), sanalardagi qo'shimchalar, izoh raqamlari

---

### 4.6. `<span>`: matnning bir qismini o'rash

`<span>` o'zi hech qanday ko'rinish bermaydi. Ma'nosiz "konteyner" bo'lib, matnning bir qismini ajratib olishga xizmat qiladi. Keyin CSS yoki JavaScript orqali unga stil berasiz.

```html
<p>Mening sevimli rangim <span style="color: red;">qizil</span>.</p>
```

Bu yerda `style="color: red;"` inline CSS. Keyingi darslarda CSS'ni alohida o'rganamiz. `<span>` **qator ichida** turadi va yangi qatorga o'tmaydi.

---

### 4.7. `<a>`: havola (anchor)

Havola bir sahifadan boshqasiga o'tish imkonini beradi. Asosiy atributi **`href`** (manzil).

```html
<a href="https://www.google.com">Google'ga o'tish</a>
```

**Foydali atributlar:**

```html
<!-- Yangi tabda ochish -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Google (yangi tabda)
</a>

<!-- O'z sahifang ichidagi boshqa fayl -->
<a href="about.html">Biz haqimizda</a>

<!-- Elektron pochta -->
<a href="mailto:info@example.com">Xat yozish</a>

<!-- Telefon raqam -->
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>
```

| Atribut                     | Vazifasi                                       |
| --------------------------- | ---------------------------------------------- |
| `href`                      | Havola manzili                                 |
| `target="_blank"`           | Havolani yangi tabda ochadi                    |
| `rel="noopener noreferrer"` | `_blank` bilan birga xavfsizlik uchun yoziladi |

> 💡 Havola matni tushunarli bo'lsin. "Bu yerni bosing" o'rniga "Dars materiallarini yuklab olish" deb yozing.

---

### 4.8. Ro'yxatlar: `<ul>`, `<ol>`, `<li>`

- `<ul>`: **tartibsiz** ro'yxat (unordered list), nuqtalar bilan
- `<ol>`: **tartibli** ro'yxat (ordered list), raqamlar bilan
- `<li>`: ro'yxatning **har bir bandi** (list item)

`<li>` faqat `<ul>` yoki `<ol>` ichida yoziladi.

**Tartibsiz ro'yxat:**

```html
<h3>Xarid ro'yxati</h3>
<ul>
  <li>Non</li>
  <li>Sut</li>
  <li>Tuxum</li>
</ul>
```

**Tartibli ro'yxat:**

```html
<h3>Choy damlash</h3>
<ol>
  <li>Suvni qaynating</li>
  <li>Choynakka choy soling</li>
  <li>Qaynoq suv quying</li>
  <li>5 daqiqa kuting</li>
</ol>
```

**Ichma-ich (nested) ro'yxat:**

```html
<ul>
  <li>
    Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>
    Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

**`<ol>` atributlari:**

```html
<ol type="A">
  ...
</ol>
<!-- A, B, C ... -->
<ol type="a">
  ...
</ol>
<!-- a, b, c ... -->
<ol type="I">
  ...
</ol>
<!-- I, II, III ... -->
<ol start="5">
  ...
</ol>
<!-- 5 dan boshlanadi -->
<ol reversed>
  ...
</ol>
<!-- teskari tartibda -->
```

Tartib muhim bo'lsa (qadamlar, reyting) `<ol>`, muhim bo'lmasa (ro'yxat, xususiyatlar) `<ul>` ishlating.

---

## 5. Hammasi bir joyda: to'liq mashq

`index.html` faylingizga quyidagi kodni yozing va brauzerda natijani ko'ring:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mening birinchi sahifam</title>
  </head>
  <body>
    <h1>Web dasturlashni o'rganamiz</h1>
    <p>
      Bu sahifa <strong>HTML</strong> asoslarini o'rganish uchun yaratildi.<br />
      Har kuni <em>oz-ozdan</em> mashq qiling!
    </p>

    <hr />

    <h2>Nimalarni o'rganamiz?</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <h2>O'rganish tartibi</h2>
    <ol>
      <li>VS Code'ni o'rnating</li>
      <li>Birinchi HTML faylni yarating</li>
      <li>Teglarni mashq qiling</li>
    </ol>

    <h2>Kurs narxi</h2>
    <p>
      <del>500 000 so'm</del>
      <ins>350 000 so'm</ins>
      <mark>Chegirma bu oyda!</mark>
    </p>

    <h2>Formulalar</h2>
    <p>Suv: H<sub>2</sub>O</p>
    <p>Kvadrat: 4<sup>2</sup> = 16</p>

    <hr />

    <p>
      Batafsil ma'lumot:
      <a
        href="https://developer.mozilla.org/uz/"
        target="_blank"
        rel="noopener noreferrer"
        >MDN Web Docs</a
      >
    </p>

    <p><small>© 2026. Barcha huquqlar himoyalangan.</small></p>
  </body>
</html>
```

---

## 6. Tezkor jadval

| Teg                | Vazifasi                 | Yopiladimi? | Turi         |
| ------------------ | ------------------------ | ----------- | ------------ |
| `<h1>`–`<h6>`      | Sarlavhalar              | Ha          | Blok         |
| `<p>`              | Abzats                   | Ha          | Blok         |
| `<br>`             | Qator tashlash           | Yo'q        | Qator ichida |
| `<hr>`             | Gorizontal chiziq        | Yo'q        | Blok         |
| `<b>` / `<strong>` | Qalin / muhim            | Ha          | Qator ichida |
| `<i>` / `<em>`     | Kursiv / urg'u           | Ha          | Qator ichida |
| `<small>`          | Kichik matn              | Ha          | Qator ichida |
| `<mark>`           | Belgilangan matn         | Ha          | Qator ichida |
| `<del>` / `<ins>`  | O'chirilgan / qo'shilgan | Ha          | Qator ichida |
| `<sub>` / `<sup>`  | Pastki / yuqori indeks   | Ha          | Qator ichida |
| `<span>`           | Matnni o'rash            | Ha          | Qator ichida |
| `<a>`              | Havola                   | Ha          | Qator ichida |
| `<ul>` / `<ol>`    | Ro'yxat                  | Ha          | Blok         |
| `<li>`             | Ro'yxat bandi            | Ha          | Blok         |

**Blok** teglar yangi qatordan boshlanib, butun kenglikni egallaydi. **Qator ichidagi (inline)** teglar esa matn oqimida qoladi.

---

## 7. Mustaqil topshiriqlar

1. O'zingiz haqingizda sahifa yarating: ism, yosh, shahar (`<h1>`, `<p>`).
2. Sevimli 5 ta filmingiz ro'yxatini `<ol>` bilan yozing.
3. Sevimli mevalaringizni `<ul>` bilan yozing, ichida ichma-ich ro'yxat ham bo'lsin.
4. Do'kondagi tovarning eski va yangi narxini `<del>` va `<ins>` bilan ko'rsating.
5. Matematik ifoda (`a² + b² = c²`) va kimyoviy formula (`CO₂`) yozing.
6. Ikki xil havola qo'ying: biri shu tabda, biri yangi tabda ochilsin.

---

## 8. Ko'p uchraydigan xatolar

- ❌ Fayl nomi `index.html.txt` bo'lib qolishi. Kengaytmani tekshiring.
- ❌ Yopuvchi tegni unutish (`<p>` ochib `</p>` yozmaslik).
- ❌ Teglarni noto'g'ri tartibda yopish.
- ❌ `<li>` ni `<ul>`/`<ol>` dan tashqarida yozish.
- ❌ Faylni **saqlamay** (`Ctrl + S`) brauzerni yangilash.
- ❌ Bo'sh joy uchun `<br>` ni ketma-ket yozish. Buni keyinroq CSS bilan hal qilasiz.