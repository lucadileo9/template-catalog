
---

# **Template Catalog**

Il **Template Catalog** è un sistema modulare per creare e gestire template Next.js indipendenti (es. siti per pizzerie, centri estetici, ecc.). Ogni template è autosufficiente e può essere personalizzato facilmente.

---

## **Indice**
1. [Installazione](#installazione)
2. [Struttura del Progetto](#struttura-del-progetto)
3. [Come Creare un Nuovo Template](#come-creare-un-nuovo-template)
4. [Come Aggiungere una Pagina/Route](#come-aggiungere-una-paginroute)
5. [Personalizzazione](#personalizzazione)
6. [Alias e Percorsi](#alias-e-percorsi)
7. [Componenti Globali](#componenti-globali)
8. [Automazione con Plop](#automazione-con-plop)

---

## **Installazione**

1. Clona il repository:
   ```bash
   git clone 
   cd template-catalog
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

---

## **Struttura del Progetto**


### **Panoramica**

Il progetto è organizzato in modo modulare per supportare la creazione e la gestione di **template indipendenti** (es. siti per pizzerie, centri estetici, ecc.). Ogni template è autosufficiente e contiene le sue risorse specifiche, mentre alcune risorse sono condivise a livello globale per garantire coerenza e riusabilità.

La struttura si divide in due parti principali:
1. **Cartelle Globali**: Contengono risorse condivise tra tutti i template, come componenti ShadCN, utility globali e configurazioni. 
   - **`app/`**: Cartella principale dell'app Next.js, gestisce il routing e le pagine globali.
     - **`page.tsx`**: Pagina principale del catalogo template.
     - **`[...slug]/page.tsx`**: Carica il template richiesto in base al percorso URL.
   - **`components/`**: Contiene componenti condivisi tra tutti i template.
   - **`config/`**: File di configurazione globale (es. template validi, siti esterni).
   - **`public/`**: Contiene risorse statiche globali e ***sottocartelle per le risorse specifiche di ciascun template.***
   - **`components.json`**: Configurazione ShadCN per componenti UI globali.
2. **Cartelle dei Template**: Contengono risorse specifiche per ciascun template, come pagine, stili e immagini.
    - **`config.js`**: Contiene la configurazione del template, inclusi colori, menu items e logo.
    - **`styles/GlobalStyle.tsx`**: Gestisce i colori dinamici del template tramite variabili CSS (`--primary`, `--secondary`, ecc.).
    - **`app/layout.tsx`**: Definisce il layout del template, inclusi header, footer e altre sezioni comuni.
    - **`app/page.tsx`**: Pagina principale del template.
    - **`public/<nome-template>/`**: Contiene risorse statiche specifiche del template, come immagini o file. SONO NELLA CARTELLA GENERALE
---
### **Struttura Dettagliata**
```
└── lucadileo9-template-catalog/
    ├── README.md                     # Documentazione generale del progetto.
    ├── components.json               # Configurazione ShadCN per componenti UI globali.
    ├── next.config.js                # Configurazione di Next.js (alias, immagini).
    ├── package.json                  # Dipendenze e script del progetto.
    ├── plopfile.js                   # Configurazione Plop per generatori automatici.
    ├── postcss.config.js             # Configurazione PostCSS per Tailwind.
    ├── tailwind.config.js            # Configurazione di Tailwind CSS.
    ├── tsconfig.json                 # Configurazione TypeScript (alias, compilatore).
    ├── .eslintrc.json                # Configurazione ESLint per linting.
    ├── app/                          # Cartella principale dell'app Next.js.
    │   ├── globals.css               # Stili globali con variabili CSS.
    │   ├── layout.tsx                # Layout globale dell'app.
    │   ├── page.tsx                  # Pagina principale del catalogo template.
    │   ├── [...slug]/                # Routing dinamico per i template.
    │   │   └── page.tsx              # Carica il template richiesto.
    │   └── components/               # Componenti locali dell'app.
    │       └── button/               # Esempio di componente locale.
    │           └── index.tsx         # Implementazione del componente.
    ├── components/                   # Componenti condivisi tra tutti i template.
    │   ├── lib/                      # Funzioni di utilità globali.
    │   │   └── utils.ts              # Funzioni comuni (es. date, validazioni).
    │   └── ui/                       # Componenti ShadCN globali.
    │       └── button.tsx            # Componente globale ShadCN (es. pulsante).
    ├── config/                       # Configurazioni globali.
    │   ├── templates.ts              # Array dei template validi (`validTemplates`).
    │   └── external-sites.ts         # File con i siti esterni prodotti.
    ├── public/                       # Risorse statiche globali (es. favicon). 
    │   ├── estetista/                # Risorse specifiche per il template estetista.
    ├── templates/                    # Cartelle dei template indipendenti.
    │   ├── estetista-template/       # Template specifico per un centro estetico.
    │      ├── config.js              # Configurazione del template (colori, menu, logo).
    │      ├── description.md         # Descrizione del template.
    │      ├── plopfile.js            # Configurazione locale di Plop (opzionale).
    │      ├── app/                   # Pagine e layout del template.
    │      │   ├── layout.tsx         # Layout del template.
    │      │   └── page.tsx           # Pagina principale del template.
    │      ├── components/            # Componenti locali del template.
    │      │   └── index.ts           # Esportazione centralizzata dei componenti.
    │      └── styles/                # Stili locali del template.
    │          ├── globals.css        # Stili globali del template.
    │          └── GlobalStyle.tsx    # Gestisce i colori dinamici del template.
    └── .plop/                        # Configurazione di Plop per generatori.
        ├── generators/               # Generatori di Plop.
        │   ├── component.js          # Genera nuovi componenti.
        │   ├── route.js              # Genera nuove pagine/routes.
        │   └── template.js           # Genera nuovi template.
        └── templates/                # Template Handlebars per la generazione.
            ├── component/            # Template per componenti.
            │   ├── component.hbs     # Struttura base del componente.
            │   └── types.hbs         # Tipi TypeScript associati.
            ├── route/                # Template per pagine/routes.
            │   └── page.hbs          # Struttura base di una pagina.
            └── template/             # Template per interi template.
                ├── config.hbs        # File `config.js`.
                ├── description.hbs   # File `description.md`.
                ├── footer.hbs        # Componente Footer.
                ├── globals-css.hbs   # File `globals.css`.
                ├── header.hbs        # Componente Header.
                ├── hero.hbs          # Componente Hero.
                ├── layout.hbs        # Layout del template.
                ├── page.hbs          # Pagina principale del template.
                └── placeholder-image.hbs # Immagine segnaposto.
```
---

## **Come Creare un Nuovo Template**

1. Esegui il comando:
   ```bash
   npm run new-template
   ```

2. Inserisci il nome del template (es. `estetista`).

3. Il sistema genera automaticamente:
   - La struttura del template in `templates/<nome-template>/`.
   - Aggiorna l'array `validTemplates` in `config/templates.ts`.

---

## **Come Aggiungere una Pagina/Route**

1. Esegui il comando:
   ```bash
   npm run new-route
   ```

2. Specifica il nome del template e il nome della route (es. `menu`).

3. Il sistema aggiunge automaticamente:
   - Una nuova pagina nel template selezionato.
   - La route all'array `menuItems` in `config.js`.

---

## **Personalizzazione**

- **Colori e Stili**: Modifica i colori e il menu nel file `config.js` del template.
  ```javascript
  export const templateConfig = {
    colors: { primary: '#3498db', secondary: '#f1c40f' },
    logo: '/images/logo.png',
    menuItems: [
      { label: "Home", link: "/<nome-template>/" },
      { label: "Menu", link: "/<nome-template>/menu" },
    ],
  };
  ```

- **Stili Dinamici**: Usa variabili CSS o classi Tailwind per applicare stili dinamici.
  ```tsx
  <header className="bg-[var(--primary)] text-[var(--secondary)]">
    <nav>
      <a href="/pizzeria" className="text-[var(--secondary)]">Vai al Template</a>
    </nav>
  </header>
  ```

---

## **Alias e Percorsi**

- **Alias Locali**:
  - `@pizzeria/*`: Accede alle risorse del template `pizzeria`.
  - `@estetista/*`: Accede alle risorse del template `estetista`.

- **Alias Globali**:
  - `global-ui/*`: Componenti ShadCN globali (es. pulsanti, dialoghi).
  - `global-utils/*`: Funzioni di utilità globali.

---

## **Componenti Globali**

- I componenti ShadCN sono disponibili in `/components/ui/` e possono essere importati con:
  ```typescript
  import { Button } from 'global-ui/button';
  ```

- Se un template richiede un componente modificato, sovrascrivilo nella sua cartella locale (`templates/<nome-template>/components/ui/`).

---

## **Automazione con Plop**

Plop automatizza la creazione di:
- **Nuovi Template**: `npm run new-template`.
- **Nuove Pagine/Routes**: `npm run new-route`.
- **Nuovi Componenti**: `npm run new-component`.

---

## **Note Finali**

- Non modificare manualmente:
  - La cartella `app/[...slug]/` (gestisce il routing dinamico).

- Usa sempre gli alias per importare risorse locali o globali.

---

Per ulteriori domande o chiarimenti, contatta il team di sviluppo.

--- 
