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
import { md5 } from "@/MD5/MD5";
import { getAxiosInstance } from "@/services/config";
import {
  getCityInformations,
  getUserInfosP0,
  getVerificationCode,
  postAccountInfos,
  postAccountInfosLogin,
} from "@/services/services";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { connectStomp } from "@/utils/stomp";
import { ref } from "vue";

const store = useMainStore();

const email = ref("");
const password = ref("");
const verification = ref();
const isAgree = ref(false);

// 用于获取验证码的函数。
const getVerifiable = () => {
  if (email.value === "") {
    uni.showToast({
      title: "请输入邮箱",
      icon: "none",
      duration: 1500,
    });
  } else if (
    // 用于检查电子邮件是否有效的正则表达式。
    /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email.value)
  ) {
    //调用验证码接口
    getVerificationCode({ email: email.value })
      .then((res) => {
        uni.showToast({
          title: "验证码已发送",
          icon: "none",
          duration: 1500,
        });
      })
      .catch((err) => {
        uni.showToast({
          title: "验证码发送失败，请稍后再试",
          icon: "none",
          duration: 1500,
        });
        failResponseHandler(err);
      });
  } else {
    uni.showToast({
      title: "请输入正确的邮箱",
      icon: "none",
      duration: 1500,
    });
  }
};
// 当用户单击注册按钮时调用的函数。
const registeredAccount = () => {
  if (email.value === "" || password.value === "") {
    uni.showToast({
      title: "邮箱密码不能为空",
      icon: "none",
      duration: 1500,
    });
  } else if (verification.value === "") {
    uni.showToast({
      title: "验证码不能为空",
      icon: "none",
      duration: 1500,
    });
  } else if (isAgree.value === false) {
    uni.showToast({
      title: "请同意协议",
      icon: "none",
      duration: 1500,
    });
  } else if (password.value.length < 6) {
    uni.showToast({
      title: "密码不能小于6位",
      icon: "none",
      duration: 1500,
    });
  } else {
    postAccountInfos({
      userName: email.value,
      verificationCode: verification.value,
      accountType: 1,
      password: md5(password.value),
    })
      .then((res) => {
        postAccountInfosLogin({
          userName: email.value,
          password: md5(password.value),
        })
          .then((res) => {
            // 用于存储用户的信息。
            store.jsonWebToken = res.data.body.token;
            store.accountInformation = res.data.body.accountInformation;
            getAxiosInstance(undefined).defaults.headers.common[
              "Authorization"
            ] = "Bearer " + res.data.body.token;
            getCityInformations().then((res) => {
              store.cityInformation = res.data.body;
            });
            getUserInfosP0(res.data.body.accountInformation.fullInformationId)
              .then((res) => {
                store.userInformation = res.data.body;
                // 用于初始化消息对象。
                if (
                  !store.messages[store.accountInformation.fullInformationId]
                ) {
                  store.messages[store.accountInformation.fullInformationId] =
                    {};
                }
                connectStomp(store);
                uni.showToast({
                  title: "注册成功",
                  icon: "none",
                  duration: 1500,
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
    position: relative;
    top: 800rpx;
    font-size: 20rpx;
    line-height: 40rpx;
    color: rgb(163 154 154);
  }
}
</style>
