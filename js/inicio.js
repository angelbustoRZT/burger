//EFECTO HEADER
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

//EFECTO SCROLL
let progress = document.getElementById('progress_bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}