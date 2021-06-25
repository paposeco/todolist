export { createNewProject };

class projectCreator {
  constructor(title, name, items) {
    this.title = "Project: " + title;
    this.name = name;
    this.items = [];
  }
}

function createNewProject(title, name, items) {
  const storedItems = window.localStorage;
  for (let i = 0; i < storedItems.length; i++) {
    const objName = storedItems.key(i);
    if (objName === name) {
      const jsonString = storedItems.getItem(storedItems.key(i));
      return JSON.parse(jsonString);
    }
  }
  const newProject = new projectCreator(title, name, items);
  const projectForStorage = JSON.stringify(newProject);
  storedItems.setItem(newProject.name, projectForStorage);
  return newProject;
}
