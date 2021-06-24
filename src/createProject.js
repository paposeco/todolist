export { createNewProject };

class projectCreator {
  constructor(title, name, items) {
    this.title = "Project: " + title;
    this.name = name;
    this.items = [];
  }
}

function createNewProject(title, name, items) {
  const newProject = new projectCreator(title, name, items);
  return newProject;
}
