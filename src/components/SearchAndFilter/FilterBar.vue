<template>
  <view class="flex-col bar">
    <view class="flex-row equal">
      <view class="items-center justify-center equal-div" @click="sort">
        <text>{{ sortval }}</text>
        <image
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
        />
      </view>
      <view class="items-center justify-center equal-div">
        <text>公司</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image"
        />
      </view>
      <view class="items-center justify-center equal-div" @click="filter">
        <text>筛选</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image"
        />
      </view>
    </view>
    <scroll-view :scroll-y="true" class="job-scroll">
      <JobDetail
        v-for="(JobDetailer, i) in jobDetails"
        :key="i"
        class="list-item"
        :job-detail="JobDetailer"
        @job-click="
          toPositions(
            JobDetailer.positionInformationId,
            JobDetailer.companyInformationId
          )
        "
      />
    </scroll-view>
  </view>
  <wybPopup
    ref="popup"
    :show-close-icon="false"
    :height="400"
    :radius="10"
    mode="size-auto"
    type="bottom"
  >
    <view class="sort-box">
      <view
        v-for="(item, i) in sortValue"
        :key="i"
        class="sort-value"
        :class="sortNum === i ? 'active' : ''"
        @click="sortChoose(i)"
      >
        {{ item }}
      </view>
    </view>
  </wybPopup>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { getCompanyInfosPositionInfos } from "@/services/services";
import { PositionInformation } from "@/services/types";
import { ref } from "vue";

const jobDetails = ref<PositionInformation[]>([]);
const sortValue = ["综合排序", "距离优先", "薪资待遇", "学历要求", "工作经验"];
const sortval = ref(sortValue[0]);

getCompanyInfosPositionInfos({
  sort: ["positionName,asc"],
}).then((res) => {
  jobDetails.value = res.data.body;
});

const toPositions = (p: string, c: string) => {
  uni.navigateTo({
    url:
      "/detail/zhiweixiangqing/zhiweixiangqing?companyId=" +
      c +
      "&positionId=" +
      p,
  });
};

const popup = ref();
const sort = () => {
  popup.value.show();
};
const sortNum = ref(0);
const sortChoose = (index: number) => {
  sortNum.value = index;
  sortval.value = sortValue[index];
  if (index === 1) {
    getCompanyInfosPositionInfos({
      sort: ["workCityName,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body;
    });
  } else if (index === 2) {
    getCompanyInfosPositionInfos({
      sort: ["startingSalary,desc"],
    }).then((res) => {
      jobDetails.value = res.data.body;
    });
  } else if (index === 3) {
    getCompanyInfosPositionInfos({
      sort: ["education,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body;
    });
  } else if (index === 4) {
    getCompanyInfosPositionInfos({
      sort: ["workingYears,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body;
    });
  } else {
    getCompanyInfosPositionInfos({
      sort: ["companyInformationId,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body;
    });
  }
  popup.value.hide();
};

const filter = () => {
  uni.navigateTo({
    url: "/most/shaixuanyemian/shaixuanyemian",
  });
};
</script>

<style lang="scss" scoped>
.active {
  color: rgb(35 193 158);
}

.bar {
  .equal {
    width: 94%;
    height: 60rpx;
    margin-left: 3%;

    .equal-div {
      width: 130rpx;
      height: 60rpx;
      font-size: 28rpx;
      white-space: nowrap;

      .image {
        width: 10rpx;
        height: 7rpx;
        margin: 10rpx 0 7rpx 7rpx;
      }
    }
  }

  .job-scroll {
    width: 100%;
    height: auto;
    overflow-y: auto;
    background-color: rgb(240 240 240);
  }
}

.sort-box {
  width: 90%;
  height: auto;
  margin-top: 20rpx;
  margin-left: 5%;
  font-size: 35rpx;

  .sort-value {
    width: 100%;
    height: 60rpx;
    border-bottom: 3rpx solid rgb(240 240 240);
  }
}
</style>
