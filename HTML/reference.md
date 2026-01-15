# Modul 1. HTML Asoslari (Absolute Zero)

## 📚 Mavzular:
---

## 1. **HTML nima va Internet qanday ishlaydi?**

### HTML nima?
**HTML** (HyperText Markup Language) - bu veb-sahifalarning tuzilishi va kontentini yaratish uchun ishlatiladigan standart belgilash tili. HTML "teg"lar (tags) yordamida matn, rasmlar, videolar va boshqa kontent elementlarini belgilaydi.

### Internet qanday ishlaydi?
1. **Foydalanuvchi** brauzer orqali veb-sayt manzilini (URL) kiritadi
2. **Brauzer** DNS serverga so'rov yuborib, domain nomini IP manziliga aylantiradi
3. **Server** so'ralgan fayllarni (HTML, CSS, JavaScript) brauzerga yuboradi
4. **Brauzer** HTML kodini qayta ishlab, foydalanuvchiga ko'rinadigan veb-sahifani yaratadi

**Oddiy analogiya:** HTML - uyning qurilish loyihasi, brauzer - esa quruvchi.

---

## 2. **HTML hujjat strukturasi**

Har bir HTML hujjati quyidagi asosiy qismlardan tashkil topgan:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Mening birinchi veb-sahifam</title>
</head>
<body>
    <!-- Asosiy kontent shu yerda bo'ladi -->
    <h1>Salom, Dunyo!</h1>
    <p>Bu mening birinchi HTML sahifam</p>
</body>
</html>
```

---

## 3. **Asosiy HTML teglari tushuntirilishi**

### `<!DOCTYPE html>`
- Bu HTML5 versiyasida ishlatilishini bildiradi
- Brauzerga hujjat turini aniqlashga yordam beradi
- **Majburiy** va hujjatning eng birinchi qatorida bo'lishi kerak

### `<html>`
- Butun HTML hujjatining ildiz elementi (root element)
- `lang` atributi bilan tilni belgilash mumkin: `lang="uz"`

### `<head>`
- Sahifa haqida ma'lumot (metadata) saqlanadigan qism
- Foydalanuvchiga ko'rinmaydi, lekin brauzer va qidiruv tizimlari uchun muhim
- Ichida quyidagilar bo'ladi:
  - `<title>` - sahifa sarlavhasi (brauzer yorlig'ida ko'rinadi)
  - `<meta>` - kodlash, ko'rinish va boshqa ma'lumotlar
  - `<link>` - CSS fayllariga havolalar
  - `<script>` - JavaScript kodlari

### `<body>`
- Foydalanuvchiga ko'rinadigan barcha kontent shu qismda joylashadi
- Matn, rasmlar, videolar, tugmalar, formlar va boshqa elementlar

---

## 4. **HTML fayllar nomlashi va papka strukturasi**

### Fayl nomlash qoidalari:
1. **Katta-kichik harflarga e'tibor:** Serverlar odatda katta-kichik harflarni farqlaydi
2. **Bo'shliq o'rniga:** `-` yoki `_` ishlating (masalan: `asosiy-sahifa.html`)
3. **Maxsus belgilardan qoching:** `?`, `%`, `*`, `:`, `|`, `"`, `<`, `>` ishlatmang
4. **Fayl kengaytmasi:** `.html` yoki `.htm` bilan tugasin

### Standart papka strukturasi:
```
my-website/
│
├── index.html          (asosiy sahifa)
├── about.html          (biz haqimizda sahifasi)
├── contact.html        (aloqa sahifasi)
│
├── css/
│   └── style.css       (uslublar fayli)
│
├── js/
│   └── script.js       (JavaScript fayli)
│
├── images/
│   ├── logo.png
│   └── background.jpg
│
└── assets/
    ├── fonts/
    └── downloads/
```

**Muhim:** `index.html` - bu asosiy sahifa nomi. Serverlar avtomatik ravishda ushbu faylni ochadi.

---

## 5. **HTML izohlari (Comments)**

### Izohlar nima uchun kerak?
- Kodni tushuntirish va eslatmalar qoldirish uchun
- Kodni vaqtincha o'chirib qo'ymasdan (kommentga olish) sinab ko'rish uchun
- Dasturchilar o'rtasida hamkorlikni osonlashtirish uchun

### Izoh yozish sintaksisi:
```html
<!-- Bu oddiy izoh -->

<!-- 
Bu ko'p qatorli
izohdir
-->

<h1>Sarlavha</h1>  <!-- Bu sarlavha elementi -->

<!-- Kodni vaqtincha "o'chirish":
<img src="rasm.jpg" alt="Tasvir">
-->
```

**Izohlar brauzerda ko'rinmaydi** - faqat kodni o'qiyotgan dasturchilar uchun.

---

## 6. **VS Code + asosiy kengaytmalar (Live Server)**

### VS Code (Visual Studio Code) - Bepul va kuchli matn muharriri

#### O'rnatish va sozlash:
1. [code.visualstudio.com](https://code.visualstudio.com) saytidan yuklab oling
2. O'zbek tilini qo'shish: Extensions panelidan "Uzbek Language Pack" ni qidiring

#### HTML dasturlash uchun foydali tugmalar:
- `! + Tab` - HTML5 shablonini avtomatik yaratadi
- `Ctrl + S` - faylni saqlash
- `Ctrl + /` - tanlangan qatorni izohga aylantirish
- `Alt + Z` - matnni avtomatik qatorga joylashtirish

#### Asosiy kengaytmalar (Extensions):

1. **Live Server** (ENG muhim!)
   - Nima qiladi: HTML fayllaringizni haqiqiy serverda ochadi
   - Afzalligi: O'zgarishlarni saqlaganingizda brauzer avtomatik yangilanadi
   - O'rnatish: Extensions → "Live Server" ni qidiring → Install
   - Ishga tushirish: `Alt + L` → `Alt + O` yoki fayl ustida o'ng tugma → Open with Live Server

2. **Auto Rename Tag**
   - Ochiq yoki yopilgan tegni o'zgartirsangiz, ikkinchisi ham avtomatik o'zgaradi

3. **HTML CSS Support**
   - CSS klass va ID larini taklif qiladi

4. **Prettier**
   - Kodni avtomatik chiroyli qilib formatlaydi

5. **Material Icon Theme**
   - Fayl va papka ikonkalarini chiroyli qiladi

### VS Code da birinchi HTML loyihangizni yaratish:
1. Yangi papka yarating (`my-first-site`)
2. VS Code da oching (File → Open Folder)
3. Yangi fayl yarating: `index.html`
4. `!` ni yozing va `Tab` tugmasini bosing
5. `lang="en"` ni `lang="uz"` ga o'zgartiring
6. Live Server bilan oching

---
# 📚 Modul 2: Matn va Kontent Elementlari

## 1. Sarlavhalar (h1–h6)

### Nazariya:
Sarlavhalar HTMLda matn ierarxiyasini belgilaydi. h1 eng yuqori daraja, h6 eng past daraja.

**SEO qoidasi:** h1 har bir sahifada faqat bitta bo'lishi kerak. Bu asosiy mavzuni ko'rsatadi.

### Dastur:
```html
<h1>Asosiy sarlavha (Eng muhim)</h1>
<h2>Bo'lim sarlavhasi</h2>
<h3>Kichik bo'lim</h3>
<h4>4-daraja sarlavha</h4>
<h5>5-daraja sarlavha</h5>
<h6>6-daraja sarlavha (Eng kam muhim)</h6>
```

---

## 2. Paragraflar va Qator Oraliqlari

### Nazariya:
`<p>` - paragraf yaratish uchun.
`<br>` - qatorni uzish (o'z-o'zidan yopiladi).
`<hr>` - gorizontal chiziq, tematik ajralish.

### Dastur:
```html
<p>Bu birinchi paragraf. HTMLda har bir yangi fikr yangi paragrafda bo'ladi.</p>

<p>Bu ikkinchi paragraf. 
Bu yerda qator uzamiz:<br>
Bu yangi qatorda.</p>

<hr>

<p>Chiziqdan keyingi yangi mavzu.</p>
```

---

## 3. Inline Matn Elementlari

### Nazariya:

**strong** - muhim matn (qalin ko'rinadi)
**em** - urg'u berish (yotiq ko'rinadi)
**mark** - belgilash (fon rangli)
**small** - kichik matn
**code** - dasturiy kod
**span** - uslublash uchun konteyner

### Dastur:
```html
<p>
    <strong>Diqqat:</strong> Bu juda <em>muhim</em> ma'lumot.
</p>

<p>
    Iltimos, <mark>eslab qoling</mark> va 
    <small>kichik eslatmalarga</small> e'tibor bering.
</p>

<p>
    HTML teglari: <code>&lt;h1&gt;</code> va <code>&lt;p&gt;</code>
</p>

<p>
    <span style="color: blue;">Ko'k rangdagi</span> matn.
</p>
```

---

## 4. Ro'yxatlar

### Nazariya:

**Tartibli ro'yxat (ol)** - raqamlar bilan
**Tartibsiz ro'yxat (ul)** - nuqtalar bilan  
**Ta'rif ro'yxati (dl)** - atama va ta'rif

### Dastur:
```html
<!-- Tartibli ro'yxat -->
<ol>
    <li>Birinchi bosqich</li>
    <li>Ikkinchi bosqich</li>
    <li>Uchinchi bosqich</li>
</ol>

<!-- Tartibsiz ro'yxat -->
<ul>
    <li>Olma</li>
    <li>Banan</li>
    <li>Apelsin</li>
</ul>

<!-- Ta'rif ro'yxati -->
<dl>
    <dt>HTML</dt>
    <dd>Veb sahifa strukturasini yaratadi</dd>
    
    <dt>CSS</dt>
    <dd>Veb sahifa dizaynini belgilaydi</dd>
</dl>
```

---

## 5. HTML Entitylar

### Nazariya:
HTMLda maxsus ma'noga ega belgilarni ko'rsatish uchun.

### Asosiy entitylar:
- `&nbsp;` - bo'sh joy (non-breaking space)
- `&lt;` - < (less than)
- `&gt;` - > (greater than)  
- `&amp;` - & (ampersand)
- `&copy;` - © (copyright)
- `&#128512;` - 😀 (emoji - unicode)

### Dastur:
```html
<p>5 &lt; 10 (5 10 dan kichik)</p>
<p>Kod ko'rinishi: &lt;p&gt;matn&lt;/p&gt;</p>
<p>Kompaniya nomi: HTML&nbsp;&amp;&nbsp;CSS&nbsp;Co.</p>
<p>© 2024 Barcha huquqlar himoyalangan</p>
<p>Xursandchilik: &#128512;</p>
```

---

## ✅ Umumiy qoidalar:

1. **Semantik to'g'rilik** - har bir element o'z maqsadiga ko'ra ishlatilsin
2. **Ierarxiya** - sarlavhalar tartibli bo'lsin (h1→h2→h3)
3. **Matn tuzilmasi** - har bir yangi fikr yangi paragrafda
4. **Maxsus belgilar** - HTML entitylar orqali ko'rsatilsin

## 📝 Amaliy namunaviy sahifa:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Matn Elementlari</title>
</head>
<body>
    <h1>HTML Matn Elementlari</h1>
    
    <h2>Kirish</h2>
    <p>HTML <strong>matn elementlari</strong> veb sahifa kontentini tashkil qilish uchun ishlatiladi.</p>
    
    <h2>Ro'yxatlar</h2>
    <ul>
        <li>Sarlavhalar (h1-h6)</li>
        <li>Paragraflar (p)</li>
        <li>Inline elementlar</li>
    </ul>
    
    <h2>Kod misoli</h2>
    <p>HTML tegi: <code>&lt;h1&gt;Sarlavha&lt;/h1&gt;</code></p>
    
    <hr>
    
    <p><small>© 2024 | HTML darslari</small></p>
</body>
</html>
```
---
# 📚 Modul 3: Havolalar, Media va Fayllar

## 1. Anchor Tegi (`<a>`)

### Nazariya:
`<a>` tegi giperhavolalar yaratish uchun ishlatiladi.

**Asosiy atributlar:**
- `href` - havola manzili (majburiy)
- `target` - qayerda ochilishi
- `download` - faylni yuklab olish

### Dastur:
```html
<!-- Oddiy havola -->
<a href="https://www.google.com">Google saytiga o'tish</a>

<!-- Yangi oynada ochish -->
<a href="https://www.google.com" target="_blank">Yangi oynada ochish</a>

<!-- Sahifa ichidagi bo'limga havola -->
<a href="#section2">2-bo'limga o'tish</a>
<h2 id="section2">2-bo'lim</h2>

<!-- Faylni yuklab olish -->
<a href="document.pdf" download>PDFni yuklab olish</a>

<!-- Email havolasi -->
<a href="mailto:example@email.com">Email yozish</a>

<!-- Telefon qilish -->
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>
```

---

## 2. Nisbiy va Absolyut Yo'llar

### Nazariya:
**Absolyut yo'l** - to'liq manzil (internetdagi)
**Nisbiy yo'l** - joriy papkaga nisbatan

### Dastur:
```html
<!-- Absolyut yo'llar -->
<a href="https://www.example.com/page.html">Absolyut havola</a>
<img src="https://www.example.com/images/photo.jpg">

<!-- Nisbiy yo'llar -->
<a href="about.html">Bir daraja pastdagi fayl</a>
<img src="images/logo.png"> <!-- images papkasidan -->
<img src="../assets/icon.png"> <!-- Bir daraja yuqori papkadan -->
<img src="./docs/manual.pdf"> <!-- Joriy papkadan -->
```

---

## 3. Tasvirlar (`<img>`)

### Nazariya:
`<img>` tegi rasm qo'yish uchun. O'z-o'zidan yopiladi.

**Asosiy atributlar:**
- `src` - rasm manbai (majburiy)
- `alt` - muqobil matn (accessibility uchun muhim)
- `width`/`height` - o'lchamlar

### Dastur:
```html
<!-- Oddiy rasm -->
<img src="nature.jpg" alt="Tabiat manzarasi">

<!-- O'lchamlari bilan -->
<img src="logo.png" alt="Sayt logotipi" width="200" height="100">

<!-- Accessibility uchun to'liq alt matn -->
<img src="chart.png" alt="2024 yil savdo ko'rsatkichlari diagrammasi">

<!-- Internetdagi rasm -->
<img src="https://example.com/image.jpg" alt="Namuna rasm">

<!-- Rasm mavjud bo'lmasa -->
<img src="missing.jpg" alt="Rasm yuklanmadi">
```

---

## 4. Audio va Video

### Nazariya:
HTML5 audio va video elementlari.

**Audio atributlari:** `controls`, `autoplay`, `loop`, `muted`
**Video atributlari:** `controls`, `autoplay`, `loop`, `width`, `height`

### Dastur:
```html
<!-- Audio -->
<audio controls>
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg">
    Brauzeringiz audio elementini qo'llab-quvvatlamaydi
</audio>

<!-- Audio qo'shimcha atributlar -->
<audio controls autoplay loop muted>
    <source src="background.mp3" type="audio/mpeg">
</audio>

<!-- Video -->
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Brauzeringiz video elementini qo'llab-quvvatlamaydi
</video>

<!-- Videoni avtomatik takrorlash -->
<video controls loop>
    <source src="advertisement.mp4" type="video/mp4">
</video>
```

---

## 5. Favicon

### Nazariya:
Favicon - brauzer yorlig'idagi kichik ikonka.

### Dastur:
```html
<head>
    <title>Mening saytim</title>
    
    <!-- Favicon (turli formatlar) -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.png" type="image/png">
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    
    <!-- Apple devices uchun -->
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    
    <!-- Manifest fayli (PWA uchun) -->
    <link rel="manifest" href="site.webmanifest">
</head>
```

---

## 6. Fayl va Asset Tashkiloti

### Nazariya:
To'g'ri fayl tashkiloti - loyihani boshqarishni osonlashtiradi.

### Tashkilot namunasi:
```
my-website/
├── index.html
├── about.html
├── contact.html
├── favicon.ico
├── css/
│   ├── style.css
│   └── reset.css
├── js/
│   ├── main.js
│   └── utils.js
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   └── icons/
│       ├── home.svg
│       └── user.svg
├── assets/
│   ├── documents/
│   │   └── manual.pdf
│   └── fonts/
│       └── roboto.ttf
├── audio/
│   └── background.mp3
└── video/
    └── tutorial.mp4
```

---

## ✅ Umumiy qoidalar:

1. **Accessibility** - har bir rasm uchun `alt` atributi majburiy
2. **Yo'llar** - nisbiy yo'llarni afzal ko'ring
3. **Formatlar** - mos media formatlarini tanlang
4. **Fayl tashkiloti** - tizimli papka strukturasi

## 📝 Amaliy namunaviy sahifa:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Elementlari</title>
    <link rel="icon" href="images/favicon.ico">
</head>
<body>
    <header>
        <img src="images/logo.png" alt="Sayt logotipi" width="150">
        <nav>
            <a href="index.html">Bosh sahifa</a>
            <a href="about.html">Biz haqimizda</a>
            <a href="contact.html">Aloqa</a>
            <a href="documents/catalog.pdf" download>Katalogni yuklab olish</a>
        </nav>
    </header>

    <main>
        <h1>Media Elementlariga misol</h1>
        
        <section>
            <h2>Galereya</h2>
            <img src="images/nature1.jpg" alt="Tog' manzarasi" width="300">
            <img src="images/nature2.jpg" alt="Daryo bo'yi" width="300">
        </section>

        <section>
            <h2>Audio</h2>
            <audio controls>
                <source src="audio/sample.mp3" type="audio/mpeg">
                Audio elementini qo'llab-quvvatlamaydi
            </audio>
        </section>

        <section>
            <h2>Video</h2>
            <video controls width="600">
                <source src="video/tutorial.mp4" type="video/mp4">
                Video elementini qo'llab-quvvatlamaydi
            </video>
        </section>

        <section>
            <h2>Foydali havolalar</h2>
            <ul>
                <li><a href="https://google.com" target="_blank">Google</a></li>
                <li><a href="#top">Yuqoriga qaytish</a></li>
                <li><a href="mailto:info@example.com">Biz bilan bog'lanish</a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Mening saytim. Barcha huquqlar himoyalangan.</p>
        <p>
            <a href="privacy.html">Maxfiylik siyosati</a> |
            <a href="terms.html">Foydalanish shartlari</a>
        </p>
    </footer>
</body>
</html>
```

## 🔑 Muhim eslatmalar:

1. **`alt` atributi** - ko'zi ojizlar uchun skrin o'qish dasturlari, shuningdek rasm yuklanmagan holatda ko'rinadi
2. **`target="_blank"`** - yangi oynada ochiladi, xavfsizlik uchun `rel="noopener noreferrer"` qo'shing
3. **Media formatlari** - JPEG (fotolar), PNG (shaffoflik), SVG (vektor), WebP (zamonaviy)
4. **Fayl hajmi** - veb uchun rasmlarni siqish (compress) qilish muhim

---

# 📚 Modul 4: Jadval va Ma’lumotlar (Tables & Data)

## 1. `<table>` tegi

### Nazariya:

HTML’da **jadval** ma’lumotlarni qat’iy qator va ustunlarda ko‘rsatish uchun ishlatiladi.

**Asosiy teglar:**

* `<table>` – jadvalni yaratadi
* `<tr>` – jadval qatori (table row)
* `<th>` – sarlavha ustuni (table header)
* `<td>` – oddiy ma’lumot hujayrasi (table data)
* `<caption>` – jadval sarlavhasi

### Dastur:

```html
<table border="1">
    <caption>Talabalar ro'yxati</caption>
    <tr>
        <th>Ism</th>
        <th>Yosh</th>
        <th>Fakultet</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>20</td>
        <td>Matematika</td>
    </tr>
    <tr>
        <td>Vali</td>
        <td>21</td>
        <td>Fizika</td>
    </tr>
    <tr>
        <td>Gulbahor</td>
        <td>19</td>
        <td>Informatika</td>
    </tr>
</table>
```

**Izoh:**

* `<caption>` – jadval nomi ko‘rinadi.
* `<th>` – odatda qalin (bold) va markazlashtirilgan matn bilan ko‘rsatiladi.
* `<td>` – normal ma’lumot hujayrasi.

---

## 2. Jadval atributlari va styling

### Nazariya:

HTML jadvaliga turli atributlar bilan **ko‘rinish va tartib** berish mumkin.

**Muhim atributlar:**

* `border` – chekka qalinligi
* `cellpadding` – hujayra ichidagi bo‘sh joy
* `cellspacing` – hujayralar orasidagi bo‘sh joy
* `width`/`height` – o‘lcham
* CSS orqali: `border-collapse`, `text-align`, `background-color`, `color`

### Dastur:

```html
<table border="1" cellpadding="10" cellspacing="5" style="border-collapse: collapse; width: 80%; text-align: center;">
    <caption>Fakultetlar reytingi</caption>
    <tr style="background-color: lightgray;">
        <th>№</th>
        <th>Fakultet</th>
        <th>O‘quvchilar soni</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Matematika</td>
        <td>120</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Fizika</td>
        <td>90</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Informatika</td>
        <td>150</td>
    </tr>
</table>
```

**Izoh:**

* `cellpadding="10"` – hujayra ichidagi matn bilan chekka orasini 10px qiladi.
* `cellspacing="5"` – hujayralar orasidagi bo‘sh joy 5px.
* `border-collapse: collapse;` – chekkalarni birlashtirib, chiroyli ko‘rinish beradi.

---

## 3. `<thead>`, `<tbody>`, `<tfoot>`

### Nazariya:

Jadvalni semantik jihatdan bo‘lish uchun ishlatiladi.

* `<thead>` – sarlavha qatori
* `<tbody>` – asosiy ma’lumotlar
* `<tfoot>` – jadval oxiridagi yakuniy qatorlar (hisob-kitob, summalar)

### Dastur:

```html
<table border="1" style="border-collapse: collapse; width: 60%;">
    <caption>Mahsulotlar narxi</caption>
    <thead>
        <tr>
            <th>Mahsulot</th>
            <th>Narxi (so'm)</th>
            <th>Miqdori</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Olma</td>
            <td>5000</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Banan</td>
            <td>8000</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Uzum</td>
            <td>12000</td>
            <td>3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Jami</td>
            <td>–</td>
            <td>18</td>
        </tr>
    </tfoot>
</table>
```

**Izoh:**

* `<tfoot>` odatda hisob-kitoblar yoki yakuniy ma’lumotlar uchun ishlatiladi.
* `<thead>` va `<tfoot>` sahifa bo‘ylab jadval scroll qilinsa ham markazda qoladi.

---

## 4. Ustunlar va qatorlarni birlashtirish

### Nazariya:

Jadvalning hujayralarini **birlashtirish** mumkin:

* `colspan` – ustunlarni birlashtiradi
* `rowspan` – qatorlarni birlashtiradi

### Dastur:

```html
<table border="1" style="border-collapse: collapse; width: 50%; text-align: center;">
    <tr>
        <th rowspan="2">Ism</th>
        <th colspan="2">Baholar</th>
    </tr>
    <tr>
        <th>Matematika</th>
        <th>Fizika</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>85</td>
        <td>90</td>
    </tr>
    <tr>
        <td>Vali</td>
        <td>78</td>
        <td>88</td>
    </tr>
</table>
```

**Izoh:**

* `rowspan="2"` – “Ism” ustuni ikki qatorni qamrab oladi.
* `colspan="2"` – “Baholar” sarlavhasi ikkita ustunni qamrab oladi.

---

## 5. Amaliy qo‘llanma

### Nazariya:

Jadval elementlarini ishlatishda:

1. Har bir jadvalga `<caption>` qo‘shish tavsiya etiladi.
2. Sarlavhalar `<th>` orqali aniqlanishi kerak.
3. Hujayralarni to‘g‘ri `colspan` va `rowspan` bilan birlashtirish mumkin.
4. CSS orqali dizayn berish – ranglar, chegara va o‘lchamlar.

### Misol sahifa:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jadval Misoli</title>
    <style>
        table {
            border-collapse: collapse;
            width: 70%;
            margin: 20px auto;
            text-align: center;
        }
        th, td {
            border: 1px solid #333;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        caption {
            caption-side: top;
            font-size: 1.5em;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <table>
        <caption>Talabalar baholari</caption>
        <thead>
            <tr>
                <th>Ism</th>
                <th>Matematika</th>
                <th>Fizika</th>
                <th>Informatika</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ali</td>
                <td>85</td>
                <td>90</td>
                <td>95</td>
            </tr>
            <tr>
                <td>Vali</td>
                <td>78</td>
                <td>88</td>
                <td>82</td>
            </tr>
            <tr>
                <td>Gulbahor</td>
                <td>92</td>
                <td>85</td>
                <td>89</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>O‘rtacha</td>
                <td>85</td>
                <td>87.7</td>
                <td>88.7</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

---

✅ **Muhim eslatmalar:**

1. Jadval ma’lumotlarni **toza va tushunarli** ko‘rsatishi kerak.
2. CSS bilan rang va chegaralarni sozlash tavsiya etiladi.
3. `thead`, `tbody`, `tfoot` bilan semantik tuzilma yanada qulayroq bo‘ladi.
4. `colspan` va `rowspan` murakkab jadval tuzishda juda foydali.

---


# 📚 Modul 5: Forms (Formalar) – 1.5 dars

## 1. `<form>` tegi

### Nazariya:

HTML formasi foydalanuvchidan ma’lumot to‘plash va serverga yuborish uchun ishlatiladi.
**Asosiy atributlar:**

* `action` – ma’lumot yuboriladigan manzil (URL)
* `method` – yuborish usuli (`GET` yoki `POST`)
* `enctype` – yuborish shakli (`multipart/form-data` fayl uchun, `application/x-www-form-urlencoded` standart)

### Dastur:

```html
<form action="/submit.php" method="post">
    <label for="name">Ismingiz:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Yuborish</button>
</form>
```

**Izoh:**

* `label` – foydalanuvchi interfeysi uchun muhim, `for` atributi input bilan bog‘lanadi.
* `name` – serverga yuborilgan ma’lumot kalit sifatida ishlatiladi.

---

## 2. Input turlari (`<input>`)

### Nazariya:

`<input>` formadagi asosiy element bo‘lib, turli turdagi ma’lumotlarni qabul qiladi.

| `type`   | Tavsif                           |
| -------- | -------------------------------- |
| text     | Oddiy matn                       |
| password | Parol                            |
| email    | Email manzil (validatsiya bilan) |
| number   | Raqam                            |
| tel      | Telefon raqami                   |
| url      | Web-sayt manzili                 |
| date     | Sana                             |
| checkbox | Belgilash katakchasi             |
| radio    | Radioknopka (bir variant)        |
| file     | Fayl yuklash                     |
| hidden   | Ko‘rinmaydigan input             |
| submit   | Yuborish tugmasi                 |
| reset    | Formani tozalash                 |
| button   | Oddiy tugma                      |

### Dastur:

```html
<form action="/submit.php" method="post">
    <label for="username">Foydalanuvchi:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Parol:</label>
    <input type="password" id="password" name="password" required>

    <label for="age">Yosh:</label>
    <input type="number" id="age" name="age" min="1" max="100">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label>
        <input type="checkbox" name="subscribe"> Yangiliklarga obuna bo‘lish
    </label>

    <button type="submit">Yuborish</button>
    <button type="reset">Tozalash</button>
</form>
```

**Izoh:**

* `required` – input majburiy.
* `min` va `max` – raqamlar uchun chegaralar.

---

## 3. Radiobutton va checkbox

### Nazariya:

* **Radiobutton** – bir guruhdan faqat bitta variantni tanlash.
* **Checkbox** – bir nechta variantni tanlash mumkin.

### Dastur:

```html
<form>
    <p>Jinsingiz:</p>
    <label><input type="radio" name="gender" value="male"> Erkak</label>
    <label><input type="radio" name="gender" value="female"> Ayol</label>

    <p>Qiziqishlaringiz:</p>
    <label><input type="checkbox" name="hobby" value="sports"> Sport</label>
    <label><input type="checkbox" name="hobby" value="music"> Musiqa</label>
    <label><input type="checkbox" name="hobby" value="reading"> Kitob o‘qish</label>
</form>
```

**Izoh:**

* Radiobuttonlarda `name` bir xil bo‘lishi shart, shunda faqat bitta variant tanlanadi.
* Checkboxlar bir nechta qiymat yuboradi.

---

## 4. `<select>` va `<option>` (Tanlovlar)

### Nazariya:

Dropdown menyular uchun ishlatiladi.

### Dastur:

```html
<label for="country">Mamlakatingiz:</label>
<select id="country" name="country">
    <option value="">Tanlang</option>
    <option value="uz">O‘zbekiston</option>
    <option value="us">AQSh</option>
    <option value="uk">Buyuk Britaniya</option>
</select>
```

**Izoh:**

* `value` – serverga yuborilgan qiymat.
* Bo‘sh option – foydalanuvchini tanlov qilishga majbur qiladi.

---

## 5. `<textarea>` (Matn maydoni)

### Nazariya:

Uzoq matn kiritish uchun ishlatiladi.

### Dastur:

```html
<label for="message">Xabar:</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Xabaringizni yozing..."></textarea>
```

**Izoh:**

* `rows` va `cols` – ko‘rinish o‘lchami.
* Placeholder – foydalanuvchiga maslahat ko‘rsatadi.

---

## 6. Fayl yuklash (`<input type="file">`)

### Nazariya:

Foydalanuvchi faylni serverga yuborishi mumkin.

### Dastur:

```html
<form action="/upload.php" method="post" enctype="multipart/form-data">
    <label for="photo">Rasm yuklash:</label>
    <input type="file" id="photo" name="photo" accept="image/*">
    <button type="submit">Yuborish</button>
</form>
```

**Izoh:**

* `enctype="multipart/form-data"` – fayl yuborish uchun majburiy.
* `accept` – qabul qilinadigan fayl turlarini belgilaydi.

---

## 7. Formani yuborish va reset

### Nazariya:

* `submit` – formani yuboradi
* `reset` – formadagi barcha inputlarni boshlang‘ich holatga qaytaradi

### Dastur:

```html
<button type="submit">Yuborish</button>
<button type="reset">Tozalash</button>
```

---

## 8. Amaliy sahifa namunasi

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt Formasi</title>
    <style>
        form {
            max-width: 500px;
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        label {
            font-weight: bold;
        }
        input, textarea, select, button {
            padding: 8px;
            font-size: 1em;
        }
    </style>
</head>
<body>
    <h1 style="text-align:center;">Kontakt Formasi</h1>
    <form action="/submit.php" method="post" enctype="multipart/form-data">
        <label for="name">Ism:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="gender">Jins:</label>
        <input type="radio" name="gender" value="male"> Erkak
        <input type="radio" name="gender" value="female"> Ayol

        <label for="hobby">Qiziqishlar:</label>
        <input type="checkbox" name="hobby" value="music"> Musiqa
        <input type="checkbox" name="hobby" value="sports"> Sport
        <input type="checkbox" name="hobby" value="reading"> Kitob

        <label for="country">Mamlakat:</label>
        <select id="country" name="country">
            <option value="">Tanlang</option>
            <option value="uz">O‘zbekiston</option>
            <option value="us">AQSh</option>
            <option value="uk">Buyuk Britaniya</option>
        </select>

        <label for="message">Xabar:</label>
        <textarea id="message" name="message" rows="5" placeholder="Xabaringizni yozing..."></textarea>

        <label for="photo">Rasm yuklash:</label>
        <input type="file" id="photo" name="photo" accept="image/*">

        <button type="submit">Yuborish</button>
        <button type="reset">Tozalash</button>
    </form>
</body>
</html>
```

---

## ✅ Muhim eslatmalar:

1. **`name` atributi** – serverga yuboriladigan ma’lumot kaliti.
2. **`required`** – foydalanuvchi majburiy maydonni to‘ldirmasa, yuborilmaydi.
3. **`type="email"` yoki `type="number"`** – brauzer avtomatik validatsiya qiladi.
4. **`enctype="multipart/form-data"`** – fayl yuborish uchun majburiy.
5. Formani foydalanuvchi uchun **tushunarli va qulay** qilish juda muhim.

---
