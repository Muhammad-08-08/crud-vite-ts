import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Students from "../pages/Students";
import Groups from "../pages/Groups";

function Main() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </div>
  );
}

export default Main;
