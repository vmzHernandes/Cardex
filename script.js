var acordeao = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acordeao.length; i++) {
  acordeao[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var container = this.nextElementSibling;
    if (container.style.display === "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
  });
} 