dragElement(document.getElementById("projects"));
dragElement(document.getElementById("about"));

taskbarButton(document.getElementById("taskbar"));

expand(document.getElementById("expandButton"));

function expand() {
    const morePosts = document.getElementById("more");
    const button = document.getElementById("expandButtonText");
    if (morePosts.style.display === "none") {
        button.innerHTML = "Show less";
        morePosts.style.display = "inline";
    }
    else {
        button.innerHTML = "Show more";
        morePosts.style.display = "none";
    }
}

function createClouds() {
    console.log("make some clouds");
}

function taskbarButton(elmnt) {

    let projectsWindow = document.getElementById("projects");
    let projectButton = document.getElementById(elmnt.id + "-projects");
    let projectsIcon = document.getElementById("projects-icon");
    projectButton.onmousedown = projectsButtonPressed;
    projectsIcon.ondblclick = projectsButtonPressed;

    let aboutWindow = document.getElementById("about");
    let aboutButton = document.getElementById(elmnt.id + "-about");
    let aboutIcon = document.getElementById("about-icon");
    aboutButton.onmousedown = aboutButtonPressed;
    aboutIcon.ondblclick = aboutButtonPressed;

    function projectsButtonPressed() {

        if (projectsWindow.style.display === "block") {
            projectButton.setAttribute("class", "tabs");
            projectsWindow.style.display = "none";
        }
        else {
            projectsWindow.style.display = "block";
            projectButton.setAttribute("class", "pressed-tabs");
        }
    }

    function aboutButtonPressed() {
        if (aboutWindow.style.display === "block") {
            aboutButton.setAttribute("class", "tabs");
            aboutWindow.style.display = "none";
        }
        else {
            aboutWindow.style.display = "block";
            aboutButton.setAttribute("class", "pressed-tabs");
        }
    }

}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV: 
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        checkBoundries();

    }

    function checkBoundries() {
        // Left
        if (elmnt.offsetLeft <= 0) {
            elmnt.style.left = 0 + "px";
        }
        // Right
        if (elmnt.offsetLeft + elmnt.offsetWidth >= window.innerWidth) {
            elmnt.style.left = (window.innerWidth - elmnt.offsetWidth) - 1 + "px";
        }
        //Top
        if (elmnt.offsetTop <= 0) {
            elmnt.style.top = 0 + "px";
        }
        //Bottom
        if (elmnt.offsetHeight + elmnt.offsetTop >= window.innerHeight - 50) {
            elmnt.style.top = (window.innerHeight - elmnt.offsetHeight) - 50 + "px";
        }

    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}