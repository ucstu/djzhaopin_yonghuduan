export const uniStorage: Storage = {
  length: uni.getStorageInfoSync().keys.length,
  clear() {
    uni.clearStorageSync();
  },
  getItem(key: string) {
    return uni.getStorageSync(key);
  },
  key(index: number) {
    return uni.getStorageInfoSync().keys[index];
  },
  removeItem(key: string) {
    uni.removeStorageSync(key);
  },
  setItem(key: string, value: string) {
    uni.setStorageSync(key, value);
  },
};
