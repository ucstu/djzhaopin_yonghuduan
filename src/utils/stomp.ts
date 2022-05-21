import {
  AccountInformation,
  JobExpectation,
  MessageRecord,
  UserInformation
} from "@/services/types";
import { withReadStateMessageRecord } from "@/stores/main";
import { Store } from "pinia";
import Stomp from "stompjs";
import WebSocketPolyfill from "./socket";
import useDate from "./useDate";
import useTime from "./useTime";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const socket = new WebSocketPolyfill(
  `${VITE_BASE_URL.replace(/^http/, "ws")}/ws`
) as unknown as WebSocket;

const stompClient = Stomp.over(socket);

let store: Store<
  "main",
  {
    jsonWebToken: string;
    userInformation: UserInformation;
    systemInformation: UniApp.GetSystemInfoResult;
    accountInformation: AccountInformation;
    menuButtonInformation: UniApp.GetMenuButtonBoundingClientRectRes;
    jobExpectations: JobExpectation[];
    messages: {
      [key: string]: { [key: string]: withReadStateMessageRecord[] };
    };
  },
  {},
  {}
>;

// @ts-ignore
// stompClient.debug = null;

const messageIds = new Set<string>();

export const connectStomp = (
  _store: Store<
    "main",
    {
      jsonWebToken: string;
      userInformation: UserInformation;
      systemInformation: UniApp.GetSystemInfoResult;
      accountInformation: AccountInformation;
      menuButtonInformation: UniApp.GetMenuButtonBoundingClientRectRes;
      jobExpectations: JobExpectation[];
      messages: {
        [key: string]: { [key: string]: withReadStateMessageRecord[] };
      };
    },
    {},
    {}
  >
) => {
  store = _store;
  stompClient.connect(
    { Authorization: "Bearer " + _store.jsonWebToken },
    (frame) => {
      stompClient.subscribe("/user/queue/message", (message) => {
        // 每接收到一次消息都会触发这个回调
        // @ts-ignore
        if (!messageIds.has(message.headers["message-id"])) {
          const data = JSON.parse(message.body) as {
            body: MessageRecord[];
            message: string;
            status: number;
            timestamp: string;
          };
          const pages = getCurrentPages();
          const page = pages[pages.length - 1];
          for (const messageRecord of data.body) {
            if (
              !_store.messages[store.userInformation.userInformationId][
                messageRecord.initiateId
              ]
            ) {
              _store.messages[store.userInformation.userInformationId][
                messageRecord.initiateId
              ] = [];
            }
            _store.messages[store.userInformation.userInformationId][
              messageRecord.initiateId
            ].push({
              ...messageRecord,
              haveRead: page.route === "mine/liaotianyemian/liaotianyemian",
            });
          }
          if (
            page.route !== "mine/liaotianyemian/liaotianyemian" &&
            data.body.length > 0
          ) {
            uni.showToast({
              title: "你收到了 " + data.body.length + " 条新消息",
              duration: 2000,
            });
          }
        }
        if (messageIds.size > 10) {
          messageIds.clear();
        }
      });
      stompClient.subscribe("/user/queue/error", (errors) => {
        // 每接收到一次消息都会触发这个回调
        const data = JSON.parse(errors.body) as {
          errors: any;
          message: string;
          status: number;
          timestamp: string;
        };
      });
      stompClient.subscribe("/topic/pingpong", (pong) => {});
      setInterval(() => {
        stompClient.send(
          "/ping",
          {},
          JSON.stringify({
            timestamp: new Date().toISOString(),
          })
        );
      }, 30000);
    },
    handleDisconnect
  );
};

const handleDisconnect = () => {
  connectStomp(store);
};

// 发送消息
export const sendMessage = (
  content: string,
  messageType: 1 | 2 | 3 | 4,
  serviceId: string,
  serviceType: number
) => {
  const message = {
    content,
    initiateId: store.accountInformation.fullInformationId,
    initiateType: 1,
    messageType,
    serviceId,
    serviceType,
  };
  stompClient.send("/message", {}, JSON.stringify(message));
  if (!store.messages[store.userInformation.userInformationId][serviceId]) {
    store.messages[store.userInformation.userInformationId][serviceId] = [];
  }
  const time = new Date().toISOString();
  store.messages[store.userInformation.userInformationId][serviceId].push({
    ...message,
    haveRead: true,
    createdAt: useDate(time) + " " + useTime(time),
    updatedAt: useDate(time) + " " + useTime(time),
    messageRecordId: "",
  });
};
