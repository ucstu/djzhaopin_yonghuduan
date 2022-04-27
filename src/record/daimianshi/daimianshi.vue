<template>
  <NavigationBar class="header" title="待面试" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobPanel
        v-for="(interviewedJob, i) in interviewedJobs"
        :key="i"
        class="list-item"
        :collection-position="interviewedJob"
        :send-type="sendType"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCompanyinfosPositioninfos } from "@/services/services";
import { PositionInformation } from "@/services/types";
import { ref } from "vue";

const interviewedJobs = ref<PositionInformation[]>([]);
getCompanyinfosPositioninfos({}).then((res) => {
  interviewedJobs.value = res.data.body;
});
const sendType = ref("放弃面试");

const view_4OnClick = () => {
  uni.navigateTo({ url: "/detail/zhiweixiangqing/zhiweixiangqing" });
};
const view_11OnClick = () => {
  uni.navigateTo({ url: "/mine/liaotianyemian/liaotianyemian" });
};
const view_6OnClick = () => {
  uni.navigateTo({ url: "/detail/zhiweixiangqing/zhiweixiangqing" });
};
const view_15OnClick = () => {
  uni.navigateTo({ url: "/mine/liaotianyemian/liaotianyemian" });
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
