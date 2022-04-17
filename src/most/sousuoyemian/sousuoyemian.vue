<template>
  <SearchBar></SearchBar>
  <view class="page">
    <view class="justify-between group-1">
      <text class="text-3">按职位类型搜索</text>
      <view class="flex-row group-2" @click="text_2OnClick">
        <text>技术</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254581114841.png"
          class="image-2"
        />
      </view>
    </view>
    <view class="flex-col group-3">
      <text class="hot">热门搜索</text>
      <view class="flex-row list">
        <view
          v-for="(popularPosition, i) in popularPositions"
          :key="i"
          class="list-item"
          @click="view_9OnClick"
        >
          <text class="items-center text-5">{{ popularPosition.name }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col group-5">
      <text class="hot">热门公司</text>
      <view class="flex-row list-1">
        <view
          v-for="(popularCompany, i) in popularCompanies"
          :key="i"
          class="list-item"
          @click="view_18OnClick"
        >
          <text class="text-5">{{ popularCompany.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import SearchBar from "@/components/SearchAndFilter/SearchBar.vue";
import { reactive } from "vue";

const popularPositions = reactive([
  { name: "java" },
  { name: "ios" },
  { name: "前端" },
  { name: "后端" },
  { name: "运维" },
  { name: "测试" },
  { name: "UI" },
  { name: "产品" },
  { name: "高级" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
  { name: "项目助理" },
  { name: "项目主管" },
  { name: "项目总监" },
  { name: "项目经理" },
]);
const popularCompanies = reactive([
  { name: "字节跳动" },
  { name: "美团" },
  { name: "腾讯" },
  { name: "网易" },
  { name: "百度" },
  { name: "贝壳" },
  { name: "北京京东世纪贸易有限公司" },
  { name: "快手" },
  { name: "安居客" },
  { name: "小米集团" },
]);
const text_2OnClick = () => {
  uni.navigateTo({ url: "/common/zhiweileixing/zhiweileixing" });
};
const view_9OnClick = () => {
  uni.navigateTo({ url: "/detail/xiangguanzhiwei/xiangguanzhiwei" });
};
const view_18OnClick = () => {
  uni.navigateTo({ url: "/detail/xiangguangongsi/xiangguangongsi" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;
  margin-left: 20rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .hot {
    font-size: 35rpx;
    font-weight: bold;
  }

  .group-1 {
    margin-top: 31rpx;

    .text-3 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-2 {
      margin-top: 2rpx;
      margin-right: 11rpx;
      font-size: 20rpx;
      line-height: 18rpx;
      color: rgb(163 154 154);
      white-space: nowrap;

      .image-2 {
        width: 4rpx;
        height: 14rpx;
        margin-top: 4rpx;
        margin-left: 28rpx;
      }
    }
  }

  .group-3 {
    margin-top: 50rpx;

    .list {
      flex-wrap: wrap;
      width: 710rpx;
      margin-top: 20rpx;

      .list-item {
        flex: none;
        height: 60rpx;
        margin-bottom: 15rpx;
        margin-left: 15rpx;
        border: solid 2rpx rgb(230 230 230);
        border-radius: 5rpx;

        .text-5 {
          margin-right: 15rpx;
          margin-left: 15rpx;
          font-size: 25rpx;
        }
      }
    }
  }

  .group-5 {
    margin-top: 30rpx;

    .list-1 {
      flex-wrap: wrap;
      width: 710rpx;
      margin-top: 20rpx;

      .list-item {
        flex: none;
        height: 60rpx;
        margin-bottom: 15rpx;
        margin-left: 15rpx;
        border: solid 2rpx rgb(230 230 230);
        border-radius: 5rpx;

        .text-5 {
          margin-right: 15rpx;
          margin-left: 15rpx;
          font-size: 25rpx;
        }
      }
    }
  }

  .text {
    align-self: center;
    font-size: 30rpx;
    line-height: 23rpx;
    color: rgb(0 0 0);
    white-space: nowrap;
  }

  .search {
    flex: 1 1 auto;
    margin-left: 3rpx;
    font-size: 20rpx;
    line-height: 19rpx;
    color: rgb(163 154 154);
    white-space: nowrap;

    .image {
      align-self: center;
      width: 25rpx;
      height: 12rpx;
      margin-left: 10rpx;
    }

    .section-1 {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      height: 75rpx;
      padding: 11rpx 15rpx 12rpx;
      margin-left: 20rpx;
      background-color: rgb(229 229 229);
      filter: drop-shadow(0 4rpx 2rpx rgb(0 0 0 / 25%));
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 25rpx;

      .image-1 {
        width: 35rpx;
        height: 35rpx;
      }

      .text-1 {
        margin-left: 25rpx;
      }
    }
  }

  .text-2 {
    align-self: center;
    margin-left: 21rpx;
    font-size: 30rpx;
    line-height: 23rpx;
    color: rgb(0 0 0);
    white-space: nowrap;
  }

  .image-3 {
    width: 138rpx;
    height: 35rpx;
  }
}
</style>
