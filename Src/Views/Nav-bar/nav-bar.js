import { btn__about } from "../../components/btn-about/btn__about.js";
import { btn__academic } from "../../components/btn-academic/btn__academic.js";
import { btn__experience } from "../../components/btn-experience/btn__experience.js";
import { btn__skill } from "../../components/btn-skill/btn__skill.js";
import { btn__linkedin } from '../../components/btn-linkedin/btn__linkedin.js'
import { btn__gitHub } from '../../components/btn-gitHub/btn__gitHub.js'

export const nav__bar = document.createElement('div');
nav__bar.classList.add('nav__bar');

nav__bar.appendChild(btn__about);
nav__bar.appendChild(btn__academic);
nav__bar.appendChild(btn__experience);
nav__bar.appendChild(btn__skill);
nav__bar.appendChild(btn__linkedin);
nav__bar.appendChild(btn__gitHub);