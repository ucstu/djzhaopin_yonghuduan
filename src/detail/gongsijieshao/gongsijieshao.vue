<template>
  <NavigationBar class="header" title="公司介绍" />
  <view class="flex-col page">
    <view class="flex-col company-description">
      <view class="flex-row items-center company-infos">
        <image class="logo" :src="companyInfo.logo" />
        <view class="flex-col name-require">
          <text style="font-weight: 700">{{ companyInfo.name }}</text>
          <text class="require"
            >{{ companyInfo.city }} | {{ companyInfo.financingStage }} |
            {{ companyInfo.scale }} | {{ companyInfo.comprehension }}</text
          >
        </view>
      </view>
      <view class="flex-row items-center address">
        <image class="image" src="@/static/icons/map.png" />
        <text style="padding-left: 20rpx; font-size: 25rpx">{{
          companyInfo.address
        }}</text>
      </view>
      <view class="flex-col basic-profile">
        <view class="items-center profile">基本简介</view>
        <view class="flex-col abstract">
          <text class="us">关于我们</text>
          <view class="abstract-info">
            <text class="about">{{ companyInfo.about }}</text>
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
              <text class="infos">{{ companyInfo.organizatioType }}</text>
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
import { getCompanyinfosCompanyinfoid } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { ref } from "vue";

let companyInfo = ref<CompanyInformation>({});
getCompanyinfosCompanyinfoid().then((res) => {
  companyInfo.value = res.data.body;
});
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;
  margin-left: 20rpx;
  overflow-y: auto;

  .header {
    position: absolute;
  }

  .company-description {
    margin-top: 150rpx;

    .company-infos {
      width: 710rpx;
      height: 160rpx;
      border-bottom: 2rpx solid rgb(230 230 230);

      .logo {
        width: 120rpx;
        height: 120rpx;
        border-radius: 10rpx;
      }

      .name-require {
        width: 570rpx;
        height: 120rpx;
        padding-left: 20rpx;
        line-height: 50rpx;

        .require {
          overflow: hidden;
          font-size: 25rpx;
          white-space: nowrap;
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
        padding-left: 40rpx;
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
  }

  .image {
    width: 35rpx;
    height: 35rpx;
  }
}
</style>
