<div align="left">
<img src="preview.png" align="center" height="350px" />
<h3>Extra Utilities</h3>
<p>Maintenance fork of guiYMOUR's Extra Utilities mod for Mindustry V8.</p>

<a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-C96329?style=flat&labelColor=1C2C2E"></a>
<a href="mod.hjson"><img src="https://img.shields.io/badge/Mindustry-V8%20157%2B-C96329?style=flat&labelColor=1C2C2E"></a>
</div>

---

This is a private maintenance fork of [Extra Utilities](https://github.com/guiYMOUR/mindustry-Extra-Utilities-mod), originally by
guiYMOUR and contributors.

## Scope

- **Mindustry V8 support**: targets build 157.1+
- **Campaign stability**: handle missing or renamed content so it doesn't not crash the tech tree.
- **Content pruning**: removed or disabled legacy EUI, rogue-like, Tower Defense, etc.

## Build

```sh
./gradlew jar
```

The desktop jar is written to:

```text
build/libs/extra-utilities-desktop.jar
```

To install it locally on Linux:

```sh
cp build/libs/extra-utilities-desktop.jar ~/.local/share/Mindustry/mods/extra-utilities-desktop.jar
```

Android packaging is not part of the maintained path here. 

It may possibly work but this fork is validated primarily as a desktop Mindustry mod. The 

## Maintenance Notes

This fork has accumulated practical fixes for current local play:

- V8 content rename handling.
- Safer research gating for optional or removed content.
- Build-menu visibility fixes for selected researched vanilla and modded blocks.
- Projectile, sound, cursor, unit, and turret crash guards.

The goal is reliability, not a new content direction.

## License

This repository is for private use and local maintenance.

The original project is licensed under the GNU General Public License v3.0. This
fork keeps that license; see [LICENSE](LICENSE).
