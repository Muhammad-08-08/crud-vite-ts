import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FcRating } from "react-icons/fc";

function Navbar({ toggleCollapsed, collapsed }: any) {
  return (
    <div className="container mx-auto px-4 bg-slate-900 text-white py-6 flex justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-mono">Logo</h2>
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img
            className="w-10"
            src="https://static-00.iconduck.com/assets.00/profile-user-icon-2048x2048-m41rxkoe.png"
            alt="user icon"
          />
        </div>
        <div>
          <h2 className="text-lg font-mono">John Doe</h2>
          <FcRating size={16} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
