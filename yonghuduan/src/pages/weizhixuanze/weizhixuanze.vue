<template>
  <view class="flex-col page">
    <NavigationBar class="top-group" title="位置" />
    <view class="flex-row group_all">
      <view class="justify-center group_left">商圈</view>
      <scroll-view class="flex-row group_center" :scroll-y="true" @scroll="scroll">
        <view class="flex-col items-center">
          <text
            class="city"
            :class="countriesIndex == i ? 'active' : ''"
            @click="countriesIndex = i; areasIndex = 0"
            :key="i"
            v-for="(country, i) in countries"
          >
            {{
              country.countyName
            }}
          </text>
          <image class />
        </view>
      </scroll-view>
      <scroll-view class="flex-row group_right" :scroll-y="true" @scroll="scroll">
        <view class="flex-col items-center">
          <text
            class="toponym"
            :class="areasIndex == i ? 'active' : ''"
            @click="areasIndex = i"
            :key="i"
            v-for="(area, i) in areas"
          >
            {{
              area
            }}
          </text>
        </view>
      </scroll-view>
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
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import { getRegionalinfos } from '@/services/services';
import { AreaInformations } from '@/services/types';
import { reactive, ref, computed } from 'vue'

const countriesIndex = ref(0)
const areasIndex = ref(0)

const countries = reactive<AreaInformations>([])
getRegionalinfos().then(res => {
  countries.push(...res.data)
})
const areas = computed(() => {
  return countries[countriesIndex.value].areas
})
</script>

<style lang="scss" scoped>
.page {
  margin-top: -50rpx;
  padding: 60rpx 0 21rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 1334rpx;
  .top-group {
    position: relative;
  }
  .group_all {
    height: 1120rpx;
    .active {
      color: rgb(84, 188, 163);
    }
    .group_left {
      width: 30%;
      background-color: rgb(244, 250, 255);
      overflow-y: hidden;
      .provinces {
        height: 1120rpx;
        .province {
          font-size: 30rpx;
          margin-top: 15rpx;
        }
      }
    }

    .group_center {
      width: 35%;
      overflow-y: hidden;
      .city {
        font-size: 30rpx;
        margin-top: 15rpx;
      }
    }
    .group_right {
      width: 35%;
      overflow-y: hidden;
      .toponym {
        font-size: 30rpx;
        margin-top: 15rpx;
      }
    }
  }
  .button {
    width: 100%;
    position: fixed;
    bottom: 20rpx;
    background-color: rgb(255, 255, 255);

    .reset {
      margin-left: 20rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      width: 230rpx;
      height: 60rpx;
      font-size: 30rpx;
    }
    .identify {
      margin-right: 20rpx;
      margin-left: 20rpx;
      background-color: rgb(84, 188, 163);
      border-radius: 5rpx;
      font-size: 30rpx;
      width: 460rpx;
    }
  }
}
</style>
