<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="选择城市" />
    <view class="flex-row">
      <scroll-view class="group-left" :scroll-y="true">
        <view class="flex-col province-name">
          <view
            v-for="(province, i) in provinces"
            :key="i"
            class="justify-center province"
            :class="provinceIndexOf === i ? 'active' : ''"
            @click="provinceIndex(i)"
            >{{ province.provinceName }}</view
          >
        </view>
      </scroll-view>
      <view class="group-right">
        <text v-if="provinceIndexOf === 0" class="hot-cities">热门城市</text>
        <view class="flex-row cities">
          <view
            v-for="(city, i) in cities"
            :key="i"
            class="justify-center items-center city"
            @click="cityIndex(i)"
            >{{ city }}</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCityinfos } from "@/services/services";
import { computed, reactive, ref } from "vue";

const provinces = reactive([
  {
    provinceName: "常用",
    cities: [
      "北京",
      "上海",
      "广州",
      "深圳",
      "杭州",
      "南京",
      "成都",
      "武汉",
      "西安",
      "重庆",
      "郑州",
      "长沙",
    ],
  },
]);
getCityinfos().then((res) => {
  provinces.push(...res.data.body);
});
const cities = computed(() => provinces[provinceIndexOf.value].cities);

const provinceIndexOf = ref(0);
const provinceIndex = (index: number) => {
  provinceIndexOf.value = index;
  console.log(cities);
};

const cityIndex = (index: number) => {
  let city = cities.value[index];
  console.log(city);
  uni.navigateBack({ delta: 1 });
};
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
    overflow-y: hidden;
    background-color: rgb(244 243 243);
    border-radius: 5rpx;

    .province-name {
      width: 170rpx;
      margin-left: 20rpx;

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
      margin-top: 20rpx;
      margin-left: 20rpx;
      font-size: 28rpx;
      font-weight: bold;
    }

    .cities {
      flex-wrap: wrap;
      margin-left: 20rpx;

      .city {
        width: 139rpx;
        height: 60rpx;
        margin-top: 15rpx;
        margin-left: 15rpx;
        font-size: 28rpx;
        border: solid 2rpx rgb(241 242 241);
        border-radius: 5rpx;
      }
    }
  }

  .button {
    position: fixed;
    bottom: 20rpx;
    background-color: rgb(255 255 255);

    .reset {
      width: 230rpx;
      height: 60rpx;
      font-size: 30rpx;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .identify {
      width: 460rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      background-color: rgb(84 188 163);
      border-radius: 5rpx;
    }
  }
}
</style>
