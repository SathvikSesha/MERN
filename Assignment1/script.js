document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const select = document.querySelector(".select");
  const selected = document.querySelector(".selected");
  const options = document.querySelectorAll(".menu li");

  select.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML;
      dropdown.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
