<template>
  <NavigationBar class="header" title="我的查看" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobDetail
        v-for="(myview, i) in myViews"
        :key="i"
        :job-detail="myview"
        @click="view_2OnClick"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCompanyinfosPositioninfos } from "@/services/services";
import { PositionInformation } from "@/services/types";
import { ref } from "vue";
const myViews = ref<PositionInformation[]>([]);
getCompanyinfosPositioninfos({}).then((res) => {
  myViews.value = res.data.body;
});

const view_2OnClick = () => {
  uni.navigateTo({ url: "/detail/zhiweixiangqing/zhiweixiangqing" });
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
