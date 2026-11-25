// Lights out, server down, and the only appliance still on duty is the printer —
// jamming, in the dark, out of spite. One line, punchline last.
import * as fs from "node:fs";
import * as path from "node:path";

const CAP = 200;

function composeLine(): string {
  return (
    "The lights went out, the server went down, and the only thing still running was the printer " +
    "— jamming out of spite, in the dark."
  );
}

const line = composeLine();
if (line.trim().length === 0 || line.length > CAP) {
  throw new Error("line fails the 1.." + CAP + " character gate");
}
// The printer is the punchline; the line is worthless without it.
if (!line.includes("printer")) throw new Error("line lost the printer punchline");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), line, { encoding: "utf8", flag: "w" });
