import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import ErrorElement from "./components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:
    [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path:"/job/:jobId",
        loader:()=>fetch('jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

