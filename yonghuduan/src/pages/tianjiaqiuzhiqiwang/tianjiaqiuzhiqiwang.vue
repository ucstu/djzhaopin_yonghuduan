<template>
  <view class="flex-col page">
    <NavigationBar />
    <text class="text">填写你的求职目标</text>
    <view class="section_1 flex-col view">
      <text class="text_1">期望职位</text>
      <view @click="view_6OnClick" class="bottom-group justify-between view_1">
        <text class="text_3">{{ jobExpectation }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="section_1 flex-col">
      <text class="text_1">期望城市</text>
      <view @click="view_7OnClick" class="bottom-group justify-between">
        <text>{{ cityExpectation }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="section_1 flex-col">
      <text class="text_1">期望月薪</text>
      <view class="bottom-group justify-between">
        <text>{{ salaryExpectation }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>下一步</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'


const jobExpectation = ref('请选择')
const cityExpectation = ref('请选择')
const salaryExpectation = ref('请选择')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweileixing/zhiweileixing' })
}
const view_7OnClick = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .text {
    margin-left: 31rpx;
    margin-top: 47rpx;
    color: rgb(0, 0, 0);
    font-size: 35rpx;
    line-height: 32rpx;
    white-space: nowrap;
  }
  .section_1 {
    margin: 18rpx 20rpx 0;
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_1 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .bottom-group {
      margin-top: 27rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .text_3 {
        margin-bottom: 3rpx;
      }
      .image_1 {
        margin-right: 20rpx;
        width: 15rpx;
        height: 24rpx;
      }
    }
    .view_1 {
      margin-top: 26rpx;
    }
  }
  .view {
    margin: 44rpx 20rpx 0;
  }
  .button {
    margin-top: 549rpx;
    padding: 25rpx 0 29rpx;
    align-self: center;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    width: 550rpx;
    height: 80rpx;
  }
}
</style>
