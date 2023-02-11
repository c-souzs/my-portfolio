import curriculumPdf from '../assets/curriculo.pdf';

const downloadCurriculum = async () => {
    const response = await fetch(curriculumPdf);
    const file = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'caio-souza-curriculo.pdf';
    document.body.appendChild(link);
    link.click();
}

export default downloadCurriculum;