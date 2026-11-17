// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt, in der Reihenfolge des Rundgangs.
// Zielgruppe: künftige Schulkinder (du-Form, kurze Sätze).
//
// ort        Name des Raums (Überschrift der Infokarte)
// text       Infotext, der nach dem Scannen erscheint
// bild       Foto des Raums (Ordner „bilder“), Querformat 3:2
// suchen     kurzer Hinweis, wo der Aufkleber dieser Station liegt
// richtung   (selten nötig) Pfeil in Grad gegenüber dem Rückseiten-Pfeil drehen, im Uhrzeigersinn:
//            0 = wie auf der Rückseite (Normalfall), 90 = rechts, 180 = zurück, 270 = links. Die letzte Station hat keinen Pfeil.
// frage      Frage zur Station, immer zum Ankreuzen. wie: "fragen" (jemanden vom Lerncampus fragen) oder
//            "schauen" (im Raum umschauen) – davon hängt der Hinweis bei einer falschen Antwort ab.
//            { text: "…", wie: "fragen", auswahl: ["A", "B", "C"], richtig: "B" }
//            Die Reihenfolge der Antworten wird bei jedem Kind zufällig gemischt.
//            Nach zwei falschen Versuchen wird die richtige Antwort gezeigt, damit niemand hängen bleibt.
//
// WEGWEISER (kleine Aufkleber mit orangem Rand, für Wand oder Boden): Beim Scannen erscheint nur der Pfeil, ohne Text,
// und zwar nur, wenn das Kind gerade auf dem Weg zu dieser Station ist (sonst passiert nichts). Der Pfeil zeigt immer in die Richtung,
// die beim Befestigen der Pfeil auf der Rückseite angegeben hat.
//   { nach: 2, wo: "Treppe zum 1. Stock" }   nach = Nummer der Station, zu der er führt; wo = nur für dich (steht auf dem Druckblatt)
//
// Nach jeder Änderung an Stationen oder Wegweisern: python3 bauen.py <ordner schnitzeljagd>
// (erzeugt die Bilder in „targets“, die Erkennungsdatei „targets/stationen.mind“ und das Druck-PDF).

const SCHNITZELJAGD = {
  start: "Folge den runden Aufklebern durch die Schule. An jeder Station lernst du einen Raum kennen. Die Antwort auf die Frage findest du vor Ort heraus.",
  ende: "Du hast alle Stationen gefunden. Zeige diesen Bildschirm hier am Eingang, dann bekommst du eine kleine Überraschung.",
  stationen: [
    {
      ort: "Eingangsbereich",
      text: "Willkommen an der Wascherde. Hier kommen die Kinder jeden Morgen an. Im Lerncampus lernen die Jahrgänge 5 und 6.",
      bild: "bilder/station1.jpg",
      suchen: "Der erste Aufkleber liegt direkt am Eingang.",
      frage: { text: "Die Kinder hier tragen ein Schlüsselband. Frage jemanden vom Lerncampus: Was zeigt seine Farbe?", wie: "fragen", auswahl: ["Die Lieblingsfarbe", "Wie viel Verantwortung man hat", "Die Klasse"], richtig: "Wie viel Verantwortung man hat" }
    },
    {
      ort: "Kunst- und Musikraum",
      text: "Hier wird gemalt, gebaut und Musik gemacht. In Projekten wählen die Kinder selbst, was sie interessiert.",
      bild: "bilder/station2.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt beim Kunst- und Musikraum.",
      frage: { text: "Frage jemanden vom Lerncampus: Wie heißt die Bläser-AG der Wascherde?", wie: "fragen", auswahl: ["Blechbande", "WaschBlech", "Tröten-Team"], richtig: "WaschBlech" }
    },
    {
      ort: "Mensa",
      text: "In der Mensa gibt es Mittagessen. Auch in der Pause ist hier einiges los.",
      bild: "bilder/station3.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt in der Mensa.",
      frage: { text: "Frage jemanden vom Lerncampus: Was darf man in der Pause in der Mensa machen?", wie: "fragen", auswahl: ["Fußball spielen", "Essen, Karten spielen und sich unterhalten", "Schlafen"], richtig: "Essen, Karten spielen und sich unterhalten" }
    },
    {
      ort: "Naturwissenschaften",
      text: "In diesem Raum wird geforscht und experimentiert. Hier gibt es Dinge, die du in keinem anderen Raum findest.",
      bild: "bilder/station4.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt bei den Naturwissenschaften.",
      frage: { text: "Frage jemanden vom Lerncampus: Um welche Tiere kümmert sich eine AG an der Wascherde?", wie: "fragen", auswahl: ["Bienen", "Hühner", "Fische"], richtig: "Bienen" }
    },
    {
      ort: "Lernwelt",
      text: "Die Lernwelt sieht ganz anders aus als ein Klassenzimmer. Hier arbeiten Kinder zusammen.",
      bild: "bilder/station5.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt in der Lernwelt.",
      frage: { text: "Schaue dich um: Worauf kann man in der Lernwelt sitzen?", wie: "schauen", auswahl: ["Nur auf Holzstühlen", "Auf Schaukeln", "Auf Sofas und Sitzkissen"], richtig: "Auf Sofas und Sitzkissen" }
    },
    {
      ort: "Lernflur",
      text: "Auch auf dem Flur wird gelernt. Hier findet jedes Kind einen Platz, der zu ihm passt.",
      bild: "bilder/station6.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt im Lernflur.",
      frage: { text: "Frage jemanden vom Lerncampus: Wann darf man im Flur arbeiten?", wie: "fragen", auswahl: ["In der Pause", "In der Lernzeit", "Nach der Schule"], richtig: "In der Lernzeit" }
    },
    {
      ort: "Lernbüro",
      text: "Im Lernbüro arbeiten die Kinder an ihren Aufgaben, jedes an seinem eigenen Platz. Bevor sie hineingehen, machen sie etwas, das es an anderen Schulen selten gibt.",
      bild: "bilder/station7.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt vor dem Lernbüro.",
      frage: { text: "Schaue dich vor der Glastür um: Was ziehen die Kinder an, bevor sie ins Lernbüro gehen?", wie: "schauen", auswahl: ["Turnschuhe", "Eine Jacke", "Hausschuhe"], richtig: "Hausschuhe" }
    },
    {
      ort: "Inputräume",
      text: "In den Inputräumen erklärt eine Lehrkraft einer Lerngruppe etwas Neues. Für jedes Hauptfach gibt es einen eigenen Raum.",
      bild: "bilder/station8.jpg",
      suchen: "Folge dem Pfeil. Der nächste Aufkleber liegt bei den Inputräumen.",
      frage: { text: "Schaue auf die Türschilder: Für welche Fächer gibt es Inputräume?", wie: "schauen", auswahl: ["Sport, Kunst und Musik", "Deutsch, Mathe und Englisch", "Biologie, Erdkunde und Geschichte"], richtig: "Deutsch, Mathe und Englisch" }
    },
    {
      ort: "Eingangsbereich",
      text: "Du bist wieder am Anfang. Jetzt kennst du die wichtigsten Räume des Lerncampus. Zum Schluss wartet hier eine kleine Überraschung auf dich.",
      bild: "bilder/station9.jpg",
      suchen: "Folge dem Pfeil zurück zum Eingang. Dort liegt der letzte Aufkleber."
    }
  ],
  wegweiser: [
    { nach: 2, wo: "BEISPIEL: Treppe zum Kunst- und Musikraum" },
    { nach: 4, wo: "BEISPIEL: Flur zu den Naturwissenschaften" }
  ]
};
