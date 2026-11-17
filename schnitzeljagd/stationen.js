// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt, in der Reihenfolge des Rundgangs.
// Zielgruppe: künftige Schulkinder (du-Form, kurze Sätze).
//
// ort        Name des Raums (Überschrift der Infokarte)
// text       Infotext, der nach dem Scannen erscheint
// bild       Foto des Raums (Ordner „bilder“), Querformat 3:2
// richtung   (selten nötig) Pfeil in Grad gegenüber dem Rückseiten-Pfeil drehen, im Uhrzeigersinn:
//            0 = wie auf der Rückseite (Normalfall), 90 = rechts, 180 = zurück, 270 = links. Die letzte Station hat keinen Pfeil.
// frage      Frage zur Station, immer zum Ankreuzen. Kurz halten. wie: "fragen" → über der Frage steht
//            „Frage jemanden vom Lerncampus“; wie: "schauen" → „Schaue dich um“.
//            { text: "…", wie: "fragen", auswahl: ["A", "B", "C"], richtig: "B" }
//            Die Reihenfolge der Antworten wird bei jedem Kind zufällig gemischt.
//
// WEGWEISER (kleine Aufkleber mit orangem Rand, für Wand oder Boden): Beim Scannen erscheint nur der Pfeil, ohne Text,
// (bei einem Wegweiser für einen bestimmten Weg nur, wenn das Kind gerade auf diesem Weg ist). Der Pfeil zeigt immer in die Richtung,
// die beim Befestigen der Pfeil auf der Rückseite angegeben hat.
//   { nach: "alle", wo: "…" }   Wegweiser für alle Wege: zeigt immer den Pfeil – beliebig oft ausdrucken und überall
//                                befestigen, wo es nötig ist (Pfeil auf der Rückseite in Laufrichtung).
//   { nach: 2, wo: "…" }        Wegweiser nur für den Weg zu Station 2 (falls sich Wege kreuzen). wo = nur für dich.
//
// Nach jeder Änderung an Stationen oder Wegweisern: python3 bauen.py <ordner schnitzeljagd>
// (erzeugt die Bilder in „targets“, die Erkennungsdatei „targets/stationen.mind“ und das Druck-PDF).

const SCHNITZELJAGD = {
  start: "Finde die runden Checkpoints und beantworte die Fragen.",
  regel: "Beantworte jede Frage gleich beim ersten Versuch richtig. Nur dann bekommst du am Ende eine kleine Überraschung.",
  ende: "Zeige diesen Bildschirm am Eingang. Dort wartet eine kleine Überraschung.",
  endeTeilweise: "Zeige diesen Bildschirm am Eingang.",
  stationen: [
    {
      ort: "Eingangsbereich",
      text: "Willkommen an der Wascherde. Hier beginnt jeder Schultag.",
      bild: "bilder/station1.jpg",
      frage: { text: "Was zeigt die Farbe des Schlüsselbands?", wie: "fragen", auswahl: ["Die Lieblingsfarbe", "Wie viel Verantwortung man hat", "Die Klasse"], richtig: "Wie viel Verantwortung man hat" }
    },
    {
      ort: "Kunst- und Musikraum",
      text: "Hier wird gemalt, gebaut und Musik gemacht.",
      bild: "bilder/station2.jpg",
      frage: { text: "Wie heißt die Bläser-AG?", wie: "fragen", auswahl: ["Blechbande", "WaschBlech", "Tröten-Team"], richtig: "WaschBlech" }
    },
    {
      ort: "Mensa",
      text: "Hier gibt es Mittagessen.",
      bild: "bilder/station3.jpg",
      frage: { text: "Was darf man in der Pause in der Mensa machen?", wie: "fragen", auswahl: ["Fußball spielen", "Essen und Karten spielen", "Schlafen"], richtig: "Essen und Karten spielen" }
    },
    {
      ort: "Naturwissenschaften",
      text: "Hier wird geforscht und experimentiert.",
      bild: "bilder/station4.jpg",
      frage: { text: "Um welche Tiere kümmert sich eine AG?", wie: "fragen", auswahl: ["Bienen", "Hühner", "Fische"], richtig: "Bienen" }
    },
    {
      ort: "Lernwelt",
      text: "Hier arbeiten die Kinder zusammen.",
      bild: "bilder/station5.jpg",
      frage: { text: "Worauf kann man hier sitzen?", wie: "schauen", auswahl: ["Nur auf Holzstühlen", "Auf Schaukeln", "Auf Sofas und Sitzkissen"], richtig: "Auf Sofas und Sitzkissen" }
    },
    {
      ort: "Lernflur",
      text: "Auch auf dem Flur wird gelernt.",
      bild: "bilder/station6.jpg",
      frage: { text: "Wann darf man im Flur arbeiten?", wie: "fragen", auswahl: ["In der Pause", "In der Lernzeit", "Nach der Schule"], richtig: "In der Lernzeit" }
    },
    {
      ort: "Lernbüro",
      text: "Hier hat jedes Kind seinen eigenen Arbeitsplatz.",
      bild: "bilder/station7.jpg",
      frage: { text: "Was ziehen die Kinder vor dem Lernbüro an?", wie: "schauen", auswahl: ["Turnschuhe", "Eine Jacke", "Hausschuhe"], richtig: "Hausschuhe" }
    },
    {
      ort: "Inputräume",
      text: "Hier lernen die Kinder in Inputs neue Inhalte.",
      bild: "bilder/station8.jpg",
      frage: { text: "In welchen Fächern gibt es Inputs?", wie: "fragen", auswahl: ["Sport, Kunst und Musik", "Deutsch, Mathe und Englisch", "Biologie, Erdkunde und Geschichte"], richtig: "Deutsch, Mathe und Englisch" }
    },
    {
      ort: "Eingangsbereich",
      text: "Du bist wieder am Eingang. Jetzt kennst du die wichtigsten Räume.",
      bild: "bilder/station9.jpg"
    }
  ],
  wegweiser: [
    { nach: "alle", wo: "für alle Wege – beliebig oft drucken" }
  ]
};
