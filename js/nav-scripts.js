function revealBlog() {
    document.getElementById('blog').style.display = "block";
    document.getElementById('education').style.display = "none";
    document.getElementById('onlineLinks').style.display = "none";
    document.getElementById('writeup').style.display = "none";
    document.getElementById('industry').style.display = "none";
}

function revealEdu() {
    document.getElementById('education').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('onlineLinks').style.display = "none";
    document.getElementById('writeup').style.display = "none";
    document.getElementById('industry').style.display = "none";
}

function revealOnline() {
    document.getElementById('onlineLinks').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('writeup').style.display = "none";
    document.getElementById('industry').style.display = "none";
}

function revealWriteup() {
    document.getElementById('writeup').style.display = "block";
    document.getElementById('onlineLinks').style.display = "none";
    document.getElementById('blog').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('industry').style.display = "none";
}

function revealIndustry() {
    document.getElementById('writeup').style.display = "none";
    document.getElementById('onlineLinks').style.display = "none";
    document.getElementById('blog').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('industry').style.display = "block";
}