addEventListener("DOMContentLoaded", () => {
  // MEDIA QUERIED FUNCTION
  if (window.screen.width > 991) {
    const menuItems = document.querySelectorAll(".menu-item");
    const underline = document.querySelector(".underline");

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        const itemRect = e.target.getBoundingClientRect();
        const navRect = e.target.parentElement.getBoundingClientRect();
        underline.style.width = `${itemRect.width}px`;
        underline.style.left = `${itemRect.left - navRect.left}px`;
      });

      item.addEventListener("mouseleave", () => {
        underline.style.width = "0";
      });
    });
  }
});
