<template>
  <NavigationBar />
  <view class="flex-col page">
    <view class="job-expect">
      <text class="expect">求职期望</text>
      <br />
      <text class="recommend">每个求职意向都会有专属的职位推荐</text>
    </view>
    <view class="job-expectation">
      <view
        v-for="(jobExpectation, i) in jobExpectations"
        :key="i"
        class="justify-between items-center job-expects"
        @click="jobExpectationClick(i)"
      >
        <view>
          <text class="job-name">{{ jobExpectation.positionName }}</text>
          <view class="direct-box">
            <text
              v-for="(direction, j) in jobExpectation.directionTags"
              :key="j"
              class="job-direct"
              >{{ direction }}</text
            >
          </view>
          <view class="city-salary">
            <text class="job-city">{{ jobExpectation.cityName }}</text>
            <text class="job-salary"
              >{{ jobExpectation.startingSalary }}k-{{
                jobExpectation.ceilingSalary
              }}k</text
            >
          </view>
        </view>
        <image class="image" src="@/static/icons/arrow-right.png" />
      </view>
    </view>
    <view class="items-center justify-center button" @click="addExcept">
      <image class="image" src="@/static/icons/add-circle.png" />
      <text class="add">添加求职期望</text>
    </view>
    <view class="items-center justify-between entry-time" @click="jobStatus">
      <text>求职状态</text>
      <view class="flex-row justify-center items-center">
        <text class="time">{{ entryTime }}</text>
        <image class="image" src="@/static/icons/arrow-right.png" />
      </view>
    </view>
    <wybPopup
      ref="popup"
      :show-close-icon="false"
      :height="250"
      :radius="10"
      mode="size-auto"
      type="bottom"
    >
      <picker-view
        :value="definedValue"
        class="picker-view"
        @change="entryChange"
      >
        <picker-view-column>
          <view v-for="(start, i) in entryTimes" :key="i" class="item">{{
            start
          }}</view>
        </picker-view-column>
      </picker-view>
    </wybPopup>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  getUserInfosP0JobExpectations,
  putUserInfosP0,
} from "@/services/services";
import { JobExpectation } from "@/services/types";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const jobExpectations = ref<JobExpectation[]>([]);
const entryTime = ref("请选择");
const entryTimes = ["请选择", "随时入职", "2周内入职", "一个月内入职"];
const definedValue = ref([store.state.userInfo.jobStatus]);

onLoad(() => {
  if (store.state.userInfo.jobStatus !== null) {
    entryTime.value = entryTimes[store.state.userInfo.jobStatus];
  }
  getUserInfosP0JobExpectations(store.state.accountInfo.userInformationId, {})
    .then((res) => {
      console.log(res);

      jobExpectations.value = res.data.body;
    })
    .catch(failResponseHandler);
});

const jobExpectationClick = (index: number) => {
  let value = true;
  let jobId = jobExpectations.value[index].jobExpectationId;
  uni.navigateTo({
    url: `/info/qiuzhiqiwang/qiuzhiqiwang?id=` + jobId + `&data=` + value,
  });
};

const addExcept = () => {
  let value = true;
  uni.navigateTo({ url: `/info/qiuzhiqiwang/qiuzhiqiwang?data=${value}` });
};

const popup = ref();
const jobStatus = () => {
  popup.value.show();
};
const entryChange = (e: any) => {
  entryTime.value = entryTimes[e.detail.value[0]];
  store.state.userInfo.jobStatus = e.detail.value[0];
  definedValue.value = [e.detail.value[0]];
  putUserInfosP0(
    store.state.accountInfo.userInformationId,
    store.state.userInfo
  )
    .then((res) => {
      store.commit("setUserInfo", res.data.body);
    })
    .catch(failResponseHandler);
  popup.value.hide();
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 1334rpx;
  margin-right: 20rpx;
  margin-left: 20rpx;
  background-color: rgb(255 255 255);

  .header {
    position: reactive;
  }

  .job-expect {
    width: 100%;

    .expect {
      font-size: 40rpx;
      font-weight: bold;
    }

    .recommend {
      font-size: 25rpx;
    }
  }

  .job-expectation {
    margin-top: 40rpx;

    .job-expects {
      padding-top: 20rpx;
      line-height: 40rpx;

      .job-name {
        font-size: 30rpx;
      }

      .direct-box {
        max-width: 600rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        .job-direct {
          margin-right: 20rpx;
          font-size: 25rpx;
          color: rgb(153 153 153);
        }
      }

      .city-salary {
        font-size: 25rpx;
        color: rgb(153 153 153);

        .job-salary {
          margin-left: 30rpx;
        }
      }

      .right {
        justify-content: right;
      }
    }
  }

  .button {
    height: 80rpx;
    margin-top: 40rpx;
    color: $app-color;
    background-color: rgb(212 251 236);
    border-radius: 5rpx;

    .add {
      margin-left: 20rpx;
      font-size: 28rpx;
    }
  }

  .entry-time {
    height: 60rpx;
    margin-top: 50rpx;

    .time {
      font-size: 25rpx;
    }
  }

  .image {
    width: 35rpx;
    height: 35rpx;
  }

  .picker-view {
    width: 750rpx;
    height: 400rpx;
    margin-top: 20rpx;

    .item {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
