/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });


class projectCreator {
  constructor(title, name, items) {
    this.title = "Project: " + title;
    this.name = name;
    this.items = [];
  }
}

function createNewProject(title, name, items) {
  const storedItems = window.localStorage;
  for (let i = 0; i < storedItems.length; i++) {
    const objName = storedItems.key(i);
    if (objName === name) {
      const jsonString = storedItems.getItem(storedItems.key(i));
      return JSON.parse(jsonString);
    }
  }
  const newProject = new projectCreator(title, name, items);
  const projectForStorage = JSON.stringify(newProject);
  storedItems.setItem(newProject.name, projectForStorage);
  return newProject;
}


/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creationTime": () => (/* binding */ creationTime),
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getYear/index.js");




function creationTime() {
  const now = Date.now();
  const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(now);
  const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(now);
  const year = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(now);
  const finaldate = day + "/" + month + "/" + year;
  return finaldate;
}

class toDoCreater {
  constructor(
    title,
    description,
    dueDate,
    priority,
    creationDate,
    notes,
    checkList,
    project,
    itemNumberInProject,
    done
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.creationDate = creationDate;
    this.notes = notes;
    this.checkList = checkList;
    this.project = project;
    this.done = done;
    this.itemID = project + "item" + itemNumberInProject;
  }
}

const createList = (function () {
  let itemList = [];
  const updateItemList = function (newlist, addorremove, item) {
    if (addorremove === "add") {
      itemList.push(item);
      return itemList;
    } else if (newlist === null && addorremove === null && item === null) {
      return itemList;
    } else {
      itemList = newlist;
      return itemList;
    }
  };

  const createNewItem = function (
    title,
    description,
    dueDate,
    priority,
    notes,
    checkList,
    project,
    itemNumberInProject
  ) {
    const currentTime = creationTime();
    const newItem = new toDoCreater(
      title,
      description,
      dueDate,
      priority,
      currentTime,
      notes,
      checkList,
      project,
      itemNumberInProject,
      false
    );
    itemList = updateItemList(itemList, "add", newItem);
    const itemStorageName = newItem.itemID;
    const itemForStorage = JSON.stringify(newItem);
    localStorage.setItem(itemStorageName, itemForStorage);
    return newItem;
  };
  const removeItemFromList = function (item) {
    for (let i = 0; i < itemList.length; i++) {
      const currentItemOnList = itemList[i];
      if (currentItemOnList.itemID === item.itemID) {
        let newlist = itemList.slice(0, i).concat(itemList.slice(i + 1));
        itemList = updateItemList(newlist, "remove", null);
        // return itemList;
      }
    }
  };
  return { createNewItem, updateItemList, removeItemFromList };
})();


/***/ }),

/***/ "./src/domthings.js":
/*!**************************!*\
  !*** ./src/domthings.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageDom": () => (/* binding */ manageDom)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");




let projectsCreated = [];
function projectCollection(title, name) {
  const newProject = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(title, name, []);
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
    if (projectTitle === ( false || "")) {
      return;
    }
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
  });

  createDiv.appendChild(removeProjectButton);
}

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
    const formDivAlreadyExists = document.querySelector(".formDiv");
    if (formDivAlreadyExists !== null && formDivAlreadyExists.hasChildNodes()) {
      return;
    }
    addItemForm(currentDiv, formDiv, "new");
    formHandler(currentDiv);
  });
}

function formHandler(currentDiv) {
  const cancelButton = document.getElementById("cancelAdd");
  cancelButton.addEventListener("click", function () {
    const currentForm = document.getElementById("form" + currentDiv.id);
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
    const currentProject = currentDiv.id;
    const itemDivExisting = currentDiv.querySelectorAll("div.itemDiv").length;
    const newitem = _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.createNewItem(
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
    editItemButton(newitem);
    const currentForm = document.getElementById("form" + currentDiv.id);
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
      // console.log(pair[0] + ", " + pair[1]);
    }
    const currentItemList = _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.updateItemList(null, null, null);
    let currentItem;
    for (let i = 0; i < currentItemList.length; i++) {
      currentItem = currentItemList[i];
      console.log(currentItem.itemID);
      console.log(currentDiv.id);
      if (currentItem.itemID === currentDiv.id) {
        break;
      }
    }
    currentItem.title = itemInfo[0];
    currentItem.description = itemInfo[1];
    currentItem.dueDate = itemInfo[2];
    currentItem.priority = itemInfo[3];
    currentItem.notes = itemInfo[4];
    currentItem.checkList = itemInfo[5];

    const storedItems = window.localStorage;
    const currentItemID = currentItem.itemID;
    const itemForStorageUpdated = JSON.stringify(currentItem);
    storedItems.setItem(currentItemID, itemForStorageUpdated);

    addItemToDom(currentItem, currentDiv);
    removeItemButton(currentItem);
    editItemButton(currentItem);
    const currentForm = document.getElementById("form" + currentDiv.id);
    currentForm.remove();
  });
}

function removeItemButton(item) {
  const storedItems = window.localStorage;
  const currentItem = document.getElementById(item.itemID);
  const removeItemBut = document.createElement("button");
  removeItemBut.setAttribute("class", "removeItem");
  removeItemBut.textContent = "Remove Item";
  removeItemBut.addEventListener("click", function () {
    currentItem.remove();
    _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.removeItemFromList(item);
    storedItems.removeItem(item.itemID);
  });
  currentItem.appendChild(removeItemBut);
}

function addItemToDom(item, currentDiv) {
  const div = document.createElement("div");
  //const itemDivExisting = currentDiv.querySelectorAll("div.itemDiv").length;
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
    itemDueDate.textContent = "Due: " + item.dueDate;
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

function addItemForm(currentDiv, formDiv, neworedit) {
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
  const div8 = document.createElement("div");

  currentDiv.appendChild(formDiv);
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
  const currentItemList = _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.updateItemList(null, null, null);
  currentDiv.remove();
  for (let i = 0; i < projectsCreated.length; i++) {
    let project = projectsCreated[i];
    if (project.name === divID) {
      let updatedProjectsCreated = projectsCreated
        .slice(0, i)
        .concat(projectsCreated.slice(i + 1));
      projectsCreated = updatedProjectsCreated;
      break;
    }
  }
  const storedItems = window.localStorage;
  for (let j = 0; j < currentItemList.length; j++) {
    const currentItem = currentItemList[j];
    const itemProject = currentItem.project;
    const itemName = currentItem.name;
    if (itemProject === divID) {
      _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.removeItemFromList(currentItem);
      storedItems.removeItem(currentItem.itemID);
    }
  }
  for (let k = 0; k < storedItems.length; k++) {
    const storedItemKey = storedItems.key(k);
    if (storedItemKey === divID) {
      storedItems.removeItem(storedItemKey);
    }
  }
  return projectsCreated;
}

function markItemAsDone(item) {
  item.done = true;
  const storedItems = window.localStorage;
  const currentItemID = item.itemID;
  const itemForStorageUpdated = JSON.stringify(item);
  storedItems.setItem(currentItemID, itemForStorageUpdated);
  styleItem(item);

  const currentDiv = document.getElementById(item.itemID);
  const editButton = currentDiv.querySelector(".editItem");
  editButton.remove();
}

function styleItem(item) {
  const itemDiv = document.getElementById(item.itemID);
  const itemStatusDivP = itemDiv.querySelector(".itemStatus > p");
  const itemStatusDivSpan = itemDiv.querySelector(".itemStatus > span");
  itemStatusDivP.textContent = "Done!";
  itemStatusDivSpan.style.width = "0px";
  itemStatusDivSpan.style.height = "0px";
  itemStatusDivSpan.style.display = "inline";
  itemStatusDivSpan.style.backgroundColor = "none";
}

function retrieveItemsFromStorage() {
  const storedItems = window.localStorage;
  if (storedItems.length != 0) {
    for (let i = 0; i < storedItems.length; i++) {
      const jsonString = storedItems.getItem(storedItems.key(i));
      const obj = JSON.parse(jsonString);
      const objProject = obj.project;
      if (objProject === "default") {
        const defaultDiv = document.getElementById("default");
        addItemToDom(obj, defaultDiv);
        _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.updateItemList(null, "add", obj);
        if (obj.done) {
          styleItem(obj);
        }
        removeItemButton(obj);
        editItemButton(obj);
      } else {
        let projectDiv = document.getElementById(obj.project);
        if (projectDiv === null) {
          addProject(obj.title);
          projectDiv = document.getElementById(obj.project);
          continue;
        }

        addItemToDom(obj, projectDiv);
        _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.updateItemList(null, "add", obj);
        if (obj.done) {
          styleItem(obj);
        }
        removeItemButton(obj);
        editItemButton(obj);
      }
    }
  }
}

function editItemButton(item) {
  if (item.done) {
    return;
  }
  const currentDiv = document.getElementById(item.itemID);
  const editItemBut = document.createElement("button");
  editItemBut.setAttribute("class", "editItem");
  editItemBut.textContent = "Edit";
  editItemBut.addEventListener("click", function () {
    const formExists = document.querySelector("form");
    if (formExists !== null) {
      alert("Finish editing previous item first.");
      return;
    }
    currentDiv.replaceChildren();
    editItem(item);
  });
  currentDiv.appendChild(editItemBut);
}

function editItem(item) {
  const currentDiv = document.getElementById(item.itemID);
  console.log(currentDiv);
  const formDiv = document.querySelector(".formDiv");
  addItemForm(currentDiv, formDiv, "edit");
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

window.onload = retrieveItemsFromStorage;

//edit button
// organize todos by date
// form validation
//checklist
//on click extend

//local storage projecto novo sem items


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _domthings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domthings.js */ "./src/domthings.js");




// chama esta funçao com o que a pessoa quer + o projecto onde carregou no botão

(0,_domthings_js__WEBPACK_IMPORTED_MODULE_2__.manageDom)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXRoaW5ncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixxRUFBeUI7QUFDbkQ7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUVBQTZCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUVBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNqZ0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDTjtBQUNYOztBQUUzQzs7QUFFQSx3REFBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXRlXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgbW9udGggaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERhdGUobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAyOVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gZGF5T2ZNb250aDtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldE1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRNb250aChuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIG1vbnRoO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0WWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAyMDE0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0WWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4geWVhcjtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH07XG5cbmNsYXNzIHByb2plY3RDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG5hbWUsIGl0ZW1zKSB7XG4gICAgdGhpcy50aXRsZSA9IFwiUHJvamVjdDogXCIgKyB0aXRsZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHRpdGxlLCBuYW1lLCBpdGVtcykge1xuICBjb25zdCBzdG9yZWRJdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvYmpOYW1lID0gc3RvcmVkSXRlbXMua2V5KGkpO1xuICAgIGlmIChvYmpOYW1lID09PSBuYW1lKSB7XG4gICAgICBjb25zdCBqc29uU3RyaW5nID0gc3RvcmVkSXRlbXMuZ2V0SXRlbShzdG9yZWRJdGVtcy5rZXkoaSkpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdENyZWF0b3IodGl0bGUsIG5hbWUsIGl0ZW1zKTtcbiAgY29uc3QgcHJvamVjdEZvclN0b3JhZ2UgPSBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KTtcbiAgc3RvcmVkSXRlbXMuc2V0SXRlbShuZXdQcm9qZWN0Lm5hbWUsIHByb2plY3RGb3JTdG9yYWdlKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQsIGdldERhdGUsIGdldE1vbnRoLCBnZXRZZWFyIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCB7IGNyZWF0aW9uVGltZSwgY3JlYXRlTGlzdCB9O1xuXG5mdW5jdGlvbiBjcmVhdGlvblRpbWUoKSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRheSA9IGdldERhdGUobm93KTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aChub3cpO1xuICBjb25zdCB5ZWFyID0gZ2V0WWVhcihub3cpO1xuICBjb25zdCBmaW5hbGRhdGUgPSBkYXkgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyB5ZWFyO1xuICByZXR1cm4gZmluYWxkYXRlO1xufVxuXG5jbGFzcyB0b0RvQ3JlYXRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY3JlYXRpb25EYXRlLFxuICAgIG5vdGVzLFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0LFxuICAgIGl0ZW1OdW1iZXJJblByb2plY3QsXG4gICAgZG9uZVxuICApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gY3JlYXRpb25EYXRlO1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgdGhpcy5pdGVtSUQgPSBwcm9qZWN0ICsgXCJpdGVtXCIgKyBpdGVtTnVtYmVySW5Qcm9qZWN0O1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgaXRlbUxpc3QgPSBbXTtcbiAgY29uc3QgdXBkYXRlSXRlbUxpc3QgPSBmdW5jdGlvbiAobmV3bGlzdCwgYWRkb3JyZW1vdmUsIGl0ZW0pIHtcbiAgICBpZiAoYWRkb3JyZW1vdmUgPT09IFwiYWRkXCIpIHtcbiAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIGlmIChuZXdsaXN0ID09PSBudWxsICYmIGFkZG9ycmVtb3ZlID09PSBudWxsICYmIGl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbUxpc3QgPSBuZXdsaXN0O1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdJdGVtID0gZnVuY3Rpb24gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgY2hlY2tMaXN0LFxuICAgIHByb2plY3QsXG4gICAgaXRlbU51bWJlckluUHJvamVjdFxuICApIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IGNyZWF0aW9uVGltZSgpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgdG9Eb0NyZWF0ZXIoXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgY3VycmVudFRpbWUsXG4gICAgICBub3RlcyxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3QsXG4gICAgICBpdGVtTnVtYmVySW5Qcm9qZWN0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGl0ZW1MaXN0ID0gdXBkYXRlSXRlbUxpc3QoaXRlbUxpc3QsIFwiYWRkXCIsIG5ld0l0ZW0pO1xuICAgIGNvbnN0IGl0ZW1TdG9yYWdlTmFtZSA9IG5ld0l0ZW0uaXRlbUlEO1xuICAgIGNvbnN0IGl0ZW1Gb3JTdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbVN0b3JhZ2VOYW1lLCBpdGVtRm9yU3RvcmFnZSk7XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH07XG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tTGlzdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEl0ZW1Pbkxpc3QgPSBpdGVtTGlzdFtpXTtcbiAgICAgIGlmIChjdXJyZW50SXRlbU9uTGlzdC5pdGVtSUQgPT09IGl0ZW0uaXRlbUlEKSB7XG4gICAgICAgIGxldCBuZXdsaXN0ID0gaXRlbUxpc3Quc2xpY2UoMCwgaSkuY29uY2F0KGl0ZW1MaXN0LnNsaWNlKGkgKyAxKSk7XG4gICAgICAgIGl0ZW1MaXN0ID0gdXBkYXRlSXRlbUxpc3QobmV3bGlzdCwgXCJyZW1vdmVcIiwgbnVsbCk7XG4gICAgICAgIC8vIHJldHVybiBpdGVtTGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZU5ld0l0ZW0sIHVwZGF0ZUl0ZW1MaXN0LCByZW1vdmVJdGVtRnJvbUxpc3QgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmV4cG9ydCB7IG1hbmFnZURvbSB9O1xuXG5sZXQgcHJvamVjdHNDcmVhdGVkID0gW107XG5mdW5jdGlvbiBwcm9qZWN0Q29sbGVjdGlvbih0aXRsZSwgbmFtZSkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgbmFtZSwgW10pO1xuICBwcm9qZWN0c0NyZWF0ZWQucHVzaChuZXdQcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvbSgpIHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgZGl2RGVmYXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdFwiKTtcbiAgYWRkSXRlbUJ1dHRvbihkaXZEZWZhdWx0KTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkbmV3cHJvamVjdFwiKTtcbiAgY29uc3QgZGl2QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgZGl2QWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYWRkUHJvamVjdChudWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNjb250ZW50ID4gZGl2XCIpO1xuICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gZGl2cy5sZW5ndGg7XG4gIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcm9qZWN0VGl0bGU7XG4gIGlmIChuYW1lID09PSBudWxsKSB7XG4gICAgcHJvamVjdFRpdGxlID0gd2luZG93LnByb21wdChcIlByb2plY3QgTmFtZTpcIik7XG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gKG51bGwgfHwgXCJcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlID0gbmFtZTtcbiAgfVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cztcbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IHByb2plY3RDb2xsZWN0aW9uKHByb2plY3RUaXRsZSwgcHJvamVjdE5hbWUpO1xuICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBjcmVhdGVOZXdQcm9qZWN0LnRpdGxlO1xuICBjcmVhdGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIgKyBudW1iZXJPZlByb2plY3RzKTtcbiAgY3JlYXRlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdERpdlwiKTtcbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEaXYpO1xuICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICBjb25zdCBjdXJyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBudW1iZXJPZlByb2plY3RzKTtcbiAgYWRkSXRlbUJ1dHRvbihjdXJyZW50RGl2KTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZVByb2plY3RcIik7XG4gIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVQcm9qZWN0KFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbihjdXJyZW50RGl2KSB7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybURpdlwiKTtcbiAgY29uc3QgY3JlYXRlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9ubmFtZSA9IFwiYnV0dG9uXCIgKyBjdXJyZW50RGl2LmlkO1xuICBjcmVhdGVidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9ubmFtZSk7XG4gIGNyZWF0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGN1cnJlbnREaXYuaWQpO1xuICBjcmVhdGVidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlYnV0dG9uKTtcbiAgY3VycmVudERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgY3JlYXRlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm9ybURpdkFscmVhZHlFeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1EaXZcIik7XG4gICAgaWYgKGZvcm1EaXZBbHJlYWR5RXhpc3RzICE9PSBudWxsICYmIGZvcm1EaXZBbHJlYWR5RXhpc3RzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZGRJdGVtRm9ybShjdXJyZW50RGl2LCBmb3JtRGl2LCBcIm5ld1wiKTtcbiAgICBmb3JtSGFuZGxlcihjdXJyZW50RGl2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1IYW5kbGVyKGN1cnJlbnREaXYpIHtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxBZGRcIik7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIgKyBjdXJyZW50RGl2LmlkKTtcbiAgICBjdXJyZW50Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG4gIGNvbnN0IHRpdGxlRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmZvY3VzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGxldCBpdGVtSW5mbyA9IFtdO1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgIGl0ZW1JbmZvLnB1c2gocGFpclsxXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwYWlyWzBdICsgXCIsIFwiICsgcGFpclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudERpdi5pZDtcbiAgICBjb25zdCBpdGVtRGl2RXhpc3RpbmcgPSBjdXJyZW50RGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRlbURpdlwiKS5sZW5ndGg7XG4gICAgY29uc3QgbmV3aXRlbSA9IGNyZWF0ZUxpc3QuY3JlYXRlTmV3SXRlbShcbiAgICAgIGl0ZW1JbmZvWzBdLFxuICAgICAgaXRlbUluZm9bMV0sXG4gICAgICBpdGVtSW5mb1syXSxcbiAgICAgIGl0ZW1JbmZvWzNdLFxuICAgICAgaXRlbUluZm9bNF0sXG4gICAgICBpdGVtSW5mb1s1XSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgaXRlbURpdkV4aXN0aW5nXG4gICAgKTtcblxuICAgIGFkZEl0ZW1Ub0RvbShuZXdpdGVtLCBjdXJyZW50RGl2KTtcbiAgICByZW1vdmVJdGVtQnV0dG9uKG5ld2l0ZW0pO1xuICAgIGVkaXRJdGVtQnV0dG9uKG5ld2l0ZW0pO1xuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIgKyBjdXJyZW50RGl2LmlkKTtcbiAgICBjdXJyZW50Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1IYW5kbGVyRWRpdChjdXJyZW50RGl2KSB7XG4gIGNvbnN0IHRpdGxlRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmZvY3VzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGxldCBpdGVtSW5mbyA9IFtdO1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgIGl0ZW1JbmZvLnB1c2gocGFpclsxXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwYWlyWzBdICsgXCIsIFwiICsgcGFpclsxXSk7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRJdGVtTGlzdCA9IGNyZWF0ZUxpc3QudXBkYXRlSXRlbUxpc3QobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgbGV0IGN1cnJlbnRJdGVtO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50SXRlbSA9IGN1cnJlbnRJdGVtTGlzdFtpXTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJdGVtLml0ZW1JRCk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGl2LmlkKTtcbiAgICAgIGlmIChjdXJyZW50SXRlbS5pdGVtSUQgPT09IGN1cnJlbnREaXYuaWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRJdGVtLnRpdGxlID0gaXRlbUluZm9bMF07XG4gICAgY3VycmVudEl0ZW0uZGVzY3JpcHRpb24gPSBpdGVtSW5mb1sxXTtcbiAgICBjdXJyZW50SXRlbS5kdWVEYXRlID0gaXRlbUluZm9bMl07XG4gICAgY3VycmVudEl0ZW0ucHJpb3JpdHkgPSBpdGVtSW5mb1szXTtcbiAgICBjdXJyZW50SXRlbS5ub3RlcyA9IGl0ZW1JbmZvWzRdO1xuICAgIGN1cnJlbnRJdGVtLmNoZWNrTGlzdCA9IGl0ZW1JbmZvWzVdO1xuXG4gICAgY29uc3Qgc3RvcmVkSXRlbXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtSUQgPSBjdXJyZW50SXRlbS5pdGVtSUQ7XG4gICAgY29uc3QgaXRlbUZvclN0b3JhZ2VVcGRhdGVkID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudEl0ZW0pO1xuICAgIHN0b3JlZEl0ZW1zLnNldEl0ZW0oY3VycmVudEl0ZW1JRCwgaXRlbUZvclN0b3JhZ2VVcGRhdGVkKTtcblxuICAgIGFkZEl0ZW1Ub0RvbShjdXJyZW50SXRlbSwgY3VycmVudERpdik7XG4gICAgcmVtb3ZlSXRlbUJ1dHRvbihjdXJyZW50SXRlbSk7XG4gICAgZWRpdEl0ZW1CdXR0b24oY3VycmVudEl0ZW0pO1xuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIgKyBjdXJyZW50RGl2LmlkKTtcbiAgICBjdXJyZW50Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1CdXR0b24oaXRlbSkge1xuICBjb25zdCBzdG9yZWRJdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIGNvbnN0IGN1cnJlbnRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pdGVtSUQpO1xuICBjb25zdCByZW1vdmVJdGVtQnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlSXRlbUJ1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZUl0ZW1cIik7XG4gIHJlbW92ZUl0ZW1CdXQudGV4dENvbnRlbnQgPSBcIlJlbW92ZSBJdGVtXCI7XG4gIHJlbW92ZUl0ZW1CdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50SXRlbS5yZW1vdmUoKTtcbiAgICBjcmVhdGVMaXN0LnJlbW92ZUl0ZW1Gcm9tTGlzdChpdGVtKTtcbiAgICBzdG9yZWRJdGVtcy5yZW1vdmVJdGVtKGl0ZW0uaXRlbUlEKTtcbiAgfSk7XG4gIGN1cnJlbnRJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1CdXQpO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9Eb20oaXRlbSwgY3VycmVudERpdikge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL2NvbnN0IGl0ZW1EaXZFeGlzdGluZyA9IGN1cnJlbnREaXYucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGVtRGl2XCIpLmxlbmd0aDtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbURpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGl0ZW0uaXRlbUlEKTtcbiAgLy9kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5wcm9qZWN0ICsgXCJpdGVtXCIgKyBpdGVtRGl2RXhpc3RpbmcpO1xuICBjb25zdCBpdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtVGl0bGVcIik7XG5cbiAgY29uc3QgaXRlbVN0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1TdGF0dXNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtU3RhdHVzXCIpO1xuXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1EZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgaXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EdWVEYXRlXCIpO1xuICBjb25zdCBpdGVtQ3JlYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNyZWF0aW9uRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DcmVhdGlvbkRhdGVcIik7XG4gIGNvbnN0IGl0ZW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1Qcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1Qcmlvcml0eVwiKTtcbiAgY29uc3QgaXRlbU5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbU5vdGVzRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbU5vdGVzXCIpO1xuICBjb25zdCBpdGVtQ2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNoZWNrTGlzdERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DaGVja0xpc3RcIik7XG5cbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBpdGVtU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1TdGF0dXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtQ3JlYXRpb25EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbUNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGlmIChpdGVtLmRlc2NyaXB0aW9uICE9IFwiXCIpIHtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGl0ZW0uZGVzY3JpcHRpb247XG4gIH1cbiAgaXRlbVN0YXR1cy50ZXh0Q29udGVudCA9IFwiTm90IEZpbmlzaGVkXCI7XG4gIGl0ZW1TdGF0dXNTcGFuLnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gIGl0ZW1TdGF0dXNTcGFuLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuICBpdGVtU3RhdHVzU3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgaXRlbVN0YXR1c1NwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICBpZiAoaXRlbS5kdWVEYXRlICE9IFwiXCIpIHtcbiAgICBpdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlOiBcIiArIGl0ZW0uZHVlRGF0ZTtcbiAgfVxuICBpdGVtQ3JlYXRpb25EYXRlLnRleHRDb250ZW50ID0gXCJDcmVhdGVkOiBcIiArIGl0ZW0uY3JlYXRpb25EYXRlO1xuICBpZiAoaXRlbS5wcmlvcml0eSAhPSBcIlwiKSB7XG4gICAgaXRlbVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICB9XG4gIGlmIChpdGVtLm5vdGVzICE9IFwiXCIpIHtcbiAgICBpdGVtTm90ZXMudGV4dENvbnRlbnQgPSBcIk5vdGVzOiBcIiArIGl0ZW0ubm90ZXM7XG4gIH1cbiAgaXRlbUNoZWNrTGlzdC50ZXh0Q29udGVudCA9IGl0ZW0uY2hlY2tMaXN0O1xuXG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1UaXRsZURpdik7XG4gIGl0ZW1UaXRsZURpdi5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVN0YXR1c0Rpdik7XG4gIGl0ZW1TdGF0dXNEaXYuYXBwZW5kQ2hpbGQoaXRlbVN0YXR1cyk7XG4gIGl0ZW1TdGF0dXNEaXYuYXBwZW5kQ2hpbGQoaXRlbVN0YXR1c1NwYW4pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uRGl2KTtcbiAgaXRlbURlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtRHVlRGF0ZURpdik7XG4gIGl0ZW1EdWVEYXRlRGl2LmFwcGVuZENoaWxkKGl0ZW1EdWVEYXRlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DcmVhdGlvbkRhdGVEaXYpO1xuICBpdGVtQ3JlYXRpb25EYXRlRGl2LmFwcGVuZENoaWxkKGl0ZW1DcmVhdGlvbkRhdGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5RGl2KTtcbiAgaXRlbVByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtTm90ZXNEaXYpO1xuICBpdGVtTm90ZXNEaXYuYXBwZW5kQ2hpbGQoaXRlbU5vdGVzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DaGVja0xpc3REaXYpO1xuICBpdGVtQ2hlY2tMaXN0RGl2LmFwcGVuZENoaWxkKGl0ZW1DaGVja0xpc3QpO1xuXG4gIGl0ZW1TdGF0dXNTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbWFya0l0ZW1Bc0RvbmUoaXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtRm9ybShjdXJyZW50RGl2LCBmb3JtRGl2LCBuZXdvcmVkaXQpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBmb3JtSUQgPSBcImZvcm1cIiArIGN1cnJlbnREaXYuaWQ7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgZm9ybUlEKTtcblxuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsMS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgbGFiZWwxLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7XG4gIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aXRsZVwiKTtcbiAgaW5wdXQxLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgaW5wdXQxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cbiAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGl2MS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuICBkaXYxLmFwcGVuZENoaWxkKGlucHV0MSk7XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDIuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGxhYmVsMi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Mi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGlucHV0Mi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGlucHV0Mi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkaXYyLmFwcGVuZENoaWxkKGxhYmVsMik7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcblxuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2My5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsMy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuICBsYWJlbDMudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImR1ZURhdGVcIik7XG4gIGlucHV0My5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKTtcbiAgaW5wdXQzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgZGl2My5hcHBlbmRDaGlsZChsYWJlbDMpO1xuICBkaXYzLmFwcGVuZENoaWxkKGlucHV0Myk7XG5cbiAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gIGxhYmVsNC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0NC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJpb3JpdHlcIik7XG4gIGlucHV0NC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGlucHV0NC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBkaXY0LmFwcGVuZENoaWxkKGxhYmVsNCk7XG4gIGRpdjQuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcblxuICBjb25zdCBkaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2NS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsNS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3Rlc1wiKTtcbiAgbGFiZWw1LnRleHRDb250ZW50ID0gXCJOb3RlczogXCI7XG4gIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQ1LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJub3Rlc1wiKTtcbiAgaW5wdXQ1LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3Rlc1wiKTtcbiAgaW5wdXQ1LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG4gIGRpdjUuYXBwZW5kQ2hpbGQobGFiZWw1KTtcbiAgZGl2NS5hcHBlbmRDaGlsZChpbnB1dDUpO1xuXG4gIGNvbnN0IGRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWw2LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrTGlzdFwiKTtcbiAgbGFiZWw2LnRleHRDb250ZW50ID0gXCJDaGVjayBMaXN0OiBcIjtcbiAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrTGlzdFwiKTtcbiAgaW5wdXQ2LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja0xpc3RcIik7XG4gIGlucHV0Ni5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrTGlzdFwiKTtcbiAgZGl2Ni5hcHBlbmRDaGlsZChsYWJlbDYpO1xuICBkaXY2LmFwcGVuZENoaWxkKGlucHV0Nik7XG5cbiAgY29uc3QgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpdjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Myk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2NCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2NSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Nik7XG5cbiAgaWYgKG5ld29yZWRpdCA9PT0gXCJuZXdcIikge1xuICAgIGRpdjcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgICBjb25zdCBpbnB1dDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQ3LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgaW5wdXQ3LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoaW5wdXQ3KTtcblxuICAgIGRpdjguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgICBjb25zdCBpbnB1dDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQ4LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgaW5wdXQ4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ2FuY2VsXCIpO1xuICAgIGlucHV0OC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbEFkZFwiKTtcbiAgICBkaXY4LmFwcGVuZENoaWxkKGlucHV0OCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2OCk7XG4gIH0gZWxzZSB7XG4gICAgZGl2Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICAgIGNvbnN0IGlucHV0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dDcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBpbnB1dDcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJzYXZlXCIpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoaW5wdXQ3KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Nyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChkaXZJRCkge1xuICBjb25zdCBjdXJyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SUQpO1xuICBjb25zdCBjdXJyZW50SXRlbUxpc3QgPSBjcmVhdGVMaXN0LnVwZGF0ZUl0ZW1MaXN0KG51bGwsIG51bGwsIG51bGwpO1xuICBjdXJyZW50RGl2LnJlbW92ZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQ3JlYXRlZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNDcmVhdGVkW2ldO1xuICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGRpdklEKSB7XG4gICAgICBsZXQgdXBkYXRlZFByb2plY3RzQ3JlYXRlZCA9IHByb2plY3RzQ3JlYXRlZFxuICAgICAgICAuc2xpY2UoMCwgaSlcbiAgICAgICAgLmNvbmNhdChwcm9qZWN0c0NyZWF0ZWQuc2xpY2UoaSArIDEpKTtcbiAgICAgIHByb2plY3RzQ3JlYXRlZCA9IHVwZGF0ZWRQcm9qZWN0c0NyZWF0ZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3RvcmVkSXRlbXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRJdGVtTGlzdC5sZW5ndGg7IGorKykge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gY3VycmVudEl0ZW1MaXN0W2pdO1xuICAgIGNvbnN0IGl0ZW1Qcm9qZWN0ID0gY3VycmVudEl0ZW0ucHJvamVjdDtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGN1cnJlbnRJdGVtLm5hbWU7XG4gICAgaWYgKGl0ZW1Qcm9qZWN0ID09PSBkaXZJRCkge1xuICAgICAgY3JlYXRlTGlzdC5yZW1vdmVJdGVtRnJvbUxpc3QoY3VycmVudEl0ZW0pO1xuICAgICAgc3RvcmVkSXRlbXMucmVtb3ZlSXRlbShjdXJyZW50SXRlbS5pdGVtSUQpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBrID0gMDsgayA8IHN0b3JlZEl0ZW1zLmxlbmd0aDsgaysrKSB7XG4gICAgY29uc3Qgc3RvcmVkSXRlbUtleSA9IHN0b3JlZEl0ZW1zLmtleShrKTtcbiAgICBpZiAoc3RvcmVkSXRlbUtleSA9PT0gZGl2SUQpIHtcbiAgICAgIHN0b3JlZEl0ZW1zLnJlbW92ZUl0ZW0oc3RvcmVkSXRlbUtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9qZWN0c0NyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIG1hcmtJdGVtQXNEb25lKGl0ZW0pIHtcbiAgaXRlbS5kb25lID0gdHJ1ZTtcbiAgY29uc3Qgc3RvcmVkSXRlbXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICBjb25zdCBjdXJyZW50SXRlbUlEID0gaXRlbS5pdGVtSUQ7XG4gIGNvbnN0IGl0ZW1Gb3JTdG9yYWdlVXBkYXRlZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICBzdG9yZWRJdGVtcy5zZXRJdGVtKGN1cnJlbnRJdGVtSUQsIGl0ZW1Gb3JTdG9yYWdlVXBkYXRlZCk7XG4gIHN0eWxlSXRlbShpdGVtKTtcblxuICBjb25zdCBjdXJyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pdGVtSUQpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gY3VycmVudERpdi5xdWVyeVNlbGVjdG9yKFwiLmVkaXRJdGVtXCIpO1xuICBlZGl0QnV0dG9uLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzdHlsZUl0ZW0oaXRlbSkge1xuICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pdGVtSUQpO1xuICBjb25zdCBpdGVtU3RhdHVzRGl2UCA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvcihcIi5pdGVtU3RhdHVzID4gcFwiKTtcbiAgY29uc3QgaXRlbVN0YXR1c0RpdlNwYW4gPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbVN0YXR1cyA+IHNwYW5cIik7XG4gIGl0ZW1TdGF0dXNEaXZQLnRleHRDb250ZW50ID0gXCJEb25lIVwiO1xuICBpdGVtU3RhdHVzRGl2U3Bhbi5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gIGl0ZW1TdGF0dXNEaXZTcGFuLnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XG4gIGl0ZW1TdGF0dXNEaXZTcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBpdGVtU3RhdHVzRGl2U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVJdGVtc0Zyb21TdG9yYWdlKCkge1xuICBjb25zdCBzdG9yZWRJdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIGlmIChzdG9yZWRJdGVtcy5sZW5ndGggIT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBzdG9yZWRJdGVtcy5nZXRJdGVtKHN0b3JlZEl0ZW1zLmtleShpKSk7XG4gICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgY29uc3Qgb2JqUHJvamVjdCA9IG9iai5wcm9qZWN0O1xuICAgICAgaWYgKG9ialByb2plY3QgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRcIik7XG4gICAgICAgIGFkZEl0ZW1Ub0RvbShvYmosIGRlZmF1bHREaXYpO1xuICAgICAgICBjcmVhdGVMaXN0LnVwZGF0ZUl0ZW1MaXN0KG51bGwsIFwiYWRkXCIsIG9iaik7XG4gICAgICAgIGlmIChvYmouZG9uZSkge1xuICAgICAgICAgIHN0eWxlSXRlbShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUl0ZW1CdXR0b24ob2JqKTtcbiAgICAgICAgZWRpdEl0ZW1CdXR0b24ob2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLnByb2plY3QpO1xuICAgICAgICBpZiAocHJvamVjdERpdiA9PT0gbnVsbCkge1xuICAgICAgICAgIGFkZFByb2plY3Qob2JqLnRpdGxlKTtcbiAgICAgICAgICBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLnByb2plY3QpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkSXRlbVRvRG9tKG9iaiwgcHJvamVjdERpdik7XG4gICAgICAgIGNyZWF0ZUxpc3QudXBkYXRlSXRlbUxpc3QobnVsbCwgXCJhZGRcIiwgb2JqKTtcbiAgICAgICAgaWYgKG9iai5kb25lKSB7XG4gICAgICAgICAgc3R5bGVJdGVtKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbihvYmopO1xuICAgICAgICBlZGl0SXRlbUJ1dHRvbihvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0SXRlbUJ1dHRvbihpdGVtKSB7XG4gIGlmIChpdGVtLmRvbmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaXRlbUlEKTtcbiAgY29uc3QgZWRpdEl0ZW1CdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0SXRlbUJ1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRJdGVtXCIpO1xuICBlZGl0SXRlbUJ1dC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0SXRlbUJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZvcm1FeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBpZiAoZm9ybUV4aXN0cyAhPT0gbnVsbCkge1xuICAgICAgYWxlcnQoXCJGaW5pc2ggZWRpdGluZyBwcmV2aW91cyBpdGVtIGZpcnN0LlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3VycmVudERpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBlZGl0SXRlbShpdGVtKTtcbiAgfSk7XG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoZWRpdEl0ZW1CdXQpO1xufVxuXG5mdW5jdGlvbiBlZGl0SXRlbShpdGVtKSB7XG4gIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLml0ZW1JRCk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnREaXYpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtRGl2XCIpO1xuICBhZGRJdGVtRm9ybShjdXJyZW50RGl2LCBmb3JtRGl2LCBcImVkaXRcIik7XG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcbiAgY29uc3QgaW5wdXROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG4gIGNvbnN0IGlucHV0Q2hlY2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0xpc3RcIik7XG4gIGlucHV0VGl0bGUudmFsdWUgPSBpdGVtLnRpdGxlO1xuICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgaW5wdXREdWVEYXRlLnZhbHVlID0gaXRlbS5kdWVEYXRlO1xuICBpbnB1dFByaW9yaXR5LnZhbHVlID0gaXRlbS5wcmlvcml0eTtcbiAgaW5wdXROb3Rlcy52YWx1ZSA9IGl0ZW0ubm90ZXM7XG4gIGlucHV0Q2hlY2tMaXN0LnZhbHVlID0gaXRlbS5jaGVja0xpc3Q7XG4gIGZvcm1IYW5kbGVyRWRpdChjdXJyZW50RGl2KTtcbn1cblxud2luZG93Lm9ubG9hZCA9IHJldHJpZXZlSXRlbXNGcm9tU3RvcmFnZTtcblxuLy9lZGl0IGJ1dHRvblxuLy8gb3JnYW5pemUgdG9kb3MgYnkgZGF0ZVxuLy8gZm9ybSB2YWxpZGF0aW9uXG4vL2NoZWNrbGlzdFxuLy9vbiBjbGljayBleHRlbmRcblxuLy9sb2NhbCBzdG9yYWdlIHByb2plY3RvIG5vdm8gc2VtIGl0ZW1zXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvRG9DcmVhdGVyLCBjcmVhdGlvblRpbWUgfSBmcm9tIFwiLi9jcmVhdGVUb0RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgbWFuYWdlRG9tIH0gZnJvbSBcIi4vZG9tdGhpbmdzLmpzXCI7XG5cbi8vIGNoYW1hIGVzdGEgZnVuw6dhbyBjb20gbyBxdWUgYSBwZXNzb2EgcXVlciArIG8gcHJvamVjdG8gb25kZSBjYXJyZWdvdSBubyBib3TDo29cblxubWFuYWdlRG9tKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9