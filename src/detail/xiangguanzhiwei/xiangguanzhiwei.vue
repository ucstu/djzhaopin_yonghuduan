<template>
  <SearchBar></SearchBar>
  <view class="justify-between about">
    <text class="justify-center text-title" @click="checkClick">职位</text>
    <text class="justify-center text-title" @click="checkClick">公司</text>
  </view>
  <FilterBar v-if="position"></FilterBar>
  <SearchAndFilter v-if="!position"></SearchAndFilter>
  <!-- <view class="page">
    <view class="flex-col list">
      <JobDetail
        v-for="(JobDetail, i) in jobDetails"
        :key="i"
        class="list-item"
        :job-detail="JobDetail"
        @click="toPositions"
      />
    </view>
  </view> -->
</template>

<script lang="ts" setup>
import FilterBar from "@/components/SearchAndFilter/FilterBar.vue";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import SearchBar from "@/components/SearchAndFilter/SearchBar.vue";
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const jobDetails = ref<CompanyInformation[]>([]);

const position = ref(true);

getCompanyInfos({}).then((res) => {
  jobDetails.value = res.data.body;
});

const checkClick = () => {
  position.value = !position.value;
};
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  margin-bottom: 5rpx;
  margin-left: 15%;
  font-size: 30rpx;
  line-height: 28rpx;
  letter-spacing: 6rpx;
  white-space: nowrap;

  .text-title {
    width: 50%;
  }
}

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
