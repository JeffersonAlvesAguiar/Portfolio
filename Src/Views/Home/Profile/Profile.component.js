export const profile = document.createElement('div');
profile.classList.add('profile__container');

// --------------------------------------------------

const img = document.createElement('img');
img.classList.add('img__profile');
img.src = 'Src/assets/photo/Jefferson Alves de Aguiar.jpeg'

// --------------------------------------------------

const box__description__profile = document.createElement('div');
box__description__profile.classList.add('box__description__profile')

// --------------------------------------------------

const box__description = document.createElement('div');
box__description.classList.add('box__description');

const name__description__profile = document.createElement('span');
name__description__profile.classList.add('name__description__profile');
name__description__profile.innerText = 'Jefferson Alves';

const cargo__description__profile = document.createElement('span');
cargo__description__profile.classList.add('cargo__description__profile');
cargo__description__profile.innerText = 'Olá! Seja bem-vindo! Estou na área de TI há dois anos. Ao longo dessa jornada, já trabalhei com JavaScript, TypeScript, React.js, Styled-components, Angular e SCSS. Tenho familiaridade com metodologias ágeis, Scrum e Kanban. Tenho a intenção de me tornar um desenvolvedor Full Stack no futuro, e minha escolha para agregar no Back End é C# ASP.NET Core.';

box__description.appendChild(name__description__profile);
box__description.appendChild(cargo__description__profile);

// --------------------------------------------------

const box__bnt__profile = document.createElement('div');
box__bnt__profile.classList.add('box__bnt__profile');

const bnt__gitHub = document.createElement('a');
bnt__gitHub.classList.add('bnt__social');
bnt__gitHub.href = 'https://github.com/JeffersonAlvesAguiar';
bnt__gitHub.target = 'blank';
bnt__gitHub.innerText = 'GitHub';

const bnt__linkedin = document.createElement('a');
bnt__linkedin.classList.add('bnt__social');
bnt__linkedin.href = 'https://www.linkedin.com/in/jefferson-alves-developer/';
bnt__linkedin.target = 'blank';
bnt__linkedin.innerText = 'Linkedin';

box__bnt__profile.appendChild(bnt__gitHub);
box__bnt__profile.appendChild(bnt__linkedin);

// --------------------------------------------------

const box__skill__profile = document.createElement('div');
box__skill__profile.classList.add('box__skill__profile');

const skill__html__profile = document.createElement('img');
skill__html__profile.classList.add('svg__skill');
skill__html__profile.src = 'Src/assets/Icon/skill/icons8-html.svg'

const skill__css__profile = document.createElement('img');
skill__css__profile.classList.add('svg__skill');
skill__css__profile.src = 'Src/assets/Icon/skill/icons8-css.svg';

const skill__javascript__profile = document.createElement('img');
skill__javascript__profile.classList.add('svg__skill');
skill__javascript__profile.src = 'Src/assets/Icon/skill/icons8-javascript.svg';

const skill__typescript__profile = document.createElement('img');
skill__typescript__profile.classList.add('svg__skill');
skill__typescript__profile.src = 'Src/assets/Icon/skill/icons8-typescript.svg';

const skill__react__profile = document.createElement('img');
skill__react__profile.classList.add('svg__skill');
skill__react__profile.src = 'Src/assets/Icon/skill/icons8-react-js.svg';

const skill__styled_components__profile = document.createElement('img');
skill__styled_components__profile.classList.add('svg__skill');
skill__styled_components__profile.src = 'Src/assets/Icon/skill/styled-components-svgrepo-com.svg';

const skill__styled_angular__profile = document.createElement('img');
skill__styled_angular__profile.classList.add('svg__skill');
skill__styled_angular__profile.src = 'Src/assets/Icon/skill/icons8-angular.svg';

const skill__styled_scss__profile = document.createElement('img');
skill__styled_scss__profile.classList.add('svg__skill');
skill__styled_scss__profile.src = 'Src/assets/Icon/skill/scss-svgrepo-com.svg';

box__skill__profile.appendChild(skill__html__profile);
box__skill__profile.appendChild(skill__css__profile);
box__skill__profile.appendChild(skill__javascript__profile);
box__skill__profile.appendChild(skill__typescript__profile);
box__skill__profile.appendChild(skill__react__profile);
box__skill__profile.appendChild(skill__styled_components__profile);
box__skill__profile.appendChild(skill__styled_angular__profile);
box__skill__profile.appendChild(skill__styled_scss__profile);

// --------------------------------------------------
box__description__profile.appendChild(box__description);
box__description__profile.appendChild(box__skill__profile);
box__description__profile.appendChild(box__bnt__profile);
// --------------------------------------------------

profile.appendChild(img);
profile.appendChild(box__description__profile);