# Exemples de Pràctiques i Activitats Pedagògiques

Aquest document proposa una sèrie d'activitats i exercicis que es poden realitzar amb el Laboratori Virtual d'Assajos per aprofundir en la comprensió dels materials i els seus comportaments mecànics.

## Assaig de Tracció

### Pràctica 1: Caracterització d'un Material Dúctil

1.  **Objectiu**: Obtenir la corba tensió-deformació completa d'un acer estructural i calcular-ne les propietats principals.
2.  **Configuració**:
    - Material: Acer Estructural (S275)
    - Màquina: 50 kN (Estàndard Laboratori)
    - Probeta: Longitud 100 mm, Diàmetre 10 mm.
3.  **Procediment**:
    - Realitza l'assaig fins a la fractura.
    - Exporta les dades a un fitxer CSV.
4.  **Anàlisi de Dades (en un full de càlcul)**:
    - Representa la gràfica Força (N) vs. Allargament (mm).
    - Representa la gràfica Tensió (MPa) vs. Deformació Unitària (adimensional o %).
    - **Identifica i marca a la gràfica**: Zona elàstica, zona plàstica, límit de fluència, resistència màxima (UTS) i punt de fractura.
    - **Calcula el Mòdul de Young (E)**: Tria dos punts de la zona elàstica i calcula el pendent de la recta (`E = Δσ / Δε`). Compara'l amb el valor teòric (210 GPa).

### Pràctica 2: L'Efecte dels Límits de la Màquina

1.  **Objectiu**: Comprendre per què les dimensions de la proveta s'han d'adequar a la capacitat de la màquina.
2.  **Procediment**:
    - **Intent 1**: Configura l'assaig de la Pràctica 1, però selecciona la màquina de **500 N (Dinamòmetre Educatiu)**. Inicia l'assaig. Què passa? Per què?
    - **Intent 2**: Calcula quin hauria de ser el diàmetre màxim de la proveta d'acer per poder trencar-la amb la màquina de 500 N (considerant que la força màxima serà `F = σ_max * Area`).
    - **Intent 3**: Ajusta el diàmetre a un valor molt petit (p. ex., 1 mm) i repeteix l'assaig amb la màquina de 500 N. Ara funciona?

## Assaig de Compressió

### Pràctica 1: Comportament de Materials Fràgils

1.  **Objectiu**: Comparar la resistència a compressió de diferents materials de construcció.
2.  **Procediment**:
    - Utilitza una proveta estàndard (300x150 mm) i la premsa de 2000 kN.
    - Realitza un assaig per al **Formigó HA-25** i un altre per al **Morter de Ciment**.
    - Anota la tensió màxima (fck) assolida en cada cas.
3.  **Anàlisi**: Compara les corbes obtingudes. Quin material és més resistent? Com és la seva fallada (explosiva, progressiva)?

## Assaig de Flexió

### Pràctica 1: L'Efecte de la Geometria

1.  **Objectiu**: Demostrar com el gruix d'una biga afecta la seva resistència a flexió.
2.  **Procediment**:
    - Selecciona **Fusta de Pi** amb una llum de 200 mm i una amplada de 30 mm.
    - Realitza dos assajos: un amb un gruix (`h`) de **5 mm** i un altre amb un gruix de **10 mm**.
3.  **Anàlisi**:
    - Compara la força màxima suportada en tots dos casos.
    - La fórmula de la tensió és `σ = (3*F*L) / (2*b*h^2)`. Si la resistència del material (σ_max) és constant, la força de trencament (`F`) hauria de ser proporcional a `h^2`. Es compleix aquesta relació aproximadament?

## Assaig de Torsió

### Pràctica 1: Fallada Dúctil vs. Fràgil

1.  **Objectiu**: Observar els diferents modes de fractura en torsió.
2.  **Procediment**:
    - Realitza un assaig amb **Acer F-114** (dúctil). Observa la superfície de fractura a l'animació.
    - Realitza un assaig amb **Fundició Gris** (fràgil). Observa la superfície de fractura.
3.  **Anàlisi**: Descriu les diferències. Per què un material dúctil trenca en un pla transversal (90°) i un de fràgil en un pla helicoïdal (45°)? (Pista: té a veure amb les tensions principals).

## Assaig de Resiliència (Charpy)

### Pràctica 1: Corba de Transició Dúctil-Fràgil

1.  **Objectiu**: Construir la corba de transició per a un acer de baix carboni.
2.  **Procediment**:
    - Selecciona l'**Acer Baix Carboni**.
    - Realitza assajos a diferents temperatures, per exemple: -100°C, -60°C, -20°C, 0°C, 20°C, 60°C, 100°C.
    - Anota l'energia absorbida en cada cas.
3.  **Anàlisi**:
    - Exporta les dades i crea una gràfica Energia Absorbida (J) vs. Temperatura (°C).
    - Identifica la "Temperatura de Transició", la zona de baixa energia (fallada fràgil) i la zona d'alta energia (fallada dúctil).

## Assaig de Fatiga

### Pràctica 1: Construcció d'una Corba S-N

1.  **Objectiu**: Obtenir la corba S-N (Wöhler) per a un aliatge d'alumini.
2.  **Procediment**:
    - Selecciona l'**Aliatge d'Alumini** amb un ratio de tensions **R = -1**.
    - Realitza 3-4 assajos a diferents nivells de **Tensió Màxima** (i per tant, d'amplitud de tensió). Comença amb un valor alt (p. ex., 250 MPa) i ves baixant.
    - La gràfica S-N es construirà automàticament amb els punts obtinguts.
3.  **Anàlisi**: L'alumini presenta un límit de fatiga clar (una zona on la corba es torna horitzontal)? Compara-ho amb el comportament de l'acer.