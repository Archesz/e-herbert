import jsPDF from 'jspdf';

function generatePDF(nome, nascimento, rg, cpf, email, cep, numero, telefone, celular, curso, periodo){

    try {
        const doc = new jsPDF();
        let img = new Image();
        // Write in document
        // doc.addImage('./logo.PNG', 'PNG', 15, 15, 50, 50);
        doc.setFontSize(10)
        doc.text(`Termo de compromisso – 2023 | ____ Campinas ___ de Janeiro de 2023`, 15, 10);

        doc.setFontSize(13)
        doc.setFont('times');

        doc.text(`Nome:`, 15, 40);
        doc.text(`${nome}`, 30, 40);

        doc.text(`Data de Nascimento:`, 15, 115);
        doc.text(`${nascimento}`, 145, 115);

        doc.text(`RG:`, 280, 115);
        doc.text(`${rg}`, 305, 115);

        doc.text(`CPF:`, 15, 135);
        doc.text(`${cpf}`, 55, 135);

        doc.text(`Email:`, 280, 135);
        doc.text(`${email}`, 320, 135);

        doc.text(`CEP:`, 280, 155);
        doc.text(`${cep} - Nº ${numero}`, 320, 155);

        doc.text(`Curso:`, 15, 175);
        doc.text(`${curso}`, 70, 175);

        doc.text(`Periodo:`, 15, 195);
        doc.text(`${periodo}`, 70, 195);

        doc.text(`Cel:`, 280, 195);
        doc.text(`${celular}`, 305, 195);

        doc.text(`Cel:`, 280, 195);
        doc.text(`${telefone}`, 305, 195);

        doc.save('teste-projeto-herbert.pdf');

    } catch (error) {
        console.error(error);
    }
}

export default generatePDF()