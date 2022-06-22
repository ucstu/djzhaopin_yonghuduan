<template>
  <NavigationBar title="隐私设置" />
  <view class="flex-col page">
    <view class="group-1">匿名展示</view>
    <view class="justify-between items-center group-2" @click="privacySet">
      <view class="flex-row justify-center items-center group-box">
        <image :src="VITE_CDN_URL + userInfos.avatarUrl" class="image" />
        <text style="padding-left: 15rpx; font-size: 30rpx"
          >{{ userInfos.firstName }}{{ userInfos.lastName }}</text
        >
        <text
          style="padding-left: 15rpx; font-size: 28rpx; color: rgb(0 0 0 / 60%)"
          >(实名展示)</text
        >
      </view>
      <radio style="transform: scale(0.7)" value="1" :checked="isAnonymous" />
    </view>
    <view class="justify-between items-center group-2" @click="privacySet">
      <view class="flex-row justify-center items-center group-box">
        <image :src="VITE_CDN_URL + userInfos.avatarUrl" class="image" />
        <text style="padding-left: 15rpx; font-size: 30rpx"
          >{{ userInfos.firstName }}先生</text
        >
        <text
          style="padding-left: 15rpx; font-size: 28rpx; color: rgb(0 0 0 / 60%)"
          >(匿名展示)</text
        >
      </view>
      <radio style="transform: scale(0.7)" value="2" :checked="!isAnonymous" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { putUserInfosP0 } from "@/services/services";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const store = useMainStore();

const userInfos = store.userInformation;
const isAnonymous = ref(true);
// 判断显示状态
if (store.userInformation.privacySettings === 1) {
  isAnonymous.value = true;
} else {
  isAnonymous.value = false;
}
// 改变显示状态
const privacySet = () => {
  isAnonymous.value = !isAnonymous.value;
  if (isAnonymous.value) {
    store.userInformation.privacySettings = 1;
  } else {
    store.userInformation.privacySettings = 2;
  }
  putUserInfosP0(
    store.accountInformation.fullInformationId,
    store.userInformation
  )
    .then((res) => {})
    .catch(failResponseHandler);
};
</script>

<style lang="scss" scoped>
.page {
  .group-1 {
    margin-left: 30rpx;
    font-size: 35rpx;
  }

  .group-2 {
    width: 710rpx;
    height: 100rpx;
    margin-top: 20rpx;
    margin-left: 20rpx;

    .group-box {
      padding-left: 10rpx;
    }
  }

  .image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 100%;
  }
}
</style>
