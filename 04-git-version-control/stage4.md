# 🎯 STAGE 4 — GIT & VERSION CONTROL — To'liq Reference

> **Maqsad:** Hamkorlikdagi (collaborative) dasturlash va kodni boshqarish uchun version control tizimini mukammal egallash.
> **Vaqt:** 24 soat | 12 dars

---

# 4.1 📦 Version Control Basics

## 🔄 Version Control nima?

**Version Control System (VCS)** — fayllardagi o'zgarishlarni vaqt davomida kuzatib boruvchi tizim. U quyidagilarni ta'minlaydi:

- Loyihaning istalgan **oldingi holatiga qaytish** imkoniyati
- Bir nechta dasturchi bilan **parallel, konfliktsiz** ishlash
- Har bir o'zgarish uchun **kim, qachon, nima uchun** o'zgartirganini bilib turish
- Xavfsiz tarzda yangi funksiyalarni **sinab ko'rish** (asosiy kodga tegmasdan)

```bash
# VCS siz ishlash - eski, xavfli usul (BUNDAY QILMANG):
loyiha_final.zip
loyiha_final_v2.zip
loyiha_final_v2_TOGRISI.zip
loyiha_final_v2_TOGRISI_yangi.zip

# Git bilan - har bir o'zgarish tarixda saqlanadi, zip fayllar kerak emas
```

## 📜 Version Control tizimlarining tarixi (CVS, SVN, Git)

| Tizim                                | Yil  | Turi        | Xususiyati                                                                |
| ------------------------------------ | ---- | ----------- | ------------------------------------------------------------------------- |
| **CVS** (Concurrent Versions System) | 1986 | Centralized | Birinchi keng tarqalgan VCS, bugun deyarli ishlatilmaydi                  |
| **SVN** (Subversion)                 | 2000 | Centralized | CVS dan yaxshiroq, lekin markazlashgan server talab qiladi                |
| **Git**                              | 2005 | Distributed | Linus Torvalds tomonidan Linux yadrosi uchun yaratilgan, bugungi standart |
| **Mercurial**                        | 2005 | Distributed | Git ga o'xshash, lekin kamroq mashhur                                     |

## 🎯 Nima uchun aynan Git? (Distributed, Fast, Branching Model)

```bash
# 1. DISTRIBUTED - har bir dasturchi kompyuterida BUTUN tarix nusxasi bor
#    Internet bo'lmasa ham commit, log, branch - hammasi ishlaydi

# 2. TEZLIK - Git ko'pchilik operatsiyalarni lokal bajaradi (serverga so'rov yubormaydi)
#    git log, git diff, git commit - millisekundlarda ishlaydi

# 3. BRANCHING MODEL - Git da branch yaratish DEYARLI BEPUL (bir necha bayt)
#    SVN da branch yaratish butun papkani nusxalashni talab qilardi - og'ir va sekin
```

## 🌐 Centralized vs Distributed VCS

```
CENTRALIZED (SVN kabi):

    [Markaziy server] <---- bitta joyda butun tarix
       /    |    \
   Dev1   Dev2   Dev3   <---- faqat joriy fayllar, tarix yo'q

   ❌ Server o'chsa - hech kim tarixga murojaat qila olmaydi
   ❌ Har bir amal server bilan aloqa talab qiladi (sekin)


DISTRIBUTED (Git kabi):

   [Markaziy server/GitHub] <---- bu ham faqat nusxalardan biri
       /    |    \
   Dev1   Dev2   Dev3   <---- HAR BIRIDA to'liq tarix nusxasi bor

   ✅ Server o'chsa ham, istalgan Dev kompyuteridan tarixni tiklash mumkin
   ✅ Aksariyat amallar (commit, log, diff, branch) internetsiz ishlaydi
```

## 🏗️ Git qanday ishlaydi (Snapshots, differences emas)

Bu Git ni tushunishdagi **eng muhim kontseptual farq**. Boshqa VCS lar (SVN kabi) har bir commit da **faqat farqni (delta/diff)** saqlaydi. Git esa har bir commit da loyihaning **to'liq "suratini" (snapshot)** oladi.

```
SVN uslubi (delta-based):
commit1: fayl_A (to'liq)
commit2: fayl_A ga +3 qator qo'shildi (faqat farq)
commit3: fayl_A dan -1 qator olib tashlandi (faqat farq)

Git uslubi (snapshot-based):
commit1: [fayl_A, fayl_B, fayl_C] - hammasining to'liq holati
commit2: [fayl_A(yangi), fayl_B(o'zgarmagan-linkланган), fayl_C(o'zgarmagan-linkланган)]
commit3: [fayl_A(yangi2), fayl_B(o'zgarmagan-linkланган), fayl_C(yangi)]

Eslatma: agar fayl o'zgarmagan bo'lsa, Git uni qayta saqlamaydi -
faqat oldingi versiyaga "ishora" (pointer) qiladi. Shu sababli tez va samarali.
```

## 📁 Git Repository tuzilishi (`.git` papkasi)

```bash
git init
ls -la .git/

# .git/ papkasi ichida:
# ├── HEAD          - joriy branch qayerga ishora qilayotganini ko'rsatadi
# ├── config        - repository ga xos sozlamalar
# ├── objects/      - barcha commit, fayl mazmuni, tree lar shu yerda (siqilgan holda)
# ├── refs/         - branch va tag larning commit hash larga ishoralari
# │   ├── heads/    - local branch lar
# │   └── tags/     - tag lar
# ├── hooks/        - avtomatik ishga tushadigan skriptlar (pre-commit va h.k.)
# └── index         - staging area (indeks) fayli
```

**Muhim:** `.git` papkasini o'chirsangiz — butun Git tarixi yo'qoladi (working directory dagi fayllar qoladi, lekin tarix, branch lar, commit lar butunlay yo'qoladi). Shu sababli uni HECH QACHON qo'lda tahrirlamang yoki tasodifan o'chirmang.

---

# 4.2 🔧 Git O'rnatish va Sozlash

## 📥 O'rnatish

```bash
# WINDOWS
# Git Bash - https://git-scm.com/download/win dan yuklab olinadi
# Yoki Winget orqali:
winget install --id Git.Git -e --source winget

# macOS
# Homebrew orqali:
brew install git
# Yoki Xcode Command Line Tools orqali (birinchi "git" buyrug'ini yozganda avtomatik so'raladi):
xcode-select --install

# LINUX
sudo apt install git        # Debian/Ubuntu
sudo dnf install git        # Fedora
sudo pacman -S git          # Arch Linux

# O'rnatilganini tekshirish
git --version
```

## ⚙️ Boshlang'ich konfiguratsiya

```bash
# Ism va email - HAR BIR commit ga yoziladi, MAJBURIY sozlash
git config --global user.name "Elmurod"
git config --global user.email "elmurod@example.com"

# Matn muharriri - commit xabarlarini yozish uchun ochiladigan dastur
git config --global core.editor "code --wait"    # VS Code

# Default branch nomi (zamonaviy standart - eskilarida "master" edi)
git config --global init.defaultBranch main
```

## 📋 Konfiguratsiyani tekshirish

```bash
# Barcha sozlamalarni ko'rish (qaysi darajadan kelayotgani bilan)
git config --list

# Qaysi faylda qaysi sozlama borligini ko'rsatish
git config --list --show-origin

# Faqat bitta sozlama
git config user.name

# Konfiguratsiya darajalari (ustunlik tartibi past->yuqori):
# --system  ->  --global  ->  --local (loyihaga xos, eng kuchli)
```

## 🎨 Git Aliaslar (qisqartmalar)

Uzun buyruqlarni qisqa nomlar bilan chaqirish uchun:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last "log -1 HEAD"
git config --global alias.lg "log --oneline --graph --all --decorate"

# Endi shunday ishlatish mumkin:
git st        # git status o'rniga
git co main   # git checkout main o'rniga
git lg        # chiroyli grafik log

# ~/.gitconfig faylida alias lar shunday ko'rinishda saqlanadi:
# [alias]
#     co = checkout
#     br = branch
#     ci = commit
#     st = status
```

## 🖥️ Git GUI mijozlari (GUI Clients)

Buyruq qatori bilan bir qatorda, vizual interfeysda ishlash uchun dasturlar mavjud:

| Dastur             | Xususiyati                                                          |
| ------------------ | ------------------------------------------------------------------- |
| **GitKraken**      | Chiroyli, kuchli grafik tarix ko'rsatuvi, bepul (open-source uchun) |
| **Sourcetree**     | Atlassian dan, bepul, Bitbucket bilan yaxshi integratsiya           |
| **GitHub Desktop** | Sodda, GitHub bilan chuqur integratsiya, boshlovchilar uchun qulay  |
| **Git Extensions** | Windows uchun, Visual Studio bilan integratsiya                     |
| **GitUp**          | macOS uchun, real-vaqt vizualizatsiya                               |

Bu vositalar ayniqsa **konfliktlarni hal qilish** va **tarixni vizual ko'rish** uchun foydali, lekin buyruq qatorini bilish har doim asosiy ko'nikma bo'lib qoladi.

---

# 4.3 🆕 Repository Yaratish

## 🆕 Ishga tushirish: `git init`

```bash
cd mening-loyiham
git init

# Bu joriy papkani Git repository ga aylantiradi,
# yashirin .git/ papkasini yaratadi
```

## 📥 Klonlash: `git clone <url>`

```bash
git clone https://github.com/foydalanuvchi/loyiha.git

# Boshqa nom bilan
git clone https://github.com/foydalanuvchi/loyiha.git yangi-nom

# Faqat oxirgi commit (tez, tarixsiz)
git clone --depth 1 https://github.com/foydalanuvchi/loyiha.git

# Faqat ma'lum branch ni klonlash
git clone -b develop --single-branch https://github.com/foydalanuvchi/loyiha.git
```

## 📁 Uchta holat (Three States / Three Trees)

```
┌──────────────────┐    git add     ┌──────────────────┐   git commit   ┌──────────────────┐
│ Working Directory │ ─────────────► │  Staging Area     │ ─────────────► │  Repository (.git)│
│ (haqiqiy fayllar)  │                │  (Index)           │                │  (commit tarixi)   │
└──────────────────┘ ◄───────────── └──────────────────┘ ◄───────────── └──────────────────┘
   git checkout/restore              git reset                        (commit lar doimiy)
```

1. **Working Directory** — diskda ko'rib turgan haqiqiy fayllar, ular bilan siz to'g'ridan-to'g'ri ishlaysiz
2. **Staging Area (Index)** — "keyingi commit ga nima kiritilishini" belgilaydigan oraliq bosqich
3. **Repository (.git)** — commit qilingan, doimiy saqlanadigan tarix

## 🔍 Holatni tekshirish: `git status`

```bash
git status

# Qisqa formatda (short)
git status -s
# yoki
git status --short

# Qisqa format belgilari:
# ?? - yangi, kuzatilmayotgan fayl (untracked)
# A  - staging ga qo'shilgan yangi fayl
# M  - o'zgartirilgan fayl
#  M - o'zgartirilgan, lekin staging ga qo'shilmagan
# D  - o'chirilgan fayl
```

## 📂 `.gitignore`

### Nima uchun fayllarni e'tiborsiz qoldirish kerak

Ba'zi fayllar Git tomonidan **kuzatilishi shart emas**:

- Avtomatik generatsiya qilinadigan fayllar (`node_modules/`, `dist/`)
- Maxfiy ma'lumotlar (`.env`, API kalitlar)
- Vaqtinchalik yoki log fayllar (`*.log`, `*.tmp`)
- IDE sozlamalari (`.vscode/`, `.idea/`)

### Patternlar

```gitignore
# Aniq fayl nomi
config.local.json

# Kengaytma bo'yicha - barcha shunday fayllar
*.log
*.tmp

# Butun papka
node_modules/
dist/
build/

# Faqat ildiz papkadagi fayl (ichki papkalardagilar emas)
/README_DRAFT.md

# Barcha darajadagi shunday nomli papkalar
**/temp/

# Muayyan faylni istisno qilish (boshqa qoida uni yashirgan bo'lsa ham ko'rsatish)
!.gitkeep
```

### Turli loyihalar uchun misollar

```gitignore
# --- Node.js loyihasi uchun ---
node_modules/
npm-debug.log*
.env
dist/
coverage/

# --- Python loyihasi uchun ---
__pycache__/
*.pyc
venv/
.env
*.egg-info/

# --- Umumiy (har qanday loyiha) ---
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
```

### Global `.gitignore` (barcha loyihalar uchun)

```bash
# Har bir loyihada takrorlamaslik uchun, global ignore fayl yaratish
git config --global core.excludesfile ~/.gitignore_global

# ~/.gitignore_global faylida shaxsiy IDE/OS fayllarini yozing:
# .DS_Store
# .vscode/
# *.swp
```

---

# 4.4 📝 Asosiy Git Ish Jarayoni (Basic Workflow)

## ➕ Staging ga qo'shish

```bash
# Bitta fayl
git add index.html

# Bir nechta fayl
git add index.html style.css

# Barcha o'zgargan/yangi fayllar
git add .

# Interaktiv rejim (patch mode) - har bir o'zgarishni alohida ko'rib, tanlab qo'shish
git add -p
# Bu rejimda Git har bir "hunk" (o'zgarish bo'lagi) uchun so'raydi:
# y - qo'shish, n - o'tkazib yuborish, s - kichikroq bo'laklarga bo'lish, q - chiqish
```

## 💾 Commit qilish

```bash
# Qisqa xabar bilan
git commit -m "Login sahifasi qo'shildi"

# Matn muharrirda batafsil yozish (subject + body)
git commit
# Bu editor ochadi, unda quyidagicha yozish tavsiya etiladi:
```

### Yaxshi commit xabar yozish qoidalari

```
feat: login formasiga email validatsiya qo'shildi     <- Subject line (50 belgigacha)
                                                          <- bo'sh qator
Foydalanuvchi noto'g'ri formatdagi email kiritganda,     <- Body - NIMA UCHUN
xatolik xabari ko'rsatiladi. Bu ro'yxatdan o'tish         qilinganini tushuntiradi
jarayonidagi eng ko'p uchraydigan xatoliklardan
birini oldini oladi.
```

**Conventional Commits standarti:**

```bash
git commit -m "feat: yangi ro'yxatdan o'tish sahifasi"
git commit -m "fix: login xatoligini tuzatish"
git commit -m "docs: README faylini yangilash"
git commit -m "chore: paketlarni yangilash"
git commit -m "refactor: autentifikatsiya logikasini qayta tuzish"
git commit -m "test: login uchun unit test qo'shish"
git commit -m "style: kod formatlashni tozalash"
```

### Qo'shimcha commit buyruqlari

```bash
# git add va git commit ni birlashtirish
# (FAQAT allaqachon kuzatilayotgan fayllar uchun ishlaydi, yangi fayllarga emas!)
git commit -a -m "Kichik tuzatishlar"

# Oxirgi commitni tahrirlash (xabarni yoki fayllarni o'zgartirish)
git commit --amend -m "To'g'ri commit xabari"

# Faylni qo'shib, avvalgi commitga "qo'shib qo'yish" (push qilinmagan bo'lsagina xavfsiz)
git add unutilgan_fayl.js
git commit --amend --no-edit
```

## 🔄 Tarixni ko'rish

```bash
# To'liq tarix
git log

# Qisqartirilgan
git log --oneline

# Grafik, chiroyli formatda
git log --graph --oneline --decorate

# Ixtiyoriy formatda (masalan: hash - muallif, vaqt : xabar)
git log --pretty=format:"%h - %an, %ar : %s"

# Format belgilari:
# %h - qisqa hash       %H - to'liq hash
# %an - muallif nomi     %ae - muallif emaili
# %ar - nisbiy vaqt (masalan "2 kun oldin")   %ad - sana
# %s - commit xabari (subject)

# Ma'lum commit haqida to'liq ma'lumot
git show a1b2c3d
```

---

# 4.5 🌿 Branching

## 🌿 Branch nima? (Yengil ko'rsatkichlar - lightweight pointers)

Branch — bu shunchaki **ma'lum bir commitga ishora qiluvchi ko'rsatkich (pointer)**. Bu Git branch larining nega shunchalik "arzon" va tez yaratilishini tushuntiradi — u butun loyihani nusxalamaydi, faqat 41 baytlik hash ni saqlaydi.

```
main:     A---B---C
                    \
feature:             D---E   <- "feature" branch shunchaki E commitga ishora qiladi
```

## 🌿 Branch yaratish

```bash
# Yaratish (lekin unga o'tmaydi)
git branch feature-login

# Eski usul: yaratish + darhol o'tish
git checkout -b feature-login

# Zamonaviy usul (Git 2.23+) - checkout dan aniqroq va xavfsizroq
git switch -c feature-login
```

## 🔄 Branch almashish

```bash
git checkout feature-login    # eski usul
git switch feature-login      # zamonaviy usul
```

## 📋 Branch larni ro'yxatlash

```bash
git branch          # local branch lar
git branch -r       # faqat remote branch lar
git branch -a       # hammasi (local + remote)
```

## 🏷️ Branch nomlash konvensiyalari

```bash
feature/login-sahifasi          # yangi funksiya
bugfix/header-responsive        # xato tuzatish (kichik)
hotfix/security-patch           # shoshilinch, production xatosi
release/v1.2.0                  # release tayyorlash
chore/paketlarni-yangilash      # texnik xizmat (dependency update va h.k.)
```

## 🔍 Farqlarni ko'rish

```bash
# main va feature branch orasidagi farq
git diff main..feature

# main da bor, feature da yo'q commitlar (yoki aksincha)
git log main..feature      # feature da bor, main da yo'q commitlar
git log feature..main      # main da bor, feature da yo'q commitlar
```

---

# 4.6 🔀 Merging

## 🔄 Fast-Forward Merge (chiziqli tarix)

Agar `main` branch feature yaratilganidan beri **hech qanday yangi commit olmagan bo'lsa**, Git shunchaki `main` ko'rsatkichini oldinga suradi — yangi merge commit yaratilmaydi:

```
Merge dan OLDIN:
main:     A---B
               \
feature:        C---D

Fast-forward merge dan KEYIN:
main:     A---B---C---D   (main endi to'g'ridan-to'g'ri D ga ishora qiladi)
```

## 🔀 Three-Way Merge (merge commit yaratiladi)

Agar ikkala branch da ham yangi commitlar bo'lsa, Git ularni birlashtirib, **yangi "merge commit"** yaratadi (ikkita ota-commitga ega bo'lgan maxsus commit):

```
Merge dan OLDIN:
main:     A---B---C
               \
feature:        D---E

Merge dan KEYIN:
main:     A---B---C-------F  (F - merge commit, ikkita ota: C va E)
               \         /
feature:        D-------E
```

## 🔧 Merge jarayoni

```bash
git checkout main
git merge feature-branch

# Agar main branch da xato yuz bersa, merge dan voz kechish:
git merge --abort
```

## ⚠️ Merge Conflict (Konflikt)

Konflikt — ikki branch **bir xil qatorni turlicha o'zgartirganda** yuzaga keladi.

```bash
git merge feature-branch
# Auto-merging index.html
# CONFLICT (content): Merge conflict in index.html
```

Konflikt belgilari fayl ichida:

```html
<<<<<<< HEAD
<h1>Salom Dunyo</h1>
=======
<h1>Xush kelibsiz</h1>
>>>>>>> feature-branch
```

**Hal qilish qadamlari:**

```bash
# 1. Faylni qo'lda tahrirlab, kerakli variantni tanlang,
#    <<<<<<<, =======, >>>>>>> belgilarini o'chiring

# 2. Hal qilingan faylni staging ga qo'shing
git add index.html

# 3. Merge ni yakunlash uchun commit qiling
git commit -m "Merge conflict hal qilindi"

# Vizual vositalar orqali hal qilish (agar sozlangan bo'lsa)
git mergetool
```

## 🎯 Merge strategiyalari

```bash
# --no-ff : fast-forward mumkin bo'lsa ham, MAJBURAN merge commit yaratadi
#           (bu Git Flow strategiyasida feature branch larni ajratib turish uchun foydali)
git merge --no-ff feature-branch

# --ff-only : faqat fast-forward mumkin bo'lsagina merge qiladi, aks holda to'xtaydi
git merge --ff-only feature-branch
```

---

# 4.7 🔄 Rebasing

## 🔄 Rebase nima? (Commitlarni "qayta o'ynatish")

Rebase — branch dagi commitlarni, xuddi ular **boshqa nuqtadan boshlab yozilgandek** qayta joylashtiradi. Natijada tarix **chiziqli (linear)** bo'ladi, merge commit yaratilmaydi.

```
Rebase dan OLDIN:
main:     A---B---C
               \
feature:        D---E

git rebase main (feature branch dan turib):

Rebase dan KEYIN:
main:     A---B---C
                    \
feature:             D'---E'   (D va E "qayta yozilgan" - yangi hash lar bilan)
```

## 📏 Rebase vs Merge

|                  | Merge                                 | Rebase                                  |
| ---------------- | ------------------------------------- | --------------------------------------- |
| Tarix            | Chiziqli emas, "shoxlangan" ko'rinadi | Toza, chiziqli                          |
| Yangi commit     | Merge commit yaratiladi               | Yaratilmaydi                            |
| Asl vaqt tartibi | Saqlanadi (haqiqiy tarix)             | O'zgaradi (commit hash lar yangilanadi) |
| Xavfsizlik       | Har doim xavfsiz                      | Ommaviy branch larda XAVFLI             |

## 🔧 Oddiy rebase

```bash
git checkout feature
git rebase main
```

## ⚙️ Rebase buyruqlari (konflikt yuzaga kelganda)

```bash
# Konfliktni hal qilgandan keyin davom ettirish
git rebase --continue

# Rebase dan butunlay voz kechish (asl holatga qaytish)
git rebase --abort

# Muammoli commitni o'tkazib yuborish
git rebase --skip
```

## 🎯 Interaktiv Rebase

Commit tarixini "tozalash" uchun ishlatiladi:

```bash
git rebase -i HEAD~3
```

Ochilgan muharrirda mavjud buyruqlar:

```bash
pick    a1b2c3d Birinchi commit         # commitni o'zgarishsiz saqlash
reword  e4f5g6h Ikkinchi commit         # faqat xabarni o'zgartirish
edit    i7j8k9l Uchinchi commit         # commitni to'xtatib, tahrirlash
squash  m1n2o3p To'rtinchi commit       # oldingi commit bilan birlashtirish (xabarlar ham qo'shiladi)
fixup   q4r5s6t Beshinchi commit        # squash kabi, lekin xabar tashlab yuboriladi
drop    u7v8w9x Oltinchi commit         # commitni butunlay olib tashlash
```

## 🚫 Oltin qoida (Golden Rule)

```bash
# ❗ HECH QACHON allaqachon push qilingan,
#    boshqalar bilan bo'lishilgan (public/shared) branch ni rebase QILMANG!
#
# Sabab: rebase commit hash larni o'zgartiradi. Agar boshqa dasturchilar
# eski hash lar asosida ishlayotgan bo'lsa, ularning tarixi bilan "to'qnashadi"
# va katta chalkashlik yuzaga keladi.
#
# XAVFSIZ: faqat SHAXSIY, hali push qilinmagan branch larni rebase qiling
```

---

# 4.8 🔄 Remote Repositories

## 🌐 Remote nima?

Remote — Git repository sining **boshqa joyda (server, GitHub, boshqa kompyuter) joylashgan versiyasi**. Bir loyihada bir nechta remote bo'lishi mumkin.

## 🔗 Remote qo'shish

```bash
git remote add origin https://github.com/foydalanuvchi/loyiha.git
```

## 📋 Remote larni ro'yxatlash

```bash
git remote -v
# origin  https://github.com/foydalanuvchi/loyiha.git (fetch)
# origin  https://github.com/foydalanuvchi/loyiha.git (push)
```

## 🔄 Fetching — yuklab olish (birlashtirmasdan)

```bash
git fetch origin

# Bu faqat remote dagi yangiliklarni yuklab oladi,
# working directory yoki joriy branch ni O'ZGARTIRMAYDI - XAVFSIZ
```

## 🔄 Pulling — yuklab olish + birlashtirish

```bash
git pull origin main
# Bu "git fetch" + "git merge" ni birlashtiradi

# Rebase bilan pull qilish (chiziqli tarix uchun)
git pull --rebase origin main
```

## 📤 Pushing — yuborish

```bash
git push origin main

# Birinchi marta push qilishda "upstream" ni belgilash
# (shundan keyin faqat "git push" yozish kifoya)
git push -u origin main
```

## 🔄 Remote branch lar

```bash
# origin/main, origin/feature kabi nomlar - bu LOCAL kompyuterdagi
# remote branch ning HOLATINI ko'rsatuvchi "read-only" ko'rsatkichlar

git branch -r
# origin/main
# origin/develop

# Remote branch bilan solishtirish
git diff main origin/main
```

## 🔄 Fork ni sinxronlashtirish (Syncing Fork)

Agar siz boshqa birovning repository sini fork qilgan bo'lsangiz, asl manbadagi yangiliklarni olish uchun:

```bash
# Asl repository ni "upstream" nomi bilan qo'shish
git remote add upstream https://github.com/asl-egasi/loyiha.git

# Upstream dagi o'zgarishlarni yuklab olish
git fetch upstream

# O'z main branch ingizga birlashtirish
git checkout main
git merge upstream/main
```

---

# 4.9 🏷️ Tags

## 🏷️ Tag nima? (Release larni belgilash)

Tag — ma'lum bir commit ga qo'yiladigan **doimiy yorliq**, odatda **release versiyalarni** belgilash uchun ishlatiladi.

## 📝 Yaratish

```bash
# Lightweight tag (oddiy, faqat ishora)
git tag v1.0.0

# Annotated tag (tavsif, muallif, sana bilan saqlanadi) - RELEASE lar uchun TAVSIYA ETILADI
git tag -a v1.0.0 -m "Release v1.0.0"

# Ma'lum bir eski commit ga tag qo'yish
git tag -a v0.9.0 a1b2c3d -m "Beta versiya"
```

## 📋 Ro'yxatlash

```bash
git tag                # barcha taglar
git tag -l "v1.*"      # pattern bo'yicha filtrlash (masalan v1.0.0, v1.1.0)
```

## 🔍 Ko'rish

```bash
git show v1.0.0
```

## 📤 Yuborish

```bash
# Bitta tag ni yuborish
git push origin v1.0.0

# Barcha taglarni yuborish
git push --tags
```

## 🗑️ O'chirish

```bash
# Local
git tag -d v1.0.0

# Remote
git push origin --delete v1.0.0
```

## 📦 Semantic Versioning (SemVer): MAJOR.MINOR.PATCH

```
v2.5.3
 │ │ └── PATCH - kichik xatolik tuzatishlar, orqaga mos (backward compatible)
 │ └──── MINOR - yangi funksiya qo'shildi, orqaga mos
 └────── MAJOR - orqaga MOS BO'LMAGAN (breaking) o'zgarishlar

Misollar:
v1.0.0 -> v1.0.1   # bug fix
v1.0.1 -> v1.1.0   # yangi funksiya qo'shildi
v1.1.0 -> v2.0.0   # eski API bilan mos kelmaydigan o'zgarish
```

---

# 4.10 📦 Stashing

## 📦 Stash nima?

Tugallanmagan ishni **vaqtincha "yashirib qo'yish"** — masalan boshqa branch ga tezda o'tish kerak bo'lganda, lekin joriy o'zgarishlarni hali commit qilishga tayyor bo'lmaganda.

## 💾 Saqlash

```bash
git stash

# Xabar bilan (keyinroq nima ekanini eslash uchun)
git stash push -m "login formasi ustida ishlayapman"
```

## 📋 Ro'yxatlash

```bash
git stash list
# stash@{0}: On feature-login: login formasi ustida ishlayapman
# stash@{1}: On main: WIP on main
```

## 🔄 Qaytarish

```bash
# Oxirgi stash ni qaytarish VA stash ro'yxatidan o'chirish
git stash pop

# Qaytarish, lekin stash da HAM qoldirish (nusxa saqlanadi)
git stash apply

# Ma'lum bir stash ni qaytarish
git stash apply stash@{2}
```

## 🗑️ O'chirish

```bash
git stash drop stash@{0}    # bitta stash ni o'chirish
git stash clear             # barcha stash larni tozalash
```

## 🌿 Qo'shimcha variantlar

```bash
# Untracked (yangi, hali kuzatilmayotgan) fayllarni ham stash qilish
git stash -u

# Staging holatini saqlab qolish (faqat unstaged o'zgarishlarni stash qilish)
git stash --keep-index
```

---

# 4.11 🔍 O'zgarishlarni Bekor Qilish (Undoing Changes)

## ↩️ Working Directory darajasida

```bash
# Zamonaviy usul (Git 2.23+)
git restore fayl.js

# Eski usul
git checkout -- fayl.js
```

## ↩️ Staging Area darajasida

```bash
# Zamonaviy usul
git restore --staged fayl.js

# Eski usul
git reset HEAD fayl.js
```

## ↩️ Commit larni bekor qilish

```bash
# SOFT - commitni bekor qiladi, o'zgarishlar STAGING da qoladi
git reset --soft HEAD~1

# MIXED (default) - commitni bekor qiladi, o'zgarishlar WORKING DIRECTORY da qoladi
git reset --mixed HEAD~1
git reset HEAD~1               # --mixed avtomatik qo'llaniladi

# HARD - commitni VA barcha o'zgarishlarni BUTUNLAY o'chiradi
git reset --hard HEAD~1        # ⚠️ EHTIYOT BO'LING!

# XAVFSIZ usul - yangi "bekor qiluvchi" commit yaratadi (tarixni o'chirmaydi)
git revert a1b2c3d
```

## 🔄 Reset vs Revert (tarixni qayta yozish vs xavfsiz bekor qilish)

|                    | `reset`                            | `revert`                                   |
| ------------------ | ---------------------------------- | ------------------------------------------ |
| Tarix              | O'chiriladi/o'zgartiriladi         | Saqlanadi, yangi commit qo'shiladi         |
| Public branch da   | ❌ XAVFLI                          | ✅ XAVFSIZ                                 |
| Foydalanish holati | Shaxsiy, push qilinmagan commitlar | Push qilingan, boshqalar ko'rgan commitlar |

## 📝 Amend — oxirgi commitni tahrirlash

```bash
# Xabarni o'zgartirish
git commit --amend -m "Yangi, to'g'ri xabar"

# Unutilgan faylni qo'shib, xabarni o'zgartirmasdan
git add unutilgan-fayl.js
git commit --amend --no-edit
```

## 🔍 Yo'qolgan commitlarni topish: `git reflog`

`reflog` — HEAD ning **barcha harakatlari tarixini** saqlaydi (hatto `reset --hard` bilan "yo'qolgan" commitlarni ham). Bu Git dagi eng kuchli "qutqaruvchi" buyruq.

```bash
git reflog

# Natija:
# a1b2c3d HEAD@{0}: reset: moving to HEAD~1
# e4f5g6h HEAD@{1}: commit: Muhim o'zgarish
# ...

# "Yo'qolgan" commitni tiklash
git reset --hard e4f5g6h
# yoki
git cherry-pick e4f5g6h
```

---

# 4.12 🌐 GitHub / GitLab / Bitbucket

## 📦 Platformalarni solishtirish

| Platforma     | Xususiyati                                                              |
| ------------- | ----------------------------------------------------------------------- |
| **GitHub**    | Eng mashhur, GitHub Actions (CI/CD), Copilot, katta open-source jamiyat |
| **GitLab**    | O'rnatilgan CI/CD (self-hosted variant ham bor), DevOps uchun kuchli    |
| **Bitbucket** | Jira bilan chuqur integratsiya, Atlassian mahsulotlari bilan mos        |

## 🔐 Autentifikatsiya

### HTTPS (token talab qilinadi)

```bash
# 2021 yildan beri GitHub parol o'rniga Personal Access Token (PAT) talab qiladi
git clone https://github.com/foydalanuvchi/loyiha.git
# Push qilganda username va PAT (parol o'rniga) so'raladi
```

### SSH (kalit juftligi)

```bash
# SSH kalit yaratish
ssh-keygen -t ed25519 -C "elmurod@example.com"

# Ochiq kalitni ko'rish va nusxalash
cat ~/.ssh/id_ed25519.pub

# GitHub -> Settings -> SSH and GPG keys -> New SSH key ga qo'yiladi

# SSH orqali clone qilish (parolsiz, tokensiz ishlaydi)
git clone git@github.com:foydalanuvchi/loyiha.git

# Ulanishni tekshirish
ssh -T git@github.com
```

## 📤 Remote repository yaratish

```bash
# GitHub saytida "New repository" tugmasi orqali yaratiladi,
# so'ngra lokal loyihani unga bog'lash:
git remote add origin git@github.com:foydalanuvchi/loyiha.git
git push -u origin main
```

## 📥 Pull Request / Merge Request

```bash
# 1. Branch yaratish va o'zgarish kiritish
git checkout -b feature/yangi-funksiya
git add .
git commit -m "feat: yangi funksiya qo'shildi"
git push origin feature/yangi-funksiya

# 2. GitHub/GitLab saytida "New Pull Request" (yoki "Merge Request") ochiladi
# 3. Kod ko'rib chiqiladi (Code Review) - izohlar, takliflar yoziladi
# 4. Kerakli o'zgarishlar kiritilib, qayta push qilinadi
# 5. Tasdiqlangач, "Merge" qilinadi

# Merge variantlari:
# - Merge commit  : oddiy merge, barcha commitlar saqlanadi
# - Squash and merge : barcha commitlar BITTA commitga birlashtirilib qo'shiladi
# - Rebase and merge : commitlar chiziqli tarzda, alohida-alohida qo'shiladi
```

## 🔄 Forking Workflow

```bash
# Loyihaga to'g'ridan-to'g'ri yozish huquqi bo'lmaganda:
# 1. GitHub da "Fork" tugmasi bosiladi - o'z akkountingizga nusxa yaratiladi
# 2. Fork qilingan repo clone qilinadi
git clone git@github.com:sizning-username/loyiha.git

# 3. Branch yaratiladi, o'zgartiriladi, push qilinadi (o'z fork ingizga)
# 4. Asl repository ga Pull Request ochiladi
```

## 📋 Issues va Projects

```bash
# Issues - xatoliklar, funksiya so'rovlari va vazifalarni kuzatish uchun
# Har bir commit yoki PR da issue ga bog'lanish mumkin:
git commit -m "fix: login xatoligi tuzatildi (closes #42)"
# Bu GitHub da PR merge qilinganda #42 issue ni avtomatik yopadi
```

## 🔧 GitHub Actions asoslari (CI/CD)

GitHub Actions — kod push/PR qilinganda **avtomatik** ishga tushadigan skriptlar (test ishga tushirish, build qilish, deploy qilish uchun).

```yaml
# .github/workflows/test.yml
name: Testlarni ishga tushirish

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Node.js o'rnatish
        uses: actions/setup-node@v3
        with:
          node-version: "20"
      - run: npm install
      - run: npm test
```

## 📄 README.md, CONTRIBUTING.md, LICENSE

```markdown
<!-- README.md - loyihaning "old eshigi", har bir repo da bo'lishi shart -->

# Loyiha nomi

Loyiha haqida qisqa tavsif, o'rnatish yo'riqnomasi, foydalanish misollari

<!-- CONTRIBUTING.md - hissa qo'shmoqchi bo'lganlar uchun qoidalar -->

# Qanday hissa qo'shish mumkin

1. Repository ni fork qiling
2. Branch yarating: feature/nomi
3. Pull Request oching

<!-- LICENSE - loyihani qanday ishlatish mumkinligini belgilaydi (MIT, Apache 2.0, GPL va h.k.) -->
```

---

# 4.13 👥 Hamkorlik Ish Jarayonlari (Collaboration Workflows)

## 🌿 Git Flow

Katta, rejalashtirilgan release siklga ega loyihalar uchun:

```
main       - faqat production-ready kod (har doim ishlaydigan, release qilingan)
develop    - keyingi release uchun integratsiya branch
feature/*  - yangi funksiyalar (develop dan boshlanadi, develop ga qaytadi)
release/*  - release tayyorlash (kichik tuzatishlar, versiya raqami)
hotfix/*   - production dagi shoshilinch xatoliklar (main dan boshlanadi)
```

```bash
# Feature ishlash tsikli
git checkout develop
git checkout -b feature/yangi-funksiya
# ... ishlash ...
git checkout develop
git merge --no-ff feature/yangi-funksiya

# Hotfix tsikli (shoshilinch, to'g'ridan-to'g'ri main dan)
git checkout main
git checkout -b hotfix/muhim-xato
# ... tuzatish ...
git checkout main
git merge --no-ff hotfix/muhim-xato
git checkout develop
git merge --no-ff hotfix/muhim-xato   # develop ga ham qo'shiladi
```

## 🚀 GitHub Flow (soddaroq, zamonaviy)

Uzluksiz deploy qiluvchi (continuous deployment) loyihalar uchun:

```
main       - HAR DOIM deploy qilishga tayyor holatda
feature/*  - main dan to'g'ridan-to'g'ri, PR orqali qayta main ga qo'shiladi
```

```bash
git checkout main
git pull origin main
git checkout -b feature/login-sahifasi
# ... ishlash, commit qilish ...
git push origin feature/login-sahifasi
# Pull Request -> Review -> Merge to main -> Deploy
```

## 🌿 GitLab Flow

GitHub Flow ga o'xshash, lekin **environment branch lar** (staging, production) qo'shiladi:

```
main -> staging -> production

feature/* branch lar main ga merge qilinadi,
so'ng main dan staging ga, tekshirilgach production ga "promote" qilinadi
```

## 🌿 Trunk-Based Development

```
Barcha dasturchilar to'g'ridan-to'g'ri (yoki juda qisqa umrli, bir necha soatlik
branch lar orqali) "main" (trunk) ga tez-tez kichik o'zgarishlar qiladi.
Tayyor bo'lmagan funksiyalar "feature flag" lar orqali yashiriladi.

✅ Afzalligi: konflikt kam, uzluksiz integratsiya oson
❌ Kamchiligi: yaxshi test qamrovi va disiplina talab qiladi
```

## 🔀 Forking Workflow (open source uchun)

4.12-bo'limda ko'rsatilgan — asosan tashqi hissa qo'shuvchilar (external contributors) uchun, ular loyihaga to'g'ridan-to'g'ri yozish huquqiga ega bo'lmaganda ishlatiladi.

## 📋 Code Review — yaxshi amaliyotlar

```bash
# ✅ PR larni kichik va fokuslangan qiling -
#    500+ qatorli PR ni sifatli review qilish deyarli imkonsiz

# ✅ PR tavsifida NIMA va NIMA UCHUN o'zgartirilganini yozing

# ✅ Review izohlariga tezkor javob bering va o'zgartirishlarni kiriting

# ✅ Avtomatlashtirilgan testlar (CI) PR ni review qilishdan OLDIN yashil bo'lishi kerak

# ✅ Kod muallifi review qiluvchi bilan bahslashish o'rniga,
#    tushunmagan narsalar bo'yicha savol berishi kerak
```

---

# 4.14 🔧 Ilg'or Git (Advanced Git)

## 🔍 Git Bisect — xato commitni topish

`bisect` — Binary Search algoritmi orqali **qaysi commit da xatolik paydo bo'lganini** avtomatik topadi.

```bash
git bisect start
git bisect bad HEAD              # hozirgi holat "buzilgan"
git bisect good a1b2c3d          # bu commit da hali "yaxshi" edi

# Git avtomatik ravishda ikkalasi orasidagi commit ga o'tkazadi.
# Siz o'sha holatda testni ishga tushirib, natijani bildirasiz:
git bisect good     # agar bu commit da hali muammo yo'q bo'lsa
git bisect bad      # agar bu commit da muammo bor bo'lsa

# Bu jarayon avtomatik davom etadi, toki aynan qaysi commit
# muammoni keltirib chiqarganini Git aytib berguncha

git bisect reset    # jarayonni tugatib, asl branch ga qaytish
```

## 📦 Git Submodules

Submodule — bitta Git repository ichida **boshqa, mustaqil Git repository sini** joylashtirish imkonini beradi (masalan umumiy kutubxona kodini).

```bash
# Submodule qo'shish
git submodule add https://github.com/boshqa/kutubxona.git libs/kutubxona

# Clone qilganda submodule larni ham olib kelish
git clone --recursive https://github.com/foydalanuvchi/loyiha.git

# Yoki allaqachon clone qilingan bo'lsa
git submodule update --init --recursive

# Submodule larni yangilash
git submodule update --remote
```

## 🌿 Git Worktree — bir nechta branch bilan bir vaqtda ishlash

`worktree` — bitta repository dan **bir nechta alohida papkada, turli branch larda BIR VAQTNING O'ZIDA** ishlash imkonini beradi (branch almashtirish uchun `checkout` qilish shart emas).

```bash
# Yangi worktree yaratish - alohida papkada "hotfix" branch ochiladi
git worktree add ../loyiha-hotfix hotfix/muhim-xato

# Endi ikkita alohida papkada, ikkita turli branch bilan
# BIR VAQTDA ishlash mumkin (masalan bitta terminalda feature,
# ikkinchisida hotfix ustida)

# Worktree larni ko'rish
git worktree list

# Worktree ni o'chirish
git worktree remove ../loyiha-hotfix
```

## 📊 Git Blame

```bash
# Har bir qatorni kim va qachon yozganini ko'rsatadi
git blame fayl.js

# Faqat ma'lum qatorlar oralig'i
git blame -L 10,25 fayl.js
```

## 🔍 Ilg'or Log qidiruvlari

```bash
# Kod ichida ma'lum matn/funksiya QANCHA MARTA qo'shilgan/olib tashlanganini qidirish
git log -S "funksiyaNomi"

# Regex orqali qidirish
git log -G "regex_pattern"

# Commit XABARLARI ichidan qidirish
git log --grep="login"

# Muayyan muallif
git log --author="Elmurod"

# Vaqt oralig'i
git log --since="2 weeks ago"
git log --since="2026-07-01" --until="2026-08-01"

# Bir nechtasini birlashtirib
git log --author="Elmurod" --since="1 month ago" --oneline
```

## 🔧 Git Hooks

Hook — Git ning ma'lum bosqichlarida (commit qilishdan oldin, push qilishdan oldin va h.k.) **avtomatik ishga tushadigan skriptlar**.

```bash
# .git/hooks/ papkasida joylashadi, masalan:
# .git/hooks/pre-commit
# .git/hooks/commit-msg
# .git/hooks/pre-push

# Misol: pre-commit hook - commit qilishdan oldin testlarni ishga tushiradi
#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Testlar muvaffaqiyatsiz - commit bekor qilindi"
  exit 1
fi
```

### Husky (Node.js loyihalarida hook larni boshqarish)

```bash
# Husky - Git hook larni loyiha ichida (jamoaviy) boshqarish uchun paket
npm install husky --save-dev
npx husky init

# .husky/pre-commit faylida:
npm test
npm run lint
```

---

# 4.15 🧹 Git Best Practices (Tavsiyalar)

```bash
# ✅ Har doim mazmunli commit xabarlarini yozing

# ✅ Tez-tez commit qiling, tayyor bo'lganda push qiling
#    (kichik, tez-tez commitlar - katta, kamdan-kam commitlardan yaxshiroq)

# ✅ Har bir feature/bug uchun alohida branch ishlating

# ✅ Commitlarni "focused" (bitta ishga tegishli) qiling -
#    bitta commit ichida bir nechta bog'liq bo'lmagan o'zgarish bo'lmasin

# ✅ Maxfiy ma'lumotlarni HECH QACHON commit qilmang (.gitignore dan foydalaning)

# ✅ Push qilishdan oldin pull qiling (konfliktlarni oldindan aniqlash uchun)

# ✅ Merge qilingan branch larni o'chiring - repository ni toza tuting
git branch -d feature/tugallangan-funksiya

# ✅ .gitignore faylini loyiha boshidanoq to'g'ri sozlang

# ✅ Commit qilishdan oldin "git diff" bilan o'zgarishlarni ko'rib chiqing

# ✅ Muhim versiyalarni tag qiling (v1.0.0 kabi)

# ✅ Repository ni README bilan hujjatlashtiring
```

---

# 4.16 🐛 Umumiy Git Muammolari va Yechimlari

## ⚠️ Detached HEAD holati

```bash
# Bu holat - branch ga emas, aniq bir commit ga to'g'ridan-to'g'ri "bog'langanda" yuzaga keladi
git checkout a1b2c3d
# Note: switching to 'a1b2c3d'.
# You are in 'detached HEAD' state...

# Agar bu holatda o'zgarish kiritsangiz va SAQLAB QOLMOQCHI bo'lsangiz:
git checkout -b yangi-branch-nomi

# Agar shunchaki eski holatni ko'rmoqchi bo'lsangiz (o'zgarishsiz), muammo yo'q -
# faqat branch ga qaytishni unutmang:
git checkout main
```

## 🔀 Merge Konfliktlari — hal qilish strategiyalari

4.6-bo'limda batafsil ko'rsatilgan. Qo'shimcha strategiyalar:

```bash
# Konfliktda "bizning" versiyani tanlash
git checkout --ours fayl.js
git add fayl.js

# Konfliktda "ularning" versiyasini tanlash
git checkout --theirs fayl.js
git add fayl.js
```

## 💾 Xato branch ga commit qilib qo'ydim

```bash
# 1. Joriy holatni yangi branch ga "belgilab" qo'yish
git branch to-gri-branch

# 2. Xato branch dan commitni olib tashlash
git reset --hard HEAD~1

# 3. To'g'ri branch ga o'tish
git checkout to-gri-branch
```

## ↩️ Yo'qolgan commitlarni tiklash: `git reflog`

4.11-bo'limda ko'rsatilgan — `reset --hard` bilan "yo'qolgan" commitlarni tiklashning asosiy vositasi.

## 🗑️ Maxfiy ma'lumotlarni olib tashlash (BFG Repo-Cleaner)

Agar maxfiy ma'lumot (parol, API kalit) **allaqachon push qilingan** bo'lsa, oddiy `git rm` yetarli emas — u hali eski commitlarda saqlanib qoladi.

```bash
# BFG Repo-Cleaner - butun tarixdan faylni yoki matnni tozalash uchun maxsus vosita
# https://rtyley.github.io/bfg-repo-cleaner/

java -jar bfg.jar --delete-files sirli-kalit.env

# yoki matn bo'yicha tozalash
java -jar bfg.jar --replace-text parollar.txt

# Tozalashdan keyin
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force

# ⚠️ ENG MUHIMI: kalit/parol allaqachon oshkor bo'lgan,
# shu sababli uni DARHOL BEKOR QILISH/ALMASHTIRISH kerak -
# tarixdan o'chirish bu YETARLI EMAS!
```

## 🔄 Fork ni upstream bilan sinxronlashtirish

4.8-bo'limda ko'rsatilgan.

## 📦 Katta fayllar (Git LFS)

Git odatiy holda katta binary fayllar (video, katta rasmlar, dataset) bilan yomon ishlaydi — repository og'irlashib ketadi. **Git LFS (Large File Storage)** buni hal qiladi.

```bash
# Git LFS o'rnatish
git lfs install

# Qaysi fayl turlarini LFS orqali kuzatishni belgilash
git lfs track "*.psd"
git lfs track "*.mp4"

# .gitattributes fayli avtomatik yaratiladi, uni commit qiling
git add .gitattributes
git commit -m "chore: LFS uchun katta fayllarni sozlash"

# Endi PSD/MP4 fayllar LFS orqali saqlanadi (Git repo o'zi kichik qoladi)
git add katta-fayl.psd
git commit -m "Dizayn fayli qo'shildi"
git push origin main
```

## 🔐 Autentifikatsiya muammolari (SSH, tokenlar)

```bash
# SSH ulanishni tekshirish
ssh -T git@github.com

# Agar "Permission denied" xatosi chiqsa - SSH agent ga kalitni qo'shish kerak
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# HTTPS orqali token muddati tugagan bo'lsa - yangi Personal Access Token yaratish kerak
# (GitHub -> Settings -> Developer settings -> Personal access tokens)
```

## 🌐 Tarmoq/proksi muammolari

```bash
# Agar korporativ proksi orqali ishlasangiz
git config --global http.proxy http://proksi-manzil:port
git config --global https.proxy https://proksi-manzil:port

# Proksini o'chirish
git config --global --unset http.proxy
git config --global --unset https.proxy
```

---

# 4.17 🛠️ Git Vositalari va Integratsiyalar

## 🖥️ GUI mijozlari (4.2-bo'limda batafsil)

- **GitKraken** — kuchli vizualizatsiya
- **Sourcetree** — Bitbucket bilan yaxshi ishlaydi
- **GitHub Desktop** — sodda, boshlovchilar uchun
- **Git Extensions** — Windows/Visual Studio uchun

## 🔧 IDE integratsiyasi

```bash
# VS Code - o'rnatilgan Git qo'llab-quvvatlash (Source Control paneli)
# Terminaldagi kabi barcha asosiy amallarni (add, commit, push, branch)
# vizual interfeys orqali bajarish mumkin

# WebStorm / IntelliJ IDEA - kuchli built-in Git vositalari,
# jumladan vizual merge/rebase, blame annotatsiyalari
```

## 📊 Git statistikasi

```bash
# Har bir muallifning nechta commit qilganini ko'rsatish
git shortlog -sn

# Natija:
#   145  Elmurod
#    67  Aziza
#    23  Sardor

# Repository hajmi haqida ma'lumot
git count-objects -v -H
```

## 🔍 Vizualizatsiya

```bash
# Terminalda grafik ko'rinish
git log --graph --oneline --all --decorate

# GitK - Git bilan birga keladigan oddiy grafik vosita
gitk --all

# GitUp - macOS uchun real-vaqt vizual repository ko'rish vositasi
```

---

# 4.18 🌐 Open Source ga hissa qo'shish

## 🔍 Loyiha topish

```bash
# GitHub da maxsus label lar orqali qidirish:
# - "good first issue" - yangi boshlovchilar uchun mos vazifalar
# - "help wanted" - jamoa yordam kutayotgan vazifalar

# GitHub qidiruvda:
# label:"good first issue" language:javascript
```

## 📋 To'liq jarayon

```bash
# 1. CONTRIBUTING.md faylini o'qing - har bir loyihaning o'z qoidalari bor

# 2. Repository ni fork qiling (GitHub saytida "Fork" tugmasi)

# 3. Fork qilingan repo ni clone qiling
git clone git@github.com:sizning-username/loyiha.git
cd loyiha

# 4. Yangi branch yarating
git checkout -b fix/typo-in-readme

# 5. O'zgarishlar kiriting
# ... fayllarni tahrirlash ...

# 6. Commit va push qiling
git add .
git commit -m "docs: README dagi imlo xatosini tuzatish"
git push origin fix/typo-in-readme

# 7. GitHub da Pull Request yarating (asl repository ga qarab)

# 8. Review jarayonida ishtirok eting - so'ralgan o'zgarishlarni kiriting
git add .
git commit -m "review izohlari asosida tuzatish"
git push origin fix/typo-in-readme  # PR avtomatik yangilanadi

# 9. Merge qilinishini kuting - tabriklaymiz, siz open-source ga hissa qo'shdingiz! 🎉
```

---

# 4.19 🔒 Git Xavfsizligi

## 🔐 SSH kalitlarni boshqarish

```bash
# Turli xizmatlar uchun turli SSH kalitlar yaratish tavsiya etiladi
ssh-keygen -t ed25519 -C "ish-emaili@company.com" -f ~/.ssh/id_ed25519_ish

# ~/.ssh/config faylida turli kalitlarni turli xostlar uchun sozlash
# Host github.com-ish
#     HostName github.com
#     User git
#     IdentityFile ~/.ssh/id_ed25519_ish
```

## 🔒 GPG orqali commitlarni imzolash (Signing Commits)

GPG imzo — commitning **haqiqatan siz tomoningizdan** qilinganini kriptografik jihatdan tasdiqlaydi (GitHub da "Verified" belgisi bilan ko'rsatiladi).

```bash
# GPG kalit yaratish
gpg --gen-key

# Yaratilgan kalitlar ro'yxatini ko'rish
gpg --list-secret-keys --keyid-format=long

# Git ga qaysi GPG kalitni ishlatishni bildirish
git config --global user.signingkey <KALIT-ID>

# Har bir commitni avtomatik imzolashni yoqish
git config --global commit.gpgsign true

# Yoki bitta commitni qo'lda imzolash
git commit -S -m "Muhim o'zgarish"

# GitHub ga ochiq GPG kalitni qo'shish
gpg --armor --export <KALIT-ID>
# natijani GitHub -> Settings -> SSH and GPG keys ga qo'shish
```

## 🚫 Maxfiy ma'lumotlar uchun `.gitignore`

```gitignore
.env
*.key
*.pem
secrets.json
config/credentials.yml
```

## 🔄 Git Crypt — fayllarni shifrlash

Ba'zi fayllarni repository ichida **shifrlangan holda** saqlash kerak bo'lsa (masalan production sozlamalari):

```bash
git-crypt init

# .gitattributes faylida qaysi fayllar shifrlanishini belgilash
echo "secrets.yml filter=git-crypt diff=git-crypt" >> .gitattributes

git add .gitattributes secrets.yml
git commit -m "chore: shifrlangan sozlamalar qo'shildi"

# Boshqa dasturchiga kirish huquqi berish
git-crypt add-gpg-user USER_ID
```

## 🔍 Repository ni audit qilish

```bash
# Tarixda tasodifan qoldirilgan maxfiy ma'lumotlarni qidirish
git log --all --grep="password"
git log -p | grep -i "api_key"

# Yoki maxsus vositalar bilan (tavsiya etiladi):
# - truffleHog
# - git-secrets (AWS tomonidan)
# - gitleaks
```

---

# 4.20 💻 Amaliy Loyihalar (Practical Projects)

Quyidagi vazifalar — yuqorida o'rganilgan barcha mavzularni amaliyotda mustahkamlash uchun:

```bash
# ✅ 1. Yangi loyihani Git bilan ishga tushirish
mkdir mening-loyiham && cd mening-loyiham
git init
echo "# Mening Loyiham" > README.md
git add README.md
git commit -m "chore: loyiha boshlang'ich commit"

# ✅ 2. Rivojlanish uchun feature branch lar yaratish
git checkout -b feature/login-sahifasi

# ✅ 3. Merge qilish va konfliktlarni hal qilishni mashq qilish
#    (ataylab ikkita branch da bir xil qatorni o'zgartirib ko'ring)

# ✅ 4. Commit tarixini tahlil qilish
git log --graph --oneline --all --decorate

# ✅ 5. Interaktiv rebase orqali commitlarni birlashtirish (squash)
git rebase -i HEAD~5

# ✅ 6. Versiya raqamlari bilan release larni tag qilish
git tag -a v1.0.0 -m "Birinchi release"
git push origin v1.0.0

# ✅ 7. GitHub/GitLab ga push qilish
git remote add origin git@github.com:username/loyiha.git
git push -u origin main

# ✅ 8. Jamoaviy hamkorlikni simulyatsiya qilish (bir nechta akkount/branch bilan)
#    - Ikkinchi "foydalanuvchi" sifatida boshqa branch da ishlang
#    - Pull Request oching, o'zingiz review qiling, merge qiling

# ✅ 9. Husky bilan Git hook larni sozlash
npm install husky --save-dev
npx husky init
echo "npm test" > .husky/pre-commit

# ✅ 10. Open source loyihaga hissa qo'shish
#     ("good first issue" label li kichik loyihadan boshlang)

# ✅ 11. Git orqali deploy qilish (Netlify/Vercel)
#     Netlify/Vercel GitHub repository ni ulaganingizda,
#     har safar "main" branch ga push qilganingizda AVTOMATIK deploy bo'ladi

# ✅ 12. Tez-tez ishlatiladigan buyruqlar uchun Git aliaslar yaratish
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.st status
git config --global alias.co checkout
```

---

## 📋 Yakuniy xulosa jadvali — barcha muhim buyruqlar

| Kategoriya   | Buyruq                                                         |
| ------------ | -------------------------------------------------------------- |
| Sozlash      | `git config --global user.name/email`                          |
| Boshlash     | `git init`, `git clone`                                        |
| Holat        | `git status`, `git status -s`                                  |
| Staging      | `git add`, `git add -p`, `git restore --staged`                |
| Commit       | `git commit -m`, `git commit --amend`                          |
| Tarix        | `git log`, `git log --oneline --graph`, `git show`             |
| Branch       | `git branch`, `git switch -c`, `git checkout -b`               |
| Merge        | `git merge`, `git merge --no-ff`, `git merge --abort`          |
| Rebase       | `git rebase`, `git rebase -i`, `git rebase --continue/--abort` |
| Remote       | `git remote add`, `git fetch`, `git pull`, `git push`          |
| Bekor qilish | `git reset --soft/mixed/hard`, `git revert`, `git restore`     |
| Stash        | `git stash`, `git stash pop`, `git stash list`                 |
| Tag          | `git tag -a`, `git push --tags`                                |
| Cherry-pick  | `git cherry-pick <hash>`                                       |
| Qutqarish    | `git reflog`                                                   |
| Debug        | `git blame`, `git bisect`                                      |
| Submodule    | `git submodule add/update`                                     |
| Worktree     | `git worktree add/list/remove`                                 |
| Xavfsizlik   | `git commit -S`, `gpg --gen-key`                               |

---

Ushbu reference — Stage 4 dasturidagi barcha 20 ta mavzuni (4.1 dan 4.20 gacha) to'liq qamrab oladi: Version Control asoslaridan tortib, sozlash, repository yaratish, asosiy ish jarayoni, branching, merge, rebase, remote, tag, stash, bekor qilish amallari, GitHub/GitLab bilan ishlash, hamkorlik strategiyalari, ilg'or Git vositalari (bisect, submodule, worktree, hooks), best practices, umumiy muammolar va yechimlari, qo'shimcha vositalar, open-source ga hissa qo'shish va xavfsizlik masalalarigacha.
