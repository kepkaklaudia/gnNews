# gnNews

Aplikacja polegać będzie na wyświetlaniu newsów. Źródłem newsów może być dowolne publiczne API, które daje taką możliwość. Możesz też skorzystać z https://newsapi.org/s/poland-news-api

Ekran aplikacji powinien być podzielony na:

- Header
- Menu boczne
- Główny content
- Footer

## Header

Powinien zawierać:

- nazwę naszej wspaniałej aplikacji, która będzie linkiem przekierowującym na główną stronę aplikacji
- przycisk umożliwiający zmianę widoku wyświetlanych newsów (możliwe opcje: lista, kafelki) - do przechowywania stanu wybranej opcji wykorzystaj redux'a
- przycisk, po którego przyciśnięciu otworzy się popup. Niech treścią popupu będzie opis tego, co sprawiło Ci największą trudność w tym zadaniu oraz co sprawiło Ci największą frajdę.

## Menu boczne

Powinno zawierać:

- listę Państw (nie muszą być wszystkie)
- miło będzie zobaczyć flagę danego kraju przed jego nazwą 😉

Kliknięcie na dane Państwo powinno przekierować użytkownika na stronę z newsami dla danego państwa. Niech struktura urla będzie następująca: `/country/[kraj]`

## Główny content

Powinien zawierać newsy w postaci listy bądź kafelek (w zależności od wybranej opcji w headerze).

Lista powinna zawierać takie pozycje jak: tytuł, nazwa źródła oraz data publikacji

Kafelki powinny zawierać dodatkowo miniaturkę (jeżeli występuje) oraz zajawkę.

Kliknięcie na danego newsa powinno otworzyć popupa z jego treścią, a także autorem oraz urlem do strony, skąd dany news został pobrany.

## Footer

Powinien zawierać:

- aktualną godzinę
- liczbę artykułów, które są wyświetlane w głównym contencie

## Zadanie dodatkowe

Jeżeli masz jeszcze chwilę czasu i ochoty to dodaj możliwość zmiany języka interfejsu aplikacji. Niech możliwość zmiany języka znajduje się w headerze. Pamiętaj, że nie jest to wymagane, ale może okazać się dodatkowym atutem.
