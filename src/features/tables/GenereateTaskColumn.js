import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Space } from 'antd';
import { useQueryClient } from 'react-query';
import { useDeleteEventMutation } from '../../services/queries/events';
import toast from 'react-hot-toast';

const GenerateTaskColumn = () => {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteEventMutation();
  const deleteHandler = id => {
    mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['Events']);
          toast.success('Event has been deleted successfully');
        },
        onError: error => {
          console.log(error);
        },
      },
    );
  };
  return [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      responsive: ['sm'],
      width: '30%',
    },
    {
      title: 'LOCATION',
      dataIndex: 'location',
      key: 'location',
      responsive: ['sm'],
    },

    {
      title: 'TIME',
      dataIndex: 'date',
      key: 'date',
      render: date => {
        return moment(date).format('DD MMM YYYY');
      },
      responsive: ['sm'],
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      responsive: ['sm'],
      render: data => {
        return (
          <Space size="middle">
            <NavLink to={`/events/update/${data}`}>Edit</NavLink>
            <a onClick={() => deleteHandler(data)}>Delete</a>
          </Space>
        );
      },
    },
  ];
};
export default GenerateTaskColumn;
