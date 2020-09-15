import {AsyncStorage} from 'react-native';

export const StorageUtil = {
  async save(key: string, value: string) {
    return await AsyncStorage.setItem(key, value);
  },

  async load(key: string) {
    return await AsyncStorage.getItem(key);
  },

  async remove(key: string) {
    return await AsyncStorage.removeItem(key);
  },

  async clear() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (e) {
      return false;
    }
  },
};
