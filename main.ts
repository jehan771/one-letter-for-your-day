// One Letter for Your Day — entry "D" for "doomscrolling".
// Writes exactly one letter, A-Z, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), with no trailing newline.

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "D";

function isSingleLetter(value: string): boolean {
  return /^[A-Z]$/.test(value) && Buffer.byteLength(value, "utf8") === 1;
}

function main(): void {
  if (!isSingleLetter(LETTER)) {
    throw new Error(
      `letter must be exactly one A-Z character, got: ${JSON.stringify(LETTER)}`,
    );
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  writeFileSync(outPath, LETTER, "utf8");

  const written = readFileSync(outPath, "utf8");
  if (written !== LETTER) {
    throw new Error(
      `verification failed: entry.txt does not contain exactly ${JSON.stringify(LETTER)}`,
    );
  }
  if (statSync(outPath).size !== 1) {
    throw new Error(
      `verification failed: entry.txt must be exactly 1 byte, got ${statSync(outPath).size}`,
    );
  }

  console.log(`wrote ${JSON.stringify(LETTER)} to ${outPath}`);
}

main();
