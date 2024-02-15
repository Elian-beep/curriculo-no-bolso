import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { ICurriculum } from "../interfaces/ICurriculum";

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
            margin-top: 10px;
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

    if (curr.academics.length > 0) {
        html += `
        <div style="
            border-bottom: 1px solid black;
            margin-top: 10px;
        ">
        <span style="
            font-weight: 700;
            font-size: 12pt;
        ">FORMAÇÃO ACADÊMICA</span>
        </div>
        `;
        curr.academics.map(academic => {
            html += `
            <div>
            <span style="
                font-weight: 700;
                font-size: 11pt;
            ">${academic.name}</span> | <span style="
                font-size: 11pt;
            ">${academic.start} - ${academic.finish}</span>
            </div>
            <span style="
                font-size: 11pt;
                font-style: italic;
            ">${academic.type} | ${academic.curse}</span>
            `;
        })
    }

    if (curr.professionals.length > 0) {
        html += `
            <div style="
                border-bottom: 1px solid black;
                margin-top: 10px;
            ">
                <span style="
                font-weight: 700;
                font-size: 12pt;
            ">EXPERIÊNCIA PROFISSIONAL</span>
            </div>
        `;
        curr.professionals.map(professional => {
            html += `
            <div>
                <span style="
                font-weight: 700;
                font-size: 11pt;
            ">${professional.name}</span> | <span style="
                font-size: 11pt;
            ">${professional.start} - ${professional.finish}</span>
            </div>
            <span style="
                font-size: 11pt;
                font-style: italic;
            ">${professional.role}</span>
            <div>
                <span style="
                    font-size: 11pt;
                    text-align: justify;
                ">
                    ${professional.description}
                </span>
            </div>
            `;
        });
    }

    if (curr.certifications.length > 0) {
        html += `
        <div style="
            border-bottom: 1px solid black;
            margin-top: 10px;
        ">
            <span style="
            font-weight: 700;
            font-size: 12pt;
        ">CERTIFICADOS</span>
        </div>
        `;

        curr.certifications.map(certification => {
            html += `
            <div>
                <span style="
                font-weight: 700;
                font-size: 11pt;
            ">${certification.curse}</span> | <span style="
                font-size: 11pt;
            ">${certification.institution} - ${certification.finish}</span>
            </div>
            <span style="
                    font-size: 11pt;
                    text-align: justify;
                ">
                ${certification.description}
            </span>
            `;
        });
    }

    if (curr.awards.length > 0) {
        html += `
        <div style="
            border-bottom: 1px solid black;
            margin-top: 10px;
        ">
            <span style="
            font-weight: 700;
            font-size: 12pt;
        ">PREMIAÇÕES</span>
        </div>
        `;
        curr.awards.map(award => {
            html += `
            <div>
                <span style="
                font-weight: 700;
                font-size: 11pt;
            ">${award.name}</span> | <span style="
                font-size: 11pt;
            ">${award.year}</span>
            </div>
            <span style="
                    font-size: 11pt;
                    text-align: justify;
                ">
                ${award.description}
            </span>
            `;
        });
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