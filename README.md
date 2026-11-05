# Kim · 学习笔记

Hugo 个人主页，收录 25 篇 Dan Koe 长视频中文阅读文章，包含 25 篇字幕全文翻译。

- 主页：https://kim-lenon.github.io/
- 视频时间范围：2025-11-05 至 2026-11-05
- 正文：`content/notes/dan-koe/`
- 页面模板：`layouts/`
- 构建版本：Hugo 0.169.0

## 本地预览

安装 Hugo 后执行：

```sh
hugo server
```

## 发布

GitHub 仓库的 Settings → Pages → Source 选择 **GitHub Actions**。提交到 `main` 后，工作流自动构建并发布。

新增笔记时，在 `content/notes/` 中添加带 TOML front matter 的 Markdown 文件即可。构建产物 `public/` 不提交仓库。

这组 25 篇文章均已更新为基于用户提供英文字幕的全文中文翻译，按论述结构整理段落、章节与小标题。每篇保留原视频出处，正文不包含字幕时间标记。仓库不包含原始字幕或视频文件。
