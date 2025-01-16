document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector("nav");
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  menuBtn.addEventListener("click", () => {
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
  });

  cancelBtn.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
  });

  window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
          nav.classList.add("sticky");
      } else {
          nav.classList.remove("sticky");
      }
  });

  // Close the menu when a link is clicked
  document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
          menu.classList.remove('active');
          menuBtn.classList.remove('hide');
          cancelBtn.classList.remove('show');
      });
  });
});
