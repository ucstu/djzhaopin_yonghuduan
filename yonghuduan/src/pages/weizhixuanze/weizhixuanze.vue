<template>
  <view class="flex-col page">
    <NavigationBar class="top-group" />
    <view class="flex-row group">
      <view class="flex-col list">
        <view
          class="list-item flex-row group_1"
          :key="i"
          v-for="(position, i) in positions"
        >
          <image class="image_1" :src="position.name" />
          <view class="section_1"> </view> </view
      ></view>
      <view class="flex-row equal-division">
        <view class="flex-col items-center list_1">
          <text class="list-item_1" :key="i" v-for="(name, i) in areas">{{
            name.name
          }}</text></view
        >
        <view class="flex-col items-center list_2">
          <text class="list-item_2" :key="i" v-for="(name, i) in places">{{
            name.name
          }}</text></view
        >
      </view>
    </view>
    <view class="flex-row group_2">
      <view class="flex-col items-center text-wrapper">
        <text>重置</text>
      </view>
      <view class="flex-col items-center button">
        <text>确定</text>
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
      positions: [
        {
          name: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292187787194317.png',
        },
        { name: '地铁' },
      ],
      areas: [
        { name: '不限' },
        { name: '渝北区' },
        { name: '渝中区' },
        { name: '江北区' },
        { name: '九龙坡区' },
        { name: '南岸区' },
        { name: '沙坪坝区' },
        { name: '巴南区' },
        { name: '北碚区' },
        { name: '永川区' },
        { name: '大渡口区' },
        { name: '江津区' },
        { name: '双桥区' },
        { name: '铜梁区' },
        { name: '大足县' },
        { name: '万州区' },
        { name: '合川区' },
        { name: '长寿区' },
        { name: '垫江区' },
      ],
      places: [
        { name: '不限' },
        { name: '大竹林' },
        { name: '双凤桥' },
        { name: '冉家坝' },
        { name: '两路' },
        { name: '汽博中心' },
        { name: '人和' },
        { name: '红旗河沟' },
        { name: '鸳鸯' },
        { name: '龙溪' },
        { name: '兴隆' },
      ],
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
  padding: 60rpx 0 21rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .top-group {
    position: relative;
  }
  .group {
    margin-top: 19rpx;
    .list {
      padding: 20rpx 0 1005rpx;
      background-color: rgb(248, 250, 251);
      overflow: hidden;
      height: 1129rpx;
      .list-item {
        align-self: center;
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
        &:last-of-type {
          margin-top: 43rpx;
        }
        .image_1 {
          margin-left: 55rpx;
          width: 60rpx;
          height: 35rpx;
        }
        .section_1 {
          margin: 5rpx 0 5rpx 50rpx;
          background-color: rgb(84, 188, 163);
          border-radius: 5rpx;
          width: 5rpx;
          height: 25rpx;
        }
      }
      .group_1 {
        align-self: initial;
        color: initial;
        font-size: initial;
        line-height: initial;
        white-space: initial;
      }
    }
    .equal-division {
      margin-right: 20rpx;
      flex: 1 1 auto;
      .list_1 {
        padding-top: 24rpx;
        flex: 1 1 280rpx;
        overflow: hidden;
        height: 1129rpx;
        .list-item_1 {
          color: rgb(0, 0, 0);
          font-size: 30rpx;
          line-height: 26rpx;
          white-space: nowrap;
        }
      }
      .list_2 {
        padding: 24rpx 0 480rpx;
        flex: 1 1 280rpx;
        overflow: hidden;
        height: 1129rpx;
        .list-item_2 {
          color: rgb(0, 0, 0);
          font-size: 30rpx;
          line-height: 26rpx;
          white-space: nowrap;
        }
      }
    }
  }
  .group_2 {
    margin-top: 19rpx;
    padding: 0 20rpx;
    .text-wrapper {
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
    .button {
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
}
</style>
