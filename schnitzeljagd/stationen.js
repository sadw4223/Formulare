// Inhalte der Schnitzeljagd – hier werden alle Stationen gepflegt.
// pfeil: "rechts", "links", "oben", "unten", "zurueck" (zeigt aus dem Plakat heraus = „Drehen Sie sich um“)
//        oder eine Gradzahl (0 = rechts, 90 = oben, 180 = links, 270 = unten, z. B. 45 = schräg rechts oben)
const SCHNITZELJAGD = {
  titel: "Schnitzeljagd am Lerncampus",
  loesungswort: "CAMPUS", // BEISPIEL – ein Buchstabe je Station
  stationen: {
    1: {
      ort: "Haupteingang",
      titel: "Willkommen!",
      text: "Schön, dass Sie da sind. Diese Schnitzeljagd führt Sie in sechs Stationen durch den Lerncampus Wascherde. An jeder Station hängt ein Plakat. Halten Sie Ihr Handy darauf – dann zeigt sich ein Buchstabe und ein Pfeil weist Ihnen den Weg.",
      buchstabe: "C",
      pfeil: "rechts",
      weiter: "Station 2: Lernbüro",
      ziel: false,
      truhe: true // NUR FÜR DEN TEST: Truhe schon an Station 1 zeigen
    },
    6: {
      ort: "Aula",
      titel: "Geschafft!",
      text: "Sie haben alle Stationen gefunden. Stellen Sie die Schatztruhe in Ihren Raum – und holen Sie sich mit dem Lösungswort Ihre kleine Überraschung am Infostand ab.",
      buchstabe: "S",
      pfeil: "zurueck",
      weiter: "Infostand",
      ziel: true
    }
  }
};
