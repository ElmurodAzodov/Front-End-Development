# **Colors and Backgrounds**

<br>
<br>

# 🎨 CSS Colors and Backgrounds - Part 1: Color Values

## 🌈 Color Values in CSS

CSS da ranglarni bir necha xil formatda berish mumkin. Har bir format o'zining qo'llanish sohasiga ega.

---

## 1️⃣ Named Colors (Nomlangan Ranglar)

CSS da **147 ta** standart nomlangan rang mavjud. Bu eng oddiy va o'qilishi oson usul.

### 📝 Sintaksis:

```css
.element {
  color: red;
  background-color: lightblue;
  border-color: mediumseagreen;
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background: aliceblue;
      }

      .box-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .box {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
      }

      .tomato {
        background-color: tomato;
      }
      .dodgerblue {
        background-color: dodgerblue;
      }
      .mediumseagreen {
        background-color: mediumseagreen;
      }
      .gold {
        background-color: gold;
        color: black;
      }
      .violet {
        background-color: violet;
      }
      .coral {
        background-color: coral;
      }
      .slateblue {
        background-color: slateblue;
      }
      .crimson {
        background-color: crimson;
      }
    </style>
  </head>
  <body>
    <h2>🎯 Named Colors - Nomlangan ranglar</h2>
    <div class="box-container">
      <div class="box tomato">Tomato</div>
      <div class="box dodgerblue">DodgerBlue</div>
      <div class="box mediumseagreen">SeaGreen</div>
      <div class="box gold">Gold</div>
      <div class="box violet">Violet</div>
      <div class="box coral">Coral</div>
      <div class="box slateblue">SlateBlue</div>
      <div class="box crimson">Crimson</div>
    </div>
  </body>
</html>
```

### ✅ Afzalliklari:

- Kod o'qilishi oson (`red`, `blue`, `green`)
- Tez yozish uchun qulay
- Boshlang'ich o'rganish uchun ideal

### ❌ Kamchiliklari:

- Cheklangan miqdor (faqat 147 ta rang)
- Aniq soyalarni topish qiyin
- Dizayn tizimlarida kam qo'llaniladi

---

## 2️⃣ Hexadecimal Ranglar

Hex kodlari `#` belgisi bilan boshlanib, 3, 4, 6 yoki 8 ta belgidan iborat bo'ladi.

### 📊 Hex Formatlari:

| Format      | Misol       | Tavsif                       |
| ----------- | ----------- | ---------------------------- |
| `#RGB`      | `#F00`      | Qisqa 3-belgi (RGB)          |
| `#RRGGBB`   | `#FF0000`   | To'liq 6-belgi (RRGGBB)      |
| `#RRGGBBAA` | `#FF0000CC` | 6-belgi + shaffoflik (Alpha) |
| `#RGBA`     | `#F00C`     | Qisqa 4-belgi + shaffoflik   |

### 🎯 Ranglarni tushunish:

Har bir hex juftligi **0-255** oralig'idagi qiymatni ifodalaydi:

- `00` = 0 (minimum)
- `80` = 128 (o'rta)
- `FF` = 255 (maksimum)

```
#FF0000 → FF (qizil: 255), 00 (yashil: 0), 00 (ko'k: 0)
#00FF00 → 00 (qizil: 0), FF (yashil: 255), 00 (ko'k: 0)
#0000FF → 00 (qizil: 0), 00 (yashil: 0), FF (ko'k: 255)
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f5f5f5;
      }

      .section {
        margin-bottom: 40px;
      }

      h3 {
        color: #333;
        border-bottom: 2px solid #e0e0e0;
        padding-bottom: 10px;
      }

      .palette {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }

      .color-card {
        width: 130px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px #0000001a;
      }

      .color-preview {
        height: 100px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 10px;
        color: white;
        font-weight: bold;
        text-shadow: 0 1px 3px #00000080;
      }

      .color-info {
        background: white;
        padding: 10px;
        text-align: center;
        font-family: "Courier New", monospace;
        font-size: 14px;
      }

      .red-hex {
        background-color: #ff0000;
      }
      .red-short {
        background-color: #f00;
      }
      .blue-hex {
        background-color: #0000ff;
      }
      .green-hex {
        background-color: #00ff00;
      }
      .purple-hex {
        background-color: #800080;
      }
      .orange-hex {
        background-color: #ffa500;
      }
      .transparent-red {
        background-color: #ff000080;
      }
      .transparent-blue {
        background-color: #0000ff80;
      }
      .custom {
        background-color: #2ecc71;
      }
      .custom-dark {
        background-color: #27ae60;
      }
    </style>
  </head>
  <body>
    <h1>🔢 Hexadecimal Ranglar</h1>

    <div class="section">
      <h3>📌 Asosiy Ranglar (6-belgili)</h3>
      <div class="palette">
        <div class="color-card">
          <div class="color-preview red-hex">Qizil</div>
          <div class="color-info">#FF0000</div>
        </div>
        <div class="color-card">
          <div class="color-preview green-hex">Yashil</div>
          <div class="color-info">#00FF00</div>
        </div>
        <div class="color-card">
          <div class="color-preview blue-hex">Ko'k</div>
          <div class="color-info">#0000FF</div>
        </div>
        <div class="color-card">
          <div class="color-preview purple-hex">Binafsha</div>
          <div class="color-info">#800080</div>
        </div>
        <div class="color-card">
          <div class="color-preview orange-hex">To'q sariq</div>
          <div class="color-info">#FFA500</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>⚡ Qisqa 3-belgili format (#RGB)</h3>
      <div class="palette">
        <div class="color-card">
          <div class="color-preview red-short">#F00</div>
          <div class="color-info">#F00 = #FF0000</div>
        </div>
        <div class="color-card">
          <div class="color-preview" style="background: #0F0; color: black;">
            #0F0
          </div>
          <div class="color-info">#0F0 = #00FF00</div>
        </div>
        <div class="color-card">
          <div class="color-preview" style="background: #00F;">#00F</div>
          <div class="color-info">#00F = #0000FF</div>
        </div>
        <div class="color-card">
          <div class="color-preview" style="background: #F0F;">#F0F</div>
          <div class="color-info">#F0F = #FF00FF</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>🔮 Shaffoflik bilan (Alpha kanali)</h3>
      <div
        style="background: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%23ccc\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23ccc\'/%3E%3C/svg%3E'); padding: 20px; border-radius: 10px;"
      >
        <div class="palette">
          <div class="color-card">
            <div class="color-preview transparent-red">#FF000080</div>
            <div class="color-info">50% shaffof qizil</div>
          </div>
          <div class="color-card">
            <div class="color-preview transparent-blue">#0000FF80</div>
            <div class="color-info">50% shaffof ko'k</div>
          </div>
          <div class="color-card">
            <div
              class="color-preview"
              style="background: #00FF0040; color: black;"
            >
              #00FF0040
            </div>
            <div class="color-info">25% shaffof yashil</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

### 📐 Alpha (Shaffoflik) qiymatlari:

| Hex Alpha | Foiz | O'nlik qiymat |
| --------- | ---- | ------------- |
| `FF`      | 100% | 1.0           |
| `CC`      | 80%  | 0.8           |
| `80`      | 50%  | 0.5           |
| `40`      | 25%  | 0.25          |
| `00`      | 0%   | 0.0           |

---

## 3️⃣ RGB / RGBA

RGB - Red, Green, Blue (Qizil, Yashil, Ko'k) rang modeli. Har bir kanal **0 dan 255** gacha qiymat oladi.

### 📝 Sintaksis:

```css
/* RGB - shaffofliksiz */
.element {
  color: rgb(255, 0, 0); /* Qizil */
  color: rgb(0, 255, 0); /* Yashil */
  color: rgb(0, 0, 255); /* Ko'k */
  color: rgb(128, 128, 128); /* Kulrang */
}

/* RGBA - shaffoflik bilan */
.element {
  color: rgba(255, 0, 0, 0.5); /* 50% shaffof qizil */
  color: rgba(0, 0, 0, 0.8); /* 80% qora */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: rgb(245, 245, 245);
      }

      .demo-section {
        margin-bottom: 40px;
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: rgb(51, 51, 51);
      }

      h3 {
        color: rgb(68, 68, 68);
      }

      .rgb-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
      }

      .color-block {
        padding: 30px 20px;
        border-radius: 10px;
        text-align: center;
        font-family: "Courier New", monospace;
        transition: transform 0.2s;
      }

      .color-block:hover {
        transform: scale(1.02);
      }

      /* RGB misollar */
      .red {
        background-color: rgb(255, 0, 0);
        color: white;
      }
      .green {
        background-color: rgb(0, 255, 0);
        color: black;
      }
      .blue {
        background-color: rgb(0, 0, 255);
        color: white;
      }
      .yellow {
        background-color: rgb(255, 255, 0);
        color: black;
      }
      .cyan {
        background-color: rgb(0, 255, 255);
        color: black;
      }
      .magenta {
        background-color: rgb(255, 0, 255);
        color: white;
      }
      .white {
        background-color: rgb(255, 255, 255);
        color: black;
        border: 1px solid #ddd;
      }
      .black {
        background-color: rgb(0, 0, 0);
        color: white;
      }
      .gray {
        background-color: rgb(128, 128, 128);
        color: white;
      }

      /* RGBA misollar */
      .overlay-demo {
        position: relative;
        height: 150px;
        border-radius: 10px;
        margin-bottom: 10px;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Crect width='40' height='40' fill='white'/%3E%3Crect width='40' height='40' fill='%23f0f0f0'/%3E%3Cpath d='M0 0 L40 40 M40 0 L0 40' stroke='%23e0e0e0' stroke-width='1'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E");
        background-size: 40px 40px;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-family: "Courier New", monospace;
        font-weight: bold;
      }

      .overlay-red {
        background-color: rgba(255, 0, 0, 0.3);
      }
      .overlay-green {
        background-color: rgba(0, 255, 0, 0.5);
      }
      .overlay-blue {
        background-color: rgba(0, 0, 255, 0.4);
      }
      .overlay-black {
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
      }

      .info-box {
        background: rgb(240, 248, 255);
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid rgb(70, 130, 180);
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <h1>🎨 RGB va RGBA Rang Modeli</h1>

    <div class="demo-section">
      <h2>📊 Asosiy RGB ranglar</h2>
      <div class="rgb-container">
        <div class="color-block red">rgb(255, 0, 0)</div>
        <div class="color-block green">rgb(0, 255, 0)</div>
        <div class="color-block blue">rgb(0, 0, 255)</div>
        <div class="color-block yellow">rgb(255, 255, 0)</div>
        <div class="color-block cyan">rgb(0, 255, 255)</div>
        <div class="color-block magenta">rgb(255, 0, 255)</div>
        <div class="color-block white">rgb(255, 255, 255)</div>
        <div class="color-block black">rgb(0, 0, 0)</div>
        <div class="color-block gray">rgb(128, 128, 128)</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>🔮 RGB aralashmalari</h2>
      <div class="rgb-container">
        <div
          class="color-block"
          style="background-color: rgb(255, 192, 203); color: black;"
        >
          rgb(255, 192, 203)<br />Pushti
        </div>
        <div
          class="color-block"
          style="background-color: rgb(173, 216, 230); color: black;"
        >
          rgb(173, 216, 230)<br />Och ko'k
        </div>
        <div
          class="color-block"
          style="background-color: rgb(144, 238, 144); color: black;"
        >
          rgb(144, 238, 144)<br />Och yashil
        </div>
        <div
          class="color-block"
          style="background-color: rgb(255, 165, 0); color: white;"
        >
          rgb(255, 165, 0)<br />To'q sariq
        </div>
        <div
          class="color-block"
          style="background-color: rgb(138, 43, 226); color: white;"
        >
          rgb(138, 43, 226)<br />Binafsha
        </div>
      </div>

      <div class="info-box">
        <strong>💡 RGB formulasi:</strong><br />
        rgb(qizil, yashil, ko'k)<br />
        Qizil: 0-255 | Yashil: 0-255 | Ko'k: 0-255<br />
        Jami: 256 × 256 × 256 = 16,777,216 ta rang!
      </div>
    </div>

    <div class="demo-section">
      <h2>🌈 RGBA - Shaffoflik bilan</h2>
      <p>
        Alpha kanali 0 dan 1 gacha qiymat oladi (0 = to'liq shaffof, 1 = shaffof
        emas)
      </p>

      <h3>📌 Shaffof qatlamlar:</h3>

      <div class="overlay-demo">
        <div class="overlay overlay-red">rgba(255, 0, 0, 0.3)</div>
      </div>

      <div class="overlay-demo">
        <div class="overlay overlay-green">rgba(0, 255, 0, 0.5)</div>
      </div>

      <div class="overlay-demo">
        <div class="overlay overlay-blue">rgba(0, 0, 255, 0.4)</div>
      </div>

      <div class="overlay-demo">
        <div class="overlay overlay-black">rgba(0, 0, 0, 0.6)</div>
      </div>

      <h3>📌 Alpha qiymatlari jadvali:</h3>
      <div class="rgb-container" style="grid-template-columns: repeat(5, 1fr);">
        <div
          class="color-block"
          style="background-color: rgba(255, 0, 0, 0.1); color: black;"
        >
          alpha: 0.1
        </div>
        <div
          class="color-block"
          style="background-color: rgba(255, 0, 0, 0.3); color: black;"
        >
          alpha: 0.3
        </div>
        <div
          class="color-block"
          style="background-color: rgba(255, 0, 0, 0.5); color: white;"
        >
          alpha: 0.5
        </div>
        <div
          class="color-block"
          style="background-color: rgba(255, 0, 0, 0.7); color: white;"
        >
          alpha: 0.7
        </div>
        <div
          class="color-block"
          style="background-color: rgba(255, 0, 0, 0.9); color: white;"
        >
          alpha: 0.9
        </div>
      </div>
    </div>
  </body>
</html>
```

---

## 4️⃣ HSL / HSLA

HSL - Hue, Saturation, Lightness (Rang ohangi, To'yinganlik, Yorqinlik). Inson mantig'iga yaqinroq rang modeli.

### 📝 Sintaksis:

```css
/* HSL */
.element {
  color: hsl(0, 100%, 50%); /* Qizil */
  color: hsl(120, 100%, 50%); /* Yashil */
  color: hsl(240, 100%, 50%); /* Ko'k */
}

/* HSLA - shaffoflik bilan */
.element {
  color: hsla(0, 100%, 50%, 0.5); /* 50% shaffof qizil */
}
```

### 🎯 Parametrlar:

| Parametr        | Oraliq | Tavsif                      |
| --------------- | ------ | --------------------------- |
| **Hue** (Ohang) | 0-360° | Rang g'ildiragidagi burchak |
| **Saturation**  | 0-100% | Rangning to'yinganligi      |
| **Lightness**   | 0-100% | Yorqinlik darajasi          |
| **Alpha**       | 0-1    | Shaffoflik                  |

### 🎨 Hue qiymatlari:

- `0°` yoki `360°` = Qizil
- `60°` = Sariq
- `120°` = Yashil
- `180°` = Havo rang (Cyan)
- `240°` = Ko'k
- `300°` = Binafsha (Magenta)

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: hsl(0, 0%, 96%);
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1);
      }

      h2 {
        color: hsl(0, 0%, 20%);
      }

      h3 {
        color: hsl(0, 0%, 30%);
      }

      .hue-wheel {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin: 20px 0;
      }

      .hue-item {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 11px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }

      .saturation-demo,
      .lightness-demo {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin: 15px 0;
      }

      .sat-item,
      .light-item {
        width: 70px;
        height: 50px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        color: white;
        text-shadow: 1px 1px 2px black;
      }

      .palette-generator {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .palette-color {
        padding: 30px 15px;
        border-radius: 10px;
        text-align: center;
        font-family: "Courier New", monospace;
        font-size: 12px;
      }

      .info-note {
        background: hsl(60, 100%, 95%);
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid hsl(60, 100%, 50%);
      }
    </style>
  </head>
  <body>
    <h1>🌈 HSL va HSLA Rang Modeli</h1>

    <div class="section">
      <h2>🎨 Hue (Rang ohangi) - 0° dan 360° gacha</h2>
      <div class="hue-wheel">
        <div class="hue-item" style="background: hsl(0, 100%, 50%);">0°</div>
        <div class="hue-item" style="background: hsl(30, 100%, 50%);">30°</div>
        <div
          class="hue-item"
          style="background: hsl(60, 100%, 50%); color: black;"
        >
          60°
        </div>
        <div
          class="hue-item"
          style="background: hsl(90, 100%, 50%); color: black;"
        >
          90°
        </div>
        <div
          class="hue-item"
          style="background: hsl(120, 100%, 50%); color: black;"
        >
          120°
        </div>
        <div class="hue-item" style="background: hsl(150, 100%, 50%);">
          150°
        </div>
        <div class="hue-item" style="background: hsl(180, 100%, 50%);">
          180°
        </div>
        <div class="hue-item" style="background: hsl(210, 100%, 50%);">
          210°
        </div>
        <div class="hue-item" style="background: hsl(240, 100%, 50%);">
          240°
        </div>
        <div class="hue-item" style="background: hsl(270, 100%, 50%);">
          270°
        </div>
        <div class="hue-item" style="background: hsl(300, 100%, 50%);">
          300°
        </div>
        <div class="hue-item" style="background: hsl(330, 100%, 50%);">
          330°
        </div>
      </div>
    </div>

    <div class="section">
      <h2>💧 Saturation (To'yinganlik) - Hue: 200°</h2>
      <div class="saturation-demo">
        <div
          class="sat-item"
          style="background: hsl(200, 0%, 50%); color: black;"
        >
          0%
        </div>
        <div class="sat-item" style="background: hsl(200, 20%, 50%);">20%</div>
        <div class="sat-item" style="background: hsl(200, 40%, 50%);">40%</div>
        <div class="sat-item" style="background: hsl(200, 60%, 50%);">60%</div>
        <div class="sat-item" style="background: hsl(200, 80%, 50%);">80%</div>
        <div class="sat-item" style="background: hsl(200, 100%, 50%);">
          100%
        </div>
      </div>
      <p>⬆️ 0% = kulrang, 100% = to'liq to'yingan rang</p>
    </div>

    <div class="section">
      <h2>☀️ Lightness (Yorqinlik) - Hue: 200°, Saturation: 100%</h2>
      <div class="lightness-demo">
        <div class="light-item" style="background: hsl(200, 100%, 0%);">0%</div>
        <div class="light-item" style="background: hsl(200, 100%, 10%);">
          10%
        </div>
        <div class="light-item" style="background: hsl(200, 100%, 25%);">
          25%
        </div>
        <div class="light-item" style="background: hsl(200, 100%, 50%);">
          50%
        </div>
        <div
          class="light-item"
          style="background: hsl(200, 100%, 75%); color: black;"
        >
          75%
        </div>
        <div
          class="light-item"
          style="background: hsl(200, 100%, 90%); color: black;"
        >
          90%
        </div>
        <div
          class="light-item"
          style="background: hsl(200, 100%, 100%); color: black;"
        >
          100%
        </div>
      </div>
      <p>⬆️ 0% = qora, 50% = normal, 100% = oq</p>
    </div>

    <div class="section">
      <h2>🎯 Bir xil Hue bilan palitra yaratish</h2>
      <div class="palette-generator">
        <div
          class="palette-color"
          style="background: hsl(200, 100%, 95%); color: black;"
        >
          hsl(200, 100%, 95%)
        </div>
        <div
          class="palette-color"
          style="background: hsl(200, 80%, 80%); color: black;"
        >
          hsl(200, 80%, 80%)
        </div>
        <div class="palette-color" style="background: hsl(200, 70%, 60%);">
          hsl(200, 70%, 60%)
        </div>
        <div class="palette-color" style="background: hsl(200, 80%, 40%);">
          hsl(200, 80%, 40%)
        </div>
        <div class="palette-color" style="background: hsl(200, 90%, 20%);">
          hsl(200, 90%, 20%)
        </div>
      </div>

      <div class="info-note">
        <strong>💡 HSL ning asosiy afzalligi:</strong> Bir xil Hue qiymatini
        saqlab, faqat Saturation va Lightness ni o'zgartirib, bir rangning turli
        soyalarini osongina yaratish mumkin!
      </div>
    </div>

    <div class="section">
      <h2>🔮 HSLA - Shaffoflik bilan</h2>
      <div
        style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;"
      >
        <div
          style="padding: 30px 10px; border-radius: 10px; text-align: center; background: hsla(0, 100%, 50%, 0.2); color: black;"
        >
          hsla(0, 100%, 50%, 0.2)
        </div>
        <div
          style="padding: 30px 10px; border-radius: 10px; text-align: center; background: hsla(0, 100%, 50%, 0.4); color: black;"
        >
          hsla(0, 100%, 50%, 0.4)
        </div>
        <div
          style="padding: 30px 10px; border-radius: 10px; text-align: center; background: hsla(0, 100%, 50%, 0.6); color: white;"
        >
          hsla(0, 100%, 50%, 0.6)
        </div>
        <div
          style="padding: 30px 10px; border-radius: 10px; text-align: center; background: hsla(0, 100%, 50%, 0.8); color: white;"
        >
          hsla(0, 100%, 50%, 0.8)
        </div>
      </div>
    </div>
  </body>
</html>
```

---

## 5️⃣ currentColor Kalit so'zi

`currentColor` - elementning joriy `color` xususiyatidagi rang qiymatini oladi. Bu juda foydali xususiyat!

### 📝 Sintaksis:

```css
.element {
  color: #3498db;
  border: 2px solid currentColor; /* Chegara ham #3498db bo'ladi */
  box-shadow: 0 0 10px currentColor; /* Soya ham #3498db */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f8f9fa;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }

      h2 {
        margin-bottom: 25px;
      }

      .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .card {
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        transition: all 0.3s;
      }

      /* currentColor misollari */
      .card-blue {
        color: #3498db;
        background: white;
        border: 3px solid currentColor;
      }

      .card-green {
        color: #2ecc71;
        background: white;
        border: 3px solid currentColor;
        box-shadow: 0 4px 15px currentColor;
      }

      .card-red {
        color: #e74c3c;
        background: white;
        outline: 3px solid currentColor;
        outline-offset: 3px;
      }

      .card-purple {
        color: #9b59b6;
        background: currentColor;
        color: white;
        border: 3px solid white;
      }

      /* SVG icon misoli */
      .icon-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border: 2px solid currentColor;
        border-radius: 8px;
        background: transparent;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s;
      }

      .icon-button:hover {
        background: currentColor;
        color: white;
      }

      .icon-blue {
        color: #3498db;
      }
      .icon-green {
        color: #2ecc71;
      }
      .icon-orange {
        color: #e67e22;
      }

      /* SVG icon */
      .icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .info-box-current {
        background: #fff3cd;
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid #ffc107;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>🔄 currentColor Kalit so'zi</h1>

    <div class="section">
      <h2>📌 Border bilan currentColor</h2>
      <div class="demo-grid">
        <div class="card card-blue">
          <h3>Moviy karta</h3>
          <p>color: #3498db</p>
          <p>border: currentColor</p>
        </div>
        <div class="card card-green">
          <h3>Yashil karta</h3>
          <p>color: #2ecc71</p>
          <p>border + shadow: currentColor</p>
        </div>
        <div class="card card-red">
          <h3>Qizil karta</h3>
          <p>color: #e74c3c</p>
          <p>outline: currentColor</p>
        </div>
        <div class="card card-purple">
          <h3>Binafsha karta</h3>
          <p>color: white</p>
          <p>background: currentColor</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 SVG Iconlar bilan currentColor</h2>
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <button class="icon-button icon-blue">
          <svg class="icon" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
          Tasdiqlash
        </button>

        <button class="icon-button icon-green">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          Qo'shish
        </button>

        <button class="icon-button icon-orange">
          <svg class="icon" viewBox="0 0 24 24">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
          O'chirish
        </button>
      </div>
    </div>

    <div class="section">
      <h2>📝 Pseudo-elementlar bilan currentColor</h2>
      <style>
        .list-item {
          padding: 12px 15px;
          margin: 8px 0;
          position: relative;
          padding-left: 40px;
          color: #2c3e50;
        }

        .list-item::before {
          content: "→";
          position: absolute;
          left: 10px;
          color: currentColor;
          font-weight: bold;
        }

        .list-item-red {
          color: #e74c3c;
        }
        .list-item-green {
          color: #27ae60;
        }
        .list-item-blue {
          color: #2980b9;
        }
      </style>

      <div class="list-item list-item-red">Qizil rangdagi ro'yxat elementi</div>
      <div class="list-item list-item-green">
        Yashil rangdagi ro'yxat elementi
      </div>
      <div class="list-item list-item-blue">Ko'k rangdagi ro'yxat elementi</div>

      <div class="info-box-current">
        <strong>💡 currentColor afzalliklari:</strong><br />
        • Bir marta rang o'zgartirish bilan barcha bog'liq elementlar
        yangilanadi<br />
        • SVG iconlar uchun juda qulay<br />
        • Komponent dizaynida konsistentlik ta'minlanadi<br />
        • CSS da qayta-qayta rang kodini yozish shart emas
      </div>
    </div>
  </body>
</html>
```

---

## 6️⃣ color-mix() (Modern CSS)

`color-mix()` - ikki yoki undan ortiq ranglarni aralashtirish uchun yangi CSS funksiyasi. **2023-yildan keng qo'llab-quvvatlanmoqda**.

### 📝 Sintaksis:

```css
.element {
  /* rang1 va rang2 ni aralashtirish */
  background: color-mix(in srgb, red, blue);

  /* Foiz bilan */
  background: color-mix(in srgb, red 30%, blue 70%);

  /* Turli rang fazolarida */
  background: color-mix(in oklab, #3498db, #e74c3c);
  background: color-mix(in hsl, red, yellow);
}
```

### 🎯 Rang fazolari:

| Fazo          | Tavsif                         |
| ------------- | ------------------------------ |
| `srgb`        | Standart sRGB rang fazosi      |
| `srgb-linear` | Chiziqli sRGB                  |
| `display-p3`  | Kengroq rang gamuti            |
| `oklab`       | Perseptual bir xil rang fazosi |
| `lab`         | CIE Lab rang fazosi            |
| `hsl`         | Hue, Saturation, Lightness     |
| `hwb`         | Hue, Whiteness, Blackness      |
| `lch`         | Lightness, Chroma, Hue         |
| `xyz`         | CIE XYZ                        |

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f5f5f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }

      h2 {
        margin-bottom: 20px;
        color: #333;
      }

      .mix-demo {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .color-box {
        width: 100px;
        height: 100px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Courier New", monospace;
        font-size: 12px;
        text-align: center;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .arrow {
        font-size: 24px;
        color: #999;
      }

      .mix-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }

      .mix-card {
        text-align: center;
      }

      .mix-preview {
        height: 80px;
        border-radius: 10px;
        margin-bottom: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .mix-label {
        font-family: "Courier New", monospace;
        font-size: 12px;
        color: #666;
      }

      .warning-note {
        background: #fff3cd;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #ffc107;
        margin: 20px 0;
      }

      .supported {
        color: #27ae60;
      }
      .partial {
        color: #e67e22;
      }

      /* Fallback uchun */
      @supports not (background: color-mix(in srgb, red, blue)) {
        .mix-fallback {
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <h1>🎨 color-mix() - Zamonaviy CSS</h1>

    <div class="warning-note">
      <strong>⚠️ Eslatma:</strong> <code>color-mix()</code> nisbatan yangi
      xususiyat. Barcha brauzerlarda to'liq qo'llab-quvvatlanishi uchun fallback
      rang berish tavsiya etiladi.<br />
      <span class="supported">✅ Chrome/Edge 111+</span> |
      <span class="supported">✅ Firefox 113+</span> |
      <span class="supported">✅ Safari 16.2+</span>
    </div>

    <div class="section">
      <h2>🔬 Asosiy aralashtirish</h2>

      <div class="mix-demo">
        <div class="color-box" style="background: #FF0000;">
          Qizil<br />#FF0000
        </div>
        <span class="arrow">+</span>
        <div class="color-box" style="background: #0000FF;">
          Ko'k<br />#0000FF
        </div>
        <span class="arrow">=</span>
        <div
          class="color-box"
          style="background: color-mix(in srgb, red, blue);"
        >
          Aralash<br />
          <small>50% + 50%</small>
        </div>
      </div>

      <div class="mix-demo">
        <div class="color-box" style="background: #FF0000;">Qizil<br />30%</div>
        <span class="arrow">+</span>
        <div class="color-box" style="background: #0000FF;">Ko'k<br />70%</div>
        <span class="arrow">=</span>
        <div
          class="color-box"
          style="background: color-mix(in srgb, red 30%, blue 70%);"
        >
          Aralash<br />
          <small>30% + 70%</small>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 Turli nisbatlarda aralashtirish</h2>
      <div class="mix-grid">
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF0000 10%, #0000FF 90%);"
          ></div>
          <div class="mix-label">10% Qizil + 90% Ko'k</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF0000 30%, #0000FF 70%);"
          ></div>
          <div class="mix-label">30% Qizil + 70% Ko'k</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF0000 50%, #0000FF 50%);"
          ></div>
          <div class="mix-label">50% Qizil + 50% Ko'k</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF0000 70%, #0000FF 30%);"
          ></div>
          <div class="mix-label">70% Qizil + 30% Ko'k</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF0000 90%, #0000FF 10%);"
          ></div>
          <div class="mix-label">90% Qizil + 10% Ko'k</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🌈 Turli rang juftliklari</h2>
      <div class="mix-grid">
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FFD700, #FF69B4);"
          ></div>
          <div class="mix-label">Oltin + Pushti</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #00CED1, #FF4500);"
          ></div>
          <div class="mix-label">Turkuaz + To'q sariq</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #8A2BE2, #32CD32);"
          ></div>
          <div class="mix-label">Binafsha + Yashil</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, #FF6347, #4169E1);"
          ></div>
          <div class="mix-label">Tomato + Ko'k</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎨 Turli rang fazolarida aralashtirish</h2>
      <p>Bir xil ranglar (Qizil + Sariq), turli fazolarda aralashtirilganda:</p>
      <div class="mix-grid">
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in srgb, red, yellow);"
          ></div>
          <div class="mix-label">sRGB</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in oklab, red, yellow);"
          ></div>
          <div class="mix-label">OKLAB</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in hsl, red, yellow);"
          ></div>
          <div class="mix-label">HSL</div>
        </div>
        <div class="mix-card">
          <div
            class="mix-preview"
            style="background: color-mix(in lch, red, yellow);"
          ></div>
          <div class="mix-label">LCH</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>💡 Amaliy misol: Tema ranglari</h2>
      <style>
        :root {
          --primary: #3498db;
          --secondary: #2ecc71;

          --primary-light: color-mix(in srgb, var(--primary) 30%, white);
          --primary-dark: color-mix(in srgb, var(--primary) 70%, black);
          --primary-soft: color-mix(in srgb, var(--primary) 15%, transparent);

          --gradient-mix: linear-gradient(
            135deg,
            color-mix(in srgb, var(--primary) 80%, var(--secondary)),
            color-mix(in srgb, var(--secondary) 80%, var(--primary))
          );
        }

        .theme-demo {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .theme-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .theme-swatch {
          width: 80px;
          height: 50px;
          border-radius: 8px;
        }

        .theme-label {
          font-family: "Courier New", monospace;
          font-size: 13px;
        }

        .primary-swatch {
          background: var(--primary);
        }
        .primary-light-swatch {
          background: var(--primary-light);
        }
        .primary-dark-swatch {
          background: var(--primary-dark);
        }
        .gradient-swatch {
          background: var(--gradient-mix);
          width: 200px;
        }
      </style>

      <div class="theme-demo">
        <div class="theme-row">
          <div class="theme-swatch primary-swatch"></div>
          <span class="theme-label">--primary (asosiy)</span>
        </div>
        <div class="theme-row">
          <div class="theme-swatch primary-light-swatch"></div>
          <span class="theme-label"
            >color-mix(primary 30%, white) → ochroq</span
          >
        </div>
        <div class="theme-row">
          <div class="theme-swatch primary-dark-swatch"></div>
          <span class="theme-label"
            >color-mix(primary 70%, black) → to'qroq</span
          >
        </div>
        <div class="theme-row">
          <div class="theme-swatch gradient-swatch"></div>
          <span class="theme-label">Gradient ichida color-mix()</span>
        </div>
      </div>
    </div>
  </body>
</html>
```

---

## 📊 Rang formatlari taqqoslash jadvali

| Format          | Misol                           | Afzalliklari              | Kamchiliklari                        |
| --------------- | ------------------------------- | ------------------------- | ------------------------------------ |
| **Named**       | `red`                           | Oson o'qiladi             | Cheklangan (147 ta)                  |
| **Hex**         | `#FF0000`                       | Keng qo'llaniladi, ixcham | Alpha murakkab                       |
| **Hex+Alpha**   | `#FF000080`                     | Hex bilan alpha           | Kamroq tanish                        |
| **RGB**         | `rgb(255,0,0)`                  | JavaScript bilan mos      | Alpha alohida                        |
| **RGBA**        | `rgba(255,0,0,0.5)`             | Shaffoflik oson           | Eski sintaksis                       |
| **HSL**         | `hsl(0,100%,50%)`               | Inson mantig'iga yaqin    | Kamroq mashhur                       |
| **HSLA**        | `hsla(0,100%,50%,0.5)`          | Palitra yaratish oson     | Eski sintaksis                       |
| **color-mix()** | `color-mix(in srgb, red, blue)` | Dinamik aralashtirish     | Yangi, qo'llab-quvvatlash cheklangan |

---

## 💡 Xulosa va tavsiyalar

### Qaysi formatni qachon ishlatish kerak?

| Vaziyat                   | Tavsiya etilgan format                  |
| ------------------------- | --------------------------------------- |
| Oddiy tez prototip        | Named Colors (`red`, `blue`)            |
| Dizayn tizimlari          | Hex (`#3498db`) yoki HSL                |
| Shaffoflik kerak          | RGBA / HSLA / 8-belgili Hex             |
| Dinamik temalar           | HSL + CSS Variables                     |
| Palitra generatsiyasi     | HSL (Lightness/Saturation o'zgartirish) |
| SVG iconlar               | `currentColor`                          |
| Zamonaviy loyihalar       | `color-mix()` + fallback                |
| JavaScript manipulyatsiya | RGB / HSL                               |

### 🎯 Eng yaxshi amaliyotlar:

1. **CSS Variables bilan birga ishlating:**

```css
:root {
  --brand-primary: #3498db;
  --brand-primary-rgb: 52, 152, 219;
}

.element {
  background: var(--brand-primary);
  box-shadow: 0 0 10px rgba(var(--brand-primary-rgb), 0.3);
}
```

2. **Fallback rang berishni unutmang:**

```css
.element {
  background: #3498db; /* Fallback */
  background: color-mix(in srgb, blue, green);
}
```

3. **Konsistentlik uchun bir formatni tanlang:**
   - Kichik loyihalar: Hex
   - Katta dizayn tizimlari: HSL
   - Komponent kutubxonalari: CSS Variables + RGB

---

<br>
<br>
<br>
<br>
<br>

# 🎨 CSS Background Properties - To'liq Qo'llanma

## 📋 Umumiy ma'lumot

CSS da `background` xususiyatlari elementning fonini boshqarish uchun ishlatiladi. Bu xususiyatlar orqali rang, rasm, gradient va ularning joylashuvi, o'lchami kabi ko'plab parametrlarni sozlash mumkin.

---

## 1️⃣ background-color

Element foniga rang berish uchun ishlatiladi.

### 📝 Sintaksis:

```css
.element {
  background-color: #3498db;
  background-color: rgb(52, 152, 219);
  background-color: hsl(204, 70%, 53%);
  background-color: transparent; /* shaffof - default */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
      }

      .color-card {
        text-align: center;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .color-preview {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      .color-info {
        background: white;
        padding: 10px;
        font-family: "Courier New", monospace;
        font-size: 13px;
        color: #555;
      }

      /* Turli rang formatlari */
      .bg-named {
        background-color: steelblue;
      }
      .bg-hex {
        background-color: #e74c3c;
      }
      .bg-rgb {
        background-color: rgb(46, 204, 113);
      }
      .bg-rgba {
        background-color: rgba(155, 89, 182, 0.7);
      }
      .bg-hsl {
        background-color: hsl(28, 80%, 52%);
      }
      .bg-hsla {
        background-color: hsla(204, 70%, 53%, 0.6);
      }

      /* Qatlamli fonlar */
      .layered-bg {
        padding: 30px;
        border-radius: 12px;
        background-color: #3498db;
        background-image:
          linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
        background-size: 30px 30px;
        color: white;
        text-align: center;
      }

      .transparent-demo {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .parent-box {
        width: 200px;
        height: 150px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border-radius: 12px;
        padding: 20px;
      }

      .child-box {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      }

      .transparent-child {
        background-color: transparent;
        border: 2px dashed white;
      }

      .solid-child {
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
      }
    </style>
  </head>
  <body>
    <h1>🎨 background-color Xususiyati</h1>

    <div class="section">
      <h2>📌 Asosiy rang formatlari</h2>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-preview bg-named">Named Color</div>
          <div class="color-info">steelblue</div>
        </div>
        <div class="color-card">
          <div class="color-preview bg-hex">Hex Color</div>
          <div class="color-info">#e74c3c</div>
        </div>
        <div class="color-card">
          <div class="color-preview bg-rgb">RGB Color</div>
          <div class="color-info">rgb(46, 204, 113)</div>
        </div>
        <div class="color-card">
          <div class="color-preview bg-rgba">RGBA Color</div>
          <div class="color-info">rgba(155, 89, 182, 0.7)</div>
        </div>
        <div class="color-card">
          <div class="color-preview bg-hsl">HSL Color</div>
          <div class="color-info">hsl(28, 80%, 52%)</div>
        </div>
        <div class="color-card">
          <div class="color-preview bg-hsla">HSLA Color</div>
          <div class="color-info">hsla(204, 70%, 53%, 0.6)</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🔮 Shaffoflik (transparent)</h2>
      <div class="transparent-demo">
        <div>
          <div class="parent-box">
            <div class="child-box transparent-child">transparent</div>
          </div>
          <p style="text-align: center; margin-top: 10px;">
            ⬆️ background-color: transparent
          </p>
        </div>
        <div>
          <div class="parent-box">
            <div class="child-box solid-child">rgba(255,255,255,0.3)</div>
          </div>
          <p style="text-align: center; margin-top: 10px;">
            ⬆️ Yarim shaffof fon
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 Murakkab fonlar (background-color + background-image)</h2>
      <div class="layered-bg">
        <h3 style="color: white; margin: 0 0 15px;">Patternli Fon</h3>
        <p>
          background-color: #3498db<br />
          background-image: chiziqli gradient pattern
        </p>
      </div>
      <p style="margin-top: 15px; color: #666;">
        ⚡ background-color har doim background-image ostida ko'rinadi
      </p>
    </div>
  </body>
</html>
```

---

## 2️⃣ background-image (url(), gradients)

Element foniga rasm yoki gradient qo'shish uchun ishlatiladi.

### 📝 Sintaksis:

```css
.element {
  /* URL orqali rasm */
  background-image: url("rasm.jpg");

  /* Bir nechta rasm */
  background-image: url("rasm1.jpg"), url("rasm2.png");

  /* Gradient */
  background-image: linear-gradient(to right, red, blue);

  /* Rasm + Gradient birga */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("rasm.jpg");
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .image-card {
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .image-preview {
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: 15px;
      }

      .image-info {
        background: white;
        padding: 12px;
        font-family: "Courier New", monospace;
        font-size: 12px;
        color: #555;
      }

      /* SVG pattern yaratish */
      .pattern-svg {
        background-image: url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="8" fill="%233498db" opacity="0.3"/%3E%3C/svg%3E');
      }

      .pattern-stripes {
        background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="10" height="20" fill="%23e74c3c" opacity="0.2"/%3E%3C/svg%3E');
      }

      .pattern-dots {
        background-image: url('data:image/svg+xml,%3Csvg width="30" height="30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="4" fill="%232ecc71" opacity="0.4"/%3E%3C/svg%3E');
      }

      /* Gradient misollar */
      .gradient-linear-1 {
        background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      }

      .gradient-linear-2 {
        background-image: linear-gradient(
          to right,
          #a8e6cf,
          #dcedc1,
          #ffd3b6,
          #ffaaa5
        );
      }

      .gradient-radial {
        background-image: radial-gradient(circle at center, #ff6b6b, #c0392b);
      }

      .gradient-conic {
        background-image: conic-gradient(
          from 0deg,
          #ff6b6b,
          #4ecdc4,
          #ffe66d,
          #ff6b6b
        );
      }

      /* Overlay rasm */
      .image-overlay {
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
          url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100" height="100" fill="%233498db"/%3E%3Ctext x="10" y="55" font-family="Arial" font-size="14" fill="white"%3ENamuna Rasm%3C/text%3E%3C/svg%3E');
        background-size: cover, cover;
      }

      /* Ko'p qatlamli */
      .multi-layer {
        background-image:
          radial-gradient(
            circle at 20% 30%,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 30%
          ),
          linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .note-box {
        background: #fff3cd;
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid #ffc107;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <h1>🖼️ background-image Xususiyati</h1>

    <div class="section">
      <h2>📷 URL orqali rasm va SVG patternlar</h2>
      <div class="image-grid">
        <div class="image-card">
          <div class="image-preview pattern-svg">SVG Pattern</div>
          <div class="image-info">
            url('data:image/svg+xml...')<br />Doira pattern
          </div>
        </div>
        <div class="image-card">
          <div class="image-preview pattern-stripes">Chiziqli Pattern</div>
          <div class="image-info">
            url('data:image/svg+xml...')<br />Vertikal chiziqlar
          </div>
        </div>
        <div class="image-card">
          <div class="image-preview pattern-dots">Nuqtali Pattern</div>
          <div class="image-info">
            url('data:image/svg+xml...')<br />Nuqtali fon
          </div>
        </div>
      </div>

      <div class="note-box">
        <strong>💡 Data URL:</strong> SVG kodni to'g'ridan-to'g'ri URL sifatida
        ishlatish mumkin. Bu tashqi fayllarga bog'liqlikni kamaytiradi.
      </div>
    </div>

    <div class="section">
      <h2>🌈 Linear Gradient (Chiziqli Gradient)</h2>
      <div class="image-grid">
        <div class="image-card">
          <div class="image-preview gradient-linear-1">Diagonal Gradient</div>
          <div class="image-info">linear-gradient(45deg, #ff6b6b, #4ecdc4)</div>
        </div>
        <div class="image-card">
          <div class="image-preview gradient-linear-2">Ko'p rangli</div>
          <div class="image-info">
            linear-gradient(to right, #a8e6cf, #dcedc1, #ffd3b6, #ffaaa5)
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 Radial va Conic Gradient</h2>
      <div class="image-grid">
        <div class="image-card">
          <div class="image-preview gradient-radial">Radial Gradient</div>
          <div class="image-info">
            radial-gradient(circle at center, #ff6b6b, #c0392b)
          </div>
        </div>
        <div class="image-card">
          <div class="image-preview gradient-conic">Conic Gradient</div>
          <div class="image-info">
            conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #ffe66d, #ff6b6b)
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎭 Overlay - Rasm ustiga gradient</h2>
      <div class="image-grid">
        <div class="image-card">
          <div class="image-preview image-overlay">Qoraytirilgan rasm</div>
          <div class="image-info">
            linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(...)
          </div>
        </div>
        <div class="image-card">
          <div class="image-preview multi-layer">Ko'p qatlamli</div>
          <div class="image-info">radial-gradient + linear-gradient birga</div>
        </div>
      </div>

      <div class="note-box">
        <strong>🎨 Overlay texnikasi:</strong> Rasm ustiga yarim shaffof
        gradient qo'yish orqali matn o'qilishini yaxshilash yoki vizual effekt
        yaratish mumkin.
      </div>
    </div>
  </body>
</html>
```

---

## 3️⃣ background-repeat

Fon rasmining takrorlanishini boshqaradi.

### 📝 Sintaksis:

```css
.element {
  background-repeat: repeat; /* default - har ikki yo'nalishda */
  background-repeat: repeat-x; /* faqat gorizontal */
  background-repeat: repeat-y; /* faqat vertikal */
  background-repeat: no-repeat; /* takrorlanmasin */
  background-repeat: space; /* bo'shliq bilan takrorlash */
  background-repeat: round; /* o'lchamni yaxlitlab takrorlash */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .repeat-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 20px;
      }

      .repeat-card {
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .repeat-preview {
        height: 180px;
        background-color: #f8f9fa;
        background-image: url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="12" fill="%233498db" opacity="0.7"/%3E%3Ccircle cx="20" cy="20" r="6" fill="white" opacity="0.9"/%3E%3C/svg%3E');
        border-bottom: 1px solid #eee;
      }

      .repeat-info {
        background: white;
        padding: 12px;
        font-family: "Courier New", monospace;
        font-size: 13px;
        color: #555;
      }

      .repeat-all {
        background-repeat: repeat;
      }
      .repeat-x {
        background-repeat: repeat-x;
      }
      .repeat-y {
        background-repeat: repeat-y;
      }
      .repeat-no {
        background-repeat: no-repeat;
      }
      .repeat-space {
        background-repeat: space;
      }
      .repeat-round {
        background-repeat: round;
      }

      /* Ko'p fonli misol */
      .multi-repeat {
        height: 200px;
        background-color: #1a1a2e;
        background-image:
          url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="20" height="20" fill="%23162b40" opacity="0.5"/%3E%3C/svg%3E'),
          url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="30" cy="30" r="15" fill="none" stroke="%23e94560" stroke-width="2" opacity="0.6"/%3E%3C/svg%3E');
        background-repeat: repeat, space;
        background-size:
          20px 20px,
          60px 60px;
        border-radius: 12px;
        margin-top: 20px;
      }

      .comparison-box {
        display: flex;
        gap: 20px;
        margin-top: 20px;
      }

      .comp-item {
        flex: 1;
        text-align: center;
      }

      .comp-preview {
        height: 120px;
        background-color: #f0f0f0;
        background-image: url('data:image/svg+xml,%3Csvg width="50" height="50" xmlns="http://www.w3.org/2000/svg"%3E%3Cpolygon points="25,5 45,20 45,45 25,60 5,45 5,20" fill="%23e74c3c" opacity="0.6"/%3E%3C/svg%3E');
        border-radius: 8px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <h1>🔄 background-repeat Xususiyati</h1>

    <div class="section">
      <h2>📌 Takrorlash turlari</h2>
      <div class="repeat-grid">
        <div class="repeat-card">
          <div class="repeat-preview repeat-all"></div>
          <div class="repeat-info">
            <strong>repeat</strong><br />
            Har ikki yo'nalishda<br />
            <small>(default)</small>
          </div>
        </div>
        <div class="repeat-card">
          <div class="repeat-preview repeat-x"></div>
          <div class="repeat-info">
            <strong>repeat-x</strong><br />
            Faqat gorizontal<br />
            <small>X o'qi bo'ylab</small>
          </div>
        </div>
        <div class="repeat-card">
          <div class="repeat-preview repeat-y"></div>
          <div class="repeat-info">
            <strong>repeat-y</strong><br />
            Faqat vertikal<br />
            <small>Y o'qi bo'ylab</small>
          </div>
        </div>
        <div class="repeat-card">
          <div class="repeat-preview repeat-no"></div>
          <div class="repeat-info">
            <strong>no-repeat</strong><br />
            Takrorlanmasin<br />
            <small>Faqat bir marta</small>
          </div>
        </div>
        <div class="repeat-card">
          <div class="repeat-preview repeat-space"></div>
          <div class="repeat-info">
            <strong>space</strong><br />
            Bo'shliq bilan<br />
            <small>Kesilmasdan</small>
          </div>
        </div>
        <div class="repeat-card">
          <div class="repeat-preview repeat-round"></div>
          <div class="repeat-info">
            <strong>round</strong><br />
            O'lchamni moslab<br />
            <small>Butun songa yaxlitlab</small>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 space vs round taqqoslash</h2>
      <div class="comparison-box">
        <div class="comp-item">
          <div
            class="comp-preview"
            style="background-repeat: space; background-size: 50px 50px;"
          ></div>
          <p>
            <strong>space</strong> - rasm o'lchami o'zgarmaydi, oraliq
            qo'shiladi
          </p>
        </div>
        <div class="comp-item">
          <div
            class="comp-preview"
            style="background-repeat: round; background-size: 50px 50px;"
          ></div>
          <p>
            <strong>round</strong> - rasm o'lchami cho'ziladi yoki qisqaradi
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎨 Ko'p fonli takrorlash</h2>
      <div class="multi-repeat"></div>
      <p style="margin-top: 15px; text-align: center; font-family: monospace;">
        background-repeat: repeat, space;<br />
        <small>Birinchi fon: repeat | Ikkinchi fon: space</small>
      </p>
    </div>
  </body>
</html>
```

---

## 4️⃣ background-position

Fon rasmining joylashuvini belgilaydi.

### 📝 Sintaksis:

```css
.element {
  /* Kalit so'zlar */
  background-position: top;
  background-position: center;
  background-position: bottom left;
  background-position: right top;

  /* Foizlar */
  background-position: 50% 50%; /* markaz */
  background-position: 0% 0%; /* chap-yuqori */
  background-position: 100% 100%; /* o'ng-past */

  /* Aniq o'lchamlar */
  background-position: 20px 50px;
  background-position: 2rem 5rem;

  /* Aralash */
  background-position: left 20px top 50px;
  background-position: right 10% bottom 30px;
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .position-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
      }

      .position-card {
        text-align: center;
      }

      .position-preview {
        height: 120px;
        background-color: #e8f4f8;
        background-image: url('data:image/svg+xml,%3Csvg width="30" height="30" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="15" cy="15" r="12" fill="%23e74c3c" opacity="0.8"/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        border: 2px dashed #bdc3c7;
        border-radius: 8px;
        margin-bottom: 8px;
      }

      .position-label {
        font-family: "Courier New", monospace;
        font-size: 12px;
        color: #555;
      }

      /* Koordinatalar tizimi ko'rsatkichi */
      .coordinate-system {
        position: relative;
        height: 200px;
        background:
          linear-gradient(to right, #f0f0f0 1px, transparent 1px),
          linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
        background-size: 20% 20%;
        border-radius: 12px;
        margin: 20px 0;
      }

      .coordinate-marker {
        position: absolute;
        width: 20px;
        height: 20px;
        background: #e74c3c;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 8px rgba(231, 76, 60, 0.5);
      }

      .axis-label {
        position: absolute;
        font-size: 12px;
        color: #7f8c8d;
      }

      .sprite-demo {
        height: 150px;
        background-color: #2c3e50;
        background-image: url('data:image/svg+xml,%3Csvg width="300" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0" y="0" width="100" height="100" fill="%23e74c3c"/%3E%3Ctext x="20" y="60" fill="white" font-family="Arial" font-size="20" font-weight="bold"%3E1%3C/text%3E%3Crect x="100" y="0" width="100" height="100" fill="%233498db"/%3E%3Ctext x="120" y="60" fill="white" font-family="Arial" font-size="20" font-weight="bold"%3E2%3C/text%3E%3Crect x="200" y="0" width="100" height="100" fill="%232ecc71"/%3E%3Ctext x="220" y="60" fill="white" font-family="Arial" font-size="20" font-weight="bold"%3E3%3C/text%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-size: 300px 100px;
        border-radius: 12px;
        margin: 20px 0;
      }

      .sprite-controls {
        display: flex;
        gap: 10px;
        justify-content: center;
      }

      .sprite-btn {
        padding: 8px 16px;
        border: none;
        background: #3498db;
        color: white;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <h1>📍 background-position Xususiyati</h1>

    <div class="section">
      <h2>📌 Kalit so'zlar bilan joylashtirish</h2>
      <div class="position-grid">
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: left top;"
          ></div>
          <div class="position-label">left top</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: center top;"
          ></div>
          <div class="position-label">center top</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: right top;"
          ></div>
          <div class="position-label">right top</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: left center;"
          ></div>
          <div class="position-label">left center</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: center center;"
          ></div>
          <div class="position-label">center center</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: right center;"
          ></div>
          <div class="position-label">right center</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: left bottom;"
          ></div>
          <div class="position-label">left bottom</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: center bottom;"
          ></div>
          <div class="position-label">center bottom</div>
        </div>
        <div class="position-card">
          <div
            class="position-preview"
            style="background-position: right bottom;"
          ></div>
          <div class="position-label">right bottom</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>📐 Koordinatalar tizimi</h2>
      <div class="coordinate-system">
        <div class="axis-label" style="top: 0; left: 0;">0% 0%</div>
        <div class="axis-label" style="top: 0; right: 0;">100% 0%</div>
        <div class="axis-label" style="bottom: 0; left: 0;">0% 100%</div>
        <div class="axis-label" style="bottom: 0; right: 0;">100% 100%</div>
        <div
          class="axis-label"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        >
          50% 50%
        </div>

        <div class="coordinate-marker" style="left: 0%; top: 0%;"></div>
        <div
          class="coordinate-marker"
          style="left: 100%; top: 0%; background: #3498db;"
        ></div>
        <div
          class="coordinate-marker"
          style="left: 0%; top: 100%; background: #2ecc71;"
        ></div>
        <div
          class="coordinate-marker"
          style="left: 100%; top: 100%; background: #f39c12;"
        ></div>
        <div
          class="coordinate-marker"
          style="left: 50%; top: 50%; background: #9b59b6;"
        ></div>
      </div>
      <p style="text-align: center; color: #666;">
        background-position: X% Y% | X-offset Y-offset
      </p>
    </div>

    <div class="section">
      <h2>🎯 CSS Sprite (Rasm spriti)</h2>
      <p>Bitta rasm faylidan turli qismlarini ko'rsatish:</p>
      <div
        class="sprite-demo"
        id="spriteDemo"
        style="background-position: 0px 0px;"
      ></div>
      <div class="sprite-controls">
        <button
          class="sprite-btn"
          onclick="document.getElementById('spriteDemo').style.backgroundPosition = '0px 0px'"
        >
          1-Qism
        </button>
        <button
          class="sprite-btn"
          onclick="document.getElementById('spriteDemo').style.backgroundPosition = '-100px 0px'"
        >
          2-Qism
        </button>
        <button
          class="sprite-btn"
          onclick="document.getElementById('spriteDemo').style.backgroundPosition = '-200px 0px'"
        >
          3-Qism
        </button>
      </div>
    </div>

    <div class="section">
      <h2>📏 Aniq o'lchamlar va aralash qiymatlar</h2>
      <div
        style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;"
      >
        <div>
          <div
            class="position-preview"
            style="background-position: 20px 30px;"
          ></div>
          <div class="position-label">20px 30px</div>
        </div>
        <div>
          <div
            class="position-preview"
            style="background-position: right 20px bottom 30px;"
          ></div>
          <div class="position-label">right 20px bottom 30px</div>
        </div>
        <div>
          <div
            class="position-preview"
            style="background-position: left 10% top 40%;"
          ></div>
          <div class="position-label">left 10% top 40%</div>
        </div>
      </div>
    </div>
  </body>
</html>
```

---

## 5️⃣ background-size (cover, contain)

Fon rasmining o'lchamini boshqaradi.

### 📝 Sintaksis:

```css
.element {
  background-size: auto; /* asl o'lcham */
  background-size: cover; /* to'liq qoplash */
  background-size: contain; /* to'liq sig'dirish */
  background-size: 100% 100%; /* cho'zish */
  background-size: 200px 150px; /* aniq o'lcham */
  background-size: 50% auto; /* kenglik 50%, balandlik avtomatik */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            padding: 30px;
            background: #f0f2f5;
        }

        .section {
            margin-bottom: 40px;
            background: white;
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        h2 {
            color: #2c3e50;
            margin-bottom: 20px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        h3 {
            color: #34495e;
            margin: 20px 0 15px;
        }

        .size-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .size-card {
            text-align: center;
        }

        .size-preview {
            height: 180px;
            background-color: #f0f0f0;
            background-image: url('data:image/svg+xml,%3Csvg width="200" height="150" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="150" fill="%233498db"/%3E%3Ccircle cx="100" cy="75" r="40" fill="%23e74c3c" opacity="0.8"/%3E%3Ctext x="100" y="85" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="bold"%3ELOGO%3C/text%3E%3C/svg%3E');
            background-repeat: no-repeat;
            border-radius: 12px;
            margin-bottom: 10px;
            border: 2px dashed #bdc3c7;
        }

        .size-label {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #555;
        }

        .cover-vs-contain {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }

        .comparison-item {
            text-align: center;
        }

        .comparison-preview {
            height: 200px;
            background-color: #2c3e50;
            background-image: url('data:image/svg+xml,%3Csvg width="400" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Crect width="40" height="40" fill="none" stroke="%2334495e" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="400" height="200" fill="url(%23grid)"/%3E%3Ccircle cx="200" cy="100" r="60" fill="%23e74c3c" opacity="0.8"/%3E%3C/svg%3E');
            background-repeat: no-repeat;
            border-radius: 12px;
            margin-bottom: 15px;
        }

        .hero-banner {
            height: 250px;
            background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                              url('data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="400" fill="%233498db"/%3E%3Ccircle cx="200" cy="150" r="80" fill="%232ecc71" opacity="0.6"/%3E%3Ccircle cx="600" cy="250" r="100" fill="%23e74c3c" opacity="0.5"/%3E%3Ctext x="400" y="220" text-anchor="middle" fill="white" font-family="Arial" font-size="36" font-weight="bold"%3EKatta Banner%3C/text%3E%3C/svg%3E');
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
        }

        .note-box {
            background: #e8f4f8;
            padding: 15px 20px;
            border-radius: 10px;
            border-left: 4px solid #3498db;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>📏 background-size Xususiyati</h1>

    <div class="section">
        <h2>🎯 cover vs contain - Asosiy farq</h2>
        <div class="cover-vs-contain">
            <div class="comparison-item">
                <div class="comparison-preview" style="background-size: cover;"></div>
                <h3 style="margin: 10px 0;">cover</h3>
                <p style="color: #666;">Butun elementni qoplaydi, rasm kesilishi mumkin</p>
            </div>
            <div class="comparison-item">
                <div class="comparison-preview" style="background-size: contain;"></div>
                <h3 style="margin: 10px 0;">contain</h3>
                <p style="color: #666;">Butun rasm ko'rinadi, bo'sh joy qolishi mumkin</p>
            </div>
        </div>

        <div class="note-box">
            <strong>💡 Qachon qaysi birini ishlatish kerak?</strong><br>
            • <strong>cover</strong> - Hero bannerlar, to'liq ekran fonlari uchun<br>
            • <strong>contain</strong> - Logotiplar, mahsulot rasmlari (to'liq ko'rinishi kerak)
        </div>
    </div>

    <div class="section">
        <h2>📌 Barcha background-size qiymatlari</h2>
        <div class="size-grid">
            <div class="size-card">
                <div class="size-preview" style="background-size: auto;"></div>
                <div class="size-label">auto (asl o'lcham)</div>
            </div>
            <div class="size-card">
                <div class="size-preview" style="background-size: cover;"></div>
                <div class="size-label">cover</div>
            </div>
            <div class="size-card">
                <div class="size-preview" style="background-size: contain;"></div>
                <div class="size-label">contain</div>
            </div>
            <div class="size-card">
                <div class="size-preview" style="background-size: 100% 100%;"></div>
                <div class="size-label">100% 100% (cho'zilgan)</div>
            </div>
            <div class="size-card">
                <div class="size-preview" style="background-size: 100px 100px;"></div>
                <div class="size-label">100px 100px</div>
            </div>
            <div class="size-card">
                <div class="size-preview" style="background-size: 80% auto;"></div>
                <div class="size-label">80% auto</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>🖼️ Amaliy misol - Hero Banner</h2>
        <div class="hero-banner">
            cover + center position
        </div>
        <p style="margin-top: 15px; text-align: center; font-family: monospace;">
            background-size: cover;<br>
            background-position: center;
        </p>
    </div>

    <div class="section">
        <h2>🎨 Ko'p fonli o'lchamlar</h2>
        <div style="height: 200px; background-color: #1a1a2e;
                    background-image:
                        url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="50" cy="50" r="30" fill="%23e94560" opacity="0.6"/%3E%3C/svg%3E'),
                        url('data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="none" stroke="%23533e8f" stroke-width="3" opacity="0.4"/%3E%3C/svg%3E');
                    background-repeat: no-repeat, repeat;
                    background-size: 80px 80px, 40px 40px;
                    background-position: center, 0 0;
                    border-radius: 12px; margin-top: 20px;">
        </div>
        <p style="margin-top: 15px; text-align: center; font-family: monospace;">
            background-size: 80px 80px, 40px 40px;
        </p>
    </div>
</body>
</html>
```

---

## 6️⃣ background-attachment

Sahifa skroll qilinganda fonning harakatini belgilaydi.

### 📝 Sintaksis:

```css
.element {
  background-attachment: scroll; /* element bilan birga harakatlanadi (default) */
  background-attachment: fixed; /* viewportga nisbatan qotib qoladi */
  background-attachment: local; /* element kontenti bilan birga skroll */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
        margin: 0;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .attachment-demo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .attachment-card {
        text-align: center;
      }

      .scroll-container {
        height: 200px;
        overflow-y: auto;
        border-radius: 12px;
        border: 2px solid #e0e0e0;
        margin-bottom: 10px;
      }

      .attachment-preview {
        min-height: 400px;
        background-image:
          url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="bg" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="30" cy="30" r="15" fill="%233498db" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23bg)"/%3E%3C/svg%3E'),
          linear-gradient(135deg, #667eea20, #764ba220);
        background-repeat: repeat;
        color: #333;
        padding: 20px;
      }

      .attachment-scroll {
        background-attachment: scroll;
      }
      .attachment-fixed {
        background-attachment: fixed;
      }
      .attachment-local {
        background-attachment: local;
      }

      .parallax-demo {
        height: 250px;
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('data:image/svg+xml,%3Csvg width="800" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="300" fill="%232c3e50"/%3E%3Ccircle cx="200" cy="100" r="50" fill="%23e74c3c" opacity="0.5"/%3E%3Ccircle cx="500" cy="150" r="70" fill="%233498db" opacity="0.5"/%3E%3Ccircle cx="700" cy="80" r="40" fill="%232ecc71" opacity="0.5"/%3E%3C/svg%3E');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 28px;
        font-weight: bold;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        margin: 30px 0;
      }

      .note-box {
        background: #fff3cd;
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid #ffc107;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <h1>📌 background-attachment Xususiyati</h1>

    <div class="section">
      <h2>🔄 scroll vs fixed vs local</h2>
      <div class="attachment-demo">
        <div class="attachment-card">
          <div class="scroll-container">
            <div class="attachment-preview attachment-scroll">
              <h4 style="margin-top: 0;">scroll (default)</h4>
              <p>
                Element skroll qilinganda fon element bilan birga harakatlanadi.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>Excepteur sint occaecat cupidatat non proident.</p>
              <p style="font-weight: bold;">↓ Skroll qiling ↓</p>
            </div>
          </div>
          <div class="size-label">background-attachment: scroll</div>
        </div>

        <div class="attachment-card">
          <div class="scroll-container">
            <div class="attachment-preview attachment-local">
              <h4 style="margin-top: 0;">local</h4>
              <p>
                Element ichidagi kontent skroll qilinganda fon ham skroll
                qilinadi.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>Excepteur sint occaecat cupidatat non proident.</p>
              <p style="font-weight: bold;">↓ Skroll qiling ↓</p>
            </div>
          </div>
          <div class="size-label">background-attachment: local</div>
        </div>

        <div class="attachment-card">
          <div class="scroll-container">
            <div class="attachment-preview attachment-fixed">
              <h4 style="margin-top: 0;">fixed</h4>
              <p>Viewportga nisbatan qotib qoladi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>Excepteur sint occaecat cupidatat non proident.</p>
              <p style="font-weight: bold;">↓ Skroll qiling ↓</p>
            </div>
          </div>
          <div class="size-label">background-attachment: fixed</div>
        </div>
      </div>
    </div>

    <div class="parallax-demo">Parallax Effekt (fixed)</div>

    <div class="section">
      <h2>🎯 Parallax effekti yaratish</h2>
      <p>
        Sayt skroll qilinganda fon qotib qoladi va parallax effekti hosil
        bo'ladi:
      </p>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
        <code
          style="background: #2c3e50; color: #fff; padding: 15px; display: block; border-radius: 8px;"
        >
          .parallax {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;background-image: url('fon.jpg');<br />
          &nbsp;&nbsp;&nbsp;&nbsp;background-attachment: fixed;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;background-size: cover;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;background-position: center;<br />
          }
        </code>
      </div>

      <div class="note-box">
        <strong>⚠️ Eslatma:</strong> Mobil qurilmalarda
        <code>background-attachment: fixed</code> ba'zan to'g'ri ishlamasligi
        mumkin. Mobil uchun <code>scroll</code> qiymatini fallback sifatida
        berish tavsiya etiladi.
      </div>
    </div>
  </body>
</html>
```

---

## 7️⃣ background-clip va background-origin

Fonning qayerdan boshlanishi va qayerda kesilishini belgilaydi.

### 📝 Sintaksis:

```css
.element {
  /* background-clip - fon qayerda kesiladi */
  background-clip: border-box; /* border ostigacha (default) */
  background-clip: padding-box; /* padding ostigacha */
  background-clip: content-box; /* faqat kontent sohasi */
  background-clip: text; /* matn shaklida (zamonaviy) */

  /* background-origin - fon qayerdan boshlanadi */
  background-origin: border-box; /* border dan (default) */
  background-origin: padding-box; /* padding dan */
  background-origin: content-box; /* kontentdan */
}
```

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: "Segoe UI", Arial, sans-serif;
        padding: 30px;
        background: #f0f2f5;
      }

      .section {
        margin-bottom: 40px;
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
      }

      h3 {
        color: #34495e;
        margin: 20px 0 15px;
      }

      .clip-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .clip-card {
        text-align: center;
      }

      .clip-preview {
        height: 150px;
        background-color: transparent;
        background-image: linear-gradient(135deg, #667eea, #764ba2);
        padding: 20px;
        border: 8px dashed rgba(255, 255, 255, 0.5);
        border-radius: 12px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .clip-label {
        font-family: "Courier New", monospace;
        font-size: 13px;
        color: #555;
      }

      /* Text clip - zamonaviy */
      .text-clip-demo {
        font-size: 60px;
        font-weight: 900;
        text-align: center;
        background-image: linear-gradient(
          45deg,
          #ff6b6b,
          #4ecdc4,
          #ffe66d,
          #ff6b6b
        );
        background-size: 300% 300%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: gradient-shift 4s ease infinite;
        margin: 20px 0;
      }

      @keyframes gradient-shift {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      .origin-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
      }

      .origin-preview {
        height: 130px;
        background-color: #f0f0f0;
        background-image: url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="15" fill="%23e74c3c" opacity="0.7"/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        padding: 25px;
        border: 8px solid rgba(52, 152, 219, 0.3);
        border-radius: 12px;
        margin-bottom: 10px;
      }

      .comparison-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin: 20px 0;
      }

      .note-box {
        background: #e8f4f8;
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid #3498db;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <h1>✂️ background-clip va background-origin</h1>

    <div class="section">
      <h2>📌 background-clip - Fon qayerda kesiladi?</h2>
      <div class="clip-grid">
        <div class="clip-card">
          <div class="clip-preview" style="background-clip: border-box;">
            border-box
          </div>
          <div class="clip-label">
            border-box (default)<br />Border ostigacha
          </div>
        </div>
        <div class="clip-card">
          <div class="clip-preview" style="background-clip: padding-box;">
            padding-box
          </div>
          <div class="clip-label">padding-box<br />Padding ostigacha</div>
        </div>
        <div class="clip-card">
          <div class="clip-preview" style="background-clip: content-box;">
            content-box
          </div>
          <div class="clip-label">content-box<br />Faqat kontent sohasi</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎨 background-clip: text - Gradient Matn</h2>
      <div class="text-clip-demo">GRADIENT TEXT</div>
      <div style="text-align: center;">
        <code
          style="background: #2c3e50; color: #fff; padding: 10px 20px; border-radius: 8px;"
        >
          background-clip: text;<br />
          -webkit-background-clip: text;<br />
          color: transparent;
        </code>
      </div>
      <div class="note-box">
        <strong>💡 Eslatma:</strong> <code>background-clip: text</code> uchun
        <code>-webkit-background-clip: text</code> prefiksi hali ham kerak.
      </div>
    </div>

    <div class="section">
      <h2>📍 background-origin - Fon qayerdan boshlanadi?</h2>
      <p>
        Fon rasmining <code>background-position</code> uchun mos yozuv nuqtasini
        belgilaydi.
      </p>
      <div class="origin-grid">
        <div class="clip-card">
          <div
            class="origin-preview"
            style="background-origin: border-box; background-position: top left;"
          >
            border-box
          </div>
          <div class="clip-label">
            border-box (default)<br />Border burchagidan
          </div>
        </div>
        <div class="clip-card">
          <div
            class="origin-preview"
            style="background-origin: padding-box; background-position: top left;"
          >
            padding-box
          </div>
          <div class="clip-label">padding-box<br />Padding burchagidan</div>
        </div>
        <div class="clip-card">
          <div
            class="origin-preview"
            style="background-origin: content-box; background-position: top left;"
          >
            content-box
          </div>
          <div class="clip-label">content-box<br />Kontent burchagidan</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🔄 clip vs origin taqqoslash</h2>
      <div class="comparison-box">
        <div>
          <div
            class="clip-preview"
            style="background-clip: content-box; height: 120px;"
          >
            clip: content-box
          </div>
          <p style="text-align: center;">
            <strong>clip</strong> - fon qayerda <u>tugaydi</u>
          </p>
        </div>
        <div>
          <div
            class="origin-preview"
            style="background-origin: content-box; background-position: 0 0; height: 120px;"
          >
            origin: content-box
          </div>
          <p style="text-align: center;">
            <strong>origin</strong> - fon qayerdan <u>boshlanadi</u>
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

---

## 8️⃣ background (shorthand)

Barcha background xususiyatlarini bitta qatorda yozish.

### 📝 Sintaksis:

```css
.element {
  background: [color] [image] [repeat] [attachment] [position] / [size] [origin]
    [clip];
}
```

### 📋 Tartibi:

| #   | Xususiyat             | Misol            |
| --- | --------------------- | ---------------- |
| 1   | background-color      | `#3498db`        |
| 2   | background-image      | `url('fon.jpg')` |
| 3   | background-repeat     | `no-repeat`      |
| 4   | background-attachment | `fixed`          |
| 5   | background-position   | `center`         |
| 6   | background-size       | `/ cover`        |
| 7   | background-origin     | `content-box`    |
| 8   | background-clip       | `padding-box`    |

### 💻 To'liq misol:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            padding: 30px;
            background: #f0f2f5;
        }

        .section {
            margin-bottom: 40px;
            background: white;
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        h2 {
            color: #2c3e50;
            margin-bottom: 20px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        h3 {
            color: #34495e;
            margin: 20px 0 15px;
        }

        .shorthand-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .shorthand-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .shorthand-preview {
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            text-align: center;
            padding: 20px;
        }

        .shorthand-code {
            background: #1a1a2e;
            color: #4ecdc4;
            padding: 15px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-break: break-all;
        }

        /* Shorthand misollar */
        .sh-1 {
            background: #3498db url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="20" cy="20" r="10" fill="white" opacity="0.3"/%3E%3C/svg%3E') repeat;
        }

        .sh-2 {
            background: linear-gradient(135deg, #667eea, #764ba2) no-repeat center / cover;
        }

        .sh-3 {
            background: #e74c3c url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpolygon points="30,5 55,25 55,55 30,75 5,55 5,25" fill="white" opacity="0.2"/%3E%3C/svg%3E') repeat-x fixed bottom / 60px;
        }

        .sh-4 {
            background:
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                linear-gradient(135deg, #1a1a2e, #16213e) no-repeat center / cover;
        }

        .sh-5 {
            background: #2ecc71 padding-box content-box;
            background-image: url('data:image/svg+xml,%3Csvg width="30" height="30" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="30" height="30" fill="white" opacity="0.3"/%3E%3C/svg%3E');
            background-repeat: repeat;
            padding: 20px;
            border: 8px dashed rgba(255,255,255,0.3);
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        .comparison-table th,
        .comparison-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #e0e0e0;
        }

        .comparison-table th {
            background: #f8f9fa;
            font-weight: 600;
            color: #2c3e50;
        }

        .comparison-table tr:last-child td {
            border-bottom: none;
        }

        .comparison-table code {
            background: #f0f0f0;
            padding: 3px 8px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }

        .note-box {
            background: #fff3cd;
            padding: 15px 20px;
            border-radius: 10px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>📦 background Shorthand (Qisqa yozuv)</h1>

    <div class="section">
        <h2>📌 Asosiy shorthand misollar</h2>
        <div class="shorthand-grid">
            <div class="shorthand-card">
                <div class="shorthand-preview sh-1">
                    Oddiy pattern
                </div>
                <div class="shorthand-code">background: #3498db url('pattern.svg') repeat;</div>
            </div>
            <div class="shorthand-card">
                <div class="shorthand-preview sh-2">
                    Gradient + cover
                </div>
                <div class="shorthand-code">background: linear-gradient(...) no-repeat center / cover;</div>
            </div>
            <div class="shorthand-card">
                <div class="shorthand-preview sh-3">
                    Murakkab shorthand
                </div>
                <div class="shorthand-code">background: #e74c3c url('...') repeat-x fixed bottom / 60px;</div>
            </div>
            <div class="shorthand-card">
                <div class="shorthand-preview sh-4">
                    Ko'p qatlamli
                </div>
                <div class="shorthand-code">background: radial-gradient(...), linear-gradient(...) no-repeat center / cover;</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>🎯 background-size shorthand da</h2>
        <p><code>background-size</code> shorthand da <strong>faqat</strong> <code>/</code> belgisidan keyin,
        <code>background-position</code> dan keyin yoziladi.</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <div style="height: 120px; background: url('data:image/svg+xml,%3Csvg width="200" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="100" fill="%233498db"/%3E%3Ccircle cx="100" cy="50" r="30" fill="%23e74c3c" opacity="0.7"/%3E%3C/svg%3E') no-repeat center / contain #f0f0f0; border-radius: 12px;"></div>
                <p><code>background: url(...) no-repeat center / contain #f0f0f0;</code></p>
            </div>
            <div>
                <div style="height: 120px; background: url('data:image/svg+xml,%3Csvg width="200" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="100" fill="%233498db"/%3E%3Ccircle cx="100" cy="50" r="30" fill="%23e74c3c" opacity="0.7"/%3E%3C/svg%3E') no-repeat 20px 20px / 100px #f0f0f0; border-radius: 12px;"></div>
                <p><code>background: url(...) no-repeat 20px 20px / 100px #f0f0f0;</code></p>
            </div>
        </div>

        <div class="note-box">
            <strong>📐 Shorthand tartibi:</strong><br>
            <code>background: [color] [image] [repeat] [attachment] [position] / [size] [origin] [clip];</code>
        </div>
    </div>

    <div class="section">
        <h2>📊 Alohida vs Shorthand taqqoslash</h2>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Alohida xususiyatlar</th>
                    <th>Shorthand</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <code>background-color: #3498db;</code><br>
                        <code>background-image: url('fon.jpg');</code><br>
                        <code>background-repeat: no-repeat;</code><br>
                        <code>background-position: center;</code><br>
                        <code>background-size: cover;</code>
                    </td>
                    <td>
                        <code>background: #3498db url('fon.jpg') no-repeat center / cover;</code>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>🎨 Ko'p fonli shorthand</h2>
        <div style="height: 200px;
                    background:
                        url('data:image/svg+xml,%3Csvg width="50" height="50" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="25" cy="25" r="12" fill="%23e94560" opacity="0.6"/%3E%3C/svg%3E') repeat,
                        linear-gradient(135deg, #1a1a2e, #16213e) no-repeat center / cover;
                    border-radius: 12px;">
        </div>
        <div style="background: #1a1a2e; color: #4ecdc4; padding: 15px; border-radius: 8px; margin-top: 15px; font-family: monospace;">
            background: <br>
            &nbsp;&nbsp;&nbsp;&nbsp;url('pattern.svg') repeat,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;linear-gradient(...) no-repeat center / cover;
        </div>
    </div>

    <div class="section">
        <h2>⚠️ Muhim eslatmalar</h2>
        <ul style="line-height: 1.8; color: #555;">
            <li>Shorthand da yozilmagan xususiyatlar <strong>default</strong> qiymatga qaytadi</li>
            <li><code>background-size</code> faqat <code>/</code> bilan <code>background-position</code> dan keyin yoziladi</li>
            <li><code>background-clip</code> va <code>background-origin</code> birga yozilganda birinchi qiymat <code>origin</code>, ikkinchisi <code>clip</code> hisoblanadi</li>
            <li>Ko'p fonlar uchun vergul bilan ajratiladi</li>
            <li><code>background-color</code> faqat <strong>oxirgi</strong> qatlamda bo'lishi kerak</li>
        </ul>
    </div>
</body>
</html>
```

---

## 📊 Barcha Background Xususiyatlari - Xulosa Jadvali

| Xususiyat               | Tavsif              | Default       | Misol             |
| ----------------------- | ------------------- | ------------- | ----------------- |
| `background-color`      | Fon rangi           | `transparent` | `#3498db`         |
| `background-image`      | Fon rasmi/gradient  | `none`        | `url('rasm.jpg')` |
| `background-repeat`     | Takrorlanish        | `repeat`      | `no-repeat`       |
| `background-position`   | Joylashuvi          | `0% 0%`       | `center`          |
| `background-size`       | O'lchami            | `auto`        | `cover`           |
| `background-attachment` | Skroll harakati     | `scroll`      | `fixed`           |
| `background-clip`       | Qayerda kesiladi    | `border-box`  | `padding-box`     |
| `background-origin`     | Qayerdan boshlanadi | `padding-box` | `content-box`     |

---

<br>
<br>
<br>
<br>
<br>


