import {PDFExtract, PDFExtractOptions} from 'pdf.js-extract'

const ExtractFile = () => {
    const pdfExtract = new PDFExtract();
    const options: PDFExtractOptions = {};
    pdfExtract.extract('test.pdf', options)
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

export default ExtractFile;