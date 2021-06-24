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
    console.log(newItem);
    itemList = updateItemList(itemList, "add", newItem);
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
    const divs = document.querySelectorAll("div#content > div");
    const numberOfProjects = divs.length;
    const createDiv = document.createElement("div");
    const projectTitle = window.prompt("Project Name:");
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
  });
}

//mark as finished and remove item
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
  div.setAttribute("id", item.project + "item" + itemDivExisting);
  const itemTitleDiv = document.createElement("div");
  itemTitleDiv.setAttribute("class", "itemTitle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXRoaW5ncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9FQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUE2QjtBQUNqQyxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTjREO0FBQ047QUFDWDs7QUFFM0M7O0FBRUEsd0RBQVMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF0ZVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXRlKG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gMjlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgcmV0dXJuIGRheU9mTW9udGg7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBtb250aCBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0TW9udGgobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIHJldHVybiBtb250aDtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0WWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMjAxNFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIHllYXI7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9O1xuXG5jbGFzcyBwcm9qZWN0Q3JlYXRvciB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBuYW1lLCBpdGVtcykge1xuICAgIHRoaXMudGl0bGUgPSBcIlByb2plY3Q6IFwiICsgdGl0bGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgbmFtZSwgaXRlbXMpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0Q3JlYXRvcih0aXRsZSwgbmFtZSwgaXRlbXMpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbiIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCwgZ2V0RGF0ZSwgZ2V0TW9udGgsIGdldFllYXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IHsgY3JlYXRpb25UaW1lLCBjcmVhdGVMaXN0IH07XG5cbmZ1bmN0aW9uIGNyZWF0aW9uVGltZSgpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgZGF5ID0gZ2V0RGF0ZShub3cpO1xuICBjb25zdCBtb250aCA9IGdldE1vbnRoKG5vdyk7XG4gIGNvbnN0IHllYXIgPSBnZXRZZWFyKG5vdyk7XG4gIGNvbnN0IGZpbmFsZGF0ZSA9IGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XG4gIHJldHVybiBmaW5hbGRhdGU7XG59XG5cbmNsYXNzIHRvRG9DcmVhdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjcmVhdGlvbkRhdGUsXG4gICAgbm90ZXMsXG4gICAgY2hlY2tMaXN0LFxuICAgIHByb2plY3QsXG4gICAgaXRlbU51bWJlckluUHJvamVjdCxcbiAgICBkb25lXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSBjcmVhdGlvbkRhdGU7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB0aGlzLml0ZW1JRCA9IHByb2plY3QgKyBcIml0ZW1cIiArIGl0ZW1OdW1iZXJJblByb2plY3Q7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlTGlzdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBpdGVtTGlzdCA9IFtdO1xuICBjb25zdCB1cGRhdGVJdGVtTGlzdCA9IGZ1bmN0aW9uIChuZXdsaXN0LCBhZGRvcnJlbW92ZSwgaXRlbSkge1xuICAgIGlmIChhZGRvcnJlbW92ZSA9PT0gXCJhZGRcIikge1xuICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2UgaWYgKG5ld2xpc3QgPT09IG51bGwgJiYgYWRkb3JyZW1vdmUgPT09IG51bGwgJiYgaXRlbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtTGlzdCA9IG5ld2xpc3Q7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU5ld0l0ZW0gPSBmdW5jdGlvbiAoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBjaGVja0xpc3QsXG4gICAgcHJvamVjdCxcbiAgICBpdGVtTnVtYmVySW5Qcm9qZWN0XG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gY3JlYXRpb25UaW1lKCk7XG4gICAgY29uc3QgbmV3SXRlbSA9IG5ldyB0b0RvQ3JlYXRlcihcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBjdXJyZW50VGltZSxcbiAgICAgIG5vdGVzLFxuICAgICAgY2hlY2tMaXN0LFxuICAgICAgcHJvamVjdCxcbiAgICAgIGl0ZW1OdW1iZXJJblByb2plY3QsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgY29uc29sZS5sb2cobmV3SXRlbSk7XG4gICAgaXRlbUxpc3QgPSB1cGRhdGVJdGVtTGlzdChpdGVtTGlzdCwgXCJhZGRcIiwgbmV3SXRlbSk7XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH07XG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tTGlzdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEl0ZW1Pbkxpc3QgPSBpdGVtTGlzdFtpXTtcbiAgICAgIGlmIChjdXJyZW50SXRlbU9uTGlzdC5pdGVtSUQgPT09IGl0ZW0uaXRlbUlEKSB7XG4gICAgICAgIGxldCBuZXdsaXN0ID0gaXRlbUxpc3Quc2xpY2UoMCwgaSkuY29uY2F0KGl0ZW1MaXN0LnNsaWNlKGkgKyAxKSk7XG4gICAgICAgIGl0ZW1MaXN0ID0gdXBkYXRlSXRlbUxpc3QobmV3bGlzdCwgXCJyZW1vdmVcIiwgbnVsbCk7XG4gICAgICAgIC8vIHJldHVybiBpdGVtTGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZU5ld0l0ZW0sIHVwZGF0ZUl0ZW1MaXN0LCByZW1vdmVJdGVtRnJvbUxpc3QgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmV4cG9ydCB7IG1hbmFnZURvbSB9O1xuXG5sZXQgcHJvamVjdHNDcmVhdGVkID0gW107XG5mdW5jdGlvbiBwcm9qZWN0Q29sbGVjdGlvbih0aXRsZSwgbmFtZSkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSwgbmFtZSwgW10pO1xuICBwcm9qZWN0c0NyZWF0ZWQucHVzaChuZXdQcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvbSgpIHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgZGl2RGVmYXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdFwiKTtcbiAgYWRkSXRlbUJ1dHRvbihkaXZEZWZhdWx0KTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkbmV3cHJvamVjdFwiKTtcbiAgY29uc3QgZGl2QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgZGl2QWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYjY29udGVudCA+IGRpdlwiKTtcbiAgICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gZGl2cy5sZW5ndGg7XG4gICAgY29uc3QgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiUHJvamVjdCBOYW1lOlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cztcbiAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gcHJvamVjdENvbGxlY3Rpb24ocHJvamVjdFRpdGxlLCBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBjcmVhdGVOZXdQcm9qZWN0LnRpdGxlO1xuICAgIGNyZWF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RcIiArIG51bWJlck9mUHJvamVjdHMpO1xuICAgIGNyZWF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3REaXZcIik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEaXYpO1xuICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiICsgbnVtYmVyT2ZQcm9qZWN0cyk7XG4gICAgYWRkSXRlbUJ1dHRvbihjdXJyZW50RGl2KTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyZW1vdmVQcm9qZWN0XCIpO1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlbW92ZSBQcm9qZWN0XCI7XG4gICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlUHJvamVjdChcInByb2plY3RcIiArIG51bWJlck9mUHJvamVjdHMpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNDcmVhdGVkKTtcbiAgICB9KTtcblxuICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcbiAgfSk7XG59XG5cbi8vbWFyayBhcyBmaW5pc2hlZCBhbmQgcmVtb3ZlIGl0ZW1cbi8vY2FuY2VsIGFkZFxuLy8gY2FudCAgcHJlc3MgYWRkIGl0ZW0gdHdpY2VcblxuZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbihjdXJyZW50RGl2KSB7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybURpdlwiKTtcbiAgY29uc3QgY3JlYXRlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9ubmFtZSA9IFwiYnV0dG9uXCIgKyBjdXJyZW50RGl2LmlkO1xuICBjcmVhdGVidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9ubmFtZSk7XG4gIGNyZWF0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGN1cnJlbnREaXYuaWQpO1xuICBjcmVhdGVidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlYnV0dG9uKTtcbiAgY3VycmVudERpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgY3JlYXRlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYWRkSXRlbUZvcm0oY3VycmVudERpdiwgZm9ybURpdik7XG4gICAgY29uc3QgdGl0bGVGb2N1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuZm9jdXMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICBsZXQgaXRlbUluZm8gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgaXRlbUluZm8ucHVzaChwYWlyWzFdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFpclswXSArIFwiLCBcIiArIHBhaXJbMV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50RGl2LmlkO1xuICAgICAgY29uc3QgaXRlbURpdkV4aXN0aW5nID0gY3VycmVudERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0ZW1EaXZcIikubGVuZ3RoO1xuICAgICAgY29uc3QgbmV3aXRlbSA9IGNyZWF0ZUxpc3QuY3JlYXRlTmV3SXRlbShcbiAgICAgICAgaXRlbUluZm9bMF0sXG4gICAgICAgIGl0ZW1JbmZvWzFdLFxuICAgICAgICBpdGVtSW5mb1syXSxcbiAgICAgICAgaXRlbUluZm9bM10sXG4gICAgICAgIGl0ZW1JbmZvWzRdLFxuICAgICAgICBpdGVtSW5mb1s1XSxcbiAgICAgICAgY3VycmVudFByb2plY3QsXG4gICAgICAgIGl0ZW1EaXZFeGlzdGluZ1xuICAgICAgKTtcbiAgICAgIGFkZEl0ZW1Ub0RvbShuZXdpdGVtLCBjdXJyZW50RGl2KTtcbiAgICAgIHJlbW92ZUl0ZW1CdXR0b24obmV3aXRlbSk7XG4gICAgICBjb25zdCBjdXJyZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiICsgY3VycmVudERpdi5pZCk7XG4gICAgICBjdXJyZW50Rm9ybS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1CdXR0b24oaXRlbSkge1xuICBjb25zdCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaXRlbUlEKTtcbiAgY29uc3QgcmVtb3ZlSXRlbUJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZUl0ZW1CdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyZW1vdmVJdGVtXCIpO1xuICByZW1vdmVJdGVtQnV0LnRleHRDb250ZW50ID0gXCJSZW1vdmUgSXRlbVwiO1xuICByZW1vdmVJdGVtQnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudEl0ZW0ucmVtb3ZlKCk7XG4gICAgY3JlYXRlTGlzdC5yZW1vdmVJdGVtRnJvbUxpc3QoaXRlbSk7XG4gIH0pO1xuICBjdXJyZW50SXRlbS5hcHBlbmRDaGlsZChyZW1vdmVJdGVtQnV0KTtcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvRG9tKGl0ZW0sIGN1cnJlbnREaXYpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaXRlbURpdkV4aXN0aW5nID0gY3VycmVudERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0ZW1EaXZcIikubGVuZ3RoO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtRGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5wcm9qZWN0ICsgXCJpdGVtXCIgKyBpdGVtRGl2RXhpc3RpbmcpO1xuICBjb25zdCBpdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtVGl0bGVcIik7XG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1EZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgaXRlbUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1EdWVEYXRlXCIpO1xuICBjb25zdCBpdGVtQ3JlYXRpb25EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNyZWF0aW9uRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DcmVhdGlvbkRhdGVcIik7XG4gIGNvbnN0IGl0ZW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1Qcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1Qcmlvcml0eVwiKTtcbiAgY29uc3QgaXRlbU5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbU5vdGVzRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbU5vdGVzXCIpO1xuICBjb25zdCBpdGVtQ2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUNoZWNrTGlzdERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1DaGVja0xpc3RcIik7XG5cbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbUNyZWF0aW9uRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1DaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICBpZiAoaXRlbS5kZXNjcmlwdGlvbiAhPSBcIlwiKSB7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBpdGVtLmRlc2NyaXB0aW9uO1xuICB9XG4gIGlmIChpdGVtLmR1ZURhdGUgIT0gXCJcIikge1xuICAgIGl0ZW1EdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWVcIiArIGl0ZW0uZHVlRGF0ZTtcbiAgfVxuICBpdGVtQ3JlYXRpb25EYXRlLnRleHRDb250ZW50ID0gXCJDcmVhdGVkOiBcIiArIGl0ZW0uY3JlYXRpb25EYXRlO1xuICBpZiAoaXRlbS5wcmlvcml0eSAhPSBcIlwiKSB7XG4gICAgaXRlbVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICB9XG4gIGlmIChpdGVtLm5vdGVzICE9IFwiXCIpIHtcbiAgICBpdGVtTm90ZXMudGV4dENvbnRlbnQgPSBcIk5vdGVzOiBcIiArIGl0ZW0ubm90ZXM7XG4gIH1cbiAgaXRlbUNoZWNrTGlzdC50ZXh0Q29udGVudCA9IGl0ZW0uY2hlY2tMaXN0O1xuXG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1UaXRsZURpdik7XG4gIGl0ZW1UaXRsZURpdi5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uRGl2KTtcbiAgaXRlbURlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtRHVlRGF0ZURpdik7XG4gIGl0ZW1EdWVEYXRlRGl2LmFwcGVuZENoaWxkKGl0ZW1EdWVEYXRlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DcmVhdGlvbkRhdGVEaXYpO1xuICBpdGVtQ3JlYXRpb25EYXRlRGl2LmFwcGVuZENoaWxkKGl0ZW1DcmVhdGlvbkRhdGUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5RGl2KTtcbiAgaXRlbVByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gIGRpdi5hcHBlbmRDaGlsZChpdGVtTm90ZXNEaXYpO1xuICBpdGVtTm90ZXNEaXYuYXBwZW5kQ2hpbGQoaXRlbU5vdGVzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW1DaGVja0xpc3REaXYpO1xuICBpdGVtQ2hlY2tMaXN0RGl2LmFwcGVuZENoaWxkKGl0ZW1DaGVja0xpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRJdGVtRm9ybShjdXJyZW50RGl2LCBmb3JtRGl2KSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJnZXRcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgZm9ybUlEID0gXCJmb3JtXCIgKyBjdXJyZW50RGl2LmlkO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGZvcm1JRCk7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDEuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gIGxhYmVsMS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiO1xuICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGl0bGVcIik7XG4gIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuXG4gIGlucHV0MS5yZXF1aXJlZCA9IHRydWU7XG4gIGRpdjEuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwyLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBsYWJlbDIudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBpbnB1dDIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBpbnB1dDIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICBkaXYyLmFwcGVuZENoaWxkKGlucHV0Mik7XG5cbiAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcbiAgbGFiZWwzLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkdWVEYXRlXCIpO1xuICBpbnB1dDMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG4gIGlucHV0My5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gIGRpdjMuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgZGl2My5hcHBlbmRDaGlsZChpbnB1dDMpO1xuXG4gIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWw0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBsYWJlbDQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dDQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInByaW9yaXR5XCIpO1xuICBpbnB1dDQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBpbnB1dDQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgZGl2NC5hcHBlbmRDaGlsZChsYWJlbDQpO1xuICBkaXY0LmFwcGVuZENoaWxkKGlucHV0NCk7XG5cbiAgY29uc3QgZGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtTmV3SXRlbVwiKTtcbiAgY29uc3QgbGFiZWw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbDUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibm90ZXNcIik7XG4gIGxhYmVsNS50ZXh0Q29udGVudCA9IFwiTm90ZXM6IFwiO1xuICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0NS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibm90ZXNcIik7XG4gIGlucHV0NS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZXNcIik7XG4gIGlucHV0NS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzXCIpO1xuICBkaXY1LmFwcGVuZENoaWxkKGxhYmVsNSk7XG4gIGRpdjUuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcblxuICBjb25zdCBkaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Ni5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1OZXdJdGVtXCIpO1xuICBjb25zdCBsYWJlbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsNi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaGVja0xpc3RcIik7XG4gIGxhYmVsNi50ZXh0Q29udGVudCA9IFwiQ2hlY2sgTGlzdDogXCI7XG4gIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQ2LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja0xpc3RcIik7XG4gIGlucHV0Ni5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2hlY2tMaXN0XCIpO1xuICBpbnB1dDYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja0xpc3RcIik7XG4gIGRpdjYuYXBwZW5kQ2hpbGQobGFiZWw2KTtcbiAgZGl2Ni5hcHBlbmRDaGlsZChpbnB1dDYpO1xuXG4gIGNvbnN0IGRpdjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXY3LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybU5ld0l0ZW1cIik7XG4gIGNvbnN0IGlucHV0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQ3LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGlucHV0Ny5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFkZFwiKTtcbiAgZGl2Ny5hcHBlbmRDaGlsZChpbnB1dDcpO1xuXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Myk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2NCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2NSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Nik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Nyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZGl2SUQpIHtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklEKTtcbiAgY3VycmVudERpdi5yZW1vdmUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0NyZWF0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzQ3JlYXRlZFtpXTtcbiAgICBpZiAocHJvamVjdC5uYW1lID09PSBkaXZJRCkge1xuICAgICAgbGV0IHVwZGF0ZWRQcm9qZWN0c0NyZWF0ZWQgPSBwcm9qZWN0c0NyZWF0ZWRcbiAgICAgICAgLnNsaWNlKDAsIGkpXG4gICAgICAgIC5jb25jYXQocHJvamVjdHNDcmVhdGVkLnNsaWNlKGkgKyAxKSk7XG4gICAgICBwcm9qZWN0c0NyZWF0ZWQgPSB1cGRhdGVkUHJvamVjdHNDcmVhdGVkO1xuICAgICAgcmV0dXJuIHByb2plY3RzQ3JlYXRlZDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9Eb0NyZWF0ZXIsIGNyZWF0aW9uVGltZSB9IGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBtYW5hZ2VEb20gfSBmcm9tIFwiLi9kb210aGluZ3MuanNcIjtcblxuLy8gY2hhbWEgZXN0YSBmdW7Dp2FvIGNvbSBvIHF1ZSBhIHBlc3NvYSBxdWVyICsgbyBwcm9qZWN0byBvbmRlIGNhcnJlZ291IG5vIGJvdMOjb1xuXG5tYW5hZ2VEb20oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=