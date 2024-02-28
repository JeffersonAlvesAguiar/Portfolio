import { about } from "./about/about.js";
import { academic } from "./academic/academic.js";
import { portfolio } from "./portfolio/portfolio.js";
import { skill } from "./skill/skill.js";

export const home = document.createElement('div');
home.classList.add('home');

home.appendChild(about);
home.appendChild(academic);
home.appendChild(skill);
home.appendChild(portfolio);