<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="通知设置" />
    <view class="justify-between items-center group-box">
      <text class="text-title">新消息通知</text>
      <switch style="transform:scale(0.7)" />
    </view>
    <view class="justify-between items-center group-box">
      <text class="text-title">声音</text>
      <switch style="transform:scale(0.7)" />
    </view>
    <view class="justify-between items-center group-box">
      <text class="text-title">震动</text>
      <switch style="transform:scale(0.7)" />
    </view>
    <view class="justify-between items-center group-box">
      <text class="text-title">勿扰模式</text>
      <switch :checked="disturb" style="transform:scale(0.7)" @click="disturb = !disturb" />
    </view>
    <view class="justify-between items-center group-box" v-if="disturb">
      <view class="flex-col">
        <text class="text-title">勿扰时间</text>
        <text style="padding-left: 20rpx; font-size: 20rpx;">开启后，指定时间类将不再接收相关信息推送</text>
      </view>
      <text style="font-size: 25rpx;padding-right: 10rpx;" @click="showTime">{{ noDisturbTime }}</text>
    </view>
    <WybPopup
      ref="popup"
      type="bottom"
      height="300"
      radius="6"
      mode="size-auto"
      :showCloseIcon="false"
    >
      <picker-view @change="bindChange" class="picker-view">
        <picker-view-column>
          <view class="item" v-for="(item, i) in hours" :key="i">{{ item }}时</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, i) in minutes" :key="i">{{ item }}分</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, i) in hours" :key="i">{{ item }}时</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, i) in minutes" :key="i">{{ item }}分</view>
        </picker-view-column>
      </picker-view>
    </WybPopup>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import WybPopup from '@/components/wyb-popup/wyb-popup.vue';

const noDisturbTime = ref('22：00-7：00')
const disturb = ref(false)

const popup = ref()
const showTime = () => {
  popup.value.show()
}

const date = new Date()
const hours = ref([])
let hour1 = ref()
let hour2 = ref()
let minute1 = ref()
let minute2 = ref()
const minutes = ref([])
for (let i = 1; i <= 24; i++) {
  if (i > 10) {
    i = `${"0" + i}`
  }
  hours.value.push(i)
}
for (let i = 0; i <= 59; i++) {
  if (i > 10) {
    i = '0' + i
  }
  minutes.value.push(i)
}

const bindChange = (e) => {
  let val = e.detail.value
  hour1.value = hours.value[val[0]]
  hour2.value = hours.value[val[2]]
  minute1.value = minutes.value[val[1]]
  minute2.value = minutes.value[val[3]]
  noDisturbTime.value = `${hour1.value}:${minute1.value}-${hour2.value}:${minute2.value}`
}
console.log(date);

</script>

<style lang="scss" scoped>
.page {
  .group-box {
    width: 710rpx;
    height: 100rpx;
    margin-top: 20rpx;
    margin-left: 20rpx;
    line-height: 40rpx;
    border: 2rpx solid rgb(200, 200, 200);
    border-radius: 10rpx;
    .text-title {
      font-size: 30rpx;
      padding-left: 20rpx;
    }
  }
  .picker-view {
    width: 750rpx;
    height: 450rpx;
    margin-top: 20rpx;
  }
  .item {
    height: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
