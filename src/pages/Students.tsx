import { Button, Switch, Table } from "antd";
import useGlobalStore from "../store/my-store";
import AddForm from "../components/AddForm";
import { FaTrash } from "react-icons/fa";

function Students() {
  const students = useGlobalStore((state) => state.students);

  function onRemove(id: any) {
    const remove = students.filter((item) => item.id !== id);
    useGlobalStore.setState({
      students: remove,
    });
  }

  return (
    <div className="container mx-auto px-6">
      <AddForm />

      <div className="flex gap-4">
        <Button type="primary">Umumiy: {students.length}</Button>
        <Button type="primary">
          Faollar: {students.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          Bloklanganlar: {students.filter((item) => !item.active).length}
        </Button>
      </div>
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Ism",
            dataIndex: "firstName",
          },
          {
            title: "Familya",
            dataIndex: "lastName",
          },
          {
            title: "Yosh",
            dataIndex: "age",
          },
          {
            title: "Jinsi",
            dataIndex: "gender",
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, student) => {
              return (
                <Switch
                  checked={value}
                  onChange={(change) => {
                    const new_arr = students.map((item) => {
                      if (item.id === student.id) {
                        return {
                          ...item,
                          active: change,
                        };
                      }
                      return item;
                    });
                    useGlobalStore.setState({
                      students: new_arr,
                    });
                  }}
                />
              );
            },
          },
          {
            title: "Boshqa",
            dataIndex: "id",
            render: (id) => {
              return (
                <div>
                  <Button onClick={() => onRemove(id)}>
                    <FaTrash size={14} className="text-red-600" />
                  </Button>
                </div>
              );
            },
          },
        ]}
        dataSource={students}
        rowKey={"id"}
      />
    </div>
  );
}

export default Students;
