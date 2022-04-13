import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenStorage} from '~types/token';

function makeStorage<T>(key: string) {
  return {
    get: async () => {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    },
    set: async (value: T) =>
      await AsyncStorage.setItem(key, JSON.stringify(value)),
    clear: async () => await AsyncStorage.removeItem(key),
  };
}

export const storage = {
  token: makeStorage<TokenStorage>('token'),
};
