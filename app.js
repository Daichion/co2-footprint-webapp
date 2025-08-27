document.addEventListener("DOMContentLoaded", function () {
  // --- DataTable nur wenn vorhanden ---
  const co2Table = document.getElementById("co2Table");
  if (co2Table) {
    $('#co2Table').DataTable();
  }

  // --- Sidebar Elemente ---
  const toggleMenuBtn = document.getElementById("toggleMenu");
  const sideMenu = document.getElementById("sideMenu");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const overlay = document.getElementById("mobileOverlay");

  // Menü links/rechts nur Desktop & LocalStorage
  if (sideMenu && localStorage.getItem("menuPosition") === "right") {
    sideMenu.classList.remove("md:order-first");
    sideMenu.classList.add("md:order-last");
  }

  toggleMenuBtn?.addEventListener("click", () => {
    sideMenu.classList.toggle("md:order-first");
    sideMenu.classList.toggle("md:order-last");

    if (sideMenu.classList.contains("md:order-last")) {
      localStorage.setItem("menuPosition", "right");
    } else {
      localStorage.setItem("menuPosition", "left");
    }
  });

  // --- Mobile Hamburger Menü ---
  mobileMenuBtn?.addEventListener("click", () => {
    sideMenu.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  });

  overlay?.addEventListener("click", () => {
    sideMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sideLinks = document.querySelectorAll("#sideMenu a");
  const currentPath = window.location.pathname.split("/").pop();

  sideLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      // Aktive Seite: hellgrüner Hintergrund, weiße Schrift, zentriert
      link.classList.add("font-bold", "bg-green-300", "text-black", "flex", "items-center", "justify-center", "rounded-none");
      link.classList.remove("hover:underline");
    } else {
      // Alle anderen: normal
      link.classList.remove("font-bold", "bg-green-300", "text-black", "flex", "items-center", "justify-center");
      link.classList.add("hover:underline");
    }
  });
});
