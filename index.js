const classToggle = () => {
  const navs = document.querySelectorAll(".nav_list");
  navs.forEach((nav) => {
    nav.classList.toggle("navbar_toggleShow");
  });
};

document
  .querySelector(".nav_link-toggle")
  .addEventListener("click", classToggle);
