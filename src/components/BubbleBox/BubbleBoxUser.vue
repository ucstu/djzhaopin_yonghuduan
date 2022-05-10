<template>
  <view class="flex-row justify-end user-bubble-box">
    <view class="flex-row">
      <view class="items-center bubble-box">{{ mes }}</view>
      <view class="user-box"></view>
    </view>
    <image :src="VITE_CDN_URL + store.userInformation.avatarUrl" class="img" />
  </view>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const store = useMainStore();

defineProps({
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
  margin-right: 20rpx;

  .img {
    width: 95rpx;
    height: 95rpx;
    border-radius: 50%;
  }

  .bubble-box {
    max-width: 450rpx;
    min-height: 80rpx;
    max-height: 600rpx;
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
    border-color: transparent transparent transparent rgb(39 156 234);
  }
}
</style>
