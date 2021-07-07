import { compareAsc, format, getDate, getMonth, getYear } from "date-fns";
import { createProject } from "./createProject.js";

export { creationTime, createList, createCheckListObject };

// for registering time of task creation
function creationTime() {
  const now = Date.now();
  const formatedDate = format(now, "yyyy-MM-dd");
  return formatedDate;
}

// task constructor class
class toDoCreater {
  constructor(
    title,
    description,
    dueDate,
    priority,
    creationDate,
    notes,
    url,
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
    this.url = url;
    this.project = project;
    this.done = done;
    this.itemID = project + "item" + itemNumberInProject;
    this.checkList = createCheckListObject(checkList, this.itemID);
  }
}

// each task can have a checklist with subtasks. the user inputs the subtasks on a text input, separating each task with a ";" with is transformed into an object with function
function createCheckListObject(checkList, itemID) {
  if (checkList === "") {
    return "";
  }
  const checkListString = checkList;
  const checkListArray = checkListString.split(";");
  let obj = {};
  for (let i = 0; i < checkListArray.length; i++) {
    const cleanString = checkListArray[i].trim();
    const objKey = "task" + itemID + i;
    const objKeyStatus = objKey + "Status";
    obj[objKey] = cleanString;
    obj[objKeyStatus] = false;
  }
  return obj;
}

// function factory to create tasks, save tasks on an array and remove tasks
const createList = (function () {
  let itemList = [];
  const updateItemList = function (newlist, addorremove, item) {
    if (addorremove === "add") {
      // when a new task is created, adds task to itemList
      itemList.push(item);
      return itemList;
    } else if (newlist === null && addorremove === null && item === null) {
      // for getting and up to date list of existing tasks
      return itemList;
    } else {
      itemList = newlist;
      return itemList;
    }
  };

  const retrieveItem = function (itemID) {
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].itemID === itemID) {
        return itemList[i];
      }
    }
  };

  // uses the constructor todocreator and updates item list
  const createNewItem = function (
    title,
    description,
    dueDate,
    priority,
    notes,
    url,
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
      url,
      checkList,
      project,
      itemNumberInProject,
      //every item created starts with a !done
      false
    );
    updateItemList(itemList, "add", newItem);
    return newItem;
  };
  const removeItemFromList = function (item) {
    for (let i = 0; i < itemList.length; i++) {
      const currentItemOnList = itemList[i];
      if (currentItemOnList.itemID === item.itemID) {
        let newlist = itemList.slice(0, i).concat(itemList.slice(i + 1));
        itemList = updateItemList(newlist, "remove", null);
      }
    }
  };

  const removeAllItemsFromProject = function (project) {
    const currentitems = itemList;
    for (let i = 0; i < currentitems.length; i++) {
      const item = currentitems[i];
      if (item.project === project) {
        removeItemFromList(item);
      }
    }
  };
  return {
    createNewItem,
    updateItemList,
    removeItemFromList,
    itemList,
    removeAllItemsFromProject,
    retrieveItem,
  };
})();
