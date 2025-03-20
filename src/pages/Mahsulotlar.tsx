import { Button, Card } from "antd";
import useGlobalStore from "../store/my-store";
import MahsulotAddForm from "../components/MahsulotAddForm";
import { useState } from "react";

function Mahsulotlar() {
  const mahsulotlar = useGlobalStore((state) => state.mahsulotlar);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full mx-auto px-6">
      <MahsulotAddForm isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex gap-4 mb-4">
        <Button type="primary">Umumiy: {mahsulotlar.length}</Button>
        <Button type="primary">
          Faollar: {mahsulotlar.filter((item) => item.active).length}
        </Button>
        <Button type="primary">
          Bloklanganlar: {mahsulotlar.filter((item) => !item.active).length}
        </Button>
      </div>
      {mahsulotlar.map((item) => {
        return (
          <Card hoverable style={{ width: 250 }}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Mahsulotlar;
