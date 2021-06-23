import { createNewProject } from "./createProject.js";
import { createList } from "./createToDo.js";
export { manageDom };

let projectsCreated = [];
function projectCollection(title) {
  projectsCreated.push(createNewProject(title, []));
  return projectsCreated;
}

function manageDom() {
  const divContent = document.getElementById("content");
  const divDefault = document.getElementById("default");
  addItemButton(divDefault);
  const addDivButton = document.createElement("button");
  addDivButton.textContent = "Add new Project";
  addDivButton.setAttribute("id", "addnewproject");
  divContent.appendChild(addDivButton);
  addDivButton.addEventListener("click", function () {
    const divs = document.querySelectorAll("div#content > div");
    const numberOfProjects = divs.length;
    const createDiv = document.createElement("div");
    const projectName = window.prompt("Project Name:");
    projectCollection(projectName);
    const divtitle = document.createElement("h2");
    divtitle.textContent = projectName;
    createDiv.setAttribute("id", "project" + numberOfProjects);
    divContent.appendChild(createDiv);
    createDiv.appendChild(divtitle);
    const currentDiv = document.getElementById("project" + numberOfProjects);
    addItemButton(currentDiv);
  });
}

function addItemButton(currentDiv) {
  const createbutton = document.createElement("button");
  const buttonname = "button" + currentDiv.id;
  createbutton.setAttribute("id", buttonname);
  createbutton.setAttribute("name", currentDiv.id);
  createbutton.textContent = "Add Item";
  currentDiv.appendChild(createbutton);
  createbutton.addEventListener("click", function () {
    const newitem = createList.newListItem(
      "trash day",
      "take out trash",
      "10/10/2021",
      "5",
      "just do it",
      "none",
      "default"
    );
    console.log(projectsCreated);
    const currentProjectItemsArray = projectsCreated[0].items;
    currentProjectItemsArray.push(newitem);
    console.log(projectsCreated[0]);
  });
}
