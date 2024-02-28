import { about } from "./About/About.component.js";
import { academic } from "./Academic/Academic.component.js";
import { experience } from "./Experience/Experience.component.js";
import { skill } from "./Skill/Skill.component.js";

export const home = document.createElement('div');
home.classList.add('home');

home.appendChild(about);
home.appendChild(academic);
home.appendChild(skill);
home.appendChild(experience);