# Unhandled Error in MongoDB Promise-based Query

This repository demonstrates a common error in MongoDB queries when using promises. The error occurs when attempting to access a field from the query result without first checking for the existence of the result itself.  If the query returns no documents (null), an error is thrown.

## Bug Description:
The bug occurs because the `findOne` method might not return a document, resulting in a null value for `result`. Attempting to access `result.email` when `result` is null throws an error.

## Solution:
Properly check for the existence of the result before accessing its properties to avoid errors.

## How to Reproduce:
1. Clone the repository.
2. Make sure you have MongoDB and a Node.js environment setup.
3. Install the MongoDB Node.js driver: `npm install mongodb`
4. Run `bug.js` to see the error.
5. Run `bugSolution.js` to see the working solution.