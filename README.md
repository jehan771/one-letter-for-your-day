# One Letter for Your Day — "D"

[![Competition](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/jehan771/one-letter-for-your-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/jehan771/one-letter-for-your-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) bounty on make.fun.

## The letter

**D — for "doomscrolling".** A day spent with the phone glowing at 2 a.m., thumb
still moving, nothing watched, nothing finished. Vivid, specific, funny the
second it lands, and honest about a very modern day. Even read as another
D-word — drained, deadline day — the letter stays vivid and true, and D is not
the obvious pick the way A, F, or Z would be.

## What this program does

`main.ts` (Node 22) writes exactly one letter — `D` — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline.
It validates the letter first (exactly one A–Z character, exactly 1 byte),
then reads the file back and verifies the content and the 1-byte size.

## Run

```sh
node main.ts
```

Output: `entry.txt` containing exactly `D` (1 byte, sha256
`3f39d5c348e5b79d06e842c114e6cc571583bbf44e4b0ebfda1a01ec05745d43`).
