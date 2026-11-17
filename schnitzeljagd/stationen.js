// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt, in der Reihenfolge des Rundgangs.
//
// ort        Name des Raums (Überschrift der Infokarte)
// text       Infotext, der nach dem Scannen erscheint
// bild       Foto des Raums (Ordner „bilder“), Querformat 3:2
// suchen     kurzer Hinweis, wo der Aufkleber dieser Station liegt (erscheint, solange man ihn sucht)
// richtung   Richtung des Pfeils in Grad, im Uhrzeigersinn ab der blauen Spitze des Aufklebers.
//            0 = geradeaus (Normalfall: Aufkleber so kleben, dass die Spitze in Laufrichtung zeigt),
//            90 = rechts, 180 = zurück, 270 = links. Die letzte Station hat keinen Pfeil.
//
// Die Bilder für die Kamera-Erkennung liegen in „targets“ (station1.png …) und sind
// zusammen in „targets/stationen.mind“ übersetzt. Neue Station = neues Bild + neu übersetzen.

const SCHNITZELJAGD = {
  start: "Willkommen am Lerncampus Wascherde! Folgen Sie den runden Aufklebern auf dem Boden – an jeder Station erfahren Sie etwas über unsere Schule.",
  ende: "Sie haben alle Stationen besucht. Vielen Dank für Ihren Besuch – bei Fragen sprechen Sie uns gern an.",
  stationen: [
    { // BEISPIEL
      ort: "Haupteingang",
      text: "Willkommen! Hier beginnt der Rundgang durch den Lerncampus. Der Pfeil zeigt Ihnen den Weg zur nächsten Station.",
      bild: "bilder/station1.jpg",
      suchen: "Der erste Aufkleber liegt direkt am Eingang.",
      richtung: 0
    },
    { // BEISPIEL
      ort: "Lernbüro",
      text: "Im Lernbüro arbeiten die Kinder selbstständig an ihren Aufgaben. Lernbegleiterinnen und Lernbegleiter unterstützen sie dabei.",
      bild: "bilder/station2.jpg",
      suchen: "Folgen Sie dem Pfeil. Der nächste Aufkleber liegt vor dem Lernbüro.",
      richtung: 0
    },
    { // BEISPIEL
      ort: "Aula",
      text: "In der Aula kommen alle zusammen – zu Versammlungen, Aufführungen und Festen.",
      bild: "bilder/station3.jpg",
      suchen: "Folgen Sie dem Pfeil. Der letzte Aufkleber liegt in der Aula."
    }
  ]
};
