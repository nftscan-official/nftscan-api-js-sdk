import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "NFTScan SDK Docs",
  description: "Quick access to Web3 via NFTScan",
  base:'/nftscan-api/',
  theme: defaultTheme({
    // navbar: [
    //   { text: "bar1", link: "/guide/" },
    //   { text: "bar2", link: "/api/" },
    // ],
    sidebar: [
      { text: "sidebar1", link: "/guide/" },
      { text: "sidebar2", link: "/api/" },
    ],
  }),
});
