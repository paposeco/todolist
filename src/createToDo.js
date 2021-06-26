import { compareAsc, format, getDate, getMonth, getYear } from "date-fns";

export { creationTime, createList };

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
