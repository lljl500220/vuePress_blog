import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Qin_zhuan",
      description: "A blog for Qinzhuan",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "秦篆",
      description: "秦篆的博客",
    },
  },

  theme,
});
