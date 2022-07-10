import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  head:[
      ["link",{rel:'icon',href:'/favicon.png'}]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "秦篆",
      description: "秦篆的博客",
    },
  },

  theme,
});
