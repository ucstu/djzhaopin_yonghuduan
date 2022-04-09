<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col group-all">
      <text class="self-info">请完善个人信息（1/3）</text>
      <view class="group-self">
        <text class="text">姓名</text>
        <input class="input" type="text" placeholder="请输入" v-model="inputName" />
      </view>
      <view class="group-self">
        <text class="text">出生日期</text>
        <view class="flex-row justify-between items-center" @click="showDate">
          <input class="input" v-model="birthday" />
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self justify-center items-center justify-between">
        <text class="text">性别</text>
        <view class="flex-row items-center" style="height: auto;">
          <text class="sex" :class="isActiveMan ? 'active' : ''"
            @click="isActiveMan = !isActiveMan; isActiveMo = !isActiveMo">{{ sexMan }}</text>
          <text class="sex" :class="isActiveMo ? 'active' : ''"
            @click="isActiveMo = !isActiveMo; isActiveMan = !isActiveMan">{{ sexMo }}</text>
        </view>
      </view>
      <view class="group-self">
        <text class="text">城市</text>
        <view class="flex-row justify-between items-center" @click="choseCity">
          <input class="input" type="text" placeholder="请选择" />
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self">
        <text class="text">邮箱</text>
        <input class="input" type="text" placeholder="请填写" v-model="emailValue" />
      </view>
      <wybPopup :showCloseIcon="true" :height="400" :radius="10" mode="size-auto" type="bottom" ref="popup">
        <picker-view :value="value" @change="bindChange" class="picker-view">
          <picker-view-column>
            <view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
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

const inputName = ref('')
const isActiveMan = ref(true)
const isActiveMo = ref(false)
const sexMan = ref('男')
const sexMo = ref('女')
const emailValue = ref('')
// 获取时间
const date = new Date()
const years = ref([])
let year = date.getFullYear()
const months = ref([])
let month = date.getMonth() + 1
const days = ref([])
let day = date.getDate()
let birthday = ref(year + '-' + month + '-' + day)
const popup = ref()
const showDate = () => {
  popup.value.show()
}
for (let i = 1970; i <= date.getFullYear(); i++) {
  years.value.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.value.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.value.push(i)
}
const value = ref([9999, month - 1, day - 1])
const bindChange = (e) => {
  let val = e.detail.value
  year = years.value[val[0]]
  month = months.value[val[1]]
  day = days.value[val[2]]
  birthday.value = year + '-' + month + '-' + day
}
// 下一步
const sex = ref()
const nextClick = () => {
  if (isActiveMan.value === true) {
    sex.value = sexMan.value
  } else if (isActiveMo.value === true) {
    sex.value = sexMo.value
  }
  let information = {
    userName: inputName,
    birthday: birthday,
    sex: sex,
    email: emailValue
  }
  uni.setStorage({
    key: 'key',
    data: information,
    success: (result) => {
      console.log(result);
    },
    fail: (error) => {
      console.log(error.errMsg);
    }
  })
  uni.navigateTo({ url: '/pages/wanshanjiaoyujingli/wanshanjiaoyujingli' })
}


const choseCity = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
const view_2OnClick = () => {
  uni.navigateTo({ url: '/pages/wanshanjiaoyujingli/wanshanjiaoyujingli' })
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
