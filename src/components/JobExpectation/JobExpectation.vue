<template>
  <view @click="rootViewOnClick" class="flex-col component">
    <view class="flex-row">
      <text class="text">{{ name }}</text>
      <text class="text_1">{{ salary }}</text>
    </view>
    <view class="justify-between group_2">
      <text class="text_2">{{ direction }}</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724340497012.png"
        class="image"
      />
    </view>
    <view class="flex-row group_3">
      <text>{{ city }}</text>
      <text class="text_4">{{ entryTime }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


    const  name=ref( '前段工程师')
    const  salary=ref( '8K-9K')
    const  direction=ref( 'React')
    const  city=ref( '重庆')
    const  entryTime=ref( '1个月内入职')

    const rootViewOnClick=()=> {
      uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
    }
</script>

<style lang="scss" scoped>
.component {
  padding: 3rpx 0 5rpx;
  .group_2 {
    margin-top: 13rpx;
    padding: 0 2rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 18rpx;
    white-space: nowrap;
    .text_2 {
      margin: 8rpx 0 4rpx;
    }
    .image {
      margin-right: 17rpx;
      width: 17rpx;
      height: 30rpx;
    }
  }
  .group_3 {
    margin-top: 14rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    .text_4 {
      margin-left: 13rpx;
    }
  }
  .text {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
  .text_1 {
    margin: 4rpx 0 2rpx 15rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 22rpx;
    white-space: nowrap;
  }
}
</style>
