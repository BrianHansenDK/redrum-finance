import jsPDF from 'jspdf'
import {EN, DE} from '../library/string/Contract'

export function createContractPdf(en: boolean, date: Date, name: string, address: string) {
    const startPoint = 40
    const endPoint = 560
    // New document
    var doc = new jsPDF('p', 'pt')

    // Documment Title
    doc.setFont('Times-Bold', 'bold')
    doc.text(en ? EN.title : DE.title, startPoint, 30)

    // Document info
    doc.setFont('Times-Roman', 'normal')
    doc.setFontSize(10)
    doc.text(en ? EN.info : DE.info, startPoint, 60)

    // Company info
    doc.setFontSize(12)
    doc.text(en ? EN.to : DE.to, startPoint, 100)
    doc.text(en ? EN.company : DE.company, startPoint, 140)
    doc.text(en ? EN.street : DE.street, startPoint, 160)
    doc.text(en ? EN.city : DE.city, startPoint, 180)
    doc.text(en ? EN.country : DE.country, startPoint, 200)
    doc.text('Email: ', startPoint , 240)
    doc.setFont('Times-Bold', 'bold')
    doc.text(en ? EN.email : DE.email, startPoint + 60, 240)

    // Statement
    doc.setFont('Times-Roman', 'normal')
    doc.setFontSize(8)
    doc.text(en ? EN.statement1 : DE.statement1, startPoint, 280)
    doc.text(en ? EN.statement2 : DE.statement2, startPoint, 300)

    // Date
    doc.setFontSize(12)
    doc.text(
      en ? `${EN.ordered_on} ${
        date.toDateString().split(' ').slice(1).join(' ')
      } / ${EN.recieve_on} _______________________` :
      `${DE.ordered_on} ${
        date.toDateString().split(' ').slice(1).join(' ')
      } / ${DE.recieve_on} _______________________`,
      startPoint,
      340)

    // Line Break
    doc.setFont('Times-Bold', 'bold')
    doc.line(startPoint, 380, endPoint, 380)
    doc.line(startPoint, 381, endPoint, 381)
    doc.line(startPoint, 382, endPoint, 382)
    doc.line(startPoint, 383, endPoint, 383)

    // Consumer information
    // Name
    doc.setFont('Times-Roman', 'normal')
    doc.text( en ? EN.c_name : DE.c_name, startPoint, 430)
    doc.setFont('Times-Bold', 'bold')
    doc.setFontSize(14)
    doc.text(name, startPoint + 20, 450)
    // Address
    doc.setFontSize(12)
    doc.setFont('Times-Roman', 'normal')
    doc.text( en ? EN.c_address : DE.c_address, startPoint, 480)
    doc.setFont('Times-Bold', 'bold')
    doc.setFontSize(14)
    doc.text(address, startPoint + 20, 500)

    // Signature
    // Lines
    doc.line(startPoint, 580, startPoint + 80, 580)
    doc.line(140, 580, 400, 580)
    // Text
    doc.setFontSize(8)
    doc.setFont('Times-Roman', 'normal')
    doc.text(en ? EN.dt : DE.dt, startPoint + 5, 590)
    doc.text(en ? EN.sig : DE.sig, 145, 590)

    // Lines
    // Line Break
    doc.setFont('Times-Bold', 'bold')
    doc.line(startPoint, 640, endPoint, 640)
    doc.line(startPoint, 641, endPoint, 641)
    doc.line(startPoint, 642, endPoint, 642)
    doc.line(startPoint, 643, endPoint, 643)

    // Ending
    // Text
    doc.setFontSize(12)
    doc.setFont('Times-Roman', 'normal')
    doc.text(en ? EN.cross : DE.cross, startPoint, 680)
    // Lines
    doc.setFont('Times-Bold', 'bold')
    doc.line(startPoint, 770, endPoint, 770)
    doc.line(startPoint, 771, endPoint, 771)
    doc.line(startPoint, 772, endPoint, 772)
    doc.line(startPoint, 773, endPoint, 773)

    // Save Pdf
    doc.save(en ? `withdrawal_formular_${name.split(' ').join('_').toLowerCase()}.pdf` :
    `muster_widerrufsformular_${name.split(' ').join('_').toLowerCase()}.pdf`)
}

export default createContractPdf
