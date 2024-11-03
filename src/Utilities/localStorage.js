const getStoredApplication=()=>{
  const savedJobs=JSON.parse(localStorage.getItem('applied jobs'))||[];
  return savedJobs;
};

const saveToLocalStorage=(id)=>{
  const savedJobsfromLS= getStoredApplication();
  savedJobsfromLS.push(id);
  localStorage.setItem('applied jobs',JSON.stringify(savedJobsfromLS))
  console.log(savedJobsfromLS);
};


export { getStoredApplication, saveToLocalStorage};