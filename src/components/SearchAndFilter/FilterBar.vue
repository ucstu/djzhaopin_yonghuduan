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
    <view v-if="emptyShow" class="justify-center image">
      <image src="@/static/icons/nodata.svg" />
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
import {
  getCompanyInfosP0PositionInfos,
  getCompanyInfosPositionInfos,
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { onLoad, onUnload } from "@dcloudio/uni-app";
import { ref } from "vue";

const jobDetails = ref<PositionInformation[]>([]);
const sortValue = ["综合排序", "距离优先", "薪资待遇", "学历要求", "工作经验"];
const sortval = ref(sortValue[0]);
const positionName = ref("");
const emptyShow = ref(false);

onLoad((e) => {
  if (e.position) {
    jobDetails.value = JSON.parse(e.position);
  }
  if (e.company) {
    let companyInfo = JSON.parse(e.company);
    jobDetails.value = [];
    for (const item of companyInfo) {
      getCompanyInfosP0PositionInfos(item.companyInformationId, {}).then(
        (res) => {
          for (const item of res.data.body.positionInformations) {
            jobDetails.value.push(item);
            if (jobDetails.value.length) {
              emptyShow.value = false;
            } else {
              emptyShow.value = true;
            }
          }
        }
      );
    }
  }
  if (e.searchCode) {
    let data = parseInt(e.searchCode);
    if (!data) {
      emptyShow.value = true;
    }
  }
  if (e.company) {
    emptyShow.value = true;
  }
  if (e.name) {
    positionName.value = e.name;
    getCompanyInfosPositionInfos({
      positionType: positionName.value,
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
      if (res.data.body.positionInformations.length === 0) {
        emptyShow.value = true;
      }
    });
  }
  // 筛选职位
  uni.$on("filter", (data) => {
    getCompanyInfosPositionInfos({
      positionType: positionName.value,
      educations: data.degree as (1 | 5 | 2 | 3 | 4)[],
      workingYears: data.experience as (1 | 5 | 2 | 3 | 4 | 6)[],
      workTypes: data.nature as (1 | 2 | 3)[],
      scales: data.size as (1 | 5 | 2 | 3 | 4 | 6)[],
      financingStages: data.stage as (2 | 1 | 3 | 4 | 5 | 6 | 7 | 8)[],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
      if (res.data.body.positionInformations.length) {
        emptyShow.value = false;
      } else {
        emptyShow.value = true;
      }
    });
  });
});

onUnload(() => {
  uni.$off("filter");
});

const popup = ref();
const sort = () => {
  popup.value.show();
};
const sortNum = ref(0);

// 选择排序
const sortChoose = (index: number) => {
  sortNum.value = index;
  sortval.value = sortValue[index];
  if (index === 1) {
    // 距离优先
    getCompanyInfosPositionInfos({
      sort: ["workCityName,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    });
  } else if (index === 2) {
    // 薪资待遇
    getCompanyInfosPositionInfos({
      sort: ["startingSalary,desc"],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    });
  } else if (index === 3) {
    // 学历要求
    getCompanyInfosPositionInfos({
      sort: ["education,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    });
  } else if (index === 4) {
    // 工作经验
    getCompanyInfosPositionInfos({
      sort: ["workingYears,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    });
  } else {
    // 综合排序
    getCompanyInfosPositionInfos({
      sort: ["positionName,asc"],
    }).then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    });
  }
  popup.value.hide();
};

// 查看职位详情
const toPositions = (p: string, c: string) => {
  uni.navigateTo({
    url:
      "/detail/zhiweixiangqing/zhiweixiangqing?companyId=" +
      c +
      "&positionId=" +
      p,
  });
};

// 筛选跳转
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
