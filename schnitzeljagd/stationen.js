// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt, in der Reihenfolge des Rundgangs.
// Zielgruppe: künftige Schulkinder (du-Form, kurze Sätze).
//
// ort        Name des Raums (Überschrift der Infokarte)
// text       Infotext, der nach dem Scannen erscheint
// peilung    Himmelsrichtung in Grad (0 = Nord, 90 = Ost …), in die die Kinder von hier loslaufen. Wird vor Ort
//            mit dem Einmess-Modus gemessen (Adresse mit ?einmessen am Ende) – nicht von Hand ausdenken.
//            Die letzte Station braucht keine.
// warten     (selten nötig) eigene Mindestzeit in Sekunden für diese Station, z. B. warten: 60
// frage      Frage zur Station, immer zum Ankreuzen. Kurz halten.
//            { text: "…", auswahl: ["A", "B", "C"], richtig: "B" }
//            Die Reihenfolge der Antworten wird bei jedem Kind zufällig gemischt.
//
// WEGWEISER (kleine Aufkleber mit orangem Rand, für Wand oder Boden), durchnummeriert, jedes Motiv nur einmal aufkleben.
// Beim Scannen erscheint nur der Pfeil, ohne Text. Jeder Wegweiser wird wie die Checkpoints eingemessen.
//   { nr: 3, peilung: 90 }              Wegweiser 3 zeigt nach Osten – egal, zwischen welchen Checkpoints er hängt.
//   { nr: 4, peilung: 180, nach: 6 }    (selten nötig) gilt nur auf dem Weg zu Checkpoint 6, falls an einer Stelle
//                                       zwei Wege in verschiedene Richtungen vorbeiführen.
//
// Nach jeder Änderung an Stationen oder Wegweisern: python3 bauen.py <ordner schnitzeljagd>
// (erzeugt die Bilder in „targets“, die Erkennungsdatei „targets/stationen.mind“ und das Druck-PDF).

const SCHNITZELJAGD = {
  start: "Finde die runden Checkpoints und beantworte die Fragen.",
  regel: "Beantworte jede Frage gleich beim ersten Versuch richtig. Nur dann bekommst du am Ende eine kleine Überraschung.",
  ende: "Zeige diesen Bildschirm am Eingang. Dort wartet eine kleine Überraschung.",
  endeTeilweise: "Zeige diesen Bildschirm am Eingang.",
  // Mindestzeit an jeder Station in Sekunden (ab dem Scannen). Erst danach gibt es „Weiter“ und den Pfeil.
  // 0 = keine Wartezeit (z. B. 180 = 3 Minuten). Mit ?test am Ende der Adresse sind es höchstens 5 Sekunden.
  warten: 0,
  stationen: [
    {
      ort: "Eingangsbereich",
      text: "Willkommen an der Wascherde. Hier beginnt der Schultag für die Kinder.",
      frage: { text: "Wie heißt der Schulleiter der Schule an der Wascherde?", auswahl: ["Herr Wellstein", "Herr Seim", "Herr Scherrer"], richtig: "Herr Wellstein" }
    },
    {
      ort: "Kunst- und Musikraum",
      text: "Hier wird gemalt, gebaut oder Musik gemacht.",
      frage: { text: "Wie heißt die Schulband an der Wascherde?", auswahl: ["WaschBlech", "Blechbande", "Tröten-Team"], richtig: "WaschBlech" }
    },
    {
      ort: "Mensa",
      text: "Hier gibt es Mittagessen und Snacks.",
      frage: { text: "Was kann man in der Pause in der Mensa machen?", auswahl: ["Essen, Karten spielen, sich unterhalten", "Am Handy schreiben oder spielen", "Eine Pizza bestellen"], richtig: "Essen, Karten spielen, sich unterhalten" }
    },
    {
      ort: "Naturwissenschaften",
      text: "Hier wird geforscht, untersucht und experimentiert.",
      frage: { text: "Um welche Tiere kümmert sich eine AG?", auswahl: ["Bienen", "Hühner", "Fische"], richtig: "Bienen" }
    },
    {
      ort: "Lernwelt",
      text: "Hier arbeiten die Kinder zusammen, lesen oder üben.",
      frage: { text: "Wofür ist die Lernwelt gedacht?", auswahl: ["Für Einzel- und Gruppenarbeiten", "Für Klassenunterricht", "Für handwerkliche Projekte"], richtig: "Für Einzel- und Gruppenarbeiten" }
    },
    {
      ort: "Lernflur",
      text: "Auch auf dem Flur wird bei uns gelernt.",
      frage: { text: "Wann darf man im Flur arbeiten?", auswahl: ["In der Lernzeit und während Inputs", "Nur in den Pausen", "Nur vor und nach dem Unterricht"], richtig: "In der Lernzeit und während Inputs" }
    },
    {
      ort: "Lernbüro",
      text: "Hier hat jedes Kind seinen eigenen Arbeitsplatz.",
      frage: { text: "Wofür sind die Einzelplätze im Lernbüro gedacht?", auswahl: ["Arbeiten an Lernpaketen und Lernzielen", "Lesen und Schreiben lernen", "Partnerarbeit an Nachbartischen"], richtig: "Arbeiten an Lernpaketen und Lernzielen" }
    },
    {
      ort: "Inputräume",
      text: "Hier lernen die Kinder in Inputs neue Lerninhalte.",
      frage: { text: "In welchen Fächern gibt es Inputs?", auswahl: ["Deutsch, Mathe und Englisch", "Sport, Kunst und Musik", "Biologie, Erdkunde und Geschichte"], richtig: "Deutsch, Mathe und Englisch" }
    },
    {
      ort: "Eingangsbereich",
      text: "Du bist wieder am Eingang. Jetzt kennst du die wichtigsten Räume.",
    }
  ],
  wegweiser: [
    { nr: 1 }, { nr: 2 }, { nr: 3 }, { nr: 4 }, { nr: 5 },
    { nr: 6 }, { nr: 7 }, { nr: 8 }, { nr: 9 }, { nr: 10 }
  ]
};
