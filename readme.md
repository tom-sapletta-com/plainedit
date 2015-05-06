![img](http://plainedit.com/img/Original_512.png)

http://plainedit.com

- on Start with contextual hint

![img](http://plainedit.com/img/plainedit_sport_400.png)



- In line with editing by cursor

![img](http://plainedit.com/img/plainedit_below_400.png)

- Vertical Menu

![img](http://plainedit.com/img/plainedit_sport_horiz_400.png)


Edytor ma służyć do edycji treści.
Dane mogą być przechowywane pobierane z różnych źródeł i współdzielone pomiędzy użytkownikami.
To coś więcej niż edytor, to narzędziem komunikacyjne, które pozwala na wspólną realizację zadań.

Idea
------------
- Aplikacja ma zastąpić zwykły notatnik, w każdym miejscu:
    - urządzenia mobilne, tablet, urządzenia stacjonarne, wydruk na papierze
- bazowanie na notatniku - synonim prostoty i łatwość obsługi (edycja z klawiatury)
Istotą jest zmiana sposobu podejścia do aplikacji:
    - zamiast użytkownik uczyć się aplikacji 
    - aplikacja uczy się rozumieć treść użytkownika 
        - dzięki analizie danych wprowadzanych przeza użytkownika
- każda nowa treść może być wykorzystana w późniejszym czasie jako:
    - informacja zwrotna, podpowiedź przy tworzeniu nowego zadania
    - powiadomienie gdy zadania nie są wykonane np po tygodniu, gdy jest kilka tych samych.
    - raporty okresowe z:
        - wykonanych zadań,
        - postępów w projektach
        - finansowych bilansów

Zasada działania
------------
- Edycja w trybie tygodniowym
- Zakładki tematyczne podzielone na:
    - tasks
    - ideas
    - projects
    - budget
    - contacts
    - settings
    - help
- kolejność wyświetlania od przyszłości do przeszłości (ewerntualne dostosowanie w pliku konfiguracyjnym)    
- Gdy kursor znajduje się w nowej linii to wyświetlają się wszystkie nie wykonane zadania
- Gdy kursor jest na TAGu, to jest wyświetlana lista zadań

 
Zastosowanie
------------
Przykładowe zastosowanie to edycja:
- na zdalnym serwerze FTP
- repozytorium svn, git, ...
- rekordów bazy danych
- blogów poprzez API: wordpress, etc.
- opisów produktów w sklepach: Magento, ...
- społecznościowych: twitter, FB, G+
- poczty elektronicznej
- lista zakupów
- polecenia dla ludzi
- wspólne tworzenie projektów
- w przyszłości głosowe tworzenie

Technologie
------------
Aplikacja przystosowanie do urządzeń mobilnych.

Edytor składa się z dwóch części:

- Frontend 
    - JS z elementami jQuery (finalnie bez tej biblioteki)
    - własne skrypty i klasy do zarządzania polem TEXTAREA, 
        który w przyszłości będzie odrębną biblioteką a następnie frameworkiem 
- Backend w PHP 
    - biblioteka do renderowania markdown
    - obsługa połączeń, dostępu do danych

Napisana w JS:
- dynamiczna wymiana danych poprzez AJAX


