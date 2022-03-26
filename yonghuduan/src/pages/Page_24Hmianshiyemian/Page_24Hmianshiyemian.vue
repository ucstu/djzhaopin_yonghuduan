<template>
  <view class="flex-col page">
    <view class="group"></view>
    <view class="justify-between footer">
      <view class="flex-col items-center group_1">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274049751091.png"
          class="image"
        />
        <text class="text">首页</text>
      </view>
      <view class="flex-col items-center group_2">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274047124255.png"
          class="image"
        />
        <text class="text_1">24H面试</text>
      </view>
      <view class="flex-col items-center group_3">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274042906672.png"
          class="image"
        />
        <text>信息</text>
      </view>
      <view class="flex-col items-center group_4">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274055908202.png"
          class="image"
        />
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .group {
    flex: 1 1 auto;
    height: 1233rpx;
    overflow-y: auto;
  }
  .footer {
    padding: 9rpx 49rpx 11rpx 56rpx;
    overflow: hidden;
    height: 101rpx;
    border: solid 2rpx rgb(0, 0, 0);
    .group_1 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 76rpx;
      .text {
        margin-top: 3rpx;
      }
    }
    .group_2 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      height: 77rpx;
      .text_1 {
        margin-top: 4rpx;
      }
    }
    .group_3 {
      margin-top: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 72rpx;
    }
    .group_4 {
      margin-top: 3rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 74rpx;
    }
    .image {
      width: 54rpx;
      height: 54rpx;
    }
  }
}
</style>
