<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="在线简历" />
    <view class="flex-col group-all">
      <view>
        <view>
          <view class="flex-row">
            <text>{{userName}}</text>
            <image class="image" src="@/static/icons/edit.png"/>
          </view>
          <view>
            <text>{{}}/{{}}/{{}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import JobExpectation from '@/components/JobExpectation/JobExpectation.vue'
import WorkExperience from '@/components/WorkExperience/WorkExperience.vue'
import EducationalExperience from '@/components/EducationalExperience/EducationalExperience.vue'
import ProjectExperience from '@/components/ProjectExperience/ProjectExperience.vue'
import { reactive, ref } from 'vue'



const jobExpectations = reactive([
  {
    name: '前段工程师',
    salary: '8K-9K',
    direction: 'React',
    city: '重庆',
    entryTime: '1个月内入职',
  },
  {
    name: '后段工程师',
    salary: '8K-9K',
    direction: 'JAVA',
    city: '成都',
    entryTime: '3个月内入职',
  },
])
const workExperiences = reactive([
  {
    company: '命通科技',
    direction: '后端工程师',
    work: '开发后台',
    date: '2020.03 - 2021.03',
  },
  {
    company: '小而美科技',
    direction: '前端工程师',
    work: '小程序开发',
    date: '2020.03 - 2021.03',
  },
])
const educationExperiences = reactive([
  {
    school: '电子科技大学',
    levelAndProfession: '本科 | 计算机科学与技术',
    date: '2019.09 - 2022.06',
  },
  {
    school: '清华大学',
    levelAndProfession: '研究生 | 计算机科学与技术',
    date: '2022.09 - 2026.06',
  },
])
const projectExperiences = reactive([
  { project: 'LOL', date: '2020.02-2021.06', work: '完成召唤兽' },
  { project: 'LOL', date: '2020.02-2021.06', work: '完成召唤兽' },
])
const personalAdvantage = ref('能吃苦，能加班，身体挺好！')
const socialUrl = ref('https://blog.ucstu.com')
const basicInformation = ref('应届毕业生/18岁/本科')
const userName = ref('张三')

</script>

<style lang="scss" scoped>
.page {
  .group-all {
    width: 710rpx;
    height: auto;
    margin-left: 20rpx;
  }
  .image {
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
