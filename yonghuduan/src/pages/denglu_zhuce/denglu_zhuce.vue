<template>
  <view class="flex-col items-center page">
    <view class="flex-col group-1">
      <text>登录/注册</text>
      <view class="textarea">
        <view class="items-center phone-number">
          <input
            v-model="inputValue"
            style="padding-left: 20rpx"
            type="number"
            placeholder="请输入你的手机号"
            :maxlength="11"
          />
        </view>
        <view class="items-center verification">
          <input
            v-model="password"
            style="padding-left: 20rpx"
            type="number"
            placeholder="请输入密码"
          />
        </view>
      </view>
      <view class="justify-center items-center next" @click="nextStep">
        <text>登录 </text>
      </view>
      <view class="flex-row items-center justify-between other-type">
        <text @click="forget">忘记密码？</text>
        <text @click="register">注册账号</text>
      </view>
      <view class="flex-row items-center agree">
        <checkbox
          style="transform: scale(0.7)"
          :checked="isAgree"
          @click="isAgree = !isAgree"
        ></checkbox>
        <view
          >同意 <text style="color: rgb(35 193 158)">《东江用户协议》</text>和
          <text style="color: rgb(35 193 158)">《东江登录政策》</text>
        </view>
      </view>
    </view>
    <view class="flex-col group-2">
      <text>客服（投诉）电话：4008 2082 02（工作日9：00-18：00）</text>
      <text>违法和不良信息举报、未成年人投诉举报渠道同上</text>
      <text>客服邮箱：cc@dongjiang 北京市人社局电话：12333</text>
      <text>营业执照|人力资源服务许可证|增值电信业务经营许可证</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { putAccounts } from "@/services/services";
import { ref } from "vue";

const inputValue = ref("");
const password = ref("");
const isAgree = ref(false);
putAccounts({
  phoneNumber: "17323677595",
  password: "1456",
}).then((res) => {
  console.log(res.data);
});

const nextStep = () => {
  if (inputValue.value.length === 11 && isAgree.value === true) {
    uni.switchTab({ url: "/pages/wodeyemian/wodeyemian" });
  } else if (inputValue.value.length < 11) {
    uni.showToast({
      title: "请输入正确的手机号",
      icon: "none",
    });
    inputValue.value = "";
  } else if (isAgree.value === false) {
    uni.showToast({
      title: "请同意协议",
      icon: "none",
    });
  }
};

const register = () => {
  uni.navigateTo({ url: "/pages/denglu_zhuce/zhucezhanghao" });
};
const forget = () => {
  uni.navigateTo({ url: "/pages/shezhimima/shezhimima" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;

  .group-1 {
    position: relative;
    top: 200rpx;
    width: 600rpx;
    font-size: 40rpx;

    .textarea {
      height: 160rpx;
      margin-top: 30rpx;
      font-size: 30rpx;
      border-radius: 5rpx;

      .phone-number {
        height: 80rpx;
        border-bottom: 2rpx solid rgb(163 154 154);
      }

      .verification {
        height: 80rpx;
        border-bottom: 2rpx solid rgb(163 154 154);

        .btn {
          width: 200rpx;
          height: 60rpx;
          margin: 0;
          font-size: 25rpx;
          background-color: rgb(230 230 230);
          border-radius: 5rpx;
        }
      }
    }

    .next {
      width: 600rpx;
      height: 80rpx;
      margin-top: 30rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }

    .other-type {
      margin-top: 20rpx;
      font-size: 25rpx;
      color: rgb(35 193 158);
    }

    .agree {
      width: 600rpx;
      margin-top: 30rpx;
      font-size: 25rpx;
    }
  }

  .group-2 {
    position: fixed;
    bottom: 100rpx;
    font-size: 20rpx;
    line-height: 40rpx;
    color: rgb(163 154 154);
  }
}
</style>
