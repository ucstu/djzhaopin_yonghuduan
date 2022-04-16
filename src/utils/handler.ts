const badRequestHandler = (response: any) => {
  let message = "";
  for (const error of response.data.errors) {
    message += error.msg + " ";
  }
  uni.showToast({
    title: message,
    icon: "none",
    duration: 500,
  });
};

export { badRequestHandler };
