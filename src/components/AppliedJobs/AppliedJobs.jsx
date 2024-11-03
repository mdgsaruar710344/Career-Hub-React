import { useEffect, useState } from "react";
import { getStoredApplication } from "../../Utilities/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
 
  const [appliedjobs,setAppliedJobs]=useState([]);


  useEffect(()=>{

  
      fetch('jobs.json')
      .then(res=>res.json())
      .then(jobs=>{
        if(jobs.length>0){
          let matchingJobarray=[];
          const jobsfromLS= getStoredApplication();
          for(const id of jobsfromLS){
          const matchedJob=  jobs.find(job=>job.id==id);
         matchingJobarray.push(matchedJob);
           
          }
          setAppliedJobs(matchingJobarray);
          console.log(matchingJobarray);
        }

      })
   
    
},[]);


    

  return (
    <div>
      Applied are here:
      {appliedjobs? appliedjobs.map(job=><AppliedJob key={job.id} job={job}></AppliedJob>):'No jobs'}
    </div>
  );
};

export default AppliedJobs;