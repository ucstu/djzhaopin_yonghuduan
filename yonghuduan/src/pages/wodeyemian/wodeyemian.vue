<template>
  <view class="flex-col page">
    <view class="section_1"> </view>
    <view class="flex-col section_2">
      <view class="justify-between">
        <view class="flex-row group_1">
          <view class="flex-col items-end image-wrapper">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303727608517085.png"
              class="image"
            />
          </view>
          <view class="flex-col group_2">
            <text class="text">{{ userName }}</text>
            <text class="text_1">{{ basicInformation }}</text>
          </view>
        </view>
        <view @click="view_15OnClick" class="flex-col items-center section_3">
          <text class="text_2">在线简历</text>
          <text class="text_3">完善度84%</text>
        </view>
      </view>
      <view class="justify-between group_3">
        <view @click="view_30OnClick" class="flex-col items-center">
          <text class="text_4 text_5">投递记录</text>
          <text class="text_4 text_6">{{ sendSum }}</text>
        </view>
        <view @click="view_31OnClick" class="flex-col items-center">
          <text class="text_4 text_7">收藏职位</text>
          <text class="text_4 text_8">{{ collectSum }}</text>
        </view>
        <view @click="view_32OnClick" class="flex-col items-center">
          <text class="text_4 text_9">关注公司</text>
          <text class="text_4 text_10">{{ attendSum }}</text>
        </view>
        <view @click="view_33OnClick" class="flex-col items-center group_7">
          <text class="text_4 text_11">待面试</text>
          <text class="text_4 text_12">{{ interSum }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_8">
      <view class="flex-col group_9">
        <view @click="view_18OnClick" class="justify-between group_10">
          <view class="flex-row">
            <image
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529507670707813.png"
              class="image_1"
            />
            <text class="text_13">附件简历</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529395647560983.png"
            class="image_2 image_3"
          />
        </view>
        <view @click="view_19OnClick" class="justify-between group_12">
          <view class="flex-row">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303730921869509.png"
              class="image_4"
            />
            <text class="text_14">求职意向</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529395647560983.png"
            class="image_2 image_5"
          />
        </view>
        <view @click="view_20OnClick" class="justify-between group_14">
          <view class="flex-row">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303730461524227.png"
              class="image_6"
            />
            <text class="text_15">用户反馈</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529395647560983.png"
            class="image_2 image_7"
          />
        </view>
      </view>
      <view class="flex-col group_16">
        <view @click="view_21OnClick" class="justify-between group_17">
          <view class="flex-row">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303729943101325.png"
              class="image_8"
            />
            <text class="text_16">隐私设置</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529395647560983.png"
            class="image_2 image_9"
          />
        </view>
        <view @click="view_22OnClick" class="justify-between group_19">
          <view class="flex-row">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303728304766363.png"
              class="image_10"
            />
            <text class="text_17">设置</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529395647560983.png"
            class="image_2 image_11"
          />
        </view>
      </view>
    </view>
    <view class="justify-between footer">
      <view class="flex-col items-center group_21">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274049751091.png"
          class="image_12"
        />
        <text class="text_18">首页</text>
      </view>
      <view class="flex-col items-center group_22">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274047124255.png"
          class="image_12"
        />
        <text class="text_19">24H面试</text>
      </view>
      <view class="flex-col items-center group_23">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274042906672.png"
          class="image_12"
        />
        <text>信息</text>
      </view>
      <view class="flex-col items-center group_24">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292274055908202.png"
          class="image_12"
        />
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return {
      sendSum: '0',
      collectSum: '0',
      attendSum: '0',
      interSum: '0',
      userName: '张三',
      basicInformation: '应届毕业生/18岁/本科',
    }
  },
  methods: {
    view_15OnClick() {
      uni.navigateTo({ url: '/pages/bianjijianli/bianjijianli' })
    },
    view_30OnClick() {
      uni.navigateTo({ url: '/pages/toudijilu/toudijilu' })
    },
    view_31OnClick() {
      uni.navigateTo({ url: '/pages/shoucangzhiwei/shoucangzhiwei' })
    },
    view_32OnClick() {
      uni.navigateTo({ url: '/pages/guanzhugongsi/guanzhugongsi' })
    },
    view_33OnClick() {
      uni.navigateTo({ url: '/pages/daimianshi/daimianshi' })
    },
    view_18OnClick() {
      uni.navigateTo({ url: '/pages/shangchuanjianli/shangchuanjianli' })
    },
    view_19OnClick() {
      uni.navigateTo({ url: '/pages/qiuzhiyixiang/qiuzhiyixiang' })
    },
    view_20OnClick() {
      uni.navigateTo({ url: '/pages/yonghufankui/yonghufankui' })
    },
    view_21OnClick() {
      uni.navigateTo({ url: '/pages/yinsishezhi/yinsishezhi' })
    },
    view_22OnClick() {
      uni.navigateTo({ url: '/pages/shezhiyemian/shezhiyemian' })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .section_1 {
    background-color: rgb(35, 193, 158);
    height: 45rpx;
  }
  .section_2 {
    padding: 100rpx 50rpx 57rpx;
    background-color: rgb(35, 193, 158);
    overflow: hidden;
    height: 400rpx;
    .group_3 {
      margin-top: 72rpx;
      padding-left: 17rpx;
      padding-right: 13rpx;
      .group_7 {
        width: 104rpx;
        .text_11 {
          color: rgb(0, 0, 0);
          font-size: 25rpx;
          line-height: 23rpx;
          white-space: nowrap;
        }
        .text_12 {
          margin-top: 11rpx;
          color: rgb(0, 0, 0);
          font-size: 25rpx;
          line-height: 18rpx;
          white-space: nowrap;
        }
      }
      .text_5 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text_6 {
        margin-top: 11rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .text_7 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text_8 {
        margin-top: 11rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .text_9 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text_10 {
        margin-top: 11rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .text_4 {
        opacity: 0.5;
      }
    }
    .group_1 {
      width: 359rpx;
      .image-wrapper {
        padding: 90rpx 0 5rpx;
        border-radius: 60rpx;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303726169734760.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 120rpx;
        height: 120rpx;
        .image {
          margin-right: 5rpx;
          border-radius: 13rpx;
          width: 25rpx;
          height: 25rpx;
        }
      }
      .group_2 {
        margin-left: 31rpx;
        align-self: center;
        .text {
          color: rgb(255, 255, 255);
          font-size: 35rpx;
          line-height: 32rpx;
          white-space: nowrap;
        }
        .text_1 {
          margin-top: 18rpx;
          color: rgb(255, 255, 255);
          font-size: 20rpx;
          line-height: 19rpx;
          white-space: nowrap;
        }
      }
    }
    .section_3 {
      padding: 9rpx 0 11rpx;
      align-self: center;
      background-color: rgb(232, 233, 191);
      border-radius: 30rpx;
      overflow: hidden;
      width: 153rpx;
      height: 60rpx;
      .text_2 {
        color: rgba(0, 0, 0, 0.6);
        font-size: 20rpx;
        line-height: 18rpx;
        white-space: nowrap;
      }
      .text_3 {
        margin-top: 7rpx;
        color: rgba(0, 0, 0, 0.6);
        font-size: 16rpx;
        line-height: 15rpx;
        white-space: nowrap;
      }
    }
  }
  .group_8 {
    margin-top: 50rpx;
    padding: 0 20rpx;
    .group_9 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      .group_10 {
        padding: 8rpx 23rpx 9rpx;
        overflow: hidden;
        height: 60rpx;
        .image_3 {
          margin-right: 3rpx;
          align-self: center;
        }
        .image_1 {
          width: 43rpx;
          height: 43rpx;
        }
        .text_13 {
          margin-left: 26rpx;
          align-self: center;
        }
      }
      .group_12 {
        margin-top: 15rpx;
        padding: 7rpx 23rpx 8rpx;
        overflow: hidden;
        height: 60rpx;
        .image_5 {
          margin-right: 4rpx;
          align-self: center;
        }
        .image_4 {
          width: 45rpx;
          height: 45rpx;
        }
        .text_14 {
          margin-left: 24rpx;
          align-self: center;
        }
      }
      .group_14 {
        margin-top: 15rpx;
        padding: 14rpx 22rpx 15rpx;
        overflow: hidden;
        height: 60rpx;
        .image_7 {
          margin: 8rpx 5rpx 7rpx 0;
        }
        .image_6 {
          width: 47rpx;
          height: 31rpx;
        }
        .text_15 {
          margin-left: 22rpx;
          margin-bottom: 4rpx;
        }
      }
    }
    .group_16 {
      margin-top: 50rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 27rpx;
      white-space: nowrap;
      .group_17 {
        padding: 10rpx 26rpx;
        overflow: hidden;
        height: 60rpx;
        .image_9 {
          align-self: center;
        }
        .image_8 {
          width: 38rpx;
          height: 40rpx;
        }
        .text_16 {
          margin: 5rpx 0 9rpx 28rpx;
        }
      }
      .group_19 {
        margin-top: 15rpx;
        padding: 11rpx 23rpx 12rpx;
        overflow: hidden;
        height: 60rpx;
        .image_11 {
          margin-right: 3rpx;
          align-self: center;
        }
        .image_10 {
          width: 44rpx;
          height: 37rpx;
        }
        .text_17 {
          margin: 4rpx 0 7rpx 24rpx;
        }
      }
    }
    .image_2 {
      width: 10rpx;
      height: 16rpx;
    }
  }
  .footer {
    margin-top: 341rpx;
    padding: 9rpx 49rpx 11rpx 56rpx;
    overflow: hidden;
    height: 101rpx;
    border: solid 2rpx rgb(0, 0, 0);
    .group_21 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 76rpx;
      .text_18 {
        margin-top: 3rpx;
      }
    }
    .group_22 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      height: 77rpx;
      .text_19 {
        margin-top: 4rpx;
      }
    }
    .group_23 {
      margin-top: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 72rpx;
    }
    .group_24 {
      margin-top: 3rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 74rpx;
    }
    .image_12 {
      width: 54rpx;
      height: 54rpx;
    }
  }
}
</style>
