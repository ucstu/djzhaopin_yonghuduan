<template>
  <view class="page">
    <SearchAndFilter></SearchAndFilter>
    <view class="flex-col list">
      <CompanyDetail @click="view_5OnClick" class="list-item" :companyDetail="attentionCompany" :key="i"
        v-for="(attentionCompany, i) in attentionCompanies" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
import CompanyDetail from '../../components/CompanyDetail/CompanyDetail.vue'
import { key } from '../../stores';
import SearchAndFilter from '../../components/SearchAndFilter/SearchAndFilter.vue';

const store = useStore(key)

let attentionCompanies = reactive([])
uni.request({
  url: 'http://127.0.0.1:4523/mock/743652/companies', //仅为示例，并非真实接口地址。
  success: (res) => {
    // @ts-ignore
    attentionCompanies.push(...res.data)
  }
});
const city = ref('重庆')
const direction = ref('不限')
const searchContent = ref('请输入关键字')
const textOnClick = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
const text_1OnClick = () => {
  uni.navigateBack({
    delta: 100
  })
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
  padding: 0rpx 39rpx 299rpx 40rpx;
  background-color: rgb(255, 255, 255);
  // height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .group_1 {
    margin-top: 39rpx;
    padding-left: 90rpx;
    padding-right: 85rpx;
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
    top: 202rpx;
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
    top: 284rpx;
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
    top: 342rpx;
    .list-item {
      &:not(:first-of-type) {
        margin-top: 24rpx;
      }
    }
  }
  .text {
    align-self: center;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
  .image {
    margin-left: 3rpx;
    align-self: center;
    width: 15rpx;
    height: 8rpx;
  }
  .search {
    margin-left: 20rpx;
    padding: 11rpx 15rpx 12rpx;
    flex: 1 1 auto;
    color: rgb(163, 154, 154);
    font-size: 20rpx;
    line-height: 19rpx;
    white-space: nowrap;
    background-color: rgb(229, 229, 229);
    border-radius: 25rpx;
    box-shadow: 0px 4rpx 4rpx rgba(0, 0, 0, 0.25);
    height: 43rpx;
    position: relative;
    .image_1 {
      width: 20rpx;
      height: 20rpx;
    }
    .text_1 {
      margin-left: 11rpx;
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
</style>
