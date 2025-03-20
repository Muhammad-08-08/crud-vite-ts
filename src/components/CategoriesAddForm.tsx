import { Button, Drawer, Form, Input, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import useGlobalStore from "../store/my-store";
import getRandomId from "./RandomId";

function CategoriesAddForm({ editItem, isOpen, setIsOpen }: any) {
  const students = useGlobalStore((state) => state.categories);
  const [form] = useForm();

  return (
    <div>
      <div className="flex justify-between px-6 my-6">
        <h2 className="text-xl font-medium">Categories qo'shish</h2>
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
              categories: new_arr,
            });
            form.resetFields();
            setIsOpen(false);
          }}
        >
          <Form.Item
            label="Nomi"
            name="name"
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
export default CategoriesAddForm;
