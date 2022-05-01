<template>
  <NavigationBar title="待面试" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobPanel
        v-for="(interviewedJob, i) in interviewedJobs"
        :key="i"
        class="list-item"
        :collection-position="interviewedJob"
        :send-type="sendType"
        @state-click="stateClick(interviewedJob.positionInformationId)"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  deleteUserInfosP0DeliveryRecordsP1,
  getCompanyInfosP0PositionInfosP1,
  getUserInfosP0DeliveryRecords,
} from "@/services/services";
import { DeliveryRecord, PositionInformation } from "@/services/types";
import { key } from "@/stores";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const deliveryRecords = ref<DeliveryRecord[]>([]);
const interviewedJobs = ref<PositionInformation[]>([]);
const sendType = ref("放弃面试");

/* 查询待面试职位信息 */
onLoad(() => {
  getUserInfosP0DeliveryRecords(store.state.accountInfo.fullInformationId, {
    status: 1,
  }).then((res) => {
    console.log(res.data.body);
    deliveryRecords.value = res.data.body;
    for (const delivery of deliveryRecords.value) {
      getCompanyInfosP0PositionInfosP1(
        delivery.companyInformationId,
        delivery.positionInformationId
      ).then((res) => {
        interviewedJobs.value.push(res.data.body);
      });
    }
  });
});

/* 放弃面试 */
const stateClick = (index: string) => {
  for (const delivery of deliveryRecords.value) {
    if (delivery.positionInformationId === index) {
      deleteUserInfosP0DeliveryRecordsP1(
        store.state.accountInfo.fullInformationId,
        delivery.deliveryRecordId
      ).then(() => {
        deliveryRecords.value = deliveryRecords.value.filter(
          (item) => item.deliveryRecordId !== delivery.deliveryRecordId
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: auto;

  .list {
    width: 690rpx;
    margin-left: 30rpx;

    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
