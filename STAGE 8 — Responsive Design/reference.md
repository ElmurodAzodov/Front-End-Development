# **STAGE 8 — Responsive Design**

## Responsive Design

Responsive design - bir xil veb-saytning barcha qurilmalarda (mobil, planshet, desktop) to'g'ri ko'rinishini ta'minlash.

---

### 1. Viewport Meta Tag

Brauzerga sahifaning o'lchami va masshtabini qanday boshqarish kerakligini bildiradi.

#### Asosiy viewport:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Tarkibiy qismlari**:
- `width=device-width` - sahifa eni qurilma eniga teng
- `initial-scale=1.0` - boshlang'ich masshtab 1:1
- `maximum-scale` - maksimal masshtab (zooms)
- `minimum-scale` - minimal masshtab
- `user-scalable` - masshtablash ruxsati (yes/no)

**Dastur 1 - Viewport turlari**:
```html
<!DOCTYPE html>
<html>
<head>
    <!-- Standart viewport (mobil uchun) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Cheklangan masshtab bilan -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0">
    
    <!-- Masshtab taqiqlangan (foydalanuvchi tajribasi uchun tavsiya etilmaydi) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    
    <style>
        body { margin: 0; font-family: sans-serif; }
        .box {
            width: 100%;
            background: lightblue;
            padding: 20px;
            text-align: center;
            border: 1px solid blue;
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Viewport Meta Tag</h2>
        <p>width=device-width, initial-scale=1.0</p>
        <p>Sahifa barcha qurilmalarda to'g'ri ko'rinadi</p>
    </div>
</body>
</html>
```

**Dastur 2 - Viewportsiz vs Viewport bilan**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Viewport solishtirish</title>
</head>
<body style="margin: 0; font-family: sans-serif;">
    <div style="background: #ff6b6b; padding: 20px; width: 980px; color: white;">
        <h3>Viewportsiz (desktop o'lcham)</h3>
        <p>width: 980px - mobil ekranga sig'maydi</p>
        <p>Foydalanuvchi zoomsiz ko'ra olmaydi</p>
    </div>
    
    <!-- Viewport bilan -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div style="background: #4ecdc4; padding: 20px; width: 100%; color: white;">
        <h3>Viewport bilan</h3>
        <p>width: 100% - mobil ekranga moslashadi</p>
        <p>Barcha qurilmalarda to'g'ri ko'rinadi</p>
    </div>
</body>
</html>
```

---

### 2. Media Queries

Turli ekran o'lchamlari, qurilma xususiyatlari va foydalanuvchi sozlamalariga qarab CSS qo'llash.

#### Mobile First Approach (Avval mobil, keyin kattaroq ekranlar)

**Dastur 1 - Mobile First asoslari**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Mobile first - bazaviy stillar (0px dan boshlab) */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: sans-serif;
            background: #f5f5f5;
        }
        
        .container {
            width: 100%;
            padding: 15px;
        }
        
        .header {
            background: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
        
        .nav {
            background: #444;
            display: flex;
            flex-direction: column;
        }
        
        .nav a {
            color: white;
            padding: 15px;
            text-decoration: none;
            border-bottom: 1px solid #555;
        }
        
        .content {
            padding: 20px 0;
        }
        
        .card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Tablet (768px va undan katta) */
        @media (min-width: 768px) {
            .container {
                width: 750px;
                margin: 0 auto;
                padding: 20px;
            }
            
            .nav {
                flex-direction: row;
            }
            
            .nav a {
                border-bottom: none;
                flex: 1;
                text-align: center;
            }
            
            .card {
                display: inline-block;
                width: calc(50% - 15px);
                margin-right: 15px;
            }
            
            .card:nth-child(even) {
                margin-right: 0;
            }
        }
        
        /* Desktop (1024px va undan katta) */
        @media (min-width: 1024px) {
            .container {
                width: 980px;
            }
            
            .card {
                width: calc(33.33% - 15px);
            }
            
            .card:nth-child(3) {
                margin-right: 0;
            }
        }
        
        /* Katta ekranlar (1200px va undan katta) */
        @media (min-width: 1200px) {
            .container {
                width: 1140px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Responsive Design</h1>
        <p>Mobile First Approach</p>
    </div>
    
    <div class="nav">
        <a href="#">Bosh sahifa</a>
        <a href="#">Mahsulotlar</a>
        <a href="#">Xizmatlar</a>
        <a href="#">Aloqa</a>
    </div>
    
    <div class="container">
        <div class="content">
            <div class="card">
                <h3>Kartochka 1</h3>
                <p>Mobil: 100% eni, vertikal</p>
                <p>Tablet: 2 ta yonma-yon</p>
                <p>Desktop: 3 ta yonma-yon</p>
            </div>
            <div class="card">
                <h3>Kartochka 2</h3>
                <p>Ekran o'lchamiga moslashadi</p>
            </div>
            <div class="card">
                <h3>Kartochka 3</h3>
                <p>Media query orqali</p>
            </div>
            <div class="card">
                <h3>Kartochka 4</h3>
                <p>Responsive grid</p>
            </div>
            <div class="card">
                <h3>Kartochka 5</h3>
                <p>Mobile first usuli</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Dastur 2 - Media query turlari**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .demo-box {
            padding: 20px;
            margin: 10px;
            background: #4ecdc4;
            color: white;
            border-radius: 8px;
        }
        
        /* min-width - kichikdan kattaga */
        @media (min-width: 768px) {
            .min-width-demo::after {
                content: "Ekran eni 768px dan katta";
                display: block;
                background: #ff6b6b;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        /* max-width - kattadan kichikga */
        @media (max-width: 767px) {
            .max-width-demo::after {
                content: "Ekran eni 767px dan kichik (mobil)";
                display: block;
                background: #ffd93d;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        /* oraliq qiymatlar */
        @media (min-width: 768px) and (max-width: 1023px) {
            .range-demo::after {
                content: "Ekran eni 768px dan 1023px gacha (planshet)";
                display: block;
                background: #95E1D3;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        /* orientation (landscape/portrait) */
        @media (orientation: landscape) {
            .orientation-demo::after {
                content: "Landscape (gorizontal) rejim";
                display: block;
                background: #a8e6cf;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        @media (orientation: portrait) {
            .orientation-demo::after {
                content: "Portrait (vertikal) rejim";
                display: block;
                background: #d4a5a5;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        /* aspect-ratio */
        @media (min-aspect-ratio: 16/9) {
            .aspect-demo::after {
                content: "16:9 yoki kengroq nisbat";
                display: block;
                background: #b2f0e5;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
        
        /* resolution (ekran zichligi) */
        @media (min-resolution: 2dppx) {
            .resolution-demo::after {
                content: "Retina yoki yuqori aniqlikdagi ekran";
                display: block;
                background: #f7d794;
                color: black;
                padding: 10px;
                margin-top: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="demo-box min-width-demo">
        <strong>min-width test:</strong> Brauzer enini o'zgartiring
    </div>
    
    <div class="demo-box max-width-demo">
        <strong>max-width test:</strong> Mobil o'lchamda matn chiqadi
    </div>
    
    <div class="demo-box range-demo">
        <strong>range test:</strong> Planshet o'lchamda
    </div>
    
    <div class="demo-box orientation-demo">
        <strong>orientation test:</strong> Telefoningizni aylantiring
    </div>
    
    <div class="demo-box aspect-demo">
        <strong>aspect-ratio test:</strong> 16:9 nisbatda
    </div>
    
    <div class="demo-box resolution-demo">
        <strong>resolution test:</strong> Retina ekranda
    </div>
</body>
</html>
```

**Dastur 3 - Print styles**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        .header {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .nav {
            background: #f0f0f0;
            padding: 15px;
            margin: 10px 0;
        }
        
        .nav a {
            margin: 0 10px;
            color: #333;
        }
        
        .content {
            line-height: 1.6;
        }
        
        .no-print {
            background: #ff6b6b;
            color: white;
            padding: 15px;
            border-radius: 5px;
        }
        
        .print-only {
            display: none;
        }
        
        /* Chop etish uchun stillar */
        @media print {
            /* Umumiy sozlamalar */
            body {
                margin: 0.5in;
                font-size: 12pt;
                background: white;
                color: black;
            }
            
            /* Navigatsiyani yashirish */
            .nav {
                display: none;
            }
            
            /* No-print klassli elementlarni yashirish */
            .no-print {
                display: none;
            }
            
            /* Print-only klassli elementlarni ko'rsatish */
            .print-only {
                display: block;
                border: 1px solid #ccc;
                padding: 10px;
                margin: 20px 0;
                font-size: 10pt;
                color: #666;
            }
            
            /* Header stillari */
            .header {
                background: none;
                color: black;
                border-bottom: 2px solid black;
                padding: 0 0 10px 0;
            }
            
            /* Havolalardan URL ko'rsatish */
            a::after {
                content: " (" attr(href) ")";
                font-size: 10pt;
                color: #666;
            }
            
            /* Sahifa tanaffuslari */
            h1, h2, h3 {
                page-break-after: avoid;
            }
            
            .content {
                page-break-inside: avoid;
            }
            
            /* Sahifa o'lchami */
            @page {
                size: A4;
                margin: 1in;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Print Styles Demo</h1>
    </div>
    
    <div class="nav">
        <a href="#">Bosh sahifa</a>
        <a href="#">Mahsulotlar</a>
        <a href="#">Aloqa</a>
    </div>
    
    <div class="content">
        <h2>Maqola sarlavhasi</h2>
        <p>
            Bu matn chop etilganda maxsus stillar qo'llaniladi.
            Navigatsiya menyusi yashirinadi, shrift o'zgaradi.
        </p>
        
        <div class="no-print">
            Bu blok chop etilganda ko'rinmaydi! (no-print)
        </div>
        
        <div class="print-only">
            Bu blok faqat chop etilganda ko'rinadi!
            Qog'oz versiya uchun maxsus ma'lumot.
        </div>
        
        <p>
            Havolalar chop etilganda <a href="https://example.com">url</a> 
            yonida ko'rsatiladi.
        </p>
    </div>
    
    <p>
        <button onclick="window.print()">Sahifani chop etish</button>
    </p>
</body>
</html>
```

**Dastur 4 - Dark mode**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --card-bg: #f5f5f5;
            --border-color: #dddddd;
            --link-color: #0066cc;
            --header-bg: #f0f0f0;
            --shadow: rgba(0,0,0,0.1);
        }
        
        /* Dark mode sozlamalari */
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #1a1a1a;
                --text-color: #f0f0f0;
                --card-bg: #2d2d2d;
                --border-color: #404040;
                --link-color: #88ccff;
                --header-bg: #2d2d2d;
                --shadow: rgba(0,0,0,0.5);
            }
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
            transition: all 0.3s ease;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .header {
            background-color: var(--header-bg);
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
            border: 1px solid var(--border-color);
        }
        
        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px var(--shadow);
        }
        
        a {
            color: var(--link-color);
        }
        
        .badge {
            display: inline-block;
            padding: 5px 10px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            font-size: 14px;
        }
        
        .color-palette {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .color {
            width: 50px;
            height: 50px;
            border-radius: 8px;
        }
        
        .system-info {
            background: var(--card-bg);
            padding: 15px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            font-family: monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dark Mode Demo</h1>
            <p>Sizning tizim sozlamangiz: 
                <span id="theme-indicator" class="badge"></span>
            </p>
        </div>
        
        <div class="card">
            <h2>Media Query: prefers-color-scheme</h2>
            <p>
                Bu sahifa sizning operatsion tizimingizdagi 
                dark/light mode sozlamalarini avtomatik aniqlaydi.
            </p>
            <p>
                <strong>Joriy rejim:</strong> 
                <span id="current-theme"></span>
            </p>
        </div>
        
        <div class="card">
            <h2>Ranglar palitrasi</h2>
            <div class="color-palette">
                <div class="color" style="background: var(--bg-color); border: 1px solid var(--border-color);"></div>
                <div class="color" style="background: var(--text-color);"></div>
                <div class="color" style="background: var(--card-bg); border: 1px solid var(--border-color);"></div>
                <div class="color" style="background: var(--link-color);"></div>
            </div>
        </div>
        
        <div class="card">
            <h2>CSS Variables</h2>
            <div class="system-info">
                <pre>
:root {
  --bg-color: #ffffff;  /* dark: #1a1a1a */
  --text-color: #333333;  /* dark: #f0f0f0 */
  --card-bg: #f5f5f5;  /* dark: #2d2d2d */
  --link-color: #0066cc;  /* dark: #88ccff */
}
                </pre>
            </div>
        </div>
    </div>
    
    <script>
        // Joriy rejimni aniqlash
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.getElementById('current-theme').textContent = isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode';
        document.getElementById('theme-indicator').textContent = isDarkMode ? 'Dark' : 'Light';
        
        // O'zgarishlarni kuzatish
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            document.getElementById('current-theme').textContent = e.matches ? '🌙 Dark Mode' : '☀️ Light Mode';
            document.getElementById('theme-indicator').textContent = e.matches ? 'Dark' : 'Light';
        });
    </script>
</body>
</html>
```

**Dastur 5 - Reduced motion (harakatni kamaytirish)**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        /* Animatsiyali element */
        .animated-box {
            width: 100px;
            height: 100px;
            background: #4ecdc4;
            margin: 20px;
            animation: bounce 1s infinite alternate;
            transition: transform 0.5s;
        }
        
        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(50px); }
        }
        
        /* Hover effekti */
        .hover-box {
            width: 100px;
            height: 100px;
            background: #ff6b6b;
            margin: 20px;
            transition: all 0.5s;
        }
        
        .hover-box:hover {
            transform: scale(1.2) rotate(10deg);
            background: #ff8e8e;
        }
        
        /* Reduced motion sozlamalari */
        @media (prefers-reduced-motion: reduce) {
            /* Barcha animatsiyalarni o'chirish */
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
            
            .animated-box {
                animation: none !important;
            }
            
            .hover-box:hover {
                transform: none !important;
                background: #ff6b6b !important;
            }
            
            /* Ogohlantirish xabari */
            .motion-warning {
                display: block;
                background: #ffd93d;
                color: black;
                padding: 15px;
                margin: 20px;
                border-radius: 5px;
            }
        }
        
        .motion-warning {
            display: none;
        }
        
        .card {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="motion-warning">
        ⚡ Harakatni kamaytirish rejimi yoqilgan. Animatsiyalar o'chirildi.
    </div>
    
    <div class="card">
        <h2>Reduced Motion Test</h2>
        <p>
            Agar tizimingizda harakatni kamaytirish yoqilgan bo'lsa,
            quyidagi animatsiyalar o'chadi.
        </p>
        
        <div style="display: flex;">
            <div class="animated-box"></div>
            <div class="hover-box"></div>
        </div>
        
        <p>
            <strong>Windows:</strong> Sozlamalar → Qulaylik → Animatsiyalar<br>
            <strong>macOS:</strong> System Preferences → Accessibility → Reduce motion<br>
            <strong>iOS/Android:</strong> Sozlamalar → Qulaylik → Harakatni kamaytirish
        </p>
    </div>
    
    <div class="card">
        <h2>Nima uchun muhim?</h2>
        <ul>
            <li>Vestibulyar buzilishlar (bosh aylanishi)</li>
            <li>Migren bilan og'rigan foydalanuvchilar</li>
            <li>Epilepsiya xavfi</li>
            <li>Diqqat yetishmasligi</li>
        </ul>
    </div>
</body>
</html>
```

---

### 3. Container Queries

Ota-element (container) o'lchamiga qarab stillarni o'zgartirish.

**Dastur 1 - Container query asoslari**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        /* Container setup */
        .card-container {
            container-type: inline-size;
            container-name: card;
            border: 2px dashed #4ecdc4;
            padding: 20px;
            margin: 20px 0;
            resize: horizontal;
            overflow: auto;
        }
        
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .card-image {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            height: 150px;
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card-title {
            margin: 0 0 10px 0;
        }
        
        /* Container query */
        @container card (min-width: 400px) {
            .card {
                display: flex;
                align-items: center;
            }
            
            .card-image {
                flex: 0 0 200px;
                height: 200px;
            }
            
            .card-content {
                flex: 1;
            }
            
            .card-title {
                font-size: 1.5em;
            }
        }
        
        @container card (min-width: 600px) {
            .card-image {
                flex-basis: 300px;
                height: 250px;
            }
            
            .card-content {
                padding: 30px;
            }
        }
        
        /* Container query units */
        .container-units {
            container-type: inline-size;
            background: #f0f0f0;
            padding: 20px;
            margin: 20px 0;
            resize: horizontal;
            overflow: auto;
        }
        
        .unit-demo {
            background: #4ecdc4;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .unit-demo h3 {
            font-size: 5cqw;  /* container width 1% */
            margin: 0 0 10px 0;
        }
        
        .unit-demo p {
            font-size: 3cqw;
            margin: 5px 0;
        }
        
        .unit-demo .width {
            width: 50cqw;  /* container width 50% */
            background: rgba(0,0,0,0.2);
            margin: 10px auto;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h2>Container Queries Demo</h2>
    <p>Quyidagi kartochkaning enini o'zgartiring (o'ng pastki burchak)</p>
    
    <div class="card-container">
        <div class="card">
            <div class="card-image"></div>
            <div class="card-content">
                <h3 class="card-title">Container Query Card</h3>
                <p>
                    400px dan katta bo'lganda: yonma-yon layout
                    600px dan katta bo'lganda: kengaygan o'lchamlar
                </p>
                <p>
                    Joriy container eni: <span class="current-width"></span>
                </p>
            </div>
        </div>
    </div>
    
    <div class="card-container">
        <div class="card">
            <div class="card-image"></div>
            <div class="card-content">
                <h3 class="card-title">Yana bir karta</h3>
                <p>Container query bir nechta elementga ta'sir qiladi</p>
            </div>
        </div>
    </div>
    
    <h2>Container Query Units</h2>
    <p>
        cqw (container query width) - container enining 1%<br>
        cqh (container query height) - container balandligining 1%
    </p>
    
    <div class="container-units">
        <div class="unit-demo">
            <h3>Sarlavha (5cqw)</h3>
            <p>Bu matn (3cqw)</p>
            <div class="width">50% container eni (50cqw)</div>
            <p>Joriy container eni: <span class="container-width"></span></p>
        </div>
    </div>
    
    <script>
        const containers = document.querySelectorAll('.card-container');
        containers.forEach(container => {
            const widthSpan = container.querySelector('.current-width');
            if (widthSpan) {
                const updateWidth = () => {
                    widthSpan.textContent = container.offsetWidth + 'px';
                };
                updateWidth();
                new ResizeObserver(updateWidth).observe(container);
            }
        });
        
        const unitContainer = document.querySelector('.container-units');
        const containerWidthSpan = document.querySelector('.container-width');
        if (unitContainer && containerWidthSpan) {
            const updateContainerWidth = () => {
                containerWidthSpan.textContent = unitContainer.offsetWidth + 'px';
            };
            updateContainerWidth();
            new ResizeObserver(updateContainerWidth).observe(unitContainer);
        }
    </script>
</body>
</html>
```

**Dastur 2 - Murakkab container misollari**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: sans-serif;
            margin: 20px;
            background: #f5f5f5;
        }
        
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        
        /* Widget container */
        .widget-container {
            container-type: inline-size;
            container-name: widget;
            background: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .widget {
            background: #f9f9f9;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .widget-header {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px;
        }
        
        .widget-content {
            padding: 15px;
        }
        
        .stats {
            display: grid;
            gap: 10px;
        }
        
        .stat-item {
            background: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        /* Widget container query */
        @container widget (min-width: 400px) {
            .widget {
                display: flex;
            }
            
            .widget-header {
                flex: 0 0 120px;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                text-align: center;
            }
            
            .stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @container widget (min-width: 600px) {
            .widget-header {
                flex-basis: 150px;
            }
            
            .stats {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* Product container */
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        
        .product-container {
            container-type: inline-size;
            container-name: product;
        }
        
        .product {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            height: 100%;
        }
        
        .product-image {
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            height: 200px;
            transition: 0.3s;
        }
        
        .product-info {
            padding: 15px;
        }
        
        .product-price {
            font-size: 20px;
            color: #ff6b6b;
            font-weight: bold;
        }
        
        .product-btn {
            display: inline-block;
            padding: 8px 16px;
            background: #4ecdc4;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }
        
        @container product (min-width: 400px) {
            .product {
                display: flex;
            }
            
            .product-image {
                flex: 0 0 150px;
                height: auto;
            }
            
            .product-info {
                flex: 1;
            }
        }
        
        @container product (min-width: 500px) {
            .product-image {
                flex-basis: 200px;
            }
            
            .product-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .product-price {
                font-size: 24px;
            }
        }
        
        /* Nested containers */
        .outer-container {
            container-type: inline-size;
            container-name: outer;
            background: #e0e0e0;
            padding: 20px;
            margin: 20px 0;
        }
        
        .inner-container {
            container-type: inline-size;
            container-name: inner;
            background: white;
            padding: 15px;
        }
        
        .nested-card {
            background: #f0f0f0;
            padding: 10px;
        }
        
        @container outer (min-width: 500px) {
            .nested-card {
                background: #ffd93d;
            }
        }
        
        @container inner (min-width: 300px) {
            .nested-card {
                border: 2px solid #4ecdc4;
            }
        }
    </style>
</head>
<body>
    <h2>Dashboard Widgets</h2>
    <div class="dashboard">
        <div class="widget-container">
            <div class="widget">
                <div class="widget-header">Statistika</div>
                <div class="widget-content">
                    <div class="stats">
                        <div class="stat-item">Ko'rishlar: 1.2K</div>
                        <div class="stat-item">Obunachilar: 845</div>
                        <div class="stat-item">Yoqtirishlar: 3.4K</div>
                        <div class="stat-item">Ulashishlar: 234</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="widget-container">
            <div class="widget">
                <div class="widget-header">Ob-havo</div>
                <div class="widget-content">
                    <div class="stats">
                        <div class="stat-item">Toshkent: +25°</div>
                        <div class="stat-item">Samarqand: +23°</div>
                        <div class="stat-item">Buxoro: +27°</div>
                        <div class="stat-item">Xorazm: +26°</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="widget-container">
            <div class="widget">
                <div class="widget-header">Valyuta</div>
                <div class="widget-content">
                    <div class="stats">
                        <div class="stat-item">USD: 12,500</div>
                        <div class="stat-item">EUR: 13,400</div>
                        <div class="stat-item">RUB: 140</div>
                        <div class="stat-item">GBP: 15,200</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <h2>Product Cards</h2>
    <div class="product-grid">
        <div class="product-container">
            <div class="product">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3>Mahsulot 1</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div class="product-price">$99.99</div>
                    <a href="#" class="product-btn">Sotib olish</a>
                </div>
            </div>
        </div>
        
        <div class="product-container">
            <div class="product">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3>Mahsulot 2</h3>
                    <p>Consectetur adipiscing elit</p>
                    <div class="product-price">$149.99</div>
                    <a href="#" class="product-btn">Sotib olish</a>
                </div>
            </div>
        </div>
        
        <div class="product-container">
            <div class="product">
                <div class="product-image"></div>
                <div class="product-info">
                    <h3>Mahsulot 3</h3>
                    <p>Sed do eiusmod tempor</p>
                    <div class="product-price">$79.99</div>
                    <a href="#" class="product-btn">Sotib olish</a>
                </div>
            </div>
        </div>
    </div>
    
    <h2>Nested Containers</h2>
    <div class="outer-container">
        <p>Outer container (eni o'zgartirish mumkin)</p>
        <div class="inner-container">
            <p>Inner container</p>
            <div class="nested-card">
                Outer >=500px: sariq fon<br>
                Inner >=300px: yashil border
            </div>
        </div>
    </div>
</body>
</html>
```

---

### 4. Responsive Images

Turli ekran o'lchamlari va qurilmalarga moslashuvchi rasmlar.

**Dastur 1 - max-width: 100%**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        .image-container {
            border: 2px solid #4ecdc4;
            padding: 10px;
            margin: 20px 0;
            background: #f0f0f0;
        }
        
        .responsive-img {
            max-width: 100%;
            height: auto;
            display: block;
        }
        
        .fixed-img {
            width: 800px;
            height: auto;
            border: 2px solid #ff6b6b;
        }
        
        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .note {
            background: #ffd93d;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h2>Responsive Images - max-width: 100%</h2>
    
    <div class="note">
        <strong>max-width: 100%</strong> - rasm hech qachon ota-elementdan katta bo'lmaydi, 
        lekin kichik ekranda kichrayadi.
    </div>
    
    <div class="comparison">
        <div class="image-container">
            <h3>✅ max-width: 100%</h3>
            <img src="https://via.placeholder.com/800x400/4ecdc4/ffffff?text=Responsive+Image" 
                 class="responsive-img" 
                 alt="Responsive image">
            <p>Rasm ota-elementga moslashadi (max-width: 100%)</p>
        </div>
        
        <div class="image-container">
            <h3>❌ Fixed width</h3>
            <img src="https://via.placeholder.com/800x400/ff6b6b/ffffff?text=Fixed+Width+800px" 
                 class="fixed-img" 
                 alt="Fixed image">
            <p>Rasm 800px - mobil ekranda chiqib ketadi</p>
        </div>
    </div>
    
    <div class="image-container">
        <h3>Turli ekranlarda test</h3>
        <img src="https://via.placeholder.com/1200x300/667eea/ffffff?text=Responsive+Banner" 
             class="responsive-img" 
             alt="Responsive banner">
        <p>Brauzer enini o'zgartirib ko'ring - rasm har doim to'liq ko'rinadi</p>
    </div>
</body>
</html>
```

**Dastur 2 - srcset va sizes**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        .demo-section {
            border: 2px solid #4ecdc4;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        .image-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .info {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
        }
        
        img {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h2>srcset va sizes</h2>
    
    <div class="demo-section">
        <h3>1. Turli ekran zichligi uchun (x descriptors)</h3>
        <div class="info">
            &lt;img srcset="small.jpg 1x, large.jpg 2x"&gt;
        </div>
        <img srcset="
                https://via.placeholder.com/300x200/ff6b6b/ffffff?text=1x 1x,
                https://via.placeholder.com/600x400/ff6b6b/ffffff?text=2x 2x,
                https://via.placeholder.com/900x600/ff6b6b/ffffff?text=3x 3x
             "
             src="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Fallback"
             alt="Resolution switching">
        <p>Retina ekranlarda 2x yoki 3x versiya yuklanadi</p>
    </div>
    
    <div class="demo-section">
        <h3>2. Turli ekran o'lchamlari uchun (w descriptors + sizes)</h3>
        <div class="info">
            &lt;img srcset="small.jpg 300w, medium.jpg 600w, large.jpg 900w"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"&gt;
        </div>
        
        <img srcset="
                https://via.placeholder.com/300x200/4ecdc4/ffffff?text=300w 300w,
                https://via.placeholder.com/600x400/4ecdc4/ffffff?text=600w 600w,
                https://via.placeholder.com/900x600/4ecdc4/ffffff?text=900w 900w,
                https://via.placeholder.com/1200x800/4ecdc4/ffffff?text=1200w 1200w
             "
             sizes="(max-width: 600px) 100vw,
                    (max-width: 900px) 50vw,
                    33vw"
             src="https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Fallback"
             alt="Responsive image">
        
        <p>
            <strong>sizes:</strong><br>
            - Mobil: 100% viewport eni<br>
            - Planshet: 50% viewport eni<br>
            - Desktop: 33% viewport eni
        </p>
    </div>
    
    <div class="demo-section">
        <h3>3. Turli formatdagi rasmlar (picture element)</h3>
        
        <picture>
            <!-- WebP format (zamonaviy brauzerlar) -->
            <source srcset="
                    https://via.placeholder.com/300x200/ffd93d/000000?text=WebP+300w.webp 300w,
                    https://via.placeholder.com/600x400/ffd93d/000000?text=WebP+600w.webp 600w
                "
                type="image/webp"
                sizes="(max-width: 600px) 100vw, 50vw">
            
            <!-- JPEG format (barcha brauzerlar) -->
            <source srcset="
                    https://via.placeholder.com/300x200/ffd93d/000000?text=JPEG+300w.jpg 300w,
                    https://via.placeholder.com/600x400/ffd93d/000000?text=JPEG+600w.jpg 600w
                "
                type="image/jpeg"
                sizes="(max-width: 600px) 100vw, 50vw">
            
            <!-- Fallback -->
            <img src="https://via.placeholder.com/400x300/ffd93d/000000?text=Fallback+Image" 
                 alt="Art direction example">
        </picture>
        
        <p>WebP qo'llab-quvvatlansa - WebP yuklanadi, aks holda JPEG</p>
    </div>
    
    <div class="demo-section">
        <h3>4. Art direction (turli ekranda turli rasm)</h3>
        
        <picture>
            <!-- Mobil: portret rasm -->
            <source media="(max-width: 600px)" 
                    srcset="https://via.placeholder.com/400x600/ff6b6b/ffffff?text=Mobil+Portret">
            
            <!-- Planshet: landshaft rasm -->
            <source media="(max-width: 900px)" 
                    srcset="https://via.placeholder.com/800x400/4ecdc4/ffffff?text=Planshet+Landshaft">
            
            <!-- Desktop: keng rasm -->
            <img src="https://via.placeholder.com/1200x400/667eea/ffffff?text=Desktop+Wide" 
                 alt="Art direction example">
        </picture>
        
        <p>
            <strong>Turli ekranda turli kompozitsiya:</strong><br>
            - Mobil: portret (400x600)<br>
            - Planshet: landshaft (800x400)<br>
            - Desktop: keng banner (1200x400)
        </p>
    </div>
    
    <div class="demo-section">
        <h3>5. Murakkab misol - barchasi birga</h3>
        
        <picture>
            <!-- AVIF format (eng yangi) -->
            <source srcset="
                    https://via.placeholder.com/300x200/95E1D3/000000?text=AVIF+300w.avif 300w,
                    https://via.placeholder.com/600x400/95E1D3/000000?text=AVIF+600w.avif 600w,
                    https://via.placeholder.com/900x600/95E1D3/000000?text=AVIF+900w.avif 900w
                "
                type="image/avif"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw">
            
            <!-- WebP format -->
            <source srcset="
                    https://via.placeholder.com/300x200/95E1D3/000000?text=WebP+300w.webp 300w,
                    https://via.placeholder.com/600x400/95E1D3/000000?text=WebP+600w.webp 600w,
                    https://via.placeholder.com/900x600/95E1D3/000000?text=WebP+900w.webp 900w
                "
                type="image/webp"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw">
            
            <!-- JPEG format -->
            <source srcset="
                    https://via.placeholder.com/300x200/95E1D3/000000?text=JPEG+300w.jpg 300w,
                    https://via.placeholder.com/600x400/95E1D3/000000?text=JPEG+600w.jpg 600w,
                    https://via.placeholder.com/900x600/95E1D3/000000?text=JPEG+900w.jpg 900w
                "
                type="image/jpeg"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw">
            
            <img src="https://via.placeholder.com/600x400/95E1D3/000000?text=Fallback" 
                 alt="Complete example">
        </picture>
        
        <p>
            ✅ Eng optimal format yuklanadi: AVIF → WebP → JPEG<br>
            ✅ Eng mos o'lcham yuklanadi: sizes asosida<br>
            ✅ Barcha brauzerlar uchun fallback
        </p>
    </div>
</body>
</html>
```

**Dastur 3 - WebP/AVIF formatlari**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        
        .format-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .format-card {
            border: 2px solid #4ecdc4;
            padding: 20px;
            border-radius: 8px;
            background: white;
        }
        
        .format-card h3 {
            margin-top: 0;
            color: #333;
        }
        
        .stats {
            background: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        
        .browser-support {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
        }
        
        .browser {
            padding: 5px 10px;
            border-radius: 5px;
            background: #4ecdc4;
            color: white;
            font-size: 12px;
        }
        
        .no-support {
            background: #ff6b6b;
        }
        
        .size-comparison {
            display: flex;
            gap: 20px;
            margin: 20px 0;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
        }
        
        .size-bar {
            height: 100px;
            width: 60px;
            background: linear-gradient(to top, #4ecdc4, #ff6b6b);
            border-radius: 5px;
            transition: 0.3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            color: white;
            padding: 5px;
        }
    </style>
</head>
<body>
    <h2>Image Formatlari: WebP vs AVIF</h2>
    
    <div class="format-grid">
        <div class="format-card">
            <h3>JPEG</h3>
            <div class="stats">
                <strong>Hajmi:</strong> 100% (base)<br>
                <strong>Alpha kanal:</strong> ❌<br>
                <strong>Animatsiya:</strong> ❌<br>
                <strong>Brauzer qo'llab-quvvatlash:</strong> 100%
            </div>
            <div class="browser-support">
                <span class="browser">Chrome</span>
                <span class="browser">Firefox</span>
                <span class="browser">Safari</span>
                <span class="browser">Edge</span>
            </div>
            <img src="https://via.placeholder.com/300x200/4ecdc4/ffffff?text=JPEG+Image.jpg" 
                 style="max-width:100%; margin-top:10px;">
        </div>
        
        <div class="format-card">
            <h3>PNG</h3>
            <div class="stats">
                <strong>Hajmi:</strong> 150-200%<br>
                <strong>Alpha kanal:</strong> ✅<br>
                <strong>Animatsiya:</strong> ❌<br>
                <strong>Brauzer qo'llab-quvvatlash:</strong> 100%
            </div>
            <div class="browser-support">
                <span class="browser">Chrome</span>
                <span class="browser">Firefox</span>
                <span class="browser">Safari</span>
                <span class="browser">Edge</span>
            </div>
            <img src="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=PNG+Image.png" 
                 style="max-width:100%; margin-top:10px;">
        </div>
        
        <div class="format-card">
            <h3>WebP</h3>
            <div class="stats">
                <strong>Hajmi:</strong> 25-35% kichik<br>
                <strong>Alpha kanal:</strong> ✅<br>
                <strong>Animatsiya:</strong> ✅<br>
                <strong>Brauzer qo'llab-quvvatlash:</strong> 96%
            </div>
            <div class="browser-support">
                <span class="browser">Chrome</span>
                <span class="browser">Firefox</span>
                <span class="browser">Edge</span>
                <span class="browser no-support">Safari (qisman)</span>
            </div>
            <img src="https://via.placeholder.com/300x200/ffd93d/000000?text=WebP+Image.webp" 
                 style="max-width:100%; margin-top:10px;">
        </div>
        
        <div class="format-card">
            <h3>AVIF</h3>
            <div class="stats">
                <strong>Hajmi:</strong> 50% kichik<br>
                <strong>Alpha kanal:</strong> ✅<br>
                <strong>Animatsiya:</strong> ✅<br>
                <strong>Brauzer qo'llab-quvvatlash:</strong> 85%
            </div>
            <div class="browser-support">
                <span class="browser">Chrome</span>
                <span class="browser">Firefox</span>
                <span class="browser no-support">Safari</span>
                <span class="browser">Edge</span>
            </div>
            <img src="https://via.placeholder.com/300x200/95E1D3/000000?text=AVIF+Image.avif" 
                 style="max-width:100%; margin-top:10px;">
        </div>
    </div>
    
    <div class="demo-section" style="border:2px solid #4ecdc4; padding:20px; margin:20px 0;">
        <h3>Hajm taqqoslanishi</h3>
        <div class="size-comparison">
            <div class="size-bar" style="height: 100px;">
                <span>JPEG</span>
                <span>100%</span>
            </div>
            <div class="size-bar" style="height: 150px;">
                <span>PNG</span>
                <span>150%</span>
            </div>
            <div class="size-bar" style="height: 35px;">
                <span>WebP</span>
                <span>35%</span>
            </div>
            <div class="size-bar" style="height: 25px;">
                <span>AVIF</span>
                <span>25%</span>
            </div>
        </div>
    </div>
    
    <div class="demo-section">
        <h3>Avtomatik format tanlash</h3>
        <picture>
            <!-- AVIF -->
            <source srcset="https://via.placeholder.com/600x400/667eea/ffffff?text=AVIF+Format.avif" 
                    type="image/avif">
            
            <!-- WebP -->
            <source srcset="https://via.placeholder.com/600x400/667eea/ffffff?text=WebP+Format.webp" 
                    type="image/webp">
            
            <!-- Fallback -->
            <img src="https://via.placeholder.com/600x400/667eea/ffffff?text=JPEG+Fallback.jpg" 
                 alt="Format example"
                 style="max-width:100%;">
        </picture>
        
        <p>
            Brauzeringiz qaysi formatni qo'llab-quvvatlasa, o'sha yuklanadi:
            AVIF → WebP → JPEG
        </p>
    </div>
</body>
</html>
```

---

### Responsive Design Xulosa

| Xususiyat | Vazifasi | Asosiy qiymatlar |
|-----------|----------|------------------|
| Viewport | Mobil ekran sozlamalari | `width=device-width, initial-scale=1.0` |
| Media Queries | Ekran o'lchamiga qarab stillar | `@media (min-width: 768px) {}` |
| Container Queries | Ota-element o'lchamiga qarab | `@container (min-width: 400px) {}` |
| Container Units | Container-ga nisbatan birliklar | `cqw`, `cqh`, `cqi`, `cqb` |
| Responsive Images | Moslashuvchan rasmlar | `max-width: 100%`, `srcset`, `picture` |