function option() {
    let option = document.getElementById("option");
    let btnOption = document.getElementById("btnOption");
    let btnCloseOption = document.getElementById("btnCloseOption");

    btnOption.setAttribute("style", "display:none;");
    btnCloseOption.setAttribute("style", "");
    option.setAttribute("style", "");
}

function closeOption() {
    let option = document.getElementById("option");
    let btnOption = document.getElementById("btnOption");
    let btnCloseOption = document.getElementById("btnCloseOption");

    btnCloseOption.setAttribute("style", "display:none;");
    btnOption.setAttribute("style", "");
    option.setAttribute("style", "display:none;");
}


function viewSideNav() {
    let btnViewSideNav = document.getElementById("viewSideNav");
    let btnCloseSideNav = document.getElementById("closeSideNav");
    let sideNav = document.getElementById("sideNav");

    btnViewSideNav.setAttribute("style", "display:none;");
    btnCloseSideNav.setAttribute("style", "");
    sideNav.setAttribute("style", "");
}

function closeSideNav() {
    let btnViewSideNav = document.getElementById("viewSideNav");
    let btnCloseSideNav = document.getElementById("closeSideNav");
    let sideNav = document.getElementById("sideNav");

    btnCloseSideNav.setAttribute("style", "display:none;");
    btnViewSideNav.setAttribute("style", "");
    sideNav.setAttribute("style", "display:none;");
}