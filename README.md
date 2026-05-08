# Extra Utilities: Private Fork

This is a private maintenance fork of guiYMOUR's Extra Utilities mod for Mindustry.
It is not an official release channel and does not ship prebuilt jars here. Build it
from source before installing it.

[中文](README_cn.md)

## Compatibility

- Mindustry V8, build 157.1 or newer.
- `minGameVersion` is set to `157`.
- Java mod build, packaged with Gradle.

## Build

```sh
./gradlew jar
```

The desktop jar is written to `build/libs/extra-utilities-desktop.jar`.

Android packaging still depends on a local Android SDK setup. Use it only if your
environment already has the required Android build tools configured.

## Fork Changes

### Fixes

- Restored build-menu visibility for researched vanilla and modded blocks.
- Hardened tech-tree registration so missing parents or removed content do not
  break unrelated unlocks.
- Fixed vanilla Serpulo tier-2 block progression so those blocks can be
  researched normally.
- Added safer projectile region lookup so bullets do not fall back to missing
  sprites when a valid asset exists.
- Added sound and cursor fallbacks so missing optional assets do not crash load.
- Guarded fragile unit, weapon, and turret shooting paths that could crash on
  Mindustry V8.
- Removed the obsolete `BulletType.backMove` code path that crashes on build
  153+ and newer V8 builds.
- Cleaned up dev-only junk and stale local files from the packaged mod.

### Removed

- EUI and rogue-like UI/gameplay hooks.
- Tower Defense planet and sector presets.
- Tower Defense maps, scripts, sector art, and related campaign wiring.
- April Fools content mutation.
- Old unused bundle snapshots and local build artifacts.

### Adjusted

- Updated Arc and Mindustry dependencies to `v157.1`.
- Changed visible mod metadata to make this private fork explicit.
- Disabled the legacy V7 planet-rule reset by default.
- Kept upstream content attribution while separating this fork from the original
  public release and workshop channels.

## Attribution

Original mod by guiYMOUR and contributors. This fork only maintains a private,
source-built variant with compatibility fixes and content removals.
