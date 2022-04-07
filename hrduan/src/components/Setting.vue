<template>
    <setting-header />
    <div class="outer">
        <div class="sidebar">
            <div class="title">
                <span>招聘设置</span>
            </div>
            <div class="list">

                <div>
                    <a href="#/setting/info">
                        <span>个人信息</span>
                    </a>
                </div>
                <div>
                    <a href="#/setting/company">
                        <span>身份认证</span>
                    </a>
                </div>
                <div>
                    <a href="#/setting/password">
                        <span>常用语</span>
                    </a>
                </div>
                <div>
                    <span>其它设置</span>
                </div>

            </div>
        </div>

        <router-view />
    </div>
    <div class="footer">footer</div>
</template>

<script setup lang="ts">
import settingHeaderVue from './SettingHeader.vue';
</script>

<style scoped lang="scss">.outer {
    display: flex;
    border: 1px solid red;
    flex-direction: row;

    .sidebar {
        flex: 0 0 300px;
        height: 100vh;
        background: #fff9f9;
        align-items: center;

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

            div {
                list-style: none;
                margin-top: 40px;
            }
        }
    }

    .line {
        height: 70vh;
        margin: 10vh auto;
        width: 1px;
        background-color: rgb(0, 0, 0, 0.5);
    }

    .content {
        flex: 1;
        background: #ffffff;
    }


}
</style >
