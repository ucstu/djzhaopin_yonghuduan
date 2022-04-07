<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="文件管理" />
    <view class="flex-row items-center group_1">
      <image src="@/static/icons/storage.png" class="image_1" />
      <text class="text_1">手机存储</text>
    </view>
    <text class="text_2">分类浏览</text>
    <view class="flex-row items-center group_2">
      <image src="@/static/icons/picture.png" class="image_2" />
      <text class="text_1">图片</text>
    </view>
    <view class="flex-row items-center group_2">
      <image src="@/static/icons/music.png" class="image_3" />
      <text class="text_1">音乐</text>
    </view>
    <view class="flex-row items-center group_2">
      <image src="@/static/icons/video.png" class="image_3" />
      <text class="text_1">视频</text>
    </view>
    <view class="flex-row items-center group_2">
      <image src="@/static/icons/document.png" class="image_2" />
      <text class="text_1">文档</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'


const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  height: 1334rpx;
  width: 750rpx;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .group_1 {
    width: 710rpx;
    height: 80rpx;
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    margin-top: 130rpx;
    margin-left: 40rpx;
    border-bottom: 2rpx solid rgb(230, 230, 230);
    .image_1 {
      border-radius: 10rpx;
      width: 60rpx;
      height: 60rpx;
    }
  }

  .group_2 {
    width: 710rpx;
    height: 80rpx;
    font-size: 25rpx;
    white-space: nowrap;
    margin-top: 30rpx;
    margin-left: 40rpx;
    border-bottom: 2rpx solid rgb(230, 230, 230);
    .image_2 {
      width: 60rpx;
      height: 60rpx;
    }
    .image_3 {
      border-radius: 100%;
      width: 60rpx;
      height: 60rpx;
    }
  }
  .text_1 {
    padding-left: 50rpx;
  }
  .text_2 {
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    margin-top: 20rpx;
    margin-left: 40rpx;
  }
}
</style>
