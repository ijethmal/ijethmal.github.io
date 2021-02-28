function revealBlog() {
    document.getElementById('blog').style.display = "block";
    document.getElementById('education').style.display = "none";
    document.getElementById('onlineLinks').style.display = "none";
}

function revealEdu() {
    document.getElementById('education').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('onlineLinks').style.display = "none";
}

function revealOnline() {
    document.getElementById('onlineLinks').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('education').style.display = "none";
}