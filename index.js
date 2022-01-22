const progress = document.querySelector(".js-completed-bar");
const numberPercent = document.querySelector(".completed-bar__truck")

var percent = 30

function complete(){
    percent = 100
    console.log(percent)
}
if (progress || numberPercent) {

    progress.setAttribute("data-complete", "50")

    numberPercent.innerHTML = progress.getAttribute("data-complete") + "%";
  progress.style.width = progress.getAttribute("data-complete") + "%";
  progress.style.opacity = 1;
}


document.getElementById("button").addEventListener("click", maxProgress);

function maxProgress() {
    progress.setAttribute("data-complete", "100")

    numberPercent.innerHTML = progress.getAttribute("data-complete") + "%";
    progress.style.width = progress.getAttribute("data-complete") + "%";
  progress.style.opacity = 1;
}