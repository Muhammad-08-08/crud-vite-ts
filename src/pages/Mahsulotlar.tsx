import { Card } from "antd";
import useGlobalStore from "../store/my-store";
import MahsulotAddForm from "../components/MahsulotAddForm";
import { useState } from "react";

function Mahsulotlar() {
  const mahsulotlar = useGlobalStore((state) => state.mahsulotlar);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <MahsulotAddForm isOpen={isOpen} setIsOpen={setIsOpen} />
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
