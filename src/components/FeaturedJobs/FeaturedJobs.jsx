import Job from "../Job/Job";
import { useEffect, useState } from "react";


const FeaturedJobs = () => {
const[jobs,setJobs]=useState([]);
const [displayjobs,setDisplayJobs]=useState(4);
const [showButton,setShowButton]=useState(true)

  useEffect(
    ()=>{
      fetch('jobs.json')
      .then(res=>res.json())
      .then(data=>setJobs(data));
    }
    ,[]);

const handleShowMore=()=>{
  setDisplayJobs(jobs.length);
  console.log(displayjobs);
  setShowButton(false);
}
// console.log(displayjobs)
    // if(jobs.length>0){
    //   const newArray=jobs.slice(0,4);
    //   setDisplayJobs(newArray);
    // }


  console.log(jobs.length);
  
    return (
      <div>
        Featured Jobs are here.
        Total Jobs:{jobs.length}
        <div className="grid-cols-2">
        {
          jobs? jobs.slice(0,displayjobs).map(job=><Job key={job.id} job={job}></Job>):''
        }
        <br></br>
        <button onClick={handleShowMore} className={`border-2 ${showButton?'':'hidden'} border-green-700 bg-red-700 text-white`}>Show More</button>
        </div>
      
      </div>
    );
  }

 
;

export default FeaturedJobs;