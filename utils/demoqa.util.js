const fs = require('fs');
const path = require('path');

/**
 * Generates readable timestamp
 */
function getTimestamp() {
  return new Date()
    .toISOString()
    .replace(/T/, '_')
    .replace(/:/g, '-')
    .replace(/\..+/, '');
}

/**
 * Writes book details to a NEW timestamped file
 */
function writeBookDetailsToFile(title, author, publisher) {
  const outputDir = path.join(process.cwd(), 'output');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filePath = path.join(
    outputDir,
    `book-details-${getTimestamp()}.txt`
  );

  const content =
    `Title: ${title}\n` +
    `Author: ${author}\n` +
    `Publisher: ${publisher}\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('📄 Book details saved at:', filePath);

  return filePath;
}

module.exports = {
  writeBookDetailsToFile,
};
