<script lang="ts" setup>
import { getAxiosInstance } from "@/services/config";
import {
  getCityInformations,
  getUserInfosP0,
  getUserInfosP0JobExpectations,
} from "@/services/services";
import { useMainStore } from "@/stores/main";
import { connectStomp } from "./utils/stomp";

const store = useMainStore();

if (store.systemInformation === null) {
  store.systemInformation = uni.getSystemInfoSync();
}
/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
if (store.menuButtonInformation === null) {
  store.menuButtonInformation = uni.getMenuButtonBoundingClientRect();
}
/* #endif */
if (store.jsonWebToken === null || !store.accountInformation) {
  uni.reLaunch({ url: "/account/denglu_zhuce/denglu" });
} else {
  getAxiosInstance(undefined).defaults.headers.common["Authorization"] =
    "Bearer " + store.jsonWebToken;
  Promise.all([
    getUserInfosP0(store.accountInformation.fullInformationId),
    getUserInfosP0JobExpectations(
      store.accountInformation.fullInformationId,
      {}
    ),
    getCityInformations(),
  ])
    .then((res) => {
      if (!store.messages[store.accountInformation.fullInformationId]) {
        store.messages[store.accountInformation.fullInformationId] = {};
      }
      connectStomp(store);
      store.userInformation = res[0].data.body;
      store.jobExpectations = res[1].data.body.jobExpectations;
      store.cityInformation = res[2].data.body;
      if (!store.jobExpectations.length) {
        uni.navigateTo({
          url: "/info/qiuzhiqiwang/qiuzhiqiwang?data=0",
        });
      } else {
        uni.switchTab({ url: "/pages/shouyeyemian/shouyeyemian" });
      }
    })
    .catch((err) => {
      uni.showToast({
        title: "登录失效，请重新登录",
        icon: "none",
        duration: 1500,
      });
      store.jobExpectations = [];
      store.jsonWebToken = null as any;
      store.userInformation = null as any;
      store.accountInformation = null as any;
      uni.reLaunch({ url: "/account/denglu_zhuce/denglu" });
    });
}
</script>

<style lang="scss">
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-stretch {
  display: flex;
  align-items: stretch;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
