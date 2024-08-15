# Single File Phaser Game

Demo: https://finalchild.github.io/single-file-phaser-game

Based on [phaserjs/template-vite-ts](https://github.com/phaserjs/template-vite-ts).

As RanolP once said, phaserjs is a mess. Still, we want to create single-file playable ads with it. This repository tries to make use of Vite's full capability to hide messy details of phaserjs.

See [vite/kill-xhr.ts](./vite/kill-xhr.ts) for the dirty hacks.

And yes, the assets are automatically encoded and bundled.

```
import bgImg from "@/assets/bg.png"; // import the asset directly

...

this.load.image("background", bgImg);
```
