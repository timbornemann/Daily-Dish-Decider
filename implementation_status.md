# Abgleich zwischen Idee und aktueller Umsetzung

Dieses Dokument fasst zusammen, welche Punkte aus der **Idea.md** bereits in der App umgesetzt sind, welche nur teilweise vorhanden sind und welche noch fehlen. Die Angaben verweisen auf die relevanten Quellcodedateien.

## Vorrats- und Einkaufsfunktionen
- **Umgesetzt**
  - Manuelles Hinzufügen von Vorratsartikeln mit Kategorien, Mengenfeld und optionalem Ablauf- bzw. Öffnungsdatum. Artikel werden gruppiert, zeigen Verfallsstatus und können als „geöffnet“ markiert werden. Entfernt man die letzte Einheit, wird sie automatisch auf die Einkaufsliste verschoben. 【F:components/Pantry.tsx†L18-L199】【F:components/Pantry.tsx†L206-L306】
  - Einkaufsliste mit Hinzufügen, Abhaken und Löschen von Einträgen; abgehakte Artikel werden per „Checkout“ in den Vorrat übernommen. 【F:components/ShoppingList.tsx†L17-L103】
  - Globale Speicherung aller Listen und Präferenzen in `localStorage`. 【F:services/storage.ts†L6-L63】

- **Teilweise umgesetzt / Lücken**
  - Verfalls- und Öffnungsdaten können erfasst und werden bei Entfernen angezeigt; Erinnerungen laufen aber nur über einen einfachen täglichen Check der Browser-Notification-API und nicht als geplante lokale Push-Benachrichtigungen. 【F:services/notifications.ts†L1-L71】
  - Automatisches Auffüllen der Einkaufsliste passiert nur, wenn der Nutzer eine letzte Einheit löscht; es gibt keine Schwellenwerte für „fast leer“ oder Lernlogik aus Kaufhistorie.
  - Barcode-Scanner, gemeinsame Listen und Cloud-Synchronisation fehlen vollständig.

## Rezeptvorschläge & Swipe-Interface
- **Umgesetzt**
  - Swipe-Deck mit Links/Rechts-Gesten sowie Buttons zum Liken/Disliken; Karten zeigen Tags, Zubereitungszeit und Detail-Link. 【F:components/SwipeDeck.tsx†L22-L156】【F:components/SwipeDeck.tsx†L170-L246】
  - Rezepte werden anhand des Vorrats gefiltert (`findMatchingRecipes`) und anschließend über ein einfaches Empfehlungsmodul nach Geschmacksprofil sortiert (epsilon-greedy). Nutzerinteraktionen aktualisieren das Geschmacksprofil. 【F:components/SwipeDeck.tsx†L35-L65】【F:services/recommendation.ts†L4-L83】
  - Manuelles Nachladen von KI-Rezepten über den „Generate AI“ Trigger. 【F:components/SwipeDeck.tsx†L66-L87】

- **Teilweise umgesetzt / Lücken**
  - Der Empfehlungsalgorithmus nutzt additive Gewichtung pro Tag/Ingredienz; ein echtes hybrides System mit kollaborativer Filterung, Multi-Armed-Bandit-Lernen und CFRL wie in Idea.md beschrieben existiert nicht. 【F:services/recommendation.ts†L4-L83】
  - Exploration vs. Exploitation ist auf einen festen Wert gesetzt und lernt nicht adaptiv.
  - Rezeptfilter: fehlende Zutaten werden zwar erkannt und können zur Einkaufsliste hinzugefügt werden, aber es gibt keine Kategorie-/Ernährungsfilter oder Priorisierung nach „vollständig vorhandenen“ vs. „teilweise fehlenden“ Zutaten.

## „Sudden Death“-Modus
- **Umgesetzt**
  - Paarweiser Vergleich gelikter Rezepte mit visuellem VS-Marker; Gewinner löst Rückruf aus (z. B. für Detailansicht). 【F:components/SuddenDeath.tsx†L12-L87】

- **Lücken**
  - Es wird nur eine fortlaufende Queue genutzt; ein vollständiges Ranking aller Paare (n·(n−1)/2) wie in Idea.md fehlt.
  - Portionseinstellung erfolgt weiterhin nur in der Rezeptdetailansicht, nicht im Entscheidungsfluss (entspricht teilweise der Idee, aber kein klarer Übergang zum Kochen-Workflow).

## Eigene Rezepte & Kochbuch
- **Umgesetzt**
  - Nutzer können eigene Rezepte mit Zutaten, Schritten, Portionen und Schwierigkeitsgrad anlegen; Vorschläge aus dem Vorrat unterstützen die Eingabe. 【F:components/RecipeCreator.tsx†L10-L133】
  - Rezeptbuch fasst lokale und Nutzer-Rezepte zusammen, bietet Suche und Filter nach Quelle/Schwierigkeit sowie Liken/Unliken und Löschen eigener Rezepte. 【F:components/RecipeBook.tsx†L1-L105】

- **Lücken**
  - Kein Foto-Upload für eigene Rezepte; Bilder sind generische Platzhalter (`picsum.photos`).
  - Keine Tag-Verwaltung beim Anlegen (Tags sind fix „User Created“), keine Kategorisierung wie „Frühstück/Pasta/Low Carb“.
  - Keine Synchronisation oder Sharing von Rezepten.

## Detailansicht & Portionsberechnung
- **Umgesetzt**
  - Detailansicht mit Zutatenliste, skalierbaren Portionen und Schritt-für-Schritt-Anleitung; fehlende Zutaten können gesammelt auf die Einkaufsliste gesetzt werden. 【F:components/RecipeDetail.tsx†L12-L116】

- **Lücken**
  - Portionsskalierung ist eine einfache numerische Multiplikation ohne Mengeneinheiten- oder Bruchlogik; kein metrisch/US-Wechsel trotz Einstellungsmöglichkeit.
  - Gewinner aus dem Sudden-Death-Fluss landen zwar in der Detailansicht, aber es gibt keinen speziellen „Kochmodus“ oder Fortschrittsverfolgung.

## Einstellungen & technische Grundlagen
- **Umgesetzt**
  - Theme-, Sprach-, Einheiten- und Ernährungspräferenzen; Geschmacksprofil-Reset und Notification-Toggle (inkl. Berechtigungsabfrage). 【F:components/Settings.tsx†L1-L92】【F:components/Settings.tsx†L180-L222】
  - Lokale Speicherung aller Präferenzen über `StorageService`. 【F:services/storage.ts†L6-L63】

- **Lücken**
  - Kein Backend, keine Nutzerkonten, keine Verschlüsselung oder OAuth wie in der Idee genannt.
  - Notification-Toggle nutzt die Browser-API; es gibt keine plattformspezifischen Push-Benachrichtigungen für Mobile.
  - Die App ist als Web-/Vite-Projekt umgesetzt, nicht als Flutter/React-Native/Kotlin-Multiplatform-App für Android/iOS.

## Datenmodell vs. Idee
- **Umgesetzt**
  - Basisfelder für Zutaten (Name, Kategorie, Menge, Ablaufdatum, Öffnungsdaten), Rezepte (Zutaten, Schritte, Portionen, Tags, Schwierigkeitsgrad), Einkaufsposten und Nutzerpräferenzen. 【F:types.ts†L3-L40】

- **Lücken**
  - Keine Barcode-Felder, Fotos oder Mindestbestände; „Haltbarkeit nach Öffnung“ ist nur optional und ohne automatische Erinnerungslogik.
  - Keine Cloud-Sync-Felder oder Sicherheits-/Privacy-bezogene Strukturen.

## Gesamtfazit
Die aktuelle Web-App bildet Kernideen wie Vorratsverwaltung, Einkaufsliste, Swipe-basierte Rezeptauswahl, Favoriten-Turnier und eine skalierbare Rezeptdetailansicht ab. Zentrale Alleinstellungsmerkmale aus der Idee fehlen jedoch noch: mobile Cross-Platform-Umsetzung, Barcode-Scan, lernende Einkaufs-/Vorratsprognosen, vollwertige kollaborative/RL-Empfehlung, geteilte Listen/Rezepte, Foto-Uploads sowie robuste Push-Benachrichtigungen und Synchronisation.
