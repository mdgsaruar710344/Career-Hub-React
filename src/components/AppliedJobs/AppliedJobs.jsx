import { useEffect, useState } from "react";
import { getStoredApplication } from "../../Utilities/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

  const [appliedjobs, setAppliedJobs] = useState([]);
 const [remote,setRemote]= useState([]);
 const [onsite,setOnsite]= useState([]);
 const[jobtype,setJobType]=useState('all')



  useEffect(() => {


    fetch('jobs.json')
      .then(res => res.json())
      .then(jobs => {
        if (jobs.length > 0) {
          let matchingJobarray = [];
          const jobsfromLS = getStoredApplication();
          for (const id of jobsfromLS) {
            const matchedJob = jobs.find(job => job.id == id);
            matchingJobarray.push(matchedJob);

          }
          setAppliedJobs(matchingJobarray);
          console.log(matchingJobarray);
        }

      })


  }, []);


const   handleRemoteJobs=()=>{
  const remoteJobs= appliedjobs.filter(job=>job.remote_or_onsite==="Remote");
  setRemote(remoteJobs);
  setJobType('remote');
  console.log('clicked remote')
}

const   handleAllJobs=()=>{
  setJobType('all');
  console.log('clicked all')
}

const   handleOnSiteJobs=()=>{
  const onsiteJobs= appliedjobs.filter(job=>job.remote_or_onsite==="Onsite")
  setOnsite(onsiteJobs);
  setJobType('onsite');
  console.log('clicked onsite')
}

console.log(jobtype);


// const allJobs= appliedjobs.filter(job=>job.remote_or_onsite==="Onsite")


  return (
    <div>
      Applied are here:
      <div>
        <details className="dropdown">
          <summary className="btn m-1">Filter</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><button onClick={handleAllJobs}>All</button></li>
            <li><button onClick={handleRemoteJobs}>Remote</button></li>
            <li><button onClick={handleOnSiteJobs}>Onsite</button></li>
          </ul>
        </details>
      </div>
      {jobtype==='remote' ? remote.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) :''}
      {jobtype==='onsite' ? onsite.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) :''}
      {jobtype==='all' ? appliedjobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) :''}
    </div>
  );
};

export default AppliedJobs;