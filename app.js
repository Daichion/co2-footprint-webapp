

// DataTables Initialisierung nur auf index.html
if (document.getElementById("emissionsTable")) {
  $(document).ready(function () {
    $('#emissionsTable').DataTable({
      data: [
        ["Deutschland", "VW", "2021", "1200"],
        ["Deutschland", "VW", "2022", "1150"],
        ["USA", "Apple", "2021", "900"],
        ["USA", "Apple", "2022", "850"],
        ["China", "Alibaba", "2021", "1500"],
        ["China", "Alibaba", "2022", "1600"]
      ],
      columns: [
        { title: "Land" },
        { title: "Unternehmen" },
        { title: "Jahr" },
        { title: "Emissionen (in Mt)" }
      ]
    });
  });
}

// DataTable aktivieren (nur wenn vorhanden)
$(document).ready(function () {
  if ($('#co2Table').length) {
    $('#co2Table').DataTable();
  }
});

// Menü links/rechts umschalten
const toggleButtons = document.querySelectorAll("#toggleMenu");
toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("order-first");
    sideMenu.classList.toggle("order-last");
  });
});
