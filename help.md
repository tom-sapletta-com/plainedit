PlainEdit
============



TAGI
------------
Tag służy do tworzenia ścieżki do zadania,
określa to czym jest zadanie, np jeśli mam do wykonania kilka zadań o określonej godzinie
rozpoznawanie TAGu,,co może być TAGiem:
 * data, czas, miejsce, nazwa własna
 * wszystko co nie jest poprzedzone znakami: "-","+","?"
ZADANIE jest czasownikiem
TAG rzeczownikiem
DATA (dzień), MIEJSCE POBYTU, kraj

11:00
    gregor
        gregor-montagen
            * email naprawić

18:00 (tag czasu)
    * przygotować kolację
    * sprawdzić emaile

18:00 email


Podczas wpisywania tych danych jest tworzony automatyczny słownik,
który będzie użyty do podpowiadania
    jeśli wpiszę np:
gregor
    * ... to będę miał tutaj podpowiedzi zadań jakie jeszcze nie zostały wykonane z tego projektu


Dane zbiera z już istniejących i pokazuje jakie były wcześniej robione
mogę kliknąć dany projekt i będę miał listę już zrobionych i niezrobionych
popdowiadanie na podstawie ilości zbieżnych tagów, jeśli podam tę samą godzinę to będą te w pierwszej kolejnosći.
Nie jest potrzebny podział na projekty, ponieważ one będą automatycznie generowane:
    gregor
        gregor-montagen.com

ZASTOSOWANIA:
------------
lista zakupów
polecenia dla ludzi
wspólne tworzenie projektów
w przyszłości głosowe tworzenie


tags * time, project
timeline by dataTag

Tworzenie widoków po tagach
View1 = @today @call @tom
Nazwa widoku = co w skład niego wchodzi i w jakiej kolejnosci
Dziś = @Today

@gregor-montagen // czas trawnia projektu
@start @2015-04
@stop @2015-06
@remind @daily

=@gregor-montagen @remind // zwraca co ile ma być powtórka

@2015-04-29
@pawel
@gregor-montagen
* grafika
* strona www
@ja
* @tel do gregora
czy ma fotki * to jest komentarz, moze byc wiecej z rozmowy


@Project1 @Worker


Jak rozpoznać który wiersz jest który:
to treści bo ona jest unikalna dla każdego zadania w grupie i jedynie może się pojawiać w innych grupach
ale nie w tej samej

Integracja w czasie rzeczywistym z innymi użytkownikami
* równoległe tworzenie zadań i aktualizacja


Zadania nie wykonane wczoraj zostają przeniesione na dziś i są widoczne na liscie z tygodnia
@tydzień
@miesiąć

Jak wszystkie zadania w grupie zrobione to
zrobić popdopwiedzi z tagów

Wyciąga wszystkie konteksty z tekstu i gromadzi w tagach:

np gdy zapisane jest wedle Osoby jakiś projekt
to pokazuje osoby w projekcie i ich zadania
wysyła powiadomienia jeśłi nie zrobione, zakładamy jakiś cykl

Może skanować pliki np. z repozytoriuum GITHUB i wklejać do listy todo w kontekscie projektu

Usuwanie to przenosznie do innego BOXu
    dsadasdasd @ostatnia-data @kosz

zamienia to na tagi, yaml

fragmentowanie wyświetlania podsumowania:
    dla dnia
    dla projektu
    dla zaznaczenia
* usuwanie "- "

robienie historii codziennych zdarzeń.
usuwanie poprzednich

PODSTAWOWE PODZIAły
------------
PLANY,PROJEKTY, FINANSE * tematyka * czechboxy
* określanie zasobów czasowych na każde zadanie
* lista przelewow na kazdy miesiac jest w osobnym planie na kazdy miesiac
* jak zostanie jakis przelew wykonany to zostanie powiadomiona osoba
* zapisywanie list do wykonania, ale bez określenia dokłądnego czasu, miesiącami, z dodanymi osobami
* info: ile projektów, zadań wykonanych i do wykonania

Kalendarz działan
------------
* Zakres czasowy, dla kazdego kolorwego okienka, np dla czerwonego na cały tydzien, a zielone na dziś tylko.
* podawanie czasu, ile cos zajmowało, to wykorzystywane potem do statystyk
* zadania zokreśleniem czasu, korzystanie z PLANow,
* dzieki czemu mozna okreslac kto kiedy co ma zrobic
* jak wpisze nazwe projektu to od razu mam podpowiedz z lista nie wykonanych z PLANow
* gdy wszystkie elementy z tego projektu są wykonane, otrzymuje sie powiadomienie na liscie wykonanych
* raoprty z postępow
* informacje o tym ile zostało zadań wykonanych

Zasoby * ludzie, adresy email

interakcja pomiędzy tymi warstwami:
* w projekcie tworzenie warunków,
* jeśli napiszę, ż

"-" nizrobione
"+" zrobione
"  " w poczekalni, brak decyzji


Kontakty
------------
* import
* lista z programu
* reczme
LISTA EMAILI

możłiwosć wysyłania do określonych osób
one mogą edytować w emailu albo wejść na strone
i zmiaana zostanie updateowana u mnie



TEKSTOWE
------------
autouzupełnianie
* tworzenie listy zadań na każdy dzień w tygodniu
* jak się klika
2015] [JULI] [AUG] [SEP] [OKT] [NOV] [DEC] [2016
[1-7] [7-14] [14-21] [21-28] [28-4]
[JAN] [FEB] [MAR] [April] [Mai] [JUN]
[JULI] [AUG] [SEP] [OKT] [NOV] [DEC]
2011#P1 P2 2012 Q1 Q2 Q3 Q4

2013 2015 2016

* możliwość klikania na każdy, przeladowanie strony
* lista zadań tygodniami
* podswietlanie tekstu w textarea


UŻYTKOWNICY
------------

* filtrowanie wg użytkownika, pokazywanie jego zadań
* wysyłanie zadań na miesiąc, tydzien lub dzień


tabela informacja o tagach:
* o ilości zadań
* usunięcie powtórzeń


Multiuserowe działanie,
logowanie
    per projekt, data, wycena


Raporty
------------
sprawdzanie efektywności na podsatwie istniejących zdań każdego dnia
* edytowanie konkretnego arkusza, gdy zamkniety dzień, raport

ZASOBY
------------
tworzenie źródeł danych do analizy zadań
zapisywanie historii o tym co uzytkownik robil
gddzie byl i wyciaganie wnioskow
LOKALIZACJA
    czerpać informacje z lokalizacji,
    zapisywać
LUDZIE * KONTAKTY
    

STATUS
* info o update/loadin/ ktore wiersze byly ostatnio zapistwane i aktualizowane, lampki sie pokazuja na buttonach


DRUKOWANIE
------------
 * QR CODE
 