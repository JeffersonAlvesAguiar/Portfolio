const academicTitle = document.querySelector('.academicTitle');
academicTitle.innerHTML = 'Formação acadêmica';

fetch('dados.json').then((Response) => {
    Response.json().then(dados => {

        const cardContainerAcademic = document.querySelector('.cardContainerAcademic');

        dados.academics.map((academic) => {
            const cardAcademic = document.createElement('div');
            cardAcademic.classList.add('cardAcademic');

            const cardInstitutionAcademic = document.createElement('span');
            cardInstitutionAcademic.classList.add('cardInstitutionAcademic');
            cardInstitutionAcademic.innerHTML = academic.institution;

            const cardCourseAcademic = document.createElement('span');
            cardCourseAcademic.classList.add('cardCourseAcademic');
            cardCourseAcademic.innerHTML = academic.course;

            const cardTempAcademic = document.createElement('span');
            cardTempAcademic.classList.add('cardTempAcademic');
            cardTempAcademic.innerHTML = academic.temp;

            cardAcademic.appendChild(cardInstitutionAcademic);
            cardAcademic.appendChild(cardCourseAcademic);
            cardAcademic.appendChild(cardTempAcademic);

            cardContainerAcademic.appendChild(cardAcademic);

        })
    })
})