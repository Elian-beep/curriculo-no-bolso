import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { ICurriculum, ISimpleCurriculum } from "../interfaces/ICurriculum";

export const generatePdf = async (curr: ICurriculum) => {
    console.log("gerando pdf");
    let html = `
    <html>

    <body style="
        font-family: Calibri, sans-serif;
        padding: 25px 20px;
      ">
        <h1 style="
            text-align: center;
            font-size: 14pt;
        ">${curr.completeName}</h1>
        <div style="
            border-bottom: 1px solid black;
            margin-bottom: 10px;
        ">
            <span style="
            font-weight: 700;
            font-size: 12pt;
        ">INFORMAÇÕES DE CONTATO</span>
        </div>
        <div style="
                display: flex;
                flex-direction: column;
            ">
            <span style="
            font-size: 11pt;
            font-weight: 700;
        ">Telefone: <span style="
            font-weight: 400;
        ">${curr.phone}</span>
            </span>
            <span style="
        font-size: 11pt;
        font-weight: 700;
        ">E-mail: <a href="mailto:${curr.email}">${curr.email}</a> 
            </span>
        `;
    if (curr.linkedin) {
        html += `
            <span style="
            font-size: 11pt;
            font-weight: 700;
            ">Linkedin: <a href="${curr.linkedin}">${curr.linkedin}</a> 
            </span>
        `;
    }

    html += `</div>`;

    html += `
        </body>
        
        </html>
    `;

    const file = await printToFileAsync({
        html: html,
        base64: false,
    });

    await shareAsync(file.uri);
    console.log("finalizado");
}
// import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

// export const generatePdf = async () => {
//     console.log("gerando pdf");

//     // Create a PDF page with text and rectangles
//     const page1 = PDFPage
//         .create()
//         .setMediaBox(200, 200)
//         .drawText('You can add text and rectangles to the PDF!', {
//             x: 5,
//             y: 235,
//             color: '#007386',
//         })
//         .drawRectangle({
//             x: 25,
//             y: 25,
//             width: 150,
//             height: 150,
//             color: '#FF99CC',
//         })
//         .drawRectangle({
//             x: 75,
//             y: 75,
//             width: 50,
//             height: 50,
//             color: '#99FFCC',
//         });

//     const docsDir = await PDFLib.getDocumentsDirectory();
//     const pdfPath = `${docsDir}/curriculobolso.pdf`;
//     PDFDocument
//         .create(pdfPath)
//         .addPages(page1)
//         .write() // Returns a promise that resolves with the PDF's path
//         .then(path => {
//             console.log('PDF created at: ' + path);
//             // Do stuff with your shiny new PDF!
//         });
//         console.log("finalizado");
// }

// import * as pdfMake from 'pdfmake/build/pdfmake.js';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
// import { ICurriculum } from '../interfaces/ICurriculum';

// export const generatePdf = () => {
//     console.log("gerando pdf");

//     (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

//     const currTitle = [];
//     const details = [];
//     const footer = [];

//     const docDefinitios = {
//         pageSize: 'A4',
//         pageMargins: [15, 50, 15, 40],
//         header: [currTitle],
//         content: [details],
//         footer: [footer]
//     }

//     pdfMake.createPdf(docDefinitios).download();
// }