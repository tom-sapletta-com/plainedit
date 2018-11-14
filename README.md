![img](http://plainedit.com/img/Original_512.png)

http://blog.plainedit.com

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


Edytor ma służyć do edycji treści, które są przechowywane na innych serwerach.

Przykładowe zastosowanie to edycja:

na zdalnym serwerze FTP
repozytorium svn, git, ...
rekordów bazy danych
blogów poprzez API: wordpress, etc.
opisów produktów w sklepach: Magento, ...
społecznościowych: twitter, FB, G+
poczty elektronicznej
Edytor składa się z dwóch części: Napisana w języku PHP:

obsługa połączeń, dostępu do danych
Napisana w JS:

dynamiczna wymiana danych poprzez AJAX


TODO list
copying file from home folder
solutions based on jQuery-UI at the first time
Move sentence by xpath address
JSON map for it
history for changes (JSON)
AJAX for connection with server JS + PHP




Tom:
---
My IDEA:
We can split the project for many short parts, than each developer can do own part from whole project.
The project base on OOP, so I try use dot for separated the app, and i'm try implementing first steps:

Whole project should be as private, beacuse, we need some, what works on all website, without troubles.


external libraries, which are necessary for this aplication
---
````
PlainEdit.vendor
PlainEdit.vendor.jQuery
PlainEdit.vendor.prototype
````


internal libraries, which are necessary for this aplication
---
````
PlainEdit.lib
PlainEdit.lib.calc.3d
PlainEdit.lib.calc.2d
PlainEdit.lib.currency
PlainEdit.lib.service

````

Application - controllers used by user - way for use this application
---
````
PlainEdit.app
PlainEdit.app.set
PlainEdit.app.test #testing of application
````

What is a different beetween app and model?
You can use .min (compressed) version of app, and app can be support by libraries like (jQuery, prototype, etc)
model is only data model, and when you use


All data which use application and user
---
````
PlainEdit.data 
PlainEdit.data.browser 
PlainEdit.data.source
PlainEdit.data.cache
PlainEdit.data.translate = { 'button' } #.en / pl/ /de
````


Models for validation PlainEdit.data
---
````
PlainEdit.model.config # model of data for set/get data 
PlainEdit.model.source # model of data for CRUD data from external servers based on many services
PlainEdit.model.source.http
PlainEdit.model.source.ftp
PlainEdit.model.source.soap
PlainEdit.model.source.rest
PlainEdit.model.source.api

PlainEdit.model # for all models with are used for change data on document
PlainEdit.model.doc # class for set type of doc (xml, html, yaml, txt, etc)
PlainEdit.model.doc.html
PlainEdit.model.doc.html

PlainEdit.model.data.text # class for get/set/replace/remove/transformation/translation text from html
PlainEdit.model.data.image # class for get/set/resize/cut images from html
PlainEdit.model.data.color 
PlainEdit.model.data.config # 

PlainEdit.model.data.test #testing
````

Skins
---
````
PlainEdit.skin # layer of wiev 
PlainEdit.skin.button
PlainEdit.skin.window
PlainEdit.skin.message

````

EXAMPLE:
----
````
/*
PE = PlainEdit;
a = app;
m = model;
l = library;
v = vendor;
s = skin;
*/

PE.app.edit.text = 
{
  $ = PlainEdit.vendor.jQuery;
  translate = PlainEdit.lib.translate;
  $( PE.data.uri )
  
  
  PlainEdit.skin.button.text = PlainEdit.app.translate.get('edit');
  
  if( PlainEdit.skin.button.status )
  {
    PlainEdit.skin.message.add('OK');
  }
  
}


PlainEdit.model.text = 
{
  set
  get
  del
}

PlainEdit.model.button = 
{
  label = PlainEdit.model.text;
  title = PlainEdit.model.text;
  description = PlainEdit.model.text;
}




