<template>
    <view class="flex-col bar">
        <view class="flex-row items-center justify-between equal">
            <view class="equalDiv">
                <text class="text">区域</text>
                <image
                    class="image"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                />
            </view>
            <view class="equalDiv">
                <text class="text">要求</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="equalDiv">
                <text class="text">公司</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="equalDiv">
                <text class="text">福利</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="equalDiv">
                <text class="text">排序</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
        </view>
        <view class="flex-row items-center filter">
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
                    class="sifts"
                />
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const sifts = reactive([

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
])

</script>

<style lang="scss" scoped>
.bar {
    height: 150rpx;
    width: 710rpx;
    overflow: hidden;
    .equal {
        width: 700rpx;
        height: 50rpx;
        .equalDiv {
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
}
</style>
