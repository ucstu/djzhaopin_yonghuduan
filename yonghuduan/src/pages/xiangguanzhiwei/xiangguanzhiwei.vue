<template>
  <view class="page">
    <SearchAndFilter></SearchAndFilter>
    <view class="flex-col list">
      <JobDetail
        @click="toPositions"
        class="list-item"
        :jobDetail="JobDetail"
        :key="i"
        v-for="(JobDetail, i) in jobDetails"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
import JobDetail from '@/components/JobDetail/JobDetail.vue';
import { key } from '@/stores';
import SearchAndFilter from '@/components/SearchAndFilter/SearchAndFilter.vue';
import { getCompanyinfosCompanyinfoidPositioninfos } from '@/services/services';

const store = useStore(key)

const jobDetails = reactive([
  {
    name: '前端开发实习生',
    workArea: '江北区 | 在校/应届',
    education: '本科',
    directionTags: [
      '后台开发',
      'JAVA开发',
    ],
    companyLogoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
    companyName: '字节跳动',
    companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
    startingSalary: '4K',
    ceilingSalary: '8K',
    releaseDate: '2月28日',
  },
])

getCompanyinfosCompanyinfoidPositioninfos(
  // @ts-ignore
  { name: '前端开发' },
  { salary: '2k-3k' },
).then(res => {
  jobDetails.push(...res.data)
  console.log(jobDetails)
})


const toPositions = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
</script>

<style lang="scss" scoped>
.page {
  height: 1334rpx;
  width: 710rpx;
  margin-left: 20rpx;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  position: relative;
  .list {
    width: 690rpx;
    margin-left: 10rpx;
    margin-top: 30rpx;
  }
}
</style>
