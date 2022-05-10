<template>
  <view class="flex-row user-bubble-box">
    <image :src="VITE_CDN_URL + hrInfo.avatarUrl" class="img" />
    <view class="flex-row">
      <view class="user-box"></view>
      <view class="items-center bubble-box">{{ mes }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;

defineProps({
  hrInfo: {
    type: Object,
    default: () => ({}),
  },
  mes: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.user-bubble-box {
  width: auto;
  height: auto;
  margin-top: 30rpx;
  margin-left: 20rpx;

  .img {
    width: 95rpx;
    height: 95rpx;
    border-radius: 50%;
  }

  .bubble-box {
    max-width: 450rpx;
    height: auto;
    min-height: 80rpx;
    padding: 0 20rpx;
    letter-spacing: normal;
    word-break: break-all;
    background-color: rgb(39 156 234);
    border-radius: 15rpx;
  }

  .user-box {
    width: 0;
    height: 0;
    margin-top: 10rpx;
    border: 15rpx solid;
    border-color: transparent rgb(39 156 234) transparent transparent;
  }
}
</style>
