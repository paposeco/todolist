import { createProject } from "./createProject.js";
import {
  creationTime,
  createList,
  removeAllItemsFromProject,
} from "./createToDo.js";
import { onAddCheckForChangesOnInfo, changeItemOnInfo } from "./info.js";
export { manageDom, addItemToDomSimplified };

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
    const itemFooter = document.createElement("div");
    itemFooter.setAttribute("class", "itemFooter");
    const itemDiv = document.getElementById(newitem.itemID);
    itemDiv.appendChild(itemFooter);
    removeItemButton(newitem, itemFooter);
    editItemButton(newitem, itemFooter, projectDiv);
    const currentForm = document.querySelector(".formDiv");
    currentForm.remove();
    moveAddButton(projectDiv);
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
      // console.log(pair[0] + ", " + pair[1]);
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
    const itemFooter = document.createElement("div");
    itemFooter.setAttribute("class", "itemFooter");
    currentDiv.appendChild(itemFooter);
    removeItemButton(currentItem, itemFooter);
    editItemButton(currentItem, itemFooter, currentDiv);
    const currentForm = document.querySelector(".formDiv");
    if (currentForm !== null) {
      currentForm.remove();
    }
    const nodeProjectDiv = document.getElementById(currentItem.project);
    moveAddButton(nodeProjectDiv);
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
    //    storedItems.removeItem(storedItems.key(item.itemID));
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
  const itemTitleDiv = document.createElement("div");
  itemTitleDiv.setAttribute("class", "itemTitle");

  const itemStatusDiv = document.createElement("div");
  itemStatusDiv.setAttribute("class", "itemStatus");

  const itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.setAttribute("class", "itemDescription");
  const itemDueDateDiv = document.createElement("div");
  itemDueDateDiv.setAttribute("class", "itemDueDate");
  const itemPriorityDiv = document.createElement("div");
  itemPriorityDiv.setAttribute("class", "itemPriority");
  const itemNotesDiv = document.createElement("div");
  itemNotesDiv.setAttribute("class", "itemNotes");
  const itemCheckListDiv = document.createElement("div");
  itemCheckListDiv.setAttribute("class", "itemCheckList");

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
    itemPriority.textContent = "Priority: " + item.priority;
  }
  if (item.notes != "") {
    itemNotes.textContent = "Notes: " + item.notes;
  }

  div.appendChild(itemTitleDiv);
  itemTitleDiv.appendChild(itemTitle);
  div.appendChild(itemStatusDiv);
  itemStatusDiv.appendChild(itemStatus);
  itemStatus.appendChild(itemStatusSpan);
  div.appendChild(itemDescriptionDiv);
  itemDescriptionDiv.appendChild(itemDescription);
  div.appendChild(itemDueDateDiv);
  itemDueDateDiv.appendChild(itemDueDate);
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

function addItemToDomSimplified(item, currentDiv, type) {
  let div = document.createElement("div");
  div.setAttribute("class", "itemDiv");
  div.setAttribute("id", type);
  currentDiv.appendChild(div);
  const itemTitleDiv = document.createElement("div");
  itemTitleDiv.setAttribute("class", "itemTitle");
  const itemStatusDiv = document.createElement("div");
  itemStatusDiv.setAttribute("class", "itemStatus");

  const itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.setAttribute("class", "itemDescription");
  const itemDueDateDiv = document.createElement("div");
  itemDueDateDiv.setAttribute("class", "itemDueDate");
  const itemPriorityDiv = document.createElement("div");
  itemPriorityDiv.setAttribute("class", "itemPriority");
  const itemNotesDiv = document.createElement("div");
  itemNotesDiv.setAttribute("class", "itemNotes");
  const itemCheckListDiv = document.createElement("div");
  itemCheckListDiv.setAttribute("class", "itemCheckList");

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
    itemPriority.textContent = "Priority: " + item.priority;
  }
  if (item.notes != "") {
    itemNotes.textContent = "Notes: " + item.notes;
  }
  div.appendChild(itemTitleDiv);
  itemTitleDiv.appendChild(itemTitle);
  div.appendChild(itemStatusDiv);
  itemStatusDiv.appendChild(itemStatus);
  itemStatus.appendChild(itemStatusSpan);
  div.appendChild(itemDescriptionDiv);
  itemDescriptionDiv.appendChild(itemDescription);
  div.appendChild(itemDueDateDiv);
  itemDueDateDiv.appendChild(itemDueDate);
  div.appendChild(itemPriorityDiv);
  itemPriorityDiv.appendChild(itemPriority);
  div.appendChild(itemNotesDiv);
  itemNotesDiv.appendChild(itemNotes);
  div.appendChild(itemCheckListDiv);
  itemCheckListDiv.appendChild(itemCheckList);
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
  div1.appendChild(label1);
  div1.appendChild(input1);

  const div2 = document.createElement("div");
  div2.setAttribute("class", "formNewItem");
  const label2 = document.createElement("label");
  label2.setAttribute("for", "description");
  label2.textContent = "Description: ";
  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("name", "description");
  input2.setAttribute("id", "description");
  div2.appendChild(label2);
  div2.appendChild(input2);

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
  div3.appendChild(label3);
  div3.appendChild(input3);

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

  div4.appendChild(label4);
  div4.appendChild(input4);

  const div5 = document.createElement("div");
  div5.setAttribute("class", "formNewItem");
  const label5 = document.createElement("label");
  label5.setAttribute("for", "notes");
  label5.textContent = "Notes: ";
  const input5 = document.createElement("input");
  input5.setAttribute("type", "text");
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
  input6.setAttribute("type", "text");
  input6.setAttribute("name", "checkList");
  input6.setAttribute("id", "checkList");
  div6.appendChild(label6);
  div6.appendChild(input6);

  const div7 = document.createElement("div");
  const div8 = document.createElement("div");

  projectDiv.appendChild(formDiv);
  formDiv.appendChild(form);
  form.appendChild(div1);
  form.appendChild(div2);
  form.appendChild(div3);
  form.appendChild(div4);
  form.appendChild(div5);
  form.appendChild(div6);

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
  console.log(createList.updateItemList(null, null, null));
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
    console.log(infoDivDItemid);
    console.log(item.itemID);
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
        const currentDiv = document.getElementById(currentItem.itemID);
        const itemFooter = document.createElement("div");
        itemFooter.setAttribute("class", "itemFooter");
        currentDiv.appendChild(itemFooter);
        removeItemButton(currentItem, itemFooter);
        editItemButton(currentItem, itemFooter, currentDiv);
        moveAddButton(projectDiv);
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
  //  const formDiv = document.querySelector(".formDiv");
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

//on click extend

function makeListFromInput(checkList) {
  const checkListString = checkList;
  const ul = document.createElement("ul");
  const checkListArray = checkListString.split(";");
  for (let i = 0; i < checkListArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = checkListArray[i];
    ul.appendChild(li);
  }
  return ul;
}

// settings por projecto com order of tasks por due date/ priority
// div no info esta mal
//posso por stats: project name/number of tasks not ocmpleted/ tasks completed
