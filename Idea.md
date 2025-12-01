Konzept: “Tinder für Essen” – funktionsreiche Einkaufs? und Rezept?App
1. Ziel und Plattformen
* Ziel: Eine mobile Anwendung, die Ihnen und Ihrer Partnerin hilft, aus vorhandenen Lebensmitteln passende Gerichte auszuwählen. Sie präsentiert Gerichte in einem „Swipe?Stil“ (ähnlich Tinder), lernt aus den Vorlieben der Nutzerinnen und bietet eine intelligente Einkaufs? und Vorratsverwaltung.
* Plattformen: Android und iOS. Um nur eine Code?Basis zu pflegen, empfiehlt sich ein modernes Cross?Platform?Framework (Flutter, React Native, Kotlin Multiplatform). Diese Frameworks erlauben die Entwicklung nativer Apps mit einer gemeinsamen Codebasis und bieten Hot?Reload/Hot?Restart, Widgets sowie optimierte Rendering?Engines[1]. Flutter hat z. B. eine reaktive UI und einen integrierten Grafik?Motor, wodurch kein separater UI?Code für Android und iOS nötig ist[2]. Kotlin Multiplatform ermöglicht das Teilen von Logik und UI mit Jetbrains Compose, während React Native eine große Community besitzt[3].
2. Datenmodell
Entität
Beschreibung
Zutat / Produkt
Name, Kategorie, Menge (z. B. Stückzahl, Gewicht), Einheit, Mindestbestand, Haltbarkeitsdatum, "Haltbarkeit nach Öffnung" (in Tagen), Barcode (für Scan), optional Foto.
Rezept
Titel, Liste von Zutaten (mit Menge und Einheit), Zubereitungsschritte, Portionen, Kategorie (z. B. „Pasta“, „Salat“), optional Bild.
Vorlieben?Profil
Pro Nutzer werden gelikte/abgelehnte Rezepte, Häufigkeit, Tageszeit und ggf. Ernährungsvorgaben (vegetarisch, glutenfrei etc.) gespeichert.
Shopping?Item
Produkt, gewünschte Menge, Kategorie und Status (offen/erledigt).
Das Datenmodell wird lokal (SQLite/Room) gespeichert und kann optional mit Cloud?Speicher synchronisiert werden.
3. Hauptfunktionen
3.1 Vorrats? und Einkaufsliste
* Vorratsverwaltung: Eine Liste aller Lebensmittel im Haushalt. Nutzer können Produkte scannen oder manuell hinzufügen. Apps wie „Out of Milk“ und „My Pantry Tracker“ zeigen, dass Barcode?Scanner, benutzerdefinierte Kategorien und das Tracken von Mengen/Verfallsdaten wichtige Bestandteile erfolgreicher Einkaufs?Apps sind[4][5]. In unserer App lassen sich Bestände reduzieren, wenn Zutaten in Rezepten verwendet werden. Erreicht der Bestand den Wert 0, schlägt die App automatisch vor, das Produkt auf die Einkaufsliste zu setzen.
* Automatische Einkaufs?Vorschläge: Die App erkennt „gerade aufgebrauchte, fast leere oder häufig gekaufte“ Artikel und empfiehlt sie für die Einkaufsliste. KitchenPal nutzt ähnliche Funktionen und generiert Vorschläge basierend auf dem Pantry?Bestand[6].
* Geordnete, abhakbare Einkaufslisten: Der Einkaufs?Tab gruppiert Artikel nach Kategorien (z. B. Obst, Fleisch). Benutzer können Mengen anpassen, Artikel abhaken oder löschen und Listen mit anderen Personen teilen. „Out of Milk“ nutzt solche Kategorien für effizientere Einkaufsplanung[7].
* Benachrichtigung bei Ablauf: Verfallsdaten können eingegeben werden; die App erinnert an bald ablaufende Produkte (inspiriert von KitchenPal, das „Alerts before expiry date“ bietet[8]).
* Bestandserhöhung beim Abhaken: Wird ein Artikel auf der Einkaufsliste abgehakt, so interpretiert die App dies als „eingekauft“. Die gekaufte Menge wird automatisch dem Vorratsbestand gutgeschrieben. So bleibt der Bestand stets aktuell, ohne dass der Nutzer ihn manuell anpassen muss.
* Produkt öffnen & Haltbarkeit nach Öffnung: Neben dem allgemeinen Haltbarkeitsdatum kann pro Produkt eine geöffnete Haltbarkeit (z.?B. „nach Öffnen 3 Tage haltbar“) festgelegt werden. Wenn der Nutzer das Produkt „öffnet“, protokolliert die App das Öffnungsdatum. Sie berechnet daraufhin das Ablaufdatum nach Öffnung und erinnert den Nutzer rechtzeitig. Diese Funktion erweitert das Verfallsdaten?System aus KitchenPal, das bereits frühzeitige Alerts vor Ablauf ermöglicht[8].
3.2 Rezept?Empfehlungen und Swipe?Interface
* Rezept?Filter nach Vorratsliste: Die App vergleicht Ihre Vorratsdaten mit der Zutatenliste der gespeicherten Rezepte und schlägt nur Gerichte vor, für die alle Zutaten vorhanden sind. Wenn einige Zutaten fehlen, wird das Rezept trotzdem angezeigt, jedoch mit einem Hinweis auf die fehlenden Artikel; per Schnellaktion kann der fehlende Artikel direkt der Einkaufsliste hinzugefügt werden. KitchenPal unterstützt ähnliche Funktionen – es kann Rezepte nach Zutaten filtern und fehlende Zutaten zum Einkaufswagen hinzufügen[9].
* Tinder?ähnliches Wischen: Die Liste der passenden Gerichte wird als Kartenstapel präsentiert. Nutzer wischen nach rechts (= „mag ich“) oder links (= „nicht jetzt“). Diese Interaktion ist schnell und spielerisch.
* Lernender Vorschlag?Algorithmus: Um die Vorlieben zu erkennen, verwendet die App ein hybrides Empfehlungssystem.
* Startphase: Es nutzt kollaborative und inhaltsbasierte Filterung. Studien zeigen, dass item?basierte und user?basierte Methoden (z. B. Tanimoto?, Log?Likelihood?, Euclid? und Pearson?Ähnlichkeiten) unterschiedliche Vorteile haben[10]. Anfangs hilft die Kombination beider Ansätze, passende Rezepte anhand der Zutaten und anderer Nutzerbewertungen zu finden.
* Adaptive Phase: Das System wechselt zu einem Reinforcement?Learning?Ansatz. Die offene Forschung „CFRL“ (Collaborative Filtering Reinforcement Learning) zeigt, dass eine Kombination aus Reinforcement Learning (Multi?Armed Bandit, Markov?Entscheidungsprozesse) und kollaborativer Filterung zu besseren, anpassungsfähigen Essensvorschlägen führt und latente Nutzergewohnheiten erkennt[11]. CFRL nutzt MDPs und ein Reward?Shaping, das Nutzerbewertungen, Präferenzen und Ernährungsdaten kombiniert[11]. Dieser Ansatz verbessert nachweislich Nutzerzufriedenheit und Ernährungsqualität[12].
* Exploration vs. Exploitation: Der Algorithmus zeigt überwiegend Gerichte, die Ihren Vorlieben entsprechen, aber lässt bewusst gelegentlich „unerwünschte“ bzw. selten gewählte Rezepte erscheinen, um Veränderungen im Geschmack oder neue Gerichte zu erfassen (exploration vs. exploitation). RL?Methoden nutzen hierfür z. B. epsilon?greedy Strategien; das MDPI?Paper beschreibt, wie das System kontinuierlich Feedback nutzt, um sein Modell zu aktualisieren[13].
* Kategorie?Filter: Optional können Sie Tags wie „schnell“, „vegetarisch“ oder „keto“ setzen. Die App berücksichtigt Ihre Einstellungen.
3.3 „Sudden?Death“?Entscheidungs?Modus
* Alle gelikten Gerichte in einem Tab: Nutzer können alle mit „Like“ markierten Rezepte in einer Favoriten?Liste ansehen.
* Paarweiser Ausschluss („Sudden Death“): Wenn Sie sich nicht entscheiden können, startet die App einen Paarvergleichs?Prozess. Das Pairwise?Comparison?Verfahren wird in der Entscheidungstheorie genutzt, um Alternativen zu vergleichen[14]. In jedem Schritt fragt die App: „Magst du lieber Gericht A oder Gericht B?“; das weniger bevorzugte Gericht scheidet aus, bis ein Sieger übrig bleibt. Dieses Verfahren liefert schnell eine Rangfolge und reduziert Entscheidungsmüdigkeit.
* Portionenwahl nur beim Kochen: Die Portionsgröße wird nicht während der Sudden?Death?Vergleiche abgefragt, um den Entscheidungsprozess einfach zu halten. Erst wenn der Nutzer sich für ein Gericht entschieden hat (z. B. Gewinner des Sudden?Death oder manuell gewähltes Rezept), gelangt er in die Detailansicht. Dort kann er die gewünschte Portionenzahl einstellen, und die App skaliert die Zutaten entsprechend[15].
3.4 Eigene Rezepte anlegen
* Zutaten auswählen: Nutzer wählen vorhandene Zutaten aus der Vorratsliste aus, geben Mengen an, schreiben einen Rezept?Text und laden optional ein Foto hoch. Das Rezept wird im lokalen Datenspeicher abgelegt.
* Portions?Berechnung: Für jedes Rezept wird eine Standard?Portionenanzahl gespeichert. In der Detailansicht kann der Nutzer die gewünschte Anzahl an Portionen einstellen, woraufhin die App die Zutatenmengen proportional skaliert. Rezepte?Apps wie Paprika bieten eine ähnliche Funktion: sie können Zutaten automatisch auf eine gewünschte Portionengröße skalieren[15].
* Kategorien & Tags: Beim Anlegen können Tags gesetzt werden (z. B. „Frühstück“, „Pasta“, „Low Carb“) für spätere Filterung.
3.5 Detailansicht, Persistenz & Navigation
* Rezept?Detailansicht: Jede Rezeptkarte verfügt über eine Detailansicht mit Foto, Zutatenliste, Zubereitungsanleitung und der Möglichkeit, die Anzahl der Portionen anzupassen (siehe Paprika?Beispiel[15]). Diese Ansicht bleibt unverändert erreichbar, egal ob das Rezept aus der allgemeinen Übersicht, der Favoritenliste oder als Gewinner des Sudden?Death stammt.
* Zugriffspunkte: Nutzer gelangen in die Detailansicht, indem sie auf eine Rezeptkarte tippen (in der Swipe?Übersicht), ein geliketes Rezept in der Favoritenliste auswählen oder den Gewinner des Sudden?Death anklicken.
* Persistenz der Favoriten: Gelikete Rezepte und Sudden?Death?Gewinner bleiben gespeichert, bis der Nutzer sie explizit löscht oder mit Bestätigung „neu anfangen“ wählt. Dadurch können sie jederzeit erneut angesehen oder gekocht werden.
4. Technischer Aufbau und Architektur
1. Frontend (Cross?Platform):
2. Flutter (Dart) oder React Native (JavaScript/TypeScript) sind empfehlenswert. Flutter bietet Hot?Reload und eine reaktive UI[2]; React Native nutzt native UI?Komponenten und hat eine große Community[3].
3. Kotlin Multiplatform mit Jetpack Compose könnte ebenfalls genutzt werden, wenn Sie bereits Kotlin?Erfahrung haben[16].
4. State?Management & UI: Verwendung eines Provider? oder Bloc?Patterns (Flutter) bzw. Redux/MobX (React Native) zur Verwaltung von Zuständen wie Vorratsdaten, Rezeptlisten, Likes und Shopping?Listen.
5. Datenspeicherung:
6. Lokale DB: SQLite/Room (Flutter: sqflite oder Drift), NoSQL (Hive).
7. Cloud?Sync (optional): Firebase/Firestore oder Supabase für Synchronisation zwischen mehreren Geräten.
8. Barcode?Scanner & Kamera: Nutzung plattformspezifischer APIs (Flutter?Plugins wie barcode_scan2 oder camera). My Pantry Tracker und KitchenPal verwenden Barcode?Scanning, um Artikel schnell hinzuzufügen[5][17].
9. Benachrichtigungen: Lokale Push?Notifications erinnern an ablaufende Lebensmittel oder fehlende Zutaten. Bei geöffneten Produkten basieren die Benachrichtigungen auf der Haltbarkeit nach Öffnung, sodass Nutzer rechtzeitig gewarnt werden.
10. Rezept?Engine & Algorithmen:
11. Indexierung: Rezepte werden nach ihren Zutaten und Kategorien indexiert.
12. Inhaltsbasierte Filterung: Vergleicht die Zutatenlisten mit der Vorratsliste.
13. Collaborative Filtering: Speichert Nutzer?Feedback (Like/Dislike) und identifiziert Muster ähnlich wie im Paper „Machine Learning Based Food Recipe Recommendation System“[10].
14. Reinforcement Learning?Modul: Implementierung eines Multi?Armed?Bandit? oder Deep?Q?Networks (DQN), das gemischte Empfehlungen (exploit/explore) generiert. Das MDPI?Paper beschreibt, dass eine Kombination aus RL und kollaborativer Filterung (CFRL) die Nutzerakzeptanz steigert[11].
15. Pairwise Comparator Modul: Eine Komponente implementiert das Pairwise?Comparison?Verfahren: Es wählt zwei Rezepte aus der Favoriten?Liste, zeigt sie nebeneinander an und speichert das Ergebnis. Nach n(n-1)/2 Paarungen ergibt sich ein vollständiges Ranking[14].
16. User?Profile & Einstellungen: Speicherung individueller Ernährungspräferenzen (vegetarisch, Allergien), Sprache, Maßeinheiten (metrisch/us) und Dark?/Light?Mode (siehe My Pantry Tracker[18]).
17. Sicherheit & Datenschutz: Lokale Daten werden verschlüsselt; Cloud?Sync nutzt TLS. Für Login können OAuth oder E?Mail/PW verwendet werden.
5. Weitere Überlegungen
* Explizite Nutzerkontrolle: Obwohl der Algorithmus Vorschläge macht, bleibt der Nutzer immer Herr der Entscheidung. Er kann Kategorien ausschließen, Rezepte dauerhaft ausblenden oder neue Zutaten hinzufügen.
* Community?Funktionen (optional): Mit der Zeit könnte ein soziales Modul hinzugefügt werden: Nutzer teilen Rezepte, liken Gerichte anderer oder laden Rezepte herunter.
* Gamification: Sammelpunkte für das Ausprobieren neuer Gerichte oder das Reduzieren von Lebensmittelverschwendung.
* Barrierefreiheit: Unterstützung für Screen Reader, große Schaltflächen und farbkontrastreiches Design.
6. Zusammenfassung
Die vorgeschlagene App kombiniert Vorrats? und Einkaufsverwaltung, Swipe?basierte Rezept?Vorschläge und einen selbstlernenden Empfehlungsalgorithmus. Sie nutzt die Vorteile moderner Cross?Platform?Frameworks, um eine konsistente Nutzererfahrung auf Android und iOS zu bieten. Durch den Einsatz eines hybriden Ansatzes aus kollaborativer Filterung und Reinforcement Learning passt sich das System dynamisch an Ihre Präferenzen an und berücksichtigt gleichzeitig neue Geschmacksrichtungen. Ergänzt wird die Lösung durch eine integrierte Einkaufs? und Vorratsliste mit automatischer Bestandserhöhung, anpassbare Portionsberechnung in der Detailansicht, ein Öffnungsdatum?Tracking mit Erinnerungen sowie den Paarvergleichsmodus für schnelle Entscheidungsfindung. Gelikete Rezepte und Sudden?Death?Gewinner bleiben gespeichert, bis Sie diese zurücksetzen – so können Sie jederzeit auf Ihre Favoriten zugreifen. 
