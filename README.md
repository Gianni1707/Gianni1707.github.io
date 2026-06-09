# Portfolio — Giovanni Benefico

Portfolio personale minimale e professionale: sito statico, senza framework né build,
pensato fin dall'inizio per l'**accessibilità**.

🔗 **Live:** _(aggiungi qui l'URL dopo il deploy)_

## ✨ Caratteristiche

- **Zero dipendenze** — solo HTML, CSS e JavaScript vanilla. Si apre anche con doppio clic.
- **Bilingue 🇮🇹/🇬🇧** — pulsante IT/EN nella barra di navigazione; la scelta viene ricordata.
- **Tema chiaro/scuro** — rispetta le preferenze di sistema e ricorda la scelta dell'utente.
- **Grafico contributi GitHub** — calendario in stile GitHub generato a runtime dai dati pubblici,
  con colori adattati al tema; ripiego automatico a immagine se l'API non risponde.
- **Copia rapida** — il numero di telefono si copia negli appunti con un tocco.
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
├── js/main.js          # tema, lingua IT/EN, menù mobile, scroll reveal, grafico contributi
├── assets/
│   ├── favicon.svg     # icona del sito (monogramma GB)
│   └── profile.jpg     # ← la tua foto profilo (sostituiscila!)
└── README.md
```

## ✏️ Personalizzazione

- **📷 Foto profilo:** sostituisci semplicemente il file **`assets/profile.jpg`** con la tua foto
  (stesso nome). Per risultati migliori usa un'immagine quadrata (es. 460×460 px o più).
  Se il file mancasse, il sito usa automaticamente l'avatar GitHub come ripiego.
- **🌍 Lingua / testi:** ogni testo ha un attributo `data-i18n="chiave"` in `index.html`,
  e le due traduzioni stanno nell'oggetto `I18N` (`it` ed `en`) in `js/main.js`.
  Per modificare un testo aggiorna **entrambe** le lingue lì. Per aggiungere una terza lingua,
  duplica un blocco e aggiungi il codice nel pulsante.
- **🎨 Icona del sito:** è `assets/favicon.svg` — un monogramma «GB». Cambia colore/lettere lì dentro.
- **📊 Grafico contributi:** lo username GitHub è la costante `GH_USER` in `js/main.js`.
- **Colore d'accento:** modifica `--accent` in `css/style.css` (`:root` e `:root[data-theme="dark"]`).

---

© Giovanni Benefico
