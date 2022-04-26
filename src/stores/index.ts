import {
  AccountInformation,
  JobExpectation,
  UserInformation,
  WorkExperience
} from "@/services/types";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import VuexPersister from "vuex-persister";

export interface State {
  systemInfo: UniApp.GetSystemInfoResult | null;
  menuButtonInfo: UniApp.GetMenuButtonBoundingClientRectRes | null;
  accountInfo: AccountInformation;
  token: string | null;
  userInfo: UserInformation | null;
  exceptionJob: JobExpectation | null;
  workExperience: WorkExperience | null;
  jobExpectation: JobExpectation | null;
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
  // @ts-ignore
  state: () => ({
    systemInfo: null,
    menuButtonInfo: null,
    accountInfo: null,
    token: null,
    userInfo: null,
    exceptionJob: null,
    workExperience: null,
    jobExpectation: null,
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
    setUserInfo(state, userInfo: UserInformation) {
      state.userInfo = userInfo;
    },
    setExceptionJob(state, exceptionJob: JobExpectation) {
      state.exceptionJob = exceptionJob;
    },
    setWorkExperience(state, workExperience: WorkExperience) {
      state.workExperience = workExperience;
    },
    setJobExpectation(state, jobExpectation: JobExpectation) {
      state.jobExpectation = jobExpectation;
    },
  },
  modules: {},
  plugins: [vuexPersister.persist],
});
