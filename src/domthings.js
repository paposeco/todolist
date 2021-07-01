import { createProject } from "./createProject.js";
import {
  creationTime,
  createList,
  removeAllItemsFromProject,
} from "./createToDo.js";
import { onAddCheckForChangesOnInfo, changeItemOnInfo } from "./info.js";
import { orderTasksP, orderTasksD } from "./index.js";
export { manageDom, addItemToDomSimplified, addItemToDom, styleItem };

window.onload = retrieveItemsFromStorage();

function manageDom() {
  const divContent = document.getElementById("content");
  const addProjectButton = document.createElement("button");
  addProjectButton.innerHTML =
    '<i class="las la-folder-plus"></i><span> New Project</span>';
  addProjectButton.setAttribute("id", "addnewproject");
  const divAddProject = document.getElementById("info");
  divAddProject.appendChild(addProjectButton);
  const storedItems = window.localStorage;
  if (storedItems.length === 0) {
    addProject("default");
  }

  addProjectButton.addEventListener("click", function () {
    addProject(null);
  });
}

function addProject(obj) {
  const divContent = document.getElementById("content");
  const divs = document.querySelectorAll("div#content > div.projectDiv");
  let largestID = 0;
  for (let i = 0; i < divs.length; i++) {
    let divID = divs[i].id;
    let projectNumber = divID.replace("project", "");
    if (largestID < projectNumber) {
      largestID = projectNumber;
    }
  }
  const numberOfProjects = Number(largestID) + 1;
  const createDiv = document.createElement("div");
  let projectTitle;
  let projectName;
  if (obj === null) {
    projectTitle = window.prompt("Project Name:");
    projectName = "project" + numberOfProjects;
    if (projectTitle === null || projectTitle === "") {
      return;
    }
  } else if (obj === "default") {
    projectTitle = "Default";
    projectName = "project0";
  } else {
    projectTitle = obj.name;
    projectName = obj.name;
  }

  const createNewProject = createProject.projectCollection(
    projectTitle,
    projectName
  );
  const projectHeader = document.createElement("div");
  projectHeader.setAttribute("class", "projectHeader");
  const titlePara = document.createElement("h2");
  titlePara.textContent = createNewProject.title;
  createDiv.setAttribute("id", projectName);
  createDiv.setAttribute("class", "projectDiv");
  divContent.appendChild(createDiv);
  createDiv.appendChild(projectHeader);
  projectHeader.appendChild(titlePara);
  const projectDiv = document.getElementById(projectName);
  addItemButton(projectDiv);

  const removeProjectButton = document.createElement("button");
  removeProjectButton.setAttribute("class", "removeProject");
  removeProjectButton.setAttribute("title", "Delete Project");
  removeProjectButton.innerHTML = '<i class="las la-trash"></i>';
  removeProjectButton.addEventListener("click", function () {
    removeProject(projectName);
  });
  projectHeader.appendChild(removeProjectButton);

  const projectSortButtonP = document.createElement("button");
  projectSortButtonP.setAttribute("class", "sortProject");
  projectSortButtonP.setAttribute("title", "Sort by priority");
  projectSortButtonP.innerHTML = '<i class="las la-sort"></i><span>P</span>';
  projectSortButtonP.addEventListener("click", function () {
    orderTasksP(projectName);
  });
  projectHeader.appendChild(projectSortButtonP);
  const projectSortButtonD = document.createElement("button");
  projectSortButtonD.setAttribute("class", "sortProject");
  projectSortButtonD.setAttribute("title", "Sort by due date");
  projectSortButtonD.innerHTML = '<i class="las la-sort"></i><span>D</span>';
  projectSortButtonD.addEventListener("click", function () {
    orderTasksD(projectName);
  });
  projectHeader.appendChild(projectSortButtonD);
}

function addItemButton(projectDiv) {
  const button = document.createElement("button");
  const buttonname = "button" + projectDiv.id;
  button.setAttribute("id", buttonname);
  button.setAttribute("name", projectDiv.id);
  button.setAttribute("title", "Add new item");
  button.setAttribute("class", "addItem");
  button.innerHTML = '<i class="las la-plus-square"></i>';
  projectDiv.appendChild(button);
  button.addEventListener("click", function () {
    const formDivAlreadyExists = document.querySelector(".formDiv");
    if (formDivAlreadyExists !== null && formDivAlreadyExists.hasChildNodes()) {
      return;
    }
    addItemForm(projectDiv, "new");
    formHandler(projectDiv);
  });
}

function moveAddButton(div) {
  if (div.getAttribute("class") === "itemDiv") {
    return;
  }
  const button = div.querySelector(".addItem");
  div.removeChild(button);
  div.appendChild(button);
}

function formHandler(projectDiv) {
  const cancelButton = document.getElementById("cancelAdd");
  cancelButton.addEventListener("click", function () {
    const currentForm = document.getElementById("form" + projectDiv.id);
    currentForm.remove();
  });
  const titleFocus = document.getElementById("title").focus();
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let itemInfo = [];
    for (const pair of formData.entries()) {
      itemInfo.push(pair[1]);
      // console.log(pair[0] + ", " + pair[1]);
    }
    const currentProject = projectDiv.id;
    const itemDivExisting = projectDiv.querySelectorAll("div.itemDiv");
    let highestItemNumber;
    if (itemDivExisting.length === 0) {
      highestItemNumber = 0;
    } else {
      for (let i = 0; i < itemDivExisting.length; i++) {
        const idcomplete = itemDivExisting[i].getAttribute("id");
        const itemword = idcomplete.lastIndexOf("item");
        const id = idcomplete.slice(itemword + 4);
        if (highestItemNumber === undefined) {
          highestItemNumber = Number(id) + 1;
        } else {
          if (highestItemNumber < Number(id) + 1) {
            highestItemNumber = Number(id) + 1;
          }
        }
      }
    }
    const newitem = createList.createNewItem(
      itemInfo[0],
      itemInfo[1],
      itemInfo[2],
      itemInfo[3],
      itemInfo[4],
      itemInfo[5],
      currentProject,
      highestItemNumber
    );
    createProject.addItemToProject(currentProject, newitem);
    addItemToDom(newitem, projectDiv, currentProject);
    onAddCheckForChangesOnInfo(newitem);
    const currentForm = document.querySelector(".formDiv");
    currentForm.remove();
  });
}

function formHandlerEdit(currentDiv) {
  const titleFocus = document.getElementById("title").focus();
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let itemInfo = [];
    for (const pair of formData.entries()) {
      itemInfo.push(pair[1]);
    }
    const currentItemList = createList.updateItemList(null, null, null);
    let currentItem;
    for (let i = 0; i < currentItemList.length; i++) {
      currentItem = currentItemList[i];
      if (currentItem.itemID === currentDiv.id) {
        break;
      }
    }
    createProject.removeItemFromProject(currentItem.project, currentItem);
    createList.removeItemFromList(currentItem);
    currentDiv.replaceChildren();

    currentItem.title = itemInfo[0];
    currentItem.description = itemInfo[1];
    currentItem.dueDate = itemInfo[2];
    currentItem.priority = itemInfo[3];
    currentItem.notes = itemInfo[4];
    currentItem.checkList = itemInfo[5];

    createProject.addItemToProject(currentItem.project, currentItem);
    createList.updateItemList(null, "add", currentItem);
    addItemToDom(currentItem, currentDiv, currentItem.project);
    onAddCheckForChangesOnInfo(currentItem);
    const currentForm = document.querySelector(".formDiv");
    if (currentForm !== null) {
      currentForm.remove();
    }
  });
}

function removeItemButton(item, div) {
  const storedItems = window.localStorage;
  const removeItemBut = document.createElement("button");
  const currentItem = document.getElementById(item.itemID);
  removeItemBut.setAttribute("class", "removeItem");
  removeItemBut.setAttribute("title", "Delete item");
  removeItemBut.innerHTML = '<i class="las la-trash"></i>';
  removeItemBut.addEventListener("click", function () {
    currentItem.remove();
    createList.removeItemFromList(item);
    createProject.removeItemFromProject(item.project, item);
    changeItemOnInfo("priority");
    changeItemOnInfo("duedate");
  });
  div.appendChild(removeItemBut);
}

function addItemToDom(item, projectDiv, projectID) {
  let div;
  if (projectDiv.getAttribute("class") === "itemDiv") {
    div = projectDiv;
  } else {
    div = document.createElement("div");
    div.setAttribute("class", "itemDiv");
    div.setAttribute("id", item.itemID);
    projectDiv.appendChild(div);
  }
  createDomElements(item, div, projectID);
  const itemStatusSpan = div.querySelector(".statusSpan");
  itemStatusSpan.addEventListener("click", function () {
    markItemAsDone(item);
  });

  const itemFooter = document.createElement("div");
  itemFooter.setAttribute("class", "itemFooter");
  const itemDiv = document.getElementById(item.itemID);
  itemDiv.appendChild(itemFooter);
  removeItemButton(item, itemFooter);
  editItemButton(item, itemFooter, projectDiv);
  moveAddButton(projectDiv);
}

function addItemToDomSimplified(item, currentDiv, type) {
  let div = document.createElement("div");
  div.setAttribute("class", "itemDiv");
  div.setAttribute("id", type);
  currentDiv.appendChild(div);
  createDomElements(item, div);
}

function createDomElements(item, div, projectID) {
  const itemHeaderDiv = document.createElement("div");
  const itemTitleDiv = document.createElement("div");
  const itemStatusDiv = document.createElement("div");
  const itemDescriptionDiv = document.createElement("div");
  const itemDueDateDiv = document.createElement("div");
  const itemPriorityDiv = document.createElement("div");
  const itemNotesDiv = document.createElement("div");
  const itemCheckListDiv = document.createElement("div");

  const divs = [
    itemHeaderDiv,
    itemTitleDiv,
    itemStatusDiv,
    itemDescriptionDiv,
    itemDueDateDiv,
    itemPriorityDiv,
    itemNotesDiv,
    itemCheckListDiv,
  ];
  const classes = [
    "itemHeader",
    "itemTitle",
    "itemStatus",
    "itemDescription",
    "itemDueDate",
    "itemPriority",
    "itemNotes",
    "itemCheckList",
  ];

  for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute("class", classes[i]);
  }

  itemPriorityDiv.setAttribute("title", "Priority");

  const itemTitle = document.createElement("h3");
  const itemStatus = document.createElement("p");
  const itemStatusSpan = document.createElement("span");
  itemStatusSpan.setAttribute("class", "statusSpan");
  const itemDescription = document.createElement("p");
  const itemDueDate = document.createElement("p");
  const itemPriority = document.createElement("p");
  const itemNotes = document.createElement("p");
  let itemCheckList;
  if (item.checkList !== undefined && item.checkList.trimEnd() !== "") {
    itemCheckList = makeListFromInput(item.checkList);
    const itemCheckListTitle = document.createElement("p");
    itemCheckListTitle.innerHTML = '<i class="las la-tasks"></i> Tasks:';
    itemCheckListDiv.appendChild(itemCheckListTitle);
  } else {
    itemCheckList = document.createElement("p");
    itemCheckList.textContent = item.checkList;
  }

  itemTitle.textContent = item.title;
  if (item.description != "") {
    itemDescription.textContent = "Description: " + item.description;
  }
  itemStatus.textContent = "Not Finished";
  itemStatusSpan.style.display = "inline-block";

  if (item.dueDate != "") {
    itemDueDate.textContent = "Due: " + item.dueDate;
  }
  if (item.priority != "") {
    itemPriority.innerHTML =
      '<i class="las la-exclamation"></i>' + item.priority;
  }
  itemPriorityDiv.classList.add("priority" + item.priority);
  if (item.notes != "") {
    itemNotes.textContent = "Notes: " + item.notes;
  }

  const divChildren = [
    itemHeaderDiv,
    itemStatusDiv,
    itemDescriptionDiv,
    itemNotesDiv,
    itemDueDateDiv,
    itemCheckListDiv,
  ];
  for (let j = 0; j < divChildren.length; j++) {
    div.appendChild(divChildren[j]);
  }

  itemHeaderDiv.appendChild(itemTitleDiv);
  itemHeaderDiv.appendChild(itemPriorityDiv);

  itemTitleDiv.appendChild(itemTitle);
  itemPriorityDiv.appendChild(itemPriority);

  itemStatusDiv.appendChild(itemStatus);
  itemStatus.appendChild(itemStatusSpan);

  itemDescriptionDiv.appendChild(itemDescription);
  itemDueDateDiv.appendChild(itemDueDate);
  itemNotesDiv.appendChild(itemNotes);

  itemCheckListDiv.appendChild(itemCheckList);
}

function countTask(item) {
  const fullchecklist = item.checkList;
  const checklistarray = fullchecklist.split(";");
  const numberItems = checklistarray.length;
  return numberItems;
  // tenho de pegar na checklist e transformar num objecto
  // ou entao fazer logo isso quando crio o objecto. transformo logo a string num array, mas cada task item tem de ter um id
}

function addItemForm(projectDiv, neworedit) {
  const formDiv = document.createElement("div");
  formDiv.setAttribute("class", "formDiv");
  const form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("class", "formNewItem");
  const formID = "form" + projectDiv.id;
  form.setAttribute("id", formID);

  const div1 = document.createElement("div");
  div1.setAttribute("class", "formNewItem");
  const label1 = document.createElement("label");
  label1.setAttribute("for", "title");
  label1.textContent = "Title: ";
  const input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("name", "title");
  input1.setAttribute("id", "title");
  input1.required = true;

  const div2 = document.createElement("div");
  div2.setAttribute("class", "formNewItem");
  const label2 = document.createElement("label");
  label2.setAttribute("for", "description");
  label2.textContent = "Description: ";
  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("name", "description");
  input2.setAttribute("id", "description");

  const currentTime = creationTime();
  const div3 = document.createElement("div");
  div3.setAttribute("class", "formNewItem");
  const label3 = document.createElement("label");
  label3.setAttribute("for", "dueDate");
  label3.textContent = "Due date: ";
  const input3 = document.createElement("input");
  input3.setAttribute("type", "date");
  input3.setAttribute("name", "dueDate");
  input3.setAttribute("id", "dueDate");
  input3.setAttribute("value", "YYYY-MM-DD");
  input3.setAttribute("min", currentTime);

  const div4 = document.createElement("div");
  div4.setAttribute("class", "formNewItem");
  const label4 = document.createElement("label");
  label4.setAttribute("for", "priority");
  label4.textContent = "Priority: ";
  const input4 = document.createElement("select");
  input4.setAttribute("name", "priority");
  input4.setAttribute("id", "priority");

  for (let i = 1; i < 6; i++) {
    const newSelectOption = document.createElement("option");
    newSelectOption.setAttribute("value", i);
    newSelectOption.textContent = i;
    input4.appendChild(newSelectOption);
  }

  const div5 = document.createElement("div");
  div5.setAttribute("class", "formNewItem");
  const label5 = document.createElement("label");
  label5.setAttribute("for", "notes");
  label5.textContent = "Notes: ";
  const input5 = document.createElement("input");
  input5.setAttribute("type", "text");
  input5.setAttribute("name", "notes");
  input5.setAttribute("id", "notes");

  const div6 = document.createElement("div");
  div6.setAttribute("class", "formNewItem");
  div6.setAttribute("title", "Separate items with ';'");
  const label6 = document.createElement("label");
  label6.setAttribute("for", "checkList");
  label6.textContent = "Check List: ";
  const input6 = document.createElement("input");
  input6.setAttribute("type", "text");
  input6.setAttribute("name", "checkList");
  input6.setAttribute("id", "checkList");

  const divs = [div1, div2, div3, div4, div5, div6];
  const inputs = [input1, input2, input3, input4, input5, input6];
  const labels = [label1, label2, label3, label4, label5, label6];
  divs.forEach(function (div, index) {
    div.appendChild(labels[index]);
    div.appendChild(inputs[index]);
    form.appendChild(div);
  });

  projectDiv.appendChild(formDiv);
  formDiv.appendChild(form);
  const div7 = document.createElement("div");
  const div8 = document.createElement("div");

  if (neworedit === "new") {
    div7.setAttribute("class", "formNewItem");
    const input7 = document.createElement("input");
    input7.setAttribute("type", "submit");
    input7.setAttribute("value", "Add");
    div7.appendChild(input7);

    div8.setAttribute("class", "formNewItem");
    const input8 = document.createElement("input");
    input8.setAttribute("type", "button");
    input8.setAttribute("value", "Cancel");
    input8.setAttribute("id", "cancelAdd");
    div8.appendChild(input8);

    form.appendChild(div7);
    form.appendChild(div8);
  } else {
    div7.setAttribute("class", "formNewItem");
    const input7 = document.createElement("input");
    input7.setAttribute("type", "submit");
    input7.setAttribute("value", "save");
    div7.appendChild(input7);

    form.appendChild(div7);
  }
}

function removeProject(divID) {
  const currentDiv = document.getElementById(divID);
  const currentItemList = createList.updateItemList(null, null, null);
  currentDiv.remove();
  const currentProjectArray = createProject.projectsCreated;
  for (let i = 0; i < currentProjectArray.length; i++) {
    let project = currentProjectArray[i];
    if (project.name === divID) {
      let updatedProjectsCreated = currentProjectArray
        .slice(0, i)
        .concat(currentProjectArray.slice(i + 1));
      createProject.updateProjectArray(updatedProjectsCreated);
      break;
    }
  }
  createList.removeAllItemsFromProject(divID);
  changeItemOnInfo("priority");
  changeItemOnInfo("duedate");
  const storedItems = window.localStorage;
  for (let k = 0; k < storedItems.length; k++) {
    const storedItemKey = storedItems.key(k);
    if (storedItemKey === divID) {
      storedItems.removeItem(storedItemKey);
    }
  }
  return createProject.projectsCreated;
}

function markItemAsDone(item) {
  createList.removeItemFromList(item);
  item.done = true;
  createList.updateItemList(null, "add", item);
  createProject.editItemInProject(item);
  styleItem(item);
  const infoDivP = document.querySelector(".infoPriority");
  const infoDivD = document.querySelector(".infoDate");
  if (infoDivP !== null) {
    const infoDivPid = infoDivP.getAttribute("id");
    const infoDivPItemid = infoDivPid.slice(5);
    if (infoDivPItemid === item.itemID) {
      infoDivP.remove();
      changeItemOnInfo("priority");
    }
  }
  if (infoDivD !== null) {
    const infoDivDid = infoDivD.getAttribute("id");
    const infoDivDItemid = infoDivDid.slice(5);
    if (infoDivDItemid === item.itemID) {
      console.log("sim");
      infoDivD.remove();
      changeItemOnInfo("duedate");
    }
  }
  const currentDiv = document.getElementById(item.itemID);
  const editButton = currentDiv.querySelector(".editItem");
  editButton.remove();
}

function styleItem(item) {
  const itemDiv = document.getElementById(item.itemID);
  const itemStatusDivP = itemDiv.querySelector(".itemStatus > p");
  const itemStatusDivSpan = document.createElement("span");
  itemStatusDivSpan.setAttribute("class", "statusSpanComplete");
  itemStatusDivP.textContent = "Done!";
  itemStatusDivSpan.style.display = "inline-block";
  itemStatusDivSpan.innerHTML = '<i class="lar la-check-square"></i>';
  itemStatusDivP.appendChild(itemStatusDivSpan);
}

function retrieveItemsFromStorage() {
  const storedItems = window.localStorage;
  if (storedItems.length != 0) {
    let array = [];
    for (let j = 0; j < storedItems.length; j++) {
      let projectNumber = storedItems.key(j).replace("project", "");
      array.push(projectNumber);
    }
    array.sort();
    for (let i = 0; i < storedItems.length; i++) {
      const jsonString = storedItems.getItem("project" + array[i]);
      const obj = JSON.parse(jsonString);
      addProject(obj);
      const projectItems = obj.items;
      const projectDiv = document.getElementById(obj.name);
      for (let k = 0; k < projectItems.length; k++) {
        const currentItem = projectItems[k];
        addItemToDom(currentItem, projectDiv);
        createList.updateItemList(null, "add", currentItem);
        if (currentItem.done) {
          styleItem(currentItem);
        }
      }
    }
  }
}

function editItemButton(item, footerDiv, itemDiv) {
  if (item.done) {
    return;
  }
  const editItemBut = document.createElement("button");
  editItemBut.setAttribute("class", "editItem");
  editItemBut.setAttribute("title", "Edit item");
  editItemBut.innerHTML = '<i class="las la-edit"></i>';
  editItemBut.addEventListener("click", function () {
    const formExists = document.querySelector("form");
    if (formExists !== null) {
      alert("Finish editing previous item first.");
      return;
    }
    editItem(item);
  });
  footerDiv.appendChild(editItemBut);
}

function editItem(item) {
  const currentDiv = document.getElementById(item.itemID);
  addItemForm(currentDiv, "edit");
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNotes = document.getElementById("notes");
  const inputCheckList = document.getElementById("checkList");
  inputTitle.value = item.title;
  inputDescription.value = item.description;
  inputDueDate.value = item.dueDate;
  inputPriority.value = item.priority;
  inputNotes.value = item.notes;
  inputCheckList.value = item.checkList;
  formHandlerEdit(currentDiv);
}

function makeListFromInput(checkList) {
  const checkListString = checkList;
  const ul = document.createElement("ul");
  const checkListArray = checkListString.split(";");
  for (let i = 0; i < checkListArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = checkListArray[i].trim();
    ul.appendChild(li);
  }
  return ul;
}
