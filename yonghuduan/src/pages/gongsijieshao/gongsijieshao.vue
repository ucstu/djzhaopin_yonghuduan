<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="flex-row group_1">
      <image class="image_2" :src="logoAddress" />
      <view class="flex-col group_2">
        <image class="image_3" :src="name" />
        <text class="text">{{ cityAndInfo }}</text>
      </view>
    </view>
    <view class="flex-row group_3">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528790778970457.png"
        class="image_4"
      />
      <view class="flex-col group_4">
        <text>{{ detailedAddress }}</text>
        <text>软件园科技大厦16楼</text>
      </view>
    </view>
    <view class="flex-col group_5">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528789584835730.png"
        class="image_5"
      />
      <view class="flex-col group_6">
        <text class="text_3"
          >朗新科技股份有限公司（股票代码：300682）创立于2003年，<br
        /></text>
        <text class="text_4"
          >公司总部位于无锡，在无锡、杭州、武汉、厦门、广州、重庆<br
        /></text>
      </view>
      <text class="text_5"
        >和南宁设有七大研发中心.......................................</text
      >
    </view>
    <view class="flex-col group_7">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528789291378724.png"
        class="image_5"
      />
      <view class="justify-center group_8">
        <text class="text_6">公司全称</text>
        <text>{{ companyFullName }}</text>
      </view>
      <view class="flex-row group_9">
        <text>法人代表</text>
        <text class="text_9">{{ legalPerson }}</text>
      </view>
      <view class="flex-row group_10">
        <text class="text_10">注册资本</text>
        <text class="text_11">{{ registeredCapital }}</text>
      </view>
      <view class="flex-row group_11">
        <text class="text_12">机构类型</text>
        <text class="text_13">{{ bodyType }}</text>
      </view>
      <view class="flex-row group_12">
        <text class="text_14">成立时间</text>
        <text class="text_15">{{ setUpTime }}</text>
      </view>
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
      logoAddress:
        'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528791497523597.png',
      name: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528791364444372.png',
      cityAndInfo: '杭州 | 上市公司 | 2000人以上 | 软件服务',
      detailedAddress: '浙江-杭州-西湖区-三路90号东部',
      companyFullName: '朗新科技集团股份有限公司',
      legalPerson: '张三',
      registeredCapital: '102，002.8276万(元)',
      bodyType: '股份有限公司(台港澳与境内合资、上市)',
      setUpTime: '2003-05-07',
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
  padding-bottom: 260rpx;
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
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 24rpx;
    white-space: nowrap;
    position: absolute;
    left: 45rpx;
    right: 24rpx;
    top: 135rpx;
    .image_2 {
      border-radius: 5rpx;
      width: 150rpx;
      height: 150rpx;
    }
    .group_2 {
      margin-left: 25rpx;
      margin-right: 40rpx;
      flex: 1 1 auto;
      align-self: center;
      .image_3 {
        width: 180rpx;
        height: 53rpx;
      }
      .text {
        margin-top: 22rpx;
      }
    }
  }
  .group_3 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 25rpx;
    line-height: 30rpx;
    letter-spacing: 5rpx;
    white-space: nowrap;
    position: absolute;
    left: 45rpx;
    right: 24rpx;
    top: 340rpx;
    .image_4 {
      margin: 5rpx 0 5rpx;
      width: 50rpx;
      height: 50rpx;
    }
    .group_4 {
      margin-left: 26rpx;
    }
  }
  .group_5 {
    position: absolute;
    left: 45rpx;
    right: 24rpx;
    top: 460rpx;
    .group_6 {
      margin-top: 19rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 30rpx;
      .text_3 {
        margin-right: 18rpx;
      }
      .text_4 {
        margin-right: 18rpx;
        margin-top: 19rpx;
      }
    }
    .text_5 {
      margin-top: 19rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 30rpx;
      white-space: nowrap;
    }
  }
  .group_7 {
    position: absolute;
    left: 45rpx;
    right: 24rpx;
    bottom: 260rpx;
    .group_8 {
      margin-top: 25rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 26rpx;
      line-height: 24rpx;
      letter-spacing: 2.6rpx;
      white-space: nowrap;
      position: relative;
      .text_6 {
        position: absolute;
        left: 1rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .group_9 {
      margin-top: 36rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 26rpx;
      line-height: 24rpx;
      letter-spacing: 2.6rpx;
      white-space: nowrap;
      .text_9 {
        margin-left: 50rpx;
      }
    }
    .group_10 {
      margin-top: 37rpx;
      .text_10 {
        margin-bottom: 3rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 24rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
      .text_11 {
        margin-left: 51rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 27rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
    }
    .group_11 {
      margin-top: 33rpx;
      .text_12 {
        margin-bottom: 4rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 24rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
      .text_13 {
        margin-left: 49rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 28rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
    }
    .group_12 {
      margin-top: 34rpx;
      .text_14 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 24rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
      .text_15 {
        margin: 3rpx 0 3rpx 50rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 26rpx;
        line-height: 19rpx;
        letter-spacing: 2.6rpx;
        white-space: nowrap;
      }
    }
  }
  .image_5 {
    width: 129rpx;
    height: 35rpx;
  }
}
</style>
