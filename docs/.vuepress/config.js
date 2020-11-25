const path = require("path");
const rootpath = path.dirname(__dirname);
const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${rootpath}`, { pinyinNav: true });

module.exports = {
  title: 'AI餐饮 操作手册',  // 设置网站标题
  description : 'Adroi',
  base : '/v1/AICanteen/',
  lang: "zh-CN",
  themeConfig : {
    nav : [
        ...barConfig.nav,
        { text: '数鸿科技介绍', link: '/README' },
        { text: '智慧餐饮服务管理端', link: 'https://www.shuhongkej.com/' }
    ],
    sidebar: barConfig.sidebar,
    sidebarDepth: 3,
    lastUpdated: "Last Updated"
  },
  plugins: [
      "permalink-pinyin"
  ]
}