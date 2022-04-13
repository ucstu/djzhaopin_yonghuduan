<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="隐私设置" />
    <view class="group-1">匿名展示</view>
    <view class="justify-between items-center group-2">
      <view class="flex-row justify-center items-center group-box">
        <image src="@/static/icons/heard.png" class="image" />
        <text style="padding-left: 15rpx; font-size: 30rpx">{{
          userName
        }}</text>
        <text
          style="padding-left: 15rpx; font-size: 28rpx; color: rgb(0 0 0 / 60%)"
          >(实名展示)</text
        >
      </view>
      <radio
        style="transform: scale(0.5)"
        value="1"
        :checked="realName"
        @click="
          anonymous = false;
          realName = true;
        "
      />
    </view>
    <view class="justify-between items-center group-2">
      <view class="flex-row justify-center items-center group-box">
        <image src="@/static/icons/heard.png" class="image" />
        <text style="padding-left: 15rpx; font-size: 30rpx"
          >{{ userName[0] }}先生</text
        >
        <text
          style="padding-left: 15rpx; font-size: 28rpx; color: rgb(0 0 0 / 60%)"
          >(匿名展示)</text
        >
      </view>
      <radio
        style="transform: scale(0.5)"
        value="2"
        :checked="anonymous"
        @click="
          realName = false;
          anonymous = true;
        "
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";
const userName = ref("张三");
const realName = ref(true);
const anonymous = ref(false);
</script>

<style lang="scss" scoped>
.page {
  .group-1 {
    margin-left: 30rpx;
    font-size: 35rpx;
  }

  .group-2 {
    width: 710rpx;
    height: 100rpx;
    margin-top: 20rpx;
    margin-left: 20rpx;

    .group-box {
      padding-left: 10rpx;
    }
  }

  .image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 100%;
  }
}
</style>
