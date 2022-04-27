<template>
  <NavigationBar class="header" title="投递记录" />
  <view class="flex-col page">
    <view class="justify-between items-center group-1">
      <view
        v-for="(send, i) in sendType"
        :key="i"
        :class="sendId === i ? 'active' : ''"
        @click="sendTypeId(i)"
        >{{ send.type }}</view
      >
    </view>
    <view class="flex-col list">
      <JobPanel
        v-for="(deliveryRecord, i) in deliveryRecords"
        :key="i"
        class="list-item"
        :collection-position="deliveryRecord"
        :send-type="sendType[sendId].type"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
// @ts-nocheck
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid } from "@/services/services";
import { DeliveryRecord } from "@/services/types";
import { key } from "@/stores";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const deliveryRecords = ref<DeliveryRecord[]>([]);
const sendType = ref([
  { key: "0", type: "待查看" },
  { key: "1", type: "已查看" },
  { key: "2", type: "通过初筛" },
  { key: "3", type: "约面试" },
  { key: "4", type: "不合格" },
]);
const sendId = ref(0);

onMounted(() => {
  getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid(
    store.state.accountInfo.userInformationId,
    {
      state: sendType.value[sendId.value].key,
    }
  ).then((res) => {
    deliveryRecords.value = res.data.body;
  });
});

const sendTypeId = (index: number) => {
  sendId.value = index;
  getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid(
    store.state.accountInfo.userInformationId,
    {
      state: sendType.value[sendId.value].key,
    }
  ).then((res) => {
    deliveryRecords.value = res.data.body;
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
