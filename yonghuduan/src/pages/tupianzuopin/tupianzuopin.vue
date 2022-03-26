<template>
  <view class="flex-row page">
    <NavigationBar class="group" />
    <view class="flex-col items-center equal-division-item">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303738707613285.png"
        class="image_1"
      />
      <text class="text_2">上传图片</text>
    </view>
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303737537221255.png"
      class="equal-division-item_1"
    />
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303737537221255.png"
      class="equal-division-item_2"
    />
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const imageOnClick=()=> {
  // @ts-ignore
      uni.navigateBack()
    }
</script>

<style lang="scss" scoped>
.page {
  padding: 59rpx 20rpx 1004rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .group {
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 59rpx;
  }
  .equal-division-item {
    padding: 60rpx 0 23rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18rpx;
    line-height: 17rpx;
    white-space: nowrap;
    background-color: rgba(229, 229, 229, 0.5);
    border-radius: 5rpx;
    overflow: hidden;
    width: 200rpx;
    height: 200rpx;
    position: absolute;
    left: 20rpx;
    top: 130rpx;
    .image_1 {
      width: 80rpx;
      height: 80rpx;
    }
    .text_2 {
      margin-top: 21rpx;
    }
  }
  .equal-division-item_1 {
    width: 200rpx;
    height: 200rpx;
    position: absolute;
    top: 130rpx;
    left: 50%;
    transform: translateX(-50%);
  }
  .equal-division-item_2 {
    width: 200rpx;
    height: 200rpx;
    position: absolute;
    right: 20rpx;
    top: 130rpx;
  }
}
</style>
