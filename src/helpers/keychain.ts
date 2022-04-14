import {TokenStorage} from '~types/token';
import * as Keychain from 'react-native-keychain';

function createKeychainService<ServiceStore>(service: string) {
  return {
    get: async () => {
      const store = await Keychain.getGenericPassword({service});
      return store ? JSON.parse(store.password) : null;
    },
    set: (value: ServiceStore) =>
      Keychain.setGenericPassword('data', JSON.stringify(value), {service}),
    clear: () => Keychain.resetGenericPassword({service}),
  };
}

export const keychain = {
  token: createKeychainService<TokenStorage>('token'),
};
