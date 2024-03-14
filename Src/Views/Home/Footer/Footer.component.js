export const footer = document.createElement('div');
footer.id = 'section__footer';
footer.classList.add('container__footer');

// box conteudo autor 
const box__author__footer = document.createElement('div');
box__author__footer.classList.add('box__author__footer');

const author__footer = document.createElement('span');
author__footer.classList.add('author__footer');
author__footer.innerText = 'Desenvolvido por Jefferson Alves';

box__author__footer.appendChild(author__footer);

// box conteudo contato
const box__contact__footer = document.createElement('div');
box__contact__footer.classList.add('box__contact__footer');

const linkedin__footer = document.createElement('a');
linkedin__footer.classList.add('contact__footer');
linkedin__footer.href = 'https://www.linkedin.com/in/jefferson-alves-developer/';
linkedin__footer.target = '_blank';
linkedin__footer.innerText = 'Linkedin';

const gitHub__footer = document.createElement('a');
gitHub__footer.classList.add('contact__footer');
gitHub__footer.href = 'https://github.com/JeffersonAlvesAguiar';
gitHub__footer.target = '_blank';
gitHub__footer.innerText = 'Git Hub';

box__contact__footer.appendChild(linkedin__footer);
box__contact__footer.appendChild(gitHub__footer);

// atribuindo alementos ao elemento pai
footer.appendChild(box__author__footer);
footer.appendChild(box__contact__footer);