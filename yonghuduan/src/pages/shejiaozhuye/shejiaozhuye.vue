<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col section_1">
      <text class="text_2">你的社交主页</text>
      <text class="text_3">{{ socialHomepage }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const socialHomepage = ref('https://dribbble.com')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 1204rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  position: relative;
  .section_1 {
    padding: 23rpx 20rpx 19rpx;
    background-color: rgb(255, 255, 255);
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_2 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_3 {
      margin-top: 32rpx;
      color: rgba(0, 0, 0, 0.2);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
    }
  }
}
</style>
