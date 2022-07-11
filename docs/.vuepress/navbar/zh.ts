import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "vue3学习笔记",
        icon: "edit",
        prefix: "article/",
        children: [
          {
            text:'vue3基础',
            icon: "edit",
            link: "article1"
          }
        ],
      }
    ],
  }
]);
