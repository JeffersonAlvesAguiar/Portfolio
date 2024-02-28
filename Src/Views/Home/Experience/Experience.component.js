export const experience = document.createElement('div');

const teste = document.createElement('h1');
teste.innerText = 'testando experiencia';

experience.appendChild(teste);

// const experienceTitle = document.querySelector('.experienceTitle');
// experienceTitle.innerHTML = 'Experiência Profissional:'

// fetch('dados.json').then((Response) => {
//     Response.json().then(dados => {
//         const cardContainerExperience = document.querySelector('.cardContainerExperience');
//         dados.experiences.map((experience) => {
//             const cardExperience = document.createElement('div');
//             cardExperience.classList.add('cardExperience');
//             cardExperience.classList.add('RightAnimation');

//             const cardCargoExperience = document.createElement('span');
//             cardCargoExperience.classList.add('cardCargoExperience');
//             cardCargoExperience.innerHTML = experience.cargo;

//             const cardEmpresaExperience = document.createElement('span');
//             cardEmpresaExperience.classList.add('cardEmpresaExperience');
//             cardEmpresaExperience.innerHTML = experience.empresa;

//             const cardTempExperience = document.createElement('span');
//             cardTempExperience.classList.add('cardTempExperience');
//             cardTempExperience.innerHTML = experience.temp;

//             const cardTextExperience = document.createElement('p');
//             cardTextExperience.classList.add('cardTextExperience');
//             cardTextExperience.innerHTML = experience.description;

//             const cardSkillExperience = document.createElement('span');
//             cardSkillExperience.classList.add('cardSkillExperience');
//             cardSkillExperience.innerHTML = experience.skills;


//             cardExperience.appendChild(cardCargoExperience);
//             cardExperience.appendChild(cardEmpresaExperience);
//             cardExperience.appendChild(cardTempExperience);
//             cardExperience.appendChild(cardTextExperience);
//             cardExperience.appendChild(cardSkillExperience);

//             cardContainerExperience.appendChild(cardExperience);

//         })

//     })
// })