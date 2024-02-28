import { about__controller, cargo__controller, name__controller } from '../../../controller/home-controller/about-controller/about.controller.js';


export const about = document.createElement('div');
about.classList.add('container__about');

about.appendChild(cargo__controller);
cargo__controller.classList.add('cargo__controller');

about.appendChild(name__controller);
name__controller.classList.add('name__controller');

about.appendChild(about__controller);
about__controller.classList.add('about__controller');
