<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="公司介绍" />
    <view class="flex-col companyDescription">
      <view class="flex-row items-center companyInfos">
        <image class="logo" :src="companyInfo.logo" />
        <view class="flex-col name-require">
          <text style="font-weight: 700;">{{ companyInfo.name }}</text>
          <text
            class="require"
          >{{ companyInfo.city }} | {{ companyInfo.financingStage }} | {{ companyInfo.scale }} | {{ companyInfo.comprehension }}</text>
        </view>
      </view>
      <view class="flex-row items-center address">
        <image class="image" src="@/static/icons/map.png" />
        <text style="font-size: 25rpx;padding-left: 20rpx;">{{ companyInfo.address }}</text>
      </view>
      <view class="flex-col basicProfile">
        <view class="items-center profile">基本简介</view>
        <view class="flex-col abstract">
          <text class="us">关于我们</text>
          <view class="abstractInfo">
            <text class="about">{{ companyInfo.about }}</text>
          </view>
        </view>
        <view class="flex-col businessInformation">
          <text class="busInfo">工商信息</text>
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
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import { getCompanyinfosCompanyinfoid } from '@/services/services'
import { CompanyInformation } from '@/services/types';

let companyInfo = ref<CompanyInformation>({})
getCompanyinfosCompanyinfoid().then(res => {
  companyInfo.value = res.data
})

</script>

<style lang="scss" scoped>
.page {
  height: auto;
  width: 710rpx;
  margin-left: 20rpx;
  overflow-y: auto;
  .header {
    position: absolute;
  }
  .companyDescription {
    margin-top: 150rpx;
    .companyInfos {
      width: 710rpx;
      height: 160rpx;
      border-bottom: 2rpx solid rgb(230, 230, 230);
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
          font-size: 25rpx;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .address {
      width: 710rpx;
      height: 80rpx;
      border-bottom: 2rpx solid rgb(230, 230, 230);
    }
    .basicProfile {
      margin-top: 30rpx;
      .profile {
        height: 80rpx;
        padding-left: 40rpx;
        border-bottom: 2rpx solid rgb(230, 230, 230);
      }
      .abstract {
        width: 670rpx;
        padding-left: 20rpx;
        .us {
          padding-top: 35rpx;
          font-weight: 700;
        }
        .abstractInfo {
          padding-top: 25rpx;
          font-size: 25rpx;
          line-height: 50rpx;
        }
      }
    }
    .businessInformation {
      width: 670rpx;
      margin-top: 35rpx;
      padding-left: 20rpx;
      line-height: 60rpx;
      .busInfo {
        font-weight: 700;
      }
      .information {
        font-size: 25rpx;
        .infos {
          padding-left: 25rpx;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
