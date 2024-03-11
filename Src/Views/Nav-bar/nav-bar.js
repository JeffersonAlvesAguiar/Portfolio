import { btn__about } from "../../components/btn-about/btn__about.js";
import { btn__skill } from "../../components/btn-skill/btn__skill.js";

export const nav__bar = document.createElement('div');
nav__bar.classList.add('nav__bar');

nav__bar.appendChild(btn__about);
nav__bar.appendChild(btn__skill);