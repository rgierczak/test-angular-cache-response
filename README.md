# TestAngularCacheResponse

Prosty projekcik, przedstawiający istotę oraz jeden ze sposobów cache'owania odpowiedzi z zapytań HTTP. 

# Podstrona 1
Podstrona pierwsza na starcie ładuje dane z zapytania HTTP.
Po naciśnięciu przycisku "Clear cache", przejście na kolejny route spowoduje pobranie danych bezpośrednio z zapytania, gdyż cache został opróżniony.

# Podstrona 2
Podstrona druga ładuje dane z cache'a (jeśli wcześniej zostały tam zapisane, czyli nastąpiło najpierw zapytanie do HTTP do usługi po dane)

# Podstrona 3
Podstrona trzecia zawsze wczytuje dane bezpośrednio z zapytania HTTP.
