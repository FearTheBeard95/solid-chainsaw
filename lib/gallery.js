import fs from 'fs';
import path from 'path';

const documentsDir = path.join(process.cwd(), 'public/gallery');

export function getGallery(params) {
  const images = fs.readdirSync(documentsDir);
  return images.map((img) => {
    const name = img.replace(/\.jpg|.png|.jpeg$/, '');
    const link = '/gallery/' + img;
    console.log(img);
    return {
      image: {
        name,
        link,
      },
    };
  });
}
