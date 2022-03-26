<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="flex-col section_1">
      <text class="text_1">公司名称</text>
      <text class="text_2">{{ companyName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_3">公司行业</text>
      <view class="justify-between group_1">
        <text>{{ projectIndustry }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_3">
      <text class="text_5">在职时间</text>
      <view class="justify-between group_2">
        <text class="text_6">{{ startTime }}</text>
        <text class="text_7">{{ overTime }}</text>
      </view>
    </view>
    <view class="flex-col section_4">
      <text class="text_8">职位类型</text>
      <view class="justify-between group_3">
        <text>{{ positionType }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_5">
      <text class="text_10">所属部门</text>
      <text class="text_11">{{ department }}</text>
    </view>
    <view class="flex-col section_6">
      <text class="text_12">{{ jobContent }}</text>
      <text class="text_13">请填写</text>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
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
      companyName: '请填写',
      department: '请填写',
      jobContent: '工作内容',
      projectIndustry: '请选择',
      startTime: '入职时间',
      overTime: '至今',
      positionType: '请选择',
    }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
  },
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
  .section_1 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_2 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
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
    top: 275rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_3 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_3 {
    padding: 23rpx 0 14rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 420rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_5 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-top: 32rpx;
      padding: 0 88rpx;
      .text_6 {
        color: rgba(0, 0, 0, 0.25);
        font-size: 30rpx;
        line-height: 27rpx;
        letter-spacing: 6rpx;
        white-space: nowrap;
      }
      .text_7 {
        margin-right: 49rpx;
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        letter-spacing: 6rpx;
        white-space: nowrap;
      }
    }
  }
  .section_4 {
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 565rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_8 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_5 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 499rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_10 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_11 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_6 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 354rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_12 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_13 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
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
  .image_1 {
    margin-right: 16rpx;
    margin-top: 3rpx;
    width: 15rpx;
    height: 24rpx;
  }
}
</style>
