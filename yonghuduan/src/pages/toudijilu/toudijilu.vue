<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="投递记录" />
    <view class="justify-between group_1">
      <text class="text_1">待查看</text>
      <text class="text_2">已查看</text>
      <text class="text_3">通过初筛</text>
      <text class="text_4">约面试</text>
      <text class="text_5">不合格</text>
    </view>
    <view class="flex-col list">
      <JobPanel
        class="list-item"
        :collectionPosition="deliveryRecord"
        :key="i"
        v-for="(deliveryRecord, i) in deliveryRecords"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
import JobPanel from '../../components/JobPanel/JobPanel.vue'
import { reactive } from 'vue';


const deliveryRecords = reactive([
  {
    jobDetail: {
      name: '前端开发实习生',
      areaAndRequirements: '江北区 | 在校/应届',
      educationalRequirements: '本科',
      directionOne: '后台开发',
      directionTwo: 'JAVA开发',
      companyLogoAddress:
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
      companyName: '字节跳动',
      companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
      salary: '4K - 8K',
      releaseDate: '2月28日'
    },
    left: '待查看',
  },
  {
    jobDetail: {
      name: '前端开发实习生',
      areaAndRequirements: '江北区 | 在校/应届',
      educationalRequirements: '本科',
      directionOne: '后台开发',
      directionTwo: 'JAVA开发',
      companyLogoAddress:
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
      companyName: '字节跳动',
      companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
      salary: '4K - 8K',
      releaseDate: '2月28日'
    },
    left: '待查看',
  },
])

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_13OnClick = () => {
  uni.navigateTo({ url: '/pages/index/index' })
}
const view_8OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_17OnClick = () => {
  uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 544rpx;
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
  .group_1 {
    padding-left: 14rpx;
    padding-right: 11rpx;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 137rpx;
    .text_1 {
      color: rgb(35, 193, 158);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_2 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_3 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_4 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_5 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
  }
  .list {
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 210rpx;
    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
