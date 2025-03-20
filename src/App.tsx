import Navbar from "./components/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <div className="flex gap-2">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
