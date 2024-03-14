const barsButton = document.querySelector(".fa-bars");

// Toggle Dropdown Menu

barsButton.addEventListener("click", () => {
  barsButton.classList.toggle("fa-bars");
  barsButton.classList.toggle("fa-xmark");
});

// All anchor tags within the wrapper

const wrapperLinks = document.querySelectorAll(".wrapper a");

// Click event to each link

wrapperLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Find the checkbox and uncheck it when a link is clicked

    const checkbox = document.getElementById("on");
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  });
});
