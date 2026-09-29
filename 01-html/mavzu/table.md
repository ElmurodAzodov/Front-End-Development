# HTML `<table>` — to‘liq tushuntirish

`<table>` HTML’da **jadval yaratish** uchun ishlatiladi. Jadval qator va ustunlardan tashkil topadi.

## 1. Eng oddiy jadval

```html
<table>
  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>

  <tr>
    <td>Vali</td>
    <td>22</td>
  </tr>
</table>
```

Natija:

| Ali  | 20  |
| ---- | --- |
| Vali | 22  |

---

# 2. `<table>`

Jadvalning asosiy konteyneri.

```html
<table>
  ...
</table>
```

Barcha jadval elementlari `<table>` ichida yoziladi.

---

# 3. `<tr>` — Table Row

`tr` — **jadval qatori**.

```html
<tr>
  ...
</tr>
```

Masalan:

```html
<table>
  <tr>
    <td>Ali</td>
    <td>Vali</td>
  </tr>

  <tr>
    <td>Sardor</td>
    <td>Aziz</td>
  </tr>
</table>
```

Bu yerda **2 ta qator** bor.

---

# 4. `<td>` — Table Data

`td` — jadvaldagi **oddiy katak**.

```html
<td>Ali</td>
```

Masalan:

```html
<tr>
  <td>Ali</td>
  <td>20</td>
  <td>Toshkent</td>
</tr>
```

Bu qatorda 3 ta katak bor.

---

# 5. `<th>` — Table Header

`th` — jadvalning **sarlavha katagi**.

```html
<table>
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
    <td>Toshkent</td>
  </tr>
</table>
```

`<th>` odatda brauzer tomonidan **qalin** qilib ko‘rsatiladi.

---

# 6. To‘liq oddiy jadval

```html
<table>
  <tr>
    <th>№</th>
    <th>Ism</th>
    <th>Familiya</th>
    <th>Yosh</th>
  </tr>

  <tr>
    <td>1</td>
    <td>Ali</td>
    <td>Karimov</td>
    <td>20</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Vali</td>
    <td>Ergashev</td>
    <td>21</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Sardor</td>
    <td>Aliyev</td>
    <td>19</td>
  </tr>
</table>
```

---

# 7. `<caption>` — Jadval nomi

`caption` jadvalning **nomi/sarlavhasi**.

```html
<table>
  <caption>
    O‘quvchilar ro‘yxati
  </caption>

  <tr>
    <th>Ism</th>
    <th>Yosh</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>
</table>
```

---

# 8. `<thead>` — Jadval sarlavhasi

Jadvalning yuqori qismi uchun ishlatiladi.

```html
<table>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
    </tr>
  </thead>
</table>
```

---

# 9. `<tbody>` — Jadval asosiy qismi

Asosiy ma'lumotlar shu qismga yoziladi.

```html
<table>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ali</td>
      <td>20</td>
    </tr>

    <tr>
      <td>Vali</td>
      <td>21</td>
    </tr>
  </tbody>
</table>
```

---

# 10. `<tfoot>` — Jadval pastki qismi

Jadvalning yakuniy qismi.

Masalan, umumiy summa:

```html
<table>
  <thead>
    <tr>
      <th>Mahsulot</th>
      <th>Narx</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Telefon</td>
      <td>5 000 000</td>
    </tr>

    <tr>
      <td>Quloqchin</td>
      <td>500 000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Jami</th>
      <th>5 500 000</th>
    </tr>
  </tfoot>
</table>
```

---

# 11. `<colgroup>` va `<col>`

Ustunlarni guruhlash va ularga umumiy CSS berish uchun ishlatiladi.

```html
<table>
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>

  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
    <td>Toshkent</td>
  </tr>
</table>
```

---

# 12. `colspan` — ustunlarni birlashtirish

`colspan` bir nechta **ustunni bitta katakka birlashtiradi**.

```html
<table>
  <tr>
    <th colspan="3">O‘quvchilar</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
    <td>Toshkent</td>
  </tr>
</table>
```

`colspan="3"` → 3 ta ustun bitta katakka birlashadi.

---

# 13. `rowspan` — qatorlarni birlashtirish

`rowspan` bir nechta **qatorni bitta katakka birlashtiradi**.

```html
<table>
  <tr>
    <th rowspan="2">Ism</th>
    <td>Ali</td>
  </tr>

  <tr>
    <td>Vali</td>
  </tr>
</table>
```

`rowspan="2"` → katak 2 ta qatorni egallaydi.

---

# 14. `scope` — `<th>` uchun

Accessibility uchun jadval sarlavhasi qaysi ma'lumotga tegishli ekanini bildiradi.

### Ustun sarlavhasi

```html
<th scope="col">Ism</th>
<th scope="col">Yosh</th>
```

### Qator sarlavhasi

```html
<th scope="row">Ali</th>
```

To‘liq:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Ism</th>
      <th scope="col">Yosh</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Ali</th>
      <td>20</td>
    </tr>
  </tbody>
</table>
```

---

# 15. Jadvalni CSS bilan bezash

HTML jadvalning **tuzilishini**, CSS esa **ko‘rinishini** boshqaradi.

```html
<style>
  table {
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }
</style>

<table>
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>

  <tr>
    <td>Vali</td>
    <td>21</td>
  </tr>
</table>
```

---

# 16. `border-collapse`

Jadval chegaralarini birlashtiradi.

```css
table {
  border-collapse: collapse;
}
```

`collapse` ishlatilmasa, kataklar orasida alohida chegaralar paydo bo‘ladi.

---

# 17. `border`

Katakka chegara beradi.

```css
th,
td {
  border: 1px solid black;
}
```

---

# 18. `padding`

Katak ichidagi bo‘shliq.

```css
th,
td {
  padding: 10px;
}
```

---

# 19. `text-align`

Matnni joylashtirish.

```css
th,
td {
  text-align: center;
}
```

Qiymatlar:

```css
text-align: left;
text-align: center;
text-align: right;
```

---

# 20. Responsive Table

Katta jadvallar telefonda ekran tashqarisiga chiqib ketishi mumkin. Buning uchun `overflow-x` ishlatiladi.

```html
<div class="table-container">
  <table>
    <tr>
      <th>№</th>
      <th>Ism</th>
      <th>Familiya</th>
      <th>Telefon</th>
      <th>Manzil</th>
    </tr>

    <tr>
      <td>1</td>
      <td>Ali</td>
      <td>Karimov</td>
      <td>+998901234567</td>
      <td>Toshkent</td>
    </tr>
  </table>
</div>
```

```css
.table-container {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
}
```

---

# 21. Jadvalning asosiy HTML elementlari

| Element      | Vazifasi                                                       |
| ------------ | -------------------------------------------------------------- |
| `<table>`    | Jadval yaratadi                                                |
| `<caption>`  | Jadval nomi                                                    |
| `<thead>`    | Jadvalning yuqori qismi                                        |
| `<tbody>`    | Jadvalning asosiy qismi                                        |
| `<tfoot>`    | Jadvalning pastki qismi                                        |
| `<tr>`       | Qator                                                          |
| `<th>`       | Sarlavha katagi                                                |
| `<td>`       | Oddiy katak                                                    |
| `<colgroup>` | Ustunlar guruhi                                                |
| `<col>`      | Ustun                                                          |
| `colspan`    | Ustunlarni birlashtirish                                       |
| `rowspan`    | Qatorlarni birlashtirish                                       |
| `scope`      | `<th>` tegining qaysi qator/ustunga tegishli ekanini bildiradi |

---

# 22. Zamonaviy va to‘g‘ri Table strukturasi

```html
<table>
  <caption>
    O‘quvchilar ro‘yxati
  </caption>

  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Ism</th>
      <th scope="col">Familiya</th>
      <th scope="col">Yosh</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Ali</td>
      <td>Karimov</td>
      <td>20</td>
    </tr>

    <tr>
      <td>2</td>
      <td>Vali</td>
      <td>Ergashev</td>
      <td>21</td>
    </tr>

    <tr>
      <td>3</td>
      <td>Sardor</td>
      <td>Aliyev</td>
      <td>19</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th colspan="3">Jami o‘quvchilar</th>
      <th>3</th>
    </tr>
  </tfoot>
</table>
```

**Asosiy formula:**

```text
<table>
    <caption>Jadval nomi</caption>

    <thead>
        <tr>
            <th>Sarlavha</th>
            <th>Sarlavha</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Ma'lumot</td>
            <td>Ma'lumot</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Yakuniy ma'lumot</td>
            <td>Yakuniy ma'lumot</td>
        </tr>
    </tfoot>
</table>
```
