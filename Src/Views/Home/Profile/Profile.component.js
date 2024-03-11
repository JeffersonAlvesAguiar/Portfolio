export const profile = document.createElement('div');
profile.classList.add('profile__container');

const img = document.createElement('img');
img.classList.add('img__profile');
img.src = 'Src/assets/photo/Jefferson Alves de Aguiar.jpeg'

profile.appendChild(img);

// --------------------------------------------------

const box__description__profile = document.createElement('div');
box__description__profile.classList.add('box__description__profile')

const box__description = document.createElement('div');
box__description.classList.add('box__description');

const name__description__profile = document.createElement('span');
name__description__profile.classList.add('name__description__profile');
name__description__profile.innerText = 'Jefferson Alves';

const cargo__description__profile = document.createElement('span');
cargo__description__profile.classList.add('cargo__description__profile');
cargo__description__profile.innerText = 'Developer';

box__description.appendChild(name__description__profile);
box__description.appendChild(cargo__description__profile);

// --------------------------------------------------

const box__bnt__profile = document.createElement('div');
box__bnt__profile.classList.add('box__bnt__profile');

const bnt__gitHub = document.createElement('a');
bnt__gitHub.classList.add('bnt__social');
bnt__gitHub.innerText = 'GitHub';

const bnt__linkedin = document.createElement('a');
bnt__linkedin.classList.add('bnt__social');
bnt__linkedin.innerText = 'Linkedin';

box__bnt__profile.appendChild(bnt__gitHub);
box__bnt__profile.appendChild(bnt__linkedin);


box__description__profile.appendChild(box__description);
box__description__profile.appendChild(box__bnt__profile);
// --------------------------------------------------

profile.appendChild(box__description__profile);