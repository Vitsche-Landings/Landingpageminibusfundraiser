const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '../src/assets');

fs.readdir(assetsDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        if (!file.endsWith('.png')) return;

        const filePath = path.join(assetsDir, file);
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                console.error('Error reading file:', file, err);
                return;
            }

            // Check if content looks like a base64 string
            // It might start with data:image/png;base64, or just be the raw base64 string
            // We'll look for comma separator if data URI, otherwise treat whole thing as base64 if it's alphanumeric+symbols

            let base64Data = content.trim();
            let isBase64 = false;

            if (base64Data.startsWith('data:image')) {
                const parts = base64Data.split(',');
                if (parts.length > 1) {
                    base64Data = parts[1];
                    isBase64 = true;
                }
            } else {
                // Simple heuristic: check if it contains common base64 chars and no weird binary stuff at start
                // Real PNG binary starts with ‰PNG (89 50 4E 47 0D 0A 1A 0A)
                // If it DOESN'T start with that, and looks like text, we assume it's base64
                if (!content.startsWith('\x89PNG')) {
                    // It's likely base64 text
                    isBase64 = true;
                }
            }

            if (isBase64) {
                console.log(`Converting ${file}...`);
                const buffer = Buffer.from(base64Data, 'base64');
                fs.writeFile(filePath, buffer, (err) => {
                    if (err) {
                        console.error('Error writing file:', file, err);
                    } else {
                        console.log(`Successfully converted ${file}`);
                    }
                });
            } else {
                console.log(`Skipping ${file} - appears to be binary or unknown format.`);
            }
        });
    });
});
