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
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const jobDetails = ref<CompanyInformation[]>([]);

getCompanyInfos({}).then((res) => {
  jobDetails.value = res.data.body;
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
