import AsyncStorage from '@react-native-async-storage/async-storage';

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
  counter: makeStorage<number>('counter'),
};
