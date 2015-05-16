DO ZROBIENIA
============

 PLAINEDIT
  - wprowadzenie zmian
  - instrukcja
  - filmik, krok po kroku
  - testy,
  - renderowanie drzewa i dodanie
  Tworzenie slownikow
trzymanie hasel i udostepnianie poprzez md5
https dla domeny. Szyfrowane dane

WYGLĄD
------------
- zmiana kolorów listy numeracji, w liniach gdzie nie ma tasku 
- dodanie edytowalnego css z automatyzacją pól - CSS FORM i odświeżaniem na bieżąco
- tworzenie pluginów, templatek.

FUNKCJE
------------

 IDEA
 - robienie zadania polega na kliknięciu napisanego i liczy się czas do tyłu.
  i każe się kliknąć jak się

 PŁATNOŚCI
 - płatności, mają przypominać o sobie @remind: 4 day

 
 - przenoszenie zadań do bieżącego dnia, lub przyszłych
 [dziś][jutro][pojutrze]
 
 - układanie treści tygodniami
 
 - jeśli naciśniesz enter, to pobiera porzerdnią linijke i sprawdza jaki level ma
 i duplikuje ten sam elevel w następnej linijce, jeśli wyżej isValue
  - dodanie zakładek tygodni
  - rozliczenia finansowe
  - kolumna obok z mniejszą czcionką z info wg kategorii a nie dni
https://github.com/aziz/PlainTasks
  - zamiana na checkboxy i rozwjane
  - osobno źródło, osobno prezentacja i edycja

 FUNKCJA EVENTÓW 
 - co godzinny monit do raportu - co robisz
 - pytania wczesniej uzgodnione wedlug ktorych sprawdzamy postem i okreslamy kierunek. Co aie udalo. Ustalamy szablon wykonania projektu

Na koniec dnia wystawiamy opinie o tym co aie dzialo i dlaczego z analiza.

- wyświetlać priorytetyzację, żeby można było grupować

- PHP: backend language, multijęzyczność
- PHP: plik z informacją o zmianach, logi , możliwość pobrania przez AJAX
- PHP: autoryzacja, gdzie przechowywane dane do bazy danych?
- PHP: zrobić multiuserów
    + strona logowania
    + baza danych
    + wspoldzielenie niketorych informacji
    + edycja wielu zakładek + udostepnianie czesci lub calosci
    
- pole dodawania zadania, lub zmiany, 
    - z auotuzpełnianiem
    https://jqueryui.com/autocomplete/
    
    - Toolbar: start/stop, następne zadanie
    https://jqueryui.com/button/#toolbar
    
    - menu, ikony z lewej lub prawej
         z podpunktami
    - opcja edycji poszczególnych dni a nie całego tygodnia
    
    
- refaktoryzacja kodu w celu uzyskania kilku odrębnych klas:
    - textarea field
        - zdarzenia
        - dostęp do atrybutów i wartości        
    - abstrakcyjna reprezentacja wartości textarea jako tablica linijek
        * get Tag By Value
        * get Value By Tag
        * getValueAndTagByDay
        * getTagByDay
        * getValuesByDay
        * hasDayValues
        * hasDayTags
        * getValueCurrency
        * isValueCurrency
        * getValueDate
        * isValueDate
        * getValueTime
        * getNextValue
        * getPrevValue
        * isValueTime
        * isTask ( has - + ! ? )
        * isParam - waluta, czas, itp,   + refaktoryzacja: 2h
        * getTaskByTag('SPORT')
        
    class TASK
        task
            tag
            value            
            param: day, time
        getSumParamOfAllTasks( param, tag )
            time, PLAINEDIT 
        
dodawanie i edycja zadań
------------
PODPOWIEDZI
    - wyswietlanie jako HTMl, z kolorowaniem i menu dodatkowym
    - zamiana z elementow powtarzajacych sie do:
        - ANKI de
        - ANKI de
        - online TellMeMore
        - ANKI de
        - online TellMeMore
        =>
        - ANKI de (3)
        - online TellMeMore (2)
        
        
        
MODUŁY
------------
- słownik polski, angielski
    - wykorzystujący już wprowadzone TAGI i dane, kwoty, itd    
- obsługa źródła: bazy danych, polików, ftp, etc
- integracja społecznościowa
- przypomnienia
    - integracja z systemami SMS
- kalendarz
- Możliwość zapisywania do ftp, chmury, mediów społecznosciowych, email, sms, notki głosowe, ogłoszenia itd
- Funkcje, które będą automatyzowały procesy, określały uzależnienia
    - obecna lokalizacja użytkownika
    - czas, miejscowość, dzień, aktualnie wykonywane zadanie
        - currentData()
            - getTask
            - getData
            - getTime
            - getUser
- settings
    - zmiana kolejność wyświetlania od przyszłości do przeszłości i na odwrót 

TAGI
------------
* detekcja: daty, czasu, pieniedzy, sumowanie, odejmowanie
* segregacja po dacie i innych atrybutach


OPCJE NA PRZYSZŁOŚĆ
============
- przeniesienie części kodu związanego z obróbką i w wyszukiwanie w teksćie na serwer PHP
    - przeszukiwanie zadań
- ustawienia: import export i udostępnianie własnych suatwień, profilowanych
- łatwiejsze grupowanie zadań
- archiwizacja danych i przywracanie
- notatki 
    - głosowe
    - foto
    - konwersja z głosu do textu
    - konwersja z tekstu do głosu
    - lokalizacje - mapki
    
- tworzenie galerii z załączonych fotek, które są autoanalizowane,
    np konwersja na diagram lub qrcode

Zakładka przypomnienia
------------
- przypomnienia dla mnie i dla ludzi, poprzez określenie daty, adresata, drogi dotarcia i informacji
