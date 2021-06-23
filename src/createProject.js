import { creationTime } from "./createToDo.js";

export { createNewProject };

class projectCreator {
  constructor(title) {
    this.title = title;
  }
}

function createNewProject(title) {
  const newProject = new projectCreator(title);
  return newProject;
}
