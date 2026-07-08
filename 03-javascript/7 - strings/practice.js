// ===================================================
// STRING METODLARI BO'YICHA IMTIHON TOPSHIRIQLARI
// ===================================================
// Jami: 100 ta topshiriq
// 10 ta oson | 30 ta o'rtacha | 40 ta qiyinroq | 20 ta qiyin
// ===================================================

// ===================================================
// 1. OSON TOPSHIRIQLAR (10 ta)
// ===================================================

// 1.1. Berilgan matnni barcha harflarini katta harflarga o'zgartiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOM DUNYO"

// 1.2. Berilgan matnning uzunligini toping.
// Input: "JavaScript"
// Kutilyotgan natija: 10

// 1.3. Berilgan matnning 5-indeksidagi belgini qaytaring.
// Input: "Dasturlash"
// Kutilyotgan natija: "r"

// 1.4. Berilgan matn "Hello" so'zi bilan boshlanishini tekshiring.
// Input: "Hello world"
// Kutilyotgan natija: true

// 1.5. Berilgan matnni barcha harflarini kichik harflarga o'zgartiring.
// Input: "WEB DASTURLASH"
// Kutilyotgan natija: "web dasturlash"

// 1.6. Berilgan matnning 3-indeksidagi belgini charAt() yordamida oling.
// Input: "Kompyuter"
// Kutilyotgan natija: "p"

// 1.7. Berilgan matndagi bo'shliqlarni olib tashlang (trim).
// Input: "   Salom   "
// Kutilyotgan natija: "Salom"

// 1.8. Berilgan matn "!" bilan tugashini tekshiring.
// Input: "Assalomu alaykum!"
// Kutilyotgan natija: true

// 1.9. Berilgan matn ichida "js" so'zi borligini tekshiring.
// Input: "Men js o'rganyapman"
// Kutilyotgan natija: true

// 1.10. Berilgan matnni 3 marta takrorlang.
// Input: "ha"
// Kutilyotgan natija: "hahaha"

// ===================================================
// 2. O'RTACHA TOPSHIRIQLAR (30 ta)
// ===================================================

// 2.1. Berilgan ism va familiyani birlashtirib, to'liq ism hosil qiling.
// Input: "Ali", "Karimov"
// Kutilyotgan natija: "Ali Karimov"

// 2.2. Berilgan matnning birinchi harfini katta qiling.
// Input: "javascript"
// Kutilyotgan natija: "Javascript"

// 2.3. Berilgan matnni so'zlarga ajrating (bo'shliq bo'yicha).
// Input: "Men dastur yozaman"
// Kutilyotgan natija: ["Men", "dastur", "yozaman"]
let matn = prompt("Gapingizni yozing: ")
console.log(matn.split(" "))

// 2.4. Berilgan matndagi barcha "a" harflarini "o" ga almashtiring.
// Input: "salom"
// Kutilyotgan natija: "solom"

// 2.5. Berilgan matnning oxirgi 4 ta belgisini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "lash"

// 2.6. Berilgan matndan "world" so'zini kesib oling.
// Input: "Hello world"
// Kutilyotgan natija: "world"

// 2.7. Berilgan emaildan @ belgisidan keyingi qismni oling.
// Input: "ali@gmail.com"
// Kutilyotgan natija: "gmail.com"

// 2.8. Berilgan matnni teskari tartibda yozing.
// Input: "JavaScript"
// Kutilyotgan natija: "tpircSavaJ"

// 2.9. Berilgan matnning uzunligi 10 dan katta yoki kichikligini tekshiring.
// Input: "Dasturlash"
// Kutilyotgan natija: false

// 2.10. Berilgan matndagi "olma" so'zini "anor" ga almashtiring.
// Input: "Men olma yedim"
// Kutilyotgan natija: "Men anor yedim"

// 2.11. Berilgan matndagi barcha raqamlarni toping.
// Input: "Narx: 15000 so'm"
// Kutilyotgan natija: ["15000"]

// 2.12. Berilgan matnni array elementlaridan birlashtiring.
// Input: ["Men", "o'qiyman"], " "
// Kutilyotgan natija: "Men o'qiyman"

// 2.13. Berilgan matnning 2-indeksidan 6-indeksigacha bo'lgan qismini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "sturl"

// 2.14. Berilgan matn faqat harflardan iboratligini tekshiring.
// Input: "Salom123"
// Kutilyotgan natija: false

// 2.15. Berilgan matnning boshidagi va oxiridagi bo'shliqlarni olib tashlang.
// Input: "   JavaScript   "
// Kutilyotgan natija: "JavaScript"

// 2.16. Berilgan fayl nomining kengaytmasini oling.
// Input: "document.pdf"
// Kutilyotgan natija: "pdf"

// 2.17. Berilgan matnni "*" belgisi bilan 10 ta belgigacha to'ldiring (chapdan).
// Input: "abc"
// Kutilyotgan natija: "*******abc"

// 2.18. Berilgan matn ichida "JS" so'zi nechanchi indeksda joylashganini toping.
// Input: "Men JS o'rganyapman"
// Kutilyotgan natija: 4

// 2.19. Berilgan matndagi barcha probellarni vergulga almashtiring.
// Input: "bir ikk uch"
// Kutilyotgan natija: "bir,ikk,uch"

// 2.20. Berilgan matnning har bir belgisini alohida array elementiga aylantiring.
// Input: "salom"
// Kutilyotgan natija: ["s","a","l","o","m"]

// 2.21. Berilgan matn "https://" bilan boshlanishini tekshiring.
// Input: "https://google.com"
// Kutilyotgan natija: true

// 2.22. Berilgan matnni kichik harflarga o'tkazib, probellarni "-" ga almashtiring.
// Input: "Mening Blog Postim"
// Kutilyotgan natija: "mening-blog-postim"

// 2.23. Berilgan matnni slice va substring yordamida kesib oling va farqini tushuntiring.
// Input: "JavaScript", index 0 dan 4 gacha
// Kutilyotgan natija: slice: "Java", substring: "Java"

// 2.24. Berilgan matnni " " bo'yicha ajratib, so'zlar sonini toping.
// Input: "Bu bir gap"
// Kutilyotgan natija: 3

// 2.25. Berilgan matndan faqat raqamlarni ajratib oling.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

// 2.26. Berilgan matnni o'ng tomondan 5 ta belgigacha "." bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123.."

// 2.27. Berilgan matnning bosh harfini katta, qolganini kichik qiling.
// Input: "jAVAsCRIPT"
// Kutilyotgan natija: "Javascript"

// 2.28. Berilgan matnni teskari tartibda yozib, keyin yana teskari qiling.
// Input: "abc"
// Kutilyotgan natija: "abc"

// 2.29. Berilgan matnni "a" belgisidan ajrating.
// Input: "salom"
// Kutilyotgan natija: ["s","lom"]

// 2.30. Berilgan matndagi qaysi belgi eng ko'p qatnashganini toping.
// Input: "aabbcc"
// Kutilyotgan natija: "a" yoki "b" yoki "c"

// ===================================================
// 3. QIYINROQ TOPSHIRIQLAR (40 ta)
// ===================================================

// 3.1. Berilgan matndagi har bir so'zning birinchi harfini katta qiling.
// Input: "salom dunyo uzbekiston"
// Kutilyotgan natija: "Salom Dunyo Uzbekiston"

// 3.2. Berilgan matnni palindrome ekanligini tekshiring.
// Input: "kiyik"
// Kutilyotgan natija: true

// 3.3. Berilgan matndagi barcha unlilarni (a, e, i, o, u) olib tashlang.
// Input: "salom"
// Kutilyotgan natija: "slm"

// 3.4. Berilgan matnni " " bo'yicha ajratib, so'zlarni teskari tartibda yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "yozaman dastur men"

// 3.5. Berilgan matn ichidagi barcha raqamlarni topib, ularni yig'indisini hisoblang.
// Input: "a1b2c3d4"
// Kutilyotgan natija: 10

// 3.6. Berilgan matnni camelCase ga o'tkazing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "menDasturYozaman"

// 3.7. Berilgan matndagi takrorlangan so'zlarni toping.
// Input: "bu bu gap gap takror"
// Kutilyotgan natija: ["bu", "gap"]

// 3.8. Berilgan matnning ichidagi barcha HTML teglarini olib tashlang.
// Input: "<h1>Salom</h1><p>Dunyo</p>"
// Kutilyotgan natija: "SalomDunyo"

// 3.9. Berilgan matndagi har bir belgini Unicode kodiga aylantiring.
// Input: "A"
// Kutilyotgan natija: 65

// 3.10. Berilgan matndagi eng uzun so'zni toping.
// Input: "men dasturlashni o'rganyapman"
// Kutilyotgan natija: "o'rganyapman"

// 3.11. Berilgan matndagi barcha raqamlarni alohida array sifatida qaytaring.
// Input: "Men 25 yoshdaman, 2026 yil"
// Kutilyotgan natija: ["25", "2026"]

// 3.12. Berilgan matnni snake_case ga o'tkazing.
// Input: "myVariableName"
// Kutilyotgan natija: "my_variable_name"

// 3.13. Berilgan matnning har bir so'zining uzunligini toping.
// Input: "men dastur yozaman"
// Kutilyotgan natija: [3, 6, 7]

// 3.14. Berilgan matndagi probellarni olib tashlang va uzunligini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 10

// 3.15. Berilgan matnni "|" belgisi bilan ajratib, arrayga aylantiring.
// Input: "a|b|c|d"
// Kutilyotgan natija: ["a","b","c","d"]

// 3.16. Berilgan matndagi barcha "e" harflarini indekslarini toping.
// Input: "elephant"
// Kutilyotgan natija: [0, 3]

// 3.17. Berilgan matnni 5 ta belgidan iborat qilib, o'ngdan "#" bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123##"

// 3.18. Berilgan matnning faqat 2-va 4-indeksidagi belgilarini oling.
// Input: "JavaScript"
// Kutilyotgan natija: "vS"

// 3.19. Berilgan matndagi barcha katta harflarni kichikka, kichiklarini kattaga o'zgartiring.
// Input: "HeLlO"
// Kutilyotgan natija: "hElLo"

// 3.20. Berilgan matndan faqat unli harflarni ajratib oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

// 3.21. Berilgan matnni " " bo'yicha ajratib, so'zlarni uzunligi bo'yicha saralang.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["men", "dastur", "yozaman"] yoki ["men", "yozaman", "dastur"]

// 3.22. Berilgan matnni tekshirib, u faqat kichik harflardan iboratligini aniqlang.
// Input: "salom"
// Kutilyotgan natija: true

// 3.23. Berilgan matn ichidagi barcha "a" harflarini "e" ga, "e" larni "a" ga almashtiring.
// Input: "salem"
// Kutilyotgan natija: "selam"

// 3.24. Berilgan matnni 3 ta qatorga bo'ling (har 3 belgidan).
// Input: "abcdefghi"
// Kutilyotgan natija: ["abc","def","ghi"]

// 3.25. Berilgan matndagi barcha raqamlarni "X" bilan almashtiring.
// Input: "Men 25 yoshdaman"
// Kutilyotgan natija: "Men XX yoshdaman"

// 3.26. Berilgan matnning boshidan va oxiridan ma'lum belgilarni olib tashlang.
// Input: "**salom**", "*"
// Kutilyotgan natija: "salom"

// 3.27. Berilgan matnni har bir belgisini alohida satrga yozing.
// Input: "salom"
// Kutilyotgan natija: "s\na\nl\no\nm"

// 3.28. Berilgan matn ichida "javascript" so'zi necha marta qatnashganini toping.
// Input: "javascript va javascript"
// Kutilyotgan natija: 2

// 3.29. Berilgan matnni kichik harflarga o'tkazing va undagi barcha probellarni olib tashlang.
// Input: "Salom Dunyo"
// Kutilyotgan natija: "salomdunyo"

// 3.30. Berilgan matndagi barcha belgilarni o'chirib, faqat raqamlarni qoldiring.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

// 3.31. Berilgan matnni " " bo'yicha ajratib, so'zlarni alfavit bo'yicha saralang.
// Input: "banana olma uzum"
// Kutilyotgan natija: ["banana","olma","uzum"]

// 3.32. Berilgan matnning har bir so'zidan birinchi va oxirgi harfni oling.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["mn", "dr", "yn"]

// 3.33. Berilgan matndagi barcha probellarni sonini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 1

// 3.34. Berilgan matnni " " bo'yicha ajratib, har bir so'zni katta harf bilan yozing.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOM DUNYO"

// 3.35. Berilgan matn ichidagi barcha harflarni alifbo tartibida joylashtiring.
// Input: "cba"
// Kutilyotgan natija: "abc"

// 3.36. Berilgan matnning faqat toq indekslaridagi belgilarini oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

// 3.37. Berilgan matndagi barcha " " belgilarini "|" ga almashtiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "salom|dunyo"

// 3.38. Berilgan matnni 4 ta belgidan iborat qilib, chapdan "0" bilan to'ldiring.
// Input: "12"
// Kutilyotgan natija: "0012"

// 3.39. Berilgan matnning uzunligini hisoblang (probelsiz).
// Input: "salom dunyo"
// Kutilyotgan natija: 9

// 3.40. Berilgan matn ichidagi barcha "l" harflarini indekslarini toping.
// Input: "hello"
// Kutilyotgan natija: [2, 3]

// ===================================================
// 4. QIYIN TOPSHIRIQLAR (20 ta)
// ===================================================

// 4.1. Berilgan matn ichidagi barcha qavslar ichidagi matnlarni ajratib oling.
// Input: "Bugun (dushanba) kuni (dars) bor"
// Kutilyotgan natija: ["dushanba", "dars"]

// 4.2. Berilgan matnni tekshirib, u valid email manzili ekanligini aniqlang (regex bilan).
// Input: "ali@gmail.com"
// Kutilyotgan natija: true

// 4.3. Berilgan matn ichidagi barcha so'zlarni o'zgartirib, ularni teskari tartibda yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "nem rutsad namazoy"

// 4.4. Berilgan matnni " " bo'yicha ajratib, har bir so'zni kichik harf bilan yozing, lekin birinchi harfini katta qiling.
// Input: "SALOM DUNYO"
// Kutilyotgan natija: "Salom Dunyo"

// 4.5. Berilgan matn ichidagi barcha raqamlarni topib, ularni 2 ga ko'paytiring.
// Input: "a1b2c3"
// Kutilyotgan natija: "a2b4c6"

// 4.6. Berilgan matnni shifrlang: har bir belgini Unicode kodiga 1 qo'shib qaytaring.
// Input: "abc"
// Kutilyotgan natija: "bcd"

// 4.7. Berilgan matn ichidagi barcha " " belgilarini olib tashlang va natijani katta harf bilan yozing.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOMDUNYO"

// 4.8. Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha o'sish tartibida saralang.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["men", "dastur", "yozaman"]

// 4.9. Berilgan matnni tekshirib, u faqat raqam va harflardan iboratligini aniqlang.
// Input: "abc123"
// Kutilyotgan natija: true

// 4.10. Berilgan matn ichidagi barcha "a" va "A" harflarini indekslarini toping.
// Input: "Alabama"
// Kutilyotgan natija: [0, 2, 4, 6]

// 4.11. Berilgan matnni " " bo'yicha ajratib, so'zlarni teskari tartibda yozing va katta harf bilan yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "YOZAMAN DASTUR MEN"

// 4.12. Berilgan matn ichidagi barcha raqamlarni olib tashlang va natijani kichik harf bilan yozing.
// Input: "Men 25 yoshdaman"
// Kutilyotgan natija: "men yoshdaman"

// 4.13. Berilgan matnni tekshirib, u valid parol ekanligini aniqlang (kamida 8 belgi, katta, kichik, raqam).
// Input: "Secret123"
// Kutilyotgan natija: true

// 4.14. Berilgan matn ichidagi barcha so'zlarni alohida satrga yozing va har bir so'zning uzunligini yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "men:3\ndastur:6\nyozaman:7"

// 4.15. Berilgan matnni " " bo'yicha ajratib, so'zlarni alfavit bo'yicha teskari tartibda saralang.
// Input: "banana olma uzum"
// Kutilyotgan natija: ["uzum","olma","banana"]

// 4.16. Berilgan matn ichidagi barcha " " belgilarini " - " ga almashtiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "salom - dunyo"

// 4.17. Berilgan matnni tekshirib, u faqat katta harflardan iboratligini aniqlang.
// Input: "SALOM"
// Kutilyotgan natija: true

// 4.18. Berilgan matn ichidagi barcha belgilarni o'chirib, faqat unli harflarni qoldiring.
// Input: "salom"
// Kutilyotgan natija: "ao"

// 4.19. Berilgan matn ichidagi barcha raqamlarni topib, ularni yig'indisini hisoblang va natijani matn sifatida qaytaring.
// Input: "a1b2c3d4"
// Kutilyotgan natija: "Yig'indi: 10"

// 4.20. Berilgan matnni tekshirib, u valid phone number ekanligini aniqlang (regex bilan).
// Input: "+998901234567"
// Kutilyotgan natija: true
