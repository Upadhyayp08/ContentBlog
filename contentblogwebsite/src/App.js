import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SidebarMenu from "./components/Sidebar";
import LatestBlog from "./components/LatestBlog";
import AddBlog from "./components/AddBlog";
import { AllRoutes } from "./routes/allRoutes";

function App() {
  return (
    <>
      <AllRoutes />
      {/* <SidebarMenu /> */}
      {/* <Home />
      <LatestBlog /> */}
      {/* <AllRoutes /> */}
      {/* <AddBlog /> */}
    </>
  );
}

export default App;
