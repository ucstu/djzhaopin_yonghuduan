<template>
  <view class="flex-col page">
    <view class="group-top">
      <view class="justify-between items-center top-box">
        <text class="info-title">消息</text>
        <text class="items-center info-del" @click="allRead">一键已读</text>
      </view>
    </view>
    <view class="justify-center group-cent">
      <view class="flex-row justify-between group-button">
        <view class="flex-col items-center button-box" @click="toMyDelivery">
          <image
            style="width: 45rpx; height: 45rpx"
            src="@/static/icons/deliver.png"
          />
          <text class="text-1">我的投递</text>
        </view>
        <view class="flex-col items-center button-box" @click="toBeViewed">
          <image
            style="width: 60rpx; height: 45rpx"
            src="@/static/icons/eye_color.png"
          />
          <text class="text-1">谁看过我</text>
        </view>
        <view class="flex-col items-center button-box" @click="toFootprint">
          <image
            style="width: 45rpx; height: 45rpx"
            src="@/static/icons/footprint.png"
          />
          <text class="text-1">我的查看</text>
        </view>
      </view>
    </view>
    <view class="group-end">
      <view class="flex-row items-center info">
        <text>消息沟通</text>
        <image class="image-down" src="@/static/icons/arrow-down-filling.png" />
      </view>
      <scroll-view class="group-infos" :scroll-y="true">
        <view v-if="hrInfo.length">
          <view v-for="(item, i) in hrInfo" :key="i">
            <MailBar
              :hr-info="item"
              :mes="mes.get(item.hrInformationId)"
              :is-read="isRead.get(item.hrInformationId)"
              :time="time.get(item.hrInformationId)"
              :message-key="messageKey.get(item.hrInformationId)"
              :initiate-type="messageType.get(item.hrInformationId)"
            />
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import MailBar from "@/components/MailBar/MailBar.vue";
import {
  getHrInfosP0,
  getUserInfosP0DeliveryRecords,
} from "@/services/services";
import { DeliveryRecord, HrInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import usetimeChange from "@/utils/useTimeChange";
import { onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

const hrInfo = ref<HrInformation[]>([]);
const store = useMainStore();
const mes = ref<Map<string, string>>(new Map());
const time = ref<Map<string, string>>(new Map());
const isRead = ref<Map<string, boolean>>(new Map());
const messageType = ref<Map<string, number>>(new Map());
const messageKey = ref<Map<string, string>>(new Map());

onShow(() => {
  if (store.messages[store.accountInformation.fullInformationId]) {
    hrInfo.value = [];
    for (const key in store.messages[
      store.accountInformation.fullInformationId
    ]) {
      messageKey.value.set(key, key);
      getHrInfosP0(key).then((res) => {
        mes.value.set(
          key,
          store.messages[store.accountInformation.fullInformationId][key][
            store.messages[store.accountInformation.fullInformationId][key]
              .length - 1
          ].content
        );
        time.value.set(
          key,
          usetimeChange(
            store.messages[store.accountInformation.fullInformationId][key][
              store.messages[store.accountInformation.fullInformationId][key]
                .length - 1
            ].createdAt
          )
        );
        isRead.value.set(
          key,
          store.messages[store.accountInformation.fullInformationId][key][
            store.messages[store.accountInformation.fullInformationId][key]
              .length - 1
          ].haveRead
        );
        messageType.value.set(
          key,
          store.messages[store.accountInformation.fullInformationId][key][
            store.messages[store.accountInformation.fullInformationId][key]
              .length - 1
          ].messageType
        );
        hrInfo.value.push(res.data.body);
      });
    }
  }
});
// 一键已读
const allRead = () => {
  for (const key in store.messages[
    store.accountInformation.fullInformationId
  ]) {
    if (
      store.messages[store.accountInformation.fullInformationId][key][
        store.messages[store.accountInformation.fullInformationId][key].length -
          1
      ].initiateType === 2
    ) {
      store.messages[store.accountInformation.fullInformationId][key][
        store.messages[store.accountInformation.fullInformationId][key].length -
          1
      ].haveRead = true;
      isRead.value.set(key, true);
    }
  }
};

/* 投递记录 */
const status = ref<(1 | 2 | 3 | 4 | 5)[]>([1, 2, 3, 4, 5]);
const deliveryRecords = ref<DeliveryRecord[]>([]);
getUserInfosP0DeliveryRecords(store.accountInformation.fullInformationId, {
  status: status.value,
})
  .then((res) => {
    deliveryRecords.value = res.data.body.deliveryRecords;
  })
  .catch(failResponseHandler);

const toMyDelivery = () => {
  let item = encodeURIComponent(JSON.stringify(deliveryRecords.value));
  uni.navigateTo({
    url: "/record/toudijilu/toudijilu?deliveryRecords=" + item,
  });
};
const toBeViewed = () => {
  uni.navigateTo({ url: "/record/shuikanguowo/shuikanguowo" });
};
const toFootprint = () => {
  uni.navigateTo({ url: "/record/wodechakan/wodechakan" });
};
</script>

<style lang="scss" scoped>
.page {
  .group-top {
    width: 100%;
    height: 230rpx;
    background-color: rgb(35 193 158);

    .top-box {
      position: relative;
      top: 170rpx;
      width: 100%;
      height: auto;

      .info-title {
        padding-left: 30rpx;
        font-size: 40rpx;
        color: #fff;
      }

      .info-del {
        padding: 2rpx 15rpx;
        margin-right: 20rpx;
        font-size: 25rpx;
        color: #fff;
        border: 2rpx solid #fff;
        border-radius: 20rpx;
      }
    }
  }

  .group-cent {
    width: 100%;
    height: 100rpx;
    margin-top: 30rpx;

    .group-button {
      width: 70%;

      .button-box {
        .text-1 {
          font-size: 28rpx;
        }
      }
    }
  }

  .group-end {
    margin-top: 20rpx;

    .info {
      margin-left: 30rpx;
      font-size: 25rpx;
      font-weight: 600;

      .image-down {
        width: 25rpx;
        height: 25rpx;
        margin-left: 10rpx;
      }
    }

    .group-infos {
      // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
      height: 800rpx;

      // #endif
      // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
      height: 1100rpx;

      // #endif
      overflow: hidden;
    }
  }
}
</style>
