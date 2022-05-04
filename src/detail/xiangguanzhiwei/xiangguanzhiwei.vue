<template>
  <SearchBar></SearchBar>
  <view class="justify-between about">
    <text class="justify-center text-title" @click="checkPosition">职位</text>
    <text class="justify-center text-title" @click="checkCompany">公司</text>
  </view>
  <FilterBar v-if="position"></FilterBar>
  <SearchAndFilter v-if="company"></SearchAndFilter>
  <view v-if="emptyShow" class="justify-center image">
    <image src="@/static/icons/nodata.svg" />
  </view>
</template>

<script lang="ts" setup>
import FilterBar from "@/components/SearchAndFilter/FilterBar.vue";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import SearchBar from "@/components/SearchAndFilter/SearchBar.vue";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const position = ref(false);
const company = ref(false);
const emptyShow = ref(false);

onLoad((e) => {
  if (e.data) {
    let data = parseInt(e.data);
    if (data) {
      if (data === 1) {
        company.value = true;
      } else {
        emptyShow.value = true;
      }
    } else {
      position.value = true;
    }
  }
});

const checkPosition = () => {
  position.value = true;
  company.value = false;
};

const checkCompany = () => {
  position.value = false;
  company.value = true;
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

.image {
  width: 100%;
  height: 100%;
}
</style>
