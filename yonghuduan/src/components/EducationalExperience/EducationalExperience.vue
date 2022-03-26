<template>
  <view @click="rootViewOnClick" class="flex-col component">
    <text class="text">{{ school }}</text>
    <view class="justify-between group_1">
      <text class="text_1">{{ levelAndProfession }}</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724261238979.png"
        class="image"
      />
    </view>
    <text class="text_2">{{ date }}</text>
  </view>
</template>

<script lang="ts" setup>import { ref } from 'vue'


    const  school= ref( '电子科技大学')
    const  date= ref( '2019.09 - 2022.06')
    const  levelAndProfession= ref( '本科 | 计算机科学与技术')

    const rootViewOnClick=()=> {
      uni.navigateTo({ url: '/pages/jiaoyujingli/jiaoyujingli' })
    }
</script>

<style lang="scss" scoped>
.component {
  padding: 3rpx 0 7rpx;
  .text {
    margin-left: 4rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
  .group_1 {
    margin-top: 13rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 24rpx;
    white-space: nowrap;
    .text_1 {
      margin-top: 5rpx;
    }
    .image {
      margin-right: 18rpx;
      width: 18rpx;
      height: 29rpx;
    }
  }
  .text_2 {
    margin-top: 18rpx;
    color: rgba(0, 0, 0, 0.51);
    font-size: 25rpx;
    line-height: 18rpx;
    white-space: nowrap;
  }
}
</style>
