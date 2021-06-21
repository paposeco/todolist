import { creationTime } from "./createToDo.js";

export { createNewProject, projectCreator };

class projectCreator {
  constructor(title, description, dueDate, creationDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.creationDate = creationDate;
  }
}

function createNewProject() {
  return defaultProject;
}
const currentTime = creationTime();
// const defaultProject = new createProject(
//   "Default",
//   "Random list",
//   "31/10/2021",
//   currentTime
// );
