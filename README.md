# MAKE AI REAL — React + Vite

Hero-osio Reactilla. Valmis GitHub + Vercel deploymenttiin.

---

## 📁 Kansiorakenne

```
siili-hero/
├── index.html              ← Viten entry point
├── vite.config.js
├── package.json
├── .gitignore
└── src/
    ├── main.jsx            ← React juuri
    ├── App.jsx             ← Yhdistää komponentit
    ├── styles/
    │   ├── globals.css     ← Design tokenit + reset
    │   ├── Navbar.css
    │   └── Hero.css
    └── components/
        ├── Navbar.jsx
        └── Hero.jsx
```

---

## 🚀 Paikallinen käynnistys

```bash
# 1. Asenna riippuvuudet
npm install

# 2. Käynnistä kehityspalvelin
npm run dev

# → Aukeaa http://localhost:5173
```

---

## 📤 GitHub-repoon (ensimmäinen kerta)

### Vaihtoehto A — GitHub Desktop (helpoin)
1. Avaa **GitHub Desktop**
2. Valitse **File → Add Local Repository**
3. Osoita `siili-hero`-kansioon
4. Klikkaa **"Publish repository"** → anna nimi (esim. `siili-hero`)
5. Valitse public tai private → **Publish**

### Vaihtoehto B — Terminaali
```bash
# Siirry projektin juureen
cd siili-hero

# Alusta git
git init
git add .
git commit -m "first commit"

# Luo repo GitHubissa (github.com → New repository → kopioi URL)
git remote add origin https://github.com/SINUN-KÄYTTÄJÄNIMI/siili-hero.git
git branch -M main
git push -u origin main
```

---

## ▲ Vercel-deployment

1. Mene **vercel.com** → kirjaudu GitHub-tunnuksilla
2. Klikkaa **"Add New Project"**
3. Valitse `siili-hero`-repo listalta → **Import**
4. Asetukset täyttyvät automaattisesti (Vite tunnistetaan):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klikkaa **Deploy** → valmis! 🎉

Jatkossa joka `git push` → Vercel deployaa automaattisesti.

---

## ➕ Uuden komponentin lisääminen

1. Luo `src/components/UusiKomponentti.jsx`
2. Luo `src/styles/UusiKomponentti.css`
3. Importtaa `App.jsx`:ssa:
   ```jsx
   import UusiKomponentti from './components/UusiKomponentti'
   // ...
   <UusiKomponentti />
   ```
