<template>
  <view class="flex-row items-center justify-end user-bubble-box">
    <view class="items-center bubble-box">hello</view>
    <view class="user-box"></view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.user-bubble-box {
  width: auto;
  height: auto;

  .bubble-box {
    max-width: 500rpx;
    height: auto;
    min-height: 80rpx;
    background-color: rgb(39 156 234);
    border-radius: 15rpx;
  }

  .user-box {
    width: 0;
    height: 0;
    border: 15rpx solid;
    border-color: transparent transparent transparent rgb(39 156 234);
  }
}
</style>
