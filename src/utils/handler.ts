import { RequestError } from "@/services/config";

const failResponseHandler = (responseError: RequestError) => {
  if (responseError.status === 400) {
    let message = "";
    if (responseError.response?.data.errors) {
      for (const error of responseError.response.data.errors) {
        message +=
          error.field +
          ": " +
          error.defaultMessage +
          ", 实际收到的值为：" +
          error.rejectedValue +
          "\n";
      }
    } else {
      message = responseError.response!.data.message;
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
      url: "/account/denglu_zhuce/denglu",
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
