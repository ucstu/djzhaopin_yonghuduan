<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="设置密码" />
    <view class="group-box">
      <text class="text-title">设置密码</text>
      <view class="flex-row justify-between items-center">
        <input
          class="text-input"
          :type="seen ? typeText : typePassword"
          placeholder="请输入新密码"
          v-model="password"
        />
        <image class="image" v-if="seen" src="@/static/icons/eye.png" @click="changeWord" />
        <image class="image" v-else src="@/static/icons/no_eye.png" @click="changeWord" />
      </view>
    </view>
    <view class="group-box">
      <text class="text-title">确认密码</text>
      <view class="flex-row justify-between items-center">
        <input
          class="text-input"
          :type="seen2 ? typeText : typePassword"
          placeholder="请再次输入密码"
          v-model="password2"
        />
        <image class="image" v-if="seen2" src="@/static/icons/eye.png" @click="changeWord2" />
        <image class="image" v-else src="@/static/icons/no_eye.png" @click="changeWord2" />
      </view>
    </view>
    <view class="justify-center group-button">
      <view class="justify-center items-center group-box" @click="savePassWord">
        <text>保存</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'


const password = ref('')
const password2 = ref('')
const seen = ref(true)
const seen2 = ref(true)
const typeText = ref('text')
const typePassword = ref('password')

const savePassWord = () => {
  if (password.value !== password2.value) {
    uni.showToast({
      title: '两次密码不一致',
      icon: 'none',
      duration: 2000
    })
  } else if (password.value === '' || password2.value === '') {
    uni.showToast({
      title: '密码不能为空',
      icon: 'none',
      duration: 2000
    })
  } else if (password.value.length < 6) {
    uni.showToast({
      title: '密码长度不能小于6位',
      icon: 'none',
      duration: 2000
    })
  } else {
    uni.showToast({
      title: '保存成功',
      icon: 'none',
      duration: 2000
    })
  }
}
const changeWord = () => {
  seen.value = !seen.value
}
const changeWord2 = () => {
  seen2.value = !seen2.value
}
</script>

<style lang="scss" scoped>
.page {
  .group-box {
    width: 710rpx;
    height: auto;
    margin-top: 20rpx;
    margin-left: 20rpx;
    line-height: 60rpx;
    border: 2rpx solid rgb(210, 210, 210);
    border-radius: 10rpx;
    .text-title {
      font-size: 28rpx;
      padding-left: 20rpx;
    }
    .text-input {
      font-size: 32rpx;
      padding-left: 20rpx;
    }
  }
  .group-button {
    width: 100%;
    height: 100rpx;
    position: fixed;
    bottom: 40rpx;
    .group-box {
      width: 500rpx;
      background-color: rgb(35, 193, 158);
      font-size: 30rpx;
    }
  }
  .image {
    width: 35rpx;
    height: 35rpx;
    margin-right: 20rpx;
  }
}
</style>
