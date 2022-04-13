<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="工作经历" />
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">公司名称</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">公司行业</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">在职时间</text>
        <view class="flex-row justify-between items-center">
          <input class="text-input" type="text" placeholder="入职时间" />
          <input class="text-input" type="text" value="至今" />
        </view>
      </view>
      <view class="group-box">
        <text class="text-title">职位类型</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">所属部门</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">工作内容</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="justify-center group-button">
        <view class="justify-center items-center button-box">
          <text>保存</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
</script>

<style lang="scss" scoped>
.page {
  .group-all {
    width: 710rpx;
    height: auto;
    margin-top: 120rpx;
    margin-left: 20rpx;

    .group-box {
      width: 100%;
      height: 130rpx;
      margin-top: 20rpx;
      line-height: 60rpx;
      border: solid 2rpx rgb(210 210 210);
      border-radius: 5rpx;

      .text-title {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .text-input {
        padding-left: 20rpx;
        font-size: 28rpx;
      }
    }

    .group-button {
      position: fixed;
      bottom: 40rpx;
      width: 100%;
      height: 80rpx;

      .button-box {
        width: 500rpx;
        font-size: 30rpx;
        color: #fff;
        background-color: rgb(35 193 158);
        border-radius: 10rpx;
      }
    }
  }
}
</style>
