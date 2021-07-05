import {
  manageDom,
  addItemToDom,
  styleItem,
  showOrHideDivs,
} from "./domthings.js";
import { checkInfoFromStorage } from "./info.js";
import { createList } from "./createToDo.js";
import { compareAsc, parseISO } from "date-fns";
import "./style.css";
export { orderTasksP, orderTasksD };

manageDom();
checkInfoFromStorage();

function orderTasksD(projectDivId) {
  const projectDiv = document.getElementById(projectDivId);
  const itemdivs = projectDiv.querySelectorAll(".itemDiv");
  const completeListTasks = createList.updateItemList(null, null, null);
  let taskInProject = [];
  for (let i = 0; i < completeListTasks.length; i++) {
    const task = completeListTasks[i];
    if (task.project === projectDivId) {
      taskInProject.push(task);
    }
  }
  taskInProject.sort(compareDate);
  itemdivs.forEach((item) => item.remove());
  taskInProject.forEach(function (item) {
    addItemToDom(item, projectDiv, projectDivId);
    showOrHideDivs(item, "hide");
    if (item.done) {
      styleItem(item);
    }
  });
}

function compareDate(a, b) {
  if (a.done) {
    return 1;
  }
  if (b.done) {
    return -1;
  }
  const compare = compareAsc(parseISO(a.dueDate), parseISO(b.dueDate));
  return compare;
}

function orderTasksP(projectDivId) {
  const projectDiv = document.getElementById(projectDivId);
  const itemdivs = projectDiv.querySelectorAll(".itemDiv");
  const completeListTasks = createList.updateItemList(null, null, null);
  let taskInProject = [];
  for (let i = 0; i < completeListTasks.length; i++) {
    const task = completeListTasks[i];
    if (task.project === projectDivId) {
      taskInProject.push(task);
    }
  }
  taskInProject.sort(comparePriority);
  itemdivs.forEach((item) => item.remove());
  taskInProject.forEach(function (item) {
    addItemToDom(item, projectDiv, projectDivId);
    showOrHideDivs(item, "hide");
    if (item.done) {
      styleItem(item);
    }
  });
}
function comparePriority(a, b) {
  if (a.done) {
    return 1;
  }
  if (b.done) {
    return -1;
  }
  return Number(b.priority) - Number(a.priority);
}

const footerDiv = document.querySelector("footer");
const para = document.createElement("p");
para.innerHTML =
  '<a href="https://github.com/paposeco/" alt="github"><span><i class="lab la-github"></i></span>Fabi</a>';
footerDiv.appendChild(para);
