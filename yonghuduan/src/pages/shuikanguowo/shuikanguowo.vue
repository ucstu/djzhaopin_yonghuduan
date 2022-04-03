<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="谁看过我" />
    <view class="flex-col list">
      <CompanyDetail
        @click="view_2OnClick"
        class="list-item"
        :companyDetail="lookForMe"
        :key="i"
        v-for="(lookForMe, i) in lookForMes"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import CompanyDetail from '@/components/CompanyDetail/CompanyDetail.vue'
import { reactive } from 'vue';


const lookForMes = reactive([
  {
    logoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png',
    name: '字节跳动',
    recruitmentPosition: '200',
    cityAndInfo: '杭州 | 上市公司 | 2000人以上 | 软件服务',
    benefitOne: '技能培训',
    benefitTwo: '年薪双假',
    benefitThree: '带薪年假',
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
  },
])

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_2OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_3OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_4OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const view_5OnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 1221rpx;
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
    top: 128rpx;
    .list-item {
      &:not(:first-of-type) {
        margin-top: 24rpx;
      }
    }
  }
}
</style>
