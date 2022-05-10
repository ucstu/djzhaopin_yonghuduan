<template>
  <NavigationBar title="我的查看" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobDetail
        v-for="(myView, i) in myViews"
        :key="i"
        :job-detail="myView"
        @job-click="
          view_2OnClick(
            myView.companyInformationId,
            myView.positionInformationId
          )
        "
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  getCompanyInfosP0PositionInfosP1,
  getUserInfosP0InspectionRecords,
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { ref } from "vue";

const store = useMainStore();

const myViews = ref<PositionInformation[]>([]);
/* 查询所有查看记录 */
getUserInfosP0InspectionRecords(
  store.accountInformation.fullInformationId,
  {}
).then((res) => {
  for (const item of res.data.body.userInspectionRecords) {
    getCompanyInfosP0PositionInfosP1(
      item.companyInformationId,
      item.positionInformationId
    ).then((res) => {
      if (!myViews.value.length) {
        myViews.value.push(res.data.body);
      } else {
        for (const item of myViews.value) {
          if (
            item.positionInformationId === res.data.body.positionInformationId
          ) {
            return;
          } else {
            myViews.value.push(res.data.body);
          }
        }
      }
    });
  }
});

const view_2OnClick = (c: string, p: string) => {
  uni.navigateTo({
    url:
      "/detail/zhiweixiangqing/zhiweixiangqing?companyId=" +
      c +
      "&positionId=" +
      p,
  });
};
</script>
<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;

  .list {
    margin-top: 20rpx;
    margin-left: 20rpx;
  }
}
</style>
