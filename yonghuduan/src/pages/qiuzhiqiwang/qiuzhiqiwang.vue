<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="求职期望"/>
    <view @click="view_4OnClick" class="justify-between section_1">
      <text class="text_1">期望职位</text>
      <view class="flex-row group_1">
        <text class="text_2">{{ job }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="justify-between section_2">
      <text class="text_3">期望月薪</text>
      <view class="flex-row group_2">
        <text class="text_4">{{ salary }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image_1"
        />
      </view>
    </view>
    <view @click="view_6OnClick" class="justify-between section_3">
      <text class="text_5">期望城市</text>
      <view class="flex-row group_3">
        <text class="text_6">{{ city }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const job=ref( '请选择')
 const salary=ref( '请选择')
 const city=ref( '请选择')
    const imageOnClick=()=> {
      // @ts-ignore
      uni.navigateBack()
    }
    const view_4OnClick=()=> {
      uni.navigateTo({ url: '/pages/zhiweileixing/zhiweileixing' })
    }
    const view_6OnClick=()=> {
      uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
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
    padding: 33rpx 11rpx 28rpx 21rpx;
    border-radius: 10rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      margin: 3rpx 0 6rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_1 {
      color: rgb(158, 149, 149);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      .text_2 {
        margin: 3rpx 0 6rpx;
      }
    }
  }
  .section_2 {
    padding: 33rpx 11rpx 28rpx 21rpx;
    border-radius: 10rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 240rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_3 {
      margin: 3rpx 0 6rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_2 {
      color: rgb(158, 149, 149);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      .text_4 {
        margin: 3rpx 0 6rpx;
      }
    }
  }
  .section_3 {
    padding: 33rpx 11rpx 28rpx 21rpx;
    border-radius: 10rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 350rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_5 {
      margin: 3rpx 0 6rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_3 {
      color: rgb(158, 149, 149);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      .text_6 {
        margin: 3rpx 0 6rpx;
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
  .image_1 {
    width: 35rpx;
    height: 35rpx;
  }
}
</style>
