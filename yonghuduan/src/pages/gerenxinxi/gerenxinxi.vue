<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="个人信息"/>
    <view class="justify-between group_1">
      <view class="flex-col group_2">
        <text class="text_1">头像</text>
        <text class="text_2">上传真实头像投递成功几率更大哦~</text>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303732403472501.png"
        class="image_1"
      />
    </view>
    <view class="flex-col section_1">
      <text class="text_3">姓名</text>
      <text class="text_4">{{ userName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_5">出生日期</text>
      <text class="text_6">{{ birthday }}</text>
    </view>
    <view class="justify-between section_3">
      <text class="text_7">性别</text>
      <view class="flex-row group_3">
        <view class="flex-col items-center text-wrapper">
          <text>男</text>
        </view>
        <view class="flex-col items-center text-wrapper_1">
          <text>女</text>
        </view>
      </view>
    </view>
    <view class="flex-col section_4">
      <text class="text_10">所在城市</text>
      <view class="justify-between group_4">
        <text>{{ city }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_2"
        />
      </view>
    </view>
    <view class="flex-col section_5">
      <text class="text_12">手机号码</text>
      <text class="text_13">{{ pgoneNumber }}</text>
    </view>
    <view class="flex-col section_6">
      <text class="text_14">邮箱</text>
      <text class="text_15">{{ email }}</text>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const userName = ref('张三')
const birthday = ref('1999.05.08')
const pgoneNumber = ref('123*****789')
const email = ref('1*******9@qq.com')
const city = ref('重庆')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .group_1 {
    padding-left: 22rpx;
    padding-right: 20rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 133rpx;
    .group_2 {
      align-self: center;
      .text_1 {
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
      }
      .text_2 {
        margin-top: 33rpx;
        color: rgb(248, 193, 103);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
    }
    .image_1 {
      border-radius: 60rpx;
      width: 120rpx;
      height: 120rpx;
    }
  }
  .section_1 {
    padding: 25rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 275rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_3 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .text_4 {
      margin-top: 26rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 27rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_2 {
    padding: 25rpx 23rpx 25rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 420rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_5 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-top: 29rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 22rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_3 {
    padding: 43rpx 21rpx 28rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 565rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_7 {
      margin-top: 7rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-right: 15rpx;
      .text-wrapper {
        padding: 11rpx 0 11rpx;
        color: rgb(6, 192, 150);
        font-size: 30rpx;
        line-height: 26rpx;
        letter-spacing: 6rpx;
        white-space: nowrap;
        background-color: rgba(35, 193, 158, 0.22);
        border-radius: 5rpx;
        width: 150rpx;
        height: 50rpx;
        border: solid 2rpx rgb(35, 193, 158);
      }
      .text-wrapper_1 {
        margin-left: 18rpx;
        padding: 12rpx 0 12rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        letter-spacing: 5rpx;
        white-space: nowrap;
        border-radius: 5rpx;
        width: 150rpx;
        height: 50rpx;
        border: solid 2rpx rgba(163, 154, 154, 0.5);
      }
    }
  }
  .section_4 {
    padding: 25rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 499rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_10 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .group_4 {
      margin-top: 26rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
      .image_2 {
        margin-right: 16rpx;
        margin-top: 3rpx;
        width: 15rpx;
        height: 24rpx;
      }
    }
  }
  .section_5 {
    padding: 25rpx 21rpx 25rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 354rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_12 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .text_13 {
      margin-top: 31rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 18rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
  }
  .section_6 {
    padding: 25rpx 22rpx 17rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 209rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_14 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
    }
    .text_15 {
      margin-top: 29rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .button {
    padding: 25rpx 0 29rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    width: 550rpx;
    height: 80rpx;
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
