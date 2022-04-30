<template>
  <NavigationBar title="我的查看" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobDetail
        v-for="(myView, i) in myViews"
        :key="i"
        :job-detail="myView"
        @click="view_2OnClick"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getUserInfosP0InspectionRecords } from "@/services/services";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const myViews = ref({});
/* 查询所有查看记录 */
getUserInfosP0InspectionRecords(
  store.state.accountInfo.userInformationId,
  {}
).then((res) => {
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
