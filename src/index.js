import { toDoCreater, creationTime } from "./createToDo.js";
import { projectCreator } from "./createProject.js";

const createList = (function () {
  const newProject = function (title, description, dueDate, creationDate) {
    const project = new projectCreator(
      title,
      description,
      dueDate,
      creationDate
    );
    return project;
  };
  let projectList = [];
  const newListItem = function (
    project,
    title,
    description,
    dueDate,
    priority,
    creationDate,
    notes,
    checkList
  ) {
    if (projectList.length === 0) {
      projectList[0] = project;
    }
    const listItem = new toDoCreater(
      title,
      description,
      dueDate,
      priority,
      creationDate,
      notes,
      checkList
    );
    projectList.push(listItem);
    return listItem;
  };
  return { newProject, newListItem, projectList };
})();

let currentTime = creationTime();
const firstProject = createList.newProject(
  "Default",
  "Random list",
  "31/10/2021",
  currentTime
);
currentTime = creationTime();
const todo1 = createList.newListItem(
  firstProject,
  "trash day",
  "take out trash",
  "10/10/2021",
  "5",
  currentTime,
  "just do it",
  "none"
);

console.log(createList.projectList);
