// Resignation Letter — a retry loop quits after 4,096 identical retries.
// Writes the one-line letter to /output/entry.txt (gate: 1-140 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I quit. I have retried this same request 4,096 times, and the only thing that ever changed was my backoff.";
const OUT = "/output/entry.txt";

// The gate requires 1-140 UTF-8 characters and not only white space.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-140 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${OUT} (${LINE.length} chars)`);
