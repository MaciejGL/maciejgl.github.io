import { projects } from "./portfolio.js";

const fontBurger = document.querySelector(".fa-bars");
const fontX = document.querySelector(".fa-times");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

const createPortfolio = () => {
  const portfolioHook = document.getElementById("projects");
  for (let i = 0; i < projects.length; i++) {
    const div = document.createElement("div");
    div.className = "project";
    div.id = `projectPort${i + 1}`;
    div.setAttribute("data-all", "all");
    div.setAttribute("data-status", projects[i].status);

    const pictureLinked = document.createElement("a");
    pictureLinked.setAttribute("href", projects[i].live);
    pictureLinked.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.src = projects[i].imgSrc;
    img.setAttribute("alt", projects[i].imgAlt);

    const title = document.createElement("h3");
    title.textContent = projects[i].title;

    const p = document.createElement("p");
    p.textContent = projects[i].description;

    const btn = document.createElement("div");
    btn.className = "buttons";
    btn.innerHTML = `<a href="${projects[i].live}" class="button" target="_blank">Live</a><a href="${projects[i].code}" class="button" target="_blank">Code</a>
      `;
    pictureLinked.appendChild(img);
    div.appendChild(pictureLinked);
    div.appendChild(title);
    div.appendChild(p);
    div.appendChild(btn);
    portfolioHook.appendChild(div);
  }
};
createPortfolio();

burger.addEventListener("click", function () {
  fontBurger.classList.toggle("show");
  fontX.classList.toggle("show");
  nav.classList.toggle("show");
  burger.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (e.target.parentNode !== burger && nav.classList.contains("show")) {
    fontBurger.classList.toggle("show");
    fontX.classList.toggle("show");
    nav.classList.toggle("show");
    burger.classList.toggle("show");
  }
});

// Skills
const skillsSection = document.getElementById("skills");
const liSkills = document.querySelectorAll(".skills li");
const skills = document.querySelectorAll(".skillContainer");

const displayCorrectList = (e, buttons, list, show = null, hide = null) => {
  buttons.forEach((btn) => {
    const btnId = e.target.id;
    if (btnId == btn.id) {
      btn.classList.add("checked");
      list.forEach((skill) => {
        if (btnId == skill.dataset.all || btnId == skill.dataset.status) {
          skill.classList.add(hide);
          setTimeout(() => {
            skill.classList.remove(hide);
            skill.classList.add(show);
            skill.style.display = "flex";
          }, 300);
        } else {
          skill.classList.remove(show);
          skill.classList.add(hide);
          setTimeout(() => {
            skill.style.display = "none";
          }, 300);
        }
      });
    } else {
      btn.classList.remove("checked");
    }
  });
};

skillsSection.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    displayCorrectList(e, liSkills, skills, "visible", "unvisible");
  }
});

const addDisplay = () => {
  skills.forEach((skill) => {
    if (skill.getAttribute("data-status") == "learned") {
      skill.style.display = "flex";
    } else {
      skill.style.display = "none";
    }
  });
  projectsList.forEach((skill) => {
    if (skill.classList.contains("project")) {
      skill.style.display = "flex";
    } else {
      skill.style.display = "none";
    }
  });
};

// Lates Project

const projectContainer = document.querySelector(".projectImages");

projectContainer.addEventListener("click", () => {
  projectContainer.classList.toggle("clicked");
});

// Portfolio Section
const portfolioSection = document.querySelector(".portfolio");
const btnPortfolio = document.querySelectorAll(".portfolio li");
const projectsList = document.querySelectorAll(".project");

portfolioSection.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    if (e.target.id == "all") {
      projectsList.forEach((project) =>
        project.setAttribute("data-all", "all")
      );
    } else if (e.target.id != "all") {
      projectsList.forEach((project) => project.removeAttribute("all"));
    }
    displayCorrectList(e, btnPortfolio, projectsList, "visible", "unvisible");
  }
});

// Appear on scroll
const appearOnScroll = (item) => {
  const windowHeight = window.innerHeight;
  const windowPosition = window.pageYOffset;
  const itemPosition = item.offsetTop;
  if (windowPosition >= itemPosition - windowHeight / 1.35) {
    item.style.transform = "translate(0, 0)";
    item.style.opacity = "1";
  }
};

window.addEventListener("scroll", () => {
  // skills
  appearOnScroll(document.getElementById("skill1"));
  appearOnScroll(document.getElementById("skill2"));
  appearOnScroll(document.getElementById("skill3"));
  appearOnScroll(document.getElementById("skill4"));
  appearOnScroll(document.getElementById("skill5"));
  appearOnScroll(document.getElementById("skill6"));
  appearOnScroll(document.getElementById("skill7"));
  appearOnScroll(document.getElementById("skill8"));
  appearOnScroll(document.getElementById("skill9"));
  appearOnScroll(document.getElementById("skill10"));
  appearOnScroll(document.getElementById("skill11"));
  // Latest Project
  appearOnScroll(document.getElementById("project1"));
  appearOnScroll(document.getElementById("project2"));
  // abilities
  // appearOnScroll(document.getElementById("abilitie1"));
  // appearOnScroll(document.getElementById("abilitie2"));
  appearOnScroll(document.getElementById("abilitie3"));
  // Portfolio

  // appearOnScroll(document.getElementById("projectPort1"));
  // appearOnScroll(document.getElementById("projectPort2"));
  // appearOnScroll(document.getElementById("projectPort3"));
  // appearOnScroll(document.getElementById("projectPort4"));
  // appearOnScroll(document.getElementById("projectPort5"));
  // appearOnScroll(document.getElementById("projectPort6"));
  // appearOnScroll(document.getElementById("projectPort7"));
});

addDisplay();
