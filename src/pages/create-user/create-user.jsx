import React from "react";
import { Form, Input, InputNumber, Button, Card, message } from "antd";
import { useUserPost } from "../../hooks/useUserPost";

export const CreateUser = () => {
  const [form] = Form.useForm();
  const { mutate } = useUserPost();

  const onFinish = (values) => {
    console.log(values);
    
    mutate(values, {
      onSuccess: () => {
        message.success("User created successfully!");
        form.resetFields();
      },
      onError: (error) => {
        message.error(`Failed to create user: ${error.message}`);
      },
    });

    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
        title="Create User"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter the user's name",
              },
            ]}
          >
            <Input placeholder="Enter user name" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please enter the user's age",
              },
              {
                type: "number",
                min: 0,
                max: 150,
                message: "Age must be between 0 and 150",
              },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Enter user age"
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter the user's address",
              },
            ]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Enter user address"
              showCount
              maxLength={100}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                height: "40px",
                fontSize: "16px",
                borderRadius: "6px",
              }}
            >
              Create User
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
