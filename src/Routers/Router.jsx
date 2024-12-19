import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LatestJobs from "../pages/LatestJobs";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob";
import MyApplications from "../pages/MyApplications";
import DoubleForm from "../components/DoubleForm";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";
import ReviewApplications from "../pages/ReviewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div className="text-center">NO WHERE TO GO</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/latest-jobs",
        element: <LatestJobs></LatestJobs>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-job",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/my-jobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: "/review-applications/:job_id",
        element: <PrivateRoute><ReviewApplications></ReviewApplications></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
    ],
  },
]);

export default Router;
