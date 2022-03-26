<template>
  <view class="flex-col page">
    <NavigationBar />
    <text class="text">请完善教育经历（2/3）</text>
    <view class="section_1 flex-col view">
      <text class="text_1">学校名称</text>
      <text class="text_3">{{ schoolName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_5">学历</text>
      <view class="justify-between group">
        <text class="text_6">{{ education }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="section_1 flex-col view_1">
      <text class="text_1">专业名称</text>
      <text class="text_3">{{ subject }}</text>
    </view>
    <view class="flex-col section_3">
      <text class="text_9">在校时间</text>
      <view class="justify-between group_1">
        <text>{{ startTime }}</text>
        <text class="text_11">{{ overTime }}</text>
      </view>
    </view>
    <view @click="view_2OnClick" class="flex-col items-center button">
      <text>下一步</text>
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      schoolName: '请填写',
      subject: '请填写',
      education: '请选择',
      startTime: '开始时间',
      overTime: '结束时间',
    }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
    view_2OnClick() {
      uni.navigateTo({
        url: '/pages/wanshangongzuojingli/wanshangongzuojingli',
      })
    },
  },
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
    margin-top: 49rpx;
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
    .group {
      margin-top: 26rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_6 {
        margin-bottom: 3rpx;
      }
      .image_1 {
        margin-right: 16rpx;
        width: 15rpx;
        height: 24rpx;
      }
    }
  }
  .view_1 {
    margin: 18rpx 20rpx 0;
  }
  .section_3 {
    margin: 18rpx 20rpx 0;
    padding: 23rpx 0 24rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_9 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 26rpx;
      padding: 0 100rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .text_11 {
        margin-right: 11rpx;
      }
    }
  }
  .button {
    margin-top: 404rpx;
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
