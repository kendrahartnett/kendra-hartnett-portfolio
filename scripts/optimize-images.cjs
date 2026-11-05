const sharp = require("sharp");
const fs = require("node:fs/promises");
(async () => {
  for (const file of await fs.readdir("public/images")) {
    if (!/\.(png|jpeg)$/.test(file)) continue;
    const source = "public/images/" + file;
    const dest = source.replace(/\.(png|jpeg)$/, ".webp");
    await sharp(source)
      .resize({ width: 1700, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(dest);
    console.log(file, (await fs.stat(dest)).size);
  }
  await sharp("public/images/kh-monogram.png")
    .resize(64, 64, { fit: "cover" })
    .png()
    .toFile("src/app/icon.png");
})();
