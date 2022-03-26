<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <text class="text_1">求职期望</text>
    <text class="text_2">每个求职意向都会有专属的职位推荐</text>
    <view class="flex-col list">
      <view
        @click="view_6OnClick"
        class="list-item flex-col"
        :key="i"
        v-for="(jobExpectation, i) in jobExpectations"
      >
        <view class="flex-row">
          <text class="text_3">{{ jobExpectation.name }}</text>
          <text class="text_5">{{ jobExpectation.salary }}</text>
        </view>
        <view class="center-group justify-between">
          <text class="text_7">{{ jobExpectation.direction }}</text>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724340497012.png"
            class="image_1"
          />
        </view>
        <view class="bottom-group flex-row">
          <text>{{ jobExpectation.city }}</text>
          <text class="text_10">{{ jobExpectation.expectedTime }}</text>
        </view>
      </view>
    </view>
    <view @click="view_8OnClick" class="justify-center button">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303746037457152.png"
        class="image_4"
      />
      <text class="text_17">添加求职期望</text>
    </view>
    <view class="justify-between group_5">
      <text class="text_18">求职状态</text>
      <view class="flex-row group_6">
        <text>{{ entryTime }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303744395381153.png"
          class="image_5"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'


const jobExpectations = reactive([
  {
    name: '后段工程师',
    salary: '8K-9K',
    direction: 'JAVA',
    city: '成都',
    expectedTime: '3个月内入职',
  },
  {
    name: '前端工程师',
    salary: '5K-9K',
    direction: 'React',
    city: '重庆',
    expectedTime: '3个月内入职',
  },
])
const entryTime = ref('随时入职')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const view_7OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const view_8OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 633rpx;
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
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 136rpx;
  }
  .text_2 {
    color: rgb(104, 104, 104);
    font-size: 25rpx;
    line-height: 23rpx;
    letter-spacing: 5rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 189rpx;
  }
  .list {
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 250rpx;
    .list-item {
      padding: 9rpx 19rpx 10rpx 21rpx;
      &:last-of-type {
        margin-top: 20rpx;
      }
      .center-group {
        margin-top: 13rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        .text_7 {
          margin: 8rpx 0 4rpx;
        }
        .image_1 {
          width: 17rpx;
          height: 30rpx;
        }
      }
      .bottom-group {
        margin-top: 14rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        .text_10 {
          margin-left: 12rpx;
        }
      }
      .text_3 {
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
      }
      .text_5 {
        margin: 4rpx 0 2rpx 16rpx;
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 22rpx;
        white-space: nowrap;
      }
    }
  }
  .button {
    padding: 25rpx 0 21rpx;
    color: rgb(8, 183, 47);
    font-size: 20rpx;
    line-height: 18rpx;
    letter-spacing: 4rpx;
    white-space: nowrap;
    background-color: rgb(198, 255, 227);
    border-radius: 15rpx;
    overflow: hidden;
    height: 80rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 540rpx;
    border: solid 2rpx rgb(1, 249, 55);
    .image_4 {
      width: 30rpx;
      height: 30rpx;
    }
    .text_17 {
      margin: 4rpx 0 7rpx 16rpx;
    }
  }
  .group_5 {
    padding-left: 21rpx;
    padding-right: 19rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 633rpx;
    .text_18 {
      color: rgb(49, 49, 49);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_6 {
      margin-top: 2rpx;
      color: rgb(158, 149, 149);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .image_5 {
        margin-left: 39rpx;
        width: 12rpx;
        height: 22rpx;
      }
    }
  }
}
</style>
