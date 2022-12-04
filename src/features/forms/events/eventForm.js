import React from 'react';
import { Col, DatePicker, Form, Input, Row, Select, Spin } from 'antd';

export const EventForm = () => {
  return (
    <Spin spinning={false}>
      <Form.Item
        name="name"
        label={'NAME'}
        rules={[
          {
            required: true,
            message: 'Name is required',
          },
        ]}
      >
        <Input placeholder={'Type name'} />
      </Form.Item>

      <Row gutter={24}>
        <Col xs={24} md={12}>
          <Form.Item
            name="location"
            label={'LOCATION'}
            rules={[
              {
                required: true,
                message: 'Location is required',
              },
            ]}
          >
            <Select
              placeholder="Select location"
              options={[
                {
                  value: 'India',
                  label: 'India',
                },
                {
                  value: 'Dhaka',
                  label: 'Dhaka',
                },
                {
                  value: 'Australia',
                  label: 'Australia',
                },
                {
                  value: 'Qatar',
                  label: 'Qatar',
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="date"
            label={'DATE'}
            rules={[
              {
                required: true,
                message: 'Date is required',
              },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
    </Spin>
  );
};
