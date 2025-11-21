# Ligjeratat.com - Orari i Mësimeve të Imamëve

Eine moderne, minimalistische Webapp für Kosovo, die Unterrichtstermine von Imamen anzeigt.

## 🎯 Funktionen

- **Übersichtliche Terminliste** - Alle kommenden Unterrichtstermine auf einen Blick
- **Intelligente Filter** - Nach Imam, Thema und Stadt filtern
- **Detailansicht** - Ausführliche Informationen zu jedem Termin
- **Erinnerungen** - Browser-Benachrichtigungen eine Stunde vor dem Termin
- **Responsive Design** - Perfekt auf Smartphones, Tablets und Desktop
- **Kartenintegration** - Direkter Link zu Google Maps für jeden Standort

## 🎨 Design-Prinzipien

- Modern und minimalistisch
- Viel Weißraum für bessere Lesbarkeit
- Sanfte Schatten und runde Ecken
- Große, gut erreichbare Touchflächen
- Klare Typografie
- Schnelle Orientierung ohne Ablenkung

## 🚀 Installation

1. Repository klonen:
```bash
git clone https://github.com/idris-web/Ligjeratat.com.git
cd Ligjeratat.com
```

2. Mit einem lokalen Webserver öffnen (z.B. Live Server in VS Code)
   oder einfach `index.html` im Browser öffnen

## 📱 Verwendung

### Filter verwenden
Nutze die Dropdown-Menüs oben, um nach:
- **Imam** - Bestimmten Gelehrten auswählen
- **Thema** - Nach Unterrichtsthema filtern
- **Stadt** - Nach Standort filtern

### Erinnerungen aktivieren
1. Klicke auf den Erinnerungs-Button bei einem Termin
2. Erlaube Browser-Benachrichtigungen wenn gefragt
3. Du erhältst eine Stunde vor dem Termin eine Benachrichtigung

### Detailansicht
Klicke auf eine Karte, um:
- Vollständige Beschreibung zu lesen
- Standort auf Google Maps zu öffnen
- Erinnerung zu aktivieren

## 🛠️ Technologie-Stack

- **HTML5** - Semantische Struktur
- **CSS3** - Modernes, responsives Design
- **Vanilla JavaScript** - Keine Frameworks, schnell und effizient
- **Browser Notification API** - Für Erinnerungen
- **LocalStorage** - Zum Speichern von Erinnerungen

## 📂 Projektstruktur

```
Ligjeratat.com/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Alle Styles
├── app.js             # JavaScript-Logik
└── README.md          # Diese Datei
```

## 🔄 Daten aktualisieren

Die Beispieldaten befinden sich direkt in `app.js` im Array `scheduleData`.

Für eine Produktionsumgebung sollte dies durch eine API ersetzt werden:

```javascript
// Beispiel für API-Integration
async function fetchSchedule() {
    const response = await fetch('https://api.example.com/schedule');
    const data = await response.json();
    return data;
}
```

### Datenstruktur

Jeder Termin hat folgende Felder:

```javascript
{
    id: 1,                              // Eindeutige ID
    imam: "Hoxhë Name",                 // Name des Imams
    topic: "Thema - Unterthema",        // Unterrichtsthema
    date: "2025-11-22",                 // Datum (YYYY-MM-DD)
    time: "18:00",                      // Uhrzeit (HH:MM)
    city: "Prishtinë",                  // Stadt
    location: "Xhamia e Madhe",         // Moschee/Ort
    description: "Beschreibung...",     // Ausführliche Beschreibung
    image: "📖",                        // Emoji als Platzhalterbild
    mapLink: "https://maps.google.com/..."  // Google Maps Link
}
```

## 🌐 Browser-Unterstützung

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Browser (iOS Safari, Chrome Mobile)

## 📝 Lizenz

Dieses Projekt ist für die muslimische Gemeinschaft in Kosovo erstellt.

## 🤝 Beitragen

Verbesserungsvorschläge und Beiträge sind willkommen!

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/NeuesFunktion`)
3. Committe deine Änderungen (`git commit -m 'Neue Funktion hinzugefügt'`)
4. Push zum Branch (`git push origin feature/NeuesFunktion`)
5. Öffne einen Pull Request

## 📞 Kontakt

Bei Fragen oder Anregungen, bitte ein Issue im Repository erstellen.

---

**Möge Allah diese Arbeit segnen und sie nützlich für die Gemeinschaft machen. Amin.** 🤲
