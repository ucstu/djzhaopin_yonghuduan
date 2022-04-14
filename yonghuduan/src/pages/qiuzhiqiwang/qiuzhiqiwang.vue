<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="求职期望" />
    <view class="justify-between section-1" @click="view_4OnClick">
      <text class="text-1">期望职位</text>
      <view class="flex-row group-1">
        <text class="text-2">{{ job }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image-1"
        />
      </view>
    </view>
    <view class="justify-between section-2">
      <text class="text-3">期望月薪</text>
      <view class="flex-row group-2">
        <text class="text-4">{{ salary }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image-1"
        />
      </view>
    </view>
    <view class="justify-between section-3" @click="view_6OnClick">
      <text class="text-5">期望城市</text>
      <view class="flex-row group-3">
        <text class="text-6">{{ city }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529388387861580.png"
          class="image-1"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";

const job = ref("请选择");
const salary = ref("请选择");
const city = ref("请选择");

const view_4OnClick = () => {
  uni.navigateTo({ url: "/pages/zhiweileixing/zhiweileixing" });
};
const view_6OnClick = () => {
  uni.navigateTo({ url: "/pages/chengshixuanze/chengshixuanze" });
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 1334rpx;
  padding-bottom: 50rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .section-1 {
    position: absolute;
    top: 130rpx;
    right: 20rpx;
    left: 20rpx;
    height: 100rpx;
    padding: 33rpx 11rpx 28rpx 21rpx;
    overflow: hidden;
    border: solid 2rpx rgb(210 210 210);
    border-radius: 10rpx;

    .text-1 {
      margin: 3rpx 0 6rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-1 {
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(158 149 149);
      white-space: nowrap;

      .text-2 {
        margin: 3rpx 0 6rpx;
      }
    }
  }

  .section-2 {
    position: absolute;
    top: 240rpx;
    right: 20rpx;
    left: 20rpx;
    height: 100rpx;
    padding: 33rpx 11rpx 28rpx 21rpx;
    overflow: hidden;
    border: solid 2rpx rgb(210 210 210);
    border-radius: 10rpx;

    .text-3 {
      margin: 3rpx 0 6rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-2 {
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(158 149 149);
      white-space: nowrap;

      .text-4 {
        margin: 3rpx 0 6rpx;
      }
    }
  }

  .section-3 {
    position: absolute;
    top: 350rpx;
    right: 20rpx;
    left: 20rpx;
    height: 100rpx;
    padding: 33rpx 11rpx 28rpx 21rpx;
    overflow: hidden;
    border: solid 2rpx rgb(210 210 210);
    border-radius: 10rpx;

    .text-5 {
      margin: 3rpx 0 6rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-3 {
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(158 149 149);
      white-space: nowrap;

      .text-6 {
        margin: 3rpx 0 6rpx;
      }
    }
  }

  .button {
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    width: 550rpx;
    height: 80rpx;
    padding: 25rpx 0 29rpx;
    overflow: hidden;
    font-size: 30rpx;
    line-height: 28rpx;
    color: rgb(255 255 255);
    white-space: nowrap;
    background-color: rgb(35 193 158);
    border-radius: 15rpx;
    transform: translateX(-50%);
  }

  .image-1 {
    width: 35rpx;
    height: 35rpx;
  }
}
</style>
