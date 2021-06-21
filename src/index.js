import createToDo from "./createToDo.js";
import createNewProject from "./createProject.js";

//criar projecto
//criar notas
function appendToProject() {
  const items = createToDo();
  const defaultProject = createNewProject();
  defaultProject.items = items;
  console.log(defaultProject);
}
appendToProject();
