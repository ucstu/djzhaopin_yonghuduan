<template>
    <view class="flex-col bar">
        <view class="flex-row equal">
            <view class="items-center justify-center equalDiv">
                <text class="text">区域</text>
                <image class="image"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png" />
            </view>
            <view class="items-center justify-center equalDiv">
                <text class="text">要求</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image" />
            </view>
            <view class="items-center justify-center equalDiv">
                <text class="text">公司</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image" />
            </view>
            <view class="items-center justify-center equalDiv">
                <text class="text">福利</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image" />
            </view>
            <view class="items-center justify-center equalDiv">
                <text class="text">排序</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image" />
            </view>
        </view>
        <view class="flex-row items-center filter" @click="showOver">
            <scroll-view class="sift_group" :scroll-x="true" @scroll="scroll">
                <view class="flex-row items-center">
                    <view class="justify-center sift" v-for="(sift, i) in sifts" :key="i">
                        <text>{{ sift }}</text>
                    </view>
                </view>
            </scroll-view>
            <view class="justify-center image_sifts">
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773723315322.png"
                    class="sifts" />
            </view>
        </view>
        <view class="flex-row over-sifts" v-show="true">
            <scroll-view class :scroll-y="true" @scroll="scroll">
                <view class="flex-row items-center over-sift">
                    <view class="justify-center over-s" v-for="(sift, i) in sifts" :key="i">{{ sift }}</view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const sifts = reactive([
    '不限',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'React',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'PHP',
    'Html5',
    'Vue',
    'React',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'PHP',
    'Html5',
    'Vue',
    'React',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
    'C++',
    'JAVA',
    'C#',
    'PHP',
    'Html5',
    'Vue',
])

const showOver = () => {
    return 0
}


</script>

<style lang="scss" scoped>
.bar {
    .equal {
        width: 690rpx;
        height: 60rpx;
        .equalDiv {
            width: 138rpx;
            height: 60rpx;
            color: rgb(0, 0, 0);
            font-size: 25rpx;
            white-space: nowrap;
            .image {
                width: 7rpx;
                height: 5rpx;
                margin: 10rpx 0 7rpx 7rpx;
            }
        }
    }
    .filter {
        height: 50rpx;
        margin-top: 15rpx;
        .sift_group {
            width: 640rpx;
            overflow-x: hidden;
            .sift {
                margin-left: 15rpx;
                width: 80rpx;
                font-size: 25rpx;
                background-color: rgb(229, 229, 229);
                border-radius: 5rpx;
            }
        }
        .image_sifts {
            width: 70rpx;
            .sifts {
                width: 42rpx;
                height: 33rpx;
            }
        }
    }
    .over-sifts {
        height: 700rpx;
        overflow-y: hidden;
        .over-sift {
            flex-wrap: wrap;
            .over-s {
                margin-left: 15rpx;
                margin-top: 15rpx;
                width: 215rpx;
                height: 60rpx;
                border: solid 2rpx rgb(241, 239, 239);
                font-size: 30rpx;
            }
        }
    }
}
</style>
