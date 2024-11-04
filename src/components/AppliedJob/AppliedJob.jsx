

const AppliedJob = ({job}) => {
  const {id, company_name, job_title,remote_or_onsite,logo}=job;
  return (
    <div className="border-blue-600 border-4 m-4 p-4 max-w-36">
      ID:{id} 
      <br></br>
      <img src={logo}/>
      <br></br>
      Job Title: {job_title}
      <br></br>
      Company : {company_name}
      <br></br>
      Job Type:{remote_or_onsite}
    </div>
  );
};

export default AppliedJob;