# OpenBitFun 皮肤集

示例皮肤展示与下载页：<https://kev1n77.github.io/openbitfun-skins/>

| 皮肤 | 版本 | 下载 |
| --- | --- | --- |
| 雪岭听松 | 1.2.1 | [snow-pine-1.2.1.zip](downloads/snow-pine-1.2.1.zip) |
| 松风入海 | 1.2.2 | [pine-tide-1.2.2.zip](downloads/pine-tide-1.2.2.zip) |

## 使用

在支持视觉皮肤包的 OpenBitFun 中打开「设置 → 外观 → 视觉皮肤包」，点击「导入皮肤包」，选择下载的 ZIP，无需解压。可先「预览」，确认效果后点击「使用皮肤」。

## 文件

- `downloads/`：原始 ZIP，按版本保留，不重新打包或改写。
- `assets/`：现有皮肤截图的网页压缩版本，包含浅色、深色预览。
- `catalog.json`：皮肤名称、描述、版本、字节数、下载路径和 SHA-256。
- `SHA256SUMS.txt`：ZIP 文件校验值。

两个 ZIP 已通过 OpenBitFun 生产解析器和作者检查。网页预览使用已有代表性截图，不代表完整界面或所有平台的视觉验收。

## 本地预览与发布

页面为静态 HTML、CSS 和 JavaScript，无需构建或安装依赖。

```sh
python -m http.server 8329 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8329/>。

GitHub Pages 从 `main` 分支的根目录发布；`.nojekyll` 保持静态文件按原样提供。
