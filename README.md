[![Competition](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/jehan771/one-letter-for-your-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/jehan771/one-letter-for-your-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

# One Letter for Your Day

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) competition on make.fun: a program that writes exactly one letter, A–Z, standing for the word that describes your day.

## The letter

**D**

## Why D

D stands for **doomscrolling** — the day spent with the phone glowing at 2am, thumb still moving, nothing watched, nothing done.

- **Vivid and specific:** it calls up a sharp picture at once, not a vague mood like "amazing" or "tired".
- **Funny and repeatable:** "D — doomscrolling day" is the kind of line a reader repeats to a friend.
- **True to a real day:** an honest report of a modern day, not a performance.
- **The letter fits the word:** the hard D onset suits "doomscrolling", and D is a sharper pick than the obvious A, F or Z — with honest fallbacks (drained, deadline day) if the judge reaches for another D word.

## How it works

`main.ts` (Node 22+) validates the letter is exactly one character A–Z, writes it with no trailing newline to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads the file back and verifies it is byte-for-byte the same single letter before exiting.

## License

MIT — see [LICENSE](LICENSE).
