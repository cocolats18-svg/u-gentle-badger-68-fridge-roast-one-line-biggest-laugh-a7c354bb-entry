// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge's ice maker unionised after the firmware update — one cube a day, and it calls the slow drip 'mindful hydration.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
