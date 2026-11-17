# Persona 3 · Yuki / Wake

女神异闻录 3 风格的社区皮肤，以深蓝、青色和可读的交互状态搭配结城理「坠入清醒」动态背景。

[下载 v1.5.4](downloads/persona3-yuki-1.5.4.zip) · [返回皮肤集](index.html)

## 使用与效果

在 OpenBitFun「设置 → 外观 → 视觉皮肤包」导入 ZIP，无需解压。背景保持完整人物构图，延展两侧，使用 contain 适应窗口比例；不同比例的窗口可能露出深蓝底色。

背景为 APNG（扩展名 `.png`），960×562，300 帧，5 秒无限循环，16/17ms 帧时长对应 60fps 时间轴。动作经过平滑往返处理，不是原素材完整的单向播放。编码帧率不保证每台设备都能逐帧显示。

设置页使用半透明底色与深色阅读面板，按钮、搜索提示和选中/悬停状态配有明确的文字颜色。背景经过 Real-ESRGAN 动漫模型超分与补帧，边缘更清楚，但补出的细节并非官方高清原图。为满足单资源 16 MiB 限制，使用固定 96 色调色板，部分渐变可能可见色阶。

网页图片只是背景静帧，不是应用截图。ZIP 保留提交时原包字节，不重新打包。已核对 ZIP 完整性、SHA-256、300 帧解码、5000ms 时长与无限循环标记，并在现有 macOS Release 中导入、检查约 24 秒实际播放。未修改应用前端、启动 dev 或执行应用构建；其他平台与远程场景未验证。

## 素材来源与归属

- [头像参考页](https://closure.wiki/zh-cn/avatars/avatar_dyn_07)
- [头像预览](https://static.closure.wiki/v3/playeravatar/avatar_dyn_07.webp)
- [处理所用动态预览](https://img2-tc.tapimg.com/moment/etag/Fj78GrxQ5rO1UTqHChU3S5GYxrfH_20260829222100.gif)
- [Real-ESRGAN 超分实现](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan)与[官方模型包](https://github.com/xinntao/Real-ESRGAN/releases/tag/v0.2.5.0)

角色及游戏美术归各自权利人所有。本皮肤为非官方社区制作，不代表得到官方认可，也不授予第三方美术的额外使用权。ZIP 不包含超分程序、模型或中间素材。
