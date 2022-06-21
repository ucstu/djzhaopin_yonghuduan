import {
  AccountInformation,
  AreaInformations,
  CityInformations,
  JobExpectation,
  MessageRecord,
  UserInformation,
} from "@/services/types";
import { defineStore } from "pinia";

export interface withReadStateMessageRecord extends MessageRecord {
  haveRead: boolean;
}

export const useMainStore = defineStore("main", {
  state: () => ({
    jsonWebToken: null as unknown as string,
    userInformation: null as unknown as UserInformation,
    systemInformation: null as unknown as UniApp.GetSystemInfoResult,
    accountInformation: null as unknown as AccountInformation,
    menuButtonInformation:
      null as unknown as UniApp.GetMenuButtonBoundingClientRectRes,
    jobExpectations: [] as JobExpectation[],
    cityInformation: null as unknown as CityInformations,
    areas: null as unknown as AreaInformations,
    messages: {} as {
      [key: string]: { [key: string]: withReadStateMessageRecord[] };
    },
  }),
  persist: {
    enabled: true,
  },
});
