import { compareAsc, format, getDate, getMonth, getYear } from "date-fns";
import { createProject } from "./createProject.js";

export { creationTime, createList, createCheckListObject };

function creationTime() {
  const now = Date.now();
  const formatedDate = format(now, "yyyy-MM-dd");
  return formatedDate;
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
    this.project = project;
    this.done = done;
    this.itemID = project + "item" + itemNumberInProject;
    this.checkList = createCheckListObject(checkList, this.itemID);
  }
}

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

  const retrieveItem = function (itemID) {
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].itemID === itemID) {
        return itemList[i];
      }
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
    updateItemList(itemList, "add", newItem);
    console.log(newItem);
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
