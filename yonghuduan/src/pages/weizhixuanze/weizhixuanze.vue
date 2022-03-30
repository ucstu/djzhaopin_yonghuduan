<template>
  <view class="flex-col page">
    <NavigationBar class="top-group" title="位置" />
    <view class="flex-row groupAll">
      <scroll-view class="flex-row groupLeft" :scroll-y="true" @click="scroll">
        <view class="flex-col items-center">
          <text
            class="province"
            :class="activeIndex == i ? 'active' : ''"
            :key="i"
            v-for="(area, i) in areas"
          >
            {{
              area.name
            }}
          </text>
          <image class />
        </view>
      </scroll-view>
      <scroll-view class="flex-row groupCenter" :scroll-y="true" @click="scroll">
        <view class="flex-col items-center cities">
          <text
            class="city"
            :class="activeIndex == i ? 'active' : ''"
            :key="i"
            v-for="(area, i) in areas"
          >
            {{
              area.name
            }}
          </text>
        </view>
      </scroll-view>
      <scroll-view class="flex-row groupRight" :scroll-y="true" @click="scroll">
        <view class="flex-col items-center toponyms">
          <text
            class="toponym"
            :class="activeIndex == i ? 'active' : ''"
            :key="i"
            v-for="(place, i) in places"
          >
            {{
              place.name
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
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
import { reactive, ref } from 'vue'

const activeIndex = ref(0)

const areas = reactive([
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
])
const places = reactive([
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
])
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
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
  .groupAll {
    height: 1120rpx;
    .active {
      color: rgb(84, 188, 163);
    }
    .groupLeft {
      width: 30%;
      background-color: rgb(244, 250, 255);
      overflow-y: hidden;
      .province {
        font-size: 30rpx;
        margin-top: 15rpx;
      }
    }
    .groupCenter {
      width: 40%;
      overflow-y: hidden;
      .cities {
        width: 50%;
        .city {
          font-size: 30rpx;
          margin-top: 15rpx;
        }
      }
    }
    .groupRight {
      width: 40%;
      overflow-y: hidden;
      .toponyms {
        width: 50%;
        .toponym {
          font-size: 30rpx;
          margin-top: 15rpx;
        }
      }
    }
  }
  .button {
    width: 100%;
    position: fixed;
    bottom: 10rpx;
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
