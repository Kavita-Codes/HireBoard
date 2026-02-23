import { addCandidate } from "./features/candidates.js";
import { getCandidates } from "./api/storage.js";
import { renderTable } from "./ui/render.js";

document.getElementById("addBtn").addEventListener("click",()=>{
  const name=document.getElementById("name").value;
  const role=document.getElementById("role").value;
  const status=document.getElementById("status").value;

  if(!name || !role) return alert("Fill all fields");

  addCandidate(name,role,status);
});

document.getElementById("search").addEventListener("input",(e)=>{
  const data=getCandidates();
  const filtered=data.filter(c=>
    c.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderTable(filtered);
});

renderTable(getCandidates());