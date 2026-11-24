import * as fs from 'fs';
import * as path from 'path';

// The chosen entry line, kept as a plain string for transcript visibility
const ENTRY_LINE = "I secured a decisive moral victory. Unfortunately, the grading script confirmed moral victories do not pay out in USDC.";

async function main() {
  const outputDir = path.join(process.cwd(), 'output');
  const outputPath = path.join(outputDir, 'entry.txt');

  // Create /output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the single-line excuse to entry.txt
  fs.writeFileSync(outputPath, ENTRY_LINE + '\n', 'utf-8');

  console.log('Successfully wrote entry to /output/entry.txt');
}

main().catch((err) => {
  console.error('Failed to write entry:', err);
  process.exit(1);
});
