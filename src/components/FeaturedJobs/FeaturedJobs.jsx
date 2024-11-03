import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import { useEffect, useState } from "react";


const FeaturedJobs = () => {
const[jobs,setJobs]=useState([])

  useEffect(
    ()=>{
      fetch('jobs.json')
      .then(res=>res.json())
      .then(data=>setJobs(data));
    }
    ,[])


  console.log(jobs.length);
  
    return (
      <div>
        Featured Jobs are here.
        Total Jobs:{jobs.length}
        <div className="grid-cols-2">
        {
         jobs? jobs.map(job=><Job key={job.id} job={job}></Job>):''
        }
  
        </div>
      
      </div>
    );
  }

 
;

export default FeaturedJobs;