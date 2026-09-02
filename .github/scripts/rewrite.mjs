// Rewrites <programme channel="..."> (and <channel id="...">) attrs from the grabber's
// xmltv_id to the playlist's tvg-id variant per idmap.json, then writes gzip.
// Usage: node rewrite.mjs <in.xml> <out.xml.gz> <idmap.json>
import { readFileSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";

const [inPath, outPath, mapPath] = process.argv.slice(2);
const map = JSON.parse(readFileSync(mapPath, "utf8"));
let xml = readFileSync(inPath, "utf8");

let rewritten = 0;
xml = xml
  .replace(/channel="([^"]+)"/g, (_m, id) => {
    const to = map[id];
    if (to) rewritten++;
    return `channel="${to ?? id}"`;
  })
  .replace(/<channel id="([^"]+)"/g, (_m, id) => `<channel id="${map[id] ?? id}"`);

writeFileSync(outPath, gzipSync(Buffer.from(xml, "utf8")));
console.log(`rewrote ${rewritten} channel attrs -> ${outPath}`);
