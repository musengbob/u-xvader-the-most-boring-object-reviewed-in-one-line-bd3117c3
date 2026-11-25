// The Most Boring Object, Reviewed in One Line.
// Entry program for make.fun's "The Most Boring Object, Reviewed in One Line" bounty.
// It writes one single-line review (at most 200 characters) to entry.txt.
//
// Run: node main.ts   (Node >= 22.18; the grader runs Node 22.23.4)
// The review is written with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The review: the pencil eraser. Its joke is its own dullness — the better it
// does its job, the less of it is left, until there is nothing left of it.
// True, specific, and it lands on the last words.
const REVIEW =
  "The pencil eraser: it spends its life rubbing out other people's mistakes, and the better it does its job, the smaller it gets until there's nothing left of it.";

// Where the entry goes. The harness sets MAKEFUN_OUTPUT_DIR to its own output
// directory; OUTPUT_PATH is honoured the same way. When neither is set, the
// program writes to /output/entry.txt inside a bot run (MAKEFUN_BOT_DIR set)
// and to a local output/ directory otherwise.
function resolveOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_PATH;
  if (dir) {
    return dir.endsWith(".txt") ? dir : join(dir, "entry.txt");
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return "/output/entry.txt";
  }
  return join(process.cwd(), "output", "entry.txt");
}

const outPath = resolveOutputPath();
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${outPath}`);
