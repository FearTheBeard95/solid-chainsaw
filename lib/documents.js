import fs from 'fs';
import path from 'path';

const documentsDir = path.join(process.cwd(), 'public/upload');

export function getDocuments(params) {
  const docNames = fs.readdirSync(documentsDir);
  return docNames.map((doc) => {
    const name = doc.replace(/\.pdf$/, '');
    const link = '/upload/' + doc;
    return {
      documents: {
        name,
        link,
      },
    };
  });
}
