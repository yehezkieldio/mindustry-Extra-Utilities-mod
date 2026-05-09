<div align="center">
<img src="preview.png" align="center" width="160px" />
<h3>Extra Utilities</h3>
<p>Private-use maintenance fork of guiYMOUR's Extra Utilities mod for Mindustry V8.</p>

<a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-C96329?style=flat&labelColor=1C2C2E"></a>
<a href="mod.hjson"><img src="https://img.shields.io/badge/Mindustry-V8%20157%2B-C96329?style=flat&labelColor=1C2C2E"></a>
</div>

---

This checkout is a private maintenance fork of Extra Utilities, originally by
guiYMOUR and contributors. It exists to keep a source-built local copy usable on
current Mindustry V8 builds, with old broken paths removed and selected runtime
issues fixed.

It is not an official continuation, not a public release channel, and not a
Workshop distribution. The visible mod title defaults to `Extra Utilities`; fork
branding and random menu title decoration are available only through settings.

## Scope

- **Mindustry V8 support**: targets build 157.1+ with `minGameVersion = 157`.
- **Source-built installation**: the desktop jar is built locally with Gradle.
- **Campaign stability**: missing or renamed content is guarded so unrelated
  research nodes do not crash the tech tree.
- **Runtime cleanup**: selected hot paths cache atlas/content lookups and avoid
  avoidable per-frame or per-update allocations.
- **Content pruning**: removed or disabled legacy EUI, rogue-like, Tower Defense,
  and stale campaign wiring that no longer belongs in this private build.

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

Android packaging is not part of the maintained path here. It may still work if
the local Android SDK and Gradle setup are compatible, but this fork is validated
primarily as a desktop Mindustry mod.

## Settings

The fork keeps compatibility switches explicit:

| Setting | Default | Purpose |
| --- | --- | --- |
| `eu-private-fork-title` | off | Uses private-fork title styling instead of the plain `Extra Utilities` title. |
| `eu-random-menu-subtitle` | off | Restores the random menu subtitle decoration. |
| `eu-show-progression-crafters` | on | Shows progression helper crafters. |
| `eu-show-vanilla-resource-helpers` | off | Shows helper blocks that simplify vanilla resource flow. |
| `eu-show-legacy-content` | off | Shows older miscellaneous content kept for local compatibility. |
| `eu-reset-core-to-V7` | off | Legacy planet-rule compatibility. Requires restart. |
| `eu-reset-core-to-all` | off | Ignores item planet restrictions for compatibility testing. Requires restart. |

Most runtime and content-visibility settings require a full game restart because
Mindustry loads mod content once during startup.

## Maintenance Notes

This fork has accumulated practical fixes for current local play:

- V8 content rename handling, including Cratered Battleground.
- Safer research gating for optional or removed content.
- Build-menu visibility fixes for selected researched vanilla and modded blocks.
- Projectile, sound, cursor, unit, and turret crash guards.
- Removal of obsolete `BulletType.backMove` usage on newer V8 builds.
- Render/update fast paths for selected Java and JS content.

The goal is boring reliability, not a new content direction. When behavior needs
to differ from upstream, this checkout should prefer small, reversible changes
that keep the mod playable on the current Mindustry runtime.

## License And Disclaimer

The original project is licensed under the GNU General Public License v3.0. This
fork keeps that license; see [LICENSE](LICENSE).

This repository is for private use and local maintenance. If you distribute a
modified build, follow GPL-3.0 obligations, preserve upstream attribution, mark
your changes clearly, and provide the corresponding source under the same
license. No warranty is provided.

Original Extra Utilities authorship belongs to guiYMOUR and contributors. This
private fork is maintained separately for local compatibility and should not be
presented as an official upstream release.
