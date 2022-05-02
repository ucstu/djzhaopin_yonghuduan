import {
  AccountInformation,
  JobExpectation,
  UserInformation,
} from "@/services/types";
import { defineStore } from "pinia";
import { uniStorage } from "./storage";

export const useMainStore = defineStore("main", {
  state: () => ({
    jsonWebToken: null as unknown as string,
    userInformation: null as unknown as UserInformation,
    systemInformation: null as unknown as UniApp.GetSystemInfoResult,
    accountInformation: null as unknown as AccountInformation,
    menuButtonInformation:
      null as unknown as UniApp.GetMenuButtonBoundingClientRectRes,
    jobExpectations: [] as JobExpectation[],
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "pinia-main",
        storage: uniStorage,
      },
    ],
  },
});
