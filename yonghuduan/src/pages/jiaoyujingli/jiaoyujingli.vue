<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="编辑教育经历" />
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">学校名称</text>
        <input class="text-input" type="text" placeholder="请填写" v-model="schoolName" />
      </view>
      <view class="flex-col group-box">
        <text class="text-title">学历</text>
        <text class="text-input" @click="showEducate">{{ education }}</text>
      </view>
      <view class="group-box">
        <text class="text-title">专业名称</text>
        <input class="text-input" type="text" placeholder="请填写" v-model="subject" />
      </view>
      <view class="group-box">
        <text class="text-title">在校时间</text>
        <view class="flex-row" @click="showSchool">
          <view class="justify-center items-center sch-time">{{ startTime }}</view>
          <view class="justify-center items-center sch-time">{{ overTime }}</view>
        </view>
      </view>
      <view class="justify-center group-button">
        <view class="justify-center items-center button-box">
          <text>保存</text>
        </view>
      </view>
    </view>
    <WybPopup
      ref="popup"
      type="bottom"
      height="300"
      radius="6"
      mode="size-auto"
      :showCloseIcon="false"
    >
      <view class="flex-row" v-if="educate === false">
        <view
          class="flex-col justify-center items-center"
          style="width: 50%;"
          @click="start = true; end = false"
        >
          <text>入学时间</text>
          <text style="font-size: 25rpx;" :class="start ? 'active' : ''">{{ startTime }}</text>
        </view>
        <view
          class="flex-col justify-center items-center"
          style="width: 50%;"
          @click="end = true; start = false"
        >
          <text>毕业时间</text>
          <text style="font-size: 25rpx;" :class="end ? 'active' : ''">{{ overTime }}</text>
        </view>
      </view>
      <picker-view v-if="start" :value="value1" @change="bindChange" class="picker-view">
        <picker-view-column>
          <view class="item" v-for="(item, i) in years" :key="i">{{ item }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, i) in months" :key="i">{{ item }}</view>
        </picker-view-column>
      </picker-view>
      <picker-view v-if="end" :value="value2" @change="bindChange" class="picker-view">
        <picker-view-column>
          <view class="item" v-for="(item, i) in years" :key="i">{{ item }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, i) in months" :key="i">{{ item }}</view>
        </picker-view-column>
      </picker-view>
      <picker-view v-if="educate" @change="bindChange" class="picker-view">
        <picker-view-column>
          <view class="item" v-for="(item, i) in educations" :key="i">{{ item }}</view>
        </picker-view-column>
      </picker-view>
    </WybPopup>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import { ref } from 'vue'
import WybPopup from '@/components/wyb-popup/wyb-popup.vue';


const schoolName = ref('')
const education = ref('请选择')
const subject = ref('')
const startTime = ref('入学时间')
const overTime = ref('结束时间')
const educations = ref([
  '初中',
  '高中',
  '中专',
  '大专',
  '本科',
  '硕士',
  '博士',
])

const start = ref(true)
const end = ref(false)
const educate = ref(false)

const popup = ref()
const showEducate = () => {
  educate.value = true
  start.value = false
  popup.value.show()
}
const showSchool = () => {
  educate.value = false
  start.value = true
  popup.value.show()
}
const date = new Date()
const years = []
const months = []
let year = date.getFullYear()
let month = date.getMonth() + 1
for (let i = 1960; i <= year; i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
const value1 = [year[0], month[0]]
const value2 = [year, month - 1]
const bindChange = (e) => {
  let val = e.detail.value
  year = years[val[0]]
  month = months[val[1]]
  if (start.value) {
    startTime.value = `${year}年${month}月`
  } else if (end.value) {
    overTime.value = `${year}年${month}月`
  } else {
    education.value = educations.value[val[0]]
  }
}
</script>

<style lang="scss" scoped>
.page {
  .active {
    color: rgb(35, 193, 158);
  }
  .group-all {
    width: 710rpx;
    height: auto;
    margin-left: 20rpx;
    margin-top: 120rpx;
    .group-box {
      width: 100%;
      height: 130rpx;
      margin-top: 20rpx;
      border: 2rpx solid rgba(210, 210, 210, 0.5);
      border-radius: 5rpx;
      line-height: 60rpx;
      .text-title {
        font-size: 30rpx;
        padding-left: 20rpx;
      }
      .text-input {
        font-size: 28rpx;
        padding-left: 20rpx;
      }
      .sch-time {
        width: 50%;
        font-size: 28rpx;
      }
    }
    .group-button {
      width: 100%;
      height: 80rpx;
      position: fixed;
      bottom: 40rpx;
      .button-box {
        width: 500rpx;
        background-color: rgb(35, 193, 158);
        font-size: 30rpx;
        color: #fff;
        border-radius: 10rpx;
      }
    }
  }
  .picker-view {
    width: 750rpx;
    height: 600rpx;
    margin-top: 20rpx;
  }
  .item {
    height: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
