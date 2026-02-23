import { deleteCandidate, changeStatus } from "../features/candidates.js";

export function renderTable(data){

  const tbody = document.getElementById("tableBody");
  const tableSection = document.getElementById("tableSection");
  const emptyState = document.getElementById("emptyState");

  if(data.length === 0){
    tableSection.classList.add("hidden");
    emptyState.classList.remove("hidden");
    tbody.innerHTML = "";
    updateStats(data);
    return;
  }

  tableSection.classList.remove("hidden");
  emptyState.classList.add("hidden");

  tbody.innerHTML = "";

  data.forEach((candidate, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `
    <td class="candidate-cell">
       <img src="assets/avatar.jpg" class="avatar">
       <span>${candidate.name}</span>
    </td>
     

      <td>${candidate.role}</td>

      <td>
        <select class="status-select">
          <option ${candidate.status === "Applied" ? "selected" : ""}>Applied</option>
          <option ${candidate.status === "Interview" ? "selected" : ""}>Interview</option>
          <option ${candidate.status === "Selected" ? "selected" : ""}>Selected</option>
          <option ${candidate.status === "Rejected" ? "selected" : ""}>Rejected</option>
        </select>
      </td>

      <td>
        <button class="delete-btn">Delete</button>
      </td>
    `;

    row.querySelector(".delete-btn")
       .addEventListener("click", () => deleteCandidate(index));

  
    row.querySelector(".status-select")
       .addEventListener("change", (e) => changeStatus(index, e.target.value));

    tbody.appendChild(row);
  });

  updateStats(data);
}

function updateStats(data){
  const total = document.getElementById("total");
  const selected = document.getElementById("selected");

  total.innerText = "Total Candidates: " + data.length;

  const selectedCount = data.filter(c => c.status === "Selected").length;
  selected.innerText = "Selected: " + selectedCount;
}