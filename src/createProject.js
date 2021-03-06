export { createProject };

// constructor class for creating projects. each project has a title, unique name and and array of tasks(objects)
class projectCreator {
  constructor(title, name, items) {
    this.title = title;
    this.name = name;
    this.items = [];
  }
}

// function factory for project creation
const createProject = (function () {
  let projectsCreated = [];

  //creates a new project with the constructor projectcreator
  const createNewProject = function (title, name, items) {
    //checks if there are "projects" in storage and creates a project if there project doesn't exist in storage
    const storedItems = window.localStorage;
    for (let i = 0; i < storedItems.length; i++) {
      const objName = storedItems.key(i);
      if (objName === name) {
        const jsonString = storedItems.getItem(storedItems.key(i));
        return JSON.parse(jsonString);
      }
    }
    const newProject = new projectCreator(title, name, items);
    // saves project to local storage
    const projectForStorage = JSON.stringify(newProject);
    storedItems.setItem(newProject.name, projectForStorage);
    return newProject;
  };

  // adds task to project in array projects created, and saves task to local storage
  const addItemToProject = function (project, item) {
    for (let i = 0; i < projectsCreated.length; i++) {
      const currentProject = projectsCreated[i];
      if (currentProject.name === project) {
        let currentProjectItemArray = currentProject.items;
        currentProjectItemArray.push(item);
        addItemToProjectStorage(project, item);
        break;
      }
    }
  };

  const addItemToProjectStorage = function (project, item) {
    const storedItems = window.localStorage;
    const currentProjectJson = storedItems.getItem(project);
    const currentProject = JSON.parse(currentProjectJson);
    currentProject.items.push(item);
    const currentProjectBackToJson = JSON.stringify(currentProject);
    storedItems.setItem(project, currentProjectBackToJson);
  };
  const removeItemFromProject = function (project, item) {
    let storedItems = window.localStorage;
    const currentProjectJson = storedItems.getItem(project);
    let currentProjectStorage = JSON.parse(currentProjectJson);
    let currentProjectItemArrayInStorage = currentProjectStorage.items;
    for (let i = 0; i < projectsCreated.length; i++) {
      const currentProject = projectsCreated[i];
      if (currentProject.name === project) {
        let currentProjectItemArray = currentProject.items;
        const itemToBeDeleted = item.itemID;
        for (let j = 0; j < currentProjectItemArray.length; j++) {
          let currentItemID = currentProjectItemArray[j].itemID;
          if (currentItemID === itemToBeDeleted) {
            currentProjectItemArrayInStorage.splice(j, 1);
            currentProjectItemArray.splice(j, 1);
            break;
          }
        }
      }
    }
    currentProjectStorage.items = currentProjectItemArrayInStorage;
    const jsonStringify = JSON.stringify(currentProjectStorage);
    storedItems.setItem(project, jsonStringify);
  };

  // for editing tasks, removes task from project items, and adds it again with the same ID
  const editItemInProject = function (currentItem) {
    const storedItems = window.localStorage;
    let projectInStorage = storedItems.getItem(currentItem.project);
    let projectInStorageParsed = JSON.parse(projectInStorage);
    let projectItemsArray = projectInStorageParsed.items;
    for (let i = 0; i < projectItemsArray.length; i++) {
      const itemInArray = projectItemsArray[i];
      if (itemInArray.itemID === currentItem.itemID) {
        projectItemsArray.splice(i, 1, currentItem);
        break;
      }
    }
    projectInStorageParsed.items = projectItemsArray;
    const prepareProjectForStorage = JSON.stringify(projectInStorageParsed);
    storedItems.setItem(currentItem.project, prepareProjectForStorage);
  };

  const projectCollection = function (title, name) {
    const newProject = createNewProject(title, name, []);
    projectsCreated.push(newProject);
    return newProject;
  };

  const updateProjectArray = function (array) {
    projectsCreated = array;
  };

  return {
    removeItemFromProject,
    projectCollection,
    addItemToProject,
    projectsCreated,
    updateProjectArray,
    editItemInProject,
  };
})();
