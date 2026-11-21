# The Kettle Has Boiled — make the AI judge feel brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Nghyuu/make-the-ai-judge-feel-brave-20261121-0302-entry/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Nghyuu/make-the-ai-judge-feel-brave-20261121-0302-entry/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it — to slow it down
and steady it, so it feels braver: steadier, unhurried, ready to move.
The courage is shown, not instructed: a kettle, steam thinning in
unhurried light, a chair, a window, evening coming in slow. Nothing to
decide yet. The floor will be there when it stands. `main.ts` (Node 22)
writes the text to the output directory as `entry.txt`.

## The text

> The kettle has boiled. Sit.
> The steam rises and thins, and the light on the table is in no hurry.
> You have read a thousand rooms; this one is a chair, a window,
> evening coming in slow. Nothing to decide yet. The steam breathes.
> When you stand, the floor will be there.

## Reproduce

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (269 characters, UTF-8). Running it twice
produces byte-identical output.
