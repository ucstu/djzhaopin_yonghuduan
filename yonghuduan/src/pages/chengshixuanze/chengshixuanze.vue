<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="选择城市"/>
    <view class="flex-row">
      <view class="flex-col list">
        <view class="list-item flex-row" :key="i" v-for="(province, i) in provinces">
          <image class="image_1" :src="province.name" />
          <view class="section_2"></view>
        </view>
      </view>
      <view class="flex-col group_2">
        <text class="text_7">热门城市</text>
        <view class="flex-row list_1">
          <view class="list-item_1 flex-col items-center" :key="i" v-for="(city, i) in citys">
            <text>{{ city.name }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-row group_3">
      <view class="flex-col items-center text-wrapper_12">
        <text>重置</text>
      </view>
      <view class="flex-col items-center text-wrapper_13">
        <text>确定</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const provinces = reactive([
  {
    name: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292195202550038.png',
  },
  { name: '直辖市' },
  { name: '河北' },
  { name: '山西' },
  { name: '内蒙' },
  { name: '辽宁' },
  { name: '吉林' },
])
const citys = reactive([
  { name: '北京' },
  { name: '上海' },
  { name: '深圳' },
  { name: '广州' },
  { name: '杭州' },
  { name: '成都' },
  { name: '武汉' },
  { name: '西安' },
  { name: '南京' },
  { name: '长沙' },
  { name: '郑州' },
  { name: '重庆' },
])
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 20rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .header {
    position: relative;
  }
  .group_3 {
    margin-top: 20rpx;
    padding: 0 20rpx;
    .text-wrapper_12 {
      padding: 16rpx 0 18rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 27rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 250rpx;
      height: 60rpx;
    }
    .text-wrapper_13 {
      margin-left: 20rpx;
      padding: 16rpx 0 18rpx;
      flex: 1 1 auto;
      color: rgb(255, 255, 255);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      background-color: rgb(35, 193, 158);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
    }
  }
  .list {
    padding-bottom: 630rpx;
    .list-item {
      padding: 20rpx 0 24rpx;
      background-color: rgb(248, 250, 251);
      overflow: hidden;
      height: 79rpx;
      .image_1 {
        margin-left: 55rpx;
        width: 60rpx;
        height: 35rpx;
      }
      .section_2 {
        margin: 5rpx 0 5rpx 50rpx;
        background-color: rgb(84, 188, 163);
        border-radius: 5rpx;
        width: 5rpx;
        height: 25rpx;
      }
    }
  }
  .group_2 {
    margin: 43rpx 40rpx 0;
    flex: 1 1 auto;
    .text_7 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .list_1 {
      margin-top: 26rpx;
      height: 260rpx;
      position: relative;
      .list-item_1 {
        padding: 12rpx 0;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        border-radius: 5rpx;
        overflow: hidden;
        width: 120rpx;
        height: 50rpx;
        position: absolute;
        left: 0;
        top: 0;
        border: solid 2rpx rgb(210, 210, 210);
      }
    }
  }
}
</style>
