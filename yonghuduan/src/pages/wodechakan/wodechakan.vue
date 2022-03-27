<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="我的查看"/>
    <view class="flex-col list">
      <JobDetail @click="view_2OnClick" class="list-item" :key="i" v-for="(myview, i) in myViews" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
import JobDetail from '../../components/JobDetail/JobDetail.vue'
import { reactive } from 'vue'
const myViews = reactive([
  {
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
    releaseDate: '2月28日',
  },
  {
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
    releaseDate: '2月28日',
  },
  {
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
    releaseDate: '2月28日',
  },
  {
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
    releaseDate: '2月28日',
  },
])

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_2OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_3OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_4OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_5OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
</script>
<style lang="scss" scoped>
.page {
  padding-bottom: 1209rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  position: relative;
  .header {
    position: relative;
  }
  .list {
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 125rpx;
    .list-item {
      margin-top: 20rpx;
    }
  }
}
</style>
