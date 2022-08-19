const collapsibleButton = document.querySelector ('.collapsible__button');
const collapsiblContent = document.querySelector('.collapsible__content');

const toHide = collapsiblContent.animate({
    opacity:[1,0],
    }, 3000);

const toShow = collapsiblContent.animate({
    opacity:[0,1],
    }, 3000);   

collapsiblContent.style.display = "block"

collapsibleButton.onclick = function () {
    if (collapsiblContent.style.display === "block") {
        toHide.play();
        setTimeout(function() {
            collapsiblContent.style.display = "none";
        }, 3000);
            
      } else {
            collapsiblContent.style.display = "block";
            toShow.play();
      }
    }