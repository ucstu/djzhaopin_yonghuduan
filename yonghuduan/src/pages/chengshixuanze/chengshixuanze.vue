<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="选择城市" />
    <view class="flex-row">
      <scroll-view class="group-left" :scroll-y="true" @scroll="scroll">
        <view>
          <view
            class="justify-center province"
            :class="provinceIndexOf === i ? 'active' : ''"
            v-for="(province, i) in provinces"
            :key="i"
          >{{ province }}</view>
        </view>
      </scroll-view>
      <view class="group-right">
        <view class="flex-row cities">
          <view
            class="justify-center items-center city"
            v-for="(city, j) in cities"
            :key="j"
          >{{ city }}</view>
        </view>
      </view>
    </view>
    <view class="flex-row button">
      <view class="flex-col items-center justify-center reset">
        <text>重置</text>
      </view>
      <view class="flex-col items-center justify-center identify">
        <text>确定</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

const provinces = reactive([
  '常用',
  '直辖市',
  '河北',
  '山西',
  '内蒙',
  '辽宁',
  '吉林',
  '直辖市',
  '河北',
  '山西',
  '内蒙',
  '辽宁',
  '吉林',
  '直辖市',
  '河北',
  '山西',
  '内蒙',
  '辽宁',
  '吉林',
  '直辖市',
  '河北',
  '山西',
  '内蒙',
  '辽宁',
  '吉林',
  '直辖市',
  '河北',
  '山西',
  '内蒙',
  '辽宁',
  '吉林',
])
const cities = reactive([
  '北京',
  '上海',
  '深圳',
  '广州',
  '杭州',
  '成都',
  '武汉',
  '西安',
  '南京',
  '长沙',
  '郑州',
  '重庆',
])
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}

const provinceIndexOf = ref(0)

</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 1255rpx;
  .header {
    position: relative;
  }
  .active {
    font-weight: bold;
  }
  .group-left {
    width: 30%;
    height: 1130rpx;
    background-color: rgb(244, 243, 243);
    border-radius: 5rpx;
    overflow-y: hidden;
    .province {
      margin-top: 10rpx;
      font-size: 30rpx;
    }
  }
  .group-right {
    width: 70%;
    height: 1130rpx;
    .cities {
      margin-left: 20rpx;
      flex-wrap: wrap;
      .city {
        width: 139rpx;
        height: 60rpx;
        margin-left: 15rpx;
        border: solid 2rpx rgb(241, 242, 241);
        border-radius: 5rpx;
        font-size: 30rpx;
      }
    }
  }
  .button {
    position: fixed;
    bottom: 20rpx;
    background-color: rgb(255, 255, 255);

    .reset {
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      width: 230rpx;
      height: 60rpx;
      font-size: 30rpx;
    }
    .identify {
      margin-left: 20rpx;
      background-color: rgb(84, 188, 163);
      border-radius: 5rpx;
      font-size: 30rpx;
      width: 460rpx;
    }
  }
}
</style>
