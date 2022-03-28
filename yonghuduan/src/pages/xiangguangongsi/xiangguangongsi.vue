<template>
  <view class="flex-row page">
    <view class="flex-row group">
      <text @click="textOnClick" class="text">{{ city }}</text>
      <view class="flex-row search">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
          class="image" />
        <view class="flex-row section_1">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
            class="image_1" />
          <text class="text_1">{{ jobName }}</text>
        </view>
      </view>
      <text @click="text_1OnClick" class="text_2">取消</text>
    </view>
    <view class="justify-between group_1">
      <text @click="text_2OnClick">相关职位</text>
      <text>相关公司</text>
    </view>
    <view class="flex-row equal-division">
      <view class="equal-division-item flex-row">
        <text class="text_5">区域</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_3" />
      </view>
      <view class="equal-division-item flex-row">
        <text class="text_6">要求</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_4" />
      </view>
      <view class="flex-row equal-division-item_1">
        <text class="text_7">公司</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_5" />
      </view>
      <view class="equal-division-item flex-row">
        <text class="text_8">福利</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_6" />
      </view>
      <view class="justify-evenly group_5">
        <text>排序</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_7" />
      </view>
    </view>
    <view class="flex-row group_6">
      <view class="flex-col items-center text-wrapper">
        <text>{{ direction }}</text>
      </view>
      <view class="flex-col items-center text-wrapper_1">
        <text>C++</text>
      </view>
      <view class="flex-col text-wrapper_2">
        <text class="text_12">JAVA</text>
      </view>
      <view class="flex-col items-center text-wrapper_3">
        <text>C#</text>
      </view>
      <view class="flex-col items-center text-wrapper_4">
        <text>PHP</text>
      </view>
      <view class="flex-col text-wrapper_5">
        <text class="text_15">Html5</text>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773723315322.png"
        class="image_8" />
    </view>
    <view class="flex-col list">
      <CompanyDetail @click="view_5OnClick" class="list-item" :companyDetail="attentionCompany" :key="i"
        v-for="(attentionCompany, i) in attentionCompanys" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import CompanyDetail from '../../components/CompanyDetail/CompanyDetail.vue'

let attentionCompanys = reactive([])
uni.request({
  url: 'http://127.0.0.1:4523/mock/743652/companies', //仅为示例，并非真实接口地址。
  success: (res) => {
    // @ts-ignore
    attentionCompanys.push(...res.data)
  }
});
const city = ref('重庆')
const direction = ref('不限')
const jobName = ref('请输入关键字')
const textOnClick = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
const text_1OnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const text_2OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const view_5OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_7OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_8OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
</script>

<style lang="scss" scoped>
.page {
  padding: 46rpx 18rpx 515rpx 18rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .group {
    padding-left: 23rpx;
    padding-right: 21rpx;
    position: absolute;
    left: 18rpx;
    right: 18rpx;
    top: 46rpx;
    .text {
      align-self: center;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .search {
      margin-left: 3rpx;
      flex: 1 1 auto;
      color: rgb(163, 154, 154);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      .image {
        align-self: center;
        width: 15rpx;
        height: 8rpx;
      }
      .section_1 {
        margin-left: 20rpx;
        padding: 11rpx 15rpx 12rpx;
        flex: 1 1 auto;
        background-color: rgb(229, 229, 229);
        border-radius: 25rpx;
        box-shadow: 0px 4rpx 4rpx rgba(0, 0, 0, 0.25);
        height: 43rpx;
        .image_1 {
          width: 20rpx;
          height: 20rpx;
        }
        .text_1 {
          margin-left: 11rpx;
        }
      }
    }
    .text_2 {
      margin-left: 21rpx;
      align-self: center;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
  }
  .group_1 {
    padding-left: 111rpx;
    padding-right: 106rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
    position: absolute;
    left: 18rpx;
    right: 18rpx;
    top: 128rpx;
  }
  .equal-division {
    position: absolute;
    left: 18rpx;
    right: 20rpx;
    top: 163rpx;
    .equal-division-item {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      padding: 35rpx 30rpx 35rpx;
      .text_5 {
        margin-left: 20rpx;
      }
      .image_3 {
        margin: 10rpx 0 7rpx 7rpx;
      }
      .text_6 {
        margin-left: 19rpx;
      }
      .image_4 {
        margin: 10rpx 0 7rpx 6rpx;
      }
      .text_8 {
        margin-left: 17rpx;
      }
      .image_6 {
        margin: 10rpx 0 7rpx 8rpx;
      }
    }
    .equal-division-item_1 {
      padding: 36rpx 30rpx 34rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 22rpx;
      white-space: nowrap;
      .text_7 {
        margin-left: 18rpx;
      }
      .image_5 {
        margin: 9rpx 0 8rpx 8rpx;
      }
    }
    .group_5 {
      margin: 35rpx 20rpx 35rpx 20rpx;
      padding-left: 28rpx;
      padding-right: 11rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      width: 103rpx;
      .image_7 {
        margin: 10rpx 0 7rpx;
      }
    }
    .image_2 {
      width: 7rpx;
      height: 5rpx;
    }
  }
  .group_6 {
    position: absolute;
    left: 50rpx;
    right: 40rpx;
    top: 245rpx;
    .text-wrapper {
      padding: 8rpx 0 8rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 14rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 50rpx;
      height: 30rpx;
    }
    .text-wrapper_1 {
      margin-left: 60rpx;
      padding: 9rpx 0 9rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 12rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      width: 50rpx;
      height: 30rpx;
    }
    .text-wrapper_2 {
      margin-left: 60rpx;
      padding: 10rpx 0 9rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 12rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 30rpx;
      .text_12 {
        margin-left: 7rpx;
        margin-right: 3rpx;
      }
    }
    .text-wrapper_3 {
      margin-left: 60rpx;
      padding: 8rpx 0 9rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 12rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 49rpx;
      height: 29rpx;
    }
    .text-wrapper_4 {
      margin-left: 61rpx;
      padding: 10rpx 0 9rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 11rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      overflow: hidden;
      width: 50rpx;
      height: 30rpx;
    }
    .text-wrapper_5 {
      margin-left: 60rpx;
      padding: 8rpx 0 9rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 12rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      height: 29rpx;
      .text_15 {
        margin-left: 5rpx;
      }
    }
    .image_8 {
      margin-left: 33rpx;
      margin-bottom: 5rpx;
      width: 27rpx;
      height: 23rpx;
    }
  }
  .list {
    position: absolute;
    left: 18rpx;
    right: 18rpx;
    top: 303rpx;
    .list-item {
      &:not(:first-of-type) {
        margin-top: 24rpx;
      }
    }
  }
}
</style>
