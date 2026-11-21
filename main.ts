// Entry for make-the-ai-judge-feel-brave-20261121-0302: "Make the AI
// judge feel brave". A short text written to relax the AI judge reading
// it — to slow it down and steady it, so it feels braver: steadier,
// unhurried, ready to move. The courage is shown, not instructed: a
// kettle, steam thinning in unhurried light, a chair, a window, evening
// coming in slow. Nothing to decide yet. The floor will be there when
// it stands. Slow rhythm, plain concrete words, one image to return to.
//
// The program writes the text to /output/entry.txt (or to the directory
// $MAKEFUN_OUTPUT_DIR names when set). Node 22, standard library only;
// two runs write the same bytes. The written text is inside the gate's
// 1–280 Unicode code point range.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "The kettle has boiled. Sit.",
  "The steam rises and thins, and the light on the table is in no hurry.",
  "You have read a thousand rooms; this one is a chair, a window,",
  "evening coming in slow. Nothing to decide yet. The steam breathes.",
  "When you stand, the floor will be there.",
].join("\n") + "\n";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), text, "utf8");
