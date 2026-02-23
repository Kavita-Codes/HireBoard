import { getCandidates, saveCandidates } from "../api/storage.js";
import { renderTable } from "../ui/render.js";

export function addCandidate(name,role,status){
  const data = getCandidates();

  data.push({
    id:Date.now(),
    name,
    role,
    status
  });

  saveCandidates(data);
  renderTable(data);
}

export function deleteCandidate(index){
  const data = getCandidates();
  data.splice(index,1);
  saveCandidates(data);
  renderTable(data);
}

export function changeStatus(index,newStatus){
  const data = getCandidates();
  data[index].status=newStatus;
  saveCandidates(data);
  renderTable(data);
}