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
const learnedBtn = document.getElementById('learned');
const toLearnBtn = document.getElementById('toLearn');
const learnedSkill = document.querySelectorAll('#learnedSkill');
const skillToLearn = document.querySelectorAll('#skillToLearn');

// skillsSection.addEventListener('click', (e) => {
//     console.log(e.target.id)
//     if (e.target.id == 'learned') {
//         learnedBtn.classList.add('checked');
//         toLearnBtn.classList.remove('checked');
//         learnedSkill.forEach(el => el.style.animation = 'appear 1s 1s linear both');
//         skillToLearn.forEach(el => el.style.animation = 'disappear 1s linear both');
//     } else if (e.target.id == 'toLearn') {
//         learnedBtn.classList.remove('checked');
//         toLearnBtn.classList.add('checked');
//         learnedSkill.forEach(el => el.style.animation = 'disappear 1s linear both');
//         skillToLearn.forEach(el => el.style.animation = 'appear 1s 1s linear both');
//     }
// })


skillsSection.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.id == 'learned') {
        learnedBtn.classList.add('checked');
        toLearnBtn.classList.remove('checked');

        skillToLearn.forEach(el => {
            el.classList.remove('visible')
        });
        learnedSkill.forEach(el => {
            el.classList.add('visible')
        });

    } else if (e.target.id == 'toLearn') {
        learnedBtn.classList.remove('checked');
        toLearnBtn.classList.add('checked');

        learnedSkill.forEach(el => {
            el.classList.remove('visible')
        });
        skillToLearn.forEach(el => {
            el.classList.add('visible')
        });

    }
})

// PROJECTS
const projectContainer = document.querySelector('.projectImages');

projectContainer.addEventListener('click', () => {
    projectContainer.classList.toggle('clicked')
})