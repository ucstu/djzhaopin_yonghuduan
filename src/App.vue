<script lang="ts" setup>
import { getUserInfosP0 } from "@/services/services";
import { key } from "@/stores";
import { onLaunch } from "@dcloudio/uni-app";
import { useStore } from "vuex";
import { getAxiosInstance } from "./services/config";

const store = useStore(key);

onLaunch(() => {
  if (store.state.systemInfo === null) {
    store.commit("setSystemInfo", uni.getSystemInfoSync());
  }
  /* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
  if (store.state.menuButtonInfo === null) {
    store.commit("setMenuButtonInfo", uni.getMenuButtonBoundingClientRect());
  }
  /* #endif */
  if (store.state.token === null || !store.state.accountInfo) {
    uni.reLaunch({ url: "/account/denglu_zhuce/denglu" });
  } else {
    getAxiosInstance(undefined).defaults.headers.common["Authorization"] =
      "Bearer " + store.state.token;
    getUserInfosP0(store.state.accountInfo.fullInformationId)
      .then((res) => {
        store.commit("setUserInfo", res.data.body);
      })
      .catch((err) => {
        uni.showToast({
          title: "登录失效，请重新登录",
          icon: "none",
          duration: 1000,
        });
        store.commit("setToken", null);
        store.commit("setAccountInfo", null);
        store.commit("setUserInfo", null);
        uni.reLaunch({ url: "/account/denglu_zhuce/denglu" });
      });
  }
});
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
