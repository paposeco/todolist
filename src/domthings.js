import { createProject } from "./createProject.js";
import {
  creationTime,
  createList,
  removeAllItemsFromProject,
  createCheckListObject,
} from "./createToDo.js";
import { onAddCheckForChangesOnInfo, changeItemOnInfo } from "./info.js";
import { orderTasksP, orderTasksD } from "./index.js";

export {
  manageDom,
  addItemToDomSimplified,
  addItemToDom,
  styleItem,
  showOrHideDivs,
};

//gets projects and tasks from storage and displays on page
window.onload = retrieveItemsFromStorage();

// creates addproject button with event listener addproject function
function manageDom() {
  const divContent = document.getElementById("content");
  const addProjectButton = document.createElement("button");
  addProjectButton.innerHTML =
    '<i class="las la-folder-plus"></i><span> New Project</span>';
  addProjectButton.setAttribute("id", "addnewproject");
  const divAddProject = document.getElementById("info");
  divAddProject.appendChild(addProjectButton);
  const storedItems = window.localStorage;
  // if there are now projects in storage, creates an empty default list
  if (storedItems.length === 0) {
    addProject("default");
  }

  addProjectButton.addEventListener("click", function () {
    addProject(null);
  });
}

// adds project to page with a unique ID and a title provided by the user with a prompt. checks for the number of projectDivs and adds 1 to that number
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
  if (obj === null && obj !== "default") {
    projectTitle = window.prompt("Project Name:");
    projectName = "project" + numberOfProjects;
    if (projectTitle === null || projectTitle === "") {
      return;
    }
  } else if (obj === "default") {
    projectTitle = "Default List";
    projectName = "project0";
  } else {
    projectTitle = obj.name;
    projectName = obj.name;
  }

  // calls the projectcollection of createproject function, that uses a constructor; the project is created without any items
  const createNewProject = createProject.projectCollection(
    projectTitle,
    projectName
  );
  // displays projects on page
  const projectHeader = document.createElement("div");
  projectHeader.setAttribute("class", "projectHeader");
  const closeproject = document.createElement("div");
  closeproject.setAttribute("class", "closeprojectdiv");
  const titlePara = document.createElement("h2");
  titlePara.textContent = createNewProject.title;
  createDiv.setAttribute("id", projectName);
  createDiv.setAttribute("class", "projectDiv");
  divContent.appendChild(createDiv);
  createDiv.appendChild(closeproject);
  createDiv.appendChild(projectHeader);
  projectHeader.appendChild(titlePara);
  const projectDiv = document.getElementById(projectName);
  // creates button for adding tasks to project
  addItemButton(projectDiv);

  // creates 2 buttons for deleting projects: 1 as a cross on top right corner,and 1 with a basket next to the project title
  const closeprojectbutton = document.createElement("button");
  closeprojectbutton.setAttribute("class", "closeProject");
  closeprojectbutton.setAttribute("title", "Delete Project");
  closeprojectbutton.innerHTML = '<i class="lar la-window-close"></i>';
  closeprojectbutton.addEventListener("click", function () {
    removeProject(projectName);
  });

  closeproject.appendChild(closeprojectbutton);
  const removeProjectButton = document.createElement("button");
  removeProjectButton.setAttribute("class", "removeProject");
  removeProjectButton.setAttribute("title", "Delete Project");
  removeProjectButton.innerHTML = '<i class="las la-trash"></i>';
  removeProjectButton.addEventListener("click", function () {
    removeProject(projectName);
  });
  projectHeader.appendChild(removeProjectButton);

  // adds buttons for sorting tasks by priority and due date
  const projectSortButtonP = document.createElement("button");
  projectSortButtonP.setAttribute("class", "sortProject");
  projectSortButtonP.setAttribute("title", "Sort by Priority");
  projectSortButtonP.innerHTML = '<i class="las la-sort-up"></i><span>P</span>';

  projectSortButtonP.addEventListener("click", function () {
    orderTasksP(projectName);
  });
  projectHeader.appendChild(projectSortButtonP);
  const projectSortButtonD = document.createElement("button");
  projectSortButtonD.setAttribute("class", "sortProject");
  projectSortButtonD.setAttribute("title", "Sort by Due Date");
  projectSortButtonD.innerHTML = '<i class="las la-sort-up"></i><span>D</span>';
  projectSortButtonD.addEventListener("click", function () {
    orderTasksD(projectName);
  });
  projectHeader.appendChild(projectSortButtonD);

  // adds button to expand all tasks on project
  const projectExpandAll = document.createElement("button");
  projectExpandAll.setAttribute("class", "expandall");
  projectExpandAll.classList.add("collapsed");
  projectExpandAll.setAttribute("title", "Expand All");
  projectExpandAll.innerHTML = '<i class="las la-angle-double-down"></i>';
  projectExpandAll.addEventListener("click", function (event) {
    const clickedprojectChildDiv = event.currentTarget.parentNode;
    const clickedproject = clickedprojectChildDiv.parentNode.getAttribute("id");
    const allprojects = createProject.projectsCreated;
    let itemarray;
    allprojects.forEach(function (project) {
      if (project.name === clickedproject) {
        itemarray = project.items;
      }
    });
    // each task has a class of expanded or collapsed which is switched accordingly
    if (projectExpandAll.classList.contains("collapsed")) {
      itemarray.forEach((item) => showOrHideDivs(item, "show"));
      projectExpandAll.setAttribute("title", "Collapse All");
      projectExpandAll.classList.remove("collapsed");
      projectExpandAll.classList.add("expanded");
      projectExpandAll.innerHTML = '<i class="las la-angle-double-up"></i>';
    } else {
      itemarray.forEach((item) => showOrHideDivs(item, "hide"));
      projectExpandAll.setAttribute("title", "Expand All");
      projectExpandAll.classList.remove("expanded");
      projectExpandAll.classList.add("collapsed");
      projectExpandAll.innerHTML = '<i class="las la-angle-double-down"></i>';
    }
  });
  projectHeader.appendChild(projectExpandAll);
}

// creates button for adding items to project; the button has an ID that related to the project div it i on.
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
    // prevents user from adding items on more than one project at a time
    const formDivAlreadyExists = document.querySelector(".formDiv");
    if (formDivAlreadyExists !== null && formDivAlreadyExists.hasChildNodes()) {
      return;
    }
    const title = document.createElement("h4");
    title.textContent = "New Item";
    projectDiv.appendChild(title);
    // displays form for adding new item
    addItemForm(projectDiv, "new");
    // receives the input the user provided and displays the task created
    formHandler(projectDiv);
  });
}

// after adding a new task, the add item button is moved to the end of the task list
function moveAddButton(div) {
  if (div.getAttribute("class") === "itemDiv") {
    return;
  }
  const button = div.querySelector(".addItem");
  div.removeChild(button);
  div.appendChild(button);
}

// on form submit, creates a new item with the constructor defined in createList
function formHandler(projectDiv) {
  const cancelButton = document.getElementById("cancelAdd");
  cancelButton.addEventListener("click", function () {
    // if user presses cancel, removes form from dom
    const currentForm = document.getElementById("form" + projectDiv.id);
    currentForm.remove();
    const titleForm = document.querySelector("h4");
    if (titleForm !== null) {
      titleForm.remove();
    }
  });
  const titleFocus = document.getElementById("title").focus();
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //places info submitted on form on an array
    let itemInfo = [];
    for (const pair of formData.entries()) {
      itemInfo.push(pair[1]);
      // console.log(pair[0] + ", " + pair[1]);
    }
    const currentProject = projectDiv.id;
    const itemDivExisting = projectDiv.querySelectorAll("div.itemDiv");
    let highestItemNumber;
    // determines the highest task ID on the current project; the new task will have that ID+1
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
    // creates new task
    const newitem = createList.createNewItem(
      itemInfo[0],
      itemInfo[1],
      itemInfo[2],
      itemInfo[3],
      itemInfo[4],
      itemInfo[5],
      itemInfo[6],
      currentProject,
      highestItemNumber
    );
    // adds task to corresponding project
    createProject.addItemToProject(currentProject, newitem);
    // displays task on dom
    addItemToDom(newitem, projectDiv, currentProject);
    //updates info on page
    onAddCheckForChangesOnInfo(newitem);
    //removes form
    const currentForm = document.querySelector("form");
    currentForm.remove();
  });
}

//similar to formHandler, but first deletes the task from the project and from the list of tasks; the task ID remains the same
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
    // removes task from project and from list of tasks and removes task from dom
    createProject.removeItemFromProject(currentItem.project, currentItem);
    createList.removeItemFromList(currentItem);
    currentDiv.replaceChildren();

    // gets the updated info
    currentItem.title = itemInfo[0];
    currentItem.description = itemInfo[1];
    currentItem.dueDate = itemInfo[2];
    currentItem.priority = itemInfo[3];
    currentItem.notes = itemInfo[4];
    currentItem.url = itemInfo[5];
    currentItem.checkList = createCheckListObject(itemInfo[6], currentItem.ID);

    // creates and adds the updated task to the current project;
    createProject.addItemToProject(currentItem.project, currentItem);
    createList.updateItemList(null, "add", currentItem);
    // displays the task on dom and updates info; removes form from page
    addItemToDom(currentItem, currentDiv, currentItem.project);
    onAddCheckForChangesOnInfo(currentItem);
    const currentForm = document.querySelector("form");
    if (currentForm !== null) {
      currentForm.remove();
    }
  });
}

// creates button for removing task
function removeItemButton(item, div) {
  const storedItems = window.localStorage;
  const removeItemBut = document.createElement("button");
  const currentItem = document.getElementById(item.itemID);
  removeItemBut.setAttribute("class", "removeItem");
  removeItemBut.setAttribute("title", "Delete item");
  removeItemBut.innerHTML = '<i class="las la-trash"></i>';
  removeItemBut.addEventListener("click", function () {
    //removes task from dom
    currentItem.remove();
    //removes task from list of tasks
    createList.removeItemFromList(item);
    //removes task from project
    createProject.removeItemFromProject(item.project, item);
    // checks if it's necessary to change tasks on info
    changeItemOnInfo("priority");
    changeItemOnInfo("duedate");
  });
  div.appendChild(removeItemBut);
}

function addItemToDom(item, projectDiv, projectID) {
  let div = document.getElementById(item.itemID);
  if (div === null) {
    div = document.createElement("div");
    div.setAttribute("class", "itemDiv");
    div.setAttribute("id", item.itemID);
    projectDiv.appendChild(div);
  }
  // removes temporary title for form
  const titleForm = document.querySelector("h4");
  if (titleForm !== null) {
    titleForm.remove();
  }
  // creates dom elements
  createDomElements(item, div, projectID);
  // creates event listener task status, so that the user can mark task as finished
  const itemStatusSpan = div.querySelector(".statusSpan");
  itemStatusSpan.addEventListener("click", function () {
    markItemAsDone(item);
  });
  // after adding item to dom, item is expanded
  showOrHideDivs(item, "show");
  const itemExpand = div.querySelector(".itemExpand");
  //adds event listener so that the user can collapse task
  itemExpand.addEventListener("click", function () {
    if (div.classList.contains("hidden")) {
      showOrHideDivs(item, "show");
    } else {
      showOrHideDivs(item, "hide");
    }
  });
  // adds remove and edit button to task
  const itemFooter = document.createElement("div");
  itemFooter.setAttribute("class", "itemFooter");
  const itemDiv = document.getElementById(item.itemID);
  itemDiv.appendChild(itemFooter);
  removeItemButton(item, itemFooter);
  editItemButton(item, itemFooter, projectDiv);
  const newprojectdiv = document.getElementById(item.project);
  moveAddButton(newprojectdiv);
}

// similar to previous function, but instead of using createdomelement to show all the available information on a task, only shows some; to be used on the info section
function addItemToDomSimplified(item, currentDiv, type) {
  let div = document.createElement("div");
  div.setAttribute("class", "itemDiv");
  div.setAttribute("id", type);
  currentDiv.appendChild(div);

  const itemHeaderDiv = document.createElement("div");
  const itemTitleDiv = document.createElement("div");
  const itemDescriptionDiv = document.createElement("div");
  const itemDueDateDiv = document.createElement("div");
  const itemPriorityDiv = document.createElement("div");

  const divs = [
    itemHeaderDiv,
    itemTitleDiv,
    itemDescriptionDiv,
    itemDueDateDiv,
    itemPriorityDiv,
  ];
  const classes = [
    "itemHeader",
    "itemTitle",
    "itemDescription",
    "itemDueDate",
    "itemPriority",
  ];

  for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute("class", classes[i]);
  }

  itemPriorityDiv.setAttribute("title", "Priority");
  const itemTitle = document.createElement("h3");
  const itemDescription = document.createElement("p");
  const itemDueDate = document.createElement("p");
  const itemPriority = document.createElement("p");

  itemTitle.textContent = item.title;
  if (item.description != "") {
    itemDescription.textContent = "Description: " + item.description;
  }
  if (item.dueDate != "") {
    itemDueDate.textContent = "Due: " + item.dueDate;
  }
  if (item.priority != "") {
    itemPriority.innerHTML =
      '<i class="las la-exclamation"></i>' + item.priority;
  }
  itemPriorityDiv.classList.add("priority" + item.priority);
  const divChildren = [itemHeaderDiv, itemDescriptionDiv, itemDueDateDiv];

  for (let j = 0; j < divChildren.length; j++) {
    div.appendChild(divChildren[j]);
  }
  itemHeaderDiv.appendChild(itemTitleDiv);
  itemHeaderDiv.appendChild(itemPriorityDiv);
  itemTitleDiv.appendChild(itemTitle);
  itemPriorityDiv.appendChild(itemPriority);
  itemDescriptionDiv.appendChild(itemDescription);
  itemDueDateDiv.appendChild(itemDueDate);
}

// creates dom elements to display task information
function createDomElements(item, div, projectID) {
  // each piece of information has its own div
  const itemHeaderDiv = document.createElement("div");
  const itemTitleDiv = document.createElement("div");
  const itemExpandDiv = document.createElement("div");
  const itemStatusDiv = document.createElement("div");
  const itemDescriptionDiv = document.createElement("div");
  const itemDueDateDiv = document.createElement("div");
  const itemPriorityDiv = document.createElement("div");
  const itemNotesDiv = document.createElement("div");
  const itemUrlDiv = document.createElement("div");
  const itemCheckListDiv = document.createElement("div");

  const divs = [
    itemHeaderDiv,
    itemTitleDiv,
    itemExpandDiv,
    itemStatusDiv,
    itemDescriptionDiv,
    itemDueDateDiv,
    itemPriorityDiv,
    itemNotesDiv,
    itemUrlDiv,
    itemCheckListDiv,
  ];
  const classes = [
    "itemHeader",
    "itemTitle",
    "itemExpand",
    "itemStatus",
    "itemDescription",
    "itemDueDate",
    "itemPriority",
    "itemNotes",
    "itemUrl",
    "itemCheckList",
  ];

  // sets class for each div
  for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute("class", classes[i]);
  }

  itemPriorityDiv.setAttribute("title", "Priority");

  const itemTitle = document.createElement("h3");
  const itemExpand = document.createElement("p");
  const itemStatus = document.createElement("p");
  const itemStatusSpan = document.createElement("span");
  itemStatusSpan.setAttribute("class", "statusSpan");
  const itemDescription = document.createElement("p");
  const itemDueDate = document.createElement("p");
  const itemPriority = document.createElement("p");
  const itemNotes = document.createElement("p");
  const itemUrlPara = document.createElement("p");
  const itemUrlA = document.createElement("a");
  let itemCheckList;
  // if the task has a checklist, displays a list by calling makelistfrominput
  if (item.checkList !== undefined && item.checkList !== "") {
    itemCheckList = makeListFromInput(item, item.checkList);
    const itemCheckListTitle = document.createElement("p");
    const tasks = countTasks(item);
    itemCheckListTitle.innerHTML =
      '<i class="las la-tasks"></i> Tasks (' + tasks[0] + "/" + tasks[1] + ")";
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

  if (item.url !== "") {
    itemUrlPara.innerHTML = '<i class="las la-external-link-alt"></i>';
    itemUrlPara.appendChild(itemUrlA);
    itemUrlA.textContent = item.url;
    itemUrlA.setAttribute("href", item.url);
  }

  itemExpand.innerHTML = '<i class="las la-angle-double-down"></i>';

  const divChildren = [
    itemHeaderDiv,
    itemExpandDiv,
    itemStatusDiv,
    itemDescriptionDiv,
    itemNotesDiv,
    itemUrlDiv,
    itemDueDateDiv,
    itemCheckListDiv,
  ];
  for (let j = 0; j < divChildren.length; j++) {
    div.appendChild(divChildren[j]);
  }

  itemHeaderDiv.appendChild(itemTitleDiv);
  itemHeaderDiv.appendChild(itemPriorityDiv);

  itemTitleDiv.appendChild(itemTitle);
  itemExpandDiv.appendChild(itemExpand);

  itemPriorityDiv.appendChild(itemPriority);

  itemStatusDiv.appendChild(itemStatus);
  itemStatus.appendChild(itemStatusSpan);

  itemDescriptionDiv.appendChild(itemDescription);
  itemDueDateDiv.appendChild(itemDueDate);
  itemNotesDiv.appendChild(itemNotes);
  itemUrlDiv.appendChild(itemUrlPara);
  itemCheckListDiv.appendChild(itemCheckList);
}

// creates form on dom
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
  label1.innerHTML = "Title:";
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

  // due date needs to be higher than the date of task creation
  const currentTime = creationTime();
  const div3 = document.createElement("div");
  div3.setAttribute("class", "formNewItem");
  const label3 = document.createElement("label");
  label3.setAttribute("for", "dueDate");
  label3.textContent = "Deadline: ";
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
  label5.innerHTML = "Notes: <br>";
  const input5 = document.createElement("textarea");
  input5.setAttribute("name", "notes");
  input5.setAttribute("id", "notes");
  input5.setAttribute("maxlength", "500");
  input5.style.resize = "none";

  const div9 = document.createElement("div");
  div9.setAttribute("class", "formNewItem");
  const label9 = document.createElement("label");
  label9.setAttribute("for", "link");
  label9.textContent = "Add a link:";
  const input9 = document.createElement("input");
  input9.setAttribute("type", "url");
  input9.setAttribute("name", "link");
  input9.setAttribute("id", "link");

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

  const divs = [div1, div2, div3, div4, div5, div9, div6];
  const inputs = [input1, input2, input3, input4, input5, input9, input6];
  const labels = [label1, label2, label3, label4, label5, label9, label6];
  divs.forEach(function (div, index) {
    div.appendChild(labels[index]);
    div.appendChild(inputs[index]);
    form.appendChild(div);
  });

  projectDiv.appendChild(formDiv);
  formDiv.appendChild(form);
  const div7 = document.createElement("div");
  const div8 = document.createElement("div");
  const formfooter = document.createElement("div");
  formfooter.setAttribute("class", "formfooter");

  // if the task already exists, only shows "save" button; otherwise shows Add and Cancel buttons
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
    formfooter.appendChild(div7);
    formfooter.appendChild(div8);
    form.appendChild(formfooter);
  } else {
    div7.setAttribute("class", "formNewItem");
    const input7 = document.createElement("input");
    input7.setAttribute("type", "submit");
    input7.setAttribute("value", "Save");
    div7.appendChild(input7);
    formfooter.appendChild(div7);
    form.appendChild(formfooter);
  }
}

//remove project from dom and from list of projects; updates tasks on info if necessary; removes item from local storage
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

// mark task as complete
function markItemAsDone(item) {
  // removes task from list of tasks
  createList.removeItemFromList(item);
  //changes task status to true
  item.done = true;
  // if the task as a checklist of subtasks, mark those as finished too
  markAllTasksComplete(item);
  // adds the task back to list of tasks and updates task on project list
  createList.updateItemList(null, "add", item);
  createProject.editItemInProject(item);
  // changes task appearance on dom and updates info if necessary
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
  //after a task has been marked as finished, it can't be edited, only removed
  editButton.remove();
}

// a finished task as a status text of Done and a checked square
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

// on page load, retrieves projects from storage and displays them on page with addproject and additemtodom for each task
function retrieveItemsFromStorage() {
  const storedItems = window.localStorage;
  if (storedItems.length === 0) {
    return;
  } else {
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
        showOrHideDivs(currentItem, "hide");
        createList.updateItemList(null, "add", currentItem);
        if (currentItem.done) {
          styleItem(currentItem);
        }
      }
    }
  }
}

//creates edit button, add event listener and prevents user from editing two items at the same time
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
      alert("Finish editing or cancel previous item first.");
      return;
    }

    editItem(item);
  });
  footerDiv.appendChild(editItemBut);
}

// calls the additemform function and display the form with existing item values; calls formhandleredit to handle current input values
function editItem(item) {
  const currentDiv = document.getElementById(item.itemID);
  const title = document.createElement("h4");
  title.textContent = "Edit Item";
  currentDiv.appendChild(title);
  addItemForm(currentDiv, "edit");
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputDueDate = document.getElementById("dueDate");
  const inputPriority = document.getElementById("priority");
  const inputNotes = document.getElementById("notes");
  const inputUrl = document.getElementById("link");
  const inputCheckList = document.getElementById("checkList");
  inputTitle.value = item.title;
  inputDescription.value = item.description;
  inputDueDate.value = item.dueDate;
  inputPriority.value = item.priority;
  inputNotes.value = item.notes;
  inputUrl.value = item.url;
  inputCheckList.value = createStringFromTasklist(item.checkList);
  formHandlerEdit(currentDiv);
}

// when editing a task, transforms the checklist back to a string
function createStringFromTasklist(checkList) {
  const objvalues = Object.values(checkList);
  const objvaluesStringsOnly = objvalues.filter(
    (task) => typeof task !== "boolean"
  );
  const string = objvaluesStringsOnly.toString();
  const finalstring = string.replaceAll(",", ";");
  return finalstring;
}

// creates a list ul from object of subtasks; give unique id to each li
function makeListFromInput(item, checkList) {
  const ul = document.createElement("ul");
  for (const [key, value] of Object.entries(checkList)) {
    if (typeof value !== "boolean") {
      const li = document.createElement("li");
      li.textContent = value;
      li.setAttribute("id", key);
      if (!checkList[key + "Status"]) {
        li.setAttribute("class", "taskNotComplete");
        // adds eventlistener to each li to mark subtask as complete
        li.addEventListener("click", function (event) {
          markTaskComplete(event, li, item);
        });
      } else {
        li.setAttribute("class", "taskComplete");
      }
      ul.appendChild(li);
    }
  }
  return ul;
}

// count number of subtasks in checklist; returns number of completed subtasks and total number of tasks
function countTasks(item) {
  const fullchecklist = item.checkList;
  const checklistarray = Object.values(fullchecklist);
  let completedtasks = 0;
  let totaltasks = Number(checklistarray.length) / 2;
  checklistarray.forEach(function (element) {
    if (typeof element === "boolean" && element) {
      ++completedtasks;
    }
  });
  return [completedtasks, totaltasks];
}

// marks subtask as complete and updates task on task list and project.
function markTaskComplete(event, li, item) {
  if (event.target.getAttribute("class") === "taskComplete") {
    return;
  }
  event.target.setAttribute("class", "taskComplete");
  createList.removeItemFromList(item);
  const objCheckList = item.checkList;
  objCheckList[li.getAttribute("id") + "Status"] = true;
  createList.updateItemList(null, "add", item);
  createProject.editItemInProject(item);
  const div = document.getElementById(item.itemID);
  const divchecklist = div.querySelector(".itemCheckList");
  const p = divchecklist.querySelector("p");
  const tasks = countTasks(item);
  p.innerHTML =
    '<i class="las la-tasks"></i> Tasks (' + tasks[0] + "/" + tasks[1] + ")";
}

// if a task if marked as finished, mark every subtask on checklist as complete too
function markAllTasksComplete(item) {
  const objCheckList = item.checkList;
  for (const [key, value] of Object.entries(objCheckList)) {
    if (!value) {
      objCheckList[key] = true;
      const liId = key.replace("Status", "");
      const li = document.getElementById(liId);
      li.setAttribute("class", "taskComplete");
    }
  }
  const div = document.getElementById(item.itemID);
  const divchecklist = div.querySelector(".itemCheckList");
  const p = divchecklist.querySelector("p");
  const tasks = countTasks(item);
  p.innerHTML =
    '<i class="las la-tasks"></i> Tasks (' + tasks[0] + "/" + tasks[1] + ")";
  return item;
}

// for collapsing and expanding task
function showOrHideDivs(item, showorhide) {
  const itemdiv = document.getElementById(item.itemID);
  const description = itemdiv.querySelector(".itemDescription");
  const status = itemdiv.querySelector(".itemStatus");
  const notes = itemdiv.querySelector(".itemNotes");
  const url = itemdiv.querySelector(".itemUrl");
  const checkList = itemdiv.querySelector(".itemCheckList");
  const expand = itemdiv.querySelector(".itemExpand");
  if (showorhide === "hide") {
    if (itemdiv.classList.contains("show")) {
      itemdiv.classList.remove("show");
    }
    itemdiv.classList.add("hidden");
    description.style.display = "none";
    status.style.display = "none";
    notes.style.display = "none";
    url.style.display = "none";
    checkList.style.display = "none";
    expand.innerHTML = '<i class="las la-angle-double-down"></i>';
  } else {
    if (itemdiv.classList.contains("hidden")) {
      itemdiv.classList.remove("hidden");
    }
    itemdiv.classList.add("show");
    description.style.display = "contents";
    status.style.display = "contents";
    notes.style.display = "contents";
    url.style.display = "contents";
    checkList.style.display = "contents";
    expand.innerHTML = '<i class="las la-angle-double-up"></i>';
  }
}
