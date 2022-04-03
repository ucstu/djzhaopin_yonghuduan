<template>
  <view class="flex-col page">
    <NavigationBar />
    <text class="text">请完善个人信息（1/3）</text>
    <view class="section_1 flex-col view">
      <text class="text_1">姓名</text>
      <text class="text_3">{{ userName }}</text>
    </view>
    <view class="section_2 flex-col">
      <text class="text_5 text_6">出生日期</text>
      <view class="bottom-group justify-between">
        <text class="text_7">{{ birthday }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="justify-between section_3">
      <text class="text_9">性别</text>
      <view class="flex-row">
        <view class="flex-col items-center text-wrapper">
          <text>男</text>
        </view>
        <view class="flex-col items-center text-wrapper_1">
          <text>女</text>
        </view>
      </view>
    </view>
    <view class="section_2 flex-col">
      <text class="text_5">所在城市</text>
      <view @click="view_11OnClick" class="bottom-group justify-between">
        <text class="text_7">{{ city }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="section_1 flex-col view_5">
      <text class="text_1">邮箱</text>
      <text class="text_3">{{ email }}</text>
    </view>
    <view class="flex-col section_4">
      <text class="text_16">求职状态</text>
      <view class="justify-between group_1">
        <text class="text_17">{{ jobStatus }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view @click="view_2OnClick" class="flex-col items-center button">
      <text>下一步</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

    const  userName=ref( '请填写')
    const  email=ref( '请填写')
    const  birthday=ref( '请选择')
    const  city=ref( '请选择')
    const  jobStatus=ref( '请选择')

    const imageOnClick=()=> {
      // @ts-ignore
      uni.navigateBack()
    }
    const view_11OnClick=()=> {
      uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
    }
    const view_2OnClick=()=> {
      uni.navigateTo({ url: '/pages/wanshanjiaoyujingli/wanshanjiaoyujingli' })
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
    margin-left: 32rpx;
    margin-top: 48rpx;
    color: rgb(0, 0, 0);
    font-size: 35rpx;
    line-height: 33rpx;
    white-space: nowrap;
  }
  .section_1 {
    padding: 23rpx 21rpx 24rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_1 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_3 {
      margin-top: 26rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
  }
  .view {
    margin: 44rpx 20rpx 0;
  }
  .section_2 {
    margin: 18rpx 20rpx 0;
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_5 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-left: 2rpx;
    }
    .bottom-group {
      margin-top: 26rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_7 {
        margin-bottom: 3rpx;
      }
    }
  }
  .section_3 {
    margin: 18rpx 20rpx 0;
    padding: 43rpx 16rpx 40rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_9 {
      margin: 5rpx 0 7rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text-wrapper {
      padding: 7rpx 0 7rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 22rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      border-radius: 5rpx;
      width: 100rpx;
      height: 38rpx;
      border: solid 2rpx rgba(163, 154, 154, 0.5);
    }
    .text-wrapper_1 {
      margin-left: 18rpx;
      padding: 6rpx 0 6rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      border-radius: 5rpx;
      width: 100rpx;
      height: 38rpx;
      border: solid 2rpx rgba(163, 154, 154, 0.5);
    }
  }
  .view_5 {
    margin: 18rpx 20rpx 0;
  }
  .section_4 {
    margin: 18rpx 20rpx 0;
    padding: 23rpx 0 19rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_16 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 27rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_17 {
        margin-top: 4rpx;
      }
    }
  }
  .button {
    margin-top: 114rpx;
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
  .image_1 {
    margin-right: 16rpx;
    width: 15rpx;
    height: 24rpx;
  }
}
</style>
