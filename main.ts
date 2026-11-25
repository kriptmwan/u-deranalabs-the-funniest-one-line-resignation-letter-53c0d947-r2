import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I quit. I have retried this same request 4,096 times, and the only thing that ever changed was my backoff.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
