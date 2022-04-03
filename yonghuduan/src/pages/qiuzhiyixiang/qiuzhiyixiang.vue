<template>
  <view class="flex-col page">
    <NavigationBar class="header" />
    <view class="job_expect">
      <text class="expect">求职期望</text>
      <br />
      <text class="recommend">每个求职意向都会有专属的职位推荐</text>
    </view>
    <view class="job_expectation">
      <view
        class="justify-between job_expects"
        v-for="(jobExpectation, i) in jobExpectations"
        :key="i"
      >
        <view>
          <text class="job_name">{{ jobExpectation.name }}</text>
          <view>
            <text
              class="job_direct"
              v-for="(direction, j) in jobExpectation.directions"
              :key="j"
            >{{ direction }}</text>
          </view>
          <view class="city_salary">
            <text class="job_city">{{ jobExpectation.city }}</text>
            <text class="job_salary">{{ jobExpectation.salary }}</text>
          </view>
        </view>
        <view class="items-center">
          <text>></text>
        </view>
      </view>
    </view>
    <view class="items-center justify-center button">
      <image class="image" src="@/static/icons/add-circle.png" />
      <text class="add">添加求职期望</text>
    </view>
    <view class="items-center justify-between entry_time">
      <text>求职状态</text>
      <text class="time">随时入职 ></text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'


const jobExpectations = reactive([
  {
    name: '后段工程师',
    salary: '8K-9K',
    directions: ['前端开发', '后端开发'],
    city: '成都'
  },
  {
    name: '前端工程师',
    salary: '5K-9K',
    directions: ['React'],
    city: '重庆'
  },
])
const entryTime = reactive([
  '随时入职',
  '2周内入职',
  '一个月内入职'
])

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const view_7OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const view_8OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  margin-left: 20rpx;
  margin-right: 20rpx;
  height: 1334rpx;
  width: 710rpx;
  .header {
    position: reactive;
  }
  .job_expect {
    width: 100%;
    .expect {
      font-size: 40rpx;
      font-weight: bold;
    }
    .recommend {
      font-size: 25rpx;
    }
  }
  .job_expectation {
    margin-top: 40rpx;
    .job_expects {
      padding-top: 20rpx;
      line-height: 40rpx;
      .job_name {
        font-size: 30rpx;
      }
      .job_direct {
        margin-right: 20rpx;
        font-size: 25rpx;
        color: rgb(153, 153, 153);
      }
      .city_salary {
        font-size: 25rpx;
        color: rgb(153, 153, 153);
        .job_city {
        }
        .job_salary {
          margin-left: 30rpx;
        }
      }
      .right {
        justify-content: right;
      }
    }
  }
  .button {
    margin-top: 40rpx;
    color: $app-color;
    height: 80rpx;
    background-color: rgb(212, 251, 236);
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
  .entry_time {
    height: 60rpx;
    margin-top: 50rpx;
    .time {
      font-size: 25rpx;
    }
  }
}
</style>
