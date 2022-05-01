<template>
  <NavigationBar title="投递记录" />
  <view class="flex-col page">
    <view class="justify-between items-center group-1">
      <text
        v-for="(send, i) in sendType"
        v-show="send !== ''"
        :key="i"
        :class="sendId === i ? 'active' : ''"
        @click="sendTypeId(i)"
        >{{ send }}</text
      >
    </view>
    <view class="flex-col list">
      <JobPanel
        v-for="(deliveryRecord, i) in deliveryRecords"
        :key="i"
        class="list-item"
        :collection-position="deliveryRecord"
        :send-type="sendType[sendId]"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  getCompanyInfosP0PositionInfosP1,
  getUserInfosP0DeliveryRecords,
} from "@/services/services";
import { DeliveryRecord, PositionInformation } from "@/services/types";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const deliveryRecords = ref<PositionInformation[]>([]);
const deliveryLength = ref<number>(0);
const sendType = ["", "待查看", "已查看", "通过初筛", "约面试", "不合格"];
const sendId = ref<DeliveryRecord["status"]>(1);

/* 默认查看记录 */
getUserInfosP0DeliveryRecords(store.state.accountInfo.fullInformationId, {
  status: 1,
}).then((res) => {
  deliveryLength.value = res.data.body.length;
  for (const delivery of res.data.body) {
    getCompanyInfosP0PositionInfosP1(
      delivery.companyInformationId,
      delivery.positionInformationId
    ).then((res) => {
      deliveryRecords.value.push(res.data.body);
    });
  }
});

/* 查看不同状态记录 */
const sendTypeId = (index: number) => {
  sendId.value = index as DeliveryRecord["status"];
  getUserInfosP0DeliveryRecords(store.state.accountInfo.fullInformationId, {
    status: sendId.value,
  }).then((res) => {
    deliveryRecords.value.length = 0;
    for (const delivery of res.data.body) {
      getCompanyInfosP0PositionInfosP1(
        delivery.companyInformationId,
        delivery.positionInformationId
      ).then((res) => {
        deliveryRecords.value.push(res.data.body);
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: auto;

  .active {
    color: rgb(35 193 158);
  }

  .group-1 {
    width: 710rpx;
    height: 50rpx;
    margin-top: 30rpx;
    margin-left: 20rpx;
    font-size: 25rpx;
    color: rgb(0 0 0 / 50%);
  }

  .list {
    width: 690rpx;
    height: auto;
    margin-left: 30rpx;

    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
