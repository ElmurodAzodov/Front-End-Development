# 🌳 **Git Version Control**

---

## 📌 1. Git nima va nima uchun kerak?

**Git** — bu **Version Control System (VCS)**, ya'ni versiyalarni boshqarish tizimi. U fayllardagi o'zgarishlarni vaqt bo'yicha kuzatib boradi, shunda siz:

- Loyihaning istalgan oldingi holatiga qaytishingiz mumkin
- Bir nechta odam bilan **parallel** ishlashingiz mumkin (konflikt bo'lmasdan)
- Har bir o'zgarish uchun **kim, qachon, nima uchun** o'zgartirganini bilib turishingiz mumkin
- Xavfsiz tarzda yangi funksiyalarni sinab ko'rishingiz mumkin (branch orqali, asosiy kodga tegmasdan)

Git — **Linus Torvalds** tomonidan 2005-yilda Linux yadrosini boshqarish uchun yaratilgan, va u **distributed (taqsimlangan)** tizim: har bir dasturchi kompyuterida **butun loyiha tarixining to'liq nusxasi** saqlanadi (markazlashgan SVN kabi tizimlardan farqli).

### Git ning 3 ta asosiy hudud (Three Trees Architecture)

```
┌─────────────────┐     git add      ┌─────────────────┐    git commit    ┌─────────────────┐
│  Working         │ ───────────────► │  Staging Area    │ ───────────────► │  Repository      │
│  Directory        │                  │  (Index)          │                  │  (.git papkasi)  │
│  (fayllaringiz)   │ ◄─────────────── │  (commit uchun    │ ◄─────────────── │  (commit tarixi) │
│                    │   git checkout   │   tayyorlangan)   │    git reset      │                    │
└─────────────────┘                   └─────────────────┘                   └─────────────────┘
```

1. **Working Directory** — kompyuteringizda ko'rib turgan haqiqiy fayllar
2. **Staging Area (Index)** — keyingi commit ga kiritish uchun "tayyorlangan" fayllar ro'yxati
3. **Repository (.git)** — barcha commit tarixi saqlanadigan joy

---

## ⚙️ 2. O'rnatish va boshlang'ich sozlash (Configuration)

### 2.1. Git ni o'rnatish

```bash
# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install git

# macOS (Homebrew orqali)
brew install git

# Windows uchun: https://git-scm.com/download/win dan yuklab olinadi

# O'rnatilganini tekshirish
git --version
```

### 2.2. Global konfiguratsiya

Git dan foydalanishdan oldin, har bir commit "kim tomonidan" qilinganini bildirish uchun ism va email kiritish **SHART**:

```bash
# Ism va email — bu HAR BIR commit ga yoziladi
git config --global user.name "Elmurod"
git config --global user.email "elmurod@example.com"

# Default branch nomini "main" qilib belgilash (zamonaviy standart)
git config --global init.defaultBranch main

# Default matn muharriri (commit xabarlari uchun)
git config --global core.editor "code --wait"   # VS Code uchun

# Barcha sozlamalarni ko'rish
git config --list

# Faqat bitta sozlamani ko'rish
git config user.name
```

### 2.3. Konfiguratsiya darajalari

| Daraja | Buyruq | Qamrov |
|---|---|---|
| `--system` | Barcha foydalanuvchilar uchun | Butun kompyuter |
| `--global` | Bitta foydalanuvchi uchun | Sizning barcha loyihalaringiz |
| `--local` (default) | Faqat bitta loyiha uchun | Joriy repository |

```bash
# Faqat shu loyiha uchun boshqa email ishlatish (masalan ish emaili)
git config user.email "ish@company.com"   # --local avtomatik
```

---

## 🆕 3. Repository yaratish va boshlang'ich buyruqlar

### 3.1. Yangi repository yaratish

```bash
# Joriy papkani Git repository ga aylantirish
git init

# Bu .git degan yashirin papka yaratadi - 
# barcha Git tarixi va metama'lumotlar shu yerda saqlanadi
```

### 3.2. Mavjud repository ni yuklab olish (clone)

```bash
# Masofaviy (remote) repository ni to'liq nusxasi bilan yuklab olish
git clone https://github.com/foydalanuvchi/loyiha.git

# Boshqa nom bilan yuklab olish
git clone https://github.com/foydalanuvchi/loyiha.git mening-papkam

# Faqat oxirgi commit bilan (tarixsiz) - katta loyihalar uchun tezroq
git clone --depth 1 https://github.com/foydalanuvchi/loyiha.git
```

### 3.3. Repository holatini tekshirish

```bash
git status

# Natija quyidagicha ko'rinishda bo'ladi:
# On branch main
# Changes not staged for commit:
#   modified:   index.html
# Untracked files:
#   yangi-fayl.js
```

`git status` — Git bilan ishlashda **eng ko'p ishlatiladigan buyruq**. U doim qaysi fayllar o'zgartirilgani, qaysilari staging da, qaysilari umuman kuzatilmayotganini ko'rsatadi.

---

## 📥 4. Staging va Commit qilish

### 4.1. Fayllarni Staging Area ga qo'shish

```bash
# Bitta faylni qo'shish
git add index.html

# Bir nechta faylni qo'shish
git add index.html style.css script.js

# Barcha o'zgargan fayllarni qo'shish
git add .

# Faqat ma'lum kengaytmadagi fayllarni qo'shish
git add *.js

# Interaktiv rejimda - har bir o'zgarishni ko'rib chiqib tanlash
git add -p
```

### 4.2. Commit qilish

Commit — bu Git tarixidagi **"suratga olish" (snapshot)** — ma'lum vaqtdagi loyiha holatining doimiy yozuvi.

```bash
# Oddiy commit
git commit -m "Login sahifasi qo'shildi"

# Ko'p qatorli commit xabari (batafsil tavsif bilan)
git commit -m "Login sahifasi qo'shildi" -m "Email va parol validatsiyasi ham kiritildi"

# git add va git commit ni birlashtirish (FAQAT allaqachon kuzatilayotgan fayllar uchun)
git commit -am "Kichik tuzatishlar"

# Oxirgi commit ni tahrirlash (masalan xato xabar yozilgan bo'lsa)
git commit --amend -m "To'g'ri commit xabari"
```

### 4.3. Yaxshi commit xabar yozish qoidalari

```bash
# ❌ YOMON misollar:
git commit -m "fix"
git commit -m "asdasd"
git commit -m "yangilash"

# ✅ YAXSHI misollar:
git commit -m "Login formasi uchun email validatsiyasini qo'shish"
git commit -m "Foydalanuvchi profilida yuklab olish tugmasidagi xatolikni tuzatish"

# Konvensiya: fe'l + nima qilingani + (ixtiyoriy) nima uchun
```

**Umumiy qabul qilingan prefikslar (Conventional Commits):**

```bash
git commit -m "feat: yangi ro'yxatdan o'tish sahifasini qo'shish"
git commit -m "fix: login xatoligini tuzatish"
git commit -m "docs: README faylini yangilash"
git commit -m "style: CSS formatlashni tozalash"
git commit -m "refactor: autentifikatsiya logikasini qayta tuzish"
git commit -m "test: login uchun unit testlar qo'shish"
git commit -m "chore: paketlarni yangilash"
```

---

## 📜 5. Tarixni ko'rish (Git Log va Diff)

### 5.1. `git log` — commit tarixini ko'rish

```bash
# To'liq tarix
git log

# Qisqartirilgan, chiroyli formatda
git log --oneline

# Grafik ko'rinishda (branch va merge larni vizual ko'rsatadi)
git log --oneline --graph --all

# Oxirgi 5 ta commit
git log -5

# Ma'lum bir muallifning commitlari
git log --author="Elmurod"

# Ma'lum sana oralig'idagi commitlar
git log --since="2026-07-01" --until="2026-08-01"

# Har bir commit da qaysi fayllar o'zgarganini ko'rsatish
git log --stat

# Commit larda so'z qidirish
git log --grep="login"

# Fayl tarixi - qaysi commitlar bu faylni o'zgartirgan
git log -- index.html
```

### 5.2. `git diff` — o'zgarishlarni solishtirish

```bash
# Working directory va staging area orasidagi farq (hali add qilinmagan)
git diff

# Staging area va oxirgi commit orasidagi farq (add qilingan, lekin commit qilinmagan)
git diff --staged
# yoki
git diff --cached

# Ikki commit orasidagi farq
git diff commit1-hash commit2-hash

# Ikki branch orasidagi farq
git diff main feature-branch

# Faqat bitta fayl bo'yicha farq
git diff index.html
```

### 5.3. `git show` — bitta commit tafsilotlari

```bash
# Ma'lum commit ning to'liq ma'lumoti va o'zgarishlari
git show a1b2c3d

# Oxirgi commit
git show HEAD

# Commit dan 2 ta oldingi
git show HEAD~2
```

---

## 🌿 6. Branching (Shoxlanish)

Branch — bu asosiy kod chizig'idan **mustaqil rivojlanish yo'nalishi**. Yangi funksiya ustida ishlashda, asosiy (`main`) kodni buzmasdan alohida branch da ishlash — Git ning eng kuchli xususiyati.

### 6.1. Branch yaratish va almashish

```bash
# Barcha branch larni ko'rish
git branch

# Yangi branch yaratish (lekin unga o'tmaydi)
git branch feature-login

# Boshqa branch ga o'tish
git checkout feature-login

# Yaratish va darhol o'sha branch ga o'tish (2 tadan 1)
git checkout -b feature-login

# Zamonaviy usul (Git 2.23+)
git switch feature-login
git switch -c feature-login   # yaratish + o'tish

# Barcha branch larni (local + remote) ko'rish
git branch -a

# Remote branch larni ko'rish
git branch -r
```

### 6.2. Branch larni boshqarish

```bash
# Branch nomini o'zgartirish
git branch -m eski-nom yangi-nom

# Branch ni o'chirish (agar merge qilingan bo'lsa xavfsiz)
git branch -d feature-login

# Majburiy o'chirish (merge qilinmagan bo'lsa ham)
git branch -D feature-login

# Qaysi branch lar main ga merge qilingan/qilinmagan ekanini ko'rish
git branch --merged
git branch --no-merged
```

### 6.3. Branching strategiyasi — misol

```bash
# Odatiy ish jarayoni:
git checkout main
git pull origin main              # eng so'nggi o'zgarishlarni olish
git checkout -b feature/user-auth # yangi branch yaratish

# ... kod yozish, commit qilish ...

git add .
git commit -m "feat: autentifikatsiya qo'shildi"
git push origin feature/user-auth # remote ga yuborish

# GitHub/GitLab da Pull Request (Merge Request) ochiladi
# Ko'rib chiqilgach, main ga merge qilinadi
```

---

## 🔀 7. Merge va Rebase

Bu ikkisi — bir branch dagi o'zgarishlarni **boshqa branch ga qo'shishning** ikki xil usuli.

### 7.1. `git merge`

```bash
# main branch ga feature-login dagi o'zgarishlarni qo'shish
git checkout main
git merge feature-login

# Merge natijasida yangi "merge commit" yaratiladi (agar fast-forward bo'lmasa)
```

**Merge turlari:**

```bash
# 1) Fast-forward merge - agar main da hech qanday yangi commit bo'lmasa,
#    Git shunchaki pointer ni oldinga suradi (yangi commit yaratilmaydi)

# 2) Three-way merge - ikkala branch da ham yangi commitlar bo'lsa,
#    Git ikkalasini birlashtirib, yangi "merge commit" yaratadi

# Har doim merge commit yaratishni majburlash (fast-forward bo'lsa ham)
git merge --no-ff feature-login
```

### 7.2. `git rebase`

Rebase — branch tarixini "qayta yozib", uni **chiziqli (linear)** qilib ko'rsatish usuli. Merge commit yaratmaydi.

```bash
git checkout feature-login
git rebase main

# Bu feature-login branch dagi barcha commitlarni,
# xuddi ular main ning eng oxirgi commitidan boshlab yozilgandek "qayta o'ynatadi"
```

**Merge va Rebase farqi:**

```
MERGE (tarix saqlanadi, lekin "shoxlangan" ko'rinadi):

main:     A---B---C-------F (merge commit)
                   \     /
feature:            D---E


REBASE (tarix chiziqli, lekin asl commit vaqtlari o'zgaradi):

main:     A---B---C
                    \
feature:             D'---E'  (D va E qayta yozilgan)
```

**Qachon nimani ishlatish kerak:**

| Vaziyat | Tavsiya |
|---|---|
| Ochiq (public), boshqalar bilan bo'lishilgan branch | `merge` — chunki rebase tarixni o'zgartirib, boshqalarga muammo tug'diradi |
| Shaxsiy, hali push qilinmagan branch | `rebase` — toza, chiziqli tarix uchun |
| Feature branch ni main bilan yangilash (PR dan oldin) | `rebase` ko'pincha tavsiya qilinadi |

```bash
# ❗ MUHIM QOIDA: 
# Hech qachon allaqachon boshqalar bilan bo'lishilgan (push qilingan) 
# branch ni rebase QILMANG - bu boshqalarning tarixini buzadi!
```

### 7.3. Interaktiv rebase (Interactive rebase)

Commit tarixini "tozalash" uchun ishlatiladi — masalan bir nechta kichik commitlarni birlashtirish:

```bash
# Oxirgi 3 ta commitni tahrirlash
git rebase -i HEAD~3

# Ochilgan muharrirda quyidagi buyruqlar mavjud:
# pick   - commitni saqlab qolish
# reword - commit xabarini o'zgartirish
# edit   - commitni to'xtatib, o'zgartirish kiritish
# squash - oldingi commit bilan birlashtirish (xabarlarni ham birlashtiradi)
# fixup  - squash kabi, lekin xabarni tashlab yuboradi
# drop   - commitni butunlay olib tashlash
```

---

## ☁️ 8. Remote Repository bilan ishlash

### 8.1. Remote qo'shish va boshqarish

```bash
# Remote repository qo'shish
git remote add origin https://github.com/foydalanuvchi/loyiha.git

# Barcha remote larni ko'rish
git remote -v

# Remote URL ni o'zgartirish
git remote set-url origin https://github.com/yangi-manzil/loyiha.git

# Remote ni o'chirish
git remote remove origin
```

### 8.2. Push — o'zgarishlarni yuborish

```bash
# Joriy branch ni remote ga yuborish
git push origin main

# Birinchi marta push qilishda "upstream" ni belgilash
# (shundan keyin faqat "git push" yozish kifoya)
git push -u origin main

# Barcha branch larni push qilish
git push --all origin

# Force push - EHTIYOT BO'LING, remote tarixni qayta yozadi
git push --force origin main

# Xavfsizroq force push - agar boshqa birov yangi commit qilgan bo'lsa, to'xtaydi
git push --force-with-lease origin main
```

### 8.3. Fetch va Pull

```bash
# FETCH - remote dagi o'zgarishlarni yuklab oladi, LEKIN working directory ni o'zgartirmaydi
git fetch origin

# Fetch qilingandan keyin farqlarni ko'rish mumkin
git log main..origin/main

# PULL - fetch + merge (yoki fetch + rebase) ni birlashtiradi
git pull origin main

# Pull ni rebase bilan qilish (chiziqli tarix uchun)
git pull --rebase origin main

# Default pull strategiyasini rebase qilib belgilash
git config --global pull.rebase true
```

**Fetch va Pull farqi:**

```
git fetch = faqat ma'lumotni yuklab oladi (xavfsiz, hech narsani o'zgartirmaydi)
git pull  = fetch + avtomatik merge/rebase (working directory o'zgaradi)
```

---

## 🔧 9. O'zgarishlarni bekor qilish (Undo Operations)

Bu bo'lim Git dagi **eng muhim va ehtiyotkorlik talab qiladigan** buyruqlarni o'z ichiga oladi.

### 9.1. `git reset` — commit larni bekor qilish

```bash
# SOFT reset - commitni bekor qiladi, lekin o'zgarishlar staging da qoladi
git reset --soft HEAD~1

# MIXED reset (default) - commitni bekor qiladi, o'zgarishlar working directory da qoladi
git reset HEAD~1
git reset --mixed HEAD~1

# HARD reset - commitni VA barcha o'zgarishlarni BUTUNLAY o'chiradi
git reset --hard HEAD~1   # ⚠️ EHTIYOT BO'LING - qaytarib bo'lmaydi!

# Ma'lum bir commit ga qaytish
git reset --hard a1b2c3d
```

**Uchta reset turi vizual jihatdan:**

```
              WORKING DIR    STAGING AREA    REPOSITORY (commit)
--soft            saqlanadi     saqlanadi         o'zgartiriladi
--mixed(default)  saqlanadi     TOZALANADI        o'zgartiriladi
--hard            TOZALANADI    TOZALANADI        o'zgartiriladi
```

### 9.2. `git revert` — xavfsiz bekor qilish

`reset` dan farqli o'laroq, `revert` **tarixni o'chirmaydi** — u eski commitni bekor qiluvchi **YANGI commit** yaratadi. Shu sababli u ommaviy (public) branch larda **xavfsiz**.

```bash
# Ma'lum commitni bekor qiluvchi yangi commit yaratish
git revert a1b2c3d

# Bir nechta commitni revert qilish
git revert HEAD~3..HEAD

# Avtomatik commit yaratmasdan, faqat o'zgarishlarni qo'llash
git revert --no-commit a1b2c3d
```

### 9.3. `git checkout` / `git restore` — fayl darajasida bekor qilish

```bash
# Faylni oxirgi commit holatiga qaytarish (o'zgarishlarni bekor qilish)
git checkout -- index.html

# Zamonaviy usul (Git 2.23+)
git restore index.html

# Faylni staging dan olib tashlash (lekin working directory dagi o'zgarish qoladi)
git restore --staged index.html
# eski usul:
git reset HEAD index.html
```

### 9.4. Amaliy misol: qaysi buyruqni qachon ishlatish

```bash
# Vaziyat 1: Oxirgi commit xabarida xato bor, lekin push qilinmagan
git commit --amend -m "To'g'ri xabar"

# Vaziyat 2: Fayl o'zgartirdim, lekin hali add qilmadim, bekor qilmoqchiman
git restore fayl.js

# Vaziyat 3: git add qildim, lekin hali commit qilmadim, staging dan chiqarmoqchiman
git restore --staged fayl.js

# Vaziyat 4: Commit qildim, lekin hali push qilmadim, butunlay bekor qilmoqchiman
git reset --hard HEAD~1

# Vaziyat 5: Commit qildim VA push ham qildim - boshqalar ko'rgan
#            (public branch) - XAVFSIZ usul:
git revert a1b2c3d
```

---

## 📦 10. Stash — vaqtinchalik saqlash

Stash — hozirgi tugallanmagan ishni **vaqtincha "yashirib qo'yish"** va keyinroq qaytib kelish uchun ishlatiladi. Masalan, boshqa branch ga tezda o'tish kerak bo'lganda, lekin hozirgi o'zgarishlarni commit qilishga tayyor bo'lmasangiz.

```bash
# Joriy o'zgarishlarni stash ga saqlash
git stash

# Xabar bilan saqlash (keyinroq nima ekanini eslash uchun)
git stash save "login formasi ustida ishlayapman"

# Barcha stash larni ko'rish
git stash list

# Oxirgi stash ni qaytarish va stash dan o'chirish
git stash pop

# Oxirgi stash ni qaytarish, lekin stash da qoldirish
git stash apply

# Ma'lum bir stash ni qaytarish
git stash apply stash@{2}

# Stash ni o'chirish
git stash drop stash@{0}

# Barcha stash larni tozalash
git stash clear

# Untracked (yangi, hali kuzatilmayotgan) fayllarni ham stash qilish
git stash -u
```

---

## 🏷️ 11. Tags — versiyalarni belgilash

Tag — bu ma'lum bir commit ga doimiy "yorliq" qo'yish, odatda **release versiyalari** uchun ishlatiladi (masalan `v1.0.0`).

```bash
# Oddiy (lightweight) tag yaratish
git tag v1.0.0

# Annotated tag (tavsif, muallif, sana bilan) - RELEASE lar uchun tavsiya etiladi
git tag -a v1.0.0 -m "Birinchi rasmiy versiya"

# Ma'lum commit ga tag qo'yish
git tag -a v0.9.0 a1b2c3d -m "Beta versiya"

# Barcha taglarni ko'rish
git tag

# Tag haqida to'liq ma'lumot
git show v1.0.0

# Tagni remote ga yuborish
git push origin v1.0.0

# Barcha taglarni yuborish
git push origin --tags

# Tagni o'chirish
git tag -d v1.0.0
git push origin --delete v1.0.0
```

---

## 🍒 12. Cherry-pick — tanlab commit olish

`cherry-pick` — boshqa branch dagi **faqat bitta muayyan commitni** joriy branch ga qo'shish imkonini beradi (butun branch ni merge qilmasdan).

```bash
# Ma'lum commitni joriy branch ga qo'shish
git cherry-pick a1b2c3d

# Bir nechta commitni ketma-ket qo'shish
git cherry-pick a1b2c3d e4f5g6h

# Commit qilmasdan, faqat o'zgarishlarni qo'llash
git cherry-pick --no-commit a1b2c3d
```

**Amaliy misol:** Agar `feature` branch da bitta muhim bug-fix bor, lekin qolgan funksiya hali tayyor bo'lmasa, faqat o'sha bitta commitni `main` ga cherry-pick qilish mumkin.

---

## ⚔️ 13. Merge Conflict (Konfliktlarni hal qilish)

Konflikt — ikki branch **bir xil qatorni turlicha o'zgartirganda** yuzaga keladi, va Git avtomatik hal qila olmaydi.

### 13.1. Konflikt qanday ko'rinadi

```bash
git merge feature-branch
# Auto-merging index.html
# CONFLICT (content): Merge conflict in index.html
# Automatic merge failed; fix conflicts and then commit the result.
```

Fayl ichida quyidagicha belgilar paydo bo'ladi:

```html
<<<<<<< HEAD
<h1>Salom Dunyo</h1>
=======
<h1>Xush kelibsiz</h1>
>>>>>>> feature-branch
```

### 13.2. Konfliktni hal qilish qadamlari

```bash
# 1-QADAM: Konflikt bo'lgan fayllarni topish
git status

# 2-QADAM: Faylni qo'lda tahrirlash - kerakli variantni tanlab,
#          <<<<<<<, =======, >>>>>>> belgilarini o'chirish
```

```html
<!-- Tahrirlangandan keyin, masalan: -->
<h1>Salom Dunyo, Xush kelibsiz</h1>
```

```bash
# 3-QADAM: Hal qilingan faylni staging ga qo'shish
git add index.html

# 4-QADAM: Merge ni yakunlash uchun commit qilish
git commit -m "Merge conflict hal qilindi: index.html"

# Agar merge dan voz kechmoqchi bo'lsangiz:
git merge --abort

# Rebase paytida konflikt bo'lsa:
git rebase --continue   # hal qilingandan keyin davom ettirish
git rebase --abort      # rebase dan butunlay voz kechish
git rebase --skip       # muammoli commitni o'tkazib yuborish
```

### 13.3. Konfliktlarni kamaytirish uchun tavsiyalar

```bash
# Ishni boshlashdan oldin doim yangilab oling
git checkout main
git pull origin main
git checkout feature-branch
git rebase main   # yoki merge main

# Kichik, tez-tez commit qiling - katta o'zgarishlar konflikt ehtimolini oshiradi
# Branch larni uzoq vaqt "yashab qolishiga" yo'l qo'ymang
```

---

## 🙈 14. `.gitignore` — kerak bo'lmagan fayllarni chetlab o'tish

`.gitignore` — Git kuzatishi **shart bo'lmagan** fayl va papkalar ro'yxatini belgilaydi (masalan `node_modules`, log fayllar, maxfiy kalitlar).

```bash
# .gitignore fayli - loyihaning ildiz papkasida yaratiladi
```

```gitignore
# Node.js
node_modules/
npm-debug.log

# Python
__pycache__/
*.pyc
venv/
.env

# IDE va tahrirlagichlar
.vscode/
.idea/

# Operatsion tizim fayllari
.DS_Store
Thumbs.db

# Loglar va vaqtinchalik fayllar
*.log
*.tmp

# Maxfiy ma'lumotlar - JUDA MUHIM
.env
config/secrets.json

# Build natijalari
dist/
build/
*.min.js
```

```bash
# Agar fayl allaqachon Git tomonidan kuzatilayotgan bo'lsa,
# .gitignore ga qo'shish YETARLI EMAS - avval uni "untrack" qilish kerak:
git rm --cached fayl.log
git commit -m "fayl.log ni kuzatuvdan chiqarish"
```

---

## 🔍 15. Qidiruv va tekshirish buyruqlari

### 15.1. `git blame` — kim, qachon o'zgartirganini bilish

```bash
# Har bir qatorni kim va qachon yozganini ko'rsatadi
git blame index.html

# Faqat ma'lum qatorlar oralig'i uchun
git blame -L 10,20 index.html
```

### 15.2. `git bisect` — xatolik qaysi commitda paydo bo'lganini topish

```bash
# Binary search orqali "buzilgan" commitni topish
git bisect start
git bisect bad                    # hozirgi holat buzilgan
git bisect good a1b2c3d           # bu commit da hali yaxshi edi

# Git avtomatik oraliqdagi commitlarga o'tkazadi, 
# har birida "good" yoki "bad" deb belgilaysiz, toki muammoli commit topilguncha

git bisect reset   # jarayonni tugatish
```

### 15.3. `git grep` — kod ichida qidirish

```bash
# Butun repository bo'ylab so'z qidirish
git grep "TODO"

# Qator raqami bilan
git grep -n "console.log"
```

---

## 🗂️ 16. Ish jarayoni strategiyalari (Git Workflows)

### 16.1. Git Flow

Katta, rejalashtirilgan release siklga ega loyihalar uchun mashhur strategiya:

```
main       - faqat production-ready kod (release qilingan)
develop    - keyingi release uchun integratsiya branch
feature/*  - yangi funksiyalar uchun (develop dan boshlanadi)
release/*  - release tayyorlash uchun
hotfix/*   - production dagi shoshilinch xatoliklarni tuzatish uchun
```

```bash
# Feature branch yaratish
git checkout develop
git checkout -b feature/yangi-funksiya

# Tugagach develop ga qaytarish
git checkout develop
git merge --no-ff feature/yangi-funksiya

# Hotfix - to'g'ridan-to'g'ri main dan
git checkout main
git checkout -b hotfix/muhim-xato
# ... tuzatish ...
git checkout main
git merge --no-ff hotfix/muhim-xato
git checkout develop
git merge --no-ff hotfix/muhim-xato
```

### 16.2. GitHub Flow (soddaroq, zamonaviy)

Kichikroq jamoalar va uzluksiz deploy qiluvchi loyihalar uchun:

```
main       - doim deploy qilishga tayyor holatda
feature/*  - main dan to'g'ridan-to'g'ri branch olinadi, 
             Pull Request orqali qaytadan main ga qo'shiladi
```

```bash
git checkout main
git pull origin main
git checkout -b feature/login-sahifasi

# ... ishlash, commit qilish ...

git push origin feature/login-sahifasi
# GitHub da Pull Request ochiladi -> ko'rib chiqiladi -> main ga merge qilinadi
```

### 16.3. Trunk-Based Development

```
Barcha dasturchilar to'g'ridan-to'g'ri (yoki juda qisqa umrli branch lar orqali)
"main" (trunk) ga tez-tez, kichik o'zgarishlar qiladi. 
Feature flag lar orqali tayyor bo'lmagan funksiyalar yashiriladi.
```

---

## 👥 17. Hamkorlikda ishlash (GitHub/GitLab bilan)

### 17.1. Pull Request (Merge Request) jarayoni

```bash
# 1. Fork qilish (agar loyihaga yozish huquqingiz bo'lmasa) yoki branch yaratish
git checkout -b feature/yangi-qoshimcha

# 2. O'zgarishlar kiritish va commit qilish
git add .
git commit -m "feat: yangi qo'shimcha funksiya"

# 3. Remote ga yuborish
git push origin feature/yangi-qoshimcha

# 4. GitHub/GitLab saytida "New Pull Request" tugmasi bosiladi
# 5. Kod ko'rib chiqiladi (Code Review), izohlar yoziladi
# 6. Kerakli o'zgarishlar kiritilib, qayta push qilinadi
# 7. Tasdiqlangach, "Merge" qilinadi
```

### 17.2. Fork va Upstream

```bash
# Boshqa odamning repository sini fork qilgandan keyin, 
# asl repository ni "upstream" sifatida qo'shish
git remote add upstream https://github.com/asl-egasi/loyiha.git

# Upstream dagi yangilanishlarni olish
git fetch upstream
git checkout main
git merge upstream/main
```

### 17.3. Code Review paytida foydali buyruqlar

```bash
# PR dagi barcha commitlarni bitta qilib birlashtirish (squash)
git rebase -i main

# So'nggi commitga qo'shimcha kiritish (review izohidan keyin)
git add .
git commit --amend --no-edit
git push --force-with-lease origin feature/yangi-qoshimcha
```

---

## 🧠 18. HEAD, ORIG_HEAD va boshqa maxsus referencelar

```bash
# HEAD - joriy branch dagi eng oxirgi commit ga ishora qiladi
git log HEAD

# HEAD~1 - HEAD dan 1 ta oldingi commit
# HEAD~3 - HEAD dan 3 ta oldingi commit
git show HEAD~2

# HEAD^ - ota commit (merge commit larda HEAD^2 ikkinchi ota commitni bildiradi)

# Detached HEAD holati - branch emas, aniq bir commit ga "bog'langan" holat
git checkout a1b2c3d  # bu detached HEAD yaratadi

# Detached HEAD dan yangi branch yaratib, o'zgarishlarni saqlab qolish
git checkout -b yangi-branch-nomi
```

---

## 📋 19. Barcha muhim buyruqlarning qisqa jadvali

| Buyruq | Vazifasi |
|---|---|
| `git init` | Yangi repository yaratish |
| `git clone <url>` | Mavjud repository ni yuklab olish |
| `git status` | Joriy holatni ko'rish |
| `git add <fayl>` | Faylni staging ga qo'shish |
| `git commit -m "xabar"` | O'zgarishlarni saqlash |
| `git log` | Tarixni ko'rish |
| `git diff` | Farqlarni ko'rish |
| `git branch` | Branch larni boshqarish |
| `git checkout` / `git switch` | Branch almashtirish |
| `git merge` | Branch larni birlashtirish |
| `git rebase` | Tarixni qayta yozish/tekislash |
| `git push` | Remote ga yuborish |
| `git pull` | Remote dan olish + birlashtirish |
| `git fetch` | Remote dan faqat yuklab olish |
| `git reset` | Commit larni bekor qilish |
| `git revert` | Xavfsiz commit bekor qilish |
| `git stash` | Vaqtincha saqlash |
| `git tag` | Versiya belgilash |
| `git cherry-pick` | Bitta commitni tanlab olish |
| `git blame` | Qator muallifini bilish |
| `git bisect` | Xato commitni topish |

---

## 💡 20. Best Practices (Tavsiyalar)

```bash
# ✅ 1. Kichik, mantiqiy commitlar qiling - bitta commit bitta ishga tegishli bo'lsin

# ✅ 2. Commit xabarlarini aniq va tushunarli yozing (Conventional Commits standarti)

# ✅ 3. main/master branch ga to'g'ridan-to'g'ri push qilmang - 
#       Pull Request orqali kod review dan o'tkazing

# ✅ 4. Ishni boshlashdan oldin har doim "git pull" qiling

# ✅ 5. .gitignore faylini loyiha boshidanoq to'g'ri sozlang - 
#       node_modules, .env kabi fayllarni HECH QACHON commit qilmang

# ✅ 6. Maxfiy ma'lumotlarni (API kalitlar, parollar) commit qilib yubormang -
#       agar tasodifan qilib yuborsangiz, kalitni DARHOL bekor qiling (revert kifoya emas,
#       chunki u Git tarixida saqlanib qoladi)

# ✅ 7. force push dan ehtiyot bo'ling - faqat shaxsiy branch larda ishlating,
#       va --force-with-lease dan foydalaning (oddiy --force emas)

# ✅ 8. Branch nomlarini mazmunli qiling:
#       feature/login-sahifasi, bugfix/email-validatsiya, hotfix/security-patch

# ✅ 9. Katta feature larni kichik, alohida commit/PR larga bo'lib yuboring -
#       kod review qilish osonlashadi
```

---

## 🆘 21. Tez-tez uchraydigan muammolar va yechimlar

```bash
# MUAMMO: Xato branch da commit qilib qo'ydim
git branch yangi-branch          # joriy holatni yangi branchga "belgilab" qo'yish
git reset --hard HEAD~1          # xato branch dan commitni olib tashlash
git checkout yangi-branch        # to'g'ri branch ga o'tish

# MUAMMO: .env faylini tasodifan commit qilib yubordim
git rm --cached .env
echo ".env" >> .gitignore
git commit -m "chore: .env faylini kuzatuvdan chiqarish"
# ESLATMA: Agar bu allaqachon push qilingan bo'lsa, 
# maxfiy kalitlarni DARHOL almashtirish kerak!

# MUAMMO: "detached HEAD" holatida qoldim va o'zgarish kiritdim
git checkout -b saqlash-uchun-branch   # o'zgarishlarni yo'qotmaslik uchun

# MUAMMO: Merge paytida chalkashib ketdim, boshidan boshlamoqchiman
git merge --abort

# MUAMMO: Bir nechta kichik "wip" commitlarni tozalamoqchiman
git rebase -i HEAD~5   # so'ngra "squash" bilan birlashtirish

# MUAMMO: Katta faylni tasodifan commit qildim, repository og'irlashib ketdi
git filter-branch --tree-filter 'rm -f katta-fayl.zip' HEAD
# yoki zamonaviy usul:
# git filter-repo --path katta-fayl.zip --invert-paths
```

---

Ushbu reference — Git version control tizimining barcha asosiy va ilg'or jihatlarini qamrab oladi: repository yaratishdan tortib, staging/commit, branching, merge/rebase, remote bilan ishlash, o'zgarishlarni bekor qilish, stash, tag, cherry-pick, konfliktlarni hal qilish, `.gitignore`, ish jarayoni strategiyalari (Git Flow, GitHub Flow) va GitHub orqali hamkorlikda ishlashgacha.