<template>
  <NavigationBar class="header" title="用户反馈" />
  <view class="flex-col page">
    <view class="user-feedback">
      <view class="retroaction-type">
        <text style="font-size: 28rpx">请选择反馈类型</text>
        <view class="flex-row retroact-type">
          <view
            v-for="(retroactionType, i) in retroactionTypes"
            :key="i"
            class="justify-center items-center retroact"
            :class="choseNum.includes(i) ? 'active' : ''"
            @click="choseType(i)"
          >
            <text>{{ retroactionType }}</text>
          </view>
        </view>
      </view>
      <view class="flex-col elaborate">
        <text style="font-size: 28rpx">详细描述</text>
        <view class="describe">
          <scroll-view class="input-set" :scroll-y="true">
            <textarea
              class="input"
              :placeholder="opinion"
              maxlength="-1"
              :auto-height="true"
            />
          </scroll-view>
          <view class="flex-col items-center justify-center upload">
            <image class="image" src="@/static/icons/camera.png" />
            <text>上传图片</text>
          </view>
        </view>
      </view>
      <text class="annotation">最多3张支持JPG、JPEG、PNG格式（选填）</text>
    </view>
    <view class="justify-center items-center sub">
      <text>提交</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";
const opinion = ref("请写下您的宝贵意见（不得少与5个字符）");
const retroactionTypes = ref([
  "账号相关",
  "推荐相关",
  "邀约相关",
  "简历相关",
  "教育相关",
  "其他",
]);

const choseNum = ref<number[]>([]);
const choseType = (index: number) => {
  if (choseNum.value.includes(index)) {
    choseNum.value.splice(choseNum.value.indexOf(index), 1);
  } else {
    choseNum.value.push(index);
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 750rpx;
  height: 1334rpx;
  overflow-y: auto;

  .active {
    background-color: rgb(35 193 158);
  }

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .user-feedback {
    width: 690rpx;
    margin-top: 130rpx;
    margin-left: 30rpx;

    .retroaction-type {
      width: 690rpx;

      .retroact-type {
        flex-wrap: wrap;

        .retroact {
          width: 140rpx;
          height: 40rpx;
          margin-top: 15rpx;
          margin-right: 30rpx;
          font-size: 25rpx;
          white-space: normal;
          border: 2rpx solid rgb(230 230 230);
          border-radius: 5rpx;
        }
      }
    }

    .elaborate {
      width: 690rpx;
      margin-top: 30rpx;
      font-size: 25rpx;

      .describe {
        width: 670rpx;
        height: 500rpx;
        margin-top: 25rpx;
        background-color: rgb(215 215 215);

        .input-set {
          width: 660rpx;
          height: 320rpx;
          padding-left: 10rpx;
          margin-top: 10rpx;
          overflow: hidden;

          .input {
            line-height: 35rpx;
          }
        }

        .upload {
          width: 120rpx;
          height: 120rpx;
          margin-top: 40rpx;
          margin-left: 20rpx;
          border: 3rpx solid rgb(245 124 0);
          border-radius: 10rpx;

          .image {
            width: 35rpx;
            height: 35rpx;
          }
        }
      }
    }

    .annotation {
      margin-top: 15rpx;
      font-size: 15rpx;
      color: gray;
    }
  }

  .sub {
    position: fixed;
    bottom: 40rpx;
    width: 630rpx;
    height: 80rpx;
    margin-left: 60rpx;
    font-size: 30rpx;
    background-color: rgb(35 193 158);
    border-radius: 10rpx;
  }
}
</style>
