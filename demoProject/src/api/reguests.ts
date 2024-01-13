import {PromotionList, PromotionWithId, TagList} from '../types/api';
import api from './serverConnections/api';

export const getTagList = async (): Promise<TagList[]> => {
  const path = '/tags/list';

  const {data} = await api.GET<TagList[]>(path);

  return data;
};

export const getPromotionsList = async (
  PWA = 'PWA',
): Promise<PromotionList[]> => {
  const path = `/promotions/list?Channel=${PWA}`;

  const {data} = await api.GET<PromotionList[]>(path);

  return data;
};

export const getPromotionWithId = async (
  id: number,
): Promise<PromotionWithId> => {
  const path = `/promotions?Id=${id}`;

  const {data} = await api.GET<PromotionWithId>(path);

  return data;
};
