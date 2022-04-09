<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col group-all">
      <text class="self-info">请完善教育经历（2/3）</text>
      <view class="group-self">
        <text class="text">学校名称</text>
        <input class="input" type="text" placeholder="请输入" v-model="schoolName" />
      </view>
      <view class="group-self">
        <text class="text">学历</text>
        <view class="flex-row justify-between items-center" @click="showEducation">
          <input class="input" placeholder="请填写" v-model="education" />
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self ">
        <text class="text">专业名称</text>
        <input class="input" type="text" placeholder="请输入" v-model="subject" />
      </view>
      <view class="group-self">
        <text class="text">在校时间</text>
        <view class="flex-row " @click="showSchool">
          <view class="justify-center items-center schoolTime">
            <text>{{startSchool}}</text>
          </view>
          <view class="justify-center items-center schoolTime">
            <text>{{endSchool}}</text>
          </view>
        </view>
      </view>
      <wybPopup :showCloseIcon="true" :height="400" :radius="10" mode="size-auto" type="bottom" ref="popup">
        <picker-view v-if="isShowEd" class="picker-view" @change="edChange">
          <picker-view-column class="item">
            <view v-for="(educate,i) in educationValue" :key="i">{{educate}}</view>
          </picker-view-column>
        </picker-view>
        <picker-view v-if="isShowSchool" :value="value" class="picker-view" @change="schoolChange">
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

const schoolName = ref('')
const education = ref('')
const subject = ref('')
const startSchool = ref('入学时间')
const endSchool = ref('毕业时间')
const educationValue = ref([
  '初中',
  '高中',
  '中专',
  '大专',
  '本科',
  '硕士',
  '博士',
])
const edChange = (e) => {
  let val = e.detail.value
  education.value = educationValue.value[val[0]]
  console.log(education.value);

}

const date = new Date()
const startYears = ref([])
const endYears = ref([])
let year = date.getFullYear()
const value = ref([year-2, year])
for (let i = 1970; i <= year; i++) {
  startYears.value.push(i-2)
  endYears.value.push(i)
}

const popup = ref()

const isShowEd = ref(false)
const isShowSchool = ref(false)
const showEducation = () => {
  isShowEd.value = true
  isShowSchool.value = false
  popup.value.show()
}
const showSchool = () => {
  isShowEd.value = false
  isShowSchool.value = true
  popup.value.show()
}

const schoolChange = (e) => {
  let val = e.detail.value
  startSchool.value = startYears.value[val[0]]
  endSchool.value = endYears.value[val[1]]
}
// 下一步
const  nextClick = () => {
  let educationInfo ={
      schoolName: schoolName.value,
      education: education.value,
      subject: subject.value,
      startSchool: startSchool.value,
      endSchool: endSchool.value,
    }
  console.log(educationInfo.schoolName);
  uni.setStorage({
    key: 'education',
    data: educationInfo,
    success: (result) => {
      console.log(result);
    },
    fail: (error) => {
      console.log(error.errMsg);
    }
  })
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
