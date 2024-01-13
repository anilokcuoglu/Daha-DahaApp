import {ApiResponse} from '../types/api';
import api from './serverConnections/api';

export const getTagList = async (): Promise<ApiResponse> => {
  const path = '/tags/list';

  const {data} = await api.GET<ApiResponse>(path);

  return data;
};

export const getPromotionsList = async (
  Channel = 'PWA',
): Promise<ApiResponse> => {
  const path = `/promotions/list?=${Channel}`;

  const {data} = await api.GET<ApiResponse>(path);

  return data;
};

export const getPromotionWithId = async (id: number): Promise<ApiResponse> => {
  const path = `/promotions?=${id}`;

  const {data} = await api.GET<ApiResponse>(path);

  return data;
};
