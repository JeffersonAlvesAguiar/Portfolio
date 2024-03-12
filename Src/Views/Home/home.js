import { profile } from "./Profile/Profile.component.js";
import { about } from "./About/About.component.js";
import { skill } from "./Skill/Skill.component.js";
import { footer } from "./Footer/Footer.component.js";

export const home = document.createElement('div');
home.classList.add('home');

home.appendChild(profile);
home.appendChild(about);
home.appendChild(skill);
home.appendChild(footer);