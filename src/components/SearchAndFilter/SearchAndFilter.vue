<template>
  <SearchBar></SearchBar>
  <view class="justify-between about">
    <text @click="text_2OnClick">相关职位</text>
    <text @click="text_3OnClick">相关公司</text>
  </view>
  <FilterBar></FilterBar>
</template>

<script lang="ts" setup>
import FilterBar from "./FilterBar.vue";
import SearchBar from "./SearchBar.vue";
const text_2OnClick = () => {
  uni.navigateTo({ url: "/detail/xiangguanzhiwei/xiangguanzhiwei" });
};
const text_3OnClick = () => {
  uni.navigateTo({ url: "/detail/xiangguangongsi/xiangguangongsi" });
};
</script>

<style lang="scss" scoped>
.about {
  padding-right: 106rpx;
  padding-left: 111rpx;
  margin-bottom: 5rpx;
  font-size: 30rpx;
  line-height: 28rpx;
  color: rgb(0 0 0);
  letter-spacing: 6rpx;
  white-space: nowrap;
}
</style>
