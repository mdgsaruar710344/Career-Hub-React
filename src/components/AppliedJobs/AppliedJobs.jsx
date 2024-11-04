import { useEffect, useState } from "react";
import { getStoredApplication } from "../../Utilities/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

  const [appliedjobs, setAppliedJobs] = useState([]);


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




  return (
    <div>
      Applied are here:
      <div>
        <details className="dropdown">
          <summary className="btn m-1">Filter</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>All</a></li>
            <li><a>Remote</a></li>
            <li><a>Onsite</a></li>
          </ul>
        </details>
      </div>
      {appliedjobs ? appliedjobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) : 'No jobs'}
    </div>
  );
};

export default AppliedJobs;