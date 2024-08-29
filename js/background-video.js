const menuToggle = document.getElementById('toggle');
const showcase = document.querySelector('.sec1');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    });

function btn(){
var video = document.getElementById("vid2"); 
var btn = document.getElementById("btn");


    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}