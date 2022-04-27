<template>
  <SearchAndFilter></SearchAndFilter>
  <view class="page">
    <view class="flex-col list">
      <JobDetail
        v-for="(JobDetail, i) in jobDetails"
        :key="i"
        class="list-item"
        :job-detail="JobDetail"
        @click="toPositions"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import { getCompanyinfosCompanyinfoidPositioninfos } from "@/services/services";
import { PositionInformation } from "@/services/types";
import { key } from "@/stores";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const jobDetails = reactive<PositionInformation[]>([]);

getCompanyinfosCompanyinfoidPositioninfos(
  // @ts-ignore
  { name: "前端开发" },
  { salary: "2k-3k" }
).then((res) => {
  jobDetails.push(...res.data.body);
});

const toPositions = () => {
  uni.navigateTo({ url: "/detail/zhiweixiangqing/zhiweixiangqing" });
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 710rpx;
  height: 1334rpx;
  margin-left: 20rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .list {
    width: 690rpx;
    margin-top: 30rpx;
    margin-left: 10rpx;
  }
}
</style>
