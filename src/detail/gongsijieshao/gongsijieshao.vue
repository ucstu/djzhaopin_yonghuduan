<template>
  <NavigationBar title="公司介绍" />
  <view class="flex-col page">
    <view class="flex-col company-description">
      <view class="flex-row items-center">
        <image class="logo" :src="VITE_CDN_URL + companyInfo.logoUrl" />
        <view class="flex-col name-require">
          <text style="font-size: 35rpx; font-weight: bold">{{
            companyInfo.companyName
          }}</text>
          <text class="items-center require"
            >{{ companyInfo.cityName }} |
            {{ financingStages[companyInfo.financingStage] }} |
            {{ scales[companyInfo.scale] }} |
            {{ companyInfo.comprehensionName }}</text
          >
          <view class="require">
            <text>福利:</text>
            <text
              v-for="(benefit, i) in companyInfo.benefits"
              :key="i"
              style="margin-left: 10rpx"
              >{{ benefit }}</text
            >
          </view>
        </view>
      </view>
      <view class="flex-row items-center address">
        <image class="image" src="@/static/icons/map.svg" />
        <text style="padding-left: 20rpx; font-size: 25rpx">{{
          companyInfo.address
        }}</text>
      </view>
      <view class="flex-col basic-profile">
        <view class="items-center profile">基本简介</view>
        <view class="flex-col abstract">
          <text class="us">关于我们</text>
          <view class="abstract-info">
            <text>{{ companyInfo.about }}</text>
          </view>
        </view>
        <view class="flex-col business-information">
          <text class="bus-info">工商信息</text>
          <view class="information">
            <view class="flex-row">
              <text>公司全称</text>
              <text class="infos">{{ companyInfo.fullName }}</text>
            </view>
            <view class="flex-row">
              <text>法人代表</text>
              <text class="infos">{{ companyInfo.legalRepresentative }}</text>
            </view>
            <view class="flex-row">
              <text>注册资本</text>
              <text class="infos">{{ companyInfo.registeredCapital }}</text>
            </view>
            <view class="flex-row">
              <text>机构类型</text>
              <text class="infos">{{ companyInfo.organizationType }}</text>
            </view>
            <view class="flex-row">
              <text>成立时间</text>
              <text class="infos">{{ companyInfo.establishmentTime }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCompanyInfosP0 } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const companyInfo = ref<CompanyInformation>({} as CompanyInformation);

const financingStages = [
  "",
  "未融资",
  "天使轮",
  "A轮",
  "B轮",
  "C轮",
  "D轮及以上",
  "上市公司",
  "不需要融资",
];
const scales = [
  "",
  "少于15人",
  "15-50人",
  "50-150人",
  "150-500人",
  "500-2000人",
  "2000人以上",
];

onLoad((options) => {
  if (options.companyId) {
    getCompanyInfosP0(options.companyId)
      .then((res) => {
        console.log(res.data.body);
        companyInfo.value = res.data.body;
      })
      .catch(failResponseHandler);
  } else {
    uni.showToast({
      title: "参数错误",
      icon: "none",
      duration: 500,
    });
  }
});
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;
  margin-left: 20rpx;
  overflow-y: auto;

  .company-description {
    width: 710rpx;
    border-bottom: 2rpx solid rgb(230 230 230);

    .logo {
      width: 120rpx;
      height: 120rpx;
      border-radius: 10rpx;
    }

    .name-require {
      width: 570rpx;
      padding-left: 20rpx;
      line-height: 50rpx;

      .require {
        font-size: 25rpx;
      }
    }
  }

  .address {
    width: 710rpx;
    height: 80rpx;
    border-bottom: 2rpx solid rgb(230 230 230);
  }

  .basic-profile {
    margin-top: 30rpx;

    .profile {
      height: 80rpx;
      padding-left: 20rpx;
      border-bottom: 2rpx solid rgb(230 230 230);
    }

    .abstract {
      width: 670rpx;
      padding-left: 20rpx;

      .us {
        padding-top: 35rpx;
        font-weight: 700;
      }

      .abstract-info {
        padding-top: 25rpx;
        font-size: 25rpx;
        line-height: 50rpx;
      }
    }
  }

  .business-information {
    width: 670rpx;
    padding-left: 20rpx;
    margin-top: 35rpx;
    line-height: 60rpx;

    .bus-info {
      font-weight: 700;
    }

    .information {
      font-size: 25rpx;

      .infos {
        padding-left: 25rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .image {
    width: 45rpx;
    height: 45rpx;
  }
}
</style>
