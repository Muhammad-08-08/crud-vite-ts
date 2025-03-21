import { Button, Drawer, Form, Input, InputNumber } from "antd";
import { useForm } from "antd/es/form/Form";
import useGlobalStore from "../store/my-store";
import getRandomId from "./RandomId";

function MahsulotAddForm({ editItem, isOpen, setIsOpen }: any) {
  const product = useGlobalStore((state) => state.mahsulotlar);
  const [form] = useForm();

  return (
    <div>
      <div className="flex justify-between px-6 my-6">
        <h2 className="text-xl font-medium">Mahsulot qo'shish</h2>
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
            const new_arr = product.concat({
              ...values,
              id: getRandomId(),
            });
            useGlobalStore.setState({
              mahsulotlar: new_arr,
            });
            form.resetFields();
            setIsOpen(false);
          }}
        >
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
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
export default MahsulotAddForm;
