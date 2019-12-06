let previous = document.querySelector(".previous")

let next = document.querySelector(".next")

let slides = Array.from(document.querySelectorAll(".slide-part"))
let currentSlide = 0;

function Hide(array) {
  for (let value of array) {
    value.style.display = "none"
  }
}

Hide(slides)
slides[0].style.display = "block"
next.addEventListener("click", () => {
  Hide(slides)
  if (currentSlide == 2) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  slides[currentSlide].style.display = "block"
})
previous.addEventListener("click", () => {
  Hide(slides)
  if (currentSlide == 0) {
    currentSlide = 2
  } else {
    currentSlide -= 1
  }
  slides[currentSlide].style.display = "block"
})


let workers = Array.from(document.querySelectorAll(".image-span"))
let currentWorker = Array.from(document.querySelectorAll(".currentItem-Part"))

for (let i = 0; i < workers.length; i++) {
  workers[i].onmouseover = function (event) {
    let curter = event.target;
    if (curter != -1) {
      let index = workers.indexOf(curter)

      if (currentWorker[index] == undefined) {
        return false
      } else {
        currentWorker[index].style.background = "#F7600E";
      }
    }
  }


  for (let i = 0; i < workers.length; i++) {
    workers[i].onmouseleave = function (event) {
      let curter = event.target;
      if (curter != -1) {
        let index = workers.indexOf(curter);
        if (currentWorker[index] == undefined) {
          return false
        } else {
          currentWorker[index].style.background = "#9DA1A5";
        }
      }
    }
  }
}


