export { manageDom };

function manageDom() {
  // isto tem de ser uma funcao se cakhar +e melhor correr uma vez no inicio e depois criar um botao a cada listen
  let divs = document.querySelectorAll("div#content > div");
  divs.forEach(function (singlediv) {
    const createbutton = document.createElement("button");
    const buttonname = "button" + singlediv.id;
    createbutton.setAttribute("id", buttonname);
    createbutton.setAttribute("name", singlediv.id);
    createbutton.textContent = singlediv.id;
    singlediv.appendChild(createbutton);
  });
  const divContent = document.getElementById("content");
  const addDivButton = document.createElement("button");
  addDivButton.textContent = "New Project";
  addDivButton.setAttribute("id", "addnewproject");
  divContent.appendChild(addDivButton);
  addDivButton.addEventListener("click", function () {
    divs = document.querySelectorAll("div#content > div");
    const numberOfProjects = divs.length;
    const createDiv = document.createElement("div");
    const projectName = window.prompt("Project Name:");
    createDiv.setAttribute("id", "project" + numberOfProjects);
    // depois disto tem de criar um botao
    divContent.appendChild(createDiv);
  });
}
