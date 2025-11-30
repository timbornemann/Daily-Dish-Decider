# TODO-Übersicht: Daily Dish Decider

## Arbeitsliste zur Vervollständigung des Projekts

---

## 🔴 KRITISCH - SOFORT UMSETZEN

### 1. Mobile App Entwicklung
**Was fehlt:** Native mobile App für Android und iOS  
**Wo:** Komplette Plattform-Migration  
**Wie umsetzen:**
- Entscheidung treffen: Flutter, React Native oder Capacitor
- Projekt-Setup für gewählte Plattform
- Navigation und UI-Komponenten anpassen
- Native Features integrieren (Kamera, Notifications, etc.)
- Build-Prozess für Android und iOS einrichten

**Priorität:** Höchste Priorität - Kernanforderung aus idea.md

---

### 2. Barcode-Scanner
**Was fehlt:** Möglichkeit, Produkte per Barcode zu scannen  
**Wo:** Pantry-Komponente, Add-Item-Flow  
**Wie umsetzen:**
- Barcode-Scanner-Library integrieren (z.B. html5-qrcode für Web, native Plugin für mobile)
- Scanner-UI in Pantry-Komponente einbauen
- Barcode-Feld im Ingredient-Interface hinzufügen
- Gescannte Barcodes mit Produktdatenbank abgleichen (optional: Open Food Facts API)
- Gescannte Produkte automatisch zur Vorratsliste hinzufügen

**Priorität:** Hoch - Wichtige UX-Verbesserung

---

### 3. Push-Benachrichtigungen
**Was fehlt:** Tatsächliche Benachrichtigungen für ablaufende Produkte  
**Wo:** Settings (nur Toggle vorhanden), Background-Service  
**Wie umsetzen:**
- Service Worker für Web oder native Notification-API für mobile
- Background-Job einrichten, der täglich Vorratsliste prüft
- Benachrichtigungen für:
  - Produkte, die in 3 Tagen ablaufen
  - Produkte, die bereits abgelaufen sind
  - Geöffnete Produkte, die nach Öffnungsdatum ablaufen
- Notification-Permissions anfordern
- Benachrichtigungen mit Produktdetails und Aktionen (z.B. "Zur Einkaufsliste hinzufügen")

**Priorität:** Hoch - Wichtige Feature aus idea.md

---

## 🟠 HOCH - NÄCHSTE PHASE

### 4. Lernender Empfehlungsalgorithmus
**Was fehlt:** Intelligente Rezept-Empfehlungen basierend auf Nutzerverhalten  
**Wo:** SwipeDeck-Komponente, neuer Service für Algorithmus  
**Wie umsetzen:**

#### 4.1 Kollaborative Filterung
- Like/Dislike-Daten speichern (bereits vorhanden, aber nicht ausgewertet)
- Nutzer-Profile erstellen basierend auf Präferenzen
- Item-basierte Ähnlichkeiten berechnen (Tanimoto, Log-Likelihood, etc.)
- User-basierte Ähnlichkeiten berechnen (Pearson, Euclid, etc.)
- Ähnliche Rezepte zu gelikten Rezepten vorschlagen

#### 4.2 Reinforcement Learning
- Multi-Armed Bandit Algorithmus implementieren
- Reward-System definieren (Like = +1, Dislike = -1, Kochen = +2)
- Exploration vs. Exploitation Balance (epsilon-greedy Strategie)
- Modell kontinuierlich mit Feedback aktualisieren
- CFRL-Ansatz (Collaborative Filtering + Reinforcement Learning) kombinieren

#### 4.3 Adaptive Phase
- System startet mit kollaborativer Filterung
- Wechselt zu Reinforcement Learning nach genug Daten
- Exploration: Gelegentlich "unerwünschte" Rezepte zeigen
- Exploitation: Meist Rezepte zeigen, die zu Vorlieben passen

**Priorität:** Hoch - Kernfeature aus idea.md

---

### 5. Cloud-Synchronisation
**Was fehlt:** Synchronisation zwischen mehreren Geräten  
**Wo:** Storage-Service, Backend-Integration  
**Wie umsetzen:**
- Backend wählen (Firebase Firestore, Supabase, oder eigene Lösung)
- Authentifizierung implementieren (siehe Punkt 10)
- Daten-Sync-Service erstellen
- Konflikt-Resolution für gleichzeitige Änderungen
- Offline-First Ansatz: Änderungen lokal speichern, dann synchronisieren
- Sync-Status in UI anzeigen

**Priorität:** Hoch - Wichtig für Multi-Device-Nutzung

---

### 6. Berechnung Ablaufdatum nach Öffnung
**Was fehlt:** Automatische Berechnung des Ablaufdatums basierend auf Öffnungsdatum  
**Wo:** Pantry-Komponente, Storage-Service  
**Wie umsetzen:**
- Beim Markieren als "geöffnet": Öffnungsdatum speichern
- Automatisch berechnen: `Ablaufdatum = Öffnungsdatum + daysGoodAfterOpen`
- Dieses berechnete Datum für Benachrichtigungen verwenden
- In UI anzeigen, welches Ablaufdatum gilt (original oder nach Öffnung)
- Wenn Produkt geöffnet wird, originales Ablaufdatum durch berechnetes ersetzen

**Priorität:** Hoch - Wichtige Feature für geöffnete Produkte

---

## 🟡 MITTEL - SPÄTER UMSETZEN

### 7. Foto-Upload für Produkte und Rezepte
**Was fehlt:** Möglichkeit, Fotos zu Produkten und Rezepten hinzuzufügen  
**Wo:** Pantry-Komponente, RecipeCreator, RecipeDetail  
**Wie umsetzen:**
- Foto-Feld im Ingredient und Recipe Interface hinzufügen
- Kamera-API oder File-Upload integrieren
- Bilder in Storage speichern (lokal oder Cloud Storage)
- Bild-Komprimierung für Performance
- In UI anzeigen: Produktbilder in Pantry, Rezeptbilder in Cards und Detailansicht
- Fallback: Placeholder-Bilder wenn kein Foto vorhanden

**Priorität:** Mittel - UX-Verbesserung

---

### 8. Erweiterte automatische Einkaufsvorschläge
**Was fehlt:** Intelligente Vorschläge für "fast leere" oder "häufig gekaufte" Artikel  
**Wo:** ShoppingList-Komponente, neuer Service  
**Wie umsetzen:**
- Algorithmus für "fast leere" Artikel (z.B. < 2 Einheiten)
- Tracking: Wie oft wurde ein Produkt in der Vergangenheit gekauft
- Häufigkeits-Analyse: Produkte, die regelmäßig gekauft werden
- Vorschläge basierend auf:
  - Niedrigem Bestand (nicht nur leer)
  - Kauf-Historie
  - Saisonalität (optional)
- UI: Separater Bereich "Vorschläge" in Einkaufsliste

**Priorität:** Mittel - UX-Verbesserung

---

### 9. Login & Authentifizierung
**Was fehlt:** Benutzer-Accounts und Sicherheit  
**Wo:** Neue Auth-Komponenten, Backend-Integration  
**Wie umsetzen:**
- Authentifizierungs-Service wählen (Firebase Auth, Auth0, oder eigene Lösung)
- Login-Screen erstellen
- Registrierung implementieren
- OAuth-Integration (Google, Apple, etc.)
- Session-Management
- Logout-Funktionalität
- Passwort-Reset
- Daten-Verschlüsselung für sensible Informationen

**Priorität:** Mittel - Voraussetzung für Cloud-Sync

---

### 10. Kategorien in Einkaufsliste gruppieren
**Was fehlt:** Visuelle Gruppierung der Einkaufsliste nach Kategorien  
**Wo:** ShoppingList-Komponente  
**Wie umsetzen:**
- Artikel nach Kategorie gruppieren (wie in Pantry)
- Kategorien als Sektionen anzeigen
- Sortierung: Kategorien alphabetisch oder nach Häufigkeit
- Expandable/Collapsible Kategorien (optional)
- Kategorie-Badges oder Icons

**Priorität:** Mittel - UX-Verbesserung

---

### 11. Vollständiges Ranking im Sudden-Death
**Was fehlt:** Vollständiges Ranking aller Rezepte nach n(n-1)/2 Paarungen  
**Wo:** SuddenDeath-Komponente  
**Wie umsetzen:**
- Aktuell: Nur Gewinner wird bestimmt
- Erweitern: Alle Rezepte werden nach Präferenz sortiert
- Nach jedem Vergleich: Ranking aktualisieren
- Am Ende: Vollständige sortierte Liste anzeigen
- Optional: Ranking speichern für zukünftige Vorschläge

**Priorität:** Mittel - Nice-to-have Feature

---

### 12. Rezepte priorisieren nach fehlenden Zutaten
**Was fehlt:** Rezepte mit weniger fehlenden Zutaten zuerst anzeigen  
**Wo:** SwipeDeck, findMatchingRecipes-Funktion  
**Wie umsetzen:**
- In findMatchingRecipes: Anzahl fehlender Zutaten berechnen
- Sortierung: Rezepte mit 0 fehlenden Zutaten zuerst, dann 1, dann 2, etc.
- In UI: Badge anzeigen "2 Zutaten fehlen"
- Optional: Rezepte mit vielen fehlenden Zutaten ausblenden

**Priorität:** Mittel - UX-Verbesserung

---

## 🟢 NIEDRIG - NICE-TO-HAVE

### 13. Mindestbestand
**Was fehlt:** Mindestbestand pro Produkt, automatische Vorschläge  
**Wo:** Ingredient-Interface, Pantry-Komponente  
**Wie umsetzen:**
- Mindestbestand-Feld im Ingredient-Interface hinzufügen
- In Pantry-UI: Mindestbestand pro Produkt einstellbar
- Automatische Prüfung: Wenn Bestand < Mindestbestand, zur Einkaufsliste hinzufügen
- Visualisierung: Warnung wenn unter Mindestbestand

**Priorität:** Niedrig - Nice-to-have

---

### 14. Datenbank-Migration
**Was fehlt:** Bessere Datenbank für größere Datenmengen  
**Wo:** Storage-Service  
**Wie umsetzen:**
- Von localStorage zu IndexedDB migrieren (für Web)
- Oder SQLite via Capacitor (für mobile)
- Migration-Script für bestehende Daten
- Performance-Optimierungen für große Listen

**Priorität:** Niedrig - Nur bei Performance-Problemen nötig

---

### 15. Barrierefreiheit
**Was fehlt:** Screen Reader Support, ARIA-Labels  
**Wo:** Alle Komponenten  
**Wie umsetzen:**
- ARIA-Labels zu allen interaktiven Elementen hinzufügen
- Semantic HTML verwenden
- Keyboard-Navigation verbessern
- Kontrast-Verhältnisse prüfen
- Screen Reader Testing

**Priorität:** Niedrig - Wichtig für Accessibility, aber nicht kritisch

---

### 16. Community-Funktionen
**Was fehlt:** Soziales Modul, Rezepte teilen  
**Wo:** Neue Komponenten, Backend  
**Wie umsetzen:**
- Rezepte mit anderen Nutzern teilen
- Öffentliche Rezept-Bibliothek
- Like/Dislike für geteilte Rezepte
- Kommentare zu Rezepten
- Follower-System (optional)

**Priorität:** Niedrig - Zukünftige Erweiterung

---

### 17. Gamification
**Was fehlt:** Sammelpunkte, Achievements  
**Wo:** Neue Komponenten, User-Profile  
**Wie umsetzen:**
- Punktesystem für:
  - Neues Rezept ausprobieren
  - Lebensmittelverschwendung reduzieren
  - Regelmäßige Nutzung
- Achievements/Badges
- Leaderboard (optional)
- UI: Punkte-Anzeige, Achievement-Übersicht

**Priorität:** Niedrig - Zukünftige Erweiterung

---

### 18. Performance-Optimierungen
**Was fehlt:** Optimierungen für große Datenmengen  
**Wo:** Alle Listen-Komponenten  
**Wie umsetzen:**
- Virtualisierung für lange Listen (react-window oder ähnlich)
- Lazy Loading für Rezepte
- Bild-Optimierung und Lazy Loading
- Code-Splitting
- Memoization für teure Berechnungen

**Priorität:** Niedrig - Nur bei Performance-Problemen nötig

---

### 19. Offline-Support
**Was fehlt:** App funktioniert offline  
**Wo:** Service Worker, Storage  
**Wie umsetzen:**
- Service Worker für Web-App
- Offline-Daten-Caching
- Queue für Sync-Operationen
- Offline-Indikator in UI
- Konflikt-Resolution bei Sync

**Priorität:** Niedrig - Wichtig für mobile Nutzung

---

### 20. Testing
**Was fehlt:** Unit-Tests und E2E-Tests  
**Wo:** Test-Setup, alle Komponenten  
**Wie umsetzen:**
- Test-Framework einrichten (Jest, Vitest, etc.)
- Unit-Tests für Services und Utilities
- Component-Tests für React-Komponenten
- E2E-Tests für kritische Flows
- CI/CD Integration

**Priorität:** Niedrig - Wichtig für Code-Qualität, aber nicht kritisch

---

## 📋 VERBESSERUNGEN AN BESTEHENDEN FEATURES

### 21. Pantry-Verbesserungen
**Was verbessern:**
- Bessere Suche/Filter in Pantry
- Bulk-Operationen (mehrere Items auf einmal löschen)
- Export-Funktion (CSV, PDF)
- Statistiken (Wie viel wurde ausgegeben, etc.)

**Wo:** Pantry-Komponente

---

### 22. Rezept-Erstellung verbessern
**Was verbessern:**
- Zutaten direkt aus Vorratsliste auswählen (nicht nur Autocomplete)
- Drag & Drop für Schritte-Reihenfolge
- Vorlagen für häufige Rezepte
- Import von Rezepten (URL, Text)

**Wo:** RecipeCreator-Komponente

---

### 23. SwipeDeck-Verbesserungen
**Was verbessern:**
- Filter-Optionen direkt im SwipeDeck (Tags, Schwierigkeit, etc.)
- "Zurück"-Funktion (letztes Rezept wiederholen)
- Swipe-Historie anzeigen
- Favoriten direkt aus SwipeDeck verwalten

**Wo:** SwipeDeck-Komponente

---

### 24. RecipeDetail-Verbesserungen
**Was verbessern:**
- Timer-Integration für Zubereitungsschritte
- Einkaufsliste direkt aus Detailansicht
- Bestand automatisch reduzieren beim "Kochen"-Button
- Nährwert-Informationen anzeigen (optional)

**Wo:** RecipeDetail-Komponente

---

### 25. ShoppingList-Verbesserungen
**Was verbessern:**
- Mengen pro Artikel (nicht nur 1 Einheit)
- Notizen zu Artikeln
- Prioritäten (dringend, normal, später)
- Teilen der Einkaufsliste mit anderen

**Wo:** ShoppingList-Komponente

---

## 📊 PRIORISIERUNG ZUSAMMENFASSUNG

### Phase 1 (Sofort - Kritisch):
1. Mobile App Entwicklung
2. Barcode-Scanner
3. Push-Benachrichtigungen

### Phase 2 (Nächste Phase - Hoch):
4. Lernender Empfehlungsalgorithmus
5. Cloud-Synchronisation
6. Berechnung Ablaufdatum nach Öffnung

### Phase 3 (Später - Mittel):
7. Foto-Upload
8. Erweiterte Einkaufsvorschläge
9. Login & Authentifizierung
10. Kategorien in Einkaufsliste
11. Vollständiges Ranking
12. Rezepte priorisieren

### Phase 4 (Nice-to-have - Niedrig):
13-20. Alle niedrig-priorisierten Features

### Phase 5 (Verbesserungen):
21-25. Bestehende Features optimieren

---

## ✅ CHECKLISTE FÜR JEDES FEATURE

Für jedes Feature sollte folgendes abgearbeitet werden:

- [ ] Datenmodell erweitern (Types/Interfaces)
- [ ] UI-Komponenten erstellen/anpassen
- [ ] Business-Logik implementieren
- [ ] Storage/Backend-Integration
- [ ] Mehrsprachigkeit (DE/EN)
- [ ] Dark Mode Support
- [ ] Error Handling
- [ ] Loading States
- [ ] Testing (optional)
- [ ] Dokumentation (optional)

---

*Erstellt am: 2024*  
*Basierend auf: idea.md und PROJEKTSTATUS.md*

