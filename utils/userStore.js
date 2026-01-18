const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'output');

function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

function appendUserRecord(record, filename = 'demoqa-users.jsonl') {
  ensureOutputDir();
  const filePath = path.join(OUTPUT_DIR, filename);
  fs.appendFileSync(filePath, `${JSON.stringify(record)}\n`, 'utf8');
  return filePath;
}

function readLatestUserRecord(filename = 'demoqa-users.jsonl') {
  const filePath = path.join(OUTPUT_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error('User data file not found. Run user-creation test first.');
  }

  const lines = fs.readFileSync(filePath, 'utf8').trim().split('\n');
  return JSON.parse(lines[lines.length - 1]);
}

module.exports = {
  appendUserRecord,
  readLatestUserRecord,
};
