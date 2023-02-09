const secondPageButton = document.getElementById("add-resume");
const firstPageButton = document.getElementById("first");
const leftVectorButton = document.getElementById("eclipse");

if (document.title === "First Page") {
  secondPageButton.addEventListener("click", () => {
    window.location.href = "second.html";
  });
} else if (document.title === "Second Page") {
  leftVectorButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
