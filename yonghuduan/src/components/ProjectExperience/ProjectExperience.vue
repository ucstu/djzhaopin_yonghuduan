<template>
  <view @click="rootViewOnClick" class="flex-col component">
    <text class="text">{{ project }}</text>
    <view class="justify-between group_1">
      <view class="flex-col group_2">
        <text class="text_1">{{ date }}</text>
        <text class="text_2">{{ work }}</text>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724261238979.png"
        class="image"
      />
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return { project: 'LOL', date: '2020.02-2021.06', work: '完成召唤兽' }
  },
  methods: {
    rootViewOnClick() {
      uni.navigateTo({ url: '/pages/xiangmujingli/xiangmujingli' })
    },
  },
}
</script>

<style lang="scss" scoped>
.component {
  padding: 6rpx 0 7rpx;
  .text {
    margin-left: 3rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 22rpx;
    white-space: nowrap;
  }
  .group_1 {
    margin-top: 16rpx;
    .group_2 {
      margin-top: 3rpx;
      .text_1 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 30rpx;
        line-height: 22rpx;
        white-space: nowrap;
      }
      .text_2 {
        margin-top: 15rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
      }
    }
    .image {
      margin-right: 18rpx;
      width: 18rpx;
      height: 29rpx;
    }
  }
}
</style>
