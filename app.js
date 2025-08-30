document.addEventListener("DOMContentLoaded", function () {
  // --- DataTable nur wenn vorhanden ---
  const co2Table = document.getElementById("co2Table");
  if (co2Table) {
    const table = $('#co2Table').DataTable({
      "pageLength": 5,           // Standardmäßig 5 Einträge pro Seite
      "lengthMenu": [5, 10, 20], // Eigene Auswahlmöglichkeiten
      "language": {
        "lengthMenu": "Zeige _MENU_ Einträge pro Seite",
        "zeroRecords": "Keine Einträge gefunden",
        "info": "Zeige Seite _PAGE_ von _PAGES_",
        "infoEmpty": "Keine Daten verfügbar",
        "infoFiltered": "(gefiltert von _MAX_ Einträgen)",
        "search": "Globale Suche:",
        "paginate": {
          "first": "Erste",
          "last": "Letzte",
          "next": "Nächste",
          "previous": "Zurück"
        }
      }
    });

    // --- Spalten-Suche ---
    $('#searchLand').on('keyup', function () {
      table.column(0).search(this.value).draw();
    });
    $('#searchUnternehmen').on('keyup', function () {
      table.column(1).search(this.value).draw();
    });
    $('#searchJahr').on('keyup', function () {
      table.column(2).search(this.value).draw();
    });
    $('#searchEmission').on('keyup', function () {
      table.column(3).search(this.value).draw();
    });
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

// --- Aktive Sidebar Link ---
document.addEventListener("DOMContentLoaded", function () {
  const sideLinks = document.querySelectorAll("#sideMenu a");
  const currentPath = window.location.pathname.split("/").pop();

  sideLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("font-bold", "bg-green-300", "text-black", "flex", "items-center", "justify-center", "rounded-none");
      link.classList.remove("hover:underline");
    } else {
      link.classList.remove("font-bold", "bg-green-300", "text-black", "flex", "items-center", "justify-center");
      link.classList.add("hover:underline");
    }
  });
});
