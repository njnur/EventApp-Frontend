import * as endpoints from '../apiEndpoints';
import http from '../https';
import { useMutation, useQuery } from 'react-query';
import configUrl from '../../helpers/configUrl';

// Events -> GET
const getEvents = async queries => {
  const url = configUrl({
    endpoint: endpoints.events,
    query: queries,
  });
  const response = await http.get(url);
  return response?.data;
};

export const useGetEventsQuery = ({ queries } = {}) =>
  useQuery(['Events', queries], () => getEvents(queries));

// Event details -> GET
const getEventDetails = async id => {
  const response = await http.get(`${endpoints.events}${id}/`);
  return response?.data;
};

export const useGetEventDetailsQuery = ({ id } = {}) =>
  useQuery(['Events', id], () => getEventDetails(id));

// Events -> Post
export const createEvent = async data => {
  const response = await http.post(endpoints.events, data);
  return response?.data;
};

export const useCreateEventMutation = () => useMutation(createEvent);

// Events -> update
export const updateEvent = async ({ data, id }) => {
  const response = await http.put(`${endpoints.events}${id}/`, data);
  return response?.data;
};

export const useUpdateEventMutation = () => useMutation(updateEvent);

// Events -> delete
export const deleteEvent = async ({ id }) => {
  const response = await http.delete(`${endpoints.events}${id}/`);
  return response?.data;
};

export const useDeleteEventMutation = () => useMutation(deleteEvent);
