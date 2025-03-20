import { Button, Switch, Table } from "antd";
import useGlobalStore from "../store/my-store";
import StudentAddForm from "../components/StudentAddForm";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { StudentsType } from "../components/User.Type";

function Students() {
  const students = useGlobalStore((state) => state.students);
  const [selectedUser, setSelectedUser] = useState<StudentsType | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onRemove(id: any) {
    const remove = students.filter((item) => item.id !== id);
    useGlobalStore.setState({
      students: remove,
    });
  }

  return (
    <div className="w-full mx-auto px-6">
      <StudentAddForm
        editItem={selectedUser}
        isOpen={isOpen}
        setIsOpen={(open: boolean) => {
          if (!open) setSelectedUser(null);
          setIsOpen(open);
        }}
      />

      <div className="flex gap-4 mb-4">
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
            title: "guruh",
            dataIndex: "guruh",
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, student) => {
              return (
                <Switch
                  checked={value}
                  onChange={(change) => {
                    const new_arr = students.map((item) =>
                      item.id === student.id
                        ? { ...item, active: change }
                        : item
                    );
                    useGlobalStore.setState({ students: new_arr });
                  }}
                />
              );
            },
          },
          {
            title: "Boshqa",
            dataIndex: "id",
            render: (id, edit) => {
              return (
                <div className="flex gap-2">
                  <Button onClick={() => onRemove(id)}>
                    <FaTrash size={14} className="text-red-600" />
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedUser(edit);
                      setIsOpen(true);
                    }}
                  >
                    <FiEdit size={14} className="text-green-600" />
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
