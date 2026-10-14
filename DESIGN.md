---
name: Manuel De Stefano, PhD
description: Curriculum personale bilingue come tavola neobrutalista, con la carriera disegnata come diagramma a barre nel tempo.
colors:
  ground: "#f4f4f1"
  ink: "#111111"
  paper: "#ffffff"
  muted: "#45453f"
  rule-dashed: "#c9c9c2"
  cobalt: "#2b4bff"
  lime: "#c6f432"
  orange: "#ff5a1f"
  on-cobalt-soft: "#e4e8ff"
  on-ink-soft: "#d6d6cf"
typography:
  display:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  figure-title:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 30px)"
    fontWeight: 900
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(21px, 2vw, 26px)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  plate:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 22px)"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  mono-date:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 700
  mono-axis:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
spacing:
  page-gutter: "clamp(16px, 4vw, 64px)"
  section: "clamp(64px, 8vw, 104px)"
  grid: "32px"
  card-y: "22px"
  card-x: "24px"
  cluster: "14px"
  chip-gap: "8px"
components:
  box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  plate-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.none}"
    padding: "5px 14px"
  btn:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  btn-hover:
    backgroundColor: "{colors.lime}"
  btn-active:
    backgroundColor: "{colors.orange}"
  lang-switch:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  chip:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2px 10px"
  job-header-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    padding: "22px 24px"
  job-header-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    padding: "22px 24px"
  job-header-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    padding: "22px 24px"
  timeline-bar:
    height: "34px"
    rounded: "{rounded.none}"
  grade-badge:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "2px 12px"
  level-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "0 12px"
---

# Design System: Manuel De Stefano, PhD

## Overview

**Creative North Star: "La tavola di laboratorio"**

Il sito è un curriculum stampato su una tavola neobrutalista. Il fondo è carta grezza (ground), il disegno è inchiostro nero. Ogni contenuto sta in un riquadro con bordo nero di 3px e un'ombra piena, sfalsata, senza sfocatura. La pagina non usa gradienti, angoli arrotondati o trasparenze.

Tre colori pieni portano un significato fisso, come la legenda di un grafico. Il cobalto indica la ricerca e l'università. Il lime indica i dati. L'arancio indica l'AI. Lo stesso colore lega la barra del diagramma, la card dell'esperienza e il gruppo di competenze. Chi legge impara il codice una volta e lo ritrova ovunque.

La densità è quella di un documento: testo a 18px, righe fino a 66–76 caratteri, sezioni ben separate. Il segno distintivo è il diagramma della carriera: barre colorate su un asse degli anni, con una linea arancio per "oggi".

**Key Characteristics:**
- Riquadri bianchi con bordo nero 3px e ombra piena 8px 8px.
- Angoli sempre vivi, mai arrotondati.
- Tre colori con significato fisso: cobalto ricerca, lime dati, arancio AI.
- Archivo 900 compresso per i titoli, JetBrains Mono solo per date e assi.
- Interazione "a pressione": l'elemento scivola sulla propria ombra.

## Colors

Una carta chiara e un inchiostro quasi nero, con tre colori saturi usati come codice e non come decorazione.

### Primary
- **Cobalto di ricerca** (cobalt): ricerca, dottorato e università. Colora la barra e la card del dottorato, il gruppo "Analisi quantitativa", la parola "PhD" nel nome, la cornice del ritratto e il voto di laurea. Sul cobalto il testo è bianco; il testo secondario usa il tono chiaro on-cobalt-soft.

### Secondary
- **Lime dati** (lime): lavoro sui dati. Colora la barra e la card del Data Engineer e il gruppo "Dati e cloud". Su lime il testo è sempre inchiostro.

### Tertiary
- **Arancio AI** (orange): lavoro sull'AI. Colora la barra e la card dell'AI Software Engineer, il gruppo "Intelligenza artificiale" e la targa del ruolo nel primo schermo. Su arancio il testo è sempre inchiostro.

### Neutral
- **Carta grezza** (ground): fondo della pagina, fondo dei chip, testo sulle lastre d'inchiostro.
- **Inchiostro** (ink): testo, bordi, ombre, quadratini degli elenchi, fondo del piè di pagina e del badge di livello linguistico.
- **Foglio** (paper): fondo dei riquadri.
- **Grafite** (muted): testo secondario (ente, seconda frase dell'intro, note, etichette dell'asse).
- **Tratteggio** (rule-dashed): separatori tratteggiati da 2px tra le righe del diagramma e nella barra di navigazione su mobile.
- **Carta su inchiostro** (on-ink-soft): testo secondario nel piè di pagina scuro.

### Named Rules

**La Regola della Legenda.** Nei contenuti cobalto, lime e arancio significano solo ricerca/università, dati e AI. Un nuovo elemento prende un colore solo se appartiene a quell'ambito. Ciò che non appartiene a nessun ambito resta neutro: foglio, carta o lastra d'inchiostro (come il gruppo "Trasversali", con il quadratino bianco).

**La Regola dello Stato.** Fuori dalla legenda i colori servono solo agli stati d'interazione, sempre con lo stesso ruolo. Lime: hover dei bottoni, cambio lingua, selezione del testo, ombra dei bottoni sul fondo scuro. Arancio: pressione dei bottoni, sottolineatura in hover della navigazione, linea "oggi". Cobalto: anello del focus (lime sul fondo scuro).

**La Regola della Lastra Neutra.** Le lastre d'inchiostro (fondo ink, testo ground) non portano significato. Servono a dare peso a un valore, come il livello linguistico.

## Typography

**Display Font:** Archivo (con Helvetica, Arial, sans-serif), variabile 400–900, servito in locale.
**Body Font:** Archivo (stesso file).
**Label/Mono Font:** JetBrains Mono (con ui-monospace, monospace), 500–700, servito in locale.

**Character:** Un grottesco largo e pesante che a 900 diventa un timbro, affiancato da un monospazio tecnico che compare solo dove ci sono numeri da misurare.

### Hierarchy
- **Display** (display): il nome nel primo schermo e la firma del piè di pagina. Interlinea 0.9, `text-wrap: balance`.
- **Headline** (headline): titoli di sezione (Esperienza, Formazione, Competenze, Lingue).
- **Figure title** (figure-title): didascalia del diagramma della carriera.
- **Title** (title): titoli di card (ruolo, titolo di studio). I nomi delle lingue salgono a 900 e `clamp(26px, 3vw, 36px)`.
- **Plate** (plate): testo delle targhe colorate.
- **Body** (body): testo corrente, 17px sotto i 520px. Larghezza massima 66ch per l'intro e 76ch per gli elenchi.
- **Label** (label): bottoni-profilo e voci di navigazione (600–700, 15–17px). Nessun maiuscoletto.
- **Mono date** (mono-date): date delle card e delle barre (12–14px, 700).
- **Mono axis** (mono-axis): anni sull'asse e etichetta "oggi".

### Named Rules

**La Regola del Monospazio.** JetBrains Mono compare solo su date e assi del diagramma. Titoli, etichette, chip e bottoni usano sempre Archivo.

**La Regola della Compressione.** I titoli da 900 hanno sempre tracking negativo (da -0.02em a -0.04em) e interlinea sotto 1. Il testo corrente resta a tracking normale e interlinea 1.6.

## Layout

Una sola colonna centrata, larga al massimo 1312px, con margini laterali fluidi (page-gutter). Le sezioni distano tra loro la misura section. Le griglie interne usano uno spazio fisso di 32px (grid). I riquadri hanno padding di circa 22px in verticale e 24–28px in orizzontale.

Il primo schermo è una griglia a due colonne: ritratto (220–300px) e testo. La card dell'esperienza è divisa in due: testata colorata a sinistra (circa un terzo) e dettagli a destra. Formazione, competenze e lingue usano due colonne uguali.

I punti di rottura sono due:
- **860px**: tutto passa a una colonna. La testata della card va sopra i dettagli. Il diagramma perde la colonna delle etichette e mette l'etichetta sopra la barra. La navigazione va a capo sotto un tratteggio.
- **520px**: il testo scende a 17px, l'ombra dei riquadri scende a 5px, l'asse mostra un anno su due, le date dentro le barre spariscono.

Lo scorrimento verso le ancore è morbido e lascia 24px di margine in alto.

## Elevation & Depth

La profondità è tipografica e meccanica, non luminosa. Il sistema usa solo ombre piene, sfalsate in basso a destra, senza sfocatura e di colore pieno. Non esistono ombre diffuse né livelli tonali.

### Shadow Vocabulary
- **Ombra di tavola** (`box-shadow: 8px 8px 0 #111`): ogni riquadro a riposo. Scende a `5px 5px 0` sotto i 520px.
- **Ombra di sollevamento** (`box-shadow: 10px 10px 0 #111`, con `translate(-2px, -2px)`): card dell'esperienza in hover.
- **Ombra di bottone** (`box-shadow: 4px 4px 0 #111`): bottoni-profilo. Sul fondo scuro diventa `4px 4px 0 #c6f432`.
- **Ombra di interruttore** (`box-shadow: 3px 3px 0 #111`): cambio lingua.
- **Ombra di barra** (`box-shadow: 4px 4px 0 #111`, con `translate(-2px, -2px)`): barra del diagramma in hover o focus.
- **Lampo di arrivo** (`box-shadow: 14px 14px 0 <colore della card>`): card raggiunta da un'ancora, per 1.2s.

### Named Rules

**La Regola della Pressione.** Un elemento cliccabile si preme scivolando sulla propria ombra: trasla di quanto è lunga l'ombra e l'ombra va a zero. Un elemento che porta altrove (card, barra) invece si solleva di 2px e allunga l'ombra.

## Shapes

Tutto è rettangolare con angoli vivi (rounded.none). Il bordo standard è 3px di inchiostro pieno. I chip e i separatori dell'asse usano 2px. I separatori tra righe del diagramma usano 2px tratteggiati in rule-dashed. I punti degli elenchi sono quadrati pieni di 10px; il marcatore dei gruppi di competenze è un quadrato di 16px con bordo 3px. Il ritratto è quadrato, mai ritagliato a cerchio, con bordo 3px dentro una cornice cobalto.

## Components

### Riquadro (box)
Il contenitore base: fondo foglio, bordo 3px, ombra di tavola. Lo usano barra di navigazione, ritratto, diagramma, card di esperienza, formazione e lingue. La tabella delle competenze lo replica e divide le celle con bordi interni da 3px.

### Targa (plate)
Una striscia di colore pieno con bordo 3px e testo 800. Nessuna ombra. Nel primo schermo porta il ruolo su arancio. Il voto di laurea (grade-badge) è una targa cobalto con testo bianco.

### Bottoni (btn)
- **Shape:** rettangolo con bordo 3px, angoli vivi.
- **Primary:** fondo foglio, testo label, freccia SVG di uscita da 14px a destra, ombra di bottone.
- **Hover / Focus:** fondo lime e pressione (traslazione 4px, ombra a zero) in 0.12s. Focus con anello cobalto 3px a 4px di distanza.
- **Active:** fondo arancio.
- **Sul piè di pagina:** bordo carta e ombra lime. Anello di focus lime.
- **Cambio lingua:** un interruttore lime con ombra 3px che si preme nello stesso modo.

### Chip
- **Style:** fondo carta, bordo 2px inchiostro, testo 600 a 14px, angoli vivi.
- **Variante tecnologie:** dentro le card dell'esperienza scende a 13px e peso 500.
- **State:** solo statici, nessuno stato selezionato.

### Card dell'esperienza (job card)
Il riquadro più importante. La testata a sinistra prende il colore della legenda (cobalto, lime o arancio) e contiene ruolo, ente e data in monospazio in fondo. Il lato destro contiene l'elenco a quadratini e i chip delle tecnologie. In hover la card si solleva. Quando un'ancora la raggiunge, l'ombra si colora per un istante del suo colore.

### Diagramma della carriera (timeline)
Il componente firma. Un riquadro con didascalia, asse degli anni in monospazio con tacche da 2px, e una riga per lavoro. Ogni barra è un rettangolo pieno del colore della legenda, bordo 3px, data in monospazio dentro. All'apertura le barre crescono da sinistra (da `scaleX(0.15)`, 0.9s, sfalsate di 0.14s). Una linea arancio da 3px segna "oggi". Ogni riga è un link alla card che condivide il suo colore. L'asse va dal 2020 all'anno dopo la build e si aggiorna a ogni pubblicazione.

### Badge di livello (level-badge)
Una lastra d'inchiostro con testo carta 800 a 20px, allineata a destra nel riquadro della lingua.

### Navigazione
Un riquadro orizzontale: sigla "MDS" a sinistra, sezioni a destra (600, 16px), cambio lingua lime in fondo. In hover la voce si sottolinea in arancio da 3px. Sotto gli 860px le sezioni vanno a capo sotto un tratteggio.

### Motion
Una sola curva per tutto: `cubic-bezier(0.16, 1, 0.3, 1)`. Gli stati durano 0.12s. La crescita delle barre dura 0.9s, il lampo di arrivo 1.2s. Con `prefers-reduced-motion` ogni animazione e transizione si spegne e lo scorrimento torna istantaneo.

## Do's and Don'ts

### Do:
- **Do** chiudere ogni nuovo contenitore in un riquadro: fondo foglio, bordo 3px inchiostro, ombra `8px 8px 0`.
- **Do** assegnare cobalto, lime o arancio solo secondo la legenda: ricerca/università, dati, AI.
- **Do** lasciare neutro (foglio, carta o lastra d'inchiostro) ciò che non appartiene a nessun ambito.
- **Do** mettere testo bianco sul cobalto e testo inchiostro su lime e arancio.
- **Do** usare JetBrains Mono solo per date e assi.
- **Do** far premere gli elementi cliccabili sulla propria ombra, in 0.12s con la curva del sistema.
- **Do** passare a una colonna sotto gli 860px e ridurre l'ombra a 5px sotto i 520px.

### Don't:
- **Don't** arrotondare gli angoli né ritagliare il ritratto a cerchio.
- **Don't** usare ombre sfocate, gradienti o trasparenze.
- **Don't** usare un colore della legenda per decorazione o per un ambito diverso dal suo.
- **Don't** usare il monospazio per titoli, etichette, chip o bottoni.
- **Don't** aggiungere un quarto colore saturo.
