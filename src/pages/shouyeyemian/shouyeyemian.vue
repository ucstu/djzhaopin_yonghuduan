<template>
  <view class="flex-col page">
    <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view
      class="section-1"
      :style="'height: ' + navigationBarTop + 'px'"
    ></view>
    <view class="flex-col section-2" style="padding: 0 20rpx 20rpx">
      <view
        class="justify-between items-center"
        :style="
          'height: ' +
          navigationBarHeight +
          'px; width: ' +
          navigationBarWidth +
          'px'
        "
      >
        <scroll-view
          :scroll-x="true"
          :style="'width: ' + expectationWidth + 'px'"
          class="flex-row list"
        >
          <text
            v-for="(name, i) in expects"
            :key="i"
            class="list-item"
            :class="activeIndex === i ? 'active' : ''"
            @click="changeJobType(i)"
          >
            {{ name }}
          </text>
        </scroll-view>
        <view class="flex-row">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254586402738.png"
            class="image"
            @click="image_5OnClick"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587111646.png"
            class="image image-2"
            @click="image_6OnClick"
          />
        </view>
      </view>
      <view class="justify-between group-2">
        <view class="flex-row group-3">
          <text
            v-for="(item, i) in recommend"
            :key="i"
            style="margin-right: 20rpx"
            :class="showRecommend === i ? 'is-active' : ''"
            @click="recommended(i)"
            >{{ item }}</text
          >
        </view>
        <view class="flex-row group-4">
          <view class="flex-row">
            <text @click="text_22OnClick">{{ jobFilter.workCityName }}</text>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
              class="image-3 image-4"
            />
          </view>
          <view class="flex-row group-6">
            <text @click="text_23OnClick">??????</text>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
              class="image-3 image-5"
            />
          </view>
        </view>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587777410.png"
        class="image-6"
      />
    </view>
    <!--  #endif -->
    <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view class="section-1"></view>
    <view class="flex-col section-2" style="padding: 0 10rpx 20rpx">
      <view style="width: 92%; height: auto; margin-left: 4%">
        <view class="justify-between items-center">
          <scroll-view :scroll-x="true" class="flex-row list">
            <text
              v-for="(name, i) in expects"
              :key="i"
              class="list-item"
              :class="activeIndex === i ? 'active' : ''"
              @click="changeJobType(i)"
            >
              {{ name }}
            </text>
          </scroll-view>
          <view class="flex-row">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254586402738.png"
              class="image"
              @click="image_5OnClick"
            />
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587111646.png"
              class="image image-2"
              @click="image_6OnClick"
            />
          </view>
        </view>
        <view class="justify-between group-2">
          <view class="flex-row group-3">
            <text
              v-for="(item, i) in recommend"
              :key="i"
              style="margin-right: 20rpx"
              :class="showRecommend === i ? 'is-active' : ''"
              @click="recommended(i)"
              >{{ item }}</text
            >
          </view>
          <view class="flex-row group-4">
            <view class="flex-row">
              <text @click="text_22OnClick">{{ jobFilter.workCityName }}</text>
              <image
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                class="image-3 image-4"
              />
            </view>
            <view class="flex-row group-6">
              <text @click="text_23OnClick">??????</text>
              <image
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                class="image-3 image-5"
              />
            </view>
          </view>
        </view>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587777410.png"
          class="image-6"
        />
      </view>
    </view>
    <!--  #endif -->
    <view class="flex-col">
      <scroll-view
        :scroll-y="true"
        :refresher-enabled="true"
        :refresher-triggered="triggered"
        :refresher-threshold="100"
        class="job-detail"
        @scrolltolower="onReachBottom"
        @refresherpulling="onPulling"
        @refresherrefresh="onRefresh"
        @refresherrestore="onRestore"
        @refresherabort="onAbort"
      >
        <JobDetail
          v-for="(jobDetail, i) in jobDetails"
          :key="i"
          :job-detail="jobDetail"
          @job-click="jobDescription(i)"
        >
          <view class="box">11</view>
        </JobDetail>
        <view
          v-if="loadMore"
          class="justify-center items-center"
          style="
            width: 100%;
            height: 60rpx;
            font-size: 35rpx;
            background-color: rgb(240 240 240);
          "
          >?????????</view
        >
        <view
          v-if="!loadMore"
          class="justify-center items-center"
          style="
            width: 100%;
            font-size: 35rpx;
            background-color: rgb(240 240 240);
          "
          >???????????????</view
        >
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import {
  getAreaInformations,
  getCompanyInfosPositionInfos,
} from "@/services/services";
import {
  GetCompanyInfosPositionInfosQueryParams,
  PositionInformation,
} from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { onLoad, onUnload } from "@dcloudio/uni-app";
import { computed, onMounted, ref, watchEffect } from "vue";

const store = useMainStore();

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
// ?????????????????????????????????
const navigationBarHeight = store.menuButtonInformation.height;

const navigationBarTop = store.menuButtonInformation.top;

const navigationBarWidth = store.menuButtonInformation.left - uni.upx2px(30);

const expectationWidth = store.menuButtonInformation.left - uni.upx2px(170);
/* #endif */

const cityValue = computed(() =>
  store.jobExpectations.map((item: { cityName: string }) => item.cityName)
);
const city = ref<string[]>([]);
const activeIndex = ref(0);
const showRecommend = ref(0);
const triggered = ref(false);
const loadMore = ref(false);
// const cityName = ref('');
//?????????
const expects = computed(() =>
  store.jobExpectations.map(
    (item: { positionName: string }) => item.positionName
  )
);
const filters = ref({} as any); // ?????????
const recommend = ref(["??????", "??????", "??????"]);
/* ???????????? */
const jobDetails = ref<PositionInformation[]>([]);
// ????????????
const jobFilter = ref<GetCompanyInfosPositionInfosQueryParams>({
  positionType: "", // ????????????
  workCityName: "", // ????????????
  workAreaNames: [], // ????????????
  directionTags: <string[]>[], // ????????????
  salary: `0,0`, // ????????????
  workingYears: <(1 | 2 | 3 | 4 | 5 | 6)[]>[], // ????????????
  educations: <(1 | 2 | 3 | 4 | 5)[]>[], // ??????
  workTypes: <(1 | 2 | 3)[]>[], // ????????????
  scales: <(1 | 2 | 3 | 4 | 5 | 6)[]>[], // ????????????
  financingStages: <(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)[]>[], // ????????????
  comprehensions: <string[]>[], // ????????????
  workingPlace: `0,0`, // ????????????
  sort: ["positionName,asc"],
  size: 10,
});

watchEffect(() => {
  // ?????????????????????????????????????????????????????????????????????
  if (activeIndex.value >= expects.value.length) {
    activeIndex.value = 0;
    jobFilter.value.positionType = expects.value[activeIndex.value];
    jobFilter.value.workCityName = cityValue.value[activeIndex.value];
    jobFilter.value.directionTags =
      store.jobExpectations[activeIndex.value].directionTags;
    jobFilter.value.salary = `${
      store.jobExpectations[activeIndex.value].startingSalary
    },${store.jobExpectations[activeIndex.value].ceilingSalary}`;
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        jobDetails.value = res.data.body.positionInformations;
      })
      .catch(failResponseHandler);
  }
});

/* ?????? */
onMounted(() => {
  jobFilter.value.positionType = expects.value[activeIndex.value];
  jobFilter.value.workCityName = cityValue.value[activeIndex.value];
  if (store.jobExpectations.length) {
    jobFilter.value.directionTags =
      store.jobExpectations[activeIndex.value].directionTags;
    jobFilter.value.salary = `${
      store.jobExpectations[activeIndex.value].startingSalary
    },${store.jobExpectations[activeIndex.value].ceilingSalary}`;
  }
  getCompanyInfosPositionInfos(jobFilter.value)
    .then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    })
    .catch(failResponseHandler);
  getAreaInformations({ cityName: jobFilter.value.workCityName })
    .then((res) => {
      store.areas = res.data.body;
    })
    .catch(failResponseHandler);
});

onLoad(() => {
  /* ???????????? */
  uni.$on("liveCity", (data) => {
    if (store.jobExpectations.length) {
      jobFilter.value.workCityName = data;
      getCompanyInfosPositionInfos(jobFilter.value)
        .then((res) => {
          jobDetails.value = res.data.body.positionInformations;
        })
        .catch(failResponseHandler);
    }
  });
  /* ???????????? */
  uni.$on("city", (data) => {
    jobFilter.value.workCityName = data;
  });
  uni.$on("place", (data) => {
    city.value = [];
    city.value = data;
    jobFilter.value.workAreaNames = city.value;
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        jobDetails.value = res.data.body.positionInformations;
      })
      .catch(failResponseHandler);
  });
  /**???????????? */
  uni.$on("filterValue", (data) => {
    filters.value = data;
    jobFilter.value.workingYears = filters.value.workingYears;
    jobFilter.value.educations = filters.value.educations;
    jobFilter.value.workTypes = filters.value.workTypes;
    jobFilter.value.scales = filters.value.scales;
    jobFilter.value.financingStages = filters.value.financingStages;
    jobFilter.value.comprehensions = filters.value.comprehensions;
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        jobDetails.value = res.data.body.positionInformations;
      })
      .catch(failResponseHandler);
  });
});
// ????????????????????????
onUnload(() => {
  uni.$off("liveCity");
  uni.$off("place");
  uni.$off("filterValue");
  uni.$off("city");
});

/* ???????????? */
const changeJobType = (index: number) => {
  activeIndex.value = index;
  city.value.length = 0;
  filters.value = {};
  // ?????? jobFilter ????????????
  jobFilter.value.positionType = expects.value[activeIndex.value];
  jobFilter.value.workCityName = cityValue.value[activeIndex.value];
  jobFilter.value.directionTags =
    store.jobExpectations[activeIndex.value].directionTags;
  jobFilter.value.salary = `${
    store.jobExpectations[activeIndex.value].startingSalary
  },${store.jobExpectations[activeIndex.value].ceilingSalary}`;
  jobFilter.value.workingYears = [];
  jobFilter.value.educations = [];
  jobFilter.value.workTypes = [];
  jobFilter.value.scales = [];
  jobFilter.value.financingStages = [];
  jobFilter.value.comprehensions = [];
  jobFilter.value.sort = ["positionName,asc"];
  getCompanyInfosPositionInfos(jobFilter.value)
    .then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    })
    .catch(failResponseHandler);
  getAreaInformations({ cityName: jobFilter.value.workCityName })
    .then((res) => {
      store.areas = res.data.body;
    })
    .catch(failResponseHandler);
};
/* ???????????????????????????????????? */
const recommended = (index: number) => {
  showRecommend.value = index;
  if (index === 0) {
    // ??????
    jobFilter.value.workingPlace = `0,0`;
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        jobDetails.value = res.data.body.positionInformations;
      })
      .catch(failResponseHandler);
  } else if (index === 1) {
    // ??????
    jobFilter.value.sort = [];
    uni.getLocation({
      success(res) {
        jobFilter.value.workingPlace = (res.longitude +
          "," +
          res.latitude) as `${number},${number}`;
        getCompanyInfosPositionInfos(jobFilter.value)
          .then((res) => {
            jobDetails.value = res.data.body.positionInformations;
          })
          .catch(failResponseHandler);
      },
    });
  } else {
    // ??????
    jobFilter.value.sort = ["createdAt,desc"];
    jobFilter.value.workingPlace = `0,0`;
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        jobDetails.value = res.data.body.positionInformations;
      })
      .catch(failResponseHandler);
  }
};

/* ????????????????????? */
const onPulling = () => {
  triggered.value = true;
};
const onRefresh = () => {
  setTimeout(() => {
    triggered.value = false;
  }, 1000);
};
/* ????????????????????? */
const onRestore = () => {
  jobFilter.value.positionType =
    store.jobExpectations[activeIndex.value].positionName;
  jobFilter.value.workCityName = cityValue.value[activeIndex.value];
  jobFilter.value.directionTags =
    store.jobExpectations[activeIndex.value].directionTags;
  jobFilter.value.salary = `${
    store.jobExpectations[activeIndex.value].startingSalary
  },${store.jobExpectations[activeIndex.value].ceilingSalary}`;
  getCompanyInfosPositionInfos(jobFilter.value)
    .then((res) => {
      jobDetails.value = res.data.body.positionInformations;
    })
    .catch(failResponseHandler);
};
const onAbort = () => {
  // triggered.value = false
};
/* ?????????????????????????????? */
const onReachBottom = () => {
  loadMore.value = true;
  setTimeout(() => {
    getCompanyInfosPositionInfos(jobFilter.value)
      .then((res) => {
        loadMore.value = false;
        for (const item of res.data.body.positionInformations) {
          jobDetails.value.push(item);
        }
      })
      .catch(failResponseHandler);
    loadMore.value = false;
  }, 3000);
};
/** ?????????????????? */
const image_5OnClick = () => {
  uni.navigateTo({ url: "/info/qiuzhiqiwang/qiuzhiqiwang?data=2" });
};
/**
 * ????????????
 */
const image_6OnClick = () => {
  uni.navigateTo({
    url: `/most/sousuoyemian/sousuoyemian?city=` + jobFilter.value.workCityName,
  });
};
/* ???????????? */
const text_22OnClick = () => {
  uni.navigateTo({
    url:
      `/most/weizhixuanze/weizhixuanze?city=` +
      jobFilter.value.workCityName +
      "&areas=" +
      JSON.stringify(city.value),
  });
};
const text_23OnClick = () => {
  uni.navigateTo({
    url:
      "/most/shaixuanyemian/shaixuanyemian?filter=" +
      JSON.stringify(filters.value),
  });
};
/* ?????????????????? */
const jobDescription = (index: number) => {
  let companyId = jobDetails.value[index].companyInformationId;
  let positionId = jobDetails.value[index].positionInformationId;
  uni.navigateTo({
    url:
      "/detail/zhiweixiangqing/zhiweixiangqing?companyId=" +
      companyId +
      "&positionId=" +
      positionId,
  });
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .section-1 {
    height: 45rpx;
    background-color: rgb(37 85 212);
  }

  .section-2 {
    width: 100%;
    height: auto;
    background-color: rgb(37 85 212);

    .group-2 {
      margin-top: 15rpx;

      .group-3 {
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(209 205 205);
        white-space: nowrap;

        .is-active {
          color: rgb(255 255 255);
        }

        .text-4 {
          margin-left: 32rpx;
        }

        .text-5 {
          margin-left: 29rpx;
        }
      }

      .group-4 {
        margin-top: 5rpx;
        font-size: 20rpx;
        line-height: 17rpx;
        color: rgb(255 255 255);
        white-space: nowrap;

        .group-6 {
          margin-left: 27rpx;

          .image-5 {
            margin: 6rpx 0 5rpx 3rpx;
          }
        }

        .image-4 {
          margin: 7rpx 0 4rpx 3rpx;
        }

        .image-3 {
          width: 10rpx;
          height: 7rpx;
        }
      }
    }

    .image-6 {
      width: 100%;
      height: 200rpx;
      margin-top: 26rpx;
      border-radius: 25rpx;
    }

    .list {
      margin: 3rpx 0 9rpx;
      overflow: hidden;
      white-space: nowrap;

      .active {
        font-size: 35rpx !important;
        color: rgb(255 255 255) !important;
      }

      .list-item {
        margin-right: 12rpx;
        font-size: 28rpx;
        line-height: 32rpx;
        color: rgb(209 205 205);
        white-space: nowrap;
      }
    }

    .image {
      width: 45rpx;
      height: 44rpx;
    }

    .image-2 {
      margin-left: 30rpx;
    }
  }

  .footer {
    height: 101rpx;
    padding: 9rpx 49rpx 11rpx 56rpx;
    margin-top: 61rpx;
    overflow: hidden;
    border: solid 2rpx rgb(0 0 0);

    .group-15 {
      width: 79rpx;
      height: 76rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;

      .text-52 {
        margin-top: 3rpx;
      }
    }

    .group-16 {
      height: 77rpx;
      font-size: 20rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;

      .text-53 {
        margin-top: 4rpx;
      }
    }

    .group-17 {
      width: 79rpx;
      height: 72rpx;
      margin-top: 5rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-18 {
      width: 79rpx;
      height: 74rpx;
      margin-top: 3rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .image-12 {
      width: 54rpx;
      height: 54rpx;
    }
  }

  .job-detail {
    // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    max-height: 800rpx;

    // #endif
    // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    max-height: 1100rpx;

    // #endif
    overflow: hidden;
    background-color: rgb(240 240 240);
  }
}
</style>
