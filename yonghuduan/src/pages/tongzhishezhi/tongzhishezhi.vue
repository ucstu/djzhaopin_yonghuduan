<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="通知设置"/>
    <view class="flex-col items-start bar-1">
      <text class="text">新消息通知</text>
    </view>
    <view class="flex-col items-start bar-2">
      <text class="text">声音</text>
    </view>
    <view class="flex-col items-start bar-3">
      <text class="text">振动</text>
    </view>
    <view class="flex-col items-start bar-4">
      <text class="text">勿扰模式</text>
    </view>
    <view class="justify-between bar-5">
      <view class="flex-col">
        <text class="text-disturb">勿扰时间</text>
        <text class="text-disturb-info">开启后，在指定时间内将不再接收消息推送</text>
      </view>
      <view class="flex-row group-disturb-time">
        <text class="text-disturb-time">{{ noDisturbTime }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383962808577.png"
          class="image-right" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const noDisturbTime = ref('22：00-7：00')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 632rpx;
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
  .bar-1 {
    padding: 36rpx 0 33rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 140rpx;
    border: solid 2rpx rgb(210, 210, 210);
  }
  .bar-2 {
    padding: 36rpx 0 34rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 250rpx;
    border: solid 2rpx rgb(210, 210, 210);
  }
  .bar-3 {
    padding: 36rpx 0 34rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 360rpx;
    border: solid 2rpx rgb(210, 210, 210);
  }
  .bar-4 {
    padding: 36rpx 0 34rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 490rpx;
    border: solid 2rpx rgb(210, 210, 210);
  }
  .bar-5 {
    padding: 22rpx 21rpx 16rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 602rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .group-disturb-time {
      margin-right: 2rpx;
      align-self: center;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 15rpx;
      white-space: nowrap;
      .text-disturb-time {
        margin: 3rpx 0 4rpx;
      }
      .image-right {
        margin-left: 13rpx;
        width: 13rpx;
        height: 21rpx;
      }
    }
    .text-disturb {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text-disturb-info {
      margin-top: 17rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
    }
  }
  .text {
    margin-left: 21rpx;
  }
}
</style>
