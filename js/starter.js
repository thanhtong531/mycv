var type = new Typed(".line-name", {
  strings: ["Nguyen Thanh Tong", "Frontend Developer"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 50,
  cursorChar: "|",
});

const socialItems = document.querySelectorAll(".social-item");
const informationItems = document.querySelectorAll(".information-item");
const navbarItems = document.querySelectorAll(".navbar-item");

// Tooltip
[...socialItems].forEach((item) =>
  item.addEventListener("mouseenter", handleShowToolTip)
);

function handleShowToolTip(e) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-text";
  tooltip.textContent = e.target.dataset.name;
  document.body.appendChild(tooltip);
  const cords = e.target.getBoundingClientRect();
  const triangle = 10;
  const { left, top, width, height } = cords;
  tooltip.style.left = `${left - width / 2}px`;
  tooltip.style.top = `${top - triangle - tooltip.offsetHeight}px`;
  if (e.target.dataset.name === "Facebook") {
    tooltip.style.backgroundColor = "#3B5999";
  } else if (e.target.dataset.name === "Tiktok") {
    tooltip.style.backgroundColor = "#E1306C";
  } else {
    tooltip.style.backgroundColor = "#e9c46a";
  }
}

[...socialItems].forEach((item) =>
  item.addEventListener("mouseleave", function () {
    const tooltip = document.querySelector(".tooltip-text");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  })
);

// NavbarItem
[...navbarItems].forEach((navbar, idx) => {
  navbar.addEventListener("click", function () {
    // Lấy được index của element ta click vào
    const item = informationItems[idx];
    [...navbarItems].forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    [...informationItems].forEach((info) => info.classList.remove("active"));
    item.classList.add("active");
  });
});

// function handleToggleActive(e) {
//   [...navbarItems].forEach((item) => item.classList.remove("active"));
//   e.target.classList.add("active");
//   console.log(e.target.dataset.idx);
// }
