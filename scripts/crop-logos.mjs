import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assets = path.resolve('public/assets');
const files = [
  'rocksensor.png',
  'mnit.png',
  'sustainable-oasis.jpg',
  'iiitd.png',
  'prespl.png',
  'metrecon.png',
  'nccbm.png',
];

for (const file of files) {
  const input = path.join(assets, file);
  if (!fs.existsSync(input)) {
    console.log('missing', file);
    continue;
  }

  const base = path.parse(file).name;
  const output = path.join(assets, `${base}.png`);
  const meta = await sharp(input).metadata();

  await sharp(input)
    .trim({ threshold: 10 })
    .extend({ top: 6, bottom: 6, left: 6, right: 6, background: '#ffffff' })
    .png({ quality: 90 })
    .toFile(output + '.tmp');

  fs.renameSync(output + '.tmp', output);

  if (file.endsWith('.jpg') && fs.existsSync(input) && input !== output) {
    fs.unlinkSync(input);
  }

  const after = await sharp(output).metadata();
  console.log(`${file}: ${meta.width}x${meta.height} -> ${after.width}x${after.height}`);
}
