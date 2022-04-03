<template>
  <view class="flex-row page">
    <NavigationBar class="header" right="跳过" />
    <text class="text_1">请完善最近一份工作经历(3/3)</text>
    <view class="flex-col section_1">
      <text class="text_2">公司名称</text>
      <text class="text_3">{{ companyName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_4">公司行业</text>
      <view class="justify-between group_1">
        <text class="text_5">{{ companyIndustry }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_3">
      <text class="text_6">职位类型</text>
      <view @click="view_9OnClick" class="justify-between group_2">
        <text class="text_7">{{ positionType }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_4">
      <text class="text_8">在职时间</text>
      <view class="justify-between group_3">
        <text class="text_9">{{ startTime }}</text>
        <text class="text_10">{{ overTime }}</text>
      </view>
    </view>
    <view @click="view_3OnClick" class="flex-col items-center button">
      <text>创建简历</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
const companyName = ref('请填写')
const companyIndustry = ref('请选择')
const positionType = ref('请选择')
const startTime = ref('入职时间')
const overTime = ref('至今')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const textOnClick = () => {
  uni.navigateTo({ url: '/pages/shouyeyemian/shouyeyemian' })
}
const view_9OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweileixing/zhiweileixing' })
}
const view_3OnClick = () => {
  uni.navigateTo({ url: '/pages/shouyeyemian/shouyeyemian' })
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
  .text_1 {
    color: rgb(0, 0, 0);
    font-size: 35rpx;
    line-height: 33rpx;
    white-space: nowrap;
    position: absolute;
    left: 32rpx;
    top: 162rpx;
  }
  .section_1 {
    padding: 23rpx 21rpx 24rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 240rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_2 {
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
  .section_2 {
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 385rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_4 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 26rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_5 {
        margin-bottom: 3rpx;
      }
    }
  }
  .section_3 {
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 530rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_6 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_2 {
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
  .section_4 {
    padding: 23rpx 0 16rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 534rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_8 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 34rpx;
      padding: 0 100rpx;
      .text_9 {
        color: rgba(0, 0, 0, 0.25);
        font-size: 25rpx;
        line-height: 23rpx;
        letter-spacing: 5rpx;
        white-space: nowrap;
      }
      .text_10 {
        margin-right: 43rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        letter-spacing: 5rpx;
        white-space: nowrap;
      }
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
  .image_1 {
    margin-right: 16rpx;
    width: 15rpx;
    height: 24rpx;
  }
}
</style>
