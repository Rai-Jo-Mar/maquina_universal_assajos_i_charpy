# Laboratori Virtual d'Assajos de Materials

Aquest projecte és una col·lecció de simuladors web interactius dissenyats per a l'aprenentatge pràctic dels assajos físics de materials. Està orientat a estudiants de Formació Professional (FP) del mòdul d'Assajos Físics.

Cada simulador és un fitxer HTML autocontingut que no requereix instal·lació ni servidor, només un navegador web modern.

## Característiques

- **Simulacions Interactives**: Permet a l'usuari configurar les propietats del material i la geometria de la proveta.
- **Visualització en Temps Real**: Mostra una animació de l'assaig i una gràfica dinàmica (p. ex., Força-Deformació).
- **Adquisició de Dades**: Registra les dades clau de l'assaig en una taula.
- **Exportació a CSV**: Permet descarregar les dades generades per a anàlisis posteriors (p. ex., en un full de càlcul).
- **Tecnologia Senzilla**: Creat amb HTML, CSS (TailwindCSS) i JavaScript pur, sense dependències complexes.

## Simuladors Disponibles

El projecte inclou els següents assajos:

1.  **`maquina universal assajos TRACCIO.html`**: Simula l'estirament d'una proveta fins a la seva fractura, obtenint el diagrama Força-Allargament.
2.  **`maquina universal assajos COMPRESIO.html`**: Simula la compressió d'una proveta (p. ex., de formigó) fins al seu col·lapse.
3.  **`maquina universal assajos FLEXIO.html`**: Simula un assaig de flexió en tres punts sobre una biga simple.
4.  **`maquina universal assajos TORSIO.html`**: Simula la torsió d'un eix fins a la seva fractura, obtenint el diagrama Moment-Angle.

## Com Utilitzar-lo

Simplement obre qualsevol dels fitxers `.html` directament en un navegador web (com Chrome, Firefox, o Edge). No es necessita connexió a internet un cop carregada la pàgina.

## Objectiu Pedagògic

L'objectiu és que l'alumnat pugui:
- Comprendre la relació entre les propietats del material i el seu comportament mecànic.
- Familiaritzar-se amb la forma de les corbes característiques de cada assaig.
- Interpretar els resultats i els modes de fallada (dúctil vs. fràgil).
- Practicar sense necessitat d'accés a un laboratori físic.

## Llicència

Aquest projecte es distribueix sota la llicència **GNU General Public License v2.0**. Pots trobar el text complet de la llicència a la capçalera de cada fitxer HTML.

