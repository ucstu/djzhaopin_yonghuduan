<template>
  <view class="page">
    <SearchAndFilter></SearchAndFilter>
    <view class="flex-col list">
      <JobDetail
        v-for="(JobDetail, i) in jobDetails"
        :key="i"
        class="list-item"
        :job-detail="JobDetail"
        @click="toPositions"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter.vue";
import { getCompanyinfosCompanyinfoidPositioninfos } from "@/services/services";
import { key } from "@/stores";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const jobDetails = reactive([
  {
    name: "前端开发实习生",
    workArea: "江北区 | 在校/应届",
    education: "本科",
    directionTags: ["后台开发", "JAVA开发"],
    companyLogoAddress:
      "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png",
    companyName: "字节跳动",
    companyInfo: "D轮及以上 | 2000人以上 | 内容资讯",
    startingSalary: "4K",
    ceilingSalary: "8K",
    releaseDate: "2月28日",
  },
]);

getCompanyinfosCompanyinfoidPositioninfos(
  // @ts-ignore
  { name: "前端开发" },
  { salary: "2k-3k" }
).then((res) => {
  jobDetails.push(...res.data);
  console.log(jobDetails);
});

const toPositions = () => {
  uni.navigateTo({ url: "/pages/gongsijieshao/gongsijieshao" });
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 710rpx;
  height: 1334rpx;
  margin-left: 20rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .list {
    width: 690rpx;
    margin-top: 30rpx;
    margin-left: 10rpx;
  }
}
</style>
