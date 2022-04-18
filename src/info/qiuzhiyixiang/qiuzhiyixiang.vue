<template>
  <NavigationBar class="header" />
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
        class="justify-between job-expects"
      >
        <view>
          <text class="job-name">{{ jobExpectation.name }}</text>
          <view>
            <text
              v-for="(direction, j) in jobExpectation.directions"
              :key="j"
              class="job-direct"
              >{{ direction }}</text
            >
          </view>
          <view class="city-salary">
            <text class="job-city">{{ jobExpectation.city }}</text>
            <text class="job-salary">{{ jobExpectation.salary }}</text>
          </view>
        </view>
        <view class="items-center">
          <text>></text>
        </view>
      </view>
    </view>
    <view class="items-center justify-center button" @click="addExcept">
      <image class="image" src="@/static/icons/add-circle.png" />
      <text class="add">添加求职期望</text>
    </view>
    <view class="items-center justify-between entry-time">
      <text>求职状态</text>
      <text class="time">随时入职 ></text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive } from "vue";

const jobExpectations = reactive([
  {
    name: "后段工程师",
    salary: "8K-9K",
    directions: ["前端开发", "后端开发"],
    city: "成都",
  },
  {
    name: "前端工程师",
    salary: "5K-9K",
    directions: ["React"],
    city: "重庆",
  },
]);
const entryTime = reactive(["随时入职", "2周内入职", "一个月内入职"]);

const addExcept = () => {
  uni.navigateTo({ url: "/info/qiuzhiqiwang/qiuzhiqiwang" });
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

      .job-direct {
        margin-right: 20rpx;
        font-size: 25rpx;
        color: rgb(153 153 153);
      }

      .city-salary {
        font-size: 25rpx;
        color: rgb(153 153 153);

        .job-city {
          margin-right: 30rpx;
        }

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

    image {
      width: 35rpx;
      height: 35rpx;
    }

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
}
</style>
