const icon = document.getElementById('burgicon');
const div = document.getElementById("NavDiv");

icon.addEventListener("click", function () {
    div.classList.toggle("show");
});