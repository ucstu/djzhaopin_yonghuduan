<template>
  <SearchBar></SearchBar>
  <view class="justify-between about">
    <text class="justify-center text-title" @click="checkClick">职位</text>
    <text class="justify-center text-title" @click="checkClick">公司</text>
  </view>
  <FilterBar v-if="position"></FilterBar>
  <SearchAndFilter v-if="!position"></SearchAndFilter>
</template>

<script lang="ts" setup>
import FilterBar from "@/components/SearchAndFilter/FilterBar.vue";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import SearchBar from "@/components/SearchAndFilter/SearchBar.vue";
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const jobDetails = ref<CompanyInformation[]>([]);

const position = ref(true);

onLoad((e) => {
  if (e.data) {
    let data = parseInt(e.data);
    if (data) {
      position.value = true;
    } else {
      position.value = false;
    }
  }
});

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
