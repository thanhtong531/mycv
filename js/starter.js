var type = new Typed(".line-name", {
  strings: ["Nguyen Thanh Tong", "Frontend Developer"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 50,
  cursorChar: "|",
});

const socialItems = document.querySelectorAll(".social-item");

[...socialItems].forEach((item) =>
  item.addEventListener("mouseenter", handleShowToolTip)
);

function handleShowToolTip(e) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip-text";
  tooltip.textContent = e.target.dataset.name;
  document.body.appendChild(tooltip);
  const cords = e.target.getBoundingClientRect();
  const triangle = 25;
  const { left, top, width } = cords;
  tooltip.style.left = `${left - width}px`;
  tooltip.style.top = `${top - triangle - e.target.offsetHeight}px`;
  // console.log(cords);
}

[...socialItems].forEach((item) =>
  item.addEventListener("mouseleave", function () {
    const tooltip = document.querySelector(".tooltip-text");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  })
);
