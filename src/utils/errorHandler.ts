const errorHandler = (error: any) => {
  let errMsg = "";
  for (const err of error.response.data.errors) {
    errMsg += err.msg + " ";
  }
  uni.showToast({
    title: errMsg,
    icon: "none",
    duration: 500,
  });
};

export { errorHandler };
