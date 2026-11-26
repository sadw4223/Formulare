// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt, in der Reihenfolge des Rundgangs.
// Zielgruppe: künftige Schulkinder (du-Form, kurze Sätze).
//
// CHECKPOINTS MIT FRAGE (große Aufkleber Ø 19 cm, blauer Rand), in der Reihenfolge des Rundgangs:
// ort        Name des Raums (Überschrift der Infokarte)
// motiv      Nummer des gedruckten Aufklebers (Muster 1–10), der hier klebt – bleibt beim Umsortieren gleich
// text       Infotext, der nach dem Scannen erscheint
// peilung    Himmelsrichtung in Grad (0 = Nord, 90 = Ost …), in die die Kinder von hier loslaufen. Wird vor Ort
//            mit dem Einmess-Modus gemessen (Adresse mit ?einmessen am Ende) – nicht von Hand ausdenken.
//            Die letzte Station braucht keine.
// warten     (selten nötig) eigene Mindestzeit in Sekunden für diese Station, z. B. warten: 60
// frage      Frage zur Station, immer zum Ankreuzen. Kurz halten.
//            { text: "…", auswahl: ["A", "B", "C"], richtig: "B" }
//            Die Reihenfolge der Antworten wird bei jedem Kind zufällig gemischt.
//
// CHECKPOINTS AUF DEM WEG (Liste „wegweiser“; kleine Aufkleber Ø 12 cm mit orangem Rand, für Wand oder Boden):
// je zwei zwischen zwei Checkpoints, ohne Frage – sie stellen nur den Pfeil neu ein. nach = Nummer des Checkpoints,
// zu dem der Weg führt. Auf dem Druck steht z. B. „Checkpoint auf dem Weg zu „Mensa“ – 1“. Jeder wird eingemessen.
// Gehört er zu einem späteren Weg, steht über dem Scanfenster „Dieser Checkpoint kommt erst später.“
//
// Nach jeder Änderung an Stationen oder Wegweisern: python3 bauen.py <ordner schnitzeljagd>
// (erzeugt die Bilder in „targets“, die Erkennungsdatei „targets/stationen.mind“ und das Druck-PDF).

const SCHNITZELJAGD = {
  start: "Finde die runden Checkpoints und beantworte die Fragen.",
  hilfe: "Unsere Lehrkräfte und die Kinder vom Lerncampus helfen dir gerne!",
  regel: "Am Ziel wartet eine kleine Überraschung auf dich.",
  zielTitel: "Geschafft!",          // groß unter der Medaille am Ziel
  ende: "Zeige diesen Bildschirm hier am Ziel. Dann bekommst du eine kleine Überraschung.",
  endeFett: "Ein Leih-iPad gibst du bitte hier ab.",
  // Mindestzeit an jeder Station in Sekunden (ab dem Scannen). Erst danach gibt es „Weiter“ und den Pfeil.
  // 0 = keine Wartezeit (z. B. 180 = 3 Minuten). Mit ?test am Ende der Adresse sind es höchstens 5 Sekunden.
  warten: 0,
  stationen: [
    {
      ort: "Eingangsbereich", motiv: 1,
      text: "Willkommen an der Wascherde. Hier beginnt der Schultag für die Kinder.",
      frage: { text: "Wie heißt der Schulleiter der Schule an der Wascherde?", auswahl: ["Herr Wellstein", "Herr Seim", "Herr Scherrer"], richtig: "Herr Wellstein" }
    },
    {
      ort: "Mensa", motiv: 3,
      text: "Hier gibt es Mittagessen und Snacks.",
      frage: { text: "Was kann man in der Pause in der Mensa machen?", auswahl: ["Essen, Karten spielen, sich unterhalten", "Am Handy schreiben oder spielen", "Eine Pizza bestellen"], richtig: "Essen, Karten spielen, sich unterhalten" }
    },
    {
      ort: "Aula", motiv: 10,                // neuer Aufkleber Muster 10
      text: "Hier finden manchmal Konzerte unserer Schulband statt.",
      frage: { text: "Wie heißt die Schulband an der Wascherde?", auswahl: ["WaschBlech", "Blechbande", "Tröten-Team"], richtig: "WaschBlech" }
    },
    {
      ort: "Pausenhalle", motiv: 2,          // Aufkleber Muster 2 (klebte früher am Kunst- und Musikraum)
      text: "Hier treffen sich die Kinder in den Pausen.",
      frage: { text: "Um welche Tiere kümmert sich eine AG?", auswahl: ["Bienen", "Hühner", "Fische"], richtig: "Bienen" }
    },
    {
      ort: "Naturwissenschaften", motiv: 4,
      text: "Hier wird geforscht, untersucht und experimentiert.",
      frage: { text: "Wofür steht MINT?", auswahl: ["Mathematik, Informatik, Naturwissenschaften und Technik", "Musik, Informatik, Natur und Turnen", "Ein Kaugummi mit Pfefferminz"], richtig: "Mathematik, Informatik, Naturwissenschaften und Technik" }
    },
    {
      ort: "Lernflur", motiv: 6,
      text: "Auch auf dem Flur wird bei uns gelernt.",
      frage: { text: "Wann darf man im Flur arbeiten?", auswahl: ["In der Lernzeit und während Inputs", "Nur in den Pausen", "Nur vor und nach dem Unterricht"], richtig: "In der Lernzeit und während Inputs" }
    },
    {
      ort: "Lernwelt", motiv: 5,
      text: "Hier arbeiten die Kinder zusammen, lesen oder üben.",
      frage: { text: "Wofür ist die Lernwelt gedacht?", auswahl: ["Für Einzel- und Gruppenarbeiten", "Für Klassenunterricht", "Für handwerkliche Projekte"], richtig: "Für Einzel- und Gruppenarbeiten" }
    },
    {
      ort: "Inputräume", motiv: 8,
      text: "Hier lernen die Kinder in Inputs neue Lerninhalte.",
      frage: { text: "In welchen Fächern gibt es Inputs?", auswahl: ["Deutsch, Mathe und Englisch", "Sport, Kunst und Musik", "Biologie, Erdkunde und Geschichte"], richtig: "Deutsch, Mathe und Englisch" }
    },
    {
      ort: "Lernbüro", motiv: 7,
      text: "Hier hat jedes Kind seinen eigenen Arbeitsplatz.",
      frage: { text: "Wofür sind die Einzelplätze im Lernbüro gedacht?", auswahl: ["Arbeiten an Lernpaketen und Lernzielen", "Blockflöte spielen lernen", "Partnerarbeit an Nachbartischen"], richtig: "Arbeiten an Lernpaketen und Lernzielen" }
    },
    {
      ort: "Ziel", motiv: 9,
      text: "Du hast alle Checkpoints gefunden!"
    }
  ],
  wegweiser: [
    // Die Liste bleibt nach Nummern sortiert (Nummer = gedrucktes Muster); neue Aufkleber kommen hinten dazu.
    { nr: 1, nach: 2 }, { nr: 2, nach: 2 },      // Eingangsbereich → Mensa
    { nr: 3, nach: 3 }, { nr: 4, nach: 3 },      // Mensa → Aula
    { nr: 5, nach: 5 }, { nr: 6, nach: 5 },      // Pausenhalle → Naturwissenschaften
    { nr: 7, nach: 6 }, { nr: 8, nach: 6 },      // Naturwissenschaften → Lernflur
    { nr: 9, nach: 7 }, { nr: 10, nach: 7 },     // Lernflur → Lernwelt
    { nr: 11, nach: 8 }, { nr: 12, nach: 8 },    // Lernwelt → Inputräume
    { nr: 13, nach: 9 }, { nr: 14, nach: 9 },    // Inputräume → Lernbüro
    { nr: 15, nach: 10 }, { nr: 16, nach: 10 },  // Lernbüro → Ziel
    { nr: 17, nach: 4 }, { nr: 18, nach: 4 }     // Aula → Pausenhalle (neu)
  ]
};
