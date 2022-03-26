<template>
  <view @click="rootViewOnClick" class="justify-between component">
    <view class="flex-row group_1">
      <view class="flex-col items-center group_2">
        <image class="image" :src="avatarAddress" />
        <image class="image_1" :src="messageCount" />
      </view>
      <view class="flex-col group_3">
        <text class="text">{{ name }}</text>
        <text class="text_1">{{ message }}</text>
      </view>
    </view>
    <text class="text_2">{{ time }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


      const time=ref( '昨天')
      const avatarAddress=ref(
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635901980128.png')
      const messageCount=ref(
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301674203179834.png')
      const name=ref( '张三')
      const message=ref( '方便投递吗？')

    const rootViewOnClick=()=> {
      uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
    }
</script>

<style lang="scss" scoped>
.component {
  padding-left: 50rpx;
  padding-right: 48rpx;
  .group_1 {
    height: 76rpx;
    .group_2 {
      width: 82rpx;
      position: relative;
      .image {
        border-radius: 38rpx;
        width: 75rpx;
        height: 75rpx;
      }
      .image_1 {
        border-radius: 13rpx;
        width: 22rpx;
        height: 22rpx;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .group_3 {
      margin: 7rpx -36rpx 4rpx 18rpx;
      .text {
        color: rgb(0, 0, 0);
        font-size: 28rpx;
        line-height: 25rpx;
        white-space: nowrap;
      }
      .text_1 {
        margin-top: 19rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 24rpx;
        line-height: 22rpx;
        white-space: nowrap;
      }
    }
  }
  .text_2 {
    align-self: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 22rpx;
    line-height: 20rpx;
    white-space: nowrap;
  }
}
</style>
