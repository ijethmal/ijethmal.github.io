//education accordion

function displayInfo(infoId) {
    var info = document.getElementById(infoId);
    var arrow = infoId + 'Img';
    arrow = document.getElementById(arrow);

    //if not visible
    if (info.style.display == "none") {
        info.style.display = "block";
        arrow.src = "images/up-arrow.png";
    }
    //if visible
    else {
        info.style.display = "none";
        arrow.src = "images/down-arrow.png";
    }
}
