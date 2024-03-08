function validateForm(bookName, bookAuthor, bookReleaseYear) {
  if (!bookName || !bookAuthor || !bookReleaseYear) {
      return false;
  }

  return true;
}

// Test cases
console.log("Test Case 1:");
console.log("Expected: false");
console.log("Result:", validateForm("", "Author Name", 2000));

console.log("\nTest Case 2:");
console.log("Expected: false");
console.log("Result:", validateForm("Book Name", "", 2000));

console.log("\nTest Case 3:");
console.log("Expected: false");
console.log("Result:", validateForm("Book Name", "Author Name", ""));

console.log("\nTest Case 4:");
console.log("Expected: true");
console.log("Result:", validateForm("Book Name", "Author Name", 2000));
