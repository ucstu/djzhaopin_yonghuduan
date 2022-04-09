<template>
    <setting-header />
    <div class="outer">
        <div class="sidebar">
            <div class="title">
                <span>招聘设置</span>
            </div>
            <div class="list">
                <div>
                    <router-link to="/setting/personInfo">
                        <span>个人信息</span>
                    </router-link>
                </div>
                <div>
                    <router-link to="/setting/Authentication">
                        <span>身份认证</span>
                    </router-link>
                </div>
                <div>
                    <router-link to="/setting/Comprises">
                        <span>常用语</span>
                    </router-link>
                </div>
                <div>
                    <router-link to="/setting/Other">
                        <span>其它设置</span>
                    </router-link>
                </div>
            </div>
            <div class="line">
            </div>
        </div>

        <router-view />   </div>
</template>

<script setup lang="ts">
import settingheaderVue from './SettingHeader.vue';
import { nextTick, ref, provide } from 'vue';

</script>

<style scoped lang="scss">.outer {
    display: flex;
    flex-direction: row;

    .sidebar {
        flex: 0 0 300px;
        height: 100vh;
        background: #fff9f9;
        align-items: center;
        position: relative;

        .title {
            font-size: 16px;
            text-align: center;
            margin-top: 90px;
            text-shadow: 4px 4px 5px rgb(50, 55, 62);
            ;
        }

        .list {
            text-align: center;

            a {
                text-decoration: none;
                color: rgb(0, 0, 0);
            }

            a:hover {
                color: rgb(0, 139, 179)
            }

            a::selection {
                color: rgb(0, 139, 179)
            }

            div {
                list-style: none;
                margin-top: 40px;
            }
        }
    }

    .line {
        height: 70vh;
        width: 1px;
        background-color: rgb(0, 0, 0, 0.5);
        position: absolute;
        right: 0px;
        top: 11%;
    }

    .content {
        flex: 1;
        background: #ffffff;
    }
}
</style >
