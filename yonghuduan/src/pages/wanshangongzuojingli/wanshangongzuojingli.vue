<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col group-all">
      <text class="self-info">请完善工作经历（3/3）</text>
      <view class="group-self">
        <text class="text">公司名称</text>
        <input class="input" type="text" placeholder="请输入" v-model="companyName" />
      </view>
      <view class="group-self">
        <text class="text">公司行业</text>
        <input class="input" type="text" placeholder="请输入" v-model="companyType" />
      </view>
      <view class="group-self ">
        <text class="text">职位类型</text>
        <input class="input" type="text" placeholder="请输入" v-model="subject" />
      </view>
      <view class="group-self">
        <text class="text">在职时间</text>
        <view class="flex-row " @click="showWorkTime">
          <view class="justify-center items-center schoolTime">
            <text>{{startTime}}</text>
          </view>
          <view class="justify-center items-center schoolTime">
            <text>{{endTime}}</text>
          </view>
        </view>
      </view>
      <wybPopup :showCloseIcon="true" :height="400" :radius="10" mode="size-auto" type="bottom" ref="popup">
        <picker-view  class="picker-view" @change="workChange">
          <picker-view-column class="item" >
            <view style="font-weight: 600;" v-for="(start,i) in startYears" :key="i">{{start}}</view>
          </picker-view-column>
          <picker-view-column class="item">
            <view style="font-weight: 600;" v-for="(end,i) in endYears" :key="i">{{end}}</view>
          </picker-view-column>
        </picker-view>
      </wybPopup>
    </view>
    <view class="justify-center next-click">
      <view class="justify-center items-center next-box" @click="nextClick">
        <text>下一步</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import wybPopup from '@/components/wyb-popup/wyb-popup.vue';

const companyName = ref('')
const companyType = ref('')
const subject = ref('')
const startTime = ref('入职时间')
const endTime = ref('至今')


const date = new Date()
const startYears = ref([])
const endYears = ref([])
let year = date.getFullYear()

for (let i = 1970; i <= year; i++) {
  startYears.value.push(i)
  endYears.value.push(i)
}

const popup = ref()

const showWorkTime = () => {
  popup.value.show()
}

const workChange = (e) => {
  let val = e.detail.value
  startTime.value = startYears.value[val[0]]
  endTime.value = endYears.value[val[1]]
}
// 下一步
const  nextClick = () => {
  let workExperience ={
    companyName: companyName.value,
    companyType: companyType.value,
    subject: subject.value,
    startTime: startTime.value,
    endTime: endTime.value
  }
  uni.setStorage({
    key: 'workExperience',
    data: workExperience,
    success: (result) => {
      console.log(result);
    },
    fail: (error) => {
      console.log(error.errMsg);
    }
  })
  uni.switchTab({ url: '/pages/wodeyemian/wodeyemian' })
}
</script>

<style lang="scss" scoped>
.page {
  .active {
    background-color: rgb(35, 193, 158);
  }
  .group-all {
    width: 710rpx;
    margin-left: 20rpx;
    .self-info {
      font-size: 30rpx;
      font-weight: 600;
    }
    .group-self {
      height: 120rpx;
      margin-top: 20rpx;
      line-height: 60rpx;
      border: 2rpx solid rgb(230, 230, 230);
      .text {
        font-size: 30rpx;
        padding-left: 20rpx;
      }
      .sex {
        font-size: 25rpx;
        margin-right: 15rpx;
        border: 2rpx solid rgb(230, 230, 230);
        padding: 3rpx 40rpx;
      }
      .schoolTime {
        width: 50%;
        font-size: 25rpx;
      }
    }
  }
  .picker-view {
    width: 750rpx;
    height: 400rpx;
    margin-top: 20rpx;
    .item {
      height: 300rpx;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 30rpx;
      color: black;
    }
  }
  .next-click {
    width: 100%;
    height: 80rpx;
    position: fixed;
    bottom: 40rpx;
    .next-box {
      width: 70%;
      background-color: rgb(35, 193, 158);
      font-size: 30rpx;
    }
  }
  .image {
    width: 35rpx;
    height: 35rpx;
  }
  .input {
    margin-left: 20rpx;
    font-size: 27rpx;
  }
}
</style>
