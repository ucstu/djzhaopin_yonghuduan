<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="我的账户" />
    <view class="justify-between section-1">
      <text class="text-1">手机号</text>
      <view class="flex-row group-1">
        <text class="text-2">{{ phoneNumber }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383978236794.png"
          class="image-1"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>注销账号</text>
    </view>
  </view>
</template>
<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";

const phoneNumber = ref("173****6235");
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 1334rpx;
  padding-bottom: 50rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .section-1 {
    position: absolute;
    top: 130rpx;
    right: 20rpx;
    left: 20rpx;
    height: 100rpx;
    padding: 34rpx 16rpx 30rpx 21rpx;
    overflow: hidden;
    border: solid 2rpx rgb(210 210 210);
    border-radius: 5rpx;

    .text-1 {
      margin-bottom: 4rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-1 {
      font-size: 25rpx;
      line-height: 18rpx;
      color: rgb(0 0 0 / 50%);
      white-space: nowrap;

      .text-2 {
        margin: 6rpx 0 8rpx;
      }

      .image-1 {
        width: 20rpx;
        height: 32rpx;
        margin-left: 22rpx;
      }
    }
  }

  .button {
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    width: 550rpx;
    height: 80rpx;
    padding: 25rpx 0;
    overflow: hidden;
    font-size: 30rpx;
    line-height: 28rpx;
    color: rgb(255 255 255);
    letter-spacing: 6rpx;
    white-space: nowrap;
    background-color: rgb(35 193 158);
    border: solid 2rpx rgb(0 0 0 / 20%);
    border-radius: 15rpx;
    transform: translateX(-50%);
  }
}
</style>
