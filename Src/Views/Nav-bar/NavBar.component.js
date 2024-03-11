
const navBar = document.querySelector('.nav-bar');
const menu = document.querySelector('.menu');

//---------------------------------------------------------------

const about = document.querySelector('.about');
about.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
        menuRemove()
    }
});

//---------------------------------------------------------------

const skills = document.querySelector('.skills');
skills.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
        menuRemove()
    }

});

//---------------------------------------------------------------
const linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/jefferson-alves-developer/', '_blank');
    if (window.innerWidth < 1024) {
        menuRemove()
    }
});

//---------------------------------------------------------------

const gitHub = document.querySelector('.gitHub');
gitHub.addEventListener('click', () => {
    window.open('https://github.com/JeffersonAlvesAguiar', '_blank');
    if (window.innerWidth < 1024) {
        menuRemove()
    }
});

//---------------------------------------------------------------

const menuOpen = document.querySelector('.menuOpen');
menuOpen.addEventListener('click', () => {
    menuRederize()
});

const menuClose = document.querySelector('.menuClose');
menuOpen.style.display = 'none';
menuClose.addEventListener('click', () => {
    menuRemove()
});


//---------------------------------------------------------------

function menuRederize() {
    if (window.innerWidth <= 1024) {
        navBar.style.width = '20%';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'flex';

        about.style.display = 'flex';
        skills.style.display = 'flex';
        experience.style.display = 'flex';
        academic.style.display = 'flex';
        linkedin.style.display = 'flex';
        gitHub.style.display = 'flex';
    }
 
    if (window.innerWidth <= 600) {
        navBar.style.width = '50%';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'flex';

        about.style.display = 'flex';
        skills.style.display = 'flex';
        experience.style.display = 'flex';
        academic.style.display = 'flex';
        linkedin.style.display = 'flex';
        gitHub.style.display = 'flex';
    }
}

function menuRemove() {
    if (window.innerWidth <= 1024) {
        navBar.style.width = '2%';
        menuClose.style.display = 'none';
        menuOpen.style.display = 'flex';

        about.style.display = 'none';
        skills.style.display = 'none';
        experience.style.display = 'none';
        academic.style.display = 'none';
        linkedin.style.display = 'none';
        gitHub.style.display = 'none';
    }
}
