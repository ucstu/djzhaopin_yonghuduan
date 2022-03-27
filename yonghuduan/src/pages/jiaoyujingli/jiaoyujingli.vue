<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="编辑教育经历"/>
    <view class="flex-col section_1">
      <text class="text_1">学校名称</text>
      <text class="text_2">{{ schoolName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_3">学历</text>
      <text class="text_4">{{ education }}</text>
    </view>
    <view class="flex-col section_3">
      <text class="text_5">专业名称</text>
      <text class="text_6">{{ subject }}</text>
    </view>
    <view class="flex-col section_4">
      <text class="text_7">在校时间</text>
      <view class="justify-between group_1">
        <text>{{ startTime }}</text>
        <text class="text_9">{{ overTime }}</text>
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
import { ref } from 'vue'


const schoolName = ref('请填写')
const education = ref('请选择')
const subject = ref('请填写')
const startTime = ref('入学时间')
const overTime = ref('结束时间')

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
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_1 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_2 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_2 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 275rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_3 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_4 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_3 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 420rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_5 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_4 {
    padding: 23rpx 0 24rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 565rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_7 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 26rpx;
      padding: 0 100rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_9 {
        margin-right: 11rpx;
      }
    }
  }
  .button {
    padding: 25rpx 0 29rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
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
  }
}
</style>
