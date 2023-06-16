const fs = require('fs');

// Function to read file contents
function readFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File contents:', data);

    // Perform an expensive operation
    performExpensiveOperation();
  });
}

// Function to simulate an expensive operation
function performExpensiveOperation() {
  console.log('Performing an expensive operation...');
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log('Expensive operation result:', sum);
}

// Usage example
const filePath = 'path/to/your/file.txt';
readFileContents(filePath);
