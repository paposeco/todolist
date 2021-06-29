import { createList } from "./createToDo.js";
export { highestPriority };

function highestPriority() {
  // window on load, get items and check for priority. separate function for adding new items
  let currentItems = createList.updateItemList(null, null, null);
  let objHighest;
  for (let i = 0; i < currentItems.length; i++) {
    const obj = currentItems[i];
    const priority = obj.priority;
    if (objHighest === undefined) {
      objHighest = obj;
      continue;
    }
    if (priority > objHighest.priority) {
      objHighest = obj;
      if (priority === "5") {
        break;
      }
    }
  }
  return objHighest;
}

const topObject = highestPriorityOnLoad;
console.log(topObject);
