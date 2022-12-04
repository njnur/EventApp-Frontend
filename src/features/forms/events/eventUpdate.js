import { Button, Col, Form, Row, Skeleton, Spin } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  useGetEventDetailsQuery,
  useUpdateEventMutation,
} from '../../../services/queries/events';
import { EventForm } from './eventForm';
import moment from 'moment';

export const EventUpdateForm = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading: eventFetchLoding } = useGetEventDetailsQuery({ id });
  const { mutate, isLoading } = useUpdateEventMutation();

  const onFinish = value => {
    value.date = value.date?.format('YYYY-MM-DD');
    mutate(
      { data: value, id },
      {
        onSuccess: () => {
          toast.success('Event has been updated successfully');
        },
        onError: error => {
          console.log(error);
        },
      },
    );
  };

  return (
    <>
      {eventFetchLoding ? (
        <Skeleton active></Skeleton>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
          initialValues={{ ...data, date: moment(data?.date) }}
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
                      Update
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Spin>
        </Form>
      )}
    </>
  );
};
