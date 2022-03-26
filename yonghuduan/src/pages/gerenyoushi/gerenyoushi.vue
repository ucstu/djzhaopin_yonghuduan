<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <text class="text_2">个人优势</text>
    <view class="flex-col group_1">
      <text>写下你最擅长的事情，展示你的特别之处，分享你在</text>
      <text>工作中取得的成绩</text>
    </view>
    <view class="flex-col section_1">
      <text class="text_5">个人优势主要是关于你的能力，特长和成就</text>
      <text class="text_6">{{ personalAdvantage }}</text>
      <text class="text_7">也可以简单的说说你的求职目标</text>
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      personalAdvantage: '你可以通过描述你的岗位来突出你真正擅长的东西。',
    }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 604rpx;
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
  .text_2 {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 128rpx;
  }
  .group_1 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 30rpx;
    letter-spacing: 5rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    right: 20rpx;
    top: 176rpx;
  }
  .section_1 {
    padding: 21rpx 20rpx 341rpx;
    background-color: rgba(229, 229, 229, 0.5);
    border-radius: 5rpx;
    overflow: hidden;
    height: 450rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 280rpx;
    .text_5 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-top: 22rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 24rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
    .text_7 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 24rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
  }
}
</style>
