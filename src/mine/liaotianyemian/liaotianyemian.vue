<template>
  <view class="page">
    <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view
      class="flex-row items-center group-top"
      :style="
        'width: ' +
        navigationBarWidth +
        'px; margin-top: ' +
        navigationBarTop +
        'px'
      "
    >
      <image
        class="image-left"
        src="@/static/icons/arrow-left-blob.png"
        @click="goBack"
      />
      <view class="flex-col top-title">
        <text class="justify-center text-top">{{ hrInfo.hrName }}</text>
        <text class="text-bottom">{{ hrInfo.postName }}</text>
      </view>
    </view>
    <!-- #endif -->
    <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view style="height: 20rpx"></view>
    <view class="flex-row items-center group-top">
      <image
        class="image-left"
        src="@/static/icons/arrow-left-blob.png"
        @click="goBack"
      />
      <view class="flex-col top-title">
        <text class="justify-center text-top">{{ hrInfo.hrName }}</text>
        <text class="justify-center text-bottom">{{ hrInfo.postName }}</text>
      </view>
    </view>
    <!-- #endif -->
    <scroll-view class="group-info" :scroll-y="true">
      <view v-for="(item, i) in messageRecord" :key="i">
        <Left v-if="!isRight"></Left>
        <Right v-if="isRight" :mes="item"></Right>
      </view>
    </scroll-view>
    <view class="flex-col group-end justify-center">
      <view class="flex-row justify-between items-end input-box">
        <view class="items-center text-input">
          <textarea
            v-model="inputValue"
            class="items-center input"
            :maxlength="100"
            :auto-height="true"
          />
        </view>
        <text
          class="items-center text-send"
          @click="sendMessage(inputValue, 1, hrInfo.hrInformationId, 2)"
        >
          发送</text
        >
      </view>
      <view class="justify-between function-box">
        <image class="image" src="@/static/icons/audio-fill.svg" />
        <image class="image" src="@/static/icons/picture-fill.svg" />
        <image class="image" src="@/static/icons/camera.svg" />
        <image class="image" src="@/static/icons/emoji.svg" />
        <image class="image" src="@/static/icons/plus-circle.svg" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Left from "@/components/BubbleBox/BubbleBoxHr.vue";
import Right from "@/components/BubbleBox/BubbleBoxUser.vue";
import { getHrInfosP0 } from "@/services/services";
import { HrInformation, MessageRecord } from "@/services/types";
import { useMainStore } from "@/stores/main";
import WebSocketPolyfill from "@/utils/socket";
import { onLoad } from "@dcloudio/uni-app";
import Stomp from "stompjs";
import { ref } from "vue";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const store = useMainStore();

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarTop = store.menuButtonInformation.top;

const navigationBarWidth = store.menuButtonInformation.left - uni.upx2px(30);

/* #endif */

const socket = new WebSocketPolyfill(
  `${VITE_BASE_URL.replace(/^http/, "ws")}/ws`
) as unknown as WebSocket;

const stompClient = Stomp.over(socket);

const hrInfo = ref<HrInformation>({} as HrInformation);
const inputValue = ref("");
const messageRecord = ref<string[]>([]);
const isRight = ref(false);

onLoad((e) => {
  if (e.Id) {
    getHrInfosP0(e.Id).then((res) => {
      hrInfo.value = res.data.body;
    });
  }
});

stompClient.connect(
  { Authorization: "Bearer " + store.jsonWebToken },
  (frame) => {
    stompClient.subscribe("/user/queue/message", (message) => {
      // 每接收到一次消息都会触发这个回调
      let data = JSON.parse(message.body) as {
        body: MessageRecord[];
        message: string;
        status: number;
        timestamp: string;
      };
      messageRecord.value.push(data.body[0].content);
      isRight.value = false;
      for (let messageRecord of data.body) {
        store.messages[messageRecord.initiateId].push({
          ...messageRecord,
          haveRead: false,
        });
      }
    });
    stompClient.subscribe("/user/queue/error", (errors) => {
      // 每接收到一次消息都会触发这个回调
      let data = JSON.parse(errors.body) as {
        errors: any;
        message: string;
        status: number;
        timestamp: string;
      };
      console.log(data);
    });
  }
);
// 发送消息
const sendMessage = (
  content: string,
  messageType: number,
  serviceId: string,
  serviceType: number
) => {
  stompClient.send(
    "/message",
    {},
    JSON.stringify({
      content,
      initiateId: store.accountInformation.fullInformationId,
      initiateType: 1,
      messageType,
      serviceId,
      serviceType,
    })
  );
  messageRecord.value.push(content);
  isRight.value = true;
  inputValue.value = "";
};

const goBack = () => {
  let info = {
    id: hrInfo.value.hrInformationId,
    mes: messageRecord.value[messageRecord.value.length - 1],
  };
  uni.$emit("getInfo", info);
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.page {
  // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
  height: 1334rpx;

  // #endif
  // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
  height: 1620rpx;

  // #endif
  overflow: hidden;
  background-color: rgb(235 235 235);

  .group-top {
    height: var(--tab-bar-height);

    .image-left {
      width: 25rpx;
      height: 35rpx;
      margin-left: 20rpx;
    }

    .top-title {
      width: 100%;
      height: var(--tab-bar-height);

      .text-top {
        height: 50%;
        font-size: 30rpx;
      }

      .text-bottom {
        height: 50%;
        font-size: 25rpx;
      }
    }
  }

  .group-info {
    width: 100%;

    // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    height: 1040rpx;

    // #endif
    // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    height: auto;

    // #endif
  }

  .group-end {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;

    .input-box {
      width: 94%;
      min-height: 70rpx;
      max-height: 350rpx;
      margin-left: 3%;

      .text-input {
        width: 600rpx;
        min-height: 70rpx;
        max-height: 350rpx;
        padding-left: 10rpx;
        background-color: #fff;
        border-radius: 30rpx;
      }

      .text-send {
        height: 60rpx;
        padding: 3rpx 25rpx;
        font-size: 30rpx;
        color: #fff;
        background-color: rgb(9 164 225);
        border-radius: 30rpx;
      }
    }

    .function-box {
      width: 94%;
      height: 60rpx;
      margin-top: 10rpx;
      margin-left: 3%;

      .image {
        width: 60rpx;
        height: 60rpx;
      }
    }
  }
}
</style>
