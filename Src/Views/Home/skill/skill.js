import { html__skil__controller, description__skill__controller } from "../../../controller/home-controller/skill-controller/skill.controller.js";
import { card } from "../../../components/card/card.component.js";
import { carroussel } from "../../../components/carroussel/carrousel.js";

export const skill = document.createElement('div');
skill.classList.add('container__skill');

const title__skill = document.createElement('span');
title__skill.innerText = 'Minhas Skills:'
title__skill.classList.add('title__skill')
skill.appendChild(title__skill);

card.appendChild(html__skil__controller);
card.appendChild(description__skill__controller);

carroussel.appendChild(card);
carroussel.classList.add('carroussel__skill');
card.classList.add('card__skill');

skill.appendChild(carroussel);