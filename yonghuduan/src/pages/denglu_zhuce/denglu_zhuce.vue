<template>
  <view class="flex-col items-center page">
    <view class="flex-col group_1">
      <text>登录/注册</text>
      <view class=" textarea">
        <view class="items-center phone-number">
          <input style="padding-left: 20rpx;" type="number" placeholder="请输入你的手机号" :maxlength="11"
            v-model="inputValue" />
        </view>
        <view class="flex-row justify-between items-center verification">
          <input style="padding-left: 20rpx;" type="number" placeholder="请输入验证码" v-model="verification" />
          <button class="justify-center items-center btn" @click="getVerification">获取验证码</button>
        </view>
      </view>
      <view class="justify-center items-center next" @click="nextStep">
        <text>登录 </text>
      </view>
      <view class="flex-row items-center justify-between other-type">
        <text>忘记密码？</text>
        <text>注册账号</text>
      </view>
      <view class="flex-row items-center agree">
        <checkbox style="transform: scale(0.7);" :checked="isAgree" @click="isAgree = !isAgree"></checkbox>
        <view>同意
          <text style="color: rgb(35, 193, 158);">《东江用户协议》</text>和
          <text style="color: rgb(35, 193, 158);">《东江登录政策》</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_2">
      <text>客服（投诉）电话：4008 2082 02（工作日9：00-18：00）</text>
      <text>违法和不良信息举报、未成年人投诉举报渠道同上</text>
      <text>客服邮箱：cc@dongjiang 北京市人社局电话：12333</text>
      <text>营业执照|人力资源服务许可证|增值电信业务经营许可证</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { putAccounts } from '@/services/services'

const verificationCode = ref({})
putAccounts(
  {
    phoneNumber: '17323677595',
    verificationCode: '1456'
  }
).then(res => {
  verificationCode.value = res.data.accountInfo

})

const verCode = computed(() => {
  // @ts-ignore
  return verificationCode.value.verificationCode
})

const wrongCode = ref('')

const inputValue = ref('')
const verification = ref('')
const isAgree = ref(false)
const nextStep = () => {
  if (inputValue.value.length === 11 && isAgree.value === true && verification.value === verCode.value) {
    uni.navigateTo({ url: '/pages/shuruyanzhengma/shuruyanzhengma' })
    uni.setStorage({
      key: 'tel',
      data: inputValue.value,
      success: (result) => {
        console.log(result);

      },
      fail: (error) => {
        console.log(error);

      }
    })
  } else if (inputValue.value.length < 11) {
    uni.showToast({
      title: '请输入正确的手机号',
      icon: 'none'
    })
    inputValue.value = ''
  } else if (isAgree.value === false) {
    uni.showToast({
      title: '请同意协议',
      icon: 'none'
    })
  } else if (verification.value !== verCode.value) {
    uni.showToast({
      title: '验证码错误',
      icon: 'none'
    })
  }
}
const getVerification = () => {
  if (inputValue.value.length === 11) {
    uni.showToast({
      title: '验证码已发送' + inputValue.value,
      icon: 'none'
    })

  } else {
    uni.showToast({
      title: '请输入正确的手机号',
      icon: 'none'
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  .group_1 {
    font-size: 40rpx;
    width: 600rpx;
    position: relative;
    top: 200rpx;
    .textarea {
      font-size: 30rpx;
      margin-top: 30rpx;
      height: 160rpx;
      border-radius: 5rpx;
      .phone-number {
        height: 80rpx;
        border-bottom: 2rpx solid rgb(163, 154, 154);
      }
      .verification {
        height: 80rpx;
        border-bottom: 2rpx solid rgb(163, 154, 154);
        .btn {
          width: 200rpx;
          height: 60rpx;
          margin: 0 0;
          border-radius: 5rpx;
          background-color: rgb(230, 230, 230);
          font-size: 25rpx;
        }
      }
    }
    .next {
      width: 600rpx;
      height: 80rpx;
      margin-top: 30rpx;
      font-size: 30rpx;
      background-color: rgb(35, 193, 158);
      border-radius: 10rpx;
      color: #fff;
    }
    .other-type {
      margin-top: 20rpx;
      font-size: 25rpx;
      color: rgb(35, 193, 158);
    }
    .agree {
      width: 600rpx;
      margin-top: 30rpx;
      font-size: 25rpx;
    }
  }
  .group_2 {
    font-size: 20rpx;
    color: rgb(163, 154, 154);
    position: fixed;
    bottom: 100rpx;
    line-height: 40rpx;
  }
}
</style>
