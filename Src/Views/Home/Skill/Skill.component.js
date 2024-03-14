export const skill = document.createElement('div');
skill.classList.add('container__skill');
skill.classList.add('RightAnimation');
skill.id = 'section__skill';

// -----------------------------------------------

const title__skill = document.createElement('span');
title__skill.classList.add('title__skill');
title__skill.innerText = 'Habilidades:';

// -----------------------------------------------

// box conteudo para hard skill
const box__hard__skill = document.createElement('div');
box__hard__skill.classList.add('box__hard__skill');

const html__hard__skill = document.createElement('span');
html__hard__skill.classList.add('name__hard__skill');
html__hard__skill.innerText = '- Html';

const css__hard__skill = document.createElement('span');
css__hard__skill.classList.add('name__hard__skill');
css__hard__skill.innerText = '- CSS';

const javascript__hard__skill = document.createElement('span');
javascript__hard__skill.classList.add('name__hard__skill');
javascript__hard__skill.innerText = '- JavaScript';

const typescript__hard__skill = document.createElement('span');
typescript__hard__skill.classList.add('name__hard__skill');
typescript__hard__skill.innerText = '- TypeScript';

const react__hard__skill = document.createElement('span');
react__hard__skill.classList.add('name__hard__skill');
react__hard__skill.innerText = '- ReactJs';

const styled_components__hard__skill = document.createElement('span');
styled_components__hard__skill.classList.add('name__hard__skill');
styled_components__hard__skill.innerText = '- Styled-components';

const angular__hard__skill = document.createElement('span');
angular__hard__skill.classList.add('name__hard__skill');
angular__hard__skill.innerText = '- Angular';

const scss__hard__skill = document.createElement('span');
scss__hard__skill.classList.add('name__hard__skill');
scss__hard__skill.innerText = '- Scss';


box__hard__skill.appendChild(html__hard__skill);
box__hard__skill.appendChild(css__hard__skill);
box__hard__skill.appendChild(javascript__hard__skill);
box__hard__skill.appendChild(typescript__hard__skill);
box__hard__skill.appendChild(react__hard__skill);
box__hard__skill.appendChild(styled_components__hard__skill);
box__hard__skill.appendChild(angular__hard__skill);
box__hard__skill.appendChild(scss__hard__skill);

// -----------------------------------------------

// box conteudo para soft skill
const box__soft__skill = document.createElement('div');
box__soft__skill.classList.add('box__soft__skill');

const scrum__soft__skill = document.createElement('span');
scrum__soft__skill.classList.add('name__soft__skill');
scrum__soft__skill.innerText = '- Scrum';

const kanban__soft__skill = document.createElement('span');
kanban__soft__skill.classList.add('name__soft__skill');
kanban__soft__skill.innerText = '- Kanban';


box__soft__skill.appendChild(scrum__soft__skill);
box__soft__skill.appendChild(kanban__soft__skill);

// -----------------------------------------------

skill.appendChild(title__skill);
skill.appendChild(box__hard__skill);
skill.appendChild(box__soft__skill);