<template>
  <view class="justify-between border" @click="emit('jobClick')">
    <view class="flex-col group-1">
      <view class="flex-col job-infos">
        <text class="name"
          >{{ jobDetail!.name }}{{jobDetail!.positonName}}</text
        >
        <view class="flex-row area-educate">
          <text class="area">{{ jobDetail!.workArea }}</text>
          <text class="educate">{{ education[jobDetail!.education] }}</text>
        </view>
        <view class="flex-row items-center directions">
          <view
            v-for="(directionTag, i) in jobDetail!.directionTags"
            :key="i"
            class="flex-col text-wrapper tags"
          >
            <text class="tag">{{ directionTag }}</text>
          </view>
        </view>
      </view>
      <view class="flex-row company-infos">
        <view class="flex-row items-center name-info">
          <image class="logo" :src="companyInfo.logoUrl" />
          <text class="company">{{ companyInfo.companyName }}</text>
          <text class="company">{{
            financingStage[companyInfo.financingStage]
          }}</text>
          <text class="company">{{ scale[companyInfo.scale] }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col items-end group-2">
      <text class="salary"
        >{{ jobDetail!.startingSalary }}k-{{ jobDetail!.ceilingSalary }}k</text
      >
      <text class="date">{{ jobDetail!.releaseDate }}</text>
    </view>
  </view>
  <view class="box"></view>
</template>

<script lang="ts" setup>
import { getCompanyinfosP0 } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { ref } from "vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  jobDetail: {
    type: Object,
  },
});
const financingStage = ref([
  "",
  "未融资",
  "天使轮",
  "A轮",
  "B轮",
  "C轮",
  "D轮及以上",
  "上市公司",
  "不需要融资",
]);
const scale = ref([
  "",
  "少于15人",
  "15-50人",
  "50-150人",
  "150-500人",
  "500-2000人",
  "2000人以上",
]);
const companyInfo = ref<CompanyInformation>({} as CompanyInformation);
getCompanyinfosP0(props.jobDetail?.companyInformationId).then((res) => {
  companyInfo.value = res.data.body;
});
const emit = defineEmits(["jobClick"]);
const education = ref(["不要求", "大专", "本科", "硕士", "博士"]);
</script>

<style lang="scss" scoped>
.border {
  width: 92%;
  margin-top: 20rpx;
  margin-left: 4%;
  border-bottom: 1px solid rgb(235 235 235);

  .group-1 {
    width: 550rpx;

    .job-infos {
      width: 550rpx;
      line-height: 40rpx;

      .name {
        font-size: 28rpx;
        font-weight: bold;
      }

      .area-educate {
        .area {
          font-size: 24rpx;
        }

        .educate {
          padding-left: 20rpx;
          font-size: 24rpx;
        }
      }

      .directions {
        width: 550rpx;
        overflow: hidden;
        white-space: nowrap;

        .tags {
          margin-right: 15rpx;
          background-color: rgb(240 240 240);
          border-radius: 5rpx;

          .tag {
            padding: 5rpx 10rpx;
            font-size: 20rpx;
          }
        }
      }
    }

    .company-infos {
      width: 550rpx;
      margin-top: 10rpx;

      .company-logo {
        width: 150rpx;
        height: 100rpx;
      }

      .name-info {
        width: 400rpx;
        overflow: hidden;
        font-size: 24rpx;
        text-overflow: ellipsis;
        white-space: nowrap;

        .company {
          padding-left: 10rpx;
        }

        .logo {
          width: 50rpx;
          height: 50rpx;
          border-radius: 50%;
        }
      }
    }
  }

  .group-2 {
    width: 140rpx;

    .salary {
      font-size: 24rpx;
      color: rgb(35 193 158);
    }

    .date {
      font-size: 24rpx;
    }
  }
}

.box {
  width: 100%;
  height: 15rpx;
  background-color: rgb(230 230 230);
}
</style>
