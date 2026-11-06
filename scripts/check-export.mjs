import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
const routes = [
  "",
  "projects",
  "about",
  "ai-automation",
  "contact",
  ...["eevora", "the-bridge", "goodneighbor", "ethical-apple"].map(
    (slug) => "projects/" + slug,
  ),
];
let checked = 0;
for (const route of routes) {
  const html = await readFile(resolve("out", route, "index.html"), "utf8");
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: exactly one main heading`,
  );
  assert.match(html, /<title>[^<]+<\/title>/, `${route}: title`);
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${route}: description`,
  );
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    const path = match[1];
    if (path.startsWith("//")) continue;
    let target = resolve("out", "." + decodeURIComponent(path));
    let info = await stat(target).catch(() => null);
    if (info?.isDirectory()) {
      target = resolve(target, "index.html");
      info = await stat(target).catch(() => null);
    }
    assert.ok(info?.isFile(), `${route}: missing asset or link ${path}`);
    checked++;
  }
}
assert.equal(
  await stat("out/projects/eevoradocs/index.html").catch(() => null),
  null,
  "Removed standalone project must not export",
);
assert.equal(
  await stat("out/projects/just-doing-the-books/index.html").catch(() => null),
  null,
  "Removed business project must not export",
);
const catalog = await readFile("out/projects/index.html", "utf8");
assert.doesNotMatch(catalog, /href="\/projects\/eevoradocs/);
assert.doesNotMatch(catalog, /href="\/projects\/just-doing-the-books/);
assert.match(catalog, /href="\/projects\/eevora/);
const apple = await readFile("out/projects/ethical-apple/index.html", "utf8");
assert.match(apple, /not checkout quotes/);
console.log(
  `PASS: ${routes.length} pages; ${checked} local link/asset references; titles, descriptions, heading structure, and project boundaries.`,
);
