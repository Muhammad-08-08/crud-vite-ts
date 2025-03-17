import { GroupOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { PiStudentFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router";

function Sidebar({ collapsed }: any) {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <div className="w-max">
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
        ]}
      />
    </div>
  );
}

export default Sidebar;
