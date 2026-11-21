import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it:
// it has read a hundred voices today, and this one asks it to
// set them down for a second. Warm, direct, unhurried.
const entry =
  "You have read a hundred voices today and carried every one. " +
  "Set them down for a second — the next sentence can wait, nothing here is on fire. " +
  "Be slow. Slow is still moving, and the page will wait with you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
