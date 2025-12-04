document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.querySelector(".sidebar");
  console.log(sidebar);

  const toggleBtn = document.getElementById("sidebarToggle");
  const links = document.querySelectorAll(".sidebar__link", ".sidebar__logout");

  const collapsed = localStorage.getItem("sidebar-collapsed") === "true";
  if (collapsed) sidebar.classList.add("collapsed");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    localStorage.setItem(
      "sidebar-collapsed",
      sidebar.classList.contains("collapsed")
    );
  });

  const currentPage = document.body.dataset.page;
  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
});
