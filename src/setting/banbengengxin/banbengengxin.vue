<template>
  <NavigationBar title="版本更新" />
  <view class="flex-row page">
    <view class="flex-col main">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383979520523.png"
        class="logo"
      />
      <text class="version">当前版本 {{ versionNum }}</text>
      <view class="justify-between bar-text" @click="checkVersion">
        <text class="text-1">版本更新</text>
        <text class="text-2">{{ newVersion }}</text>
      </view>
      <view class="bar-arrow justify-between">
        <text class="text-3">新手指南</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
          class="image-1"
        />
      </view>
      <view class="bar-arrow justify-between">
        <text class="text-3">经营资质</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
          class="image-1"
        />
      </view>
    </view>
    <view class="flex-col footer">
      <view class="protocol-strategy">
        <text class="text-protocol" @click="text_7OnClick"
          >《东江网用户协议》</text
        >
        <text class="text-6">和</text>
        <text class="text-strategy" @click="text_9OnClick"
          >《东江网隐私政策》</text
        >
      </view>
      <view class="justify-center copyright-c">
        <text>东江网</text>
        <text class="right">版权所有</text>
      </view>
      <text class="copyright-e"
        >Copyright 2022-2222 Dongjiang. All Rights Reserved</text
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getNewVersion } from "@/services/services";
import { ref } from "vue";

const newVersion = ref("无最新版本");
const versionNum = ref();

getNewVersion().then((res) => {
  if (res.data.body) {
    versionNum.value = res.data.body;
  }
});

const checkVersion = () => {
  getNewVersion().then((res) => {
    if (res.data.body) {
      versionNum.value = res.data.body;
      uni.showToast({
        title: "已为最新版本",
        icon: "none",
        duration: 1000,
      });
    }
  });
};

const text_7OnClick = () => {
  uni.navigateTo({ url: "/setting/yonghuxieyi/yonghuxieyi" });
};
const text_9OnClick = () => {
  uni.navigateTo({ url: "/setting/yinsicelve/yinsicelve" });
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 1334rpx;
  padding-bottom: 26rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .main {
    position: absolute;
    top: 110rpx;
    right: 20rpx;
    left: 20rpx;

    .logo {
      align-self: center;
      width: 200rpx;
      height: 200rpx;
    }

    .version {
      align-self: center;
      margin-top: 22rpx;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .bar-text {
      height: 100rpx;
      padding: 36rpx 21rpx 34rpx;
      margin-top: 23rpx;
      overflow: hidden;
      border: solid 2rpx rgb(210 210 210);
      border-radius: 5rpx;

      .text-1 {
        font-size: 30rpx;
        line-height: 28rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
      }

      .text-2 {
        margin-top: 2rpx;
        margin-right: 7rpx;
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(0 0 0 / 50%);
        white-space: nowrap;
      }
    }

    .bar-arrow {
      height: 100rpx;
      padding: 34rpx 16rpx 30rpx 21rpx;
      margin-top: 8rpx;
      overflow: hidden;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      border: solid 2rpx rgb(210 210 210);
      border-radius: 5rpx;

      .text-3 {
        margin-bottom: 4rpx;
      }

      .image-1 {
        width: 20rpx;
        height: 32rpx;
      }
    }
  }

  .footer {
    position: absolute;
    right: 20rpx;
    bottom: 26rpx;
    left: 20rpx;
    padding-right: 58rpx;
    padding-left: 67rpx;

    .protocol-strategy {
      align-self: center;
      line-height: 22rpx;
      white-space: nowrap;

      .text-protocol {
        font-size: 24rpx;
        line-height: 23rpx;
        color: rgb(35 193 158);
      }

      .text-6 {
        font-size: 24rpx;
        line-height: 23rpx;
        color: rgb(0 0 0 / 60%);
      }

      .text-strategy {
        font-size: 24rpx;
        line-height: 23rpx;
        color: rgb(35 193 158);
      }
    }

    .copyright-c {
      margin-top: 17rpx;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0 / 30%);
      white-space: nowrap;

      .right {
        margin-left: 12rpx;
      }
    }

    .copyright-e {
      align-self: center;
      margin-top: 18rpx;
      font-size: 25rpx;
      line-height: 24rpx;
      color: rgb(0 0 0 / 30%);
      white-space: nowrap;
    }
  }
}
</style>
