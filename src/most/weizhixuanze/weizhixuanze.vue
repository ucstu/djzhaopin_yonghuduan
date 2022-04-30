<template>
  <NavigationBar :title="country" right="切换城市" @right-click="changeCity" />
  <view class="flex-col page">
    <view class="flex-row group-all">
      <view class="justify-center group-left">商圈</view>
      <scroll-view class="flex-row group_center" :scroll-y="true">
        <view class="flex-col">
          <view
            v-for="(con, i) in countries"
            :key="i"
            class="cities"
            :class="countriesIndex == i ? 'active' : ''"
            @click="countriesIndexOf(i)"
          >
            <text>{{ con.countyName }}</text>
          </view>
        </view>
      </scroll-view>
      <scroll-view class="flex-row group_right" :scroll-y="true">
        <view class="flex-col items-center">
          <view
            v-for="(area, i) in areas"
            :key="i"
            class="toponym"
            :class="areasIndex.includes(i) ? 'active' : ''"
            @click="areasIndexOf(i)"
          >
            <text>{{ area }}</text>
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="flex-row button">
      <view
        class="flex-col items-center justify-center reset"
        @click="replacement"
      >
        <text>重置</text>
      </view>
      <view
        class="flex-col items-center justify-center identify"
        @click="savePlace"
      >
        <text>确定</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getAreaInformations } from "@/services/services";
import { AreaInformations } from "@/services/types";
import { computed, reactive, ref } from "vue";

const countries = reactive<AreaInformations>([
  {
    countyName: "不限",
    areas: ["不限"],
  },
]);
getAreaInformations({
  city: "北京市",
}).then((res) => {
  countries.push(...res.data.body);
});
const areas = computed(() => {
  return countries[countriesIndex.value].areas;
});

const countriesIndex = ref(0);
const country = ref("位置");
const countriesIndexOf = (index: number) => {
  countriesIndex.value = index;
  areasIndex.value.splice(1, areasIndex.value.length);
  country.value = "";
  country.value = countries[index].countyName;
};

const changeCity = () => {
  uni.navigateTo({
    url: "/most/chengshixuanze/chengshixuanze",
  });
};

const areasIndex = ref([0]);
const areasIndexOf = (index: number) => {
  if (areasIndex.value.includes(index)) {
    areasIndex.value.splice(areasIndex.value.indexOf(index), 1);
  } else {
    areasIndex.value.push(index);
  }
};
const replacement = () => {
  countriesIndex.value = 0;
  areasIndex.value = [0];
};

const savePlace = () => {
  uni.navigateBack({ delta: 1 });
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 1334rpx;
  padding: 60rpx 0 21rpx;
  margin-top: -50rpx;
  margin-left: 20rpx;
  background-color: rgb(255 255 255);

  .group-all {
    height: 1120rpx;

    .active {
      color: rgb(84 188 163);
    }

    .group-left {
      width: 213rpx;
      font-size: 30rpx;
      font-weight: bold;
      background-color: rgb(244 250 255);
    }

    .group-center {
      width: 248.5rpx;
      overflow-y: hidden;

      .cities {
        width: 200rpx;
        height: 60rpx;
        margin-left: 24rpx;
        overflow: hidden;
        font-size: 30rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .group-right {
      width: 248.5rpx;
      overflow-y: hidden;

      .toponym {
        width: 200rpx;
        height: 60rpx;
        margin-left: 24rpx;
        overflow: hidden;
        font-size: 30rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .button {
    position: fixed;
    bottom: 20rpx;
    width: 710rpx;
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
