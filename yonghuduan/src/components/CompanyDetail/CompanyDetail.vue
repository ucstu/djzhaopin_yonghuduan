<template>
  <view @click="rootViewOnClick" class="flex-row component">
    <image class="image" :src="logoAddress" />
    <view class="flex-col group_1">
      <text class="text">{{ name }}</text>
      <view class="flex-row group_2">
        <text>在招职位</text>
        <text class="text_2">{{ recruitmentPosition }}</text>
      </view>
      <text class="text_3">{{ cityAndInfo }}</text>
      <view class="flex-row group_3">
        <view class="left-text-wrapper flex-col items-center">
          <text>{{ benefitOne }}</text>
        </view>
        <view class="left-text-wrapper flex-col items-center view_1">
          <text>{{ benefitTwo }}</text>
        </view>
        <view class="flex-col items-center text-wrapper">
          <text>{{ benefitThree }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return {
      logoAddress:
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png',
      name: '字节跳动',
      cityAndInfo: '杭州 | 上市公司 | 2000人以上 | 软件服务',
      recruitmentPosition: '200',
      benefitOne: '技能培训',
      benefitTwo: '年薪双假',
      benefitThree: '带薪年假',
    }
  },
  methods: {
    rootViewOnClick() {
      uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
    },
  },
}
</script>

<style lang="scss" scoped>
.component {
  padding: 0 21rpx;
  .image {
    margin: 7rpx 0 3rpx;
    border-radius: 5rpx;
    width: 151rpx;
    height: 101rpx;
  }
  .group_1 {
    margin-left: 30rpx;
    flex: 1 1 auto;
    .text {
      margin-left: 2rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-top: 8rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 20rpx;
      line-height: 15rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
      .text_2 {
        margin-left: 19rpx;
        margin-top: 2rpx;
      }
    }
    .text_3 {
      margin-top: 6rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 20rpx;
      line-height: 20rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 3rpx;
      align-self: flex-start;
      color: rgba(0, 0, 0, 0.3);
      font-size: 16rpx;
      line-height: 15rpx;
      letter-spacing: 3.2rpx;
      white-space: nowrap;
      .left-text-wrapper {
        flex: 1 1 120rpx;
        padding: 7rpx 0 9rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 120rpx;
        height: 30rpx;
      }
      .view_1 {
        margin-left: 18rpx;
      }
      .text-wrapper {
        margin-left: 18rpx;
        padding: 7rpx 0 9rpx;
        flex: 1 1 120rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        width: 120rpx;
        height: 30rpx;
      }
    }
  }
}
</style>
