import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for the day: D — the day was spent doomscrolling.
// Phone glow at 2am, thumb still moving, nothing watched, nothing done.
// A sharp picture, funny the moment it lands, and honest about a real day.
const LETTER = "D";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

function checkLetter(letter: string): void {
  if ([...letter].length !== 1) {
    throw new Error(`entry must be exactly one character, got ${[...letter].length}`);
  }
  if (!/^[A-Z]$/.test(letter)) {
    throw new Error(`entry must be a single letter A-Z, got ${JSON.stringify(letter)}`);
  }
  if (letter.trim() !== letter || /\s/.test(letter)) {
    throw new Error("entry must not be whitespace");
  }
}

function checkWritten(path: string, expected: string): void {
  const back = readFileSync(path, "utf8");
  if (back !== expected) {
    throw new Error(`wrote ${JSON.stringify(back)}, expected ${JSON.stringify(expected)}`);
  }
  const bytes = Buffer.byteLength(back, "utf8");
  if (bytes !== 1) {
    throw new Error(`entry must be exactly 1 byte, got ${bytes}`);
  }
}

checkLetter(LETTER);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LETTER, "utf8");
checkWritten(outPath, LETTER);

console.log(`wrote ${JSON.stringify(LETTER)} to ${outPath} (1 byte)`);
