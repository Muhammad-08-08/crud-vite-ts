import { Button, Drawer, Form, InputNumber, Select, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import useGlobalStore from "../store/my-store";
import getRandomId from "./RandomId";

function BuyurtmalarimAddForm({ editItem, isOpen, setIsOpen }: any) {
  const buyurtmalar = useGlobalStore((state) => state.buyurtmalar);
  const students = useGlobalStore((state) => state.students);
  const products = useGlobalStore((state) => state.mahsulotlar);

  const [form] = useForm();

  return (
    <div>
      <div className="flex justify-between px-6 my-6">
        <h2 className="text-xl font-medium">Buyurtma qo'shish</h2>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          type="primary"
        >
          Qo'shish
        </Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Form
          initialValues={editItem}
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const selectedProduct = products.find(
              (item) => item.id === values.product
            );

            const totalPrice = selectedProduct
              ? values.quantity * selectedProduct.price
              : 0;

            const newOrder = {
              ...values,
              id: getRandomId(),
              price: totalPrice, // Jami narx
            };

            useGlobalStore.setState({
              buyurtmalar: [...buyurtmalar, newOrder],
            });

            form.resetFields();
            setIsOpen(false);
          }}
        >
          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true }]}
          >
            <Select
              options={products.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Student"
            name="student"
            rules={[{ required: true }]}
          >
            <Select
              options={students.map((item) => ({
                value: item.id,
                label: item.firstName,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Nechta olmoqchisiz?"
            name="quantity"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="Faolligi" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default BuyurtmalarimAddForm;
