let dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(function(x) {
    x.addEventListener("click", function() {
        x.classList.toggle("active");
    });
});
let image = document.querySelector("#nav img");
image.addEventListener("click", function() {
    window.location.href = "index.html";
});

let btn = document.querySelector(".popUp");

function openPopup()
{
    btn.classList.add("open-popup");
}
let emailArr=[];
function closePopup()
{
    let data = document.querySelector("#email");
    emailArr.push(data.value);
    localStorage.setItem("Emails", JSON.stringify(emailArr));
    btn.classList.remove("open-popup");

}
