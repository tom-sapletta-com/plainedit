![img](http://plainedit.com/img/Original_512.png)

http://plainedit.com

Edytor ma służyć do edycji treści, które są przechowywane na innych serwerach.

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


Technologie
------------
Edytor składa się z dwóch części:
Napisana w języku PHP:
 * obsługa połączeń, dostępu do danych

Napisana w JS:
 * dynamiczna wymiana danych poprzez AJAX


Idea
------------

 * polega na zmianie sposobu do użycia samej aplikacji
 * zamiast użytkownik uczyć się aplikacji
 * aplikacjia stara się zrozumieć co wprowadza do systemu użytkownik
 * dzięki analizie danych wprowadzanych przeza użytkownika
 * stare zapiski można użyć
 * każda nowa treść ubogaca i wprowadza nowe możliwości
 * bazowanie na notatniku
 * w zamian otrzymywanie informacji zwrotnych

Zasady
------------
* Jak bede w nowej linii to sie wyswietlają wszystkie nie wykonane zadania
Zrobić pętlę, która będzie szukała w danych i bedzie zwracała
zwrot = funkcja(), warunek
* w pole tekstowe są wpisywane zadania
