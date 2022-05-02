let loginBtn = document.getElementById("loginBtn");
let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("modal");

loginBtn.addEventListener("click", removeClass);
function removeClass() {
    modal.classList.remove("opacity-0", "pointer-events-none");
}

closeBtn.addEventListener("click", addClass);
function addClass() {
    modal.classList.add("opacity-0", "pointer-events-none");
}
