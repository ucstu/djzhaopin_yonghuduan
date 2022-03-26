<template>
  <view class="flex-col page">
    <NavigationBar class="header" />
    <view class="flex-col list">
      <CompanyPanel
        class="list-item"
        :key="i"
        v-for="(attentionCompany, i) in attentionCompanys"
    /></view>
  </view>
</template>

<script>
import * as Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import CompanyDetail from '@/components/CompanyDetail/CompanyDetail.vue'
import CompanyPanel from '@/components/CompanyPanel/CompanyPanel.vue'

export default {
  components: {
    NavigationBar,
    CompanyDetail,
    CompanyPanel,
  },
  data() {
    return {
      attentionCompanys: [
        {
          logoAddress:
            'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png',
          name: '字节跳动',
          recruitmentPosition: '200',
          cityAndInfo: '杭州 | 上市公司 | 2000人以上 | 软件服务',
          benefitOne: '技能培训',
          benefitTwo: '年薪双假',
          benefitThree: '带薪年假',
          unfollow: '取消关注',
        },
        {
          logoAddress:
            'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png',
          name: '字节跳动',
          recruitmentPosition: '200',
          cityAndInfo: '杭州 | 上市公司 | 2000人以上 | 软件服务',
          benefitOne: '技能培训',
          benefitTwo: '年薪双假',
          benefitThree: '带薪年假',
          unfollow: '取消关注',
        },
      ],
    }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
    view_4OnClick() {
      uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
    },
    view_10OnClick() {
      uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
    },
    view_6OnClick() {
      uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
    },
    view_13OnClick() {
      uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 1204rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  position: relative;
  .header {
    position: relative;
  }
  .list {
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 130rpx;
    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
