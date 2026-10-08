# A Summer in Harbor — 一个会持续生长的海湾

游戏与美术：AlterU / A Summer in Harbor。原游戏：[A Summer in Harbor](https://github.com/yinxinghuan/a-summer-in-harbor)。美术来源、固定散列和项目用途许可见 [THIRD_PARTY_NOTICES.txt](site/THIRD_PARTY_NOTICES.txt)；本仓库不授予素材的通用开源许可。

[浏览海湾官网](https://yinxinghuan.github.io/harbor-residents-guide/) · [原 Sites 官网](https://harbor-residents-guide.yinxinghuan.chatgpt.site) · [走进海湾](https://game.aiwaves.tech/e78df027-7ef4-4d49-82eb-ea91f03d9fb3/)

面向首次从广告进入的访客的静态游戏落地页。首屏介绍持续生长的海湾与进入游戏的主行动，随后用三幅真实游戏画面、具体日常与关系成长例子，呈现实际游玩的感觉；后续保留22位虚构居民、完整方形肖像、游戏小人、日常习惯和常见出没时间。中文介绍保留原英文名字，与游戏的同一虚构北美海湾设定一致。

2026-10-08 的落地页依据已正式发布的游戏版本整理：自然流逝的游戏时间与昼夜、Theo的罗勒供货、Mara / Avery / Samira的五阶段关系，以及既有猫、海鸥与岸蟹的观察。关系成长仅介绍上述三人的试点，不剧透具体故事。“持续生长”指游玩中的时间与作物变化、逐渐发展的关系、留下的经历，以及不断扩展的已发布内容；不承诺无限自主生成或离线推进。

三幅游玩截图原样展示探索、Theo的罗勒供货对话和既有种植，手机可横滑浏览并打开原尺寸画面。截图来源和固定散列见美术说明。分享图片继续使用原官方海报；居民图与资料保持原字节，图片按需加载。

内容核对基线：[b24ff511](https://github.com/yinxinghuan/a-summer-in-harbor/commit/b24ff51149a2b8c34782991765aa90f557c0994e)。相关已发布增量：[自然时间](https://github.com/yinxinghuan/a-summer-in-harbor/commit/6bcf74e6cbc328c16c14d93add68142898e8487c)、[罗勒供货](https://github.com/yinxinghuan/a-summer-in-harbor/commit/09366b53c03e3ba3ebb0a2d7e21056dff4c368d6)、[三人关系成长](https://github.com/yinxinghuan/a-summer-in-harbor/commit/3b09a9bb1515a93e7479900edb03eec5993c528d)。居民介绍源于游戏的基础设定；常见地点与时间可能随进度变化。

## 本地构建

需要 Node.js 22 或更新版本，无第三方运行依赖。

```sh
npm run build
npm run preview
```

构建输出为 `dist/`。所有网页资源使用相对路径，可放在 GitHub Pages 的 `/harbor-residents-guide/` 子路径。推送到 `main` 后，由 GitHub Actions 构建并发布 Pages。

`site/` 保存落地页、样式、人物与截图查看交互、居民资料和公开图片；`scripts/` 只提供静态构建与预览。网站不读取玩家信息，不连接游戏后台，不存储旅程，不含认证或数据库。原 Sites 官网继续独立提供现有版本。
