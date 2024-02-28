import { course__academic__controller, institution__academic__controller, status__academic__controller } from "../../../controller/home-controller/academic-controller/academic.controller.js";

export const academic = document.createElement('div');
academic.classList.add('container__academic');

const title__academic = document.createElement('span');
title__academic.classList.add('title__academic');
title__academic.innerText = 'Formação academica:';
academic.appendChild(title__academic);

academic.appendChild(course__academic__controller);
course__academic__controller.classList.add('course__academic__controller');

academic.appendChild(institution__academic__controller);
institution__academic__controller.classList.add('institution__academic__controller');


academic.appendChild(status__academic__controller);
status__academic__controller.classList.add('status__academic__controller');