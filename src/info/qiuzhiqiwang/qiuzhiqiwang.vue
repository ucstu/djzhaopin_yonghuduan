<template>
  <NavigationBar title="求职期望" />
  <view class="flex-row page">
    <view class="group-all">
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望职位</text>
        <text class="text-right" @click="expectJob">{{ job }}</text>
      </view>
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望月薪</text>
        <text class="text-right" @click="expectSalry">{{ salary }}</text>
      </view>
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望城市</text>
        <text class="text-right" @click="expectCity">{{ city }}</text>
      </view>
    </view>
    <view class="justify-center button-box">
      <button class="button">保存</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";

const job = ref("请选择 >");
const salary = ref("请选择 >");
const city = ref("请选择 >");

const expectJob = () => {
  uni.navigateTo({ url: "/most/zhiweileixing/zhiweileixing" });
};
const expectCity = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
};
</script>

<style lang="scss" scoped>
.page {
  height: auto;

  .group-all {
    .group-box {
      width: 710rpx;
      height: 120rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      border: 1rpx solid rgb(210 210 210);
      border-radius: 10rpx;

      .text-title {
        padding-left: 20rpx;
      }

      .text-right {
        padding-right: 20rpx;
        color: rgb(153 153 153);
      }
    }
  }

  .button-box {
    position: absolute;
    bottom: 30rpx;
    width: 100%;

    .button {
      width: 600rpx;
      height: 80rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
    }
  }
}
</style>
