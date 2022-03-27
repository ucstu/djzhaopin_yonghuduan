<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="版本更新"/>
    <view class="flex-col main">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383979520523.png"
        class="logo"
      />
      <text class="version">{{ version }}</text>
      <view class="justify-between bar-text">
        <text class="text_1">版本更新</text>
        <text class="text_2">{{ newVersion }}</text>
      </view>
      <view class="bar-arrow justify-between">
        <text class="text_3">新手指南</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
          class="image_1"
        />
      </view>
      <view class="bar-arrow justify-between">
        <text class="text_3">经营资质</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col footer">
      <view class="protocol-strategy">
        <text @click="text_7OnClick" class="text-protocol">《东江网用户协议》</text>
        <text class="text_6">和</text>
        <text @click="text_9OnClick" class="text-strategy">《东江网隐私政策》</text>
      </view>
      <view class="justify-center copyright-c">
        <text>东江网</text>
        <text class="right">版权所有</text>
      </view>
      <text class="copyright-e">Copyright 2022-2222 Dongjiang. All Rights Reserved</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const version = ref('当前版本 1.0.0')
const newVersion = ref('无新版')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}

const text_7OnClick = () => {
  uni.navigateTo({ url: '/pages/yonghuxieyi/yonghuxieyi' })
}
const text_9OnClick = () => {
  uni.navigateTo({ url: '/pages/yinsicelve/yinsicelve' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 26rpx;
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
  .main {
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 110rpx;
    .logo {
      align-self: center;
      width: 200rpx;
      height: 200rpx;
    }
    .version {
      margin-top: 22rpx;
      align-self: center;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .bar-text {
      margin-top: 23rpx;
      padding: 36rpx 21rpx 34rpx;
      border-radius: 5rpx;
      overflow: hidden;
      height: 100rpx;
      border: solid 2rpx rgb(210, 210, 210);
      .text_1 {
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
      }
      .text_2 {
        margin-right: 7rpx;
        margin-top: 2rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
    }
    .bar-arrow {
      margin-top: 8rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      padding: 34rpx 16rpx 30rpx 21rpx;
      border-radius: 5rpx;
      overflow: hidden;
      height: 100rpx;
      border: solid 2rpx rgb(210, 210, 210);
      .text_3 {
        margin-bottom: 4rpx;
      }
      .image_1 {
        width: 20rpx;
        height: 32rpx;
      }
    }
  }
  .footer {
    padding-left: 67rpx;
    padding-right: 58rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 26rpx;
    .protocol-strategy {
      align-self: center;
      line-height: 22rpx;
      white-space: nowrap;
      .text-protocol {
        color: rgb(35, 193, 158);
        font-size: 24rpx;
        line-height: 23rpx;
      }
      .text_6 {
        color: rgba(0, 0, 0, 0.6);
        font-size: 24rpx;
        line-height: 23rpx;
      }
      .text-strategy {
        color: rgb(35, 193, 158);
        font-size: 24rpx;
        line-height: 23rpx;
      }
    }
    .copyright-c {
      margin-top: 17rpx;
      color: rgba(0, 0, 0, 0.3);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .right {
        margin-left: 12rpx;
      }
    }
    .copyright-e {
      margin-top: 18rpx;
      align-self: center;
      color: rgba(0, 0, 0, 0.3);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
    }
  }
}
</style>
