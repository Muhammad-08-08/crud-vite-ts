import { Button, Switch, Table } from "antd";
import { useState } from "react";
import BuyurtmalarimAddForm from "../components/BuyurtmalarimAddForm";
import useGlobalStore from "../store/my-store";

function Buyurtmalarim() {
  const buyurtma = useGlobalStore((state) => state.buyurtmalar);
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto px-6">
      <BuyurtmalarimAddForm isOpen={isOpen} setIsOpen={setisOpen} />

      <div className="flex gap-4 mb-4">
        <Button type="primary">Umumiy: {buyurtma.length}</Button>
        <Button type="primary">
          Faollar: {buyurtma.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          Bloklanganlar: {buyurtma.filter((item) => !item.active).length}
        </Button>
      </div>
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Student",
            dataIndex: "student",
          },
          {
            title: "Product",
            dataIndex: "product",
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, group) => {
              return (
                <Switch
                  checked={value}
                  onChange={(change) => {
                    const new_arr = buyurtma.map((item) => {
                      if (item.id === group.id) {
                        return {
                          ...item,
                          active: change,
                        };
                      }
                      return item;
                    });
                    useGlobalStore.setState({
                      buyurtmalar: new_arr,
                    });
                  }}
                />
              );
            },
          },
        ]}
        dataSource={buyurtma}
        rowKey={"id"}
      />
    </div>
  );
}

export default Buyurtmalarim;
