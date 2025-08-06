const fs = require('fs');

function readFileWithErrorHandling(filePath, callback) {
  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      if (statErr.code === 'ENOENT') {
        return callback(`File not found: ${filePath}`);
      }
      return callback(`Unknown error: ${statErr.message}`);
    }

    if (stats.isDirectory()) {
      return callback(`Expected a file but found a directory: ${filePath}`);
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        return callback(`Error reading file: ${readErr.message}`);
      }

      return callback(`File read successfully. Size: ${data.length} bytes`);
    });
  });
}

readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
});

// אם הקובץ קיים: → "File read successfully. Size: XXX bytes"
// אם לא קיים: → "File not found: existing.txt"
// אם זה תיקייה: → "Expected a file but found a directory: ..."
