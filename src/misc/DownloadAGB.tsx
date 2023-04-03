import jsPDF from 'jspdf'
export function downloadAGB(en: boolean, filePath: string) {
  var doc = new jsPDF('p', 'pt')
  doc.save('allgemeine_geschäftsbedingungen.pdf')
}
