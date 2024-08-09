addEventListener("DOMContentLoaded", () => {
  // MEDIA QUERIED FUNCTION
  if (window.screen.width > 991) {
    const menuItems = document.querySelectorAll(".menu-item");
    const underline = document.querySelector(".underline");
    console.log(window.screen.width);

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
