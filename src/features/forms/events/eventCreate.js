import { Button, Col, Form, Row, Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCreateEventMutation } from '../../../services/queries/events';
import { EventForm } from './eventForm';

export const EventCreateForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreateEventMutation();

  const onFinish = value => {
    value.date = value.date?.format('YYYY-MM-DD');
    mutate(value, {
      onSuccess: () => {
        form.resetFields();
        toast.success('Event has been created successfully');
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      size="large"
      initialValues={{
        is_active: true,
      }}
    >
      <Spin size="large" spinning={isLoading}>
        <Row>
          <Col xs={24} md={24} lg={24} xxl={24}>
            <EventForm />
            <Row justify="end">
              <Col style={{ display: 'flex' }}>
                <Button
                  size="large"
                  type="seconday"
                  className="mt-3 mr-3"
                  htmlType="button"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="mt-3"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </Form>
  );
};
