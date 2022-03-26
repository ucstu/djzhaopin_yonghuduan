<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <text class="text_1">匿名展示</text>
    <view class="justify-between group_1">
      <view class="flex-row">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303752534959571.png"
          class="image_1"
        />
        <view class="right-group">
          <text class="text_2">{{ userName }}</text>
          <text class="text_3">（实名展示）</text>
        </view>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303752635769273.png"
        class="image_3"
      />
    </view>
    <view class="flex-row group_3">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303752534959571.png"
        class="image_1"
      />
      <view class="right-group">
        <text class="text_5">张先生</text>
        <text class="text_3">（匿名展示）</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
const userName = ref('张三')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
},
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 979rpx;
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
  .text_1 {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    position: absolute;
    left: 43rpx;
    top: 148rpx;
  }
  .group_1 {
    position: absolute;
    left: 35rpx;
    right: 35rpx;
    top: 205rpx;
    .image_3 {
      margin-right: 17rpx;
      align-self: center;
      width: 31rpx;
      height: 31rpx;
    }
  }
  .group_3 {
    position: absolute;
    left: 35rpx;
    right: 35rpx;
    top: 295rpx;
  }
  .image_1 {
    border-radius: 60rpx;
    width: 60rpx;
    height: 60rpx;
  }
  .right-group {
    margin-left: 27rpx;
    align-self: center;
    line-height: 24rpx;
    white-space: nowrap;
    height: 25rpx;
    .text_5 {
      color: rgb(0, 0, 0);
      font-size: 28rpx;
      line-height: 26rpx;
    }
    .text_3 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 26rpx;
      line-height: 25rpx;
    }
    .text_2 {
      color: rgb(0, 0, 0);
      font-size: 28rpx;
      line-height: 25rpx;
    }
  }
}
</style>
