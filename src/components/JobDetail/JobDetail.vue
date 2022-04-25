<template>
  <view class="justify-between border" @click="emit('jobClick')">
    <view class="flex-col group-1">
      <view class="flex-col job-infos">
        <text class="name"
          >{{ jobDetail!.name }}{{jobDetail!.positonName}}</text
        >
        <view class="flex-row area-educate">
          <text class="area">{{ jobDetail!.workArea }}</text>
          <text class="educate">{{ jobDetail!.education }}</text>
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
      <!-- <view class="flex-row company-infos">
        <image class="company-logo" :src="jobDetail!.companyLogoAddress" />
        <view class="flex-col name-info">
          <text class="company-name">{{ jobDetail!.companyName }}</text>
          <text class="company-info">{{ jobDetail!.companyInfo }}</text>
        </view>
      </view> -->
    </view>
    <view class="flex-col items-end group-2">
      <text class="salary"
        >{{ jobDetail!.startingSalary }}-{{ jobDetail!.ceilingSalary }}</text
      >
      <text class="date">{{ jobDetail!.releaseDate }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps({
  jobDetail: {
    type: Object,
  },
});
const emit = defineEmits(["jobClick"]);
</script>

<style lang="scss" scoped>
.border {
  margin-top: 20rpx;
  border-bottom: 1px solid rgb(235 235 235);

  .group-1 {
    width: 550rpx;

    .job-infos {
      width: 550rpx;

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

      .company-logo {
        width: 150rpx;
        height: 100rpx;
      }

      .name-info {
        width: 400rpx;

        .company-name {
          padding-top: 15rpx;
          font-size: 24rpx;
        }

        .company-info {
          padding-top: 10rpx;
          overflow: hidden;
          font-size: 24rpx;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .group-2 {
    width: 140rpx;

    .salary {
      font-size: 24rpx;
    }

    .date {
      font-size: 24rpx;
    }
  }
}
</style>
