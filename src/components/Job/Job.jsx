import { Link } from "react-router-dom";


const Job = ({job}) => {
  const {job_title,company_name,location,logo,id}=job
  return (
    <div>
      <div className="border-4 border-blue-600 m-4 p-2 max-w-96">
        <img className="max-w-48" src={logo}/>
        Title: {job_title}
        <br></br>
        Company :{company_name}
        <br></br>
        Location: {location}
        <br></br>
       <Link to={`/job/${id}`}>

       <button className="bg-blue-500 rounded text-2xl">Show Details</button>
       </Link>
    
      </div>
    </div>
  );
};

export default Job;