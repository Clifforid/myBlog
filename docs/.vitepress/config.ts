import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clifforid的博客",
  base: "/Blogs/",
  description: "日常生活学习记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "学习日记", link: "/studyDaily/index" },
      { text: "生活记录", link: "/lifeRecord/index" },
    ],

    sidebar: {
      "/studyDaily/": [
        {
          text: "前端学习",
          link: "/studyDaily/index",
        },
        {
          text: "启蒙书籍记录",
          items: [
            {
              text: "《计算机是怎样跑起来的》",
              link: "/studyDaily/how-computer-run",
            },
            {
              text: "《程序是怎样跑起来的》",
              link: "/studyDaily/how-program-run",
            },
            {
              text: "《网络是怎样连接的》",
              link: "/studyDaily/how-network-link",
            },
            {
              text: "《Linux是怎样工作的》",
              link: "/studyDaily/how-linux-work",
            },
            {
              text: "《面向对象是怎样工作的》",
              link: "/studyDaily/how-object-oriented-work",
            },
          ],
        },
        {
          text: "前端学习",
        },
        {
          text: "UI设计学习",
        },
        {
          text: "平面设计",
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
