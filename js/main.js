const fontBurger = document.querySelector('.fa-bars');
const fontX = document.querySelector('.fa-times');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    fontBurger.classList.toggle('show');
    fontX.classList.toggle('show');
    nav.classList.toggle('show');
    burger.classList.toggle('show');
});



// Skills 
const skillsSection = document.getElementById('skills');
const liSkills = document.querySelectorAll('.skills li');
const skills = document.querySelectorAll('.skillContainer');


const displayCorrectList = (e, buttons, list, cssSelector = null) => {
    buttons.forEach(btn => {
        const btnId = e.target.id
        if (btnId == btn.id) {
            btn.classList.add('checked')
            list.forEach(skill => {
                if (btnId == skill.dataset.all || btnId == skill.dataset.status) {
                    skill.classList.add(cssSelector)
                } else {
                    skill.classList.remove(cssSelector)
                }
            })
        } else {
            btn.classList.remove('checked')
        }
    })


}
skillsSection.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        displayCorrectList(e, liSkills, skills, 'visible')
    }
})

// Lates Project

const projectContainer = document.querySelector('.projectImages');

projectContainer.addEventListener('click', () => {
    projectContainer.classList.toggle('clicked')
})

// Portfolio Section
const portfolioSection = document.querySelector('.portfolio');
const btnPortfolio = document.querySelectorAll('.portfolio li');
const projectsList = document.querySelectorAll('.project');

portfolioSection.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        if (e.target.id == 'all') {
            projectsList.forEach(project => project.setAttribute('data-all', 'all'))
        } else if (e.target.id != 'all') {
            projectsList.forEach(project => project.removeAttribute("all"))
        }
        displayCorrectList(e, btnPortfolio, projectsList, 'visible')
    }
})