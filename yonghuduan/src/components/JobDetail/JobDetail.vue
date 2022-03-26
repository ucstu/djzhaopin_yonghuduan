<template>
  <view @click="rootViewOnClick" class="justify-between">
    <view class="flex-col">
      <view class="flex-col group_2">
        <text class="text">{{ name }}</text>
        <view class="flex-row group_3">
          <text>{{ areaAndRequirements }}</text>
          <text class="text_2">{{ educationalRequirements }}</text>
        </view>
        <view class="flex-row group_4">
          <view class="flex-col text-wrapper">
            <text class="text_3">{{ directionOne }}</text>
          </view>
          <view class="flex-col text-wrapper_1">
            <text class="text_4">{{ directionTwo }}</text>
          </view>
        </view>
      </view>
      <view class="flex-row group_5">
        <image class="image" :src="companyLogoAddress" />
        <view class="flex-col group_6">
          <text class="text_5">{{ companyName }}</text>
          <text class="text_6">{{ companyInfo }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col items-end group_7">
      <text class="text_7">{{ salary }}</text>
      <text class="text_8">{{ releaseDate }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const salary = ref('4K - 8K')
const releaseDate = ref('2月28日')
const name = ref('前端开发实习生')
const companyLogoAddress = ref('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png')
const areaAndRequirements = ref('江北区 | 在校/应届')
const educationalRequirements = ref('本科')
const companyName = ref('字节跳动')
const companyInfo = ref('D轮及以上 | 2000人以上 | 内容资讯')
const directionOne = ref('后台开发')
const directionTwo = ref('JAVA开发')

const rootViewOnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
</script>

<style lang="scss" scoped>
.group_7 {
  padding: 5rpx 0 3rpx;
  align-self: center;
  height: 54rpx;
  .text_7 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 18rpx;
    white-space: nowrap;
  }
  .text_8 {
    margin-top: 14rpx;
    color: rgb(163, 154, 154);
    font-size: 16rpx;
    line-height: 14rpx;
    white-space: nowrap;
  }
}
.group_2 {
  align-self: flex-start;
  .text {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
  .group_3 {
    margin-top: 12rpx;
    color: rgb(163, 154, 154);
    font-size: 16rpx;
    line-height: 15rpx;
    white-space: nowrap;
    .text_2 {
      margin-left: 4rpx;
      margin-right: 13rpx;
    }
  }
  .group_4 {
    margin-top: 7rpx;
    align-self: flex-start;
    color: rgba(0, 0, 0, 0.3);
    font-size: 16rpx;
    line-height: 15rpx;
    white-space: nowrap;
    .text-wrapper {
      padding: 6rpx 0 10rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 30rpx;
      .text_3 {
        margin-left: 9rpx;
        margin-right: 5rpx;
      }
    }
    .text-wrapper_1 {
      margin-left: 10rpx;
      padding: 7rpx 0 9rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 30rpx;
      .text_4 {
        margin-left: 5rpx;
        margin-right: 2rpx;
      }
    }
  }
}
.group_5 {
  padding-top: 8rpx;
  .image {
    border-radius: 5rpx;
    width: 101rpx;
    height: 68rpx;
  }
  .group_6 {
    margin-left: 11rpx;
    align-self: center;
    .text_5 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-top: 12rpx;
      color: rgba(163, 154, 154, 0.7);
      font-size: 16rpx;
      line-height: 16rpx;
      white-space: nowrap;
    }
  }
}
</style>
