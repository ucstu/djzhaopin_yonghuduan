<template>
    <div class="top">
        <div class="left">
            <div class="left-we">
                <span>We</span>
                <span class="red">❤</span>
                <span>{{ store.state.companyInfo.fullName || "You" }}</span>
            </div>
            <div class="left-route">
                <router-link to="/Manage">
                    <span>首页</span>
                </router-link>
                <router-link to="/System/Talent">
                    <span>找人才</span>
                </router-link>
                <router-link to="/PublishJob">
                    <span>招聘</span>
                </router-link>
            </div>
        </div>
        <div class="right">
            <router-link to="/Setting/">
                <img :src="avatar">
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { key } from '../stores'
import { useStore } from 'vuex'
import { onMounted } from 'vue';
const store = useStore(key)
const { name, avatar } = store.state.hrInfo
</script>

<style scoped lang="scss">
.top {
    display: flex;
    justify-content: space-around;
    background-color: rgb(50, 55, 62);
    height: 42.5px;
    align-items: center;
    color: rgb(255, 255, 255);

    .left {
        width: 400px;
        display: flex;
        justify-content: space-between;
        margin-right: 100px;



        .left-route {
            width: 200px;
            display: flex;
            justify-content: space-around;

            a {
                text-decoration: none;
                color: rgb(255, 255, 255);
            }

            span {
                cursor: pointer;

            }
        }

        .red {
            color: red;
            margin: 0px 10px;
        }
    }

    .right {
        display: flex;
        align-items: center;

        :first-child {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: auto 10px auto 20px;

        }

    }
}
</style >
