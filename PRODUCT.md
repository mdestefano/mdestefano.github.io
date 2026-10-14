# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chi cerca Manuel De Stefano per nome o arriva dai suoi profili: selezionatori, aziende, colleghi, ex colleghi della ricerca. Vogliono capire in pochi secondi chi è, cosa fa oggi e dove trovarlo.

## Product Purpose

Sito personale con funzione di biglietto da visita. Il contenuto principale è il curriculum. Non c'è un'azione principale da spingere (nessuna newsletter, nessun modulo): il sito presenta il profilo e rimanda ai profili esterni.

Successo: il visitatore esce sapendo ruolo attuale, esperienza e formazione, e trova subito il profilo esterno che gli serve.

## Positioning

AI & Data Engineer con dottorato in Informatica (ingegneria del software empirica, Università di Salerno). Il tratto distintivo è il metodo da ricercatore empirico applicato all'AI: raccoglie dati, li analizza con metodi statistici e valida la correttezza degli strumenti di AI con metriche e test sistematici (evals), anche in applicativi ad alta sensibilità.

## Operating Context

Pagina statica consultata soprattutto dopo un primo contatto (candidatura, LinkedIn, articolo scientifico). Visitatori sia italiani sia internazionali.

## Capabilities and Constraints

- Astro 5, pagina singola, build in CI e deploy su GitHub Pages (`.github/workflows/deploy.yml`).
- Bilingue: italiano e inglese, con due versioni dello stesso contenuto.
- Contenuto principale: il curriculum, in versione generale. La fonte è `dist/CV_Manuel_De_Stefano_ENAV.html`, adattata a una candidatura specifica (ENAV): il sito non deve riprenderne il taglio legato a quell'offerta.
- La fonte del curriculum sta in `dist/`, che è ignorata da git e svuotata da ogni build. Va spostata in `src/` o integrata nella pagina prima di lavorarci.
- Contatti pubblici: solo link ai profili (LinkedIn, GitHub, Google Scholar, X). Email e telefono del curriculum non vanno pubblicati.
- La nota sul trattamento dei dati (GDPR) del curriculum serve alle candidature, non al sito.
- Stato attuale: pagina temporanea "in costruzione". La versione precedente (commit 062b893) era centrata su una newsletter: quella direzione è abbandonata.

## Brand Commitments

- Nome: Manuel De Stefano (nel curriculum "Manuel De Stefano, PhD").
- Foto profilo: `public/foto-profilo.png`.
- Tono del curriculum: frasi brevi in prima persona, fattuali, senza enfasi.

## Evidence on Hand

- Esperienza: AI Software Engineer in CINECA (mar 2025 – oggi); Data Engineer in CINECA (set 2023 – mar 2025); dottorando in Informatica all'Università di Salerno (nov 2020 – mar 2024).
- Formazione: dottorato in Informatica (2020–2024); laurea magistrale in Informatica, 110 e lode (2018–2020), entrambi a Salerno.
- Competenze e lingue: elencate nel curriculum (analisi quantitativa, AI, dati e cloud, trasversali; italiano madrelingua, inglese C1).
- Pubblicazioni: solo tramite il profilo Google Scholar. Nessun elenco locale.
- Assenti: newsletter, talk, progetti da mostrare, testimonianze. Non vanno inventati.
- Testo inglese: non esiste ancora. Va tradotto dal curriculum italiano e confermato.

## Product Principles

1. Il curriculum è il contenuto: tutto il resto lo serve.
2. Solo fatti verificabili, nello stesso registro sobrio del curriculum.
3. Il metodo empirico (misurare, testare, validare) è il filo che lega ricerca e lavoro attuale.
4. Nessun dato di contatto privato: il visitatore passa dai profili pubblici.
5. Italiano e inglese hanno pari dignità: stesso contenuto, nessuna versione ridotta.
