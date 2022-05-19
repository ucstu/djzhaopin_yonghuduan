<template>
  <NavigationBar title="文件管理" />
  <view class="flex-col page">
    <view class="flex-row items-center group-1">
      <image src="@/static/icons/storage.png" class="image-1" />
      <text class="text-1">手机存储</text>
    </view>
    <text class="text-2">分类浏览</text>
    <view class="flex-row items-center group-2" @click="chooseImage">
      <image src="@/static/icons/picture.png" class="image-2" />
      <text class="text-1">图片</text>
    </view>
    <view class="flex-row items-center group-2">
      <image src="@/static/icons/music.png" class="image-3" />
      <text class="text-1">音乐</text>
    </view>
    <view class="flex-row items-center group-2">
      <image src="@/static/icons/video.png" class="image-3" />
      <text class="text-1">视频</text>
    </view>
    <view class="flex-row items-center group-2">
      <image src="@/static/icons/document.png" class="image-2" />
      <text class="text-1">文档</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";

const chooseImage = () => {
  uni.chooseImage({
    success: (res) => {
      const tempFilePath = res.tempFilePaths;
    },
  });
};
</script>

<style lang="scss" scoped>
.page {
  overflow-y: auto;

  .group-1 {
    width: 710rpx;
    height: 80rpx;
    margin-left: 40rpx;
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    border-bottom: 2rpx solid rgb(230 230 230);

    .image-1 {
      width: 60rpx;
      height: 60rpx;
      border-radius: 10rpx;
    }
  }

  .group-2 {
    width: 710rpx;
    height: 80rpx;
    margin-top: 30rpx;
    margin-left: 40rpx;
    font-size: 25rpx;
    white-space: nowrap;
    border-bottom: 2rpx solid rgb(230 230 230);

    .image-2 {
      width: 60rpx;
      height: 60rpx;
    }

    .image-3 {
      width: 60rpx;
      height: 60rpx;
      border-radius: 100%;
    }
  }

  .text-1 {
    padding-left: 50rpx;
  }

  .text-2 {
    margin-top: 20rpx;
    margin-left: 40rpx;
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
}
</style>
