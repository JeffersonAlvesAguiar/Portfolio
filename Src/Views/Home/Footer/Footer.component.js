export const footer = document.createElement('div');
footer.classList.add('container__footer');

// box conteudo autor 
const box__author__footer = document.createElement('div');
box__author__footer.classList.add('box__author__footer');

const author__footer = document.createElement('span');
author__footer.classList.add('author__footer');
author__footer.innerText = 'Jefferson Alves';

box__author__footer.appendChild(author__footer);

// box conteudo contato
const box__contact__footer = document.createElement('div');
box__contact__footer.classList.add('box__contact__footer');

const contact__footer = document.createElement('span');
contact__footer.classList.add('contact__footer');
contact__footer.innerText = 'contato footer';

box__contact__footer.appendChild(contact__footer);

// atribuindo alementos ao elemento pai
footer.appendChild(box__author__footer);
footer.appendChild(box__contact__footer);