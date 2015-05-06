DO ZROBIENIA
============

WYGLĄD
------------
- zmiana kolorów listy numeracji, w liniach gdzie nie ma tasku 
- dodanie edytowalnego css z automatyzacją pól - CSS FORM i odświeżaniem na bieżąco
- tworzenie pluginów, templatek.

FUNKCJE
------------
- PHP: backend language, multijęzyczność
- PHP: plik z informacją o zmianach, logi , możliwość pobrania przez AJAX

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
