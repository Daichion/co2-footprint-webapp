const data = [
  { land: "Deutschland", firma: "BASF", emission: 112 },
  { land: "USA", firma: "ExxonMobil", emission: 305 },
  { land: "China", firma: "Sinopec", emission: 470 },
  { land: "Frankreich", firma: "TotalEnergies", emission: 98 }
];

const tableBody = document.querySelector("#co2-table tbody");
const filterInput = document.querySelector("#filter");

function renderTable(filtered = data) {
  tableBody.innerHTML = "";
  filtered.forEach(e => {
    const row = `<tr>
      <td>${sanitize(e.land)}</td>
      <td>${sanitize(e.firma)}</td>
      <td>${sanitize(e.emission.toString())}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function sanitize(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sortTable(colIndex) {
  data.sort((a, b) => {
    const valA = Object.values(a)[colIndex];
    const valB = Object.values(b)[colIndex];
    return valA > valB ? 1 : -1;
  });
  renderTable();
}

filterInput.addEventListener("input", () => {
  const keyword = filterInput.value.toLowerCase();
  const filtered = data.filter(
    e => e.land.toLowerCase().includes(keyword) || e.firma.toLowerCase().includes(keyword)
  );
  renderTable(filtered);
});

renderTable();
