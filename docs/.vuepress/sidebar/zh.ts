import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    "",
    "home",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "文章 1",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1"],
        },
      ],
    },
  ],
});
