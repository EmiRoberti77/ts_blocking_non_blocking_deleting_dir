# Directory Deletion Utility

This utility provides both **asynchronous** and **synchronous** methods to delete a directory in Node.js. It demonstrates the use of `fs/promises` and `fs` modules to handle file system operations efficiently.

## Code Overview

```typescript
import fsp from 'fs/promises';
import fs from 'fs';

// Asynchronous directory deletion
async function deleteDir(dir: string): Promise<void> {
  await fsp.rm(dir, { recursive: true, force: true });
  console.log(`\${dir} deleted`);
}

// Synchronous directory deletion
async function deleteDirSync(dir: string): Promise<void> {
  await fs.rmSync(dir, { recursive: true, force: true });
  console.log(`\${dir} deleted`);
}

console.log('Task1');
//deleteDir('deleteMe');
deleteDirSync('deleteMe');
console.log('Task2');
```

### Key Features:

1. **Asynchronous Deletion** (`deleteDir`):

   - Uses `fsp.rm` from `fs/promises` for non-blocking directory deletion.
   - Adds `{ recursive: true }` to ensure the directory and all its contents are deleted.
   - Includes `{ force: true }` to suppress errors if the directory does not exist.

2. **Synchronous Deletion** (`deleteDirSync`):
   - Uses `fs.rmSync` for blocking, synchronous directory deletion.
   - Also supports `{ recursive: true, force: true }` for robustness.

---

## Blocking vs. Non-Blocking Code

### **Non-Blocking Code (Asynchronous)**

- **Example**: `deleteDir`
- **Characteristics**:

  - Executes without waiting for the operation to complete.
  - Allows other tasks to run concurrently.
  - Results are typically handled using `Promise` or `async/await`.

- **Benefits**:

  - Increases efficiency, especially for I/O-bound operations.
  - Improves scalability by not blocking the main thread.

- **Example Behavior**:
  ```typescript
  console.log('Task1');
  deleteDir('deleteMe');
  console.log('Task2');
  // Output:
  // Task1
  // Task2
  // deleteMe deleted
  ```

### **Blocking Code (Synchronous)**

- **Example**: `deleteDirSync`
- **Characteristics**:

  - The program pauses execution until the operation completes.
  - Blocks other tasks until the current task finishes.

- **Benefits**:

  - Simpler to implement when order of execution is critical.
  - Useful for small, predictable tasks.

- **Example Behavior**:
  ```typescript
  console.log('Task1');
  deleteDirSync('deleteMe');
  console.log('Task2');
  // Output:
  // Task1
  // deleteMe deleted
  // Task2
  ```

---

## When to Use Which?

- **Non-Blocking Code**:

  - Preferred for I/O-intensive or long-running operations in production.
  - Keeps the application responsive by not blocking the event loop.

- **Blocking Code**:
  - Suitable for small tasks during initialization or scripts where execution order is critical.
  - Avoid using in performance-critical sections of a server-side application.

---

## How to Run

1. **Install Node.js**:
   Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

2. **Create a Test Directory**:

   ```bash
   mkdir deleteMe
   ```

3. **Run the Code**:

   ```bash
   node index.js
   ```

   - For asynchronous deletion, uncomment the `deleteDir` line.
   - For synchronous deletion, leave the `deleteDirSync` line as is.

4. **Output**:
   Depending on the method used, you will see logs indicating the order of task execution.

---

## Notes

- Both methods include `{ recursive: true }` to handle nested directories.
- Adding `{ force: true }` ensures the function won't throw an error if the directory doesn't exist.

---

## License

This code is licensed under the MIT License.
