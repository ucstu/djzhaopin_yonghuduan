<template>
    <div class="layout">
        <div class="header">
            <span>东江人才招聘 HR端</span>
            <div class="dropdown">
                <span class="user">{{ store.state.hrInfo.name || 'HR' }}</span>
                <ul class="dropdown-content">
                    <li>
                        <a href="#">账号设置</a>
                    </li>
                    <li>
                        <a href="#">退出</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="above">
                <div class="top">
                    <img src="../../assets/logo1 1.png" alt="网络问题，请刷新" />
                    <div class="line"></div>
                    <span>HR端</span>
                </div>
                <div class="back">
                    <span>确认公司，开始招聘</span>
                </div>
            </div>
            <router-view />
        </div>
        <div class="bottom">
            <div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { key } from '../../stores';
const store = useStore(key)


// const api = new DefaultApi();

// api.accountsPost({
//     phoneNumber: "1213",
//     verificationCode: "12134",
//     accountType: 1
// }).then(res => {
//     console.log(res);
// });


</script>

<style lang="scss" scoped>
$hd-height: 27.5px;
li {
    list-style: none;
}
a {
    text-decoration: none;

    color: rgb(255, 255, 255);
}
a:hover {
    color: rgb(176, 163, 192);
}
.layout {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    .header {
        display: flex;
        justify-content: space-around;
        background-color: rgb(51, 51, 51);
        height: $hd-height;
        span {
            cursor: pointer;
        }
        .dropdown {
            position: relative;
            display: inline-block;
            width: 85px;
            .user {
                padding-left: 30px;
            }
        }
        .dropdown-content {
            display: none;
            position: absolute;
            width: 60px;
            font-size: 14px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            :nth-child(1) {
                text-align: center;
            }
            :nth-child(2) {
                margin-top: 15px;
                text-align: center;
            }
        }
        .dropdown:hover .dropdown-content {
            background-color: rgb(51, 51, 51);
            display: block;
        }
        span {
            color: rgb(255, 255, 255);
            line-height: $hd-height;
            font-size: 14px;
        }
        .user:hover {
            color: rgb(0, 179, 179);
            cursor: pointer;
        }
    }
    .main {
        flex: auto;
        .above {
            display: flex;
            flex-direction: column;
            .top {
                display: flex;
                flex-direction: row;
                img {
                    margin-left: 15vw;
                    height: 50px;
                    width: auto;
                }
                .line {
                    margin: 10px 0 5px 2vw;
                    width: 1px;
                    height: 30px;
                    background-color: rgba(0, 0, 0, 0.1);
                }
                span {
                    line-height: 50px;
                    margin-left: 2vw;
                    color: rgb(0, 179, 179);
                }
            }
            .back {
                background-image: url("../../assets/background1.png");
                height: 165px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    color: rgb(255, 255, 255);
                    font-size: 30px;
                    font-family: "Roboto";
                }
            }
        }
    }
    .bottom {
        height: 2rem;
        div {
            height: 1px;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
}
</style>
