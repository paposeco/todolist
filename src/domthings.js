import { createNewProject } from "./createProject.js";
import { createList } from "./createToDo.js";
export { manageDom };

let projectsCreated = [];
function projectCollection(title, name) {
  const newProject = createNewProject(title, name, []);
  projectsCreated.push(newProject);
  return newProject;
}

function manageDom() {
  const divContent = document.getElementById("content");
  const divDefault = document.getElementById("default");
  addItemButton(divDefault);
  const addProjectButton = document.createElement("button");
  addProjectButton.textContent = "Add new Project";
  addProjectButton.setAttribute("id", "addnewproject");
  const divAddProject = document.getElementById("addProject");
  divAddProject.appendChild(addProjectButton);

  addProjectButton.addEventListener("click", function () {
    addProject(null);
  });
}

function addProject(name) {
  const divContent = document.getElementById("content");
  const divs = document.querySelectorAll("div#content > div");
  const numberOfProjects = divs.length;
  const createDiv = document.createElement("div");
  let projectTitle;
  if (name === null) {
    projectTitle = window.prompt("Project Name:");
  } else {
    projectTitle = name;
  }
  const projectName = "project" + numberOfProjects;
  const createNewProject = projectCollection(projectTitle, projectName);
  const divTitle = document.createElement("h2");
  divTitle.textContent = createNewProject.title;
  createDiv.setAttribute("id", "project" + numberOfProjects);
  createDiv.setAttribute("class", "projectDiv");
  divContent.appendChild(createDiv);
  createDiv.appendChild(divTitle);
  const currentDiv = document.getElementById("project" + numberOfProjects);
  addItemButton(currentDiv);

  const removeProjectButton = document.createElement("button");
  removeProjectButton.setAttribute("class", "removeProject");
  removeProjectButton.textContent = "Remove Project";
  removeProjectButton.addEventListener("click", function () {
    removeProject("project" + numberOfProjects);
    console.log(projectsCreated);
  });

  createDiv.appendChild(removeProjectButton);
}

//do nothing on add project cancel
//cancel add
// cant  press add item twice

function addItemButton(currentDiv) {
  const formDiv = document.createElement("div");
  formDiv.setAttribute("class", "formDiv");
  const createbutton = document.createElement("button");
  const buttonname = "button" + currentDiv.id;
  createbutton.setAttribute("id", buttonname);
  createbutton.setAttribute("name", currentDiv.id);
  createbutton.textContent = "Add Item";
  currentDiv.appendChild(createbutton);
  currentDiv.appendChild(formDiv);
  createbutton.addEventListener("click", function () {
    addItemForm(currentDiv, formDiv);
    const titleFocus = document.getElementById("title").focus();
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      let itemInfo = [];
      for (const pair of formData.entries()) {
        itemInfo.push(pair[1]);
        // console.log(pair[0] + ", " + pair[1]);
      }
      const currentProject = currentDiv.id;
      const itemDivExisting = currentDiv.querySelectorAll("div.itemDiv").length;
      const newitem = createList.createNewItem(
        itemInfo[0],
        itemInfo[1],
        itemInfo[2],
        itemInfo[3],
        itemInfo[4],
        itemInfo[5],
        currentProject,
        itemDivExisting
      );
      addItemToDom(newitem, currentDiv);
      removeItemButton(newitem);
      const currentForm = document.getElementById("form" + currentDiv.id);
      currentForm.remove();
    });
  });
}

function removeItemButton(item) {
  const currentItem = document.getElementById(item.itemID);
  const removeItemBut = document.createElement("button");
  removeItemBut.setAttribute("class", "removeItem");
  removeItemBut.textContent = "Remove Item";
  removeItemBut.addEventListener("click", function () {
    currentItem.remove();
    createList.removeItemFromList(item);
  });
  currentItem.appendChild(removeItemBut);
}

function addItemToDom(item, currentDiv) {
  const div = document.createElement("div");
  const itemDivExisting = currentDiv.querySelectorAll("div.itemDiv").length;
  div.setAttribute("class", "itemDiv");
  div.setAttribute("id", item.itemID);
  //div.setAttribute("id", item.project + "item" + itemDivExisting);
  const itemTitleDiv = document.createElement("div");
  itemTitleDiv.setAttribute("class", "itemTitle");

  const itemStatusDiv = document.createElement("div");
  itemStatusDiv.setAttribute("class", "itemStatus");

  const itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.setAttribute("class", "itemDescription");
  const itemDueDateDiv = document.createElement("div");
  itemDueDateDiv.setAttribute("class", "itemDueDate");
  const itemCreationDateDiv = document.createElement("div");
  itemCreationDateDiv.setAttribute("class", "itemCreationDate");
  const itemPriorityDiv = document.createElement("div");
  itemPriorityDiv.setAttribute("class", "itemPriority");
  const itemNotesDiv = document.createElement("div");
  itemNotesDiv.setAttribute("class", "itemNotes");
  const itemCheckListDiv = document.createElement("div");
  itemCheckListDiv.setAttribute("class", "itemCheckList");

  const itemTitle = document.createElement("h3");
  const itemStatus = document.createElement("p");
  const itemStatusSpan = document.createElement("span");
  const itemDescription = document.createElement("p");
  const itemDueDate = document.createElement("p");
  const itemCreationDate = document.createElement("p");
  const itemPriority = document.createElement("p");
  const itemNotes = document.createElement("p");
  const itemCheckList = document.createElement("p");

  itemTitle.textContent = item.title;
  if (item.description != "") {
    itemDescription.textContent = "Description: " + item.description;
  }
  itemStatus.textContent = "Not Finished";
  itemStatusSpan.style.width = "20px";
  itemStatusSpan.style.height = "20px";
  itemStatusSpan.style.display = "inline-block";
  itemStatusSpan.style.backgroundColor = "red";

  if (item.dueDate != "") {
    itemDueDate.textContent = "Due" + item.dueDate;
  }
  itemCreationDate.textContent = "Created: " + item.creationDate;
  if (item.priority != "") {
    itemPriority.textContent = "Priority: " + item.priority;
  }
  if (item.notes != "") {
    itemNotes.textContent = "Notes: " + item.notes;
  }
  itemCheckList.textContent = item.checkList;

  currentDiv.appendChild(div);
  div.appendChild(itemTitleDiv);
  itemTitleDiv.appendChild(itemTitle);
  div.appendChild(itemStatusDiv);
  itemStatusDiv.appendChild(itemStatus);
  itemStatusDiv.appendChild(itemStatusSpan);
  div.appendChild(itemDescriptionDiv);
  itemDescriptionDiv.appendChild(itemDescription);
  div.appendChild(itemDueDateDiv);
  itemDueDateDiv.appendChild(itemDueDate);
  div.appendChild(itemCreationDateDiv);
  itemCreationDateDiv.appendChild(itemCreationDate);
  div.appendChild(itemPriorityDiv);
  itemPriorityDiv.appendChild(itemPriority);
  div.appendChild(itemNotesDiv);
  itemNotesDiv.appendChild(itemNotes);
  div.appendChild(itemCheckListDiv);
  itemCheckListDiv.appendChild(itemCheckList);

  itemStatusSpan.addEventListener("click", function () {
    markItemAsDone(item);
  });
}

function addItemForm(currentDiv, formDiv) {
  const form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("class", "formNewItem");
  const formID = "form" + currentDiv.id;
  form.setAttribute("id", formID);

  const div1 = document.createElement("div");
  div1.setAttribute("class", "formNewItem");
  const label1 = document.createElement("label");
  label1.setAttribute("for", "title");
  label1.textContent = "Title: ";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "title");
  input1.setAttribute("name", "title");
  input1.setAttribute("id", "title");

  input1.required = true;
  div1.appendChild(label1);
  div1.appendChild(input1);

  const div2 = document.createElement("div");
  div2.setAttribute("class", "formNewItem");
  const label2 = document.createElement("label");
  label2.setAttribute("for", "description");
  label2.textContent = "Description: ";
  const input2 = document.createElement("input");
  input2.setAttribute("type", "description");
  input2.setAttribute("name", "description");
  input2.setAttribute("id", "description");
  div2.appendChild(label2);
  div2.appendChild(input2);

  const div3 = document.createElement("div");
  div3.setAttribute("class", "formNewItem");
  const label3 = document.createElement("label");
  label3.setAttribute("for", "dueDate");
  label3.textContent = "Due date: ";
  const input3 = document.createElement("input");
  input3.setAttribute("type", "dueDate");
  input3.setAttribute("name", "dueDate");
  input3.setAttribute("id", "dueDate");
  div3.appendChild(label3);
  div3.appendChild(input3);

  const div4 = document.createElement("div");
  div4.setAttribute("class", "formNewItem");
  const label4 = document.createElement("label");
  label4.setAttribute("for", "priority");
  label4.textContent = "Priority: ";
  const input4 = document.createElement("input");
  input4.setAttribute("type", "priority");
  input4.setAttribute("name", "priority");
  input4.setAttribute("id", "priority");
  div4.appendChild(label4);
  div4.appendChild(input4);

  const div5 = document.createElement("div");
  div5.setAttribute("class", "formNewItem");
  const label5 = document.createElement("label");
  label5.setAttribute("for", "notes");
  label5.textContent = "Notes: ";
  const input5 = document.createElement("input");
  input5.setAttribute("type", "notes");
  input5.setAttribute("name", "notes");
  input5.setAttribute("id", "notes");
  div5.appendChild(label5);
  div5.appendChild(input5);

  const div6 = document.createElement("div");
  div6.setAttribute("class", "formNewItem");
  const label6 = document.createElement("label");
  label6.setAttribute("for", "checkList");
  label6.textContent = "Check List: ";
  const input6 = document.createElement("input");
  input6.setAttribute("type", "checkList");
  input6.setAttribute("name", "checkList");
  input6.setAttribute("id", "checkList");
  div6.appendChild(label6);
  div6.appendChild(input6);

  const div7 = document.createElement("div");
  div7.setAttribute("class", "formNewItem");
  const input7 = document.createElement("input");
  input7.setAttribute("type", "submit");
  input7.setAttribute("value", "Add");
  div7.appendChild(input7);

  formDiv.appendChild(form);
  form.appendChild(div1);
  form.appendChild(div2);
  form.appendChild(div3);
  form.appendChild(div4);
  form.appendChild(div5);
  form.appendChild(div6);
  form.appendChild(div7);
}

function removeProject(divID) {
  const currentDiv = document.getElementById(divID);
  currentDiv.remove();
  for (let i = 0; i < projectsCreated.length; i++) {
    let project = projectsCreated[i];
    if (project.name === divID) {
      let updatedProjectsCreated = projectsCreated
        .slice(0, i)
        .concat(projectsCreated.slice(i + 1));
      projectsCreated = updatedProjectsCreated;
      return projectsCreated;
    }
  }
}

function markItemAsDone(item) {
  item.done = true;
  const itemDiv = document.getElementById(item.itemID);
  const itemStatusDivP = itemDiv.querySelector(".itemStatus > p");
  const itemStatusDivSpan = itemDiv.querySelector(".itemStatus > span");

  itemStatusDivP.textContent = "Done!";
  itemStatusDivSpan.style.width = "0px";
  itemStatusDivSpan.style.height = "0px";
  itemStatusDivSpan.style.display = "inline";
  itemStatusDivSpan.style.backgroundColor = "none";
}

//tenho de mudar os valores dos arrays dos items existentes. nao sei se sabem o status agora. o valor dos items esta a mudar, mas +e melhor confirmar.
// nos remove tb tenho de remover de storage e quando marco como done tb tenho de actualizar em storage
function retrieveItemsFromStorage() {
  const storedItems = window.localStorage;
  if (storedItems.length != 0) {
    for (let i = 0; i < storedItems.length; i++) {
      const jsonString = storedItems.getItem(storedItems.key(i));
      const obj = JSON.parse(jsonString);
      const objProject = obj.project;
      // se for default nao faças nada
      if (objProject === "default") {
        const defaultDiv = document.getElementById("default");
        addItemToDom(obj, defaultDiv);
        removeItemButton(obj);
      } else {
        let projectDiv = document.getElementById(obj.project);
        if (projectDiv === null) {
          addProject(obj.title);
          projectDiv = document.getElementById(obj.project);
        }

        addItemToDom(obj, projectDiv);
        removeItemButton(obj);
      }
    }
  }
}

window.onload = retrieveItemsFromStorage;

//tenho de actualizar os arrays com os valores em storage
