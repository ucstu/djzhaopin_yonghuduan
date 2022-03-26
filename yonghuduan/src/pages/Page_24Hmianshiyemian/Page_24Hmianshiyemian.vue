<template>
  <view class="flex-col page">
    <view class="group"></view>
  </view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .group {
    flex: 1 1 auto;
    height: 1233rpx;
    overflow-y: auto;
  }
  .footer {
    padding: 9rpx 49rpx 11rpx 56rpx;
    overflow: hidden;
    height: 101rpx;
    border: solid 2rpx rgb(0, 0, 0);
    .group_1 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 76rpx;
      .text {
        margin-top: 3rpx;
      }
    }
    .group_2 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      height: 77rpx;
      .text_1 {
        margin-top: 4rpx;
      }
    }
    .group_3 {
      margin-top: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 72rpx;
    }
    .group_4 {
      margin-top: 3rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 74rpx;
    }
    .image {
      width: 54rpx;
      height: 54rpx;
    }
  }
}
</style>
