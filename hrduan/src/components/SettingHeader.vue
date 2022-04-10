<template>
    <div class="top">
        <div class="left">
            <span>We</span>
            <span class="red">❤</span>
            <span>{{ store.state.companyInfo.fullName || "You" }}</span>
        </div>
        <div class="right">
            <router-link to="/PublishJob">
                <img src="../assets/pub.png">
            </router-link>
            <img :src="avatar">
            <div class="dropdown">
                <div class="user">
                    <span>{{ name || "HR" }}</span>
                </div>
                <ul class="dropdown-content">
                    <li>
                        <a href="#">账号设置</a>
                    </li>
                    <li>
                        <a href="#">退出</a>
                    </li>
                </ul>
            </div>
        </div>   </div>
</template>

<script setup lang="ts">
import { key } from '../stores'
import { useStore } from 'vuex'
import { onMounted } from 'vue';
const store = useStore(key)
const { name, avatar } = store.state.hrInfo
</script>

<style scoped lang="scss">.top {
    display: flex;
    justify-content: space-around;
    background-color: rgb(50, 55, 62);
    height: 42.5px;
    align-items: center;
    color: rgb(255, 255, 255);

    .left {

        .red {
            color: red;
            margin: 0px 10px;
        }
    }

    .right {
        display: flex;
        align-items: center;

        :first-child {
            width: 20px;
            height: 20px;

        }

        :nth-child(2) {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: auto 10px auto 20px;
        }

        .dropdown {
            position: relative;
            display: inline-block;
            width: 85px;
            cursor: pointer;

            .user {
                text-align: center;
                padding-left: 18px;

                span {
                    display: block;
                    width: 60px;
                    height: 60px;
                }
            }

            a {
                text-decoration: none;

                color: rgb(255, 255, 255);
            }

            a:hover {
                color: rgb(176, 163, 192);
            }
        }

        .dropdown-content {
            display: none;
            position: absolute;
            width: 60px;
            top: 30px;
            left: -6px;
            font-size: 14px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            border-radius: 0;
            height: 55px;
            list-style: none;
            transform: matrix();

            :nth-child(1) {
                text-align: center;
                width: 60px;
                margin-top: 1px;
            }

            :nth-child(2) {
                margin-top: 15px;
                text-align: center;
                position: absolute;
                left: 10px;
            }
        }

        .dropdown:hover .dropdown-content {
            background-color: rgb(51, 51, 51);
            display: block;
        }

        span {
            margin-left: 10px;
        }
    }
}
</style >
