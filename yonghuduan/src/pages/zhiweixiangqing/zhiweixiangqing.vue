<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="justify-between group_1">
      <view class="flex-col">
        <image class="image_2" :src="jobName" />
        <view class="flex-row group_3">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16476080199658875198.png"
            class="image_3" />
          <text class="text">{{ address }}</text>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528785310356733.png"
            class="image_4" />
          <text class="text_1">{{ recruitmentType }}</text>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528784209429852.png"
            class="image_5" />
          <text class="text_2">{{ education }}</text>
        </view>
      </view>
      <text class="text_3">{{ salary }}</text>
    </view>
    <view @click="view_5OnClick" class="justify-between group_4">
      <view class="flex-row">
        <image class="image_6" :src="logoAddress" />
        <view class="flex-col group_6">
          <text class="text_4">{{ name }}</text>
          <text class="text_5">{{ cityAndInfo }}</text>
        </view>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528783146914074.png"
        class="image_7" />
    </view>
    <view class="justify-between group_7">
      <view class="flex-row group_8">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528781826385526.png"
          class="image_8" />
        <text class="text_6">{{ personnelName }}</text>
      </view>
      <view class="flex-row group_9">
        <text>{{ activeTime }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16476080199650559462.png"
          class="image_9" />
      </view>
    </view>
    <view class="flex-col group_10">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528781687109636.png"
        class="image_10" />
      <view class="flex-col group_11">
        <view class="flex-col">
          <text class="text_8">职位类型：全职</text>
          <view class="flex-row group_13">
            <text>职位亮点：双通道发展</text>
            <text class="text_10">倒是负责制</text>
          </view>
          <text class="text_11">任职要求：</text>
          <text class="text_12"></text>
          1、熟悉HTML5、CSS3、JavaScript等基础技术，熟悉W3C标准及规范；
          <br />
          </text>
        </view>
        <text class="text_13">
          2、熟悉JQuery、Angularjs、React，vue等开发框架。熟悉常用数据结构；
          <br />
        </text>
        <view class="flex-col">
          <text class="text_14">
            3、对Web技术有浓厚兴趣，了解行业热门技术特点，有不断提升组件的学习
            <br />
          </text>
          <text class="text_15">意识；</text>
          <text class="text_16">
            4、良好的沟通能力和团队协作精神，严谨、踏实的工作态度与高质量意识，
            <br />
          </text>
          <text class="text_17">良好的抗压能力。</text>
        </view>
        <view class="flex-col items-center group_15">
          <text>加分项：</text>
          <text>1、有自己的技术博客，能深入分析技术细节并分享；</text>
        </view>
        <view class="flex-col group_16">
          <text>2、有开源代码，并能被他人使用</text>
          <text>3、已有相关实习经验</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_17">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528781099944130.png"
        class="image_10" />
      <text class="text_22">工作时间：周末双休</text>
      <text class="text_23">上下班时间：09：00-18：00</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528779846297628.png"
        class="image_13" />
    </view>
    <view class="flex-col group_18">
      <view class="flex-row group_19">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528778823688360.png"
          class="image_14" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528778205473828.png"
          class="image_15" />
      </view>
      <view class="flex-col group_20">
        <text>·求职中如遇到招聘方扣押证件、有球提供担保或收取财物、强迫入股或集资、收取不正当</text>
        <text class="text_25">·利益或其他违法情形，请立即举报</text>
        <text class="text_26">·如遇到岗位要求海外工作，请提高警惕，谨防诈骗</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
import { ref } from 'vue'
const salary = ref('6K - 8K')
const jobName = ref(
  'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528786354168947.png'
)
const logoAddress = ref(
  'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png')  personnelName: '张三·人事总监',
const activeTime = ref('两个月前活跃')
const address = ref('重庆*九龙坡区')
const recruitmentType = ref('在校/应届')
const education = ref('本科')
const name = ref('字节跳动')
const cityAndInfo = ref('D轮及以上 | 2000人以上 | 内容资讯')
const view_5OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 30rpx;
  background-color: rgb(255, 255, 255);
  height: 1698rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .group_1 {
    position: absolute;
    left: 30rpx;
    right: 27rpx;
    top: 114rpx;
    .text_3 {
      margin-right: 8rpx;
      margin-top: 46rpx;
      color: rgb(35, 193, 158);
      font-size: 35rpx;
      line-height: 26rpx;
      white-space: nowrap;
    }
    .image_2 {
      margin-right: 17rpx;
      width: 369rpx;
      height: 53rpx;
    }
    .group_3 {
      margin-top: 19rpx;
      .image_3 {
        width: 24rpx;
        height: 24rpx;
      }
      .text {
        margin: 3rpx 0 2rpx 6rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .image_4 {
        margin-left: 4rpx;
        width: 21rpx;
        height: 20rpx;
      }
      .text_1 {
        margin: 3rpx 0 2rpx 6rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 19rpx;
        white-space: nowrap;
      }
      .image_5 {
        margin-left: 7rpx;
        width: 24rpx;
        height: 20rpx;
      }
      .text_2 {
        margin: 3rpx 0 2rpx 6rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
    }
  }
  .group_4 {
    position: absolute;
    left: 30rpx;
    right: 27rpx;
    top: 251rpx;
    .image_7 {
      margin-right: 23rpx;
      align-self: center;
      width: 5rpx;
      height: 17rpx;
    }
    .image_6 {
      border-radius: 5rpx;
      width: 101rpx;
      height: 68rpx;
    }
    .group_6 {
      margin: 7rpx 0 8rpx 21rpx;
      .text_4 {
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        white-space: nowrap;
      }
      .text_5 {
        margin-top: 7rpx;
        color: rgba(163, 154, 154, 0.7);
        font-size: 20rpx;
        line-height: 19rpx;
        white-space: nowrap;
      }
    }
  }
  .group_7 {
    position: absolute;
    left: 30rpx;
    right: 27rpx;
    top: 350rpx;
    .group_8 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      letter-spacing: 5rpx;
      white-space: nowrap;
      .image_8 {
        border-radius: 25rpx;
        width: 50rpx;
        height: 50rpx;
      }
      .text_6 {
        margin-left: 17rpx;
        align-self: center;
      }
    }
    .group_9 {
      margin-right: 24rpx;
      align-self: center;
      color: rgba(0, 0, 0, 0.5);
      font-size: 16rpx;
      line-height: 15rpx;
      white-space: nowrap;
      .image_9 {
        margin-left: 17rpx;
        width: 4rpx;
        height: 14rpx;
      }
    }
  }
  .group_10 {
    position: absolute;
    left: 30rpx;
    right: 27rpx;
    top: 435rpx;
    .group_11 {
      margin-top: 20rpx;
      .text_13 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
      }
      .group_15 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .group_16 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .text_8 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .group_13 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
        .text_10 {
          margin-left: 17rpx;
        }
      }
      .text_11 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .text_12 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
      }
      .text_14 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
      }
      .text_15 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .text_16 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
      }
      .text_17 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 20rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
    }
  }
  .group_17 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 20rpx;
    line-height: 30rpx;
    white-space: nowrap;
    position: absolute;
    left: 30rpx;
    right: 30rpx;
    bottom: 150rpx;
    .text_22 {
      margin-top: 20rpx;
    }
    .text_23 {
      margin-top: 30rpx;
    }
    .image_13 {
      margin-top: 20rpx;
      border-radius: 15rpx;
      width: 92vw;
      height: 44.5vw;
    }
  }
  .group_18 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14rpx;
    line-height: 15rpx;
    letter-spacing: 2.8rpx;
    white-space: nowrap;
    position: absolute;
    left: 30rpx;
    right: 27rpx;
    bottom: 30rpx;
    .group_19 {
      padding: 0 5rpx;
      .image_14 {
        margin-bottom: 3rpx;
        width: 16rpx;
        height: 20rpx;
      }
      .image_15 {
        margin-left: 14rpx;
        width: 92rpx;
        height: 23rpx;
      }
    }
    .group_20 {
      margin-top: 9rpx;
      padding: 0 6rpx;
      .text_25 {
        margin-top: 5rpx;
      }
      .text_26 {
        margin-top: 5rpx;
      }
    }
  }
  .image_10 {
    width: 138rpx;
    height: 35rpx;
  }
}
</style>
