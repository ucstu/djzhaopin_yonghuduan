<template>
  <view class="flex-row page">
    <NavigationBar class="header" right="保存" />
    <text class="text_1">选择职位细分标签</text>
    <text class="text_2">根据您选择的期望职位，选择一下职位细分标签</text>
    <view class="flex-col group_1">
      <text class="text_3">系统环境</text>
      <view class="bottom-group flex-row">
        <view class="flex-col items-center text-wrapper">
          <text>{{ systemEnvironment }}</text>
        </view>
        <view class="text-wrapper_1 flex-col items-center view_1">
          <text>Linux</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>Unix</text>
        </view>
        <view class="flex-col items-center text-wrapper_3">
          <text>Mac OS X</text>
        </view>
        <view class="flex-col items-center text-wrapper_4">
          <text>AIX</text>
        </view>
        <view class="flex-col items-center text-wrapper_5">
          <text>iOS</text>
        </view>
        <view class="flex-col items-center text-wrapper_6">
          <text>Android</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_2">
      <text class="text_11">算法模型</text>
      <view class="bottom-group flex-row">
        <view class="flex-col items-center text-wrapper_7">
          <text>{{ algorithmType }}</text>
        </view>
        <view class="text-wrapper_8 flex-col items-center">
          <text>决策树类算法</text>
        </view>
        <view class="flex-col items-center text-wrapper_9">
          <text>贝叶斯类算法</text>
        </view>
        <view class="flex-col items-center text-wrapper_10">
          <text>聚类算法</text>
        </view>
        <view class="text-wrapper_11 flex-col items-center">
          <text>关联规则算法</text>
        </view>
        <view class="flex-col items-center section_1">
          <text>人工神经网络类</text>
          <text>算法</text>
        </view>
        <view class="flex-col items-center text-wrapper_12">
          <text>深度算法</text>
        </view>
        <view class="text-wrapper_13 flex-col items-center">
          <text>降维算法</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_3">
      <text class="text_21">算法应用领域</text>
      <view class="bottom-group flex-row view_7">
        <view class="flex-col items-center text-wrapper_14">
          <text>{{ applicationField }}</text>
        </view>
        <view class="text-wrapper_8 flex-col items-center">
          <text>自然语言处理</text>
        </view>
        <view class="flex-col text-wrapper_15">
          <text class="text_24">图像 | 视频处理</text>
        </view>
        <view class="flex-col text-wrapper_16">
          <text class="text_25">语音 | 音频处理</text>
        </view>
        <view class="text-wrapper_11 flex-col items-center">
          <text>数据挖掘</text>
        </view>
        <view class="flex-col text-wrapper_17">
          <text class="text_27">云计算 | 运存储</text>
        </view>
        <view class="flex-col text-wrapper_18">
          <text class="text_28">信息安全 | 反作弊</text>
        </view>
        <view class="text-wrapper_13 flex-col items-center">
          <text>区块链</text>
        </view>
        <view class="flex-col items-center text-wrapper_19">
          <text>智能驾驶</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_4">
      <text class="text_31">通讯协议</text>
      <view class="flex-row group_5">
        <view class="flex-col items-center text-wrapper_20">
          <text>{{ communicationProtocol }}</text>
        </view>
        <view class="text-wrapper_1 flex-col items-center view_11">
          <text>IPX/SPX</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>NetBEUI</text>
        </view>
        <view class="flex-col items-center text-wrapper_21">
          <text>WAPI</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_6">
      <text class="text_36">安全/加密技术</text>
      <view class="flex-row group_7">
        <view class="flex-col items-center text-wrapper_22">
          <text>{{ encryptionTechnology }}</text>
        </view>
        <view class="text-wrapper_1 flex-col items-center view_13">
          <text>MS5</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>AES</text>
        </view>
        <view class="flex-col items-center text-wrapper_23">
          <text>PKI</text>
        </view>
        <view class="flex-col items-center text-wrapper_24">
          <text>WAF</text>
        </view>
        <view class="flex-col items-center text-wrapper_25">
          <text>AppScan</text>
        </view>
        <view class="flex-col items-center text-wrapper_26">
          <text>AWVS</text>
        </view>
        <view class="flex-col items-center text-wrapper_27">
          <text>Burp Suite</text>
        </view>
        <view class="flex-col items-center text-wrapper_28">
          <text>metasplit</text>
        </view>
        <view class="flex-col items-center text-wrapper_29">
          <text>SQLmap</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_8">
      <text class="text_47">搜索引擎</text>
      <view class="flex-row group_9">
        <view class="flex-col items-center text-wrapper_30">
          <text>{{ searchEngine }}</text>
        </view>
        <view class="center-text-wrapper flex-col items-center">
          <text>Solr</text>
        </view>
        <view class="center-text-wrapper flex-col items-center">
          <text>Elastic Search</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { ref } from "vue";
const systemEnvironment = ref("Windows");
const algorithmType = ref("回归算法");
const applicationField = ref("搜索 | 推荐");
const communicationProtocol = ref("TCP | IP");
const encryptionTechnology = ref("IDS");
const searchEngine = ref("Lucene");
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 1880rpx;
  padding-bottom: 20rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .text_1 {
    position: absolute;
    top: 128rpx;
    left: 41rpx;
    font-size: 30rpx;
    line-height: 28rpx;
    color: rgb(0 0 0);
    white-space: nowrap;
  }

  .text_2 {
    position: absolute;
    top: 171rpx;
    left: 41rpx;
    font-size: 20rpx;
    line-height: 19rpx;
    color: rgb(0 0 0 / 70%);
    white-space: nowrap;
  }

  .group_1 {
    position: absolute;
    top: 220rpx;
    right: 30rpx;
    left: 30rpx;
    height: 290rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_3 {
      margin-left: 21rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }
  }

  .group_2 {
    position: absolute;
    top: 520rpx;
    right: 30rpx;
    left: 30rpx;
    height: 290rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_11 {
      margin-left: 21rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }
  }

  .group_3 {
    position: absolute;
    right: 30rpx;
    bottom: 770rpx;
    left: 30rpx;
    height: 290rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_21 {
      margin-left: 21rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .view_7 {
      margin-top: 19rpx;
    }
  }

  .group_4 {
    position: absolute;
    right: 30rpx;
    bottom: 545rpx;
    left: 30rpx;
    height: 215rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_31 {
      margin-left: 21rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group_5 {
      position: relative;
      height: 135rpx;
      margin-top: 21rpx;

      .text-wrapper_20 {
        position: absolute;
        top: 0;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 19rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 21rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .view_11 {
        font-size: 25rpx;
        line-height: 20rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
      }

      .text-wrapper_21 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 23rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }
    }
  }

  .group_6 {
    position: absolute;
    right: 30rpx;
    bottom: 170rpx;
    left: 30rpx;
    height: 365rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_36 {
      margin-left: 22rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group_7 {
      position: relative;
      height: 285rpx;
      margin-top: 21rpx;
      margin-right: 4rpx;

      .text-wrapper_22 {
        position: absolute;
        top: 0;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .view_13 {
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
      }

      .text-wrapper_23 {
        position: absolute;
        top: 75rpx;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 23rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .text-wrapper_24 {
        position: absolute;
        top: 75rpx;
        left: 50%;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 23rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
        transform: translateX(-50%);
      }

      .text-wrapper_25 {
        position: absolute;
        top: 75rpx;
        right: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 17rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .text-wrapper_26 {
        position: absolute;
        bottom: 75rpx;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .text-wrapper_27 {
        position: absolute;
        bottom: 75rpx;
        left: 50%;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 17rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
        transform: translateX(-50%);
      }

      .text-wrapper_28 {
        position: absolute;
        right: 0;
        bottom: 75rpx;
        width: 210rpx;
        height: 60rpx;
        padding: 20rpx 0 18rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 24rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .text-wrapper_29 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 210rpx;
        height: 60rpx;
        padding: 21rpx 0 17rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }
    }
  }

  .group_8 {
    position: absolute;
    right: 30rpx;
    bottom: 20rpx;
    left: 30rpx;
    height: 140rpx;
    padding: 18rpx 0 15rpx;
    overflow: hidden;

    .text_47 {
      margin-left: 21rpx;
      font-size: 30rpx;
      line-height: 28rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group_9 {
      margin-top: 21rpx;

      .text-wrapper_30 {
        flex: 1 1 210rpx;
        height: 60rpx;
        padding: 21rpx 0;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 18rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }

      .center-text-wrapper {
        flex: 1 1 210rpx;
        height: 60rpx;
        padding: 20rpx 0 22rpx;
        margin-left: 30rpx;
        overflow: hidden;
        font-size: 25rpx;
        line-height: 19rpx;
        color: rgb(0 0 0);
        white-space: nowrap;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }
    }
  }

  .bottom-group {
    position: relative;
    height: 210rpx;
    margin-top: 21rpx;

    .text-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 20rpx 0 22rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .view_1 {
      font-size: 25rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .text-wrapper_3 {
      position: absolute;
      top: 50%;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 21rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);
    }

    .text-wrapper_4 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 210rpx;
      height: 60rpx;
      padding: 21rpx 0 23rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translate(-50%, -50%);
    }

    .text-wrapper_5 {
      position: absolute;
      top: 50%;
      right: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 21rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);
    }

    .text-wrapper_6 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 20rpx 0 22rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .text-wrapper_7 {
      position: absolute;
      top: 0;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .text-wrapper_8 {
      position: absolute;
      top: 0;
      left: 50%;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateX(-50%);
    }

    .text-wrapper_9 {
      position: absolute;
      top: 0;
      right: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .text-wrapper_10 {
      position: absolute;
      top: 50%;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);
    }

    .text-wrapper_11 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translate(-50%, -50%);
    }

    .section_1 {
      position: absolute;
      top: 50%;
      right: 0;
      width: 210rpx;
      height: 60rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 30rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);
    }

    .text-wrapper_12 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .text-wrapper_13 {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateX(-50%);
    }

    .text-wrapper_14 {
      position: absolute;
      top: 0;
      left: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 24rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .text-wrapper_15 {
      position: absolute;
      top: 0;
      right: 0;
      height: 60rpx;
      padding: 18rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 24rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;

      .text_24 {
        margin-right: 13rpx;
        margin-left: 23rpx;
      }
    }

    .text-wrapper_16 {
      position: absolute;
      top: 50%;
      left: 0;
      height: 60rpx;
      padding: 18rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 24rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);

      .text_25 {
        margin-right: 14rpx;
        margin-left: 21rpx;
      }
    }

    .text-wrapper_17 {
      position: absolute;
      top: 50%;
      right: 0;
      height: 60rpx;
      padding: 18rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 24rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
      transform: translateY(-50%);

      .text_27 {
        margin-right: 12rpx;
        margin-left: 23rpx;
      }
    }

    .text-wrapper_18 {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 60rpx;
      padding: 18rpx 0;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 25rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;

      .text_28 {
        margin-left: 9rpx;
      }
    }

    .text-wrapper_19 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 210rpx;
      height: 60rpx;
      padding: 18rpx 0 20rpx;
      overflow: hidden;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }
  }

  .text-wrapper_1 {
    position: absolute;
    top: 0;
    left: 50%;
    width: 210rpx;
    height: 60rpx;
    padding: 21rpx 0;
    overflow: hidden;
    background-color: rgb(229 229 229);
    border-radius: 5rpx;
    transform: translateX(-50%);
  }

  .text-wrapper_2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 210rpx;
    height: 60rpx;
    padding: 21rpx 0;
    overflow: hidden;
    font-size: 25rpx;
    line-height: 18rpx;
    color: rgb(0 0 0);
    white-space: nowrap;
    background-color: rgb(229 229 229);
    border-radius: 5rpx;
  }
}
</style>
