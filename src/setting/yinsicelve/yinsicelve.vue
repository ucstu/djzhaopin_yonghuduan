<template>
  <NavigationBar class="header" title="隐私政策" />
  <view class="flex-col items-start page"> </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 57rpx 0 1242rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    margin-left: 40rpx;
  }
}
</style>
