import { nav__bar } from "../Views/Nav-bar/nav-bar.js";
import { home } from "../Views/Home/home.js";
import { footer } from "../Views/footer/footer.js";

const app = document.querySelector('.root');

app.appendChild(nav__bar);
app.appendChild(home);
app.appendChild(footer);