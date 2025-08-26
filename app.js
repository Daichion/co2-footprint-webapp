document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.getElementById("sideMenu");
  const toggleBtn = document.getElementById("toggleMenu");
  const mobileBtn = document.getElementById("mobileMenuBtn");

  // ===== Desktop / Tablet: links/rechts Toggle nur ab md (768px)
  if (sideMenu && toggleBtn) {
    const applyToggle = () => {
      if (window.innerWidth >= 768) { // md
        toggleBtn.style.display = "inline-block";

        const savedPos = localStorage.getItem("menuPosition");
        if (savedPos === "right") {
          sideMenu.classList.remove("order-first");
          sideMenu.classList.add("order-last");
        } else {
          sideMenu.classList.remove("order-last");
          sideMenu.classList.add("order-first");
        }

        toggleBtn.onclick = () => {
          sideMenu.classList.toggle("order-first");
          sideMenu.classList.toggle("order-last");

          if (sideMenu.classList.contains("order-last")) {
            localStorage.setItem("menuPosition", "right");
          } else {
            localStorage.setItem("menuPosition", "left");
          }
        };
      } else {
        // Unter md: Toggle ausblenden, Menü immer oben
        toggleBtn.style.display = "none";
        sideMenu.classList.remove("order-last", "order-first");
      }
    };

    applyToggle();
    window.addEventListener("resize", applyToggle);
  }

  // ===== Mobile Hamburger Menü (immer verfügbar)
  if (sideMenu && mobileBtn) {
    mobileBtn.addEventListener("click", () => {
      sideMenu.classList.toggle("hidden");
    });
  }

  // ===== DataTables nur wenn Tabelle vorhanden
  const co2Table = document.getElementById("co2Table");
  if (co2Table) {
    $(co2Table).DataTable({
      paging: true,
      searching: true,
      info: false,
      responsive: true
    });
  }
});
