<template>
  <view class="flex-row items-center info-box" @click="toChatPage">
    <image class="image-heard" src="@/static/icons/heard.png" />
    <view class="infos">
      <view class="flex-row justify-between name-time">
        <text>{{ hrInfo!.hrName }}</text>
        <text style="font-size: 25rpx">{{ time }}</text>
      </view>
      <view class="message">
        <text style="white-space: nowrap">{{ mes }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const time = ref("昨天");
const name = ref("张三");
const message = ref(
  "方便投递吗卡夫卡吉林省地方卡机黑龙江撒旦立刻反击啊考了几分卡了？"
);

const props = defineProps({
  hrInfo: {
    type: Object,
  },
  mes: {
    type: String,
  },
});
const toChatPage = () => {
  let i = props.hrInfo.hrInformationId;
  uni.navigateTo({ url: "/mine/liaotianyemian/liaotianyemian?Id=" + i });
};
</script>

<style lang="scss" scoped>
.info-box {
  width: 94%;
  height: 130rpx;
  margin-left: 3%;

  .image-heard {
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
  }

  .infos {
    width: 83%;
    height: auto;
    margin-left: 2%;
    line-height: 50rpx;

    .name-time {
      width: 100%;
      height: auto;
      font-size: 30rpx;
    }

    .message {
      width: 90%;
      overflow: hidden;
      font-size: 25rpx;
      text-overflow: ellipsis;
    }
  }
}
</style>
