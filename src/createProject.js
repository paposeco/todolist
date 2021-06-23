export { createNewProject };

class projectCreator {
  constructor(title, items) {
    this.title = title;
    this.items = [];
  }
}

function createNewProject(title, items) {
  const newProject = new projectCreator(title, items);
  return newProject;
}
