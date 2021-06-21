class createProject {
  constructor(title, description, dueDate, items) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.items = items;
  }
}

export default function createNewProject() {
  return defaultProject;
}
const defaultProject = new createProject("Default", "Random list", "");
