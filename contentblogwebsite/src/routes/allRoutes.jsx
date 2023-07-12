import { Routes, Route } from "react-router-dom";
import AddBlog from "../components/AddBlog";
// import { Home } from "../pages/home";
import Home from "../components/Home";
import LatestBlog from "../components/LatestBlog";
import WatchBlog from "../components/WatchBlog";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/latestblog"} element={<LatestBlog />} />
      <Route path={"/addblog"} element={<AddBlog />} />
      <Route path={"/watchblog/:id"} element={<WatchBlog />} />
    </Routes>
  );
};
