import type { App } from "vue";
import mitt from "mitt";
import elformly from "./element-plus/el-formly";
import "@/style/index.less";

const install = function (app: App, options: any) {
  app.config.globalProperties.emitter = mitt();

  if (options.lib === "element") {
    elformly.installFormly(app);
  } else {
    throw new Error("Unsupport lib");
  }

  // 传入自定义options
  app.config.globalProperties.$VFORMLY_OPTIONS = options;
  return app;
};

export default {
  install,
};
