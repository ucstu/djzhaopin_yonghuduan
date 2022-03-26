<template>
  <view @click="rootViewOnClick" class="flex-col component">
    <view class="flex-row">
      <text class="text">{{ company }}</text>
      <text class="text_1">{{ direction }}</text>
    </view>
    <view class="justify-between group_2">
      <text class="text_2">{{ work }}</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724340497012.png"
        class="image"
      />
    </view>
    <text class="text_3">{{ date }}</text>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return {
      date: '2020.03 - 2021.03',
      company: '命通科技',
      direction: '后端工程师',
      work: '开发后台',
    }
  },
  methods: {
    rootViewOnClick() {
      uni.navigateTo({ url: '/pages/gongzuojingli/gongzuojingli' })
    },
  },
}
</script>

<style lang="scss" scoped>
.component {
  padding: 3rpx 0 7rpx;
  .group_2 {
    margin-top: 13rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    .text_2 {
      margin: 5rpx 0 3rpx;
    }
    .image {
      margin-right: 19rpx;
      width: 17rpx;
      height: 30rpx;
    }
  }
  .text_3 {
    margin-top: 17rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 18rpx;
    white-space: nowrap;
  }
  .text {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
  .text_1 {
    margin-left: 15rpx;
    margin-top: 2rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
}
</style>
