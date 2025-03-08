document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const select = document.querySelector(".select");
  const selected = document.querySelector(".selected");
  const options = document.querySelectorAll(".menu li");
  select.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      const icon = option.querySelector("i").outerHTML;
      const link = option.querySelector("a");
      if (link) {
        const linkText = link.innerText;
        const href = link.href;
        selected.innerHTML = `${icon} <a href="${href}" target="_blank">${linkText}</a>`;
      }
      dropdown.classList.remove("active");
    });
  });
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
