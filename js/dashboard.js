const trigger = document.querySelector(".select-trigger");
const dropdown = document.querySelector(".select-dropdown");

trigger.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".select-item").forEach((item) => {
  item.addEventListener("click", () => {
    trigger.textContent = item.textContent;
    dropdown.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-select")) {
    dropdown.style.display = "none";
  }
});
