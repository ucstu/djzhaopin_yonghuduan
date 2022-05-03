<template>
  <NavigationBar title="我的账户" />
  <view class="flex-col page">
    <view class="justify-between items-center section">
      <text class="phone">账号</text>
      <text class="phone-num">{{ phoneNumber }}</text>
    </view>
    <view class="flex-col items-center button-box">
      <button class="button" @click="showDelete">注销账号</button>
    </view>
    <wybModal
      ref="modal"
      title="注销账号"
      content="您确认注销账号吗？"
      @confirm="deleteAccount"
    />
    <wybPopup
      ref="popup"
      :mask-click-close="false"
      :show-close-icon="false"
      :width="700"
      :height="400"
      :radius="10"
      mode="size-auto"
      type="center"
    >
      <view class="flex-col justify-center code-box">
        <text style="font-size: 40rpx; font-weight: bold; text-align: center"
          >请输入验证码</text
        >
        <view class="flex-col justify-between" style="margin-top: 20rpx">
          <input
            v-model="code"
            class="text-input"
            :adjust-position="false"
            :auto-blur="true"
            :focus="focus"
            type="number"
            :maxlength="4"
            @blur="focus = false"
          />
          <view class="flex-row justify-between code-input" @click="codeNum">
            <view
              v-for="(item, i) in 4"
              :key="i"
              class="justify-center items-center input"
              >{{ code[i] }}</view
            >
          </view>
          <text style="margin-top: 10rpx" @click="sendVerification"
            >重新发送</text
          >
        </view>
        <view
          class="justify-between items-center"
          style="width: 100%; height: auto; margin-top: 20rpx"
        >
          <button class="cancel-button" @click="cancelDelete">取消</button>
          <button class="confirm-button" @click="confirmDelete">确认</button>
        </view>
      </view>
    </wybPopup>
  </view>
</template>
<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybModal from "@/components/wyb-modal/wyb-modal.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { deleteAccountInfosP0, getVerificationCode } from "@/services/services";
import { AccountInformation, UserInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const store = useMainStore();

const phoneNumber = store.accountInformation.userName.replace(
  /(\d{3})\d{4}(\d{4})/,
  "$1****$2"
);
const code = ref<string>("");
const focus = ref<boolean>(false);

const codeNum = () => {
  focus.value = true;
};

// 注销账号消息提示
const modal = ref();
const popup = ref();
const showDelete = () => {
  modal.value.showModal();
};
// 注销账号
const deleteAccount = () => {
  getVerificationCode({ email: phoneNumber })
    .then(() => {
      uni.showToast({
        title: "验证码已发送",
        icon: "none",
        duration: 1000,
      });
      popup.value.show();
    })
    .catch(failResponseHandler);
};

const sendVerification = () => {
  getVerificationCode({ email: phoneNumber })
    .then(() => {
      uni.showToast({
        title: "验证码已发送",
        icon: "none",
        duration: 1000,
      });
    })
    .catch(failResponseHandler);
};

const cancelDelete = () => {
  popup.value.hide();
};
const confirmDelete = () => {
  deleteAccountInfosP0(store.accountInformation.accountInformationId, {
    verificationCode: code.value,
  })
    .then(() => {
      store.jobExpectations = [];
      store.jsonWebToken = null as unknown as string;
      store.userInformation = null as unknown as UserInformation;
      store.accountInformation = null as unknown as AccountInformation;
      uni.navigateTo({
        url: "/account/denglu_zhuce/denglu",
      });
    })
    .catch(failResponseHandler);
  popup.value.hide();
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  margin-left: 20rpx;

  .section {
    width: 100%;
    height: 100rpx;
    border: 1rpx solid rgb(230 230 230);
    border-radius: 10rpx;

    .phone {
      padding-left: 20rpx;
      font-size: 30rpx;
    }

    .phone-num {
      padding-right: 20rpx;
      font-size: 28rpx;
      color: gray;
    }
  }

  .button-box {
    position: absolute;
    bottom: 40rpx;
    width: 710rpx;
    height: 80rpx;

    .button {
      width: 600rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }

  .code-box {
    width: 90%;
    height: auto;
    margin-top: 20rpx;
    margin-left: 5%;
    font-size: 30rpx;

    .text-input {
      position: absolute;
      left: -100rpx;
      width: 50rpx;
      height: 50rpx;
    }

    .code-input {
      width: 100%;
      height: auto;
      font-size: 40rpx;

      .input {
        width: 20%;
        height: 110rpx;
        border: 5rpx solid rgb(230 230 230);
        border-radius: 10rpx;
      }
    }

    .cancel-button {
      width: 30%;
      height: 80rpx;
      font-size: 30rpx;
      color: rgb(0 0 0);
      background-color: rgb(240 240 240);
      border-radius: 10rpx;
    }

    .confirm-button {
      width: 65%;
      height: 80rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }
}
</style>
