export const skill = document.createElement('div');
skill.classList.add('container__skill');

const title__skill = document.createElement('span');
title__skill.classList.add('title__skill');
title__skill.innerText = 'Habilidades:';


// box conteudo para hard skill
const box__hard__skill = document.createElement('div');
box__hard__skill.classList.add('box__hard__skill');

const name__hard__skill = document.createElement('span');
name__hard__skill.classList.add('name__hard__skill');
name__hard__skill.innerText = 'Html';

// box conteudo para soft skill
const box__soft__skill = document.createElement('div');
box__soft__skill.classList.add('box__soft__skill');

const name__soft__skill = document.createElement('span');
name__soft__skill.classList.add('name__soft__skill'); 
name__soft__skill.innerText = 'Scrum';





box__hard__skill.appendChild(name__hard__skill);
box__soft__skill.appendChild(name__soft__skill);

skill.appendChild(title__skill);
skill.appendChild(box__hard__skill);
skill.appendChild(box__soft__skill);