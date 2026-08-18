# Propostes de Millora i Tasques Pendents

Aquest document recull les idees, suggeriments i tasques a realitzar per millorar el projecte del Laboratori Virtual.

## Idees Generals

- **Unificar Codi Comú**: Refactoritzar el codi JavaScript per extreure funcions comunes (dibuix de gràfiques, exportació a CSV, gestió del DOM) a un fitxer `.js` extern. Això reduiria la duplicació i facilitaria el manteniment.
- **Pàgina d'Inici (Índex)**: Crear un `index.html` que serveixi com a portal principal, amb enllaços i descripcions de cada assaig.
- **Millorar el Model Físic**: Refinar les fórmules de comportament plàstic i de fractura per a ser més precises, especialment en la zona d'estricció (tracció) i ablaniment (compressió).
- **Assaig de Fatiga**: Afegir un nou simulador per a l'assaig de fatiga, aplicant càrregues cícliques.
- **Assaig d'Impacte (Pèndol de Charpy)**: Crear una simulació per a l'assaig de resiliència.

## Suggeriments d'UI/UX

- **Mode Fosc**: Afegir un interruptor per canviar entre un tema clar i un de fosc.
- **Traduccions**: Implementar un sistema senzill per canviar l'idioma de la interfície (p. ex., Valencià / Castellà / Anglès).
- **Ajuda Interactiva**: Afegir icones d'ajuda (?) al costat de cada paràmetre o gràfica que expliquin què significa.
- **Comparació de Materials**: Permetre superposar dues corbes de materials diferents a la mateixa gràfica per comparar-los.

## Tasques de Codi Pendents

- [ ] **Validació d'Entrades**: Assegurar que els valors introduïts per l'usuari als `input` són numèrics i estan dins d'un rang raonable per evitar errors a la simulació.
- [ ] **Optimització del Rendiment**: En assajos llargs, la taula de dades pot créixer molt. Limitar el nombre de files visibles al DOM o utilitzar tècniques de virtualització.
- [ ] **Accessibilitat (a11y)**: Revisar el codi HTML per assegurar que sigui accessible, utilitzant atributs ARIA i semàntica correcta.
- [ ] **Refactoritzar `drawChart()`**: La funció de dibuixar la gràfica es repeteix a cada fitxer. Es podria crear una classe o funció `ChartManager` reutilitzable.

## Per a futures interaccions amb IA

- [ ] Crear un fitxer `api_schema.md` que descrigui breument l'estructura dels objectes `materials` i `state` per a cada tipus d'assaig.