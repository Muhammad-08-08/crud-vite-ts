import { Button, Switch, Table } from "antd";
import { useState } from "react";
import BuyurtmalarimAddForm from "../components/BuyurtmalarimAddForm";
import useGlobalStore from "../store/my-store";

function Buyurtmalarim() {
  const buyurtma = useGlobalStore((state) => state.buyurtmalar);
  const students = useGlobalStore((state) => state.students);
  const mahsulotlar = useGlobalStore((state) => state.mahsulotlar);

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
            render: (id) => {
              const student = students.find((item) => item.id === id);
              return student ? student.firstName : `${id}`;
            },
          },
          {
            title: "Product",
            dataIndex: "product",
            render: (id) => {
              const product = mahsulotlar.find((item) => item.id === id);
              return product ? product.name : `${id}`;
            },
          },
          {
            title: "Miqdori",
            dataIndex: "quantity",
          },
          {
            title: "Jami narx",
            dataIndex: "price",
            render: (_, record) => {
              const product = mahsulotlar.find(
                (item) => String(item.id) === String(record.product)
              );

              const pricePerItem = product?.price ?? 0;

              const quantity = record.quantity ?? 1;

              return pricePerItem * quantity;
            },
          },
          {
            title: "Active",
            dataIndex: "active",
            render: (value, group) => (
              <Switch
                checked={value}
                onChange={(change) => {
                  const new_arr = buyurtma.map((item) =>
                    item.id === group.id ? { ...item, active: change } : item
                  );
                  useGlobalStore.setState({
                    buyurtmalar: new_arr,
                  });
                }}
              />
            ),
          },
        ]}
        dataSource={buyurtma}
        rowKey={"id"}
      />
    </div>
  );
}

export default Buyurtmalarim;
