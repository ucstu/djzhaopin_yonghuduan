<template>
  <view class="flex-col justify-center items-center page">
    <view class="flex-col group-1">
      <text>登录</text>
      <view class="textarea">
        <view class="items-center phone-number">
          <input
            v-model="email"
            class="text-input"
            style="padding-left: 20rpx"
            type="text"
            placeholder="请输入你的邮箱"
          />
        </view>
        <view class="items-center verification">
          <input
            v-model="password"
            class="text-input"
            style="padding-left: 20rpx"
            type="password"
            placeholder="请输入密码"
          />
        </view>
      </view>
      <view class="justify-center items-center" @click="login">
        <button class="justify-center items-center next">登录</button>
      </view>
      <view class="flex-row items-center justify-between other-type">
        <text @click="forget">忘记密码？</text>
        <text @click="throttle(register)()">注册账号</text>
      </view>
      <view class="flex-row items-center agree">
        <checkbox
          style="transform: scale(0.7)"
          :checked="isAgree"
          @click="isAgree = !isAgree"
        ></checkbox>
        <view
          >同意
          <navigator
            url="/setting/yonghuxieyi/yonghuxieyi"
            open-type="navigate"
            style="display: inline-block; color: rgb(35 193 158)"
            >《东江用户协议》
          </navigator>
          和
          <navigator
            url="/setting/yinsicelve/yinsicelve"
            open-type="navigate"
            style="display: inline-block; color: rgb(35 193 158)"
            >《东江登录政策》
          </navigator>
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
import { md5 } from "@/MD5/MD5";
import { getAxiosInstance } from "@/services/config";
import {
  getCityInformations,
  getUserInfosP0,
  getUserInfosP0JobExpectations,
  postAccountInfosLogin,
} from "@/services/services";
import { useMainStore } from "@/stores/main";
import { throttle } from "@/utils/common";
import { failResponseHandler } from "@/utils/handler";
import { connectStomp } from "@/utils/stomp";
import { ref } from "vue";

const store = useMainStore();

const email = ref("");
const password = ref("");
const isAgree = ref(false);

// 当用户单击登录按钮时调用的函数。
const login = () => {
  if (email.value === "" || password.value === "") {
    uni.showToast({
      title: "邮箱或密码不能为空",
      icon: "none",
      mask: true,
    });
  } else if (
    !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email.value)
  ) {
    uni.showToast({
      title: "邮箱错误",
      icon: "none",
      mask: true,
    });
  } else if (!isAgree.value) {
    uni.showToast({
      title: "请勾选同意协议",
      icon: "none",
      mask: true,
    });
  } else {
    postAccountInfosLogin({
      userName: email.value,
      password: md5(password.value),
    })
      .then((res) => {
        if (res.data.body.accountInformation.accountType === 2) {
          //判断是否为企业账号
          uni.showToast({
            title: "此账号为企业账号，请移步企业端登录",
            icon: "none",
            duration: 1500,
          });
        } else {
          store.jsonWebToken = res.data.body.token;
          store.accountInformation = res.data.body.accountInformation;
          // 在 axios 实例的标头中设置令牌。
          getAxiosInstance(undefined).defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.body.token}`;
          Promise.all([
            getUserInfosP0(res.data.body.accountInformation.fullInformationId),
            getUserInfosP0JobExpectations(
              res.data.body.accountInformation.fullInformationId,
              {}
            ),
            getCityInformations(),
          ])
            .then((res) => {
              // 这是用户登录成功后执行的代码。
              if (!store.messages[store.accountInformation.fullInformationId]) {
                store.messages[store.accountInformation.fullInformationId] = {};
              }
              connectStomp(store);
              store.userInformation = res[0].data.body;
              store.jobExpectations = res[1].data.body.jobExpectations;
              store.cityInformation = res[2].data.body;
              // 如果用户没有填写个人信息，则跳转到个人信息页面，否则跳转到首页。
              if (!store.userInformation.firstName) {
                uni.reLaunch({
                  url: "/init/wanshangerenxinxi/wanshangerenxinxi",
                });
              } else {
                uni.switchTab({ url: "/pages/shouyeyemian/shouyeyemian" });
              }
            })
            .catch(failResponseHandler);
        }
      })
      .catch(failResponseHandler);
  }
};

const register = () => {
  uni.navigateTo({ url: "/account/denglu_zhuce/zhucezhanghao" });
};
const forget = () => {
  uni.navigateTo({ url: "/account/denglu_zhuce/wangjimima" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: auto;

  .group-1 {
    position: relative;
    top: 400rpx;
    width: 80%;
    font-size: 40rpx;

    .text-input {
      width: 100%;
    }

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
    position: relative;
    top: 900rpx;
    font-size: 20rpx;
    line-height: 40rpx;
    color: rgb(163 154 154);
  }
}
</style>
