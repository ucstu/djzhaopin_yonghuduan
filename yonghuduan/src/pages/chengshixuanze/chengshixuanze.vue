<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="选择城市" />
    <view class="flex-row">
      <scroll-view class="group-left" :scroll-y="true" @scroll="scroll">
        <view class="flex-col province-name">
          <view class="justify-center province" :class="provinceIndexOf === i ? 'active' : ''"
            v-for="(province, i) in provinces" @click="provinceIndex(i)" :key="i">{{ province.provinceName }}</view>
        </view>
      </scroll-view>
      <view class="group-right">
        <text class="hot-cities" v-if="provinceIndexOf === 0">热门城市</text>
        <view class="flex-row cities">
          <view class="justify-center items-center city" @click="cityIndex(i)" v-for="(city, i) in cities" :key="i">{{
            city
          }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import { getCityinfos } from '@/services/services';

const provinces = reactive([
  {
    provinceName: '常用',
    cities: [
      '北京',
      '上海',
      '广州',
      '深圳',
      '杭州',
      '南京',
      '成都',
      '武汉',
      '西安',
      '重庆',
      '郑州',
      '长沙',
    ]
  },
])
getCityinfos().then(res => {
  provinces.push(...res.data)
})
const cities = computed(() => provinces[provinceIndexOf.value].cities)

const provinceIndexOf = ref(0)
const provinceIndex = (index) => {
  provinceIndexOf.value = index
  console.log(cities);

}

const cityIndex = (index) => {
  let city = cities.value[index]
  console.log(city);
  uni.navigateBack()
}

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}


</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 1320rpx;
  margin-left: 20rpx;
  .header {
    position: relative;
  }
  .active {
    font-weight: bold;
  }
  .group-left {
    width: 220rpx;
    height: 1190rpx;
    background-color: rgb(244, 243, 243);
    border-radius: 5rpx;
    overflow-y: hidden;
    .province-name {
      margin-left: 20rpx;
      width: 170rpx;
      .province {
        margin-top: 15rpx;
        font-size: 28rpx;
        white-space: nowrap;
      }
    }
  }
  .group-right {
    width: 480rpx;
    height: 1190rpx;
    .hot-cities {
      margin-left: 20rpx;
      margin-top: 20rpx;
      font-size: 28rpx;
      font-weight: bold;
    }
    .cities {
      margin-left: 20rpx;
      flex-wrap: wrap;
      .city {
        width: 139rpx;
        height: 60rpx;
        margin-top: 15rpx;
        margin-left: 15rpx;
        border: solid 2rpx rgb(241, 242, 241);
        border-radius: 5rpx;
        font-size: 28rpx;
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
