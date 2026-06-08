/* ============================================================
   Giovanni Benefico — Portfolio interactions
   Theme · language (IT/EN) · mobile nav · scroll reveal
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "gb-theme";
  var LANG_KEY = "gb-lang";

  /* ============================================================
     Translations
     ============================================================ */
  var I18N = {
    it: {
      "meta.title": "Giovanni Benefico — Sviluppatore Software",
      "meta.desc": "Portfolio di Giovanni Benefico, studente di Informatica all'Università di Bari e sviluppatore software. Progetti web, sistemi embedded e bot di automazione.",
      "a11y.skip": "Salta al contenuto",

      "nav.about": "Chi sono",
      "nav.projects": "Progetti",
      "nav.skills": "Competenze",
      "nav.path": "Percorso",
      "nav.contact": "Contatti",

      "hero.eyebrow": "Ciao, sono",
      "hero.role": "Sviluppatore Software & Studente di Informatica",
      "hero.lead": "Costruisco software che va dal web ai sistemi embedded: bot di automazione, stazioni meteo su microcontrollore e applicazioni da riga di comando. Studio Informatica all'Università di Bari e mi appassiona l'accessibilità digitale.",
      "hero.cta1": "Vedi i progetti",
      "hero.cta2": "Contattami",
      "hero.chip1": "🎓 Università di Bari",
      "hero.chip2": "♿ Accessibilità Digitale",
      "hero.chip3": "🤝 Aperto a opportunità",
      "hero.chip4": "🌍 Italiano · English B1",

      "about.title": '<span class="section__num">01.</span> Chi sono',
      "about.p1": 'Sono uno studente di <strong>Informatica e Tecnologie per la Produzione del Software</strong> all\'Università degli Studi di Bari Aldo Moro, con un diploma da Perito Tecnico Informatico.',
      "about.p2": 'Mi piace capire come funzionano le cose a ogni livello: per questo i miei progetti spaziano dallo <strong>sviluppo web</strong> (bot in Node.js e Python) ai <strong>sistemi embedded</strong> (firmware C++ su ESP32) fino alla <strong>programmazione di sistema</strong> in C.',
      "about.p3": 'Collaboro con il <strong>Laboratorio di Tecnologie Assistive &amp; Accessibilità Digitale Aletheia</strong>, dove l\'attenzione all\'accessibilità è diventata parte del mio modo di costruire software — questo stesso sito è pensato per essere navigabile da tutti.',
      "about.facts": "In breve",
      "about.f1k": "Ruolo", "about.f1v": "Sviluppatore / Studente",
      "about.f2k": "Sede", "about.f2v": "Bari & Taranto, IT",
      "about.f3k": "Università",
      "about.f4k": "Lingue", "about.f4v": "Italiano · Inglese B1",
      "about.f5k": "Interessi", "about.f5v": "Web · Embedded · Accessibilità",

      "projects.title": '<span class="section__num">02.</span> Progetti',
      "projects.intro": "Una selezione dai miei repository pubblici su GitHub.",
      "proj.smart_t": "Smart Mobility",
      "proj.smart": "Applicazione web per lo sharing di biciclette e monopattini nell'area urbana di Bari. Tre ruoli — utente, operatore e amministrazione pubblica — con mappa interattiva, prenotazione e sblocco dei mezzi, gestione di flotta e manutenzione e dashboard di monitoraggio con report.",
      "tag.grade": "30 e lode",
      "proj.portfolio_t": "Sito Portfolio",
      "proj.portfolio": "Questo stesso sito: un portfolio personale minimale e accessibile in HTML, CSS e JavaScript vanilla, senza framework. Tema chiaro/scuro, interfaccia bilingue IT/EN e cura dell'accessibilità (HTML semantico, focus visibile, supporto a reduced-motion).",
      "tag.a11y": "Accessibilità",
      "proj.net_t": "Progetti TCP / UDP",
      "proj.net": "Applicazioni client-server in C per il corso di Reti di Calcolatori, sviluppate in team: un progetto su socket TCP e uno su socket UDP, ciascuno con protocollo applicativo dedicato e codice portabile su Windows, Linux e macOS.",
      "tag.networking": "Reti",
      "proj.bots": 'Due bot che ripubblicano automaticamente le storie Instagram di <code>@cx_food</code>: uno su WhatsApp (Node.js, Baileys) e uno su Telegram (Python). Entrambi usano <code>gallery-dl</code> per lo scraping, con polling periodico e gestione anti-duplicati.',
      "proj.weather_t": "Stazione Meteo E-Paper",
      "proj.weather": 'Firmware per ESP32 che ogni 15 minuti esce dal deep sleep, si connette al WiFi, sincronizza l\'ora via NTP, scarica i dati da Open-Meteo e disegna una dashboard meteo su un display e-paper 7.5" tricolore, poi torna in deep sleep.',
      "proj.cta": "Altri progetti e codice sorgente sono su GitHub.",
      "proj.cta_btn": "Tutti i repository →",

      "skills.title": '<span class="section__num">03.</span> Competenze',
      "skills.g1": "Linguaggi",
      "skills.g2": "Framework & Tecnologie",
      "skills.gtools": "Strumenti",
      "skills.g3": "Ambiti",
      "skills.g4": "Soft skills",
      "skills.web": "Sviluppo Web",
      "skills.embedded": "Sistemi Embedded",
      "skills.bots": "Automazione & Bot",
      "skills.a11y": "Accessibilità Digitale",
      "skills.team": "Lavoro in team",
      "skills.problem": "Problem solving",
      "skills.customer": "Cura del cliente",
      "skills.reliable": "Affidabilità",

      "path.title": '<span class="section__num">04.</span> Percorso',
      "path.edu": "Formazione",
      "path.exp": "Esperienza",
      "path.e1d": "2024 — oggi",
      "path.e1t": "Laurea in Informatica e Tecnologie per la Produzione del Software",
      "path.e1p": "Università degli Studi di Bari Aldo Moro · In corso",
      "path.e2d": "2025 — oggi",
      "path.e2t": "Lab. Tecnologie Assistive & Accessibilità Digitale",
      "path.e2p": 'Aletheia · <a href="https://aletheialab.it" target="_blank" rel="noopener noreferrer">aletheialab.it</a>',
      "path.e3t": "Diploma di Perito Tecnico Informatico",
      "path.e4t": "Brevetto BLSD",
      "path.x1d": "2024 — oggi",
      "path.x2t": "Addetto Assistenza Clienti (inbound)",
      "path.note": "Esperienze a contatto con il pubblico che mi hanno insegnato affidabilità, gestione del tempo e attenzione alle persone — qualità che porto anche nel codice.",

      "contact.title": '<span class="section__num">05.</span> Contatti',
      "contact.lead": "Sono aperto a nuove opportunità di collaborazione, tirocini e progetti. Per proposte professionali o per saperne di più sul mio lavoro, sarò felice di risponderti.",
      "contact.btn": "Scrivimi una email",
      "contact.phone": "Telefono",
      "contact.copyAria": "Tocca per copiare il numero di telefono",

      "footer.top": "↑ Torna su"
    },

    en: {
      "meta.title": "Giovanni Benefico — Software Developer",
      "meta.desc": "Portfolio of Giovanni Benefico, Computer Science student at the University of Bari and software developer. Web projects, embedded systems and automation bots.",
      "a11y.skip": "Skip to content",

      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.path": "Journey",
      "nav.contact": "Contact",

      "hero.eyebrow": "Hi, I'm",
      "hero.role": "Software Developer & Computer Science Student",
      "hero.lead": "I build software that spans from the web to embedded systems: automation bots, microcontroller weather stations and command-line applications. I study Computer Science at the University of Bari and I'm passionate about digital accessibility.",
      "hero.cta1": "View Projects",
      "hero.cta2": "Get in Touch",
      "hero.chip1": "🎓 University of Bari",
      "hero.chip2": "♿ Digital Accessibility",
      "hero.chip3": "🤝 Open to opportunities",
      "hero.chip4": "🌍 Italian · English B1",

      "about.title": '<span class="section__num">01.</span> About Me',
      "about.p1": 'I\'m a student of <strong>Computer Science &amp; Software Production Technologies</strong> at the University of Bari Aldo Moro, with a diploma as an IT Technician.',
      "about.p2": 'I like to understand how things work at every level, which is why my projects range from <strong>web development</strong> (bots in Node.js and Python) to <strong>embedded systems</strong> (C++ firmware on ESP32) all the way to <strong>systems programming</strong> in C.',
      "about.p3": 'I collaborate with the <strong>Aletheia Assistive Technologies &amp; Digital Accessibility Lab</strong>, where attention to accessibility has become part of how I build software — this very site is designed to be usable by everyone.',
      "about.facts": "At a Glance",
      "about.f1k": "Role", "about.f1v": "Developer / Student",
      "about.f2k": "Location", "about.f2v": "Bari & Taranto, IT",
      "about.f3k": "University",
      "about.f4k": "Languages", "about.f4v": "Italian · English B1",
      "about.f5k": "Interests", "about.f5v": "Web · Embedded · Accessibility",

      "projects.title": '<span class="section__num">02.</span> Projects',
      "projects.intro": "A selection from my public GitHub repositories.",
      "proj.smart_t": "Smart Mobility",
      "proj.smart": "Web app for bike and scooter sharing across the urban area of Bari. Three roles — user, operator and public administration — with an interactive map, vehicle booking and unlocking, fleet and maintenance management, and a monitoring dashboard with reports.",
      "tag.grade": "30 cum laude",
      "proj.portfolio_t": "Portfolio Website",
      "proj.portfolio": "This very site: a minimal, accessible personal portfolio in vanilla HTML, CSS and JavaScript, with no frameworks. Light/dark theme, a bilingual IT/EN interface and attention to accessibility (semantic HTML, visible focus, reduced-motion support).",
      "tag.a11y": "Accessibility",
      "proj.net_t": "TCP / UDP Projects",
      "proj.net": "Client-server applications in C for the Computer Networks course, developed as a team: one project over TCP sockets and one over UDP sockets, each with a dedicated application protocol and code portable across Windows, Linux and macOS.",
      "tag.networking": "Networking",
      "proj.bots": 'Two bots that automatically repost the Instagram stories of <code>@cx_food</code>: one on WhatsApp (Node.js, Baileys) and one on Telegram (Python). Both use <code>gallery-dl</code> for scraping, with periodic polling and de-duplication.',
      "proj.weather_t": "E-Paper Weather Station",
      "proj.weather": 'ESP32 firmware that wakes from deep sleep every 15 minutes, connects to WiFi, syncs time over NTP, fetches data from Open-Meteo and renders a weather dashboard on a 7.5" three-colour e-paper display, then goes back to deep sleep.',
      "proj.cta": "More projects and source code are on GitHub.",
      "proj.cta_btn": "All repositories →",

      "skills.title": '<span class="section__num">03.</span> Skills',
      "skills.g1": "Languages",
      "skills.g2": "Frameworks & Technologies",
      "skills.gtools": "Tools",
      "skills.g3": "Domains",
      "skills.g4": "Soft Skills",
      "skills.web": "Web Development",
      "skills.embedded": "Embedded Systems",
      "skills.bots": "Automation & Bots",
      "skills.a11y": "Digital Accessibility",
      "skills.team": "Teamwork",
      "skills.problem": "Problem Solving",
      "skills.customer": "Customer Care",
      "skills.reliable": "Reliability",

      "path.title": '<span class="section__num">04.</span> Journey',
      "path.edu": "Education",
      "path.exp": "Experience",
      "path.e1d": "2024 — present",
      "path.e1t": "BSc in Computer Science & Software Production Technologies",
      "path.e1p": "University of Bari Aldo Moro · Ongoing",
      "path.e2d": "2025 — present",
      "path.e2t": "Assistive Technologies & Digital Accessibility Lab",
      "path.e2p": 'Aletheia · <a href="https://aletheialab.it" target="_blank" rel="noopener noreferrer">aletheialab.it</a>',
      "path.e3t": "IT Technician Diploma",
      "path.e4t": "BLSD Certification",
      "path.x1d": "2024 — present",
      "path.x2t": "Customer Support Agent (inbound)",
      "path.note": "Customer-facing experiences that taught me reliability, time management and attention to people — qualities I bring to my code as well.",

      "contact.title": '<span class="section__num">05.</span> Contact',
      "contact.lead": "I'm open to new opportunities for collaboration, internships and projects. For professional proposals or to learn more about my work, I'll be glad to reply.",
      "contact.btn": "Send me an email",
      "contact.phone": "Phone",
      "contact.copyAria": "Tap to copy the phone number",

      "footer.top": "↑ Back to top"
    }
  };

  var hasTag = /<\/?[a-z][^>]*>/i;

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.it;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in dict)) return;
      var val = dict[key];
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else if (hasTag.test(val)) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    root.setAttribute("lang", lang);

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = lang === "it" ? "EN" : "IT";
      langBtn.setAttribute(
        "aria-label",
        lang === "it" ? "Switch to English" : "Passa all'italiano"
      );
    }
    updateThemeLabel(lang);
  }

  /* ============================================================
     Theme
     ============================================================ */
  function updateThemeLabel(lang) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    var l = lang || root.getAttribute("lang") || "it";
    if (l === "en") {
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    } else {
      btn.setAttribute("aria-label", dark ? "Passa al tema chiaro" : "Passa al tema scuro");
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    updateThemeLabel();
  }

  // Set theme + lang as early as possible (script is deferred, DOM is ready)
  var savedTheme = null, savedLang = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
  try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) {}

  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  var browserLang = (navigator.language || "it").toLowerCase();
  var initialLang = savedLang || (browserLang.indexOf("en") === 0 ? "en" : "it");
  applyLang(initialLang);

  /* ============================================================
     Wire up controls once DOM is ready
     ============================================================ */
  document.addEventListener("DOMContentLoaded", function () {
    // re-apply in case any node wasn't ready
    applyLang(root.getAttribute("lang") || initialLang);

    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      });
    }

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = root.getAttribute("lang") === "it" ? "en" : "it";
        applyLang(next);
        try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
      });
    }

    /* ---------- Mobile navigation ---------- */
    var toggle = document.querySelector(".nav__toggle");
    var menu = document.getElementById("nav-menu");

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", root.getAttribute("lang") === "en" ? "Open menu" : "Apri menù");
      }
    }

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        var en = root.getAttribute("lang") === "en";
        toggle.setAttribute("aria-label", open ? (en ? "Close menu" : "Chiudi menù") : (en ? "Open menu" : "Apri menù"));
      });

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
      });
    }

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- Tap-to-copy (phone) ---------- */
    var copyBtn = document.querySelector(".contact__copy");
    if (copyBtn) {
      var copyValueEl = copyBtn.querySelector(".contact__value");
      var copyRevertId = null;

      copyBtn.addEventListener("click", function () {
        var text = copyBtn.getAttribute("data-copy") || "";
        var original = copyBtn.getAttribute("data-copy") || copyValueEl.textContent;

        function showCopied() {
          var en = root.getAttribute("lang") === "en";
          copyValueEl.textContent = en ? "Copied to clipboard!" : "Copiato negli appunti!";
          copyBtn.classList.add("is-copied");
          if (copyRevertId) clearTimeout(copyRevertId);
          copyRevertId = setTimeout(function () {
            copyValueEl.textContent = original;
            copyBtn.classList.remove("is-copied");
          }, 1800);
        }

        function legacyCopy() {
          try {
            var ta = document.createElement("textarea");
            ta.value = text;
            ta.setAttribute("readonly", "");
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          } catch (e) {}
          showCopied();
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(legacyCopy);
        } else {
          legacyCopy();
        }
      });
    }

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  });
})();
