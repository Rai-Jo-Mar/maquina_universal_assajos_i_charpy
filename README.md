# Laboratori Virtual d'Assajos de Materials

Aquest projecte és una col·lecció de simuladors web interactius dissenyats per a l'aprenentatge pràctic dels assajos físics de materials. Està orientat a estudiants de Formació Professional (FP) del cicle de **Programació de la Producció en Fabricació Mecànica**, específicament per al mòdul d'**Assajos Físics**.

Cada simulador és un fitxer HTML autocontingut que no requereix instal·lació ni servidor, només un navegador web modern.

## Característiques

- **Simulacions Interactives**: Permet a l'usuari configurar les propietats del material i la geometria de la proveta.
- **Visualització en Temps Real**: Mostra una animació de l'assaig i una gràfica dinàmica (p. ex., Força-Deformació).
- **Adquisició de Dades**: Registra les dades clau de l'assaig en una taula.
- **Exportació a CSV**: Permet descarregar les dades generades per a anàlisis posteriors (p. ex., en un full de càlcul).
- **Multilingüe i Accessible**: Interfície disponible en Valencià, Castellà, Basc, Gallec i Anglès, amb mode fosc i disseny responsiu per a tauletes i mòbils.
- **Tecnologia Senzilla**: Creat amb HTML, CSS (TailwindCSS) i JavaScript modern, sense dependències complexes.

## Simuladors Disponibles

El projecte inclou els següents assajos:

1.  **`maquina universal assajos TRACCIO.html`**: Simula l'estirament d'una proveta fins a la seva fractura, obtenint el diagrama Força-Allargament.
2.  **`maquina universal assajos COMPRESIO.html`**: Simula la compressió d'una proveta (p. ex., de formigó) fins al seu col·lapse.
3.  **`maquina universal assajos FLEXIO.html`**: Simula un assaig de flexió en tres punts sobre una biga simple.
4.  **`maquina universal assajos TORSIO.html`**: Simula la torsió d'un eix fins a la seva fractura, obtenint el diagrama Moment-Angle.
5.  **`CHARPY.html`**: Simula l'assaig d'impacte amb el Pèndol de Charpy per estudiar la transició dúctil-fràgil dels materials a diferents temperatures.
6.  **`FATIGA.html`**: Simula l'aplicació de càrregues cícliques per determinar la vida útil d'un material i construir la corba S-N (Wöhler).

## Com Utilitzar-lo

Obre el fitxer `index.html` per accedir al menú principal. Des d'allà, podràs navegar a qualsevol dels assajos. No es necessita connexió a internet un cop carregada la pàgina.

## Objectiu Pedagògic

Aquesta eina està dissenyada per anar més enllà de la simple observació. L'objectiu és que l'alumnat pugui:

- **Experimentar Lliurement**: Modificar paràmetres (dimensions, materials, temperatura, límits de la màquina) i observar-ne l'efecte immediat en el resultat de l'assaig.
- **Connectar Teoria i Pràctica**: Comprendre la relació entre les propietats teòriques d'un material (Mòdul de Young, límit elàstic) i la forma de la corba experimental obtinguda.
- **Anàlisi de Dades**: Exportar les dades a un full de càlcul per realitzar càlculs posteriors, com el càlcul de mòduls, la identificació de zones (elàstica, plàstica) o la construcció de gràfiques personalitzades.
- **Entendre les Limitacions Reals**: La inclusió de límits de força i parell a les màquines obliga l'estudiant a dissenyar l'assaig (p. ex., triar una proveta adequada) com ho faria en un laboratori real.
- **Interpretar Resultats**: Analitzar els modes de fallada (dúctil vs. fràgil), les corbes de transició o els límits de fatiga.

Per a exemples concrets d'activitats, consulta el fitxer `EXEMPLES_PRACTIQUES.md`.

## Llicència

Aquest projecte es distribueix sota la llicència **GNU General Public License v2.0**. Pots trobar el text complet de la llicència a la capçalera de cada fitxer HTML.
