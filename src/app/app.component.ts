import { Component, VERSION } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  generatePdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }
  }

  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          columns: [
            [
              {
                text: 'trilok',
                style: 'name',
              },
              {
                text: 'Noida',
              },
              {
                text: 'Email : Triloksingh1905@gmail.com',
              },
            ],
          ],
        },
        {
          text: 'Skills',
          style: 'header',
        },
        {
          columns: [
            {
              ul: ['Angular', 'TypeScript', 'Node js'],
            },
          ],
        },
      ],
      info: {
        title: 'name_pdf',
        author: 'trilok',
        subject: 'Pdf Maker',
        keywords: 'Pdf',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline',
        },
        name: {
          fontSize: 16,
          bold: true,
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true,
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true,
        },
        tableHeader: {
          bold: true,
        },
      },
    };
  }
}
