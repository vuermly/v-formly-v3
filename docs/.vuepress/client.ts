import { defineClientConfig } from "@vuepress/client";
import type { App } from "vue";
import AFormly from "@/aformly";
import ElVFormly from "@/elformly";
import "@/style/index.less";

import { registerFormComponent } from "@/ant-design-vue/a-formly";
import VPassword from "@/ant-design-vue/examples/components/password/Password.vue";
import VChkInput from "@/ant-design-vue/examples/components/chk-input/ChkInput.vue";
import { registerFormComponent as registerFormComponentEl } from "@/element-plus/el-formly";
import VPasswordEl from "@/element-plus/examples/components/password/Password.vue";
import VChkInputEl from "@/element-plus/examples/components/chk-input/ChkInput.vue";

import Antd from "ant-design-vue";
import * as antIcons from "@ant-design/icons-vue";
import ElementPlus from "element-plus";
import * as elIcons from "@element-plus/icons-vue";

declare const __VFORMLY_LIB__: string;

export default defineClientConfig({
  async enhance({ app }) {
    const lib = __VFORMLY_LIB__;
    switch (lib) {
      case "element":
        await initElement(app, lib);
        break;
      default:
        await initAntdV(app, lib);
        break;
    }
  },
  setup() {},
  rootComponents: [],
});

async function initAntdV(app: App, lib: string) {
  // Antd 动态导入部署到github pages上面会报动态导入模块的错误。
  // const Antd = await import("ant-design-vue");
  await import("ant-design-vue/dist/antd.css");
  await import("./styles/reset.scss");
  app.use(Antd);
  Object.keys(antIcons).forEach((key) => {
    app.component(key, (antIcons as any)[key]);
  });
  app.config.globalProperties.$antIcons = antIcons;
  app.use(AFormly, {
    lib: lib,
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });

  registerFormComponent(app, "v-password", VPassword);
  registerFormComponent(app, "v-chkinput", VChkInput);
}

async function initElement(app: App, lib: string) {
  await import("element-plus/dist/index.css");
  await import("./styles/reset.scss");
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(elIcons)) {
    app.component(key, component);
  }
  app.config.globalProperties.$elIcons = elIcons;
  app.use(ElVFormly, {
    lib: lib,
    ui: {
      errors: {
        required: "必填项",
      },
    },
  });

  registerFormComponentEl(app, "v-password", VPasswordEl);
  registerFormComponentEl(app, "v-chkinput", VChkInputEl);
}
