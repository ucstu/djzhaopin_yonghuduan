<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
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
import { ref } from 'vue';
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
const systemEnvironment = ref('Windows')
const algorithmType = ref('回归算法')
const applicationField = ref('搜索 | 推荐')
const communicationProtocol = ref('TCP | IP')
const encryptionTechnology = ref('IDS')
const searchEngine = ref('Lucene')
const imageOnClick = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 20rpx;
  background-color: rgb(255, 255, 255);
  height: 1880rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .text_1 {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 128rpx;
  }
  .text_2 {
    color: rgba(0, 0, 0, 0.7);
    font-size: 20rpx;
    line-height: 19rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 171rpx;
  }
  .group_1 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 290rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    top: 220rpx;
    .text_3 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
  }
  .group_2 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 290rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    top: 520rpx;
    .text_11 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
  }
  .group_3 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 290rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    bottom: 770rpx;
    .text_21 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .view_7 {
      margin-top: 19rpx;
    }
  }
  .group_4 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 215rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    bottom: 545rpx;
    .text_31 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_5 {
      margin-top: 21rpx;
      height: 135rpx;
      position: relative;
      .text-wrapper_20 {
        padding: 21rpx 0 19rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 21rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
      .view_11 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 20rpx;
        white-space: nowrap;
      }
      .text-wrapper_21 {
        padding: 21rpx 0 23rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .group_6 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 365rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    bottom: 170rpx;
    .text_36 {
      margin-left: 22rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_7 {
      margin-right: 4rpx;
      margin-top: 21rpx;
      height: 285rpx;
      position: relative;
      .text-wrapper_22 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
      .view_13 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .text-wrapper_23 {
        padding: 21rpx 0 23rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 75rpx;
      }
      .text-wrapper_24 {
        padding: 21rpx 0 23rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 75rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_25 {
        padding: 21rpx 0 17rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 75rpx;
      }
      .text-wrapper_26 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 75rpx;
      }
      .text-wrapper_27 {
        padding: 21rpx 0 17rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 75rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_28 {
        padding: 20rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 75rpx;
      }
      .text-wrapper_29 {
        padding: 21rpx 0 17rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .group_8 {
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 140rpx;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    bottom: 20rpx;
    .text_47 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_9 {
      margin-top: 21rpx;
      .text-wrapper_30 {
        padding: 21rpx 0 21rpx;
        flex: 1 1 210rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
      }
      .center-text-wrapper {
        margin-left: 30rpx;
        flex: 1 1 210rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 19rpx;
        white-space: nowrap;
        padding: 20rpx 0 22rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
      }
    }
  }
  .bottom-group {
    margin-top: 21rpx;
    height: 210rpx;
    position: relative;
    .text-wrapper {
      padding: 20rpx 0 22rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 19rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 0;
    }
    .view_1 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 18rpx;
      white-space: nowrap;
    }
    .text-wrapper_3 {
      padding: 21rpx 0 21rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 18rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .text-wrapper_4 {
      padding: 21rpx 0 23rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 18rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .text-wrapper_5 {
      padding: 21rpx 0 21rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 18rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .text-wrapper_6 {
      padding: 20rpx 0 22rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 19rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .text-wrapper_7 {
      padding: 18rpx 0 20rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 0;
    }
    .text-wrapper_8 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      padding: 18rpx 0 20rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .text-wrapper_9 {
      padding: 18rpx 0 20rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      right: 0;
      top: 0;
    }
    .text-wrapper_10 {
      padding: 18rpx 0 20rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .text-wrapper_11 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      padding: 18rpx 0 20rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .section_1 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 30rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .text-wrapper_12 {
      padding: 18rpx 0 20rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .text-wrapper_13 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      padding: 18rpx 0 20rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .text-wrapper_14 {
      padding: 18rpx 0 18rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 0;
    }
    .text-wrapper_15 {
      padding: 18rpx 0;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
      position: absolute;
      right: 0;
      top: 0;
      .text_24 {
        margin-left: 23rpx;
        margin-right: 13rpx;
      }
    }
    .text-wrapper_16 {
      padding: 18rpx 0;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      .text_25 {
        margin-left: 21rpx;
        margin-right: 14rpx;
      }
    }
    .text-wrapper_17 {
      padding: 18rpx 0 18rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 24rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .text_27 {
        margin-left: 23rpx;
        margin-right: 12rpx;
      }
    }
    .text-wrapper_18 {
      padding: 18rpx 0 18rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 25rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
      position: absolute;
      left: 0;
      bottom: 0;
      .text_28 {
        margin-left: 9rpx;
      }
    }
    .text-wrapper_19 {
      padding: 18rpx 0 20rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 210rpx;
      height: 60rpx;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .text-wrapper_1 {
    padding: 21rpx 0 21rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-wrapper_2 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 18rpx;
    white-space: nowrap;
    padding: 21rpx 0 21rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
