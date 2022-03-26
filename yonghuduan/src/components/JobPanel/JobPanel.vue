<template>
  <view class="flex-col component">
    <JobDetail @click="view_4OnClick" />
    <view class="flex-row group_8">
      <view class="flex-col items-center text-wrapper_2">
        <text>{{ state }}</text>
      </view>
      <view @click="view_11OnClick" class="flex-col items-center image-wrapper">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303739866250431.png"
          class="image_1"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import JobDetail from '../../components/JobDetail/JobDetail.vue'


    const  salary=ref( '4K - 8K')
    const  releaseDate=ref( '2月28日')
    const  state=ref( '待面试')
    const  name=ref( '前端开发实习生')
    const  companyLogoAddress=ref(
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png')
    const  areaAndRequirements=ref( '江北区 | 在校/应届')
    const  educationalRequirements=ref( '本科')
    const  companyName=ref( '字节跳动')
    const  companyInfo=ref( 'D轮及以上 | 2000人以上 | 内容资讯')
    const  directionOne=ref( '后台开发')
    const  directionTwo=ref( 'JAVA开发')

    const view_4OnClick=()=> {
      uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
    }
    const view_11OnClick=()=> {
      uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
    }
</script>

<style lang="scss" scoped>
.component {
  padding-top: 20rpx;
  border-radius: 5rpx;
  overflow: hidden;
  height: 280rpx;
  border: solid 2rpx rgb(229, 229, 229);
  .group_8 {
    margin-top: 20rpx;
    color: rgb(163, 154, 154);
    font-size: 25rpx;
    line-height: 23rpx;
    letter-spacing: 2.5rpx;
    white-space: nowrap;
    .text-wrapper_2 {
      padding: 25rpx 0 24rpx;
      flex: 1 1 335rpx;
      overflow: hidden;
      height: 75rpx;
      border: solid 2rpx rgb(229, 229, 229);
    }
    .image-wrapper {
      padding: 21rpx 0 17rpx;
      flex: 1 1 335rpx;
      overflow: hidden;
      height: 75rpx;
      border: solid 2rpx rgb(229, 229, 229);
      .image_1 {
        width: 91rpx;
        height: 33rpx;
      }
    }
  }
}
</style>
