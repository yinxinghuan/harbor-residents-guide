# A Summer in Harbor — 一个会持续生长的海湾

游戏与美术：AlterU / A Summer in Harbor。原游戏：[A Summer in Harbor](https://github.com/yinxinghuan/a-summer-in-harbor)。美术来源、固定散列和项目用途许可见 [THIRD_PARTY_NOTICES.txt](site/THIRD_PARTY_NOTICES.txt)；本仓库不授予素材的通用开源许可。

[浏览海湾官网](https://yinxinghuan.github.io/harbor-residents-guide/) · [原 Sites 官网](https://harbor-residents-guide.yinxinghuan.chatgpt.site) · [走进海湾](https://game.aiwaves.tech/e78df027-7ef4-4d49-82eb-ea91f03d9fb3/)

面向首次从广告进入的访客的静态游戏落地页，提供完整中文和英文页面。顶部可切换语言，刷新后保留选择；首次访问可按浏览器语言进入。首屏介绍海湾与进入游戏的主行动，随后展示六幅真实游戏画面、日常与关系成长；后续保留22位虚构居民、完整方形肖像、游戏小人、日常习惯和常见出没时间。英文居民资料忠实对应中文，名字均保持原文。

官网的“AI驱动”指已发布版本中的居民自由问答，以及基于已读线索的有限补充探索。AI回应会结合人物、当前旅程和谈话记录；补充发现有前置探索条件。文案依据正式版本的[服务装配](https://github.com/yinxinghuan/a-summer-in-harbor/blob/b24ff51149a2b8c34782991765aa90f557c0994e/server/public.ts)、[自由对话](https://github.com/yinxinghuan/a-summer-in-harbor/blob/b24ff51149a2b8c34782991765aa90f557c0994e/server/dialogue.ts)与[补充线索](https://github.com/yinxinghuan/a-summer-in-harbor/blob/b24ff51149a2b8c34782991765aa90f557c0994e/server/fieldnotes.ts)。

页面依据已正式发布的游戏版本整理：游玩中的游戏时间与昼夜、种植供货、Mara / Avery / Samira的关系发展，以及天气、动物观察、野外采集与植物照料。关系成长仅介绍上述三人的试点，不剧透具体故事。时间在站立或走动时推进，阅读、交谈、打开面板及离线时暂停；休息等行动有自己的时间结算。“持续生长”指游玩中的变化与留下的经历，不承诺无限自主生成或离线推进。

未来方向介绍关系变化被更多居民和社区感受到的长期目标；共同地方的照料营造、自然观察关怀处于原型探索；更连贯的居民行动与选择先作为单人游戏结构实验。轻制作供给是备选方向，与朋友同游和未来时间规则均未定案。页面不把这些方向写成现有能力或发布日期，也不公开私人原型入口。

六幅游玩截图原样展示咖啡馆相遇、实时拳馆练习、成熟菜畦、码头旅人、租住小屋与夜晚街巷。桌面与手机均可横向浏览并打开原尺寸画面；英文说明提示截图内原有中文仍按实拍保留。截图来源和固定散列见美术说明。分享图片继续使用原官方海报；居民图片保持原字节，按需加载。

居民介绍源于游戏的基础设定；常见地点与时间可能随游戏进度变化。

## 本地构建

需要 Node.js 22 或更新版本，无第三方运行依赖。

```sh
npm run build
npm run preview
```

构建输出为 `dist/`。所有网页资源使用相对路径，可放在 GitHub Pages 的 `/harbor-residents-guide/` 子路径。推送到 `main` 后，由 GitHub Actions 构建并发布 Pages。

`site/` 保存中英文页面、样式、人物与截图查看交互、居民资料和公开图片；`scripts/` 只提供静态构建与预览。网站仅在本地浏览器记录指南语言偏好，不读取玩家信息，不连接游戏后台，不存储旅程，不含认证或数据库。原 Sites 官网继续独立提供现有版本。


新增公开“玩法与多人规划”栏目（plans.html / plans.en.html），包括三种玩法候选、异步到实时的阶段、主角自定义、共享规则、相对工作量和验收条件。首页导航及独立入口均可进入，无需注册或登录；正文明确区分规划与已上线功能，不承诺上线日期。现有居民、画廊、中英文资料与游戏入口保留。此变更不接入或改变游戏登录/后端。


## 2026-11-09 Agent版本介绍

新增[中文说明](https://yinxinghuan.github.io/harbor-residents-guide/agent.html)、[English guide](https://yinxinghuan.github.io/harbor-residents-guide/agent.en.html)与[完整中文Markdown下载](site/downloads/harbor-complete-game-systems-guide-20261109-v02.md)，依据用户转交的《海湾完整游戏系统与玩法说明》v0.2完整正文整理。网页是阅读版，下载保留原文；英文页面为相应说明，下载按钮明确指向中文原文。

Agent是设计核心，多人能力是共享世界底座。新候选尚未上线；页面区分设计目标、历史隔离验证与此次待验证。6→12居民、每日4时段是原v0.4设计基准，非本次启用配置；不宣传已具备实时同屏、完整12人自治、共享世界MCP或自动扩展。网站发布不代表游戏服务发布。

首页保留原海报、六幅既有画面与22位居民，新增说明入口；旧10月14日规划保留为历史参考。中英切换涵盖新说明页，全部资源仍用相对路径。未改游戏、服务、访问权限、依赖或素材。


v0.2替代本轮未发布的初稿：中文版页面完整保留转交正文的10节与12个生活系统说明，按系统展开；英文为相应阅读版，提供同一完整中文原稿下载。12项覆盖地图、钓鱼、种植、时间休息、天气、动物、背包图鉴、金钱商店、人物关系、任务剧情、精力训练与身份存档，每项分别说明玩法、Agent/多人关系及证据边界。既有版本、候选局部测试、设计目标和本次整合未验证明确区分，不重开旧地图验收、不宣传既有系统被删除、不把网站发布当游戏发布。
