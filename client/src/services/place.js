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