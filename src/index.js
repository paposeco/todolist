//import { toDoCreater, creationTime } from "./createToDo.js";
//import { createNewProject } from "./createProject.js";
import { manageDom } from "./domthings.js";
import { createList } from "./createToDo.js";
import { checkInfoFromStorage } from "./info.js";
import "./style.css";

manageDom();
checkInfoFromStorage();
