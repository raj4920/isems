import React, { useState, useEffect } from "react";
import { Button, Table, Form, Input } from "antd";
import "antd/dist/antd.css";

import SportCoordinatorDashboard from "./SportCoordinatorDashboard";

function ScParticipantDetails() {
  const [dataSource, setDataSource] = useState([]);

  const [editingRow, setEditingRow] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        enro: `EnrollmentNo ${index}`,
        name: `Name ${index}`,
        gamename: `GameName ${index}`,
      });
    }
    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Enrollment Number",
      dataIndex: "enro",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="enro"
              rules={[
                {
                  required: true,
                  message: "Please enter enrollment number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Game Name",
      dataIndex: "gamename",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="gamename"
              rules={[
                {
                  required: true,
                  message: "Please enter address",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Action",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];

  const onFinish = (values) => {
    const updatedDataSourse = [...dataSource];
    updatedDataSourse.splice(editingRow, 1, { ...values, key: editingRow });
    setDataSource(updatedDataSourse);
    setEditingRow(null);
  };
  return (
    <>
      <SportCoordinatorDashboard />
      <div className="mx-5">
        <h2>Individual Game Participant Details</h2>
        <header className="apd-header">
          <Form form={form} onFinish={onFinish}>
            <Table columns={columns} dataSource={dataSource}></Table>
          </Form>
        </header>
      </div>
    </>
  );
}

export default ScParticipantDetails;
