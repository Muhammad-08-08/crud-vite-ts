import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Students from "../pages/Students";
import Groups from "../pages/Groups";
import Mahsulotlar from "../pages/Mahsulotlar";
import Categories from "../pages/Categories";
import Buyurtmalarim from "../pages/Buyurtmalarim";

function Main() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/buyurtmalarim" element={<Buyurtmalarim />} />
      </Routes>
    </div>
  );
}

export default Main;
