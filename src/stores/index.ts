import { AccountInformation } from "@/services/types";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import VuexPersister from "vuex-persister";

export interface State {
  systemInfo: UniApp.GetSystemInfoResult | null;
  menuButtonInfo: UniApp.GetMenuButtonBoundingClientRectRes | null;
  accountInfo: AccountInformation | null;
  token: string | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

const vuexPersister = new VuexPersister<State>({
  storage: {
    getItem: (key) => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: (key) => uni.removeStorageSync(key),
    length: uni.getStorageInfoSync().keys.length,
    clear: () => uni.clearStorageSync(),
    key: (key: number) => {
      const keys = uni.getStorageInfoSync().keys;
      return key <= keys.length ? keys[key - 1] : null;
    },
  },
});

export const store = createStore<State>({
  state: () => ({
    systemInfo: null,
    menuButtonInfo: null,
    accountInfo: null,
    token: null,
  }),
  mutations: {
    setSystemInfo(state, systemInfo: UniApp.GetSystemInfoResult) {
      state.systemInfo = systemInfo;
    },
    setMenuButtonInfo(
      state,
      menuButtonInfo: UniApp.GetMenuButtonBoundingClientRectRes
    ) {
      state.menuButtonInfo = menuButtonInfo;
    },
    setAccountInfo(state, accountInfo: AccountInformation) {
      state.accountInfo = accountInfo;
    },
    setToken(state, token: string) {
      state.token = token;
    },
  },
  modules: {},
  plugins: [vuexPersister.persist],
});
