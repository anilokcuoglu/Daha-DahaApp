import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const setItem = (key: string, value: string) => {
  storage.set(key, value);
};

const getItem = (key: string) => {
  const value = storage.getString(key);

  return value;
};

const deleteItem = (key: string) => {
  storage.delete(key);
};

const clearAll = () => {
  storage.clearAll();
};
export const mmkvStoragePersister = createAsyncStoragePersister({
  storage: {
    setItem: (key: string, value: any) => {
      storage.set(key, value);
      return Promise.resolve();
    },
    getItem: (key: string) => {
      const value = storage.getString(key);
      return Promise.resolve(value ?? null);
    },
    removeItem: (key: string) => {
      storage.delete(key);
      return Promise.resolve();
    },
  },
});

export default {
  setItem,
  getItem,
  deleteItem,
  clearAll,
};
