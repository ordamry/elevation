function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100,
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];

const start = Date.now();

const filePromises = files.map(file => processFile(file.name, file.time));

Promise.all(filePromises)
  .then(results => {
    const duration = (Date.now() - start) / 1000;
    console.log(`✅ All files processed in ${duration}s`);
    console.log(results);
  })
  .catch(error => {
    console.error("❌ Processing failed:", error.message);
  });


