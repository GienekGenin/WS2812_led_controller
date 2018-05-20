let vid = document.getElementById("bgvid");
let pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
  vid.pause();
  vidFade();
});
