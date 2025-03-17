import { Button, Switch, Table } from "antd";
import { useState } from "react";
import StudentAddForm from "../components/StudentAddForm";
import useGlobalStore from "../store/my-store";

function Groups() {
  const groups = useGlobalStore((state) => state.group);
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto px-6">
      <StudentAddForm isOpen={isOpen} setIsOpen={setisOpen} />

      <div className="flex gap-4">
        <Button type="primary">Umumiy: {groups.length}</Button>
        <Button type="primary">
          Faollar: {groups.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          Bloklanganlar: {groups.filter((item) => !item.active).length}
        </Button>
      </div>
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Nomi",
            dataIndex: "group",
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, group) => {
              return (
                <Switch
                  checked={value}
                  onChange={(change) => {
                    const new_arr = groups.map((item) => {
                      if (item.id === group.id) {
                        return {
                          ...item,
                          active: change,
                        };
                      }
                      return item;
                    });
                    useGlobalStore.setState({
                      group: new_arr,
                    });
                  }}
                />
              );
            },
          },
        ]}
        dataSource={groups}
        rowKey={"id"}
      />
    </div>
  );
}

export default Groups;
