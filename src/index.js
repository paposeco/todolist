import { toDoCreater, creationTime } from "./createToDo.js";
import { createNewProject } from "./createProject.js";
import { manageDom } from "./domthings.js";

const projectCollection = (function () {
  let projectsCreated = [];
  // on click create new project
  function createProject(title) {
    projectsCreated.push(createNewProject(title));
  }
  return projectsCreated;
})();

// chama esta funçao com o que a pessoa quer + o projecto onde carregou no botão
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
    return listItem;
  };
  return { newListItem, projectList };
})();

// const todo1 = createList.newListItem(
//   "trash day",
//   "take out trash",
//   "10/10/2021",
//   "6",
//   currentTime,
//   "just do it",
//   "none",
//   "default"
// );
manageDom();

console.log(createList.projectList);
