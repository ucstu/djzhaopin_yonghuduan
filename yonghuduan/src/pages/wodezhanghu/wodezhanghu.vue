<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="justify-between section_1">
      <text class="text_1">手机号</text>
      <view class="flex-row group_1">
        <text class="text_2">{{ phoneNumber }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383978236794.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>注销账号</text>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const phoneNumber = ref('173****6235')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}

</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .section_1 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      margin-bottom: 4rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_1 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 18rpx;
      white-space: nowrap;
      .text_2 {
        margin: 6rpx 0 8rpx;
      }
      .image_1 {
        margin-left: 22rpx;
        width: 20rpx;
        height: 32rpx;
      }
    }
  }
  .button {
    padding: 25rpx 0 25rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    width: 550rpx;
    height: 80rpx;
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
    border: solid 2rpx rgba(0, 0, 0, 0.2);
  }
}
</style>
