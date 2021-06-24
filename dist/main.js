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
  const newProject = new projectCreator(title, name, items);
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
    console.log(newItem);
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
    _createToDo_js__WEBPACK_IMPORTED_MODULE_1__.createList.removeItemFromList(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXRoaW5ncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhLE9BQU87QUFDcEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0J3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLG1FQUFZO0FBQ2QsYUFBYSx5REFBTTtBQUNuQjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQzdCeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxLQUFLO0FBQ2xCLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1S0FBdUs7O0FBRXZLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkQ0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEU7O0FBRXRDOztBQUVwQztBQUNBO0FBQ0EsY0FBYyxpREFBTztBQUNyQixnQkFBZ0IsaURBQVE7QUFDeEIsZUFBZSxpREFBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZxRDtBQUNUO0FBQ3hCOztBQUVyQjtBQUNBO0FBQ0EscUJBQXFCLG1FQUFnQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9FQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUE2QjtBQUNqQyxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7VUNqV0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNOO0FBQ1g7O0FBRTNDOztBQUVBLHdEQUFTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERhdGVcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgZGF5IG9mIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSBtb250aCBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF0ZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDI5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF0ZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBkYXlPZk1vbnRoO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0TW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggbW9udGggaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldE1vbnRoKG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICByZXR1cm4gbW9udGg7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDIwMTRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiB5ZWFyO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfTtcblxuY2xhc3MgcHJvamVjdENyZWF0b3Ige1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbmFtZSwgaXRlbXMpIHtcbiAgICB0aGlzLnRpdGxlID0gXCJQcm9qZWN0OiBcIiArIHRpdGxlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUsIG5hbWUsIGl0ZW1zKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdENyZWF0b3IodGl0bGUsIG5hbWUsIGl0ZW1zKTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQsIGdldERhdGUsIGdldE1vbnRoLCBnZXRZZWFyIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCB7IGNyZWF0aW9uVGltZSwgY3JlYXRlTGlzdCB9O1xuXG5mdW5jdGlvbiBjcmVhdGlvblRpbWUoKSB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IGRheSA9IGdldERhdGUobm93KTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aChub3cpO1xuICBjb25zdCB5ZWFyID0gZ2V0WWVhcihub3cpO1xuICBjb25zdCBmaW5hbGRhdGUgPSBkYXkgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyB5ZWFyO1xuICByZXR1cm4gZmluYWxkYXRlO1xufVxuXG5jbGFzcyB0b0RvQ3JlYXRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY3JlYXRpb25EYXRlLFxuICAgIG5vdGVzLFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0LFxuICAgIGl0ZW1OdW1iZXJJblByb2plY3QsXG4gICAgZG9uZVxuICApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gY3JlYXRpb25EYXRlO1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgdGhpcy5pdGVtSUQgPSBwcm9qZWN0ICsgXCJpdGVtXCIgKyBpdGVtTnVtYmVySW5Qcm9qZWN0O1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgaXRlbUxpc3QgPSBbXTtcbiAgY29uc3QgdXBkYXRlSXRlbUxpc3QgPSBmdW5jdGlvbiAobmV3bGlzdCwgYWRkb3JyZW1vdmUsIGl0ZW0pIHtcbiAgICBpZiAoYWRkb3JyZW1vdmUgPT09IFwiYWRkXCIpIHtcbiAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIGlmIChuZXdsaXN0ID09PSBudWxsICYmIGFkZG9ycmVtb3ZlID09PSBudWxsICYmIGl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbUxpc3QgPSBuZXdsaXN0O1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdJdGVtID0gZnVuY3Rpb24gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgY2hlY2tMaXN0LFxuICAgIHByb2plY3QsXG4gICAgaXRlbU51bWJlckluUHJvamVjdFxuICApIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IGNyZWF0aW9uVGltZSgpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgdG9Eb0NyZWF0ZXIoXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgY3VycmVudFRpbWUsXG4gICAgICBub3RlcyxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3QsXG4gICAgICBpdGVtTnVtYmVySW5Qcm9qZWN0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGl0ZW1MaXN0ID0gdXBkYXRlSXRlbUxpc3QoaXRlbUxpc3QsIFwiYWRkXCIsIG5ld0l0ZW0pO1xuICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pO1xuICAgIGNvbnN0IGl0ZW1TdG9yYWdlTmFtZSA9IG5ld0l0ZW0uaXRlbUlEO1xuICAgIGNvbnN0IGl0ZW1Gb3JTdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbVN0b3JhZ2VOYW1lLCBpdGVtRm9yU3RvcmFnZSk7XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH07XG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tTGlzdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEl0ZW1Pbkxpc3QgPSBpdGVtTGlzdFtpXTtcbiAgICAgIGlmIChjdXJyZW50SXRlbU9uTGlzdC5pdGVtSUQgPT09IGl0ZW0uaXRlbUlEKSB7XG4gICAgICAgIGxldCBuZXdsaXN0ID0gaXRlbUxpc3Quc2xpY2UoMCwgaSkuY29uY2F0KGl0ZW1MaXN0LnNsaWNlKGkgKyAxKSk7XG4gICAgICAgIGl0ZW1MaXN0ID0gdXBkYXRlSXRlbUxpc3QobmV3bGlzdCwgXCJyZW1vdmVcIiwgbnVsbCk7XG4gICAgICAgIC8vIHJldHVybiBpdGVtTGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZU5ld0l0ZW0sIHVwZGF0ZUl0ZW1MaXN0LCByZW1vdmVJdGVtRnJvbUxpc3QgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmV4cG9ydCB7IG1hbmFnZURvbSB9O1xuXG5sZXQgcHJvamVjdHNDcmVhdGVkID0gW107XG5mdW5jdGlvbiBwcm9qZWN0Q29sbGVjdGlvbih0aXRsZSwgbmFtZSkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgbmFtZSwgW10pO1xuICBwcm9qZWN0c0NyZWF0ZWQucHVzaChuZXdQcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvbSgpIHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgZGl2RGVmYXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdFwiKTtcbiAgYWRkSXRlbUJ1dHRvbihkaXZEZWZhdWx0KTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkbmV3cHJvamVjdFwiKTtcbiAgY29uc3QgZGl2QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgZGl2QWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYWRkUHJvamVjdChudWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNjb250ZW50ID4gZGl2XCIpO1xuICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gZGl2cy5sZW5ndGg7XG4gIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcm9qZWN0VGl0bGU7XG4gIGlmIChuYW1lID09PSBudWxsKSB7XG4gICAgcHJvamVjdFRpdGxlID0gd2luZG93LnByb21wdChcIlByb2plY3QgTmFtZTpcIik7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlID0gbmFtZTtcbiAgfVxuICBjb25zdCBwcm9qZWN0TmFtZSA9IFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cztcbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IHByb2plY3RDb2xsZWN0aW9uKHByb2plY3RUaXRsZSwgcHJvamVjdE5hbWUpO1xuICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBjcmVhdGVOZXdQcm9qZWN0LnRpdGxlO1xuICBjcmVhdGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIgKyBudW1iZXJPZlByb2plY3RzKTtcbiAgY3JlYXRlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdERpdlwiKTtcbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEaXYpO1xuICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICBjb25zdCBjdXJyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIgKyBudW1iZXJPZlByb2plY3RzKTtcbiAgYWRkSXRlbUJ1dHRvbihjdXJyZW50RGl2KTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZVByb2plY3RcIik7XG4gIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVQcm9qZWN0KFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNDcmVhdGVkKTtcbiAgfSk7XG5cbiAgY3JlYXRlRGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xufVxuXG4vL2RvIG5vdGhpbmcgb24gYWRkIHByb2plY3QgY2FuY2VsXG4vL2NhbmNlbCBhZGRcbi8vIGNhbnQgIHByZXNzIGFkZCBpdGVtIHR3aWNlXG5cbmZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oY3VycmVudERpdikge1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1EaXZcIik7XG4gIGNvbnN0IGNyZWF0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ1dHRvbm5hbWUgPSBcImJ1dHRvblwiICsgY3VycmVudERpdi5pZDtcbiAgY3JlYXRlYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvbm5hbWUpO1xuICBjcmVhdGVidXR0b24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBjdXJyZW50RGl2LmlkKTtcbiAgY3JlYXRlYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xuICBjdXJyZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZWJ1dHRvbik7XG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIGNyZWF0ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGFkZEl0ZW1Gb3JtKGN1cnJlbnREaXYsIGZvcm1EaXYpO1xuICAgIGNvbnN0IHRpdGxlRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmZvY3VzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgbGV0IGl0ZW1JbmZvID0gW107XG4gICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgIGl0ZW1JbmZvLnB1c2gocGFpclsxXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhaXJbMF0gKyBcIiwgXCIgKyBwYWlyWzFdKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudERpdi5pZDtcbiAgICAgIGNvbnN0IGl0ZW1EaXZFeGlzdGluZyA9IGN1cnJlbnREaXYucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGVtRGl2XCIpLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5ld2l0ZW0gPSBjcmVhdGVMaXN0LmNyZWF0ZU5ld0l0ZW0oXG4gICAgICAgIGl0ZW1JbmZvWzBdLFxuICAgICAgICBpdGVtSW5mb1sxXSxcbiAgICAgICAgaXRlbUluZm9bMl0sXG4gICAgICAgIGl0ZW1JbmZvWzNdLFxuICAgICAgICBpdGVtSW5mb1s0XSxcbiAgICAgICAgaXRlbUluZm9bNV0sXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBpdGVtRGl2RXhpc3RpbmdcbiAgICAgICk7XG4gICAgICBhZGRJdGVtVG9Eb20obmV3aXRlbSwgY3VycmVudERpdik7XG4gICAgICByZW1vdmVJdGVtQnV0dG9uKG5ld2l0ZW0pO1xuICAgICAgY29uc3QgY3VycmVudEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIiArIGN1cnJlbnREaXYuaWQpO1xuICAgICAgY3VycmVudEZvcm0ucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtQnV0dG9uKGl0ZW0pIHtcbiAgY29uc3QgY3VycmVudEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLml0ZW1JRCk7XG4gIGNvbnN0IHJlbW92ZUl0ZW1CdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW1vdmVJdGVtQnV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtb3ZlSXRlbVwiKTtcbiAgcmVtb3ZlSXRlbUJ1dC50ZXh0Q29udGVudCA9IFwiUmVtb3ZlIEl0ZW1cIjtcbiAgcmVtb3ZlSXRlbUJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRJdGVtLnJlbW92ZSgpO1xuICAgIGNyZWF0ZUxpc3QucmVtb3ZlSXRlbUZyb21MaXN0KGl0ZW0pO1xuICB9KTtcbiAgY3VycmVudEl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbUJ1dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0RvbShpdGVtLCBjdXJyZW50RGl2KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGl0ZW1EaXZFeGlzdGluZyA9IGN1cnJlbnREaXYucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGVtRGl2XCIpLmxlbmd0aDtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbURpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGl0ZW0uaXRlbUlEKTtcbiAgLy9kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5wcm9qZWN0ICsgXCJpdGVtXCIgKyBpdGVtRGl2RXhpc3RpbmcpO1xuICBjb25zdCBpdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtVGl0bGVcIik7XG5cbiAgY29uc3QgaXRlbVN0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1TdGF0dXNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtU3RhdHVzXCIpO1xuXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1EZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgaXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EdWVEYXRlXCIpO1xuICBjb25zdCBpdGVtQ3JlYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNyZWF0aW9uRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DcmVhdGlvbkRhdGVcIik7XG4gIGNvbnN0IGl0ZW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1Qcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1Qcmlvcml0eVwiKTtcbiAgY29uc3QgaXRlbU5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbU5vdGVzRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbU5vdGVzXCIpO1xuICBjb25zdCBpdGVtQ2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNoZWNrTGlzdERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DaGVja0xpc3RcIik7XG5cbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBpdGVtU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1TdGF0dXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtQ3JlYXRpb25EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbUNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGlmIChpdGVtLmRlc2NyaXB0aW9uICE9IFwiXCIpIHtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGl0ZW0uZGVzY3JpcHRpb247XG4gIH1cbiAgaXRlbVN0YXR1cy50ZXh0Q29udGVudCA9IFwiTm90IEZpbmlzaGVkXCI7XG4gIGl0ZW1TdGF0dXNTcGFuLnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gIGl0ZW1TdGF0dXNTcGFuLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuICBpdGVtU3RhdHVzU3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgaXRlbVN0YXR1c1NwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblxuICBpZiAoaXRlbS5kdWVEYXRlICE9IFwiXCIpIHtcbiAgICBpdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlXCIgKyBpdGVtLmR1ZURhdGU7XG4gIH1cbiAgaXRlbUNyZWF0aW9uRGF0ZS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZDogXCIgKyBpdGVtLmNyZWF0aW9uRGF0ZTtcbiAgaWYgKGl0ZW0ucHJpb3JpdHkgIT0gXCJcIikge1xuICAgIGl0ZW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgfVxuICBpZiAoaXRlbS5ub3RlcyAhPSBcIlwiKSB7XG4gICAgaXRlbU5vdGVzLnRleHRDb250ZW50ID0gXCJOb3RlczogXCIgKyBpdGVtLm5vdGVzO1xuICB9XG4gIGl0ZW1DaGVja0xpc3QudGV4dENvbnRlbnQgPSBpdGVtLmNoZWNrTGlzdDtcblxuICBjdXJyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtVGl0bGVEaXYpO1xuICBpdGVtVGl0bGVEaXYuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNEaXYpO1xuICBpdGVtU3RhdHVzRGl2LmFwcGVuZENoaWxkKGl0ZW1TdGF0dXMpO1xuICBpdGVtU3RhdHVzRGl2LmFwcGVuZENoaWxkKGl0ZW1TdGF0dXNTcGFuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbkRpdik7XG4gIGl0ZW1EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUR1ZURhdGVEaXYpO1xuICBpdGVtRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChpdGVtRHVlRGF0ZSk7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtQ3JlYXRpb25EYXRlRGl2KTtcbiAgaXRlbUNyZWF0aW9uRGF0ZURpdi5hcHBlbmRDaGlsZChpdGVtQ3JlYXRpb25EYXRlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eURpdik7XG4gIGl0ZW1Qcmlvcml0eURpdi5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbU5vdGVzRGl2KTtcbiAgaXRlbU5vdGVzRGl2LmFwcGVuZENoaWxkKGl0ZW1Ob3Rlcyk7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtQ2hlY2tMaXN0RGl2KTtcbiAgaXRlbUNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChpdGVtQ2hlY2tMaXN0KTtcblxuICBpdGVtU3RhdHVzU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1hcmtJdGVtQXNEb25lKGl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbUZvcm0oY3VycmVudERpdiwgZm9ybURpdikge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZ2V0XCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGZvcm1JRCA9IFwiZm9ybVwiICsgY3VycmVudERpdi5pZDtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBmb3JtSUQpO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwxLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICBsYWJlbDEudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcbiAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRpdGxlXCIpO1xuICBpbnB1dDEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICBpbnB1dDEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblxuICBpbnB1dDEucmVxdWlyZWQgPSB0cnVlO1xuICBkaXYxLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsMi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgbGFiZWwyLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgaW5wdXQyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgaW5wdXQyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuXG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG4gIGxhYmVsMy50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6IFwiO1xuICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0My5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZHVlRGF0ZVwiKTtcbiAgaW5wdXQzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVEYXRlXCIpO1xuICBpbnB1dDMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG4gIGRpdjMuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcblxuICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsNC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgbGFiZWw0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQ0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwcmlvcml0eVwiKTtcbiAgaW5wdXQ0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgaW5wdXQ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIGRpdjQuYXBwZW5kQ2hpbGQobGFiZWw0KTtcbiAgZGl2NC5hcHBlbmRDaGlsZChpbnB1dDQpO1xuXG4gIGNvbnN0IGRpdjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWw1LnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVzXCIpO1xuICBsYWJlbDUudGV4dENvbnRlbnQgPSBcIk5vdGVzOiBcIjtcbiAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm5vdGVzXCIpO1xuICBpbnB1dDUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVzXCIpO1xuICBpbnB1dDUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcbiAgZGl2NS5hcHBlbmRDaGlsZChsYWJlbDUpO1xuICBkaXY1LmFwcGVuZENoaWxkKGlucHV0NSk7XG5cbiAgY29uc3QgZGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDYuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2hlY2tMaXN0XCIpO1xuICBsYWJlbDYudGV4dENvbnRlbnQgPSBcIkNoZWNrIExpc3Q6IFwiO1xuICBjb25zdCBpbnB1dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Ni5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tMaXN0XCIpO1xuICBpbnB1dDYuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrTGlzdFwiKTtcbiAgaW5wdXQ2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2tMaXN0XCIpO1xuICBkaXY2LmFwcGVuZENoaWxkKGxhYmVsNik7XG4gIGRpdjYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcblxuICBjb25zdCBkaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBpbnB1dDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Ny5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBpbnB1dDcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBZGRcIik7XG4gIGRpdjcuYXBwZW5kQ2hpbGQoaW5wdXQ3KTtcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjEpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjMpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjYpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdjcpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGRpdklEKSB7XG4gIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJRCk7XG4gIGN1cnJlbnREaXYucmVtb3ZlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNDcmVhdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c0NyZWF0ZWRbaV07XG4gICAgaWYgKHByb2plY3QubmFtZSA9PT0gZGl2SUQpIHtcbiAgICAgIGxldCB1cGRhdGVkUHJvamVjdHNDcmVhdGVkID0gcHJvamVjdHNDcmVhdGVkXG4gICAgICAgIC5zbGljZSgwLCBpKVxuICAgICAgICAuY29uY2F0KHByb2plY3RzQ3JlYXRlZC5zbGljZShpICsgMSkpO1xuICAgICAgcHJvamVjdHNDcmVhdGVkID0gdXBkYXRlZFByb2plY3RzQ3JlYXRlZDtcbiAgICAgIHJldHVybiBwcm9qZWN0c0NyZWF0ZWQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtJdGVtQXNEb25lKGl0ZW0pIHtcbiAgaXRlbS5kb25lID0gdHJ1ZTtcbiAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaXRlbUlEKTtcbiAgY29uc3QgaXRlbVN0YXR1c0RpdlAgPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbVN0YXR1cyA+IHBcIik7XG4gIGNvbnN0IGl0ZW1TdGF0dXNEaXZTcGFuID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKFwiLml0ZW1TdGF0dXMgPiBzcGFuXCIpO1xuXG4gIGl0ZW1TdGF0dXNEaXZQLnRleHRDb250ZW50ID0gXCJEb25lIVwiO1xuICBpdGVtU3RhdHVzRGl2U3Bhbi5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gIGl0ZW1TdGF0dXNEaXZTcGFuLnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XG4gIGl0ZW1TdGF0dXNEaXZTcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICBpdGVtU3RhdHVzRGl2U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm5vbmVcIjtcbn1cblxuLy90ZW5obyBkZSBtdWRhciBvcyB2YWxvcmVzIGRvcyBhcnJheXMgZG9zIGl0ZW1zIGV4aXN0ZW50ZXMuIG5hbyBzZWkgc2Ugc2FiZW0gbyBzdGF0dXMgYWdvcmEuIG8gdmFsb3IgZG9zIGl0ZW1zIGVzdGEgYSBtdWRhciwgbWFzICtlIG1lbGhvciBjb25maXJtYXIuXG4vLyBub3MgcmVtb3ZlIHRiIHRlbmhvIGRlIHJlbW92ZXIgZGUgc3RvcmFnZSBlIHF1YW5kbyBtYXJjbyBjb21vIGRvbmUgdGIgdGVuaG8gZGUgYWN0dWFsaXphciBlbSBzdG9yYWdlXG5mdW5jdGlvbiByZXRyaWV2ZUl0ZW1zRnJvbVN0b3JhZ2UoKSB7XG4gIGNvbnN0IHN0b3JlZEl0ZW1zID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgaWYgKHN0b3JlZEl0ZW1zLmxlbmd0aCAhPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QganNvblN0cmluZyA9IHN0b3JlZEl0ZW1zLmdldEl0ZW0oc3RvcmVkSXRlbXMua2V5KGkpKTtcbiAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICBjb25zdCBvYmpQcm9qZWN0ID0gb2JqLnByb2plY3Q7XG4gICAgICAvLyBzZSBmb3IgZGVmYXVsdCBuYW8gZmHDp2FzIG5hZGFcbiAgICAgIGlmIChvYmpQcm9qZWN0ID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICBjb25zdCBkZWZhdWx0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0XCIpO1xuICAgICAgICBhZGRJdGVtVG9Eb20ob2JqLCBkZWZhdWx0RGl2KTtcbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbihvYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmoucHJvamVjdCk7XG4gICAgICAgIGlmIChwcm9qZWN0RGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgYWRkUHJvamVjdChvYmoudGl0bGUpO1xuICAgICAgICAgIHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmoucHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRJdGVtVG9Eb20ob2JqLCBwcm9qZWN0RGl2KTtcbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbihvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gcmV0cmlldmVJdGVtc0Zyb21TdG9yYWdlO1xuXG4vL3RlbmhvIGRlIGFjdHVhbGl6YXIgb3MgYXJyYXlzIGNvbSBvcyB2YWxvcmVzIGVtIHN0b3JhZ2VcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9Eb0NyZWF0ZXIsIGNyZWF0aW9uVGltZSB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBtYW5hZ2VEb20gfSBmcm9tIFwiLi9kb210aGluZ3MuanNcIjtcblxuLy8gY2hhbWEgZXN0YSBmdW7Dp2FvIGNvbSBvIHF1ZSBhIHBlc3NvYSBxdWVyICsgbyBwcm9qZWN0byBvbmRlIGNhcnJlZ291IG5vIGJvdMOjb1xuXG5tYW5hZ2VEb20oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=