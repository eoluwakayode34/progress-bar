function move() {
  var elem = document.getElementsByClassName("progess"); 
  
  

  var width = 50;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      for (var i=0; i<elem.length; i++) {

        elem[i].style.width =  width + '%'; 
        elem[i].innerHTML =  width * 1  + '%';
    
    }
     
     
    }
  }}

  document.getElementById("button").addEventListener("click", move);


// const progress = document.querySelector(".js-completed-bar");
// const numberPercent = document.querySelector(".completed-bar__truck")

// var percent = 30

// function complete(){
//     percent = 100
//     console.log(percent)
// }
// if (progress || numberPercent) {

//     progress.setAttribute("data-complete", "50")

//     numberPercent.innerHTML = progress.getAttribute("data-complete") + "%";
//   progress.style.width = progress.getAttribute("data-complete") + "%";
//   progress.style.opacity = 1;
// }



// function maxProgress() {
//     progress.setAttribute("data-complete", "100")

//     numberPercent.innerHTML = progress.getAttribute("data-complete") + "%";
//     progress.style.width = progress.getAttribute("data-complete") + "%";
//   progress.style.opacity = 1;
// }


