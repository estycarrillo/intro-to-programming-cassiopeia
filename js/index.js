const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const messageForm = document.querySelector('[name="leave_message"]');
const submission = messageForm.addEventListener('submit', handleSubmit);
const messageSection = document.querySelector('.messages');
const messagesList = messageSection.querySelector('ul');
messageSection.style.visibility = 'hidden';

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

function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const msg = e.target.message.value;

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span
    class="msg">${msg}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("remove_button");
    removeButton.addEventListener('click', removeElement);
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.classList.add("edit_button");
    editButton.addEventListener('click', editElement);
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageSection.appendChild(newMessage);
    if (messageSection.style.visibility === 'hidden') messageSection.style.visibility = 'visible';

    messageForm.reset();
}

function removeElement(e){
    e.target.parentElement.remove();
    if (messageSection.childNodes.length < 6) messageSection.style.visibility = 
    'hidden';
}

function editElement(e){
    const item = e.target.parentElement;
    let textElement = item.childNodes[2];
    let newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "edited_text";
    newInput.value = textElement.innerHTML;
    let submitted = document.createElement('button');
    submitted.innerHTML = "Submit edit";
    submitted.type = "button";
    submitted.addEventListener('click', editMessage);
    textElement.innerHTML = "";
    textElement.appendChild(newInput);
    textElement.appendChild(submitted);
    e.target.remove();
}

function editMessage(e){
    let li = e.path[2];
    li.children[1].innerHTML = e.path[1].children[0].value;
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.addEventListener('click', editElement);
    let children = [].slice.call(li.childNodes);
    children.splice(3, 0, editButton);
    li.innerHTML = "";
    children.forEach((item, i) => {
        li.appendChild(item);
    });
}