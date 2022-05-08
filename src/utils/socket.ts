// @ts-nocheck

import { useMainStore } from "@/stores/main";
import Stomp from "stompjs";

let socketOpen = false;
let socketMsgQueue: any[] = [];

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const store = useMainStore();

export default {
  client: null as Stomp.Client,
  baseURL: `${VITE_BASE_URL.replace(/^http/, "ws")}/ws`,
  header: {
    Authorization: "Bearer " + store.jsonWebToken,
  },
  init() {
    if (this.client) {
      return Promise.resolve(this.client);
    }

    return new Promise((resolve, reject) => {
      const ws = {
        send: this.sendMessage,
        onopen: null,
        onmessage: null,
        close: this.closeSocket,
      };

      uni.connectSocket({
        url: this.baseURL,
        header: this.header,
      });

      uni.onSocketOpen(function (res) {
        socketOpen = true;
        for (const element of socketMsgQueue) {
          ws.send(element);
        }
        socketMsgQueue = [];
        ws.onopen && ws.onopen();
      });

      uni.onSocketMessage(function (res) {
        ws.onmessage && ws.onmessage(res);
      });

      uni.onSocketClose((res) => {
        this.client.disconnect();
        this.client = null;
        socketOpen = false;
      });

      Stomp.setInterval = function (interval, f) {
        return setInterval(f, interval);
      };
      Stomp.clearInterval = function (id) {
        return clearInterval(id);
      };

      const client = (this.client = Stomp.over(ws));
      client.connect(this.header, function () {
        resolve(client);
      });
    });
  },
  disconnect() {
    uni.closeSocket({});
  },
  sendMessage(message: any) {
    if (socketOpen) {
      uni.sendSocketMessage({
        data: message,
      });
    } else {
      socketMsgQueue.push(message);
    }
  },
  closeSocket() {
    console.log("closeSocket");
  },
};
