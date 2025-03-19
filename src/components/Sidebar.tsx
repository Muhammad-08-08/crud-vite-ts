import {
  GroupOutlined,
  HomeOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { BiCategory } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router";

function Sidebar({ collapsed }: any) {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <div className="w-max select-none">
      <Menu
        style={{
          height: "100vh",
          width: 170,
        }}
        selectedKeys={[location.pathname]}
        inlineCollapsed={collapsed}
        mode="inline"
        theme="dark"
        items={[
          {
            key: "/",
            label: "Home",
            icon: <HomeOutlined />,
            onClick: () => {
              navigation("/");
            },
          },
          {
            key: "/student",
            label: "students",
            icon: <PiStudentFill />,
            onClick: () => {
              navigation("/student");
            },
          },
          {
            key: "/groups",
            label: "Groups",
            icon: <GroupOutlined />,
            onClick: () => {
              navigation("/groups");
            },
          },
          {
            key: "/mahsulotlar",
            label: "Mahsulotlar",
            icon: <ProductOutlined />,
            onClick: () => {
              navigation("/mahsulotlar");
            },
          },
          {
            key: "/categories",
            label: "Categories",
            icon: <BiCategory />,
            onClick: () => {
              navigation("/categories");
            },
          },
        ]}
      />
    </div>
  );
}

export default Sidebar;
