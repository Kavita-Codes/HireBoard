export function getCandidates(){
  return JSON.parse(localStorage.getItem("candidates")) || [];
}

export function saveCandidates(data){
  localStorage.setItem("candidates", JSON.stringify(data));
}