import api from './apiConfig';

export const getAllPlaces = async () => {
  const resp = await api.get('/places');
  return resp.data;
}

export const getOnePlace = async (id) => {
  const resp = await api.get(`/places/${id}`);
  return resp.data;
};

export const postPlace = async (placeData) => {
  const resp = await api.post('/places', { place: placeData });
  return resp.data;
};

export const putPlace = async (id, placeData) => {
  const resp = await api.put(`/places/${id}`, { place: placeData });
  return resp.data;
}

export const deletePlace = async (id) => {
  await api.delete(`/places/${id}`);
};