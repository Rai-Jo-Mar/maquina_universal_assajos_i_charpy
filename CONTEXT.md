# Context del Projecte: Laboratori Virtual d'Assajos

## Objectiu Principal

Crear un conjunt d'eines educatives interactives per al mòdul "Assajos Físics" de Formació Professional. L'objectiu és simular el comportament de màquines d'assaig universals per a diferents tipus de sol·licitacions mecàniques.

## Arquitectura i Tecnologia

- **Frontend**: HTML, CSS i JavaScript (ES6).
- **Frameworks CSS**: [TailwindCSS](https://tailwindcss.com/) utilitzat a través de CDN per a un disseny ràpid i responsiu.
- **Llibreries JavaScript**:
    - [Chart.js](https://www.chartjs.org/) (implícit en alguns fitxers via `<canvas>`) per a la generació de gràfiques dinàmiques.
    - MathJax per renderitzar correctament les fórmules matemàtiques en format LaTeX.
- **Estructura**: Cada assaig (`TRACCIO`, `COMPRESIO`, etc.) és un fitxer HTML independent i autocontingut. No hi ha un procés de *build* ni dependències externes que calgui instal·lar. El codi JavaScript i l'estil CSS estan incrustats dins del mateix fitxer HTML.

## Estructura d'un Fitxer d'Assaig (`.html`)

Cada fitxer HTML es divideix en tres parts principals:

1.  **`<head>`**: Inclou metadades, enllaços als CDNs (Tailwind, MathJax) i estils CSS personalitzats (`<style>`).
2.  **`<body>`**: Conté l'estructura de la interfície d'usuari (UI), organitzada amb classes de TailwindCSS. Es divideix en panells de control, visualització de la màquina i gràfiques/dades.
3.  **`<script>`**: Conté tota la lògica de la simulació en JavaScript.
    - **`materials`**: Un objecte `const` que defineix les propietats físiques de cada material.
    - **`state`**: Un objecte `let` que manté l'estat actual de la simulació (si està corrent, valors actuals, etc.).
    - **`els`**: Un objecte que emmagatzema referències als elements del DOM per a un accés ràpid.
    - **Funcions principals**: `init()`, `startTest()`, `resetTest()`, `testLoop()` (el bucle principal de la simulació), funcions d'actualització de la UI i funcions de dibuixat al `<canvas>`.