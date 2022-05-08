<template>
  <NavigationBar title="注册账号" />
  <view class="flex-col items-center page">
    <view class="flex-col group-1">
      <text>注册账号</text>
      <view class="textarea">
        <view class="items-center phone-number">
          <input
            v-model="email"
            style="width: 100%; padding-left: 20rpx"
            type="text"
            placeholder="请输入你的邮箱"
          />
        </view>
        <view class="flex-row justify-between items-center verification">
          <input
            v-model="verification"
            style="width: 60%; padding-left: 20rpx"
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
            style="width: 100%; padding-left: 20rpx"
            type="password"
            placeholder="请输入密码(6-20位)"
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
import { getAxiosInstance } from "@/services/config";
import {
  getUserInfosP0,
  getVerificationCode,
  postAccountInfos,
  postAccountInfosLogin,
} from "@/services/services";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const store = useMainStore();

const email = ref("");
const password = ref("");
const verification = ref();
const isAgree = ref(false);

const getVerifiable = () => {
  if (email.value === "") {
    uni.showToast({
      title: "请输入邮箱",
      icon: "none",
      duration: 1000,
    });
  } else if (
    /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email.value)
  ) {
    getVerificationCode({ email: email.value })
      .then((res) => {
        uni.showToast({
          title: "验证码已发送",
          icon: "none",
          duration: 1000,
        });
      })
      .catch(failResponseHandler);
  } else {
    uni.showToast({
      title: "请输入正确的邮箱",
      icon: "none",
      duration: 1000,
    });
  }
};
const registeredAccount = () => {
  if (email.value === "" || password.value === "") {
    uni.showToast({
      title: "邮箱密码不能为空",
      icon: "none",
      duration: 1000,
    });
  } else if (verification.value === "") {
    uni.showToast({
      title: "验证码不能为空",
      icon: "none",
      duration: 1000,
    });
  } else if (isAgree.value === false) {
    uni.showToast({
      title: "请同意协议",
      icon: "none",
      duration: 1000,
    });
  } else if (password.value.length < 6) {
    uni.showToast({
      title: "密码不能小于6位",
      icon: "none",
      duration: 1000,
    });
  } else {
    postAccountInfos({
      userName: email.value,
      verificationCode: verification.value,
      accountType: 1,
      password: password.value,
    })
      .then((res) => {
        postAccountInfosLogin({
          userName: email.value,
          password: password.value,
        })
          .then((res) => {
            store.jsonWebToken = res.data.body.token;
            store.accountInformation = res.data.body.accountInformation;
            getAxiosInstance(undefined).defaults.headers.common[
              "Authorization"
            ] = "Bearer " + res.data.body.token;
            getUserInfosP0(res.data.body.accountInformation.fullInformationId)
              .then((res) => {
                store.userInformation = res.data.body;
                uni.showToast({
                  title: "注册成功",
                  icon: "none",
                  duration: 1000,
                });
                uni.navigateTo({
                  url: "/init/wanchengjianli/wanchengjianli",
                });
              })
              .catch(failResponseHandler);
          })
          .catch(failResponseHandler);
      })
      .catch(failResponseHandler);
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
          width: 40%;
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
    position: absolute;
    bottom: 100rpx;
    font-size: 20rpx;
    line-height: 40rpx;
    color: rgb(163 154 154);
  }
}
</style>
