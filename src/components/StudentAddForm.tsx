import { Button, Drawer, Form, Input, Radio, Select, Switch } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import useGlobalStore from "../store/my-store";
import getRandomId from "./RandomId";

function StudentAddForm({ editItem, isOpen, setIsOpen }: any) {
  const students = useGlobalStore((state) => state.students);
  const group = useGlobalStore((state) => state.group);
  const [form] = useForm();

  useEffect(() => {
    if (editItem) {
      form.setFieldsValue(editItem);
    } else {
      form.resetFields();
    }
  }, [editItem, form]);

  return (
    <div>
      <div className="flex justify-between px-6 my-6">
        <h2 className="text-xl font-medium">Talaba qo'shish</h2>
        <Button onClick={() => setIsOpen(true)} type="primary">
          Qo'shish
        </Button>
      </div>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            if (editItem) {
              const new_arr = students.map((item) =>
                item.id === editItem.id ? { ...values, id: editItem.id } : item
              );
              useGlobalStore.setState({ students: new_arr });
            } else {
              const new_arr = students.concat({
                ...values,
                id: getRandomId(),
              });
              useGlobalStore.setState({ students: new_arr });
            }
            form.resetFields();
            setIsOpen(false);
          }}
        >
          <Form.Item label="Ism" name="firstName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Familya"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Yosh" name="age" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Jinsi" name="gender" rules={[{ required: true }]}>
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              options={[
                { value: "male", label: "male" },
                { value: "female", label: "female" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Faolligi" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Guruh" name="guruh">
            <Select
              options={group.map((g) => ({
                value: g.id,
                label: g.group,
              }))}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editItem ? "Yangilash" : "Qo'shish"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
export default StudentAddForm;
