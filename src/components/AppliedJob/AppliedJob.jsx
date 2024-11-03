

const AppliedJob = ({job}) => {
  const {id, company_name, job_title}=job;
  return (
    <div className="border-blue-600 border-4 m-4 p-4 max-w-36">
      ID:{id} 
      <br></br>
      Job Title: {job_title}
      <br></br>
      Company : {company_name}
    </div>
  );
};

export default AppliedJob;