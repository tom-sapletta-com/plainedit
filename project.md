DO ZROBIENIA
============

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
