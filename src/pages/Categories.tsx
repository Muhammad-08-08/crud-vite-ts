import { Button, Switch, Table } from "antd";
import { useState } from "react";
import CategoriesAddForm from "../components/CategoriesAddForm";
import useGlobalStore from "../store/my-store";

function Categories() {
  const category = useGlobalStore((state) => state.categories);
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto px-6">
      <CategoriesAddForm isOpen={isOpen} setIsOpen={setisOpen} />

      <div className="flex gap-4 mb-4">
        <Button type="primary">Umumiy: {category.length}</Button>
        <Button type="primary">
          Faollar: {category.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          Bloklanganlar: {category.filter((item) => !item.active).length}
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
            dataIndex: "name",
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, group) => {
              return (
                <Switch
                  checked={value}
                  onChange={(change) => {
                    const new_arr = category.map((item) => {
                      if (item.id === group.id) {
                        return {
                          ...item,
                          active: change,
                        };
                      }
                      return item;
                    });
                    useGlobalStore.setState({
                      categories: new_arr,
                    });
                  }}
                />
              );
            },
          },
        ]}
        dataSource={category}
        rowKey={"id"}
      />
    </div>
  );
}

export default Categories;
