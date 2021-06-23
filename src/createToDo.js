import { compareAsc, format, getDate, getMonth, getYear } from "date-fns";

export { creationTime, createList };

function creationTime() {
  const now = Date.now();
  const day = getDate(now);
  const month = getMonth(now);
  const year = getYear(now);
  const finaldate = day + " " + month + " " + year;
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
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.creationDate = creationDate;
    this.notes = notes;
    this.checkList = checkList;
    this.project = project;
  }
}

const createList = (function () {
  let projectList = [];
  const newListItem = function (
    title,
    description,
    dueDate,
    priority,
    notes,
    checkList,
    project
  ) {
    let currentTime = creationTime();
    const listItem = new toDoCreater(
      title,
      description,
      dueDate,
      priority,
      currentTime,
      notes,
      checkList,
      project
    );
    projectList.push(listItem);
    //console.log(listItem);
    return listItem;
  };
  return { newListItem, projectList };
})();

const currentTime = creationTime();
const todo1 = new toDoCreater(
  "trash day",
  "take out trash",
  "10/10/2021",
  "5",
  currentTime,
  "just do it",
  "none"
);

const todo2 = new toDoCreater(
  "buy food",
  "go to the supermarket",
  "12/10/2021",
  "4",
  currentTime,
  "olive oil",
  "none"
);
