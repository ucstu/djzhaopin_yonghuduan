<template>
  <view class="flex-col items-start page">
    <NavigationBar class="header" />
  </view>
</template>

<script>
import * as Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {}
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 57rpx 0 1242rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .header {
    margin-left: 40rpx;
  }
}
</style>
