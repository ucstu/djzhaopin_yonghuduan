<template>
  <NavigationBar title="我的账户" />
  <view class="flex-col page">
    <view class="justify-between items-center section">
      <text class="phone">手机号</text>
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
  </view>
</template>
<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybModal from "@/components/wyb-modal/wyb-modal.vue";
import { deleteAccountInfosP0 } from "@/services/services";
import { AccountInformation, UserInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const store = useMainStore();

const phoneNumber = store.accountInformation.userName.replace(
  /(\d{3})\d{4}(\d{4})/,
  "$1****$2"
);

// 注销账号消息提示
const modal = ref();
const showDelete = () => {
  modal.value.showModal();
};
// 注销账号
const deleteAccount = () => {
  deleteAccountInfosP0(store.accountInformation.accountInformationId, {
    verificationCode: "1234",
  })
    .then((res) => {
      store.jobExpectations = [];
      store.jsonWebToken = null as unknown as string;
      store.userInformation = null as unknown as UserInformation;
      store.accountInformation = null as unknown as AccountInformation;
      uni.navigateTo({
        url: "/account/denglu_zhuce/denglu",
      });
    })
    .catch(failResponseHandler);
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
}
</style>
