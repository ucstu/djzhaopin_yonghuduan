<template>
  <NavigationBar class="header" title="职位详情" />
  <view class="flex-col page">
    <view class="job-information">
      <view class="flex-row name-salary">
        <view class="name">{{ jobInformation.name }}</view>
        <view class="justify-end salary">
          {{ jobInformation.startingSalary }}-{{ jobInformation.ceilingSalary }}
        </view>
      </view>
      <view class="flex-row area-require">
        <view class="items-center" style="margin-right: 25rpx">
          <image src="@/static/icons/map.png" />
          <text style="margin-left: 15rpx">{{ jobInformation.workArea }}</text>
        </view>
        <view class="items-center" style="margin-right: 25rpx">
          <image src="@/static/icons/work.png" />
          <text style="margin-left: 15rpx">{{
            jobInformation.workingYears
          }}</text>
        </view>
        <view class="items-center">
          <image src="@/static/icons/training.png" />
          <text style="margin-left: 15rpx">{{ jobInformation.education }}</text>
        </view>
      </view>
      <view class="flex-row company-info" @click="toCompanyIn">
        <image class="items-center logo" :src="companyInformation.logo" />
        <view class="flex-col com-infos">
          <text class="com-name">{{ companyInformation.name }}</text>
          <view class="com-info">
            <text>
              {{ companyInformation.financingStage }} |
              {{ companyInformation.scale }} |
              {{ companyInformation.comprehension }}
            </text>
          </view>
        </view>
      </view>
      <view class="items-center hr-info">
        <image class="hr" :src="companyInformation.logo" />
        <text style="padding-left: 15rpx">{{ companyInformation.hrId }}</text>
      </view>
      <view class="job-description">
        <text style="font-size: 30rpx; font-weight: 400">职位描述</text>
        <view class="flex-col description">
          <text style="line-height: 40rpx"
            >职位类型 :{{ jobInformation.positionType }}</text
          >
          <view class="flex-row">
            <text style="line-height: 40rpx">职位亮点 :</text>
            <view
              v-for="(highlight, i) in jobInformation.highlights"
              :key="i"
              style="margin-left: 15rpx; line-height: 40rpx"
              >{{ highlight }}</view
            >
          </view>
          <view>职位描述：{{ jobInformation.description }}</view>
          <view>所属部门：{{ jobInformation.department }}</view>
          <view>周末休息时间：{{ jobInformation.weekendReleseTime }}</view>
          <view>上班时间：{{ jobInformation.workTime }}</view>
          <view>工作地点：{{ jobInformation.workingPlace }}</view>
        </view>
      </view>
    </view>
    <view>
      <!-- <view class="page-body">
        <view class="page-section page-section-gap">
          <map
            style="width: 100%; height: 300px"
            :latitude="35"
            :longitude="95"
            :markers="covers"
          ></map>
        </view>
      </view> -->
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  getCompanyinfosCompanyinfoid,
  getCompanyinfosCompanyinfoidPositioninfosPositioninfoid,
} from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { ref } from "vue";

const jobInformation = ref<CompanyInformation>({});
getCompanyinfosCompanyinfoidPositioninfosPositioninfoid(
  { companyinfoid: "asd165a1d56a" },
  { positioninfoid: "adjalkdlak" }
).then((res) => {
  jobInformation.value = res.data.body;
});
const companyInformation = ref<CompanyInformation>({});
getCompanyinfosCompanyinfoid({ companyinfoid: "asd165a1d56a" }).then((res) => {
  companyInformation.value = res.data.body;
});

const toCompanyIn = () => {
  uni.navigateTo({ url: "/detail/gongsijieshao/gongsijieshao" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;
  margin-left: 20rpx;
  overflow-y: auto;

  image {
    width: 35rpx;
    height: 35rpx;
  }

  .job-information {
    .name-salary {
      margin-top: 30rpx;

      .name {
        width: 500rpx;
        padding-left: 10rpx;
        font-size: 40rpx;
        font-weight: 600;
      }

      .salary {
        width: 200rpx;
        font-size: 30rpx;
        color: rgb(84 188 163);
      }
    }

    .area-require {
      margin-top: 15rpx;
      font-size: 25rpx;
    }
  }

  .company-info {
    margin-top: 30rpx;

    .logo {
      width: 100rpx;
      height: 100rpx;
    }

    .com-infos {
      padding-left: 20rpx;

      .com-name {
        font-size: 30rpx;
      }

      .com-info {
        margin-top: 10rpx;
        font-size: 25rpx;
        color: rgb(150 150 150);
      }
    }
  }

  .hr-info {
    margin-top: 30rpx;
    font-size: 25rpx;

    .hr {
      width: 60rpx;
      height: 60rpx;
      border-radius: 100%;
    }
  }

  .job-description {
    margin-top: 30rpx;

    .description {
      font-size: 25rpx;
      line-height: 50rpx;
      color: rgb(176 176 176);
    }
  }
}
</style>
