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
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const store = useMainStore();

const interviewedJobs = ref<PositionInformation[]>([]);
const interviewed = ref();
const sendType = ref("放弃面试");

/* 查询待面试职位信息 */
onLoad((e) => {
  if (e.interviewPosition) {
    console.log("待面试职位信息", e.interviewPosition);
    interviewed.value = JSON.parse(e.interviewPosition);
    console.log("interviewed", interviewed.value);
    for (const interview of interviewed.value) {
      getCompanyInfosP0PositionInfosP1(
        interview.companyInformationId,
        interview.positionInformationId
      )
        .then((res) => {
          interviewedJobs.value.push(res.data.body);
        })
        .catch(failResponseHandler);
    }
  }
});

/* 放弃面试 */
const stateClick = (index: string) => {
  for (const delivery of interviewed.value) {
    if (delivery.positionInformationId === index) {
      deleteUserInfosP0DeliveryRecordsP1(
        store.accountInformation.fullInformationId,
        delivery.deliveryRecordId
      )
        .then(() => {
          interviewed.value = interviewed.value.filter(
            (item: { deliveryRecordId: any }) =>
              item.deliveryRecordId !== delivery.deliveryRecordId
          );
        })
        .catch(failResponseHandler);
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
