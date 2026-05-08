# Extra Utilities 私人维护分支

这是 guiYMOUR 的 Extra Utilities 模组的私人维护分支。这里不是官方发布渠道，也不提供预编译 jar。使用前请自行从源码编译。

[English](README.md)

## 兼容性

- Mindustry V8，build 157.1 或更新版本。
- `minGameVersion` 设置为 `157`。
- Java 模组，通过 Gradle 打包。

## 编译

```sh
./gradlew jar
```

桌面版 jar 会输出到 `build/libs/extra-utilities-desktop.jar`。

Android 打包仍然依赖本地 Android SDK。只有在本机已经配置好 Android 构建工具时再使用。

## 分支变更

### 修复

- 修复已研究的原版和模组方块不出现在建造菜单的问题。
- 加固科技树注册逻辑，缺失父节点或已移除内容不会影响其他解锁。
- 修复原版 Serpulo T2 方块在科技树中无法正常解锁的问题。
- 增加更稳妥的弹丸贴图查找，避免有资源时仍显示缺失贴图。
- 增加音效和光标资源的回退逻辑，缺失可选资源时不再崩溃。
- 加固部分单位、武器和炮塔的射击路径，减少 Mindustry V8 下的崩溃。
- 移除旧版 `BulletType.backMove` 路径，避免在 build 153+ 和更新 V8 版本中崩溃。
- 清理开发机文件、本地构建垃圾和不会进入发布包的旧内容。

### 移除

- EUI 和 rogue-like 相关 UI/玩法钩子。
- Tower Defense 星球和区块预设。
- Tower Defense 地图、脚本、区块图片和相关战役接入。
- 愚人节内容篡改逻辑。
- 旧 bundle 快照和本地构建产物。

### 调整

- 将 Arc 和 Mindustry 依赖更新到 `v157.1`。
- 统一模组显示名和简介，明确这是私人维护分支。
- 默认关闭旧版 V7 星球规则重置。
- 保留原作者署名，同时与原公开发布和创意工坊渠道区分。

## 鸣谢

原模组由 guiYMOUR 及贡献者制作。此分支仅维护一个需要自行编译的私人版本，重点是兼容性修复和内容删减。
