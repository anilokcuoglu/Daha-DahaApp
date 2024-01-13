import {useQuery} from '@tanstack/react-query';
import {apiCalls} from '../api';
import {PromotionList, PromotionWithId, TagList} from '../types/api';

export const useApiGetTagList = () => {
  return useQuery<TagList[]>({
    queryKey: ['getTagList'],
    queryFn: () => apiCalls.getTagList(),
  });
};

export const useApiGetPromotionsList = () => {
  return useQuery<PromotionList[]>({
    queryKey: ['getPromotionsList'],
    queryFn: () => apiCalls.getPromotionsList(),
  });
};

export const useApiGetPromotionWithId = (id: number) => {
  return useQuery<PromotionWithId>({
    queryKey: ['getPromotionWithId'],
    queryFn: () => apiCalls.getPromotionWithId(id),
  });
};
