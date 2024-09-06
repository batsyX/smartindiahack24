
import Navbar from "./components/navBar/Navbar"
import Home from "./pages/Home"
import Sidebar from "./pages/Dashboard";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ComplaintForm from "./pages/ComplaintForm";
import ModifyOrder from "./pages/ModifyOrder";
import Feedback from "./pages/Feedback";
import TrackOrder from "./pages/TrackOrder";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar/>
        <Home/>
      </div>
      
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "dashboard",
    element: <div><Sidebar/></div>,
  },
  {
    path: "registerComplaints",
    element: <div>
      <Navbar/>
    <ComplaintForm/></div>,
  },
  {
    path: "modifyOrders",
    element: <div>
      <Navbar/>
    <ModifyOrder/>
    </div>
  },
  {
    path: "feedback",
    element: <div>
      <Navbar/>
      <Feedback/>
    </div>
  },
  {
    path: "trackPost",
    element: <div>
      <Navbar/>
      <TrackOrder/>
    </div>
  }

]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
