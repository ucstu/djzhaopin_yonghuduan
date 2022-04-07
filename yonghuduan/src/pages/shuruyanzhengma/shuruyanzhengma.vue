<template>
  <view class="flex-col page">
    <NavigationBar />
    <text class="text">请输入验证码</text>
    <view class="group">
      <text class="text_1">4位验证码已发送至:</text>
      <text class="text_2">{{ phonceNumber }}</text>
    </view>
    <view class="justify-evenly group_1">
      <view class="section_1"></view>
      <view class="section_2"></view>
      <view class="section_2"></view>
      <view class="section_2"></view>
    </view>
    <text class="text_3">重新发送验证码</text>
    <button @click="getPhoneNum">点击获取手机号</button>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

const phonceNumber = ref('180******64')
const getPhoneNum = () => {
  uni.getStorage({
    key: 'tel',
    success: (res) => {
      console.log(res.data);

    },
    fail: (error) => { }
  })

}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 672rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .text {
    margin-left: 102rpx;
    margin-top: 134rpx;
    color: rgb(0, 0, 0);
    font-size: 45rpx;
    line-height: 42rpx;
    white-space: nowrap;
  }
  .group {
    margin-top: 42rpx;
    align-self: center;
    line-height: 26rpx;
    white-space: nowrap;
    .text_1 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 26rpx;
    }
    .text_2 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 22rpx;
    }
  }
  .group_1 {
    margin-top: 86rpx;
    padding: 0 100rpx;
    .section_1 {
      overflow: hidden;
      width: 138rpx;
      height: 131rpx;
      border: solid 2rpx rgb(35, 193, 158);
    }
    .section_2 {
      overflow: hidden;
      width: 138rpx;
      height: 131rpx;
      border: solid 2rpx rgb(196, 196, 196);
    }
  }
  .text_3 {
    margin-left: 102rpx;
    margin-top: 57rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
}
</style>
