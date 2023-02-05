const secondPageButton = document.getElementById("add-resume");
const firstPageButton = document.getElementById("first");

if (document.title === "First Page") {
  secondPageButton.addEventListener("click", () => {
    window.location.href = "second.html";
  });
} else if (document.title === "Second Page") {
  firstPageButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
