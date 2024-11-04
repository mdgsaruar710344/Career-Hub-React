import { Link, useRouteError } from "react-router-dom";


const ErrorElement = () => {
 const error= useRouteError();
 console.log(error);
  return (
    <div>
      <h1>Oops! Page not found</h1>
      <br></br>
      <Link to="/" className="b-4 text-2xl border-blue-700"> Go Back Home</Link>
    </div>
  );
};

export default ErrorElement;