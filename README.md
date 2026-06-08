# Portfolio — Giovanni Benefico

Portfolio personale minimale e professionale: sito statico, senza framework né build,
pensato fin dall'inizio per l'**accessibilità**.

🔗 **Live:** _(aggiungi qui l'URL dopo il deploy)_

## ✨ Caratteristiche

- **Zero dipendenze** — solo HTML, CSS e JavaScript vanilla. Si apre anche con doppio clic.
- **Bilingue 🇮🇹/🇬🇧** — pulsante IT/EN nella barra di navigazione; la scelta viene ricordata.
- **Tema chiaro/scuro** — rispetta le preferenze di sistema e ricorda la scelta dell'utente.
- **Responsive** — layout fluido da mobile a desktop.
- **Accessibile** — HTML semantico, `skip link`, focus visibile, contrasti adeguati,
  `aria-*` sul menù e sui controlli, supporto a `prefers-reduced-motion`.
- **Veloce** — nessun bundle, immagini essenziali, font con `preconnect`.
- **SEO & social** — meta description, Open Graph e favicon SVG (monogramma «GB»).

## 📁 Struttura

```
portfolio/
├── index.html          # contenuto e struttura (testi con data-i18n)
├── css/style.css       # stile, design tokens, temi, responsive
├── js/main.js          # tema, lingua IT/EN, menù mobile, scroll reveal
├── assets/
│   ├── favicon.svg     # icona del sito (monogramma GB)
│   └── profile.jpg     # ← la tua foto profilo (sostituiscila!)
└── README.md
```

## 🚀 Avvio in locale

Apri semplicemente `index.html` nel browser, oppure avvia un server statico:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Poi visita <http://localhost:8000>.

## 🌐 Deploy su GitHub Pages

1. Crea un repository (es. `Gianni1707.github.io` per il sito principale, oppure un repo qualsiase).
2. Carica questi file:
   ```bash
   git init
   git add .
   git commit -m "Portfolio iniziale"
   git branch -M main
   git remote add origin https://github.com/Gianni1707/<repo>.git
   git push -u origin main
   ```
3. Su GitHub: **Settings → Pages → Branch: `main` / root → Save**.
4. Dopo qualche minuto il sito sarà online su `https://gianni1707.github.io/<repo>/`.

> In alternativa puoi pubblicarlo gratis anche su **Netlify** o **Vercel** trascinando la cartella.

## ✏️ Personalizzazione

- **📷 Foto profilo:** sostituisci semplicemente il file **`assets/profile.jpg`** con la tua foto
  (stesso nome). Per risultati migliori usa un'immagine quadrata (es. 460×460 px o più).
  Se il file mancasse, il sito usa automaticamente l'avatar GitHub come ripiego.
- **🌍 Lingua / testi:** ogni testo ha un attributo `data-i18n="chiave"` in `index.html`,
  e le due traduzioni stanno nell'oggetto `I18N` (`it` ed `en`) in `js/main.js`.
  Per modificare un testo aggiorna **entrambe** le lingue lì. Per aggiungere una terza lingua,
  duplica un blocco e aggiungi il codice nel pulsante.
- **🎨 Icona del sito:** è `assets/favicon.svg` — un monogramma «GB». Cambia colore/lettere lì dentro.
- **Colore d'accento:** modifica `--accent` in `css/style.css` (`:root` e `:root[data-theme="dark"]`).

---

© Giovanni Benefico
