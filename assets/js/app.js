document.addEventListener("DOMContentLoaded", () => {
  if (window.screen.width > 991) {
    const menuItems = document.querySelectorAll(".menu-item");
    const underline = document.querySelector(".underline");
    let activeItem = document.querySelector(".menu-item.active-menu-item");

    // Function to update underline position
    function updateUnderline(item) {
      const itemRect = item.getBoundingClientRect();
      const navRect = item.parentElement.getBoundingClientRect();
      underline.style.width = `${itemRect.width}px`;
      underline.style.left = `${itemRect.left - navRect.left}px`;
    }

    // Set the underline to the active item by default
    if (activeItem) {
      updateUnderline(activeItem);
    }

    // Handle mouse enter
    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        updateUnderline(e.target);
      });

      // Handle mouse leave
      item.addEventListener("mouseleave", () => {
        if (activeItem) {
          updateUnderline(activeItem);
        } else {
          underline.style.width = "0";
        }
      });
    });
  }

  //CLOSE NAV ON BODY
  const mybutton = document.getElementById("btn-back-to-top");
  if (mybutton) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 350
      ) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = 1;
      } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = 0;
      }
    };
    mybutton.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  //CLOSE NAV ON BODY
  // CHANGE BACK TO TOP  SVG BACK TO NORMAL
  mybutton.addEventListener("click", () => {
    (innerdiv = mybutton.getElementsByTagName("div")[0]),
      (innersvg = innerdiv.getElementsByTagName("svg")[0]),
      (innersvg.style.transform = "translateY(0)");
    innersvg.style.transform = "";
  });
  // CHANGE BACK TO TOP  SVG BACK TO NORMAL

  const navbar = document.querySelector(".navbar");

  // scroll position / direction
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    // current scroll posi
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // scrolling up or down
    if (scrollTop > lastScrollTop) {
      // down, hide the navbar
      navbar.style.top = "-80px"; // nabbar height
    } else {
      // up, show the navbar
      navbar.style.top = "0";
    }
    // Update position
    lastScrollTop = scrollTop;
  });
});
