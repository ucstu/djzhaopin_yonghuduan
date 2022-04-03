<template>
  <view class="flex-col component">
    <CompanyDetail @click="view_4OnClick" />
    <view class="flex-row group_4">
      <view class="flex-col items-center text-wrapper_1">
        <text>{{ func }}</text>
      </view>
      <view @click="view_10OnClick" class="flex-col items-center image-wrapper">
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
import CompanyDetail from '@/components/CompanyDetail/CompanyDetail.vue'


      const logoAddress=ref('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png')
      const name=ref( '字节跳动')
      const cityAndInfo=ref( '杭州 | 上市公司 | 2000人以上 | 软件服务')
      const func=ref( '取消关注')
      const recruitmentPosition=ref( '200')
      const benefitOne=ref( '技能培训')
      const benefitTwo=ref( '年薪双假')
      const benefitThree=ref( '带薪年假')
    const view_4OnClick=()=> {
      uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
    }
    const view_10OnClick=()=> {
      uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
    }
</script>

<style lang="scss" scoped>
.component {
  padding-top: 23rpx;
  border-radius: 5rpx;
  overflow: hidden;
  height: 235rpx;
  border: solid 2rpx rgb(229, 229, 229);
  .group_4 {
    margin-top: 26rpx;
    color: rgb(163, 154, 154);
    font-size: 25rpx;
    line-height: 23rpx;
    letter-spacing: 2.5rpx;
    white-space: nowrap;
    .text-wrapper_1 {
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
