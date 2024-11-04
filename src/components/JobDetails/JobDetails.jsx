import { useLoaderData, useParams } from "react-router-dom";
import { getStoredApplication, saveToLocalStorage } from "../../Utilities/localStorage";
import { ToastContainer,toast } from "react-toastify";



const JobDetails = () => {
  const jobs=useLoaderData();
  const {jobId}=useParams();
  const idInt=parseInt(jobId)

  const notify = () => toast("Applied Successfully!");
  const notify1 = () => toast("Already Applied");

  console.log(jobs);
  
  const  handleApplyJobs =(id)=>{
    const savedIDs= getStoredApplication();

    if(savedIDs.includes(id)){
     notify1();
    }
    else{
     saveToLocalStorage(id);
     notify();
    }
  
}

const matchedJob= jobs.find(job=>job.id==idInt);
//console.log(matchedJob); 
  const {id,job_description,company_name,job_title}=matchedJob;
 // console.log(id);

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
        <button onClick={()=>{handleApplyJobs(id)}} className="bg-blue-700" >Apply Now</button>

      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;