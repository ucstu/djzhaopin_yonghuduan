import { MessageRecord } from "@/services/types";
import Stomp from "stompjs";
import WebSocketPolyfill from "./socket";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const socket = new WebSocketPolyfill(
  `${VITE_BASE_URL.replace(/^http/, "ws")}/ws`
) as unknown as WebSocket;

const stompClient = Stomp.over(socket);

let store: any;

// @ts-ignore
// stompClient.debug = null;

const messageIds = new Set<string>();

export const connectStomp = (_store: {
  jsonWebToken: string;
  messages: {
    [x: string]: {
      haveRead: boolean;
      content: string;
      createdAt: string;
      initiateId: string;
      initiateType: number;
      messageRecordId: string;
      messageType: 1 | 2 | 3 | 4;
      serviceId: string;
      serviceType: number;
      updatedAt: string;
    }[];
  };
}) => {
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
          for (const messageRecord of data.body) {
            if (!_store.messages[messageRecord.initiateId]) {
              _store.messages[messageRecord.initiateId] = [];
            }
            _store.messages[messageRecord.initiateId].push({
              ...messageRecord,
              haveRead: false,
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
  if (!store.messages[serviceId]) {
    store.messages[serviceId] = [];
  }
  const time = new Date().getHours() + ":" + new Date().getMinutes();
  store.messages[serviceId].push({
    ...message,
    haveRead: false,
    createdAt: time,
    updatedAt: time,
    messageRecordId: "",
  });
};
