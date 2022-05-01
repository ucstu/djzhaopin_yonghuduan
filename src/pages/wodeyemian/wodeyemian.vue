<template>
  <view class="flex-col page">
    <view class="group-top">
      <view class="flex-row user-infos" @click="toSelfInfo">
        <image class="avatar" :src="VITE_CDN_URL + userInfos.avatarUrl" />
        <view class="flex-col user-info">
          <text class="name">{{ fullName }}</text>
          <text class="age-educate"
            >{{ userInfos.age }}岁/{{ education[userInfos.education] }}</text
          >
        </view>
      </view>
      <view class="flex-row justify-between apply-infos">
        <view class="flex-col items-center justify-center" @click="onClick_1">
          <text>投递简历</text>
          <text>{{ deliveryNum }}</text>
        </view>
        <view class="flex-col items-center justify-center" @click="onClick_2">
          <text>收藏职位</text>
          <text>0</text>
        </view>
        <view class="flex-col items-center justify-center" @click="onClick_3">
          <text>关注公司</text>
          <text>0</text>
        </view>
        <view class="flex-col items-center justify-center" @click="onClick_4">
          <text>待面试</text>
          <text>0</text>
        </view>
      </view>
    </view>
    <view class="flex-col group-button">
      <view
        class="flex-row justify-between items-center set"
        @click="onClick_5"
      >
        <view class="items-center">
          <image class="image" src="@/static/icons/feeds.png" />
          <text class="interval">附件简历</text>
        </view>
        <image class="arrow-right" src="@/static/icons/arrow-right.png" />
      </view>
      <view
        class="flex-row justify-between items-center set"
        @click="onClick_6"
      >
        <view class="items-center">
          <image class="image" src="@/static/icons/compass.png" />
          <text class="interval">求职意向</text>
        </view>
        <image class="arrow-right" src="@/static/icons/arrow-right.png" />
      </view>
      <view
        class="flex-row justify-between items-center set"
        @click="onClick_7"
      >
        <view class="items-center">
          <image class="image" src="@/static/icons/suggestion.png" />
          <text class="interval">用户反馈</text>
        </view>
        <image class="arrow-right" src="@/static/icons/arrow-right.png" />
      </view>
      <view
        class="flex-row justify-between items-center set"
        @click="onClick_8"
      >
        <view class="items-center">
          <image class="image" src="@/static/icons/ali-clould.png" />
          <text class="interval">隐私设置</text>
        </view>
        <image class="arrow-right" src="@/static/icons/arrow-right.png" />
      </view>
      <view
        class="flex-row justify-between items-center set"
        @click="onClick_9"
      >
        <view class="items-center">
          <image class="image" src="@/static/icons/set.png" />
          <text class="interval">设置</text>
        </view>
        <image class="arrow-right" src="@/static/icons/arrow-right.png" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// import { getUserInfosUserinfoid } from "@/services/services";
import { getUserInfosP0 } from "@/services/services";
import { UserInformation } from "@/services/types";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onShow } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const store = useStore(key);

const userInfos = ref<UserInformation>({} as UserInformation);
const education = ref(["不要求", "大专", "本科", "硕士", "博士"]);
const fullName = ref();
const deliveryNum = ref(0);

onMounted(() => {
  getUserInfosP0(store.state.accountInfo.fullInformationId)
    .then((res) => {
      store.state.userInfo.avatarUrl = res.data.body.avatarUrl;
    })
    .catch(failResponseHandler);
});

onShow(() => {
  userInfos.value = store.state.userInfo;
  fullName.value = userInfos.value.firstName + userInfos.value.lastName;
  // deliveryNum.value =
});

const toSelfInfo = () => {
  uni.navigateTo({ url: "/mine/bianjijianli/bianjijianli" });
};
const onClick_1 = () => {
  uni.navigateTo({ url: "/record/toudijilu/toudijilu" });
};
const onClick_2 = () => {
  uni.navigateTo({ url: "/record/shoucangzhiwei/shoucangzhiwei" });
};
const onClick_3 = () => {
  uni.navigateTo({ url: "/record/guanzhugongsi/guanzhugongsi" });
};
const onClick_4 = () => {
  uni.navigateTo({ url: "/record/daimianshi/daimianshi" });
};
const onClick_5 = () => {
  uni.navigateTo({ url: "/info/shangchuanjianli/shangchuanjianli" });
};
const onClick_6 = () => {
  uni.navigateTo({ url: "/info/qiuzhiyixiang/qiuzhiyixiang" });
};
const onClick_7 = () => {
  uni.navigateTo({ url: "/setting/yonghufankui/yonghufankui" });
};
const onClick_8 = () => {
  uni.navigateTo({ url: "/setting/yinsishezhi/yinsishezhi" });
};
const onClick_9 = () => {
  uni.navigateTo({ url: "/mine/shezhiyemian/shezhiyemian" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 750rpx;
  height: auto;

  .group-top {
    height: 430rpx;
    background-color: rgb(35 193 158);

    .user-infos {
      width: 650rpx;
      margin-top: 150rpx;
      margin-left: 50rpx;

      .avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 100%;
      }

      .user-info {
        padding-left: 30rpx;
        line-height: 50rpx;

        .age-educate {
          font-size: 25rpx;
          white-space: 15rpx;
        }
      }
    }

    .apply-infos {
      width: 650rpx;
      height: 100rpx;
      margin-top: 50rpx;
      margin-left: 50rpx;
      font-size: 25rpx;
    }
  }

  .group-button {
    width: 710rpx;
    margin-top: 30rpx;
    margin-left: 20rpx;

    .set {
      width: 690rpx;
      height: 100rpx;
      padding-left: 10rpx;
      font-size: 30rpx;
      border-bottom: 2rpx solid rgb(200 200 200);

      .interval {
        padding-left: 25rpx;
      }
    }
  }

  .arrow-right {
    width: 25rpx;
    height: 25rpx;
  }

  .image {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
