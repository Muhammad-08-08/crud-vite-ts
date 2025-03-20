import { Button, Drawer, Form, Input, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import useGlobalStore from "../store/my-store";
import getRandomId from "./RandomId";

function BuyurtmalarimAddForm({ editItem, isOpen, setIsOpen }: any) {
  const students = useGlobalStore((state) => state.buyurtmalar);
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
            const new_arr = students.concat({
              ...values,
              id: getRandomId(),
            });
            useGlobalStore.setState({
              buyurtmalar: new_arr,
            });
            form.resetFields();
            setIsOpen(false);
          }}
        >
          <Form.Item
            label="Product"
            name="product"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Student"
            name="student"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Faolligi" name="active">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button color="blue" variant="dashed" htmlType="submit">
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
export default BuyurtmalarimAddForm;
