<template>
    <view class="bar" :style="'margin-top: ' + navigationBarTop + 'px'">
        <view
            class="items-center group"
            :style="'width: ' + navigationBarWidth + 'px; height: ' + navigationBarHeight + 'px'"
        >
            <view class="flex-row" style="width: 100%">
                <text @click="textOnClick" class="city">{{ city }}</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
                    class="image"
                />
                <view class="flex-row input">
                    <image
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
                        class="search"
                    />
                    <text class="searchText">{{ searchContent }}</text>
                </view>
                <text @click="text_1OnClick" class="cancel">取消</text>
            </view>
        </view>
        <view class="justify-between about">
            <text @click="text_2OnClick">相关职位</text>
            <text @click="text_3OnClick">相关公司</text>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex';
import JobDetail from '../JobDetail/JobDetail.vue';
import { key } from '../../stores';

const store = useStore(key)

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
// @ts-ignore
const navigationBarHeight = store.state.menuButtonInfo.height
// @ts-ignore
const navigationBarTop = store.state.menuButtonInfo.top - uni.upx2px(45)
// @ts-ignore
const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(50)
/* #endif */

const city = ref('重庆')
const searchContent = ref('请输入关键字')
const textOnClick = () => {
    uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
const text_1OnClick = () => {
    uni.navigateBack({ delta: 100 })
}
const text_2OnClick = () => {
    uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const text_3OnClick = () => {
    uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}

</script>

<style lang="scss" scoped>
.bar {
    padding: 46rpx 18rpx 515rpx 18rpx;
    background-color: rgb(255 255 255);
    height: 100%;
    width: 100%;
    overflow-y: auto;
    position: relative;
    .group {
        padding-right: 21rpx;
        left: 18rpx;
        right: 18rpx;
        top: 46rpx;
        position: absolute;
        .city {
            align-self: center;
            color: rgb(0, 0, 0);
            font-size: 25rpx;
            line-height: 23rpx;
            white-space: nowrap;
        }
        .image {
            align-self: center;
            width: 15rpx;
            height: 8rpx;
        }

        .input {
            margin-left: 20rpx;
            padding: 11rpx 15rpx 12rpx;
            line-height: 20rpx;
            flex: 1 1 auto;
            background-color: rgb(229, 229, 229);
            border-radius: 25rpx;
            box-shadow: 0rpx 4rpx 4rpx rgb(0, 0, 0, 0.25);
            height: 43rpx;
            white-space: nowrap;
            .search {
                align-self: center;
                width: 20rpx;
                height: 20rpx;
            }
            .searchText {
                align-self: center;
                margin-left: 11rpx;
                font-size: 20rpx;
            }
        }
        .cancel {
            margin-left: 21rpx;
            align-self: center;
            color: rgb(0, 0, 0);
            font-size: 25rpx;
            line-height: 23rpx;
            white-space: nowrap;
        }
    }
    .about {
        padding-left: 111rpx;
        padding-right: 106rpx;
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 28rpx;
        letter-spacing: 6rpx;
        white-space: nowrap;
        position: absolute;
        left: 18rpx;
        right: 18rpx;
        top: 128rpx;
    }
}
</style>
