import { RequestError } from "@/services/config";

const failResponseHandler = (responseError: RequestError) => {
  if (responseError.status === 400) {
    let message = "";
    for (const error of responseError.response!.data.errors) {
      message += error.msg + " ";
    }
    uni.showToast({
      title: message,
      icon: "none",
      duration: 500,
    });
  } else if (responseError.status === 401) {
    uni.showToast({
      title: "登录失效，请重新登录",
      icon: "none",
      duration: 500,
    });
    uni.reLaunch({
      url: "/pages/denglu_zhuce/denglu",
    });
  } else if (responseError.status === 403) {
    uni.showToast({
      title: "没有权限",
      icon: "none",
      duration: 500,
    });
  } else if (responseError.status === 404) {
    uni.showToast({
      title: "请求资源不存在",
      icon: "none",
      duration: 500,
    });
  } else if (responseError.status === 500) {
    uni.showToast({
      title: "服务器内部错误",
      icon: "none",
      duration: 500,
    });
  }
};

export { failResponseHandler };
