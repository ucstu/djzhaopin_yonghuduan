<template>
  <view class="flex-col items-center page">
    <NavigationBar class="heard" title="注册账号" />
    <view class="flex-col group-1">
      <text>注册账号</text>
      <view class="textarea">
        <view class="items-center phone-number">
          <input
            v-model="phoneNum"
            style="padding-left: 20rpx"
            type="number"
            placeholder="请输入你的手机号"
            :maxlength="11"
          />
        </view>
        <view class="flex-row justify-between items-center verification">
          <input
            v-model="verification"
            style="padding-left: 20rpx"
            :maxlength="4"
            type="number"
            placeholder="请输入验证码"
          />
          <button
            class="justify-center items-center btn"
            @click="getVerifiable"
          >
            获取验证码
          </button>
        </view>
        <view class="items-center phone-number">
          <input
            v-model="password"
            :maxlength="11"
            style="padding-left: 20rpx"
            type="password"
            placeholder="请输入密码(6-11位)"
          />
        </view>
      </view>
      <button
        class="justify-center items-center next"
        form-type="submit"
        @click="registeredAccount"
      >
        注册
      </button>
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
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getVerificationCode, postAccounts } from "@/services/services";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const phoneNum = ref("");
const password = ref("");
const verification = ref();
const isAgree = ref(false);

const getVerifiable = () => {
  if (phoneNum.value === "") {
    uni.showToast({
      title: "请输入手机号",
      icon: "none",
      duration: 500,
    });
  } else if (/^1[3456789]\d{9}$/.test(phoneNum.value)) {
    getVerificationCode({ phoneNumber: phoneNum.value }).then((res) => {
      uni.showToast({
        title: "验证码已发送",
        icon: "none",
        duration: 500,
      });
    });
  } else {
    uni.showToast({
      title: "请输入正确的手机号",
      icon: "none",
      duration: 500,
    });
  }
};
const registeredAccount = () => {
  if (phoneNum.value === "" || password.value === "") {
    uni.showToast({
      title: "手机密码不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (verification.value === "") {
    uni.showToast({
      title: "验证码不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (isAgree.value === false) {
    uni.showToast({
      title: "请同意协议",
      icon: "none",
      duration: 500,
    });
  } else if (password.value.length < 6) {
    uni.showToast({
      title: "密码不能小于6位",
      icon: "none",
      duration: 500,
    });
  } else {
    postAccounts({
      phoneNumber: phoneNum.value,
      verificationCode: verification.value,
      accountType: "1",
      password: password.value,
    }).then((res) => {
      store.commit("setToken", res.data.body.token);
      store.commit("setAccountInfo", res.data.body.accountInfo);
      uni.navigateTo({
        url: "/init/wanchengjianli/wanchengjianli",
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;

  .heard {
    position: fixed;
    top: 0;
    left: 0;
  }

  .group-1 {
    position: relative;
    top: 200rpx;
    width: 600rpx;
    font-size: 40rpx;

    .textarea {
      height: 240rpx;
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
