/**
 * Genera i descarrega un fitxer CSV a partir de les dades d'un assaig.
 * @param {string} filename - El nom del fitxer a descarregar (p. ex., "assaig_torsio.csv").
 * @param {string[]} headers - Un array amb els noms de les columnes (p. ex., ["Angle (rad)", "Moment (N·m)"]).
 * @param {{x: number, y: number}[]} data - L'array de punts de dades de la simulació.
 */
function exportDataToCSV(filename, headers, data) {
  // Converteix els headers en una línia de text separada per punt i coma.
  const headerRow = headers.join(';');

  // Converteix cada punt de dada en una línia de text.
  const dataRows = data.map(point => `${point.x.toFixed(4)};${point.y.toFixed(4)}`);

  // Uneix els headers i les dades en un únic contingut CSV.
  const csvContent = [headerRow, ...dataRows].join('\n');

  // Crea un objecte Blob per manejar correctament els caràcters (com accents o 'º').
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Crea un enllaç temporal a la memòria per iniciar la descàrrega.
  const link = document.createElement("a");
  if (link.download !== undefined) { // Comprovació de compatibilitat del navegador
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/**
 * Genera i descarrega un fitxer CSV amb múltiples columnes personalitzades.
 * @param {string} filename - El nom del fitxer a descarregar.
 * @param {string[]} headers - Un array amb els noms de les columnes.
 * @param {object[]} data - L'array d'objectes de dades.
 * @param {function} rowFormatter - Una funció que converteix un objecte de dades en una fila de CSV.
 */
function exportCustomCSV(filename, headers, data, rowFormatter) {
    const headerRow = headers.join(';');
    const dataRows = data.map(rowFormatter);

    const csvContent = [headerRow, ...dataRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
