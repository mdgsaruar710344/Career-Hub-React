import { useLoaderData, useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../Utilities/localStorage";
import { ToastContainer,toast } from "react-toastify";


const JobDetails = () => {
  const jobs=useLoaderData();
  const {jobId}=useParams();
  const idInt=parseInt(jobId)
  const notify = () => toast("Wow so easy !");

 // console.log(jobId);
  const matchedJob=jobs.find(job=>job.id==idInt);
//console.log(matchedJob); 
  const {id,job_description,company_name,job_title,job_responsibility}=matchedJob;
  console.log(id);
 const  handleApplyJobs =(id)=>{
    saveToLocalStorage(id);
    console.log(id);
 }
 


  return (
    <div>
      This is job details page:
      <div>
        ID: {id}
        <br></br>
        Title:{job_title}
        <br></br>
          Company name: {company_name}
          <br></br>
        Job Description:{job_description}
        <br></br>
        <button onClick={()=>{handleApplyJobs(id);notify();}} className="bg-blue-700" >Apply Now</button>

      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;