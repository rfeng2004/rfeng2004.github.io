function addSidebar() {
    var openbtn = document.createElement("a");
    openbtn.className = "openbtn";
    openbtn.onclick = openNav;
    openbtn.href = "javascript:void(0)";
    openbtn.innerHTML = "&equiv;";
    var sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";
    var closebtn = document.createElement("a");
    closebtn.className = "closebtn";
    closebtn.onclick = closeNav;
    closebtn.href = "javascript:void(0)";
    closebtn.innerHTML = "&times;";
    var home = document.createElement("a");
    home.href = "index.html";
    home.innerHTML = "Home";
    var projects = document.createElement("a");
    projects.href = "projects.html";
    projects.innerHTML = "Projects";
    sidebar.appendChild(closebtn);
    sidebar.appendChild(home);
    sidebar.appendChild(projects);
    document.body.append(openbtn);
    document.body.append(sidebar);
}


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

addSidebar();
