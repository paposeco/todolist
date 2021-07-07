import { createList } from "./createToDo.js";
import { addItemToDomSimplified } from "./domthings.js";
import { compareAsc, parseISO } from "date-fns";
export { checkInfoFromStorage, onAddCheckForChangesOnInfo, changeItemOnInfo };

// this file creates the info section on the left of the page/ top for small screens. Displays highest priority task and closest due date. Only tasks with > 1 priority are displayed

// looks for the highest priority task on a list of tasks. returns highest priority task
function highestPriority(items, objH) {
  let objHighest;
  if (objH !== undefined) {
    objHighest = objH;
  }
  for (let i = 0; i < items.length; i++) {
    const obj = items[i];
    // skips items that are finished
    if (obj.done) {
      continue;
    }
    const priority = obj.priority;
    if (objHighest === undefined) {
      objHighest = obj;
      continue;
    }
    // objHighest is updated every time a higher priority task is found. If priority is five, exits the loop with that task
    if (priority > objHighest.priority) {
      objHighest = obj;
      if (priority === "5") {
        break;
      }
    }
  }
  return objHighest;
}

// compares priority between two tasks
function highestPrioritySingle(item, objH) {
  let objHighest;
  if (objH !== undefined) {
    objHighest = objH;
  }
  if (item.priority > objHighest.priority) {
    return item;
  } else {
    return objHighest;
  }
}

// same thing as the highest priority, but comparing dates. returns the task with the closest due date
function closestDueDate(items, objD) {
  let closest;
  if (objD !== undefined) {
    closest = objD;
  }
  for (let i = 0; i < items.length; i++) {
    const obj = items[i];
    const dueDate = obj.dueDate;
    if (dueDate === "" || obj.done) {
      continue;
    }
    if (dueDate !== "" && closest === undefined) {
      closest = obj;
      continue;
    }
    const compareDates = compareAsc(
      parseISO(closest.dueDate),
      parseISO(dueDate)
    );
    if (compareDates === 1) {
      closest = obj;
    }
  }
  return closest;
}

// compares due date between two tasks
function closestDueDateSingle(item, objD) {
  let objClosest;
  if (objD !== undefined) {
    objClosest = objD;
  }
  const compareDates = compareAsc(
    parseISO(objClosest.dueDate),
    parseISO(item.dueDate)
  );
  if (compareDates === 1) {
    objClosest = item;
  }
  return objClosest;
}

// whenever a new task is created, checks if the tasks displayed as highest priority / closest due date, are still highest/ closest
function onAddCheckForChangesOnInfo(item) {
  const objPriority = document.querySelector(".infoPriority");
  const objDate = document.querySelector(".infoDate");
  if (objPriority === null) {
    // if no task was being displayed before the new task was added, and if the current task has a priority > 1, displays the new task
    if (item.priority > 1) {
      addInfoToDom(item, "priority");
    }
  } else {
    // only checks if priority of new task > 1
    if (Number(item.priority) > 1) {
      const objInfoPriorityID = objPriority.getAttribute("id");
      //a task displayed on info carries with it the object ID. by remove "infoP" from the ID, we get the object ID.
      const objID = objInfoPriorityID.replace("infoP", "");
      const currentItemList = createList.updateItemList(null, null, null);
      let highestpriorityobj;
      for (let i = 0; i < currentItemList.length; i++) {
        const currentitem = currentItemList[i];
        if (currentitem.itemID === objID) {
          // compares priority of displayed task with the new task
          highestpriorityobj = highestPrioritySingle(item, currentitem);
          break;
        }
      }
      //displays task
      addInfoToDom(highestpriorityobj, "priority");
    }
  }
  // same thing as priority, but for due date
  if (objDate === null) {
    if (item.dueDate !== "") {
      addInfoToDom(item, "duedate");
    }
  } else {
    const objInfoDateID = objDate.getAttribute("id");
    const objID = objInfoDateID.replace("infoD", "");
    const currentItemList = createList.updateItemList(null, null, null);
    let nearestduedateobj;
    for (let i = 0; i < currentItemList.length; i++) {
      const currentitem = currentItemList[i];
      if (currentitem.itemID === objID) {
        nearestduedateobj = closestDueDateSingle(item, currentitem);
        break;
      }
    }
    addInfoToDom(nearestduedateobj, "duedate");
  }
}

//after removing a task, a project or marking a task as finished, checks to see if info needs to be changed
function changeItemOnInfo(type) {
  if (type === "priority") {
    let objPriority;
    // at the time the function is called, the list of items has already been updated; looks for an item to display
    const currentitems = createList.updateItemList(null, null, null);
    for (let i = 0; i < currentitems.length; i++) {
      const obj = currentitems[i];
      objPriority = highestPriority(currentitems, objPriority);
    }
    if (objPriority !== undefined && objPriority.priority !== "1") {
      addInfoToDom(objPriority, "priority");
    } else {
      // if no item is found, removes the div from dom
      const priorityDiv = document.querySelector(".infoPriority");
      if (priorityDiv !== null) {
        priorityDiv.remove();
      }
    }
  } else {
    let objDueDate;
    const currentitems = createList.updateItemList(null, null, null);
    for (let i = 0; i < currentitems.length; i++) {
      const obj = currentitems[i];
      objDueDate = closestDueDate(currentitems, objDueDate);
    }
    if (objDueDate !== undefined && objDueDate.dueDate !== "") {
      addInfoToDom(objDueDate, "duedate");
    } else {
      const duedateDiv = document.querySelector(".infoDueDate");
      if (duedateDiv !== null) {
        duedateDiv.remove();
      }
    }
  }
}

// on pageload, checks for tasks from local storage with priority > 1 and displays highest priorty task, and for tasks with due date defined, displaying the closest due date
function checkInfoFromStorage() {
  const storedItems = window.localStorage;
  if (storedItems.length === 1) {
    const projectstored = storedItems.getItem(storedItems.key(0));
    const parsedjson = JSON.parse(projectstored);
    // if a project stored doesn't have tasks, return
    if (parsedjson.items.length === 0) {
      return;
    }
  }
  if (storedItems.length != 0) {
    let objPriority;
    let objDueDate;
    for (let i = 0; i < storedItems.length; i++) {
      const projectString = storedItems.getItem(storedItems.key(i));
      const project = JSON.parse(projectString);
      const items = project.items;
      objPriority = highestPriority(items, objPriority);
      objDueDate = closestDueDate(items, objDueDate);
    }
    if (objPriority !== undefined && objPriority.priority !== "1") {
      addInfoToDom(objPriority, "priority");
    }
    if (objDueDate !== undefined && objDueDate.dueDate !== "") {
      addInfoToDom(objDueDate, "duedate");
    }
  }
}

function addInfoToDom(item, type) {
  const infoDiv = document.getElementById("info");
  let infoPriority = document.querySelector(".infoPriority");
  let infoDate = document.querySelector(".infoDate");
  let currentitem = item;
  if (type === "priority") {
    if (infoPriority !== null) {
      // whenever the function is called, checks to see if there was a previous task being displayed. If true, removes the task. When the function is called, we already know that the current task has a higher priority
      infoPriority.remove();
    }
    infoPriority = document.createElement("div");
    infoPriority.setAttribute("class", "infoPriority");
    infoPriority.setAttribute("id", "infoP" + item.itemID);
    const title = document.createElement("h3");
    title.textContent = "Highest Priority:";
    if (infoDiv.hasChildNodes()) {
      infoDiv.insertBefore(infoPriority, infoDate);
    } else {
      infoDiv.appendChild(infoPriority);
    }
    infoPriority.appendChild(title);
    addItemToDomSimplified(item, infoPriority, "highestPriority");
  } else {
    if (infoDate !== null) {
      infoDate.remove();
    }
    infoDate = document.createElement("div");
    infoDate.setAttribute("class", "infoDate");
    infoDate.setAttribute("id", "infoD" + item.itemID);
    const title = document.createElement("h3");
    title.textContent = "Closest Deadline:";
    infoDiv.appendChild(infoDate);
    infoDate.appendChild(title);
    addItemToDomSimplified(item, infoDate, "closestduedate");
  }
}
