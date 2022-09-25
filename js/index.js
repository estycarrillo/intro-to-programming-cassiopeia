const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = "Estevan Carrillo © " + thisYear;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML"];
const skillSection = document.querySelector("#skills");
const ul = skillSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    ul.appendChild(skill);
}