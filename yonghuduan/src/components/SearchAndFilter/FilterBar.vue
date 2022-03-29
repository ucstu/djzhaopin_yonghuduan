<template>
    <view class="flex-row bar">
        <view class="flex-row equal">
            <view class="flex-row equalDiv">
                <text class="text">区域</text>
                <image
                    class="image"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                />
            </view>
            <view class="flex-row equalDiv">
                <text class="text">要求</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="flex-row equalDiv">
                <text class="text">公司</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="flex-row equalDiv">
                <text class="text">福利</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
            <view class="flex-row equalDiv">
                <text class="text">排序</text>
                <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
                    class="image"
                />
            </view>
        </view>
        <view class="flex-row filter" style="flex:auto">
            <view class="flex-col items-center sift">
                <text>不限</text>
            </view>
            <view class="flex-col items-center sift">
                <text>C++</text>
            </view>
            <view class="flex-col items-center sift">
                <text class>JAVA</text>
            </view>
            <view class="flex-col items-center sift">
                <text>C#</text>
            </view>
            <view class="flex-col items-center sift">
                <text>PHP</text>
            </view>
            <view class="flex-col items-center sift">
                <text class>Html5</text>
            </view>
            <image
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773723315322.png"
                class="sifts"
            />
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'


</script>

<style lang="scss" scoped>
.bar {
    .equal {
        position: absolute;
        left: 18rpx;
        right: 20rpx;
        top: 163rpx;
        .equalDiv {
            color: rgb(0, 0, 0);
            font-size: 25rpx;
            line-height: 23rpx;
            white-space: nowrap;
            padding: 35rpx 30rpx 35rpx;
            .text {
                margin-left: 20rpx;
            }
            .image {
                width: 7rpx;
                height: 5rpx;
                margin: 10rpx 0 7rpx 7rpx;
            }
        }
    }
    .filter {
        position: absolute;
        left: 50rpx;
        right: 40rpx;
        top: 245rpx;
        .sift {
            padding: 8rpx 0 8rpx;
            color: rgb(0, 0, 0);
            font-size: 16rpx;
            line-height: 14rpx;
            white-space: nowrap;
            background-color: rgb(229, 229, 229);
            border-radius: 5rpx;
            overflow: hidden;
            width: 50rpx;
            height: 30rpx;
            flex: auto;
        }
        .sifts {
            margin-left: 33rpx;
            margin-bottom: 5rpx;
            width: 27rpx;
            height: 23rpx;
        }
    }
}
</style>
