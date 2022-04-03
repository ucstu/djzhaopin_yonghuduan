<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="设置密码" />
    <view class="flex-col section_1">
      <text class="text_1">设置密码</text>
      <view class="flex-row group_1">
        <text>{{ password }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303756560386841.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_2">
      <text class="text_3">确认密码</text>
      <text class="text_4">{{ confirmPassword }}</text>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'


const confirmPassword = ref('请再次输入密码')
const password = ref('8~16位大小写字母、数字、特殊字符组成')
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
    padding: 22rpx 0 31rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 150rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 44rpx;
      color: rgba(0, 0, 0, 0.2);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      .image_1 {
        margin: 2rpx 22rpx 0 67rpx;
        width: 35rpx;
        height: 25rpx;
      }
    }
  }
  .section_2 {
    padding: 22rpx 21rpx 32rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 150rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 300rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_3 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_4 {
      margin-top: 44rpx;
      color: rgba(0, 0, 0, 0.2);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
  }
  .button {
    padding: 26rpx 0 28rpx;
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
